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
    name: "Tentara Nasional Indonesia (TNI)",
    category: "Pertahanan & Forkopimda",
    logoUrl: "/clients/tni.svg",
  },
  {
    name: "Kepolisian Negara Republik Indonesia (POLRI)",
    category: "Keamanan & Forkopimda",
    logoUrl: "/clients/polri.svg",
  },
  {
    name: "Pemerintah Kabupaten Pinrang",
    category: "Pemerintah Daerah",
    logoUrl: "/clients/pemkab-pinrang.svg",
  },
  {
    name: "Pemerintah Kabupaten Majene",
    category: "Pemerintah Daerah",
    logoUrl: "/clients/pemkab-majene.svg",
  },
  {
    name: "Badan Kependudukan & Keluarga Berencana Nasional (BKKBN)",
    category: "Lembaga Pemerintah",
    logoUrl: "/clients/bkkbn.svg",
  },
  {
    name: "Kementerian Komunikasi dan Informatika",
    category: "Kementerian RI",
    logoUrl: "/clients/kominfo.svg",
  },
  {
    name: "Kementerian Agama Republik Indonesia",
    category: "Kementerian RI",
    logoUrl: "/clients/kemenag.svg",
  },
  {
    name: "Badan Amil Zakat Nasional (BAZNAS)",
    category: "Lembaga Pemerintah",
    logoUrl: "/clients/baznas.svg",
  },
  {
    name: "Persatuan Guru Republik Indonesia (PGRI)",
    category: "Organisasi Pendidik",
    logoUrl: "/clients/pgri.svg",
  },
  {
    name: "Institut Cokroaminoto Pinrang (ICP)",
    category: "Perguruan Tinggi",
    logoUrl: "/clients/icp.svg",
  },
  {
    name: "Ikatan Guru Indonesia (IGI)",
    category: "Organisasi Pendidik",
    logoUrl: "/clients/igi.svg",
  },
  {
    name: "Komunitas Guru Belajar Nusantara (KGBN)",
    category: "Komunitas Edukasi",
    logoUrl: "/clients/kgbn.svg",
  },
  {
    name: "LPPL Radio Suara Bumi Lasinrang 92.4 FM",
    category: "Media Penyiaran Daerah",
    logoUrl: "/clients/radio-sbl.svg",
  },
  {
    name: "Yayasan Peduli Pinrang",
    category: "Organisasi Lingkungan",
    logoUrl: "/clients/peduli-pinrang.svg",
  },
];

export function ClientLogoCarouselSection() {
  return (
    <section className="w-full py-10 sm:py-12 bg-white border-b border-gray-100 overflow-hidden relative select-none">
      {/* Teks Judul Minimalis 1 Baris Responsif Sesuai Referensi Pengguna */}
      <div className="container-maroa mb-8 text-center px-4">
        <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 tracking-tight leading-none whitespace-nowrap overflow-hidden text-ellipsis">
          Telah dipercaya oleh berbagai institusi pemerintah, TNI, POLRI, lembaga, dan organisasi
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
                    priority={idx < 6}
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
