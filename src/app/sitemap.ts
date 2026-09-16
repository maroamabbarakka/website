import { MetadataRoute } from "next";
import { initialProjects, initialInsights } from "@/data/initialData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://maroamedia.web.app";
  const now = new Date();

  // Rute Publik Statis Utama (dengan trailing slash sesuai konfigurasi next.config.mjs)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/expertise/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/expertise/events/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/expertise/multimedia/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/expertise/digital/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/work/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/insights/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${siteUrl}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/start-a-project/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/legal/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/terms/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/cookies/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/accessibility/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/security/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  // Rute Artikel Wawasan & Edukasi
  const insightRoutes: MetadataRoute.Sitemap = initialInsights
    .filter((i) => i.status === "published")
    .map((i) => ({
      url: `${siteUrl}/insights/${i.slug}/`,
      lastModified: new Date(`${i.publishedAt}T00:00:00Z`),
      changeFrequency: "monthly",
      priority: 0.75,
    }));

  // Rute Portofolio & Studi Kasus
  const projectRoutes: MetadataRoute.Sitemap = initialProjects
    .filter((p) => p.isPublished)
    .map((p) => ({
      url: `${siteUrl}/work/${p.slug}/`,
      lastModified: new Date(`${p.publishedAt}T00:00:00Z`),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticRoutes, ...insightRoutes, ...projectRoutes];
}
