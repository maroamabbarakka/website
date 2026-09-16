import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { initialServices } from "@/data/initialData";
import { CalendarDays, Camera, Laptop, Coffee, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Expertise & Services — PT MAROA MEDIA MABBARAKKA",
  description:
    "Layanan terintegrasi MAROA: Events & Experiences, Multimedia & Studio, dan Digital & Web Applications.",
};

export default function ExpertisePage() {
  const corePillars = initialServices.filter((s) => s.category !== "venture");
  const cafeVenture = initialServices.find((s) => s.category === "venture");

  const getPillarIcon = (category: string) => {
    switch (category) {
      case "events":
        return <CalendarDays className="h-8 w-8 text-maroa-red" />;
      case "multimedia":
        return <Camera className="h-8 w-8 text-maroa-red" />;
      case "digital":
        return <Laptop className="h-8 w-8 text-maroa-red" />;
      default:
        return <CheckCircle2 className="h-8 w-8 text-maroa-red" />;
    }
  };

  return (
    <div className="w-full bg-maroa-white">
      {/* Header Banner */}
      <section className="w-full bg-gradient-to-b from-maroa-gray-100/60 to-maroa-white py-16 lg:py-20 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Our Capabilities
            </span>
            <h1 className="hero-title text-maroa-black">
              Integrated Solutions for a Brighter Tomorrow.
            </h1>
            <p className="text-lg text-maroa-gray-700 leading-relaxed">
              Tiga pilar bisnis yang saling melengkapi untuk merancang pengalaman langsung, memproduksi narasi visual bernilai tinggi, dan mengoperasikan platform teknologi mutakhir.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars Detailed */}
      <section className="w-full py-16 border-b border-maroa-gray-100">
        <div className="container-maroa space-y-16">
          {corePillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 lg:p-12 rounded-maroa-lg border border-maroa-gray-300 bg-maroa-white shadow-card ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="w-14 h-14 rounded-maroa-sm bg-maroa-red/10 flex items-center justify-center">
                  {getPillarIcon(pillar.category)}
                </div>
                <div>
                  <Badge variant="red" className="mb-2">Pilar 0{pillar.order}</Badge>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-maroa-black">
                    {pillar.title}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="pt-2">
                  <Button href={`/expertise/${pillar.slug}`} variant="primary" size="md" withArrow>
                    Pelajari Layanan {pillar.shortTitle}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-maroa-gray-100/70 rounded-maroa-md p-6 border border-maroa-gray-200">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-maroa-charcoal mb-4">
                  Cakupan Kapabilitas Teknis:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-maroa-gray-700">
                  {pillar.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-maroa-red mt-2 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Workflow Ringkas */}
      <section className="w-full py-16 bg-maroa-gray-100/40 border-b border-maroa-gray-300/60">
        <div className="container-maroa text-center max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
            Eksekusi Terpadu
          </span>
          <h2 className="section-title text-maroa-black mt-2">
            Bagaimana Kami Bekerja
          </h2>
          <p className="text-sm text-maroa-gray-700 mt-2">
            Dari pemetaan ide strategis hingga pengoperasian dan evaluasi data.
          </p>
        </div>

        <div className="container-maroa grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-maroa-white p-5 rounded-maroa-md border border-maroa-gray-300">
            <span className="text-2xl font-black text-maroa-red">01</span>
            <h3 className="font-bold text-maroa-black text-base mt-2">Discover</h3>
            <p className="text-xs text-maroa-gray-700 mt-1">Identifikasi sasaran proyek, profil audiens, dan spesifikasi teknis.</p>
          </div>
          <div className="bg-maroa-white p-5 rounded-maroa-md border border-maroa-gray-300">
            <span className="text-2xl font-black text-maroa-red">02</span>
            <h3 className="font-bold text-maroa-black text-base mt-2">Plan & Create</h3>
            <p className="text-xs text-maroa-gray-700 mt-1">Perancangan tata kelola panggung, storyboard video, dan arsitektur sistem.</p>
          </div>
          <div className="bg-maroa-white p-5 rounded-maroa-md border border-maroa-gray-300">
            <span className="text-2xl font-black text-maroa-red">03</span>
            <h3 className="font-bold text-maroa-black text-base mt-2">Produce</h3>
            <p className="text-xs text-maroa-gray-700 mt-1">Eksekusi panggung presisi, perekaman studio, serta deployment aplikasi.</p>
          </div>
          <div className="bg-maroa-white p-5 rounded-maroa-md border border-maroa-gray-300">
            <span className="text-2xl font-black text-maroa-red">04</span>
            <h3 className="font-bold text-maroa-black text-base mt-2">Measure</h3>
            <p className="text-xs text-maroa-gray-700 mt-1">Laporan pascaproyek, penyerahan seluruh aset master, dan evaluasi hasil.</p>
          </div>
        </div>
      </section>

      {/* Secondary Venture: MAROA Café */}
      {cafeVenture && (
        <section className="w-full py-14 bg-maroa-white border-b border-maroa-gray-100">
          <div className="container-maroa">
            <div className="max-w-3xl mx-auto bg-maroa-gray-100/60 border border-maroa-gray-300 rounded-maroa-md p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-maroa-charcoal text-maroa-white flex items-center justify-center shrink-0">
                <Coffee className="h-8 w-8 text-maroa-red" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <Badge variant="outline" className="mb-2">Secondary Venture</Badge>
                <h3 className="text-lg font-bold text-maroa-black">{cafeVenture.title}</h3>
                <p className="text-xs text-maroa-gray-700 mt-1 leading-relaxed">{cafeVenture.summary}</p>
                <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                  {cafeVenture.capabilities.map((c, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-maroa-white border border-maroa-gray-200 text-maroa-gray-700">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Bottom */}
      <section className="w-full py-16 bg-maroa-gray-100/30 text-center">
        <div className="container-maroa max-w-xl flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-maroa-black">
            Ingin Mengintegrasikan Layanan Kami?
          </h2>
          <p className="text-sm text-maroa-gray-700">
            Ceritakan tujuan dan ruang lingkup rencana proyek Anda kepada tim kami.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md" withArrow>
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
