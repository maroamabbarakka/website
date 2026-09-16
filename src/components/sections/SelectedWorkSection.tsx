"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { initialProjects } from "@/data/initialData";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function SelectedWorkSection() {
  const featuredProjects = initialProjects.filter((p) => p.isFeatured).slice(0, 3);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "events":
        return "Events & Experiences";
      case "multimedia":
        return "Multimedia & Studio";
      case "digital":
        return "Digital & Web";
      case "integrated":
        return "Integrated Solution";
      default:
        return cat;
    }
  };

  return (
    <section className="w-full py-20 bg-maroa-gray-100/50 border-b border-maroa-gray-300/60">
      <div className="container-maroa">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Portfolio & Case Studies
            </span>
            <h2 className="section-title text-maroa-black">
              Karya Terpilih & Dampak Kolaborasi.
            </h2>
            <p className="text-base text-maroa-gray-700 leading-relaxed">
              Melihat bagaimana ide diwujudkan menjadi eksekusi panggung, visual multimedia memukau, dan sistem web berkinerja tinggi.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center text-sm font-semibold text-maroa-red hover:text-maroa-red-dark transition-colors group self-start md:self-auto"
          >
            <span>Lihat Semua Proyek</span>
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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

              {/* Card Body */}
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
      </div>
    </section>
  );
}
