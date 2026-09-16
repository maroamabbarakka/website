import React from "react";
import { ShieldCheck, Lock, AlertTriangle, Mail } from "lucide-react";
import { initialSiteSettings } from "@/data/initialData";

export const metadata = {
  title: "Keamanan Informasi & Responsible Disclosure — MAROA",
  description:
    "Komitmen keamanan informasi dan tata cara pelaporan kerentanan bertanggung jawab PT MAROA MEDIA MABBARAKKA.",
};

export default function SecurityPage() {
  return (
    <div className="w-full bg-maroa-white py-16 lg:py-20">
      <div className="container-maroa max-w-4xl">
        <div className="pb-8 border-b border-maroa-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroa-gray-100 text-maroa-charcoal text-xs font-semibold uppercase tracking-wider mb-3">
            <Lock className="h-3.5 w-3.5 text-maroa-red" />
            <span>Information Security & Disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-maroa-black">
            Keamanan Informasi & Pelaporan Kerentanan
          </h1>
          <p className="text-xs text-maroa-gray-500 mt-2">
            Pedoman pelaporan kerentanan (Responsible Vulnerability Disclosure Policy)
          </p>
        </div>

        <div className="mt-10 space-y-8 text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">Pendekatan Keamanan Kami</h2>
            <p>
              PT MAROA MEDIA MABBARAKKA memprioritaskan keamanan informasi dan privasi pengunjung. Arsitektur sistem kami dirancang dengan prinsip *defense-in-depth*:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Penyajian konten statis untuk meminimalkan permukaan serangan server-side.</li>
              <li>Enkripsi wajib seluruh lalu lintas jaringan menggunakan HTTPS (TLS 1.3) dan HSTS.</li>
              <li>Aturan keamanan basis data Firestore berbasis *deny-by-default* dan validasi RBAC ketat.</li>
              <li>Penerapan HTTP Security Headers (CSP, X-Content-Type-Options: nosniff, Referrer-Policy, Permissions-Policy).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">Kebijakan Pengungkapan Bertanggung Jawab</h2>
            <p>
              Jika Anda adalah peneliti keamanan independen dan menemukan potensi celah keamanan atau kerentanan teknis pada sistem kami, kami sangat mengapresiasi pelaporan Anda secara bertanggung jawab sebelum mempublikasikannya kepada publik.
            </p>
            <div className="p-4 rounded-maroa-md bg-maroa-gray-100 border border-maroa-gray-300 text-xs sm:text-sm space-y-2">
              <p className="font-semibold text-maroa-black">Pedoman Peneliti:</p>
              <ul className="list-disc pl-4 space-y-1 text-xs text-maroa-gray-700">
                <li>Jangan melakukan tindakan yang merusak integritas data atau mengganggu ketersediaan layanan publik (hindari uji coba DoS/DDoS).</li>
                <li>Jangan mengakses, menyalin, atau mengubah data pengguna lain yang bukan milik Anda.</li>
                <li>Beri kami waktu wajar untuk melakukan verifikasi dan perbaikan celah sebelum dipublikasikan.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">Kontak Tim Keamanan</h2>
            <p>
              Kirimkan rincian laporan teknis (Proof of Concept, langkah reproduksi, dampak) ke alamat email keamanan kami:
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-maroa-sm bg-maroa-charcoal text-white text-sm font-mono">
              <Mail className="h-4 w-4 text-maroa-red" />
              <span>security@maroa.co.id</span>
            </div>
            <p className="text-xs text-maroa-gray-500 mt-2">
              Alternatif kontak: {initialSiteSettings.primaryEmail}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
