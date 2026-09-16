"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  CalendarDays,
  Camera,
  Laptop,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Periksa apakah pengguna mengaktifkan preferensi reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

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
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#080808] text-white">
      {/* 1. Latar Belakang Panggung Sinematik (Video Ambient + Stage Poster) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Poster Panggung Spektakuler Resolusi Tinggi Sebagai Fondasi */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-105 filter brightness-90"
          style={{
            backgroundImage: "url('/images/hero/maroa_hero_grand_stage.webp')",
          }}
          aria-hidden="true"
        />

        {/* Video Loop Motion Ambient Panggung */}
        <video
          ref={videoRef}
          src="/video/MAROA_BRAND_MOTION_CONCEPT.mp4"
          poster="/images/hero/maroa_hero_grand_stage.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-65 transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-65" : "opacity-0"
          }`}
          aria-label="Latar Panggung Sinematik MAROA"
        />

        {/* Overlay Gradien Panggung Dramatis (Dark Stage Vignette) */}
        {/* Gradien Gelap Area Teks (Kiri ke Kanan 80% -> 40%) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/75 to-[#080808]/40 pointer-events-none" />

        {/* Gradien Vertikal (Atas untuk Navbar & Bawah untuk Transisi Halus) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/90 via-transparent to-[#080808] pointer-events-none" />

        {/* Pencahayaan Panggung Khas MAROA (Stage Accent Glow: Magenta & Red) */}
        <div className="absolute top-1/4 right-1/4 -z-0 h-[500px] w-[500px] rounded-full bg-maroa-red/20 blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/3 right-10 -z-0 h-[400px] w-[400px] rounded-full bg-[#57111e]/30 blur-[110px] pointer-events-none" />
      </div>

      {/* 2. Konten Editorial Utama (Hero Main Content) */}
      <div className="container-maroa relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-20 my-auto flex flex-col justify-center">
        <div className="max-w-4xl space-y-6">
          {/* Microeyebrow Editorial */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
            <Sparkles className="h-3.5 w-3.5 text-maroa-red shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-gray-200 uppercase">
              CREATIVE TECHNOLOGY & EXPERIENCE COMPANY
            </span>
          </div>

          {/* H1 Headline Editorial Panggung Raksasa */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[0.95] drop-shadow-2xl">
              WE CREATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                WHAT&apos;S NEXT.
              </span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl font-extrabold text-maroa-red tracking-wider uppercase drop-shadow-md">
              Events. Multimedia. Digital Technology.
            </p>
          </div>

          {/* Narasi Resmi Bernilai Tinggi */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-normal drop-shadow">
            Mengubah ide menjadi pengalaman panggung spektakuler, konten visual imersif, dan solusi teknologi digital yang berdampak nyata bagi brand, institusi, dan audiens Anda.
          </p>

          {/* Tombol CTA Ganda Berdaya Tarik Tinggi */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Button
              href="/work"
              variant="primary"
              size="lg"
              withArrow
              className="shadow-xl shadow-maroa-red/25 text-sm sm:text-base px-8 py-4 font-bold"
            >
              Jelajahi Karya
            </Button>
            <Button
              href="/contact"
              variant="outline-light"
              size="lg"
              className="text-sm sm:text-base px-8 py-4 font-bold"
            >
              Mulai Proyek
            </Button>
          </div>
        </div>
      </div>

      {/* 3. Strip 3 Pilar Panggung di Bagian Dasar (Bottom Brand Stage Strip) */}
      <div className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-xl py-4 sm:py-5">
        <div className="container-maroa">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Indikator Pilar Aktif */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroa-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-maroa-red" />
              </span>
              <span className="text-xs sm:text-sm font-black tracking-widest text-white uppercase">
                ON STAGE · ON SCREEN · ONLINE
              </span>
            </div>

            {/* Rincian 3 Disiplin Panggung Faktual */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs w-full lg:w-auto">
              <div className="flex items-center gap-2.5 text-gray-300">
                <div className="p-1.5 rounded bg-white/5 border border-white/10 shrink-0 text-maroa-red">
                  <CalendarDays className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Events & Stage</span>
                  <span className="text-[11px] text-gray-400">LED wall, tata panggung & rigging</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300">
                <div className="p-1.5 rounded bg-white/5 border border-white/10 shrink-0 text-maroa-red">
                  <Camera className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Multimedia Studio</span>
                  <span className="text-[11px] text-gray-400">Video mapping, multicam & motion</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300">
                <div className="p-1.5 rounded bg-white/5 border border-white/10 shrink-0 text-maroa-red">
                  <Laptop className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Digital Technology</span>
                  <span className="text-[11px] text-gray-400">Web apps, registrasi QR & portal</span>
                </div>
              </div>
            </div>

            {/* Tautan Rincian Kapabilitas */}
            <Link
              href="/expertise"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-maroa-red transition-colors shrink-0 group"
            >
              <span>Selengkapnya</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Kontrol Aksesibilitas Pemutar Video Latar (Pojok Kanan Atas) */}
      <button
        type="button"
        onClick={toggleVideoPlay}
        aria-label={isPlaying ? "Jeda video latar panggung" : "Putar video latar panggung"}
        className="absolute top-24 right-4 sm:right-8 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white/80 hover:text-white backdrop-blur-md transition-all border border-white/20 shadow-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
        title={isPlaying ? "Jeda video latar" : "Putar video latar"}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>
    </section>
  );
}
