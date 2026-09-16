import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { initialInsights } from "@/data/initialData";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface InsightDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return initialInsights
    .filter((i) => i.status === "published")
    .map((i) => ({
      slug: i.slug,
    }));
}

export async function generateMetadata({ params }: InsightDetailProps) {
  const { slug } = await params;
  const insight = initialInsights.find((i) => i.slug === slug && i.status === "published");
  if (!insight) return { title: "Wawasan Tidak Ditemukan — MAROA" };

  return {
    title: insight.seoTitle || `${insight.title} — Wawasan MAROA`,
    description: insight.seoDescription || insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      images: [insight.coverImage],
    },
  };
}

export default async function InsightDetailPage({ params }: InsightDetailProps) {
  const { slug } = await params;
  const insight = initialInsights.find((i) => i.slug === slug && i.status === "published");

  if (!insight) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://maroamedia.web.app/insights/${insight.slug}/#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": `https://maroamedia.web.app/insights/${insight.slug}/`
        },
        "headline": insight.title,
        "description": insight.seoDescription || insight.excerpt,
        "image": insight.coverImage.startsWith("http") ? insight.coverImage : `https://maroamedia.web.app${insight.coverImage}`,
        "datePublished": insight.publishedAt,
        "dateModified": insight.publishedAt,
        "inLanguage": "id-ID",
        "author": {
          "@type": "Person",
          "name": insight.authorDisplayName
        },
        "publisher": {
          "@type": "Corporation",
          "name": "PT MAROA MEDIA MABBARAKKA",
          "url": "https://maroamedia.web.app/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://maroamedia.web.app/brand/LOGO_MAROA_PLAY_ORIGINAL.png"
          }
        },
        "mainEntityOfPage": `https://maroamedia.web.app/insights/${insight.slug}/`,
        "keywords": insight.tags.join(", ")
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://maroamedia.web.app/insights/${insight.slug}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://maroamedia.web.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Wawasan",
            "item": "https://maroamedia.web.app/insights/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": insight.title,
            "item": `https://maroamedia.web.app/insights/${insight.slug}/`
          }
        ]
      }
    ]
  };

  return (
    <article className="w-full bg-maroa-white py-16 lg:py-20">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-maroa max-w-3xl">
        <Link
          href="/insights"
          className="inline-flex items-center text-xs font-semibold text-maroa-gray-500 hover:text-maroa-red transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-1.5 h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Semua Wawasan</span>
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {insight.tags.map((t, idx) => (
            <Badge key={idx} variant="red">{t}</Badge>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-maroa-black leading-tight mb-6">
          {insight.title}
        </h1>

        <div className="flex items-center gap-6 text-xs text-maroa-gray-500 pb-8 border-b border-maroa-gray-200 mb-8">
          <span className="flex items-center gap-1.5 font-medium text-maroa-charcoal">
            <User className="h-4 w-4 text-maroa-red" />
            <span>{insight.authorDisplayName}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-maroa-red" />
            <span>{insight.publishedAt}</span>
          </span>
        </div>

        <div className="relative aspect-[16/9] w-full rounded-maroa-lg overflow-hidden border border-maroa-gray-300 shadow-card bg-maroa-charcoal mb-10">
          <Image
            src={insight.coverImage}
            alt={insight.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 768px"
          />
        </div>

        <div className="prose prose-sm sm:prose-base max-w-none text-maroa-gray-700 leading-relaxed space-y-6">
          <p className="text-base sm:text-lg font-medium text-maroa-black leading-relaxed">
            {insight.excerpt}
          </p>
          <div className="pt-4 border-t border-maroa-gray-100 text-sm sm:text-base leading-relaxed space-y-4">
            <p>{insight.body}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
