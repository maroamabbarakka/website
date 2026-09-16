"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Project } from "@/lib/types";
import { getAllProjects, saveProject, validateProjectPublishability, exportProjectsToJson } from "@/lib/projectStorage";
import { Plus, Eye, CheckCircle2, XCircle, Download, AlertTriangle } from "lucide-react";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [validationAlert, setValidationAlert] = useState<{ id: string; missing: string[] } | null>(null);

  useEffect(() => {
    setProjects(getAllProjects());
  }, []);

  const togglePublish = (id: string) => {
    const target = projects.find((p) => p.id === id);
    if (!target) return;

    // Jika ingin mempublikasikan (dari draft -> publish), lakukan validasi prasyarat
    if (!target.isPublished) {
      const validation = validateProjectPublishability(target);
      if (!validation.isValid) {
        setValidationAlert({ id, missing: validation.missingFields });
        return;
      }
    }

    setValidationAlert(null);
    const updated = { ...target, isPublished: !target.isPublished };
    const res = saveProject(updated);

    if (res.success) {
      setProjects(getAllProjects());
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-maroa-black">Manajemen Portofolio Proyek</h1>
          <p className="text-xs text-maroa-gray-700 mt-1">
            Kelola studi kasus faktual MAROA. Data tersimpan secara permanen pada penyimpanan admin.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={exportProjectsToJson}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-maroa-sm bg-maroa-white border border-maroa-gray-300 text-maroa-charcoal text-xs font-semibold hover:bg-maroa-gray-100 transition-colors shadow-sm"
            title="Unduh snapshot data JSON untuk arsip atau pembaruan repositori"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Ekspor Data JSON</span>
          </button>

          <Link
            href="/admin/projects/new"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-maroa-sm bg-maroa-red text-white text-xs font-semibold hover:bg-maroa-red-dark transition-colors shadow-sm"
          >
            <Plus className="h-4 w-4" />
            <span>Tambah Studi Kasus</span>
          </Link>
        </div>
      </div>

      {validationAlert && (
        <div className="p-4 rounded-maroa-md bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">Publikasi Dibatalkan — Data Wajib Belum Lengkap:</span>
            <p>
              Proyek ini tidak dapat dipublikasikan sebelum melengkapi bidang:{" "}
              <span className="font-semibold text-maroa-red">{validationAlert.missing.join(", ")}</span>.
            </p>
            <p className="text-amber-800 text-[11px]">
              Silakan klik tombol <strong>Edit</strong> untuk melengkapi data sebelum mengubah status ke Published.
            </p>
          </div>
        </div>
      )}

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
