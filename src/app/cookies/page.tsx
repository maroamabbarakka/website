"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, Check } from "lucide-react";

export default function CookiesPage() {
  const [consentState, setConsentState] = useState<string>("accepted");
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("maroa_cookie_consent");
    if (saved) {
      setConsentState(saved);
    }
  }, []);

  const handleSavePreferences = (choice: string) => {
    localStorage.setItem("maroa_cookie_consent", choice);
    setConsentState(choice);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="w-full bg-maroa-white py-16 lg:py-20">
      <div className="container-maroa max-w-4xl">
        {/* Header */}
        <div className="pb-8 border-b border-maroa-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroa-gray-100 text-maroa-charcoal text-xs font-semibold uppercase tracking-wider mb-3">
            <Cookie className="h-3.5 w-3.5 text-maroa-red" />
            <span>Transparansi & Preferensi Privasi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-maroa-black">
            Kebijakan Cookie & Preferensi Analitik
          </h1>
          <p className="text-xs text-maroa-gray-500 mt-2">
            Terakhir Diperbarui: 15 September 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-10 space-y-8 text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">1. Apa Itu Cookie?</h2>
            <p>
              Cookie adalah berkas data kecil yang disimpan pada peramban (browser) perangkat Anda saat mengunjungi sebuah situs web. Cookie digunakan secara luas untuk menjaga situs web berfungsi sebagaimana mestinya, mengamankan komunikasi, dan memberikan pengalaman navigasi yang lebih efisien.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-maroa-black">2. Kategori Cookie pada Situs MAROA</h2>
            <div className="space-y-4">
              <div className="p-5 rounded-maroa-md border border-maroa-gray-300 bg-maroa-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-maroa-black text-base">A. Cookie Esensial (Wajib Aktif)</h3>
                  <span className="text-xs px-2.5 py-1 rounded bg-maroa-charcoal text-white font-semibold">Selalu Aktif</span>
                </div>
                <p className="text-xs sm:text-sm text-maroa-gray-700 mt-2 leading-relaxed">
                  Cookie teknis yang mutlak diperlukan untuk operasional dasar situs, pemeliharaan sesi otentikasi internal, perlindungan keamanan terhadap Cross-Site Request Forgery (CSRF), serta verifikasi integritas permintaan (App Check). Kategori ini tidak dapat dinonaktifkan.
                </p>
              </div>

              <div className="p-5 rounded-maroa-md border border-maroa-gray-300 bg-maroa-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-maroa-black text-base">B. Cookie Analitik & Performa (Opsional)</h3>
                  <span className="text-xs px-2.5 py-1 rounded bg-maroa-gray-100 text-maroa-charcoal font-semibold">Dapat Disesuaikan</span>
                </div>
                <p className="text-xs sm:text-sm text-maroa-gray-700 mt-2 leading-relaxed">
                  Membantu kami memahami bagaimana pengunjung berinteraksi dengan halaman situs secara anonim teragregasi (misalnya: durasi kunjungan, halaman yang paling sering dibuka) guna peningkatan performa layanan. Kami tidak melacak data identitas pribadi individual.
                </p>
              </div>
            </div>
          </section>

          {/* Panel Kontrol Pengaturan Pengguna */}
          <section className="p-6 sm:p-8 rounded-maroa-lg bg-maroa-gray-100/80 border border-maroa-gray-300 space-y-4">
            <h2 className="text-lg font-bold text-maroa-black">Kelola Preferensi Anda Saat Ini</h2>
            <p className="text-xs sm:text-sm text-maroa-gray-700 leading-relaxed">
              Pilihan status preferensi Anda saat ini:{" "}
              <strong className="text-maroa-charcoal uppercase">{consentState === "accepted" ? "Seluruh Cookie Diizinkan" : "Hanya Cookie Esensial"}</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleSavePreferences("essential_only")}
                className={`px-4 py-2 rounded-maroa-sm text-xs font-semibold transition-colors ${
                  consentState === "essential_only"
                    ? "bg-maroa-charcoal text-white"
                    : "bg-maroa-white border border-maroa-gray-300 text-maroa-charcoal hover:bg-maroa-gray-200"
                }`}
              >
                Gunakan Hanya Cookie Esensial
              </button>
              <button
                type="button"
                onClick={() => handleSavePreferences("accepted")}
                className={`px-5 py-2 rounded-maroa-sm text-xs font-semibold transition-colors ${
                  consentState === "accepted"
                    ? "bg-maroa-red text-white shadow-sm"
                    : "bg-maroa-white border border-maroa-gray-300 text-maroa-charcoal hover:bg-maroa-gray-200"
                }`}
              >
                Setujui Semua Cookie (Termasuk Analitik)
              </button>
            </div>

            {savedMessage && (
              <div className="pt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1.5 animate-fade-in">
                <Check className="h-4 w-4" />
                <span>Preferensi cookie Anda berhasil disimpan!</span>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
