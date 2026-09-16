import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { initialProjects } from "@/data/initialData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DeviceMockupShowcase } from "@/components/ui/DeviceMockupShowcase";
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, User, Layers, Sparkles } from "lucide-react";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return initialProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = initialProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.seoTitle || `${project.title} — Case Study | MAROA`,
    description: project.seoDescription || project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = initialProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Cari proyek selanjutnya
  const currentIndex = initialProjects.findIndex((p) => p.slug === slug);
  const nextProject = initialProjects[(currentIndex + 1) % initialProjects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `https://maroamedia.web.app/work/${project.slug}#creativework`,
        "url": `https://maroamedia.web.app/work/${project.slug}`,
        "name": project.title,
        "headline": project.summary,
        "description": project.seoDescription || project.summary,
        "image": project.heroImage.startsWith("http") ? project.heroImage : `https://maroamedia.web.app${project.heroImage}`,
        "dateCreated": `${project.year}-01-01`,
        "inLanguage": "id-ID",
        "creator": {
          "@type": "Corporation",
          "name": "PT MAROA MEDIA MABBARAKKA",
          "url": "https://maroamedia.web.app"
        },
        "provider": {
          "@type": "Corporation",
          "name": "PT MAROA MEDIA MABBARAKKA"
        },
        "publisher": {
          "@type": "Corporation",
          "name": "PT MAROA MEDIA MABBARAKKA",
          "url": "https://maroamedia.web.app"
        },
        "sponsor": {
          "@type": "Organization",
          "name": project.clientDisplayName
        },
        "keywords": [
          project.category,
          ...project.services,
          "Portfolio MAROA",
          "Pinrang",
          "Sulawesi Selatan"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://maroamedia.web.app/work/${project.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://maroamedia.web.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Karya",
            "item": "https://maroamedia.web.app/work"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://maroamedia.web.app/work/${project.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full bg-maroa-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Breadcrumb & Back */}
      <section className="w-full pt-10 pb-6 border-b border-maroa-gray-100 bg-maroa-white">
        <div className="container-maroa">
          <Link
            href="/work"
            className="inline-flex items-center text-xs font-semibold text-maroa-gray-500 hover:text-maroa-red transition-colors mb-6 group"
          >
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Semua Karya</span>
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="red" className="uppercase tracking-wider">
              {project.category}
            </Badge>
            <span className="text-xs text-maroa-gray-500">Tahun {project.year}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-maroa-black leading-tight max-w-4xl">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-maroa-gray-700 mt-4 max-w-3xl leading-relaxed">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Project Facts Bar */}
      <section className="w-full py-6 bg-maroa-gray-100/60 border-b border-maroa-gray-300">
        <div className="container-maroa">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            <div className="flex flex-col gap-1">
              <span className="text-maroa-gray-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-maroa-red" />
                <span>Klien</span>
              </span>
              <span className="font-bold text-maroa-black text-sm">{project.clientDisplayName}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-maroa-gray-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-maroa-red" />
                <span>Tahun Eksekusi</span>
              </span>
              <span className="font-bold text-maroa-black text-sm">{project.year}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-maroa-gray-500 font-medium uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-maroa-red" />
                <span>Pilar Utama</span>
              </span>
              <span className="font-bold text-maroa-black text-sm uppercase">{project.category}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-maroa-gray-500 font-medium uppercase tracking-wider">
                Lingkup Servis
              </span>
              <span className="font-bold text-maroa-black text-sm truncate">
                {project.services.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Visual Multi-Device Showcase Mockup */}
      <section className="w-full py-8 sm:py-12 bg-maroa-white border-b border-maroa-gray-100">
        <div className="container-maroa">
          <DeviceMockupShowcase
            desktopImage={project.heroImage}
            mobileImage={project.mobileImage}
            title={project.title}
            category={project.category}
          />
        </div>
      </section>

      {/* Deep-Dive Case Study: Challenge, Approach, Execution, Outcome */}
      <section className="w-full py-16">
        <div className="container-maroa">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Kolom Kiri: Uraian Studi Kasus (8 Kolom) */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {/* Challenge */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
                  01. Tantangan
                </span>
                <h2 className="text-2xl font-bold text-maroa-black">
                  Tantangan & Kompleksitas Proyek
                </h2>
                <p className="text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Approach */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
                  02. Pendekatan
                </span>
                <h2 className="text-2xl font-bold text-maroa-black">
                  Strategi & Formulasi Solusi
                </h2>
                <p className="text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* Execution */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
                  03. Eksekusi
                </span>
                <h2 className="text-2xl font-bold text-maroa-black">
                  Implementasi Lapangan & Teknis
                </h2>
                <p className="text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
                  {project.execution}
                </p>
              </div>

              {/* Outcome */}
              <div className="p-6 sm:p-8 rounded-maroa-md bg-maroa-gray-100/70 border border-maroa-gray-300 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
                  04. Hasil & Dampak
                </span>
                <h2 className="text-2xl font-bold text-maroa-black">
                  Capaian & Hasil Faktual
                </h2>
                <p className="text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
                  {project.outcome}
                </p>
              </div>

              {/* Fitur & Modul Sistem Nyata */}
              {project.features && project.features.length > 0 && (
                <div className="flex flex-col gap-6 pt-6 border-t border-maroa-gray-200">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-maroa-red" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
                      Fitur & Spesifikasi Teknis Sistem
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-maroa-black">
                    Modul & Kapabilitas Fungsional
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feat, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-maroa-sm bg-maroa-white border border-maroa-gray-300 shadow-sm space-y-1.5"
                      >
                        <h4 className="text-sm font-bold text-maroa-charcoal flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-maroa-red shrink-0" />
                          <span>{feat.title}</span>
                        </h4>
                        <p className="text-xs text-maroa-gray-700 leading-relaxed pl-3.5">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Kolom Kanan: Metrik Faktual & Layanan Terlibat (4 Kolom) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {project.metrics && project.metrics.length > 0 && (
                <div className="bg-maroa-charcoal text-maroa-white p-6 rounded-maroa-md border border-maroa-charcoal flex flex-col gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-maroa-white">
                    Metrik Kunci Proyek
                  </h3>
                  <div className="grid grid-cols-1 gap-4 pt-2 border-t border-maroa-gray-700">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-2xl font-extrabold text-maroa-red">{m.value}</span>
                        <span className="text-xs text-maroa-gray-300">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300 flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-maroa-charcoal">
                  Layanan Yang Diterapkan
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-maroa-gray-700">
                  {project.services.map((srv, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-maroa-red shrink-0" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Media */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="w-full py-14 bg-maroa-gray-100/40 border-t border-b border-maroa-gray-200">
          <div className="container-maroa">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
                Dokumentasi
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-maroa-black mt-1">
                Galeri Visual Eksekusi
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative aspect-[16/10] rounded-maroa-md overflow-hidden border border-maroa-gray-300 bg-maroa-charcoal">
                  <Image
                    src={img}
                    alt={`${project.title} - Visual ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigasi Proyek Selanjutnya & CTA */}
      <section className="w-full py-16 bg-maroa-white border-b border-maroa-gray-100">
        <div className="container-maroa flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-xs text-maroa-gray-500">Studi Kasus Selanjutnya</span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="text-lg font-bold text-maroa-black hover:text-maroa-red transition-colors inline-flex items-center gap-2 mt-1"
            >
              <span>{nextProject.title}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Button href="/contact" variant="primary" size="md" withArrow>
            Mulai Proyek Anda
          </Button>
        </div>
      </section>
    </div>
  );
}
