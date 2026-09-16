"use client";

import React from "react";
import { initialServices } from "@/data/initialData";
import { Badge } from "@/components/ui/Badge";
import { Layers, CheckCircle2 } from "lucide-react";

export default function AdminServicesPage() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-maroa-black">Manajemen Pilar & Layanan</h1>
        <p className="text-xs text-maroa-gray-700 mt-1">
          Konfigurasi tiga pilar bisnis inti MAROA dan ventura sekunder kafe.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {initialServices.map((srv) => (
          <div
            key={srv.id}
            className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 shadow-card flex flex-col md:flex-row md:items-start justify-between gap-6"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <Badge variant={srv.category === "venture" ? "gray" : "red"}>
                  {srv.category.toUpperCase()}
                </Badge>
                <span className="text-xs text-maroa-gray-500">Urutan: 0{srv.order}</span>
              </div>
              <h2 className="text-lg font-bold text-maroa-black">{srv.title}</h2>
              <p className="text-xs sm:text-sm text-maroa-gray-700 leading-relaxed">{srv.description}</p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-maroa-charcoal block mb-1.5">Kapabilitas:</span>
                <div className="flex flex-wrap gap-1.5">
                  {srv.capabilities.map((c, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 rounded bg-maroa-gray-100 text-maroa-charcoal">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                Aktif Publik
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
