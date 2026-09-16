import { Project } from "./types";
import { initialProjects } from "@/data/initialData";

const STORAGE_KEY = "maroa_projects_storage_v1";

/**
 * Mengambil seluruh proyek dengan menggabungkan initialProjects dan data kustom di localStorage.
 */
export function getAllProjects(): Project[] {
  if (typeof window === "undefined") {
    return initialProjects;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return initialProjects;
    }
    const customList: Project[] = JSON.parse(raw);
    if (!Array.isArray(customList)) {
      return initialProjects;
    }

    // Merge: timpa data initial jika ID sama, atau tambahkan proyek baru
    const map = new Map<string, Project>();
    initialProjects.forEach((p) => map.set(p.id, p));
    customList.forEach((p) => map.set(p.id, p));

    return Array.from(map.values()).sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
  } catch (err) {
    console.warn("Gagal membaca penyimpanan proyek lokal:", err);
    return [...initialProjects].sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
  }
}

/**
 * Menyimpan atau memperbarui satu proyek secara permanen di browser.
 */
export function saveProject(project: Project): { success: boolean; message: string } {
  if (typeof window === "undefined") {
    return { success: false, message: "Tidak dapat menyimpan di lingkungan server." };
  }

  try {
    const currentList = getAllProjects();
    const existingIndex = currentList.findIndex((p) => p.id === project.id);

    let updatedList: Project[];
    if (existingIndex >= 0) {
      updatedList = [...currentList];
      updatedList[existingIndex] = { ...project };
    } else {
      updatedList = [project, ...currentList];
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    return { success: true, message: "Proyek berhasil disimpan secara permanen di penyimpanan admin." };
  } catch (err: any) {
    return { success: false, message: `Gagal menyimpan: ${err?.message || "Kesalahan penyimpanan lokal"}` };
  }
}

/**
 * Menghapus proyek kustom secara permanen.
 */
export function deleteProject(id: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const currentList = getAllProjects();
    const filtered = currentList.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch {
    return false;
  }
}

/**
 * Validasi kelayakan sebelum proyek dapat dipublikasikan.
 */
export function validateProjectPublishability(project: Partial<Project>): {
  isValid: boolean;
  missingFields: string[];
} {
  const missing: string[] = [];

  if (!project.title?.trim()) missing.push("Judul Proyek");
  if (!project.slug?.trim()) missing.push("Slug URL");
  if (!project.clientDisplayName?.trim()) missing.push("Nama Klien");
  if (!project.year?.trim()) missing.push("Tahun Pelaksanaan");
  if (!project.summary?.trim()) missing.push("Ringkasan Eksekutif");
  if (!project.challenge?.trim()) missing.push("Uraian Tantangan Proyek");
  if (!project.approach?.trim()) missing.push("Uraian Pendekatan Solusi");
  if (!project.execution?.trim()) missing.push("Uraian Eksekusi Teknis");
  if (!project.outcome?.trim()) missing.push("Uraian Hasil & Dampak Faktual");
  if (!project.heroImage?.trim()) missing.push("Gambar Sampul 16:9 (Hero Image)");
  if (!project.role?.trim()) missing.push("Peran Nyata MAROA");
  if (!project.rightsStatus?.trim()) missing.push("Status Hak Penggunaan Media");

  return {
    isValid: missing.length === 0,
    missingFields: missing,
  };
}

/**
 * Ekspor seluruh data proyek ke berkas JSON yang dapat diunduh.
 */
export function exportProjectsToJson(): void {
  if (typeof window === "undefined") return;
  const data = getAllProjects();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `maroa_projects_export_${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
