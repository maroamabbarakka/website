"use client";

import React, { useState } from "react";
import Link from "next/link";
import { initialSiteSettings } from "@/data/initialData";
import { ShieldCheck, FileText, CheckCircle2, AlertTriangle, ExternalLink, Save, Clock } from "lucide-react";

export default function AdminLegalPage() {
  const [settings, setSettings] = useState(initialSiteSettings);
  const [privacyVersion, setPrivacyVersion] = useState("2026-09-v1");
  const [lastReviewed, setLastReviewed] = useState("2026-09-15");
  const [dpoContact, setDpoContact] = useState("privacy@maroa.co.id");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const checklistItems = [
    {
      title: "Kebijakan Privasi (Privacy Notice) UU PDP No. 27/2022",
      path: "/privacy",
      status: "Aktif & Terverifikasi",
      ok: true,
      desc: "Menyediakan dasar pemrosesan, hak subjek data, retensi, dan kontak pelindungan data.",
    },
    {
      title: "Syarat dan Ketentuan Penggunaan (Terms of Use)",
      path: "/terms",
      status: "Aktif & Terverifikasi",
      ok: true,
      desc: "Mengatur hak kekayaan intelektual, batasan tanggung jawab, dan yurisdiksi hukum Indonesia.",
    },
    {
      title: "Kebijakan Cookie & Preferensi Pengguna",
      path: "/cookies",
      status: "Aktif & Tersimpan Lokal",
      ok: true,
      desc: "Menghormati preferensi cookie pengguna tanpa pelacakan pihak ketiga invasif.",
    },
    {
      title: "Informasi Legalitas Perusahaan (Corporate Disclosure)",
      path: "/legal",
      status: "Aktif",
      ok: true,
      desc: "Menampilkan entitas resmi PT MAROA MEDIA MABBARAKKA dan domisili hukum.",
    },
    {
      title: "Responsible Vulnerability Disclosure Policy",
      path: "/security",
      status: "Aktif",
      ok: true,
      desc: "Kanal pelaporan kerentanan keamanan informasi secara etis.",
    },
    {
      title: "Pernyataan Aksesibilitas Web (WCAG 2.2 AA)",
      path: "/accessibility",
      status: "Aktif",
      ok: true,
      desc: "Komitmen kepatuhan aksesibilitas untuk seluruh pengguna.",
    },
  ];

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-maroa-black">Kepatuhan Hukum, Privasi & Regulasi PSE</h1>
        <p className="text-xs text-maroa-gray-700 mt-1">
          Pengelolaan metadata legalitas perusahaan, kesiapan pendaftaran PSE Komdigi, dan inventarisasi kepatuhan UU Pelindungan Data Pribadi (UU PDP).
        </p>
      </div>

      {isSaved && (
        <div className="p-4 rounded-maroa-sm bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Pengaturan legalitas dan metadata kepatuhan berhasil diperbarui.</span>
        </div>
      )}

      {/* PSE Readiness Alert */}
      <div className="bg-amber-50 border border-amber-200 rounded-maroa-md p-5 flex flex-col sm:flex-row items-start gap-4">
        <div className="p-2 rounded bg-amber-100 text-amber-800 shrink-0">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div className="space-y-2 text-xs text-amber-900">
          <h2 className="font-bold text-sm">Status Kepatuhan Badge PSE Komdigi</h2>
          <p className="leading-relaxed">
            Sesuai Peraturan Menkominfo No. 5/2020 dan klausul tata kelola MAROA, tautan atau badge resmi <strong>&quot;PSE Terdaftar&quot;</strong> pada footer situs publik <strong>wajib disembunyikan</strong> sampai Tanda Daftar Penyelenggara Sistem Elektronik (TDPSE) resmi diterbitkan oleh Kementerian Komdigi.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <span className="font-semibold">Status Saat Ini:</span>
            <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${settings.pseRegistered ? "bg-emerald-200 text-emerald-900" : "bg-amber-200 text-amber-900"}`}>
              {settings.pseRegistered ? "TDPSE Diterbitkan" : "Dalam Proses Registrasi"}
            </span>
          </div>
        </div>
      </div>

      {/* Form Legal Metadata */}
      <form onSubmit={handleSave} className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 sm:p-8 space-y-6 shadow-card">
        <h2 className="text-sm font-bold text-maroa-black border-b border-maroa-gray-200 pb-3 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-maroa-red" />
          <span>Metadata Legalitas & Data Teknis PSE</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Nomor Induk Berusaha (NIB)</label>
            <input
              type="text"
              value={settings.nibNumber || ""}
              onChange={(e) => setSettings({ ...settings, nibNumber: e.target.value })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
              placeholder="Contoh: 0123456789101"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Nomor Registrasi TDPSE (Komdigi)</label>
            <input
              type="text"
              value={settings.pseRegistrationNumber || ""}
              onChange={(e) => setSettings({ ...settings, pseRegistrationNumber: e.target.value || null })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
              placeholder="Kosongkan jika belum terbit"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Versi Notice Persetujuan Privasi (Consent Text)</label>
            <input
              type="text"
              value={privacyVersion}
              onChange={(e) => setPrivacyVersion(e.target.value)}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Email Resmi Kontak Pelindungan Data (DPO)</label>
            <input
              type="email"
              value={dpoContact}
              onChange={(e) => setDpoContact(e.target.value)}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Tanggal Terakhir Tinjauan Dokumen Legal</label>
            <div className="relative">
              <input
                type="date"
                value={lastReviewed}
                onChange={(e) => setLastReviewed(e.target.value)}
                className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-maroa-charcoal">Publikasikan Badge PSE di Footer</label>
            <select
              value={settings.pseRegistered ? "true" : "false"}
              onChange={(e) => setSettings({ ...settings, pseRegistered: e.target.value === "true" })}
              className="w-full p-2.5 rounded-maroa-sm border border-maroa-gray-300 text-xs focus:ring-1 focus:ring-maroa-red outline-none bg-white"
            >
              <option value="false">Sembunyikan (Belum Memiliki TDPSE)</option>
              <option value="true">Tampilkan (TDPSE Resmi Sudah Diterbitkan)</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-maroa-gray-200 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-maroa-sm bg-maroa-red text-white text-xs font-semibold hover:bg-maroa-red-dark transition-colors shadow-sm"
          >
            <Save className="h-4 w-4" />
            <span>Simpan Pengaturan Legalitas</span>
          </button>
        </div>
      </form>

      {/* Compliance Inventory Table */}
      <div className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 sm:p-8 space-y-4 shadow-card">
        <h2 className="text-sm font-bold text-maroa-black border-b border-maroa-gray-200 pb-3 flex items-center gap-2">
          <FileText className="h-4 w-4 text-maroa-red" />
          <span>Inventarisasi Dokumen Kepatuhan Publik</span>
        </h2>

        <div className="divide-y divide-maroa-gray-100">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 font-bold text-maroa-black">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-maroa-gray-700 pl-5">{item.desc}</p>
              </div>

              <div className="flex items-center gap-3 sm:shrink-0 pl-5 sm:pl-0">
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
                  {item.status}
                </span>
                <Link
                  href={item.path}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-maroa-red hover:underline font-semibold"
                >
                  <span>Buka Halaman</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
