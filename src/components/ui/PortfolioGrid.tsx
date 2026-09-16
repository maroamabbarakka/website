"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface PortfolioGridProps {
  projects: Project[];
}

const ITEMS_PER_PAGE = 9;

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "events", label: "Events & Experiences" },
    { key: "multimedia", label: "Multimedia & Studio" },
    { key: "digital", label: "Digital & Web" },
    { key: "integrated", label: "Integrated" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  
  // Amankan jika currentPage melampaui totalPages saat ganti filter
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
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

  return (
    <div ref={containerRef} className="w-full">
      {/* Filter Bar & Status Count */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-maroa-gray-200">
        <div
          role="tablist"
          aria-label="Filter Kategori Portofolio"
          className="flex flex-wrap items-center gap-2"
        >
          {filters.map((f) => {
            const isSelected = activeFilter === f.key;
            return (
              <button
                key={f.key}
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleFilterChange(f.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
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
        <div className="text-xs text-maroa-gray-500 font-medium">
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

      {/* Grid Proyek */}
      {paginatedProjects.length === 0 ? (
        <div className="text-center py-20 text-maroa-gray-500 text-sm bg-maroa-gray-100/50 rounded-maroa-md border border-maroa-gray-200">
          Tidak ada proyek yang sesuai dengan kategori ini.
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

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <Badge variant="dark" className="bg-black/75 backdrop-blur-md text-white border border-white/10 text-[10px]">
                    {getCategoryLabel(project.category)}
                  </Badge>
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
