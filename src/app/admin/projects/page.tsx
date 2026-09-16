"use client";

import React, { useState } from "react";
import Link from "next/link";
import { initialProjects } from "@/data/initialData";
import { Project } from "@/lib/types";
import { Plus, Eye, CheckCircle2, XCircle } from "lucide-react";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const togglePublish = (id: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isPublished: !p.isPublished } : p))
    );
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-maroa-black">Manajemen Portofolio Proyek</h1>
          <p className="text-xs text-maroa-gray-700 mt-1">
            Kelola studi kasus yang dipublikasikan pada halaman publik /work dan beranda.
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-maroa-sm bg-maroa-red text-white text-xs font-semibold hover:bg-maroa-red-dark transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" />
          <span>Tambah Studi Kasus</span>
        </Link>
      </div>

      {/* Table Container */}
      <div className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md shadow-card overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-maroa-gray-100/80 text-maroa-charcoal font-semibold uppercase tracking-wider border-b border-maroa-gray-300">
            <tr>
              <th className="p-4">Judul Studi Kasus</th>
              <th className="p-4">Klien</th>
              <th className="p-4">Kategori</th>
              <th className="p-4">Tahun</th>
              <th className="p-4">Status Publikasi</th>
              <th className="p-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-maroa-gray-100 text-maroa-gray-700">
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-maroa-gray-100/40 transition-colors">
                <td className="p-4 font-bold text-maroa-black max-w-xs truncate">
                  {p.title}
                </td>
                <td className="p-4">{p.clientDisplayName}</td>
                <td className="p-4">
                  <span className="px-2 py-0.5 rounded bg-maroa-gray-100 text-maroa-charcoal font-medium uppercase text-[11px]">
                    {p.category}
                  </span>
                </td>
                <td className="p-4">{p.year}</td>
                <td className="p-4">
                  <button
                    type="button"
                    onClick={() => togglePublish(p.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                      p.isPublished
                        ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {p.isPublished ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Published</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-3.5 w-3.5" />
                        <span>Draft</span>
                      </>
                    )}
                  </button>
                </td>
                <td className="p-4 text-right space-x-3">
                  <Link
                    href={`/admin/projects/${p.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-maroa-charcoal hover:text-maroa-black hover:underline"
                  >
                    <span>Edit</span>
                  </Link>
                  <Link
                    href={`/work/${p.slug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-maroa-red hover:underline"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Lihat Halaman</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
