"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Check } from "lucide-react";

export default function NewProjectPage() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "events",
    clientDisplayName: "",
    year: "2026",
    summary: "",
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
            Publikasikan karya nyata portofolio MAROA dengan fakta dan data riil.
          </p>
        </div>
      </div>

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
              Tahun Eksekusi
            </label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="2026"
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>
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
            placeholder="Ringkasan 2-3 kalimat mengenai proyek..."
            className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Tantangan (Challenge)
            </label>
            <textarea
              name="challenge"
              rows={3}
              value={formData.challenge}
              onChange={handleChange}
              placeholder="Uraikan tantangan spesifik klien..."
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Pendekatan (Approach)
            </label>
            <textarea
              name="approach"
              rows={3}
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
              Eksekusi Teknis (Execution)
            </label>
            <textarea
              name="execution"
              rows={3}
              value={formData.execution}
              onChange={handleChange}
              placeholder="Uraikan implementasi teknis di lapangan..."
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Hasil Faktual (Outcome)
            </label>
            <textarea
              name="outcome"
              rows={3}
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
            Langsung Publikasikan di Halaman Karya (/work)
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
                <span>Berhasil Disimpan!</span>
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
