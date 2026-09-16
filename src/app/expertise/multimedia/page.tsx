import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Camera, Play, Video, ArrowRight, Mic } from "lucide-react";
import { initialServices, initialProjects } from "@/data/initialData";

export const metadata = {
  title: "Multimedia & Studio — Produksi Video, Podcast & Streaming | MAROA",
  description:
    "Layanan studio multimedia kreatif MAROA: produksi podcast, video korporat, live streaming multi-kamera, dan desain grafis gerak.",
};

export default function MultimediaPage() {
  const service = initialServices.find((s) => s.slug === "multimedia")!;
  const relatedProjects = initialProjects.filter(
    (p) => (p.category === "multimedia" || p.category === "integrated") && p.isPublished
  );

  return (
    <div className="w-full bg-maroa-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-maroa-gray-100/70 to-maroa-white py-16 lg:py-24 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Link href="/expertise" className="text-xs text-maroa-gray-500 hover:text-maroa-red transition-colors">
                  Expertise
                </Link>
                <span className="text-xs text-maroa-gray-300">/</span>
                <Badge variant="red">Pilar 02</Badge>
              </div>
              <h1 className="hero-title text-maroa-black">
                Multimedia & Studio
              </h1>
              <p className="text-lg text-maroa-gray-700 leading-relaxed font-normal">
                {service.description}
              </p>
              <div className="pt-2">
                <Button href="/contact?service=multimedia" variant="primary" size="lg" withArrow>
                  Diskusikan Kebutuhan Produksi
                </Button>
              </div>
            </div>

            {/* Aksen Mark Visual Resmi: maroa-play.png & maroa-shutter.png */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-maroa-gray-100 border border-maroa-gray-300 p-8 flex items-center justify-center shadow-card">
                <div className="relative w-full h-full">
                  <Image
                    src="/logos/maroa-play.png"
                    alt="MAROA Play Mark"
                    fill
                    className="object-contain"
                    sizes="224px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="w-full py-16 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Ruang Lingkup Studio
            </span>
            <h2 className="section-title text-maroa-black mt-2">
              Layanan Produksi Konten Audio-Visual
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.capabilities.map((cap, i) => (
              <Card key={i} className="flex flex-col gap-3 p-6">
                <div className="w-10 h-10 rounded-maroa-sm bg-maroa-red/10 flex items-center justify-center">
                  <Camera className="h-5 w-5 text-maroa-red" />
                </div>
                <h3 className="font-bold text-maroa-black text-base">{cap}</h3>
                <p className="text-xs text-maroa-gray-700 leading-relaxed">
                  Standar pencahayaan studio terkalibrasi, tata suara broadcast-grade, dan workflow editing terstruktur.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Studio */}
      <section className="w-full py-16 bg-maroa-gray-100/40 border-b border-maroa-gray-300/60">
        <div className="container-maroa">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Proses Produksi
            </span>
            <h2 className="section-title text-maroa-black mt-2">
              Dari Naskah Hingga Siaran Final
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300">
              <span className="text-xl font-black text-maroa-red">01</span>
              <h3 className="font-bold text-maroa-black mt-2">Pra-Produksi</h3>
              <p className="text-xs text-maroa-gray-700 mt-1 leading-relaxed">Penyusunan naskah, storyboard visual, casting, dan pengaturan teknis jadwal studio.</p>
            </div>
            <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300">
              <span className="text-xl font-black text-maroa-red">02</span>
              <h3 className="font-bold text-maroa-black mt-2">Produksi & Perekaman</h3>
              <p className="text-xs text-maroa-gray-700 mt-1 leading-relaxed">Sesi take rekaman dengan multi-kamera 4K, tata cahaya terarah, dan audio vokal multi-track.</p>
            </div>
            <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300">
              <span className="text-xl font-black text-maroa-red">03</span>
              <h3 className="font-bold text-maroa-black mt-2">Pascaproduksi</h3>
              <p className="text-xs text-maroa-gray-700 mt-1 leading-relaxed">Video editing, color grading, motion graphics, audio mastering, dan penambahan subtitle.</p>
            </div>
            <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300">
              <span className="text-xl font-black text-maroa-red">04</span>
              <h3 className="font-bold text-maroa-black mt-2">Distribusi Format</h3>
              <p className="text-xs text-maroa-gray-700 mt-1 leading-relaxed">Penyediaan format multi-rasio (horizontal 16:9, vertikal 9:16 untuk reels/shorts, dan audio podcast).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyek Terkait */}
      {relatedProjects.length > 0 && (
        <section className="w-full py-16 border-b border-maroa-gray-100">
          <div className="container-maroa">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
                Studi Kasus Terkait
              </span>
              <h2 className="text-2xl font-bold text-maroa-black mt-2">
                Produksi Konten & Studio yang Telah Berjalan
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/work/${p.slug}`}
                  className="group bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 hover-lift flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs text-maroa-gray-500">{p.clientDisplayName} · {p.year}</span>
                    <h3 className="text-lg font-bold text-maroa-black group-hover:text-maroa-red transition-colors mt-1">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-maroa-gray-700 mt-2 leading-relaxed">{p.summary}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-maroa-gray-100 text-xs font-semibold text-maroa-red inline-flex items-center gap-1">
                    <span>Lihat Studi Kasus</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Bottom */}
      <section className="w-full py-16 bg-maroa-white text-center">
        <div className="container-maroa max-w-xl flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-maroa-black">
            Siap Memulai Produksi Audio-Visual Anda?
          </h2>
          <p className="text-sm text-maroa-gray-700">
            Diskusikan kebutuhan video profil, serial podcast, atau siaran langsung event bersama tim MAROA Studio.
          </p>
          <div className="pt-2">
            <Button href="/contact?service=multimedia" variant="primary" size="md" withArrow>
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
