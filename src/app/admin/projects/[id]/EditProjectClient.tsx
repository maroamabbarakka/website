"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Project, ProjectCategory } from "@/lib/types";
import { ArrowLeft, Save, Eye, CheckCircle2 } from "lucide-react";

export function EditProjectClient({ initialProject }: { initialProject: Project }) {
  const router = useRouter();
  const [project, setProject] = useState<Project>(initialProject);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/projects"
            className="p-2 rounded-maroa-sm bg-maroa-white border border-maroa-gray-300 text-maroa-gray-700 hover:text-maroa-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-maroa-black">Edit Studi Kasus</h1>
            <p className="text-xs text-maroa-gray-700 mt-0.5">
              ID: <code className="font-mono text-maroa-charcoal">{project.id}</code>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/work/${project.slug}`}
            target="_blank"
            className="inline-flex items-center gap-1 px-3 py-2 rounded-maroa-sm bg-maroa-white border border-maroa-gray-300 text-xs font-semibold text-maroa-gray-700 hover:text-maroa-black transition-colors"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Lihat Live</span>
          </Link>
        </div>
      </div>

      {isSaved && (
        <div className="p-4 rounded-maroa-sm bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Perubahan studi kasus berhasil disimpan ke dalam state data lokal CMS.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 sm:p-8 space-y-6 shadow-card">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-semibold text-maroa-charcoal">Judul Proyek</label>
            <input
              type="text"
              required
              value={project.title}
              onChange={(e) => setProject({ ...project, title: e.target.value })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Nama Klien / Instansi</label>
            <input
              type="text"
              required
              value={project.clientDisplayName}
              onChange={(e) => setProject({ ...project, clientDisplayName: e.target.value })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Kategori</label>
            <select
              value={project.category}
              onChange={(e) => setProject({ ...project, category: e.target.value as ProjectCategory })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none bg-white"
            >
              <option value="events">Events & Experiences</option>
              <option value="multimedia">Multimedia & Studio</option>
              <option value="digital">Digital & Web Applications</option>
              <option value="integrated">Integrated / Cross-Pillar</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Tahun Pelaksanaan</label>
            <input
              type="text"
              required
              value={project.year}
              onChange={(e) => setProject({ ...project, year: e.target.value })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Status Publikasi</label>
            <select
              value={project.isPublished ? "published" : "draft"}
              onChange={(e) => setProject({ ...project, isPublished: e.target.value === "published" })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none bg-white"
            >
              <option value="published">Tayang Publik (Published)</option>
              <option value="draft">Draf Internal (Draft)</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-maroa-charcoal">Ringkasan Eksekutif</label>
          <textarea
            rows={2}
            required
            value={project.summary}
            onChange={(e) => setProject({ ...project, summary: e.target.value })}
            className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Tantangan (Challenge)</label>
            <textarea
              rows={3}
              value={project.challenge}
              onChange={(e) => setProject({ ...project, challenge: e.target.value })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Pendekatan (Approach)</label>
            <textarea
              rows={3}
              value={project.approach}
              onChange={(e) => setProject({ ...project, approach: e.target.value })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Eksekusi (Execution)</label>
            <textarea
              rows={3}
              value={project.execution}
              onChange={(e) => setProject({ ...project, execution: e.target.value })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Hasil (Outcome)</label>
            <textarea
              rows={3}
              value={project.outcome}
              onChange={(e) => setProject({ ...project, outcome: e.target.value })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-maroa-gray-200 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => router.push("/admin/projects")}
            className="px-4 py-2 rounded-maroa-sm border border-maroa-gray-300 text-xs font-semibold text-maroa-gray-700 hover:bg-maroa-gray-100 transition-colors"
          >
            Batal
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-maroa-sm bg-maroa-red text-white text-xs font-semibold hover:bg-maroa-red-dark transition-colors shadow-sm"
          >
            <Save className="h-4 w-4" />
            <span>Simpan Perubahan</span>
          </button>
        </div>
      </form>
    </div>
  );
}
