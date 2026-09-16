"use client";

import React, { useState } from "react";
import { initialSiteSettings } from "@/data/initialData";
import { SiteSettings } from "@/lib/types";
import { Save, Check, ShieldCheck, Building, AlertCircle } from "lucide-react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>(initialSiteSettings);
  const [saved, setSaved] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setSettings((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setSettings((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-maroa-black">Pengaturan Situs & Kepatuhan PSE</h1>
        <p className="text-xs text-maroa-gray-700 mt-1">
          Konfigurasi identitas korporat, kontak publik resmi, dan status pendaftaran PSE Komdigi.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Identitas Perusahaan */}
        <div className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 sm:p-8 shadow-card space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-maroa-gray-100">
            <Building className="h-4 w-4 text-maroa-red" />
            <h2 className="text-sm font-bold text-maroa-black">Profil Badan Usaha</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                Nama Resmi Badan Usaha
              </label>
              <input
                type="text"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                Nama Merek Dagang (Brand)
              </label>
              <input
                type="text"
                name="brandName"
                value={settings.brandName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Tagline Brand Positioning
            </label>
            <input
              type="text"
              name="tagline"
              value={settings.tagline}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                Email Korespondensi Publik
              </label>
              <input
                type="email"
                name="primaryEmail"
                value={settings.primaryEmail}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                Nomor Telepon Publik Resmi
              </label>
              <input
                type="text"
                name="phonePublic"
                value={settings.phonePublic}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
              Alamat Operasional Publik
            </label>
            <textarea
              name="addressPublic"
              rows={2}
              value={settings.addressPublic}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
            />
          </div>
        </div>

        {/* Status Kepatuhan PSE */}
        <div className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 sm:p-8 shadow-card space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-maroa-gray-100">
            <ShieldCheck className="h-4 w-4 text-maroa-red" />
            <h2 className="text-sm font-bold text-maroa-black">Kepatuhan PSE Lingkup Privat Komdigi</h2>
          </div>

          <div className="p-4 rounded-maroa-sm bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Aturan Regulasi:</strong> Sesuai panduan kepatuhan, nomor atau label tanda daftar PSE tidak boleh ditampilkan pada footer publik sebelum Tanda Daftar Penyelenggara Sistem Elektronik (TDPSE) resmi diterbitkan oleh Kementerian Komunikasi dan Digital.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="pseRegistered"
              name="pseRegistered"
              checked={settings.pseRegistered}
              onChange={handleChange}
              className="h-4 w-4 rounded border-maroa-gray-300 text-maroa-red focus:ring-maroa-red"
            />
            <label htmlFor="pseRegistered" className="text-xs font-semibold text-maroa-charcoal cursor-pointer">
              TDPSE Resmi Telah Terbit (Aktifkan untuk menampilkan badge di footer situs)
            </label>
          </div>

          {settings.pseRegistered && (
            <div>
              <label className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                Nomor Tanda Daftar PSE (TDPSE)
              </label>
              <input
                type="text"
                name="pseRegistrationNumber"
                value={settings.pseRegistrationNumber || ""}
                onChange={handleChange}
                placeholder="Contoh: 002134.01/DJAI.PSE/09/2026"
                className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal"
              />
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-maroa-sm bg-maroa-red hover:bg-maroa-red-dark text-white font-semibold text-xs transition-colors shadow-sm"
          >
            {saved ? (
              <>
                <Check className="h-4 w-4" />
                <span>Pengaturan Berhasil Disimpan!</span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                <span>Simpan Pengaturan</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
