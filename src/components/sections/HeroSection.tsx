"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CalendarDays, Camera, Laptop, Sparkles, ArrowRight, Play, Pause } from "lucide-react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-maroa-gray-100/60 via-maroa-white to-maroa-white py-14 lg:py-24">
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-maroa-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 h-80 w-80 rounded-full bg-maroa-charcoal/5 blur-3xl pointer-events-none" />

      <div className="container-maroa">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Kolom Teks (7 Kolom Desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pr-6">
            {/* Microeyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroa-red/10 border border-maroa-red/20 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-maroa-red shrink-0" />
              <span className="text-xs font-bold tracking-widest text-maroa-red uppercase">
                CREATIVE TECHNOLOGY & EXPERIENCE COMPANY
              </span>
            </div>

            {/* H1 Headline */}
            <div>
              <h1 className="hero-title text-maroa-black font-extrabold tracking-tight">
                WE CREATE WHAT&apos;S NEXT.
              </h1>
              <p className="text-base sm:text-lg font-semibold text-maroa-red mt-2 tracking-wide uppercase">
                Events. Multimedia. Digital Technology.
              </p>
            </div>

            {/* Narasi Pendukung Resmi */}
            <p className="text-lg text-maroa-gray-700 leading-relaxed max-w-2xl font-normal">
              Mengubah ide menjadi pengalaman, konten, dan solusi digital yang berdampak nyata bagi brand, institusi, dan audiens Anda.
            </p>

            {/* Brand Essence 3 Pilar */}
            <div className="text-xs sm:text-sm font-bold tracking-wider text-maroa-charcoal uppercase flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-maroa-red animate-pulse" />
              <span>ON STAGE · ON SCREEN · ONLINE</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="/work" variant="primary" size="lg" withArrow>
                Jelajahi Karya
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Mulai Proyek
              </Button>
            </div>

            {/* 3 Disiplin Ringkas */}
            <div className="pt-6 border-t border-maroa-gray-300/80 grid grid-cols-3 gap-4 text-xs text-maroa-gray-700">
              <div className="flex flex-col">
                <span className="font-bold text-maroa-black text-sm">Events & Stage</span>
                <span>Tata panggung, LED, & konvensi</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-maroa-black text-sm">Multimedia Studio</span>
                <span>Motion, video mapping, & streaming</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-maroa-black text-sm">Digital Platforms</span>
                <span>Web apps, portal publik, & sistem</span>
              </div>
            </div>
          </div>

          {/* Kolom Visual Showcase (5 Kolom Desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[16/10] sm:aspect-[16/10] rounded-maroa-lg overflow-hidden border border-maroa-gray-300 shadow-2xl bg-black group">
              {/* Showreel Video Player Resmi */}
              <video
                ref={videoRef}
                src="/video/MAROA_BRAND_MOTION_CONCEPT.mp4"
                poster="/video/MAROA_BRAND_MOTION_POSTER.png"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label="Cuplikan Motion Identitas Resmi MAROA Media"
              />

              {/* Overlay Halus */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Kontrol Toggle Pause/Play */}
              <button
                type="button"
                onClick={toggleVideoPlay}
                aria-label={isPlaying ? "Jeda video showreel" : "Putar video showreel"}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors border border-white/20 z-20 cursor-pointer"
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              </button>

              {/* Badge Tiga Pilar Mengambang di Bawah Video */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md rounded-maroa-md p-3.5 border border-white/10 text-white flex flex-col gap-2 z-20">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-maroa-red">
                    Core Capabilities
                  </span>
                  <Link href="/expertise" className="text-[11px] text-gray-300 hover:text-white flex items-center gap-1 group/link">
                    <span>Lihat Rincian</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white/5 rounded-maroa-sm p-1.5 flex flex-col items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5 text-maroa-red" />
                    <span className="font-semibold text-[10px] truncate w-full">Events</span>
                  </div>
                  <div className="bg-white/5 rounded-maroa-sm p-1.5 flex flex-col items-center gap-1">
                    <Camera className="h-3.5 w-3.5 text-maroa-red" />
                    <span className="font-semibold text-[10px] truncate w-full">Multimedia</span>
                  </div>
                  <div className="bg-white/5 rounded-maroa-sm p-1.5 flex flex-col items-center gap-1">
                    <Laptop className="h-3.5 w-3.5 text-maroa-red" />
                    <span className="font-semibold text-[10px] truncate w-full">Digital</span>
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
