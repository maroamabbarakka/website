import React from "react";
import { initialProjects } from "@/data/initialData";
import { PortfolioGrid } from "@/components/ui/PortfolioGrid";
import { ClientLogoCarouselSection } from "@/components/sections/ClientLogoCarouselSection";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Selected Work & Case Studies — PT MAROA MEDIA MABBARAKKA",
  description:
    "Eksplorasi rekam jejak portofolio proyek MAROA di bidang Events, Multimedia, dan Digital Web Applications.",
};

export default function WorkPage() {
  const publishedProjects = initialProjects
    .filter((p) => p.isPublished)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));

  return (
    <div className="w-full bg-maroa-white">
      {/* Header Banner */}
      <section className="w-full bg-gradient-to-b from-maroa-gray-100/60 to-maroa-white py-16 lg:py-20 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Our Work
            </span>
            <h1 className="hero-title text-maroa-black">
              Selected Work & Case Studies.
            </h1>
            <p className="text-lg text-maroa-gray-700 leading-relaxed font-normal">
              Dokumentasi bagaimana MAROA memadukan konsep kreatif, teknologi panggung, visual siaran, dan platform web untuk klien korporasi, pemerintah, dan organisasi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="w-full py-16">
        <div className="container-maroa">
          <PortfolioGrid projects={publishedProjects} />
        </div>
      </section>

      {/* Klien & Mitra Strategis Carousel Section */}
      <ClientLogoCarouselSection />

      {/* CTA Bottom */}
      <section className="w-full py-16 bg-maroa-gray-100/40 border-t border-maroa-gray-200 text-center">
        <div className="container-maroa max-w-xl flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-maroa-black">
            Ingin Menggarap Proyek Serupa?
          </h2>
          <p className="text-sm text-maroa-gray-700">
            Hubungi tim MAROA untuk merumuskan konsep dan strategi eksekusi kebutuhan Anda.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md" withArrow>
              Mulai Proyek
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
