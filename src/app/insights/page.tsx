import React from "react";
import Image from "next/image";
import Link from "next/link";
import { initialInsights } from "@/data/initialData";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Insights & Articles — Wawasan Korporat | MAROA",
  description:
    "Ulasan mendalam mengenai industri event terintegrasi, produksi multimedia, dan teknologi aplikasi web oleh tim MAROA.",
};

export default function InsightsPage() {
  const publishedInsights = initialInsights.filter((i) => i.status === "published");

  return (
    <div className="w-full bg-maroa-white">
      <section className="w-full bg-gradient-to-b from-maroa-gray-100/60 to-maroa-white py-16 lg:py-20 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Wawasan & Pemikiran
            </span>
            <h1 className="hero-title text-maroa-black">
              Corporate Insights & Perspectives.
            </h1>
            <p className="text-lg text-maroa-gray-700 leading-relaxed font-normal">
              Pandangan dan pengalaman tim MAROA dalam memadukan kreativitas panggung, produksi konten multimedia, dan rekayasa sistem web.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container-maroa">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publishedInsights.map((insight) => (
              <Link
                key={insight.id}
                href={`/insights/${insight.slug}`}
                className="group flex flex-col bg-maroa-white border border-maroa-gray-300 rounded-maroa-md overflow-hidden hover-lift shadow-card"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-maroa-charcoal">
                  <Image
                    src={insight.coverImage}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {insight.tags.map((t, idx) => (
                      <Badge key={idx} variant="dark">{t}</Badge>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-maroa-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3 text-maroa-red" />
                        <span>{insight.authorDisplayName}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-maroa-red" />
                        <span>{insight.publishedAt}</span>
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-maroa-black group-hover:text-maroa-red transition-colors line-clamp-2">
                      {insight.title}
                    </h2>

                    <p className="text-sm text-maroa-gray-700 mt-2 line-clamp-3 leading-relaxed">
                      {insight.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-maroa-gray-100 flex items-center justify-between text-xs font-semibold text-maroa-red">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
