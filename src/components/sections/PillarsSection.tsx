"use client";

import React from "react";
import Link from "next/link";
import { initialServices } from "@/data/initialData";
import { Card } from "@/components/ui/Card";
import { CalendarDays, Camera, Laptop, ArrowRight, CheckCircle2 } from "lucide-react";

export function PillarsSection() {
  // Hanya ambil 3 pilar utama (events, multimedia, digital)
  const corePillars = initialServices.filter((s) => s.category !== "venture");

  const getPillarIcon = (category: string) => {
    switch (category) {
      case "events":
        return <CalendarDays className="h-7 w-7 text-maroa-red" />;
      case "multimedia":
        return <Camera className="h-7 w-7 text-maroa-red" />;
      case "digital":
        return <Laptop className="h-7 w-7 text-maroa-red" />;
      default:
        return <CheckCircle2 className="h-7 w-7 text-maroa-red" />;
    }
  };

  return (
    <section className="w-full py-20 bg-maroa-white border-b border-maroa-gray-100">
      <div className="container-maroa">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Our Core Business
            </span>
            <h2 className="section-title text-maroa-black">
              Tiga Pilar Keahlian. Solusi Kreatif & Teknologi Terpadu.
            </h2>
            <p className="text-base text-maroa-gray-700 leading-relaxed">
              Kami menyatukan pengalaman panggung, kekuatan storytelling multimedia, dan kecakapan rekayasa perangkat lunak dalam satu sinergi eksekusi yang solid.
            </p>
          </div>
          <Link
            href="/expertise"
            className="inline-flex items-center text-sm font-semibold text-maroa-red hover:text-maroa-red-dark transition-colors group self-start md:self-auto"
          >
            <span>Eksplorasi Seluruh Layanan</span>
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corePillars.map((pillar) => (
            <Card key={pillar.id} className="flex flex-col justify-between h-full bg-maroa-white border-maroa-gray-300 hover:border-maroa-red/40 transition-colors">
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-maroa-sm bg-maroa-red/10 flex items-center justify-center mb-6">
                  {getPillarIcon(pillar.category)}
                </div>

                {/* Title */}
                <h3 className="card-title text-maroa-black mb-3">
                  {pillar.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-maroa-gray-700 leading-relaxed mb-6">
                  {pillar.summary}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-maroa-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-maroa-charcoal">
                    Ruang Lingkup:
                  </p>
                  <ul className="space-y-2 text-xs text-maroa-gray-700">
                    {pillar.capabilities.slice(0, 4).map((cap, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-maroa-red mt-1.5 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <Link
                href={`/expertise/${pillar.slug}`}
                className="inline-flex items-center text-sm font-semibold text-maroa-charcoal hover:text-maroa-red transition-colors group pt-4 border-t border-maroa-gray-100"
              >
                <span>Pelajari Layanan {pillar.shortTitle}</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
