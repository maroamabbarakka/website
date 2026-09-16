"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { initialProjects } from "@/data/initialData";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ArrowUpRight, Shuffle, Sparkles, Layers } from "lucide-react";

// Proyek representatif awal (SSR deterministik untuk mencegah hydration mismatch)
const defaultEventProject = initialProjects.find((p) => p.id === "perpustakaan-expo-pinrang") || initialProjects[0];
const defaultMultimediaProject = initialProjects.find((p) => p.id === "fakkie-ramadhan-fest") || initialProjects[1];
const defaultDigitalProject = initialProjects.find((p) => p.id === "sbl-portal") || initialProjects[2];

export function SelectedWorkSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "events" | "multimedia" | "digital">("all");
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([
    defaultEventProject,
    defaultMultimediaProject,
    defaultDigitalProject,
  ]);
  const [isShuffling, setIsShuffling] = useState(false);

  // Fungsi untuk mengacak 3 proyek yang mewakili pilar (1 Digital, 1 Event, 1 Multimedia)
  const getBalancedRandomProjects = () => {
    const digitalList = initialProjects.filter((p) => p.category === "digital" && p.isPublished);
    const eventList = initialProjects.filter((p) => (p.category === "events" || p.category === "integrated") && p.isPublished);
    const multimediaList = initialProjects.filter((p) => p.category === "multimedia" && p.isPublished);

    const randomDigital = digitalList[Math.floor(Math.random() * digitalList.length)] || defaultDigitalProject;
    const randomEvent = eventList[Math.floor(Math.random() * eventList.length)] || defaultEventProject;
    const randomMultimedia = multimediaList[Math.floor(Math.random() * multimediaList.length)] || defaultMultimediaProject;

    // Susun secara variatif
    return [randomEvent, randomMultimedia, randomDigital];
  };

  // Efek pengacakan interaktif saat tombol acak ditekan
  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      if (activeFilter === "all") {
        setDisplayedProjects(getBalancedRandomProjects());
      } else {
        const filtered = initialProjects.filter((p) => p.category === activeFilter && p.isPublished);
        const shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 3);
        setDisplayedProjects(shuffled);
      }
      setIsShuffling(false);
    }, 200);
  };

  // Ganti filter kategori
  const handleFilterChange = (filter: "all" | "events" | "multimedia" | "digital") => {
    setActiveFilter(filter);
    if (filter === "all") {
      setDisplayedProjects(getBalancedRandomProjects());
    } else {
      const filtered = initialProjects.filter((p) => p.category === filter && p.isPublished);
      // Ambil 3 proyek acak dari kategori terpilih
      const shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 3);
      setDisplayedProjects(shuffled);
    }
  };

  // Acak otomatis di sisi klien saat pertama kali halaman dimuat (client mount)
  useEffect(() => {
    setDisplayedProjects(getBalancedRandomProjects());
  }, []);

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case "events":
        return { label: "Events & Experiences", bg: "bg-amber-500/90 text-white border-amber-400/40" };
      case "multimedia":
        return { label: "Multimedia & Studio", bg: "bg-purple-600/90 text-white border-purple-400/40" };
      case "digital":
        return { label: "Digital & Web", bg: "bg-blue-600/90 text-white border-blue-400/40" };
      case "integrated":
        return { label: "Integrated Solution", bg: "bg-emerald-600/90 text-white border-emerald-400/40" };
      default:
        return { label: cat, bg: "bg-gray-800 text-white border-gray-600" };
    }
  };

  return (
    <section className="w-full py-20 bg-maroa-gray-100/50 border-b border-maroa-gray-300/60">
      <div className="container-maroa">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
                Portfolio & Case Studies
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-maroa-red text-[11px] font-medium">
                <Sparkles className="h-3 w-3" />
                Lintas Pilar Kreatif
              </span>
            </div>
            <h2 className="section-title text-maroa-black">
              Karya Terpilih & Dampak Kolaborasi.
            </h2>
            <p className="text-base text-maroa-gray-700 leading-relaxed">
              Representasi nyata portofolio MAROA mencakup panggung event kolosal, instalasi multimedia &amp; video mapping, serta sistem aplikasi web korporat.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Tombol Acak Portofolio */}
            <button
              type="button"
              onClick={handleShuffle}
              disabled={isShuffling}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-maroa-sm bg-white border border-gray-300 hover:border-maroa-red text-xs font-semibold text-gray-700 hover:text-maroa-red shadow-sm transition-all group active:scale-95 disabled:opacity-50"
              title="Acak kombinasi proyek yang ditampilkan"
            >
              <Shuffle className={`h-3.5 w-3.5 transition-transform ${isShuffling ? "animate-spin" : "group-hover:rotate-180 duration-500"}`} />
              <span>Acak Karya</span>
            </button>

            {/* Link ke Seluruh Portofolio */}
            <Link
              href="/work"
              className="inline-flex items-center text-sm font-semibold text-maroa-red hover:text-maroa-red-dark transition-colors group"
            >
              <span>Seluruh Karya ({initialProjects.filter((p) => p.isPublished).length})</span>
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Filter Pilar Tab Mini */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => handleFilterChange("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeFilter === "all"
                ? "bg-maroa-charcoal text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Layers className="h-3 w-3" />
              Kombinasi Semua Pilar (Acak)
            </span>
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange("events")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeFilter === "events"
                ? "bg-amber-600 text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Events & Experiences
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange("multimedia")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeFilter === "multimedia"
                ? "bg-purple-600 text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Multimedia & Studio
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange("digital")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeFilter === "digital"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Digital & Web
          </button>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isShuffling ? "opacity-40" : "opacity-100"}`}>
          {displayedProjects.map((project) => {
            const badgeInfo = getCategoryBadge(project.category);
            const isDigitalWeb = project.category === "digital" && project.mobileImage;

            return (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group flex flex-col bg-maroa-white border border-maroa-gray-300 rounded-maroa-md overflow-hidden hover-lift shadow-sm hover:border-maroa-red/40 transition-all"
              >
                {/* Visual Showcase Cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#1d1e22] to-[#0c0d0f] p-3 border-b border-maroa-gray-300 group-hover:border-maroa-red/30 transition-colors">
                  {isDigitalWeb ? (
                    // Tampilan Mockup Multi-Device untuk Kategori Digital & Web
                    <>
                      <div className="relative w-full h-full rounded-md overflow-hidden bg-[#1f2024] border border-white/10 shadow-lg">
                        <div className="h-5 bg-[#26272c] border-b border-white/10 px-2 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                          <div className="w-24 h-2.5 mx-auto rounded bg-black/40 border border-white/5" />
                        </div>
                        <div className="relative w-full h-[calc(100%-20px)] bg-[#0d0e11] overflow-hidden">
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </div>

                      {/* Floating Mobile Phone Mockup Overlay */}
                      {project.mobileImage && (
                        <div className="absolute -bottom-2 right-2 w-16 sm:w-20 rounded-[14px] p-1 bg-[#18191c] border border-white/25 shadow-[0_15px_30px_rgba(0,0,0,0.9)] transform rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 z-10">
                          <div className="relative aspect-[9/19.5] w-full rounded-[10px] overflow-hidden bg-black border border-white/10">
                            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-black rounded-full z-20" />
                            <Image
                              src={project.mobileImage}
                              alt={`${project.title} Mobile`}
                              fill
                              className="object-cover object-top"
                              sizes="80px"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    // Tampilan Sinematik Fotografi Panggung untuk Kategori Events & Multimedia
                    <div className="relative w-full h-full rounded-md overflow-hidden bg-[#0d0e11] border border-white/10 shadow-lg">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
                    </div>
                  )}

                  {/* Category Badge Berwarna Khas Pilar */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold border backdrop-blur-md shadow-sm ${badgeInfo.bg}`}>
                      {badgeInfo.label}
                    </span>
                    {project.isConceptOnly && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/80 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                        Konsep
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-maroa-gray-500 mb-2">
                      <span className="font-medium text-maroa-charcoal">{project.clientDisplayName}</span>
                      <span className="font-mono text-[11px]">{project.year}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-maroa-black group-hover:text-maroa-red transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-maroa-gray-700 mt-2.5 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-maroa-gray-100 flex items-center justify-between text-xs font-semibold text-maroa-red">
                    <span>Lihat Studi Kasus</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
