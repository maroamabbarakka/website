"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CalendarDays, Camera, Laptop } from "lucide-react";

export function PillarsSection() {
  const pillarPanels = [
    {
      id: "events",
      category: "EVENTS & EXPERIENCES",
      title: "Tata Panggung, LED & Konvensi Akbar",
      summary:
        "Manajemen produksi panggung berskala besar, instalasi videotron LED modular, tata suara & pencahayaan terpadu, hingga eksekusi pameran dan festival budaya kolosal.",
      subservices: [
        "Penyelenggaraan Festival & Pameran",
        "Rigging, Lighting & Sound System",
        "Panggung LED Wall Modular P2.9/P3.9",
        "Manajemen Acara Pemerintahan & Korporat",
      ],
      image: "/portfolio/covers/gemudaya-festival-majene-2026-cover-1600x900.webp",
      alt: "Dokumentasi Tata Panggung Spektakuler MAROA Event",
      badgeIcon: <CalendarDays className="h-3.5 w-3.5 text-maroa-red" />,
      href: "/expertise/events",
      ctaText: "Jelajahi Solusi Panggung",
    },
    {
      id: "multimedia",
      category: "MULTIMEDIA & STUDIO",
      title: "Video Mapping, Broadcast & Motion Studio",
      summary:
        "Produksi konten visual beresolusi tinggi, proyeksi video mapping arsitektural 3D, siaran langsung multikamera (live streaming broadcast), dan materi motion graphics panggung.",
      subservices: [
        "Proyeksi Video Mapping 3D Faktual",
        "Live Multicamera Streaming & OB Van",
        "Motion Graphics & Bumper Acara",
        "Studio Podcast & Dokumentasi Sinematik",
      ],
      image: "/portfolio/events/fakkie-video-mapping.jpg",
      alt: "Instalasi Multimedia Video Mapping MAROA",
      badgeIcon: <Camera className="h-3.5 w-3.5 text-maroa-red" />,
      href: "/expertise/multimedia",
      ctaText: "Eksplorasi Studio Multimedia",
    },
    {
      id: "digital",
      category: "DIGITAL & TECHNOLOGY",
      title: "Aplikasi Web, Registrasi QR & Portal Publik",
      summary:
        "Rekayasa perangkat lunak modern: portal publik instansi, sistem registrasi pengunjung digital berbasis QR code instan, dan aplikasi web korporat berbasis Cloud berkecepatan tinggi.",
      subservices: [
        "Sistem Registrasi QR & Validasi Tiket",
        "Portal Web Layanan Publik & OPD",
        "Aplikasi Manajemen Antrean & Undian",
        "Arsitektur Web Modern Berkinerja Tinggi",
      ],
      image: "/portfolio/sbl-portal-desktop.webp",
      alt: "Tangkapan Layar Aplikasi Web Korporat MAROA",
      badgeIcon: <Laptop className="h-3.5 w-3.5 text-maroa-red" />,
      href: "/expertise/digital",
      ctaText: "Pelajari Rekayasa Digital",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-maroa-white border-b border-maroa-gray-300/60">
      <div className="container-maroa">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroa-red/10 border border-maroa-red/20 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-maroa-red" />
              <span className="text-xs font-bold uppercase tracking-widest text-maroa-red">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-maroa-black tracking-tight leading-tight">
              Tiga Disiplin. <br className="hidden sm:inline" />
              <span className="text-maroa-red">Satu Pengalaman Terintegrasi.</span>
            </h2>
            <p className="text-base sm:text-lg text-maroa-gray-700 leading-relaxed font-normal">
              Kami menyatukan tata panggung fisik, kekuatan visual multimedia studio, dan kecakapan rekayasa teknologi digital dalam satu standar eksekusi yang kohesif.
            </p>
          </div>

          <Link
            href="/expertise"
            className="inline-flex items-center text-sm font-bold text-maroa-red hover:text-maroa-red-dark transition-colors group self-start md:self-auto py-2"
          >
            <span>Lihat Seluruh Rincian Layanan</span>
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Editorial Panels with Authentic Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillarPanels.map((panel) => (
            <div
              key={panel.id}
              className="flex flex-col justify-between bg-maroa-white border border-maroa-gray-300 rounded-maroa-md overflow-hidden shadow-card hover-lift transition-all duration-300 group hover:border-maroa-red/50"
            >
              {/* Visual Panel Header (Real Stage/Studio/Screen Capture) */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border-b border-maroa-gray-300">
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Badge Kategori Mengambang */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider">
                  {panel.badgeIcon}
                  <span>{panel.category}</span>
                </div>
              </div>

              {/* Panel Content Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-maroa-black group-hover:text-maroa-red transition-colors leading-snug">
                    {panel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-maroa-gray-700 mt-3 leading-relaxed">
                    {panel.summary}
                  </p>

                  {/* Subservices List */}
                  <div className="mt-6 pt-5 border-t border-maroa-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-maroa-charcoal block mb-3">
                      Cakupan Solusi:
                    </span>
                    <ul className="space-y-2 text-xs text-maroa-gray-700">
                      {panel.subservices.map((sub, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-maroa-red mt-1.5 shrink-0" />
                          <span className="font-medium text-maroa-ink">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action CTA Link */}
                <div className="pt-5 border-t border-maroa-gray-100">
                  <Link
                    href={panel.href}
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-maroa-red hover:text-maroa-red-dark transition-colors group/link"
                  >
                    <span>{panel.ctaText}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
