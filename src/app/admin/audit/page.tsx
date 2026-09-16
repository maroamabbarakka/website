"use client";

import React from "react";
import { Shield, Clock, UserCheck } from "lucide-react";

export default function AdminAuditPage() {
  const auditLogs = [
    {
      action: "SISTEM_INITIALIZED",
      actor: "superadmin@maroa.co.id",
      target: "siteSettings/global",
      timestamp: "2026-09-15 23:45:00",
      description: "Inisialisasi profil dasar badan usaha dan ketentuan keamanan PSE.",
    },
    {
      action: "PROJECT_PUBLISHED",
      actor: "superadmin@maroa.co.id",
      target: "projects/regional-tech-activation",
      timestamp: "2026-09-15 23:56:00",
      description: "Publikasi studi kasus terverifikasi Regional Digital Transformation Summit.",
    },
    {
      action: "RULES_ENFORCED",
      actor: "system/security-officer",
      target: "firestore.rules",
      timestamp: "2026-09-16 00:10:00",
      description: "Penerapan aturan deny-by-default dan isolasi data leads sesuai UU PDP No. 27/2022.",
    },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-maroa-black">Log Audit Aktivitas Sistem</h1>
        <p className="text-xs text-maroa-gray-700 mt-1">
          Catatan rekam jejak aksi penting CMS untuk transparansi dan kepatuhan audit internal.
        </p>
      </div>

      <div className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md shadow-card overflow-hidden">
        <div className="p-4 bg-maroa-gray-100/80 border-b border-maroa-gray-300 flex items-center gap-2 text-xs font-semibold text-maroa-charcoal uppercase tracking-wider">
          <Shield className="h-4 w-4 text-maroa-red" />
          <span>Rekam Jejak Operasional Terverifikasi</span>
        </div>

        <div className="divide-y divide-maroa-gray-100 text-xs">
          {auditLogs.map((log, idx) => (
            <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-maroa-gray-50">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-maroa-black font-mono text-[11px] px-2 py-0.5 rounded bg-maroa-gray-100">
                    {log.action}
                  </span>
                  <span className="text-maroa-gray-500 font-mono text-[11px]">{log.target}</span>
                </div>
                <p className="text-maroa-gray-700">{log.description}</p>
              </div>

              <div className="shrink-0 text-right sm:text-left sm:shrink-0 flex flex-col sm:items-end text-maroa-gray-500 text-[11px]">
                <span className="font-medium text-maroa-charcoal">{log.actor}</span>
                <span>{log.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
