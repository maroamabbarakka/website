"use client";

import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ChevronLeft, ChevronRight, Calendar, Filter, RotateCcw } from "lucide-react";

export interface PortfolioGridProps {
  projects: Project[];
}

const ITEMS_PER_PAGE = 9;

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeYear, setActiveYear] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const categoryFilters = [
    { key: "all", label: "Semua Kategori" },
    { key: "events", label: "Events & Experiences" },
    { key: "multimedia", label: "Multimedia & Studio" },
    { key: "digital", label: "Digital & Web" },
    { key: "integrated", label: "Integrated" },
  ];

  // Ekstrak daftar tahun unik yang tersedia dari proyek secara dinamis
  const availableYears = useMemo(() => {
    const yearsSet = new Set<string>();
    projects.forEach((p) => {
      const matches = p.year.match(/\b(202\d)\b/g);
      if (matches) {
        matches.forEach((y) => yearsSet.add(y));
      } else if (p.year) {
        yearsSet.add(p.year.trim());
      }
    });
    return Array.from(yearsSet).sort().reverse();
  }, [projects]);

  // Filter dan urutkan proyek dari tanggal terbaru ke terlama
  const filteredProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));

    return sorted.filter((p) => {
      const matchCategory = activeCategory === "all" || p.category === activeCategory;
      const matchYear =
        activeYear === "all" ||
        p.year.includes(activeYear) ||
        (p.publishedAt && p.publishedAt.startsWith(activeYear));

      return matchCategory && matchYear;
    });
  }, [projects, activeCategory, activeYear]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  
  // Amankan jika currentPage melampaui totalPages saat ganti filter
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  const handleYearChange = (year: string) => {
    setActiveYear(year);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setActiveYear("all");
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (containerRef.current) {
      const topOffset = containerRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "events":
        return "Events";
      case "multimedia":
        return "Multimedia";
      case "digital":
        return "Digital";
      case "integrated":
        return "Integrated";
      default:
        return cat;
    }
  };

  const isFiltered = activeCategory !== "all" || activeYear !== "all";

  return (
    <div ref={containerRef} className="w-full">
      {/* Filter Bar & Controls */}
      <div className="flex flex-col gap-5 mb-10 pb-6 border-b border-maroa-gray-200">
        {/* Baris 1: Filter Kategori */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Filter Kategori Portofolio"
            className="flex flex-wrap items-center gap-2"
          >
            {categoryFilters.map((f) => {
              const isSelected = activeCategory === f.key;
              return (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(f.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer ${
                    isSelected
                      ? "bg-maroa-black text-maroa-white shadow-sm"
                      : "bg-maroa-gray-100 text-maroa-charcoal hover:bg-maroa-gray-300/60"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Ringkasan Jumlah Proyek */}
          <div className="text-xs text-maroa-gray-500 font-medium shrink-0">
            Menampilkan{" "}
            <span className="text-maroa-black font-bold">
              {filteredProjects.length === 0 ? 0 : startIndex + 1}
              {" - "}
              {Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)}
            </span>{" "}
            dari{" "}
            <span className="text-maroa-black font-bold">
              {filteredProjects.length}
            </span>{" "}
            proyek
          </div>
        </div>

        {/* Baris 2: Filter Berdasarkan Tahun & Tombol Reset */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroa-gray-700 mr-1">
              <Calendar className="w-3.5 h-3.5 text-maroa-red" />
              <span>Tahun:</span>
            </div>

            {/* Tombol Semua Tahun */}
            <button
              onClick={() => handleYearChange("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                activeYear === "all"
                  ? "bg-maroa-red text-white border-maroa-red shadow-xs"
                  : "bg-white text-maroa-charcoal border-maroa-gray-300 hover:bg-maroa-gray-100"
              }`}
            >
              Semua Tahun
            </button>

            {/* Tombol Tiap Tahun Unik */}
            {availableYears.map((year) => {
              const isSelected = activeYear === year;
              return (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? "bg-maroa-red text-white border-maroa-red shadow-xs"
                      : "bg-white text-maroa-charcoal border-maroa-gray-300 hover:bg-maroa-gray-100"
                  }`}
                >
                  {year}
                </button>
              );
            })}
          </div>

          {/* Tombol Reset jika filter aktif */}
          {isFiltered && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-maroa-gray-600 bg-maroa-gray-100 hover:bg-maroa-gray-200 hover:text-maroa-black transition-colors cursor-pointer"
              title="Kembalikan seluruh filter ke default"
            >
              <RotateCcw className="w-3 h-3 text-maroa-red" />
              <span>Reset Filter</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid Proyek */}
      {paginatedProjects.length === 0 ? (
        <div className="text-center py-20 px-4 bg-maroa-gray-100/50 rounded-maroa-md border border-maroa-gray-200 flex flex-col items-center gap-3">
          <Filter className="w-8 h-8 text-maroa-gray-400" />
          <p className="text-sm font-semibold text-maroa-charcoal">
            Tidak ada proyek yang sesuai dengan filter terpilih.
          </p>
          <p className="text-xs text-maroa-gray-500 max-w-md">
            Coba pilih kategori atau rentang tahun lain untuk menemukan dokumentasi studi kasus MAROA.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-maroa-black text-white text-xs font-semibold hover:bg-maroa-red transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Tampilkan Semua Proyek</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="group flex flex-col bg-maroa-white border border-maroa-gray-300 rounded-maroa-md overflow-hidden hover-lift"
            >
              {/* Mockup Showcase Container di Cover Kartu */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#1d1e22] to-[#0c0d0f] p-3 border-b border-maroa-gray-300 group-hover:border-maroa-red/30 transition-colors">
                {/* Desktop Window Frame */}
                <div className="relative w-full h-full rounded-md overflow-hidden bg-[#1f2024] border border-white/10 shadow-lg">
                  {/* Browser Bar */}
                  <div className="h-5 bg-[#26272c] border-b border-white/10 px-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                    <div className="w-24 h-2.5 mx-auto rounded bg-black/40 border border-white/5" />
                  </div>

                  {/* Desktop Image Viewport */}
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

                {/* Category Badge & Concept Label */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5">
                  <Badge variant="dark" className="bg-black/75 backdrop-blur-md text-white border border-white/10 text-[10px]">
                    {getCategoryLabel(project.category)}
                  </Badge>
                  {project.isConceptOnly && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/85 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                      Konsep
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-maroa-gray-500 mb-2">
                    <span className="font-medium text-maroa-charcoal">{project.clientDisplayName}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-maroa-black group-hover:text-maroa-red transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-maroa-gray-700 mt-2 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-maroa-gray-100 flex items-center justify-between text-xs font-semibold text-maroa-red">
                  <span>Lihat Studi Kasus</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav
          aria-label="Navigasi Halaman Portofolio"
          className="mt-14 pt-8 border-t border-maroa-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Tombol Sebelumnya */}
          <button
            onClick={() => handlePageChange(validCurrentPage - 1)}
            disabled={validCurrentPage === 1}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 border ${
              validCurrentPage === 1
                ? "border-maroa-gray-200 text-maroa-gray-400 bg-maroa-gray-100/50 cursor-not-allowed"
                : "border-maroa-gray-300 text-maroa-charcoal bg-white hover:bg-maroa-gray-100 hover:text-maroa-black shadow-xs cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          {/* Deretan Nomor Halaman */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isActive = pageNum === validCurrentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-9 h-9 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center ${
                    isActive
                      ? "bg-maroa-black text-maroa-white shadow-md scale-105"
                      : "text-maroa-charcoal bg-white border border-maroa-gray-200 hover:bg-maroa-gray-100 hover:border-maroa-gray-300"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Tombol Berikutnya */}
          <button
            onClick={() => handlePageChange(validCurrentPage + 1)}
            disabled={validCurrentPage === totalPages}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 border ${
              validCurrentPage === totalPages
                ? "border-maroa-gray-200 text-maroa-gray-400 bg-maroa-gray-100/50 cursor-not-allowed"
                : "border-maroa-gray-300 text-maroa-charcoal bg-white hover:bg-maroa-gray-100 hover:text-maroa-black shadow-xs cursor-pointer"
            }`}
          >
            <span>Berikutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
