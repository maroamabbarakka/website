import React from "react";
import Link from "next/link";
import { Accessibility, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Pernyataan Aksesibilitas (Accessibility Statement) — MAROA",
  description:
    "Komitmen aksesibilitas web PT MAROA MEDIA MABBARAKKA menuju kepatuhan standar WCAG 2.2 Level AA.",
};

export default function AccessibilityPage() {
  return (
    <div className="w-full bg-maroa-white py-16 lg:py-20">
      <div className="container-maroa max-w-4xl">
        <div className="pb-8 border-b border-maroa-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroa-gray-100 text-maroa-charcoal text-xs font-semibold uppercase tracking-wider mb-3">
            <Accessibility className="h-3.5 w-3.5 text-maroa-red" />
            <span>Standar Aksesibilitas Digital</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-maroa-black">
            Pernyataan Aksesibilitas
          </h1>
          <p className="text-xs text-maroa-gray-500 mt-2">
            Target Penerapan: Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
          </p>
        </div>

        <div className="mt-10 space-y-8 text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">Komitmen Kami</h2>
            <p>
              PT MAROA MEDIA MABBARAKKA berkomitmen untuk menyediakan antarmuka web yang inklusif, mudah dinavigasikan, dan dapat diakses oleh semua pengguna, termasuk penyandang disabilitas yang menggunakan teknologi bantu seperti pembaca layar (screen reader) dan navigasi keyboard.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">Fitur Aksesibilitas yang Diterapkan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-maroa-md border border-maroa-gray-300 bg-maroa-white flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-maroa-red shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-maroa-black text-sm">Navigasi Keyboard Penuh</h3>
                  <p className="text-xs text-maroa-gray-700 mt-1">Seluruh elemen interaktif dapat diakses melalui tabulasi keyboard dengan indikator fokus visual yang jelas.</p>
                </div>
              </div>

              <div className="p-4 rounded-maroa-md border border-maroa-gray-300 bg-maroa-white flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-maroa-red shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-maroa-black text-sm">Skip-to-Content Link</h3>
                  <p className="text-xs text-maroa-gray-700 mt-1">Tersedia tautan lompat langsung ke konten utama untuk efisiensi pengguna screen reader.</p>
                </div>
              </div>

              <div className="p-4 rounded-maroa-md border border-maroa-gray-300 bg-maroa-white flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-maroa-red shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-maroa-black text-sm">Kontras Warna Memadai</h3>
                  <p className="text-xs text-maroa-gray-700 mt-1">Rasio kontras warna teks terhadap latar belakang diverifikasi memenuhi rasio minimal WCAG AA.</p>
                </div>
              </div>

              <div className="p-4 rounded-maroa-md border border-maroa-gray-300 bg-maroa-white flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-maroa-red shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-maroa-black text-sm">Dukungan Reduced Motion</h3>
                  <p className="text-xs text-maroa-gray-700 mt-1">Animasi dinonaktifkan secara otomatis bagi pengguna yang menyetel preferensi kurangi gerakan.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">Umpan Balik & Bantuan Aksesibilitas</h2>
            <p>
              Jika Anda menemui kendala dalam mengakses konten apa pun pada situs ini, silakan hubungi kami via email di:{" "}
              <a href="mailto:maroamabbarakka@gmail.com" className="text-maroa-red font-semibold hover:underline">
                maroamabbarakka@gmail.com
              </a>
              . Kami akan dengan senang hati membantu Anda mendapatkan informasi yang dibutuhkan.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
