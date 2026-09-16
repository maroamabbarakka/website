"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CalendarDays, Camera, Laptop, Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-maroa-gray-100/60 via-maroa-white to-maroa-white py-14 lg:py-24">
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-maroa-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 h-80 w-80 rounded-full bg-maroa-charcoal/5 blur-3xl pointer-events-none" />

      <div className="container-maroa">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Kolom Teks (6 Kolom Desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pr-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-maroa-red/10 border border-maroa-red/20 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-maroa-red shrink-0" />
              <span className="text-xs font-semibold tracking-wider text-maroa-red uppercase">
                Events · Multimedia · Digital
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="hero-title text-maroa-black">
              We Create Experiences, Content & Digital Solutions.
            </h1>

            {/* Narasi Pendukung */}
            <p className="text-lg md:text-xl text-maroa-gray-700 leading-relaxed max-w-2xl font-normal">
              MAROA mengintegrasikan penyelenggaraan event profesional, produksi studio multimedia berkualitas tinggi, dan pengembangan solusi teknologi web korporat untuk memberikan dampak nyata bagi brand dan audiens Anda.
            </p>

            {/* Brand Essence Accent */}
            <div className="text-sm font-semibold tracking-wide text-maroa-charcoal uppercase flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-maroa-red"></span>
              <span>On Stage · On Screen · Online</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Start a Project
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                View Our Work
              </Button>
            </div>

            {/* 3 Keunggulan Ringkas */}
            <div className="pt-6 border-t border-maroa-gray-300/80 grid grid-cols-3 gap-4 text-xs text-maroa-gray-700">
              <div className="flex flex-col">
                <span className="font-semibold text-maroa-black text-sm">Terintegrasi</span>
                <span>Satu ekosistem layanan lengkap</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-maroa-black text-sm">Terstandarisasi</span>
                <span>Alur produksi profesional</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-maroa-black text-sm">Modern Tech</span>
                <span>Didukung sistem web mutakhir</span>
              </div>
            </div>
          </div>

          {/* Kolom Visual Showcase (5 Kolom Desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-[16/11] rounded-maroa-lg overflow-hidden border border-maroa-gray-300 shadow-2xl bg-maroa-charcoal">
              {/* Gambar Mockup Showcase Visual */}
              <Image
                src="/mockups/01-home-responsive.png"
                alt="MAROA Creative Technology & Experience Showcase"
                fill
                priority
                className="object-cover object-top filter contrast-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* Overlay Halus */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroa-black/80 via-maroa-black/20 to-transparent pointer-events-none" />

              {/* Badge Tiga Pilar Mengambang di Gambar */}
              <div className="absolute bottom-4 left-4 right-4 bg-maroa-black/80 backdrop-blur-md rounded-maroa-md p-4 border border-white/10 text-white flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-maroa-red">
                    Core Capabilities
                  </span>
                  <Link href="/expertise" className="text-xs text-gray-300 hover:text-white flex items-center gap-1 group">
                    <span>Lihat Detail</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white/5 rounded-maroa-sm p-2 flex flex-col items-center gap-1">
                    <CalendarDays className="h-4 w-4 text-maroa-red" />
                    <span className="font-medium text-[11px] truncate w-full">Events</span>
                  </div>
                  <div className="bg-white/5 rounded-maroa-sm p-2 flex flex-col items-center gap-1">
                    <Camera className="h-4 w-4 text-maroa-red" />
                    <span className="font-medium text-[11px] truncate w-full">Multimedia</span>
                  </div>
                  <div className="bg-white/5 rounded-maroa-sm p-2 flex flex-col items-center gap-1">
                    <Laptop className="h-4 w-4 text-maroa-red" />
                    <span className="font-medium text-[11px] truncate w-full">Digital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
