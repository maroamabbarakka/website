"use client";

import React from "react";
import Image from "next/image";

interface OfficialPartnerLogo {
  name: string;
  category: string;
  logoUrl: string;
}

const officialLogos: OfficialPartnerLogo[] = [
  {
    name: "Pemerintah Kabupaten Pinrang",
    category: "Pemerintah Daerah",
    logoUrl: "/clients/01_Kabupaten_Pinrang.svg",
  },
  {
    name: "Pemerintah Kabupaten Majene",
    category: "Pemerintah Daerah",
    logoUrl: "/clients/02_Kabupaten_Majene.svg",
  },
  {
    name: "Pemerintah Kabupaten Sidenreng Rappang (Sidrap)",
    category: "Pemerintah Daerah",
    logoUrl: "/clients/03_Kabupaten_Sidrap.svg",
  },
  {
    name: "Pemerintah Kabupaten Polewali Mandar",
    category: "Pemerintah Daerah",
    logoUrl: "/clients/04_Kabupaten_Polewali_Mandar.svg",
  },
  {
    name: "Pemerintah Kabupaten Mamuju",
    category: "Pemerintah Daerah",
    logoUrl: "/clients/05_Kabupaten_Mamuju.svg",
  },
  {
    name: "Pemerintah Provinsi Sulawesi Selatan",
    category: "Pemerintah Provinsi",
    logoUrl: "/clients/06_Provinsi_Sulawesi_Selatan.svg",
  },
  {
    name: "Pemerintah Provinsi Sulawesi Barat",
    category: "Pemerintah Provinsi",
    logoUrl: "/clients/07_Provinsi_Sulawesi_Barat.svg",
  },
  {
    name: "Perpustakaan Nasional Republik Indonesia",
    category: "Lembaga Pemerintah Nonkementerian",
    logoUrl: "/clients/08_Perpustakaan_Nasional.svg",
  },
  {
    name: "BKKBN / Kemendukbangga RI",
    category: "Kementerian / Lembaga RI",
    logoUrl: "/clients/09_BKKBN_Kemendukbangga.svg",
  },
  {
    name: "Tentara Nasional Indonesia (TNI)",
    category: "Pertahanan & Keamanan",
    logoUrl: "/clients/10_TNI.svg",
  },
  {
    name: "Kepolisian Negara Republik Indonesia (POLRI)",
    category: "Keamanan & Ketertiban",
    logoUrl: "/clients/11_POLRI.svg",
  },
  {
    name: "Kejaksaan Republik Indonesia",
    category: "Aparatur Penegak Hukum",
    logoUrl: "/clients/12_Kejaksaan.svg",
  },
  {
    name: "Kementerian Kebudayaan Republik Indonesia",
    category: "Kementerian RI",
    logoUrl: "/clients/13_Kementerian_Kebudayaan.svg",
  },
  {
    name: "Kementerian Agama Republik Indonesia",
    category: "Kementerian RI",
    logoUrl: "/clients/14_Kementerian_Agama.svg",
  },
  {
    name: "Institut Cokroaminoto Pinrang (ICP)",
    category: "Perguruan Tinggi",
    logoUrl: "/clients/15_Institut_Cokroaminoto_Pinrang.svg",
  },
  {
    name: "LPPL Radio Suara Bumi Lasinrang 92.4 FM",
    category: "Lembaga Penyiaran Publik Daerah",
    logoUrl: "/clients/16_Radio_Suara_Bumi_Lasinrang.svg",
  },
  {
    name: "Yayasan Masyarakat Peduli Pinrang",
    category: "Organisasi Sosial Kemasyarakatan",
    logoUrl: "/clients/17_Yayasan_Masyarakat_Peduli_Pinrang.svg",
  },
  {
    name: "PT Bank Rakyat Indonesia (Persero) Tbk (BRI)",
    category: "BUMN Perbankan",
    logoUrl: "/clients/18_BRI.svg",
  },
  {
    name: "PT PLN (Persero)",
    category: "BUMN Ketenagalistrikan",
    logoUrl: "/clients/19_PLN.svg",
  },
  {
    name: "Kementerian Kesehatan Republik Indonesia",
    category: "Kementerian RI",
    logoUrl: "/clients/20_Kementerian_Kesehatan.svg",
  },
];

export function ClientLogoCarouselSection() {
  return (
    <section className="w-full py-10 sm:py-12 bg-white border-b border-gray-100 overflow-hidden relative select-none">
      {/* Teks Judul Minimalis 1 Baris Responsif */}
      <div className="container-maroa mb-8 text-center px-4">
        <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 tracking-tight leading-none whitespace-nowrap overflow-hidden text-ellipsis">
          Telah dipercaya oleh berbagai Institusi Pemerintah, Perusahaan dan Organisasi
        </p>
      </div>

      {/* Marquee Single Track 1 Baris dengan Gradient Fade Samping */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* Flex Track Wrapper: Berisi 2 Set identik yang bergerak -100% secara kontinu */}
        <div className="flex w-max animate-marquee-scroll py-2">
          {/* Track 1 */}
          <div className="flex items-center gap-10 sm:gap-14 lg:gap-16 shrink-0 pr-10 sm:pr-14 lg:pr-16">
            {officialLogos.map((item, idx) => (
              <div
                key={`track1-${item.name}-${idx}`}
                className="flex items-center justify-center shrink-0 cursor-default group p-1"
                title={`${item.name} · ${item.category}`}
              >
                <div className="relative h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Image
                    src={item.logoUrl}
                    alt={item.name}
                    height={56}
                    width={56}
                    className="h-full w-full object-contain object-center drop-shadow-sm"
                    priority={idx < 8}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 (Duplikat Identik untuk Loop Tanpa Batas) */}
          <div className="flex items-center gap-10 sm:gap-14 lg:gap-16 shrink-0 pr-10 sm:pr-14 lg:pr-16" aria-hidden="true">
            {officialLogos.map((item, idx) => (
              <div
                key={`track2-${item.name}-${idx}`}
                className="flex items-center justify-center shrink-0 cursor-default group p-1"
                title={`${item.name} · ${item.category}`}
              >
                <div className="relative h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Image
                    src={item.logoUrl}
                    alt={item.name}
                    height={56}
                    width={56}
                    className="h-full w-full object-contain object-center drop-shadow-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
