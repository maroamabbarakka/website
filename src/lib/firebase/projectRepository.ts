import { Project } from "@/lib/types";
import { initialProjects } from "@/data/initialData";
import { db } from "@/lib/firebase/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const COLLECTION_NAME = "projects";

/**
 * Mengambil seluruh proyek publik yang berstatus isPublished == true dari Firestore.
 * Menggunakan initialProjects sebagai fallback deterministik saat SSR atau saat offline.
 */
export async function getPublishedProjects(): Promise<Project[]> {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where("isPublished", "==", true)
    );
    const snap = await getDocs(q);
    if (!snap.empty) {
      const items: Project[] = [];
      snap.forEach((d) => {
        items.push({ id: d.id, ...d.data() } as Project);
      });
      return items.sort((a, b) =>
        (b.publishedAt || "").localeCompare(a.publishedAt || "")
      );
    }
  } catch (err) {
    console.warn("Firestore query getPublishedProjects gagal, menggunakan fallback data lokal:", err);
  }

  // Fallback data lokal yang terurut
  return [...initialProjects]
    .filter((p) => p.isPublished)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
}

/**
 * Mengambil seluruh proyek untuk panel admin (termasuk status draft dan review).
 */
export async function getAllAdminProjects(): Promise<Project[]> {
  try {
    const q = query(collection(db, COLLECTION_NAME));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const items: Project[] = [];
      snap.forEach((d) => {
        items.push({ id: d.id, ...d.data() } as Project);
      });
      return items.sort((a, b) =>
        (b.publishedAt || "").localeCompare(a.publishedAt || "")
      );
    }
  } catch (err) {
    console.warn("Firestore query getAllAdminProjects gagal, menggunakan fallback data lokal:", err);
  }

  return [...initialProjects].sort((a, b) =>
    (b.publishedAt || "").localeCompare(a.publishedAt || "")
  );
}

/**
 * Mengambil satu proyek berdasarkan ID atau Slug.
 */
export async function getProjectByIdOrSlug(idOrSlug: string): Promise<Project | null> {
  try {
    // 1. Cari berdasarkan Document ID
    const docRef = doc(db, COLLECTION_NAME, idOrSlug);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return { id: snap.id, ...snap.data() } as Project;
    }

    // 2. Cari berdasarkan Slug
    const q = query(collection(db, COLLECTION_NAME), where("slug", "==", idOrSlug));
    const slugSnap = await getDocs(q);
    if (!slugSnap.empty) {
      const first = slugSnap.docs[0];
      return { id: first.id, ...first.data() } as Project;
    }
  } catch (err) {
    console.warn(`Firestore getProjectByIdOrSlug (${idOrSlug}) gagal, memeriksa data lokal:`, err);
  }

  // Fallback lokal
  const found = initialProjects.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
  return found || null;
}

/**
 * Menyimpan atau memperbarui proyek di Cloud Firestore.
 */
export async function saveProjectToFirestore(
  project: Project
): Promise<{ success: boolean; message: string }> {
  try {
    const docRef = doc(db, COLLECTION_NAME, project.id);
    const payload = {
      ...project,
      updatedAt: new Date().toISOString(),
      serverTimestamp: serverTimestamp(),
    };
    await setDoc(docRef, payload, { merge: true });
    return {
      success: true,
      message: `Proyek '${project.title}' berhasil disimpan di Cloud Firestore.`,
    };
  } catch (err: any) {
    console.error("Gagal menyimpan proyek ke Firestore:", err);
    return {
      success: false,
      message: `Gagal menyimpan ke Firestore: ${err?.message || "Kesalahan otorisasi"}`,
    };
  }
}

/**
 * Menghapus proyek dari Cloud Firestore.
 */
export async function deleteProjectFromFirestore(
  projectId: string
): Promise<{ success: boolean; message: string }> {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, projectId));
    return {
      success: true,
      message: `Proyek dengan ID '${projectId}' berhasil dihapus dari Cloud Firestore.`,
    };
  } catch (err: any) {
    console.error("Gagal menghapus proyek dari Firestore:", err);
    return {
      success: false,
      message: `Gagal menghapus dari Firestore: ${err?.message || "Kesalahan otorisasi"}`,
    };
  }
}
