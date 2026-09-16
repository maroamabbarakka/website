import React from "react";
import Link from "next/link";
import Image from "next/image";
import { initialSiteSettings } from "@/data/initialData";
import { Scale, Building2, ShieldCheck, Mail, MapPin, FileCheck2, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Informasi Legalitas & Kepatuhan — PT MAROA MEDIA MABBARAKKA",
  description:
    "Informasi legalitas usaha, kepatuhan perizinan, dan tata kelola hukum PT MAROA MEDIA MABBARAKKA.",
};

export default function LegalPage() {
  return (
    <div className="w-full bg-maroa-white py-16 lg:py-20">
      <div className="container-maroa max-w-4xl">
        {/* Header */}
        <div className="pb-8 border-b border-maroa-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroa-gray-100 text-maroa-charcoal text-xs font-semibold uppercase tracking-wider mb-3">
            <Scale className="h-3.5 w-3.5 text-maroa-red" />
            <span>Transparansi Legalitas Perusahaan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-maroa-black">
            Informasi Legal & Kepatuhan Usaha
          </h1>
          <p className="text-xs text-maroa-gray-500 mt-2">
            PT MAROA MEDIA MABBARAKKA berkomitmen menjalankan kegiatan usaha sesuai regulasi yang berlaku di Indonesia.
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-10 space-y-10 text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
          {/* Identitas Entitas */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-maroa-black flex items-center gap-2">
              <Building2 className="h-5 w-5 text-maroa-red" />
              <span>Identitas Badan Usaha</span>
            </h2>
            <div className="bg-maroa-gray-100/70 border border-maroa-gray-300 rounded-maroa-md p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div>
                <span className="text-maroa-gray-500 block text-xs">Nama Badan Usaha</span>
                <span className="font-bold text-maroa-black text-base">{initialSiteSettings.companyName}</span>
              </div>
              <div>
                <span className="text-maroa-gray-500 block text-xs">Bentuk Hukum</span>
                <span className="font-bold text-maroa-black text-base">Perseroan Terbatas (PT)</span>
              </div>
              <div>
                <span className="text-maroa-gray-500 block text-xs">Nama Merek Dagang</span>
                <span className="font-bold text-maroa-black text-base">{initialSiteSettings.brandName}</span>
              </div>
              <div>
                <span className="text-maroa-gray-500 block text-xs">Fokus Industri</span>
                <span className="font-bold text-maroa-black text-base">{initialSiteSettings.tagline}</span>
              </div>
              <div>
                <span className="text-maroa-gray-500 block text-xs">Lokasi Kantor Resmi</span>
                <span className="font-medium text-maroa-black">{initialSiteSettings.addressPublic}</span>
              </div>
              <div>
                <span className="text-maroa-gray-500 block text-xs">Kontak Korespondensi Legal</span>
                <a href={`mailto:${initialSiteSettings.primaryEmail}`} className="font-medium text-maroa-red hover:underline">
                  {initialSiteSettings.primaryEmail}
                </a>
              </div>
            </div>
          </section>

          {/* Kepatuhan PSE */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-maroa-black flex items-center gap-2">
              <FileCheck2 className="h-5 w-5 text-maroa-red" />
              <span>Penyelenggara Sistem Elektronik (PSE)</span>
            </h2>
            <p className="text-sm">
              Sesuai amanat Peraturan Pemerintah Nomor 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik serta Peraturan Menteri Komunikasi dan Informatika Nomor 5 Tahun 2020:
            </p>
            <div className="p-5 rounded-maroa-md border border-maroa-gray-300 bg-maroa-white text-xs sm:text-sm space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-semibold text-maroa-black">Status Pendaftaran PSE:</span>
                <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1.5 w-fit">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Terdaftar Resmi ({initialSiteSettings.pseRegistrationNumber})
                </span>
              </div>
              <div className="flex items-center gap-4 pt-2 border-t border-maroa-gray-100">
                <a
                  href="/compliance/qr-pse-komdigi.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-16 w-16 shrink-0 bg-white p-1 rounded border border-gray-300 hover:border-maroa-red shadow-sm transition-all group"
                  title="Klik untuk melihat Sertifikat QR Resmi Komdigi RI"
                >
                  <Image
                    src="/compliance/qr-pse-komdigi.png"
                    alt="Sertifikat PSE Komdigi RI"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </a>
                <div className="space-y-1 text-xs">
                  <p className="font-semibold text-maroa-black">Tanda Daftar Penyelenggara Sistem Elektronik (TDPSE)</p>
                  <p className="text-maroa-gray-600">Nomor Registrasi: <code className="bg-gray-100 px-1 py-0.5 rounded font-mono font-bold text-emerald-700">{initialSiteSettings.pseRegistrationNumber}</code></p>
                  <a href="/compliance/qr-pse-komdigi.png" target="_blank" rel="noopener noreferrer" className="text-maroa-red hover:underline inline-flex items-center gap-1 font-semibold text-[11px]">
                    <span>Buka Sertifikat QR Resolusi Penuh</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <p className="text-xs text-maroa-gray-600 leading-relaxed pt-2 border-t border-maroa-gray-100">
                Sistem web korporat MAROA beroperasi sebagai portal informasi korporat dan platform penerimaan permohonan kerja sama. Seluruh lembar inventaris sistem, data mapping pemrosesan, dan kelayakan teknis telah diverifikasi dan disetujui sesuai standar Kementerian Komunikasi dan Digital (Komdigi).
              </p>
            </div>
          </section>

          {/* Pelindungan Data Pribadi */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-maroa-black flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-maroa-red" />
              <span>Kepatuhan Pelindungan Data Pribadi (UU PDP)</span>
            </h2>
            <p className="text-sm">
              Kami mematuhi penuh Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi. Kami tidak memperjualbelikan data pengunjung, menerapkan prinsip minimisasi data, menyediakan kanal penegakan hak subjek data, dan memastikan seluruh transmisi data terenkripsi. Rincian komprehensif dapat dipelajari pada{" "}
              <Link href="/privacy" className="text-maroa-red font-semibold hover:underline">
                Kebijakan Privasi
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
