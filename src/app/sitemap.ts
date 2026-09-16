import { MetadataRoute } from "next";
import { initialProjects } from "@/data/initialData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maroa.co.id";
  const now = new Date();

  // Rute Publik Statis
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/expertise`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/expertise/events`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/expertise/multimedia`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/expertise/digital`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/start-a-project`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/security`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  // Rute Portofolio Dinamis
  const projectRoutes: MetadataRoute.Sitemap = initialProjects
    .filter((p) => p.isPublished)
    .map((p) => ({
      url: `${siteUrl}/work/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...projectRoutes];
}
