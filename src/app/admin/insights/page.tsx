"use client";

import React from "react";
import Link from "next/link";
import { initialInsights } from "@/data/initialData";
import { Badge } from "@/components/ui/Badge";
import { FileText, Eye, CheckCircle2 } from "lucide-react";

export default function AdminInsightsPage() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-maroa-black">Manajemen Wawasan & Artikel</h1>
        <p className="text-xs text-maroa-gray-700 mt-1">
          Kelola artikel korporat, pemikiran industri, dan ulasan kapabilitas MAROA.
        </p>
      </div>

      <div className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md shadow-card overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-maroa-gray-100 text-maroa-charcoal font-semibold uppercase tracking-wider border-b border-maroa-gray-300">
            <tr>
              <th className="p-4">Judul Artikel</th>
              <th className="p-4">Penulis</th>
              <th className="p-4">Tanggal Tayang</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-maroa-gray-100 text-maroa-gray-700">
            {initialInsights.map((insight) => (
              <tr key={insight.id} className="hover:bg-maroa-gray-100/40">
                <td className="p-4 font-bold text-maroa-black max-w-xs truncate">
                  {insight.title}
                </td>
                <td className="p-4">{insight.authorDisplayName}</td>
                <td className="p-4">{insight.publishedAt}</td>
                <td className="p-4">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 capitalize">
                    {insight.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Link
                    href={`/insights/${insight.slug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-maroa-red hover:underline"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Lihat</span>
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
