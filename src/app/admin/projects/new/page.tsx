"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Check, AlertCircle } from "lucide-react";
import { saveProject, validateProjectPublishability } from "@/lib/projectStorage";
import { Project, ProjectCategory } from "@/lib/types";

export default function NewProjectPage() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "events" as ProjectCategory,
    clientDisplayName: "",
    year: "2026",
    summary: "",
    role: "",
    rightsStatus: "Karya Desain Orisinal MAROA",
    sourceCredit: "",
    sourceUrl: "",
    githubUrl: "",
    heroImage: "/portfolio/covers/gemudaya-festival-majene-2026-cover-1600x900.webp",
    services: "Event Management, Production Coordination",
    challenge: "",
    approach: "",
    execution: "",
    outcome: "",
    isPublished: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === "title" && !prev.slug
          ? { slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") }
          : {}),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const projectData: Project = {
      id: `proj-${Date.now()}`,
      slug: formData.slug.trim(),
      title: formData.title.trim(),
      category: formData.category,
      clientDisplayName: formData.clientDisplayName.trim(),
      year: formData.year.trim(),
      summary: formData.summary.trim(),
      heroImage: formData.heroImage.trim(),
      thumbnail: formData.heroImage.trim(),
      role: formData.role.trim(),
      rightsStatus: formData.rightsStatus,
      sourceCredit: formData.sourceCredit.trim() || undefined,
      sourceUrl: formData.sourceUrl.trim() || undefined,
      githubUrl: formData.githubUrl.trim() || undefined,
      services: formData.services.split(",").map((s) => s.trim()).filter(Boolean),
      challenge: formData.challenge.trim(),
      approach: formData.approach.trim(),
      execution: formData.execution.trim(),
      outcome: formData.outcome.trim(),
      gallery: [formData.heroImage.trim()],
      isFeatured: false,
      isPublished: formData.isPublished,
      publishedAt: new Date().toISOString().split("T")[0],
    };

    // Validasi kelayakan jika ingin langsung dipublikasikan
    if (formData.isPublished) {
      const validation = validateProjectPublishability(projectData);
      if (!validation.isValid) {
        setErrorMessage(
          `Tidak dapat mempublikasikan proyek. Bidang wajib berikut belum lengkap: ${validation.missingFields.join(", ")}. Anda dapat menghapus centang 'Publikasikan' untuk menyimpan sebagai draf terlebih dahulu.`
        );
        return;
      }
    }

    // Simpan secara permanen di storage
    const result = saveProject(projectData);
    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    setSaved(true);
    setTimeout(() => {
      router.push("/admin/projects");
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/projects"
          className="p-2 rounded-maroa-sm bg-maroa-white border border-maroa-gray-300 hover:bg-maroa-gray-100 text-maroa-charcoal transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-maroa-black">Tambah Studi Kasus Proyek</h1>
          <p className="text-xs text-maroa-gray-700 mt-0.5">
            Publikasikan karya nyata portofolio MAROA dengan fakta, data riil, dan hak izin yang sah.
          </p>
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-maroa-md bg-red-50 border border-red-300 text-red-900 text-xs flex items-start gap-3">
          <AlertCircle className="h-4 w-4 text-maroa-red shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Gagal Menyimpan / Memvalidasi:</span>
            <p className="mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 sm:p-8 shadow-card space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Judul Proyek / Studi Kasus <span className="text-maroa-red">*</span>
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Contoh: National Business Summit 2026"
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Slug URL <span className="text-maroa-red">*</span>
            </label>
            <input
              type="text"
              name="slug"
              required
              value={formData.slug}
              onChange={handleChange}
              placeholder="national-business-summit-2026"
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Kategori Pilar <span className="text-maroa-red">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink bg-maroa-white focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            >
              <option value="events">Events & Experiences</option>
              <option value="multimedia">Multimedia & Studio</option>
              <option value="digital">Digital & Web Applications</option>
              <option value="integrated">Integrated Solution</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Nama Klien / Instansi <span className="text-maroa-red">*</span>
            </label>
            <input
              type="text"
              name="clientDisplayName"
              required
              value={formData.clientDisplayName}
              onChange={handleChange}
              placeholder="Contoh: Forum Inovasi Daerah"
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Tahun Eksekusi <span className="text-maroa-red">*</span>
            </label>
            <input
              type="text"
              name="year"
              required
              value={formData.year}
              onChange={handleChange}
              placeholder="2026"
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Peran Nyata MAROA <span className="text-maroa-red">*</span>
            </label>
            <input
              type="text"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              placeholder="Contoh: Desain Grafis Poster & Manajemen Layar Videotron"
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Status Hak Penggunaan Media <span className="text-maroa-red">*</span>
            </label>
            <select
              name="rightsStatus"
              value={formData.rightsStatus}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink bg-maroa-white focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            >
              <option value="Karya Desain Orisinal MAROA">Karya Desain Orisinal MAROA</option>
              <option value="Dokumentasi Pelaksanaan & Arsip Resmi MAROA">Dokumentasi Pelaksanaan & Arsip Resmi MAROA</option>
              <option value="Dokumentasi Resmi Kerjasama Klien">Dokumentasi Resmi Kerjasama Klien</option>
              <option value="Rilis Publik Berlisensi">Rilis Publik Berlisensi</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Kredit Sumber / Fotografer
            </label>
            <input
              type="text"
              name="sourceCredit"
              value={formData.sourceCredit}
              onChange={handleChange}
              placeholder="Contoh: Humas Pemkab Sidrap"
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Tautan Verifikasi / Berita Resmi (URL)
            </label>
            <input
              type="url"
              name="sourceUrl"
              value={formData.sourceUrl}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Tautan Repositori GitHub (Jika ada)
            </label>
            <input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com/..."
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
            Path Cover Gambar (16:9) <span className="text-maroa-red">*</span>
          </label>
          <input
            type="text"
            name="heroImage"
            required
            value={formData.heroImage}
            onChange={handleChange}
            placeholder="/portfolio/covers/nama-file-1600x900.webp"
            className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
            Layanan Terlibat (Pisahkan dengan koma)
          </label>
          <input
            type="text"
            name="services"
            value={formData.services}
            onChange={handleChange}
            placeholder="Stage Videotron, 3D Mapping, Live Production"
            className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
            Ringkasan Eksekutif <span className="text-maroa-red">*</span>
          </label>
          <textarea
            name="summary"
            rows={2}
            required
            value={formData.summary}
            onChange={handleChange}
            placeholder="Ringkasan 2-3 kalimat mengenai proyek faktual..."
            className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Tantangan Proyek (Challenge) <span className="text-maroa-red">*</span>
            </label>
            <textarea
              name="challenge"
              rows={3}
              required
              value={formData.challenge}
              onChange={handleChange}
              placeholder="Uraikan tantangan spesifik klien secara riil..."
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Pendekatan Solusi (Approach) <span className="text-maroa-red">*</span>
            </label>
            <textarea
              name="approach"
              rows={3}
              required
              value={formData.approach}
              onChange={handleChange}
              placeholder="Uraikan strategi formulasi solusi MAROA..."
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Eksekusi Teknis (Execution) <span className="text-maroa-red">*</span>
            </label>
            <textarea
              name="execution"
              rows={3}
              required
              value={formData.execution}
              onChange={handleChange}
              placeholder="Uraikan implementasi teknis di lapangan..."
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Hasil Faktual (Outcome) <span className="text-maroa-red">*</span>
            </label>
            <textarea
              name="outcome"
              rows={3}
              required
              value={formData.outcome}
              onChange={handleChange}
              placeholder="Uraikan hasil nyata tanpa angka fiktif..."
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            id="isPublished"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
            className="h-4 w-4 rounded border-maroa-gray-300 text-maroa-red focus:ring-maroa-red"
          />
          <label htmlFor="isPublished" className="text-xs font-semibold text-maroa-charcoal cursor-pointer">
            Langsung Publikasikan di Halaman Karya (/work) — Wajib lolos validasi prasyarat
          </label>
        </div>

        <div className="pt-4 border-t border-maroa-gray-200 flex items-center justify-between">
          <Link
            href="/admin/projects"
            className="px-4 py-2 text-xs font-medium text-maroa-gray-600 hover:text-maroa-black transition-colors"
          >
            Batal
          </Link>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-maroa-sm bg-maroa-red hover:bg-maroa-red-dark text-white font-semibold text-xs transition-colors shadow-sm"
          >
            {saved ? (
              <>
                <Check className="h-4 w-4" />
                <span>Berhasil Disimpan Permanen!</span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                <span>Simpan Studi Kasus</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
