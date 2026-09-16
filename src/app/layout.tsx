import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { SiteLayoutShell } from "@/components/layout/SiteLayoutShell";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090909",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://maroamedia.web.app"),
  title: {
    default: "MAROA — Creative Technology & Experience Company | PT MAROA MEDIA MABBARAKKA",
    template: "%s | PT MAROA MEDIA MABBARAKKA",
  },
  description:
    "PT MAROA MEDIA MABBARAKKA adalah perusahaan teknologi kreatif dan experience terintegrasi di Pinrang, Sulawesi Selatan. Spesialis manajemen event kolosal, produksi studio multimedia & videotron, serta rekayasa sistem aplikasi web korporat.",
  keywords: [
    "PT MAROA MEDIA MABBARAKKA",
    "MAROA",
    "MAROA Project",
    "Event Organizer Pinrang",
    "Event Organizer Sulawesi Selatan",
    "Event Management Sulsel",
    "Produksi Konten Multimedia",
    "Stage Videotron Multimedia",
    "Video Mapping Sulawesi",
    "Jasa Pembuatan Website Korporat",
    "Pengembangan Aplikasi Web Pinrang",
    "Live Streaming Multicamera",
    "Studio Podcast Pinrang",
    "Creative Technology Company Indonesia",
    "exótico Café",
    "Digital Registration QR System",
  ],
  authors: [{ name: "PT MAROA MEDIA MABBARAKKA", url: "https://maroamedia.web.app" }],
  creator: "PT MAROA MEDIA MABBARAKKA",
  publisher: "PT MAROA MEDIA MABBARAKKA",
  category: "Creative Technology & Event Production",
  alternates: {
    canonical: "https://maroamedia.web.app/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MAROA — Creative Technology & Experience Company",
    description:
      "Mengintegrasikan event, multimedia panggung & studio, serta rekayasa aplikasi web untuk menciptakan dampak nyata bagi audiens dan institusi.",
    url: "https://maroamedia.web.app",
    siteName: "PT MAROA MEDIA MABBARAKKA",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/brand/LOGO_MAROA_PLAY_ORIGINAL.png",
        width: 1200,
        height: 630,
        alt: "PT MAROA MEDIA MABBARAKKA — Creative Technology & Experience Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAROA — Creative Technology & Experience Company",
    description:
      "Penyelenggaraan event terpadu, produksi konten multimedia & videotron, dan sistem aplikasi web korporat.",
    images: ["/brand/LOGO_MAROA_PLAY_ORIGINAL.png"],
  },
  icons: {
    icon: "/brand/ICON_MAROA_ORIGINAL.png",
    apple: "/brand/ICON_MAROA_ORIGINAL.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "577a13a8411c14b6",
    other: {
      "msvalidate.01": "BD44AE50DCEA695064F1C86C6C6D1794",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-maroa-white text-maroa-ink selection:bg-maroa-red/20 selection:text-maroa-red">
        <SkipToContent />
        <SiteLayoutShell>{children}</SiteLayoutShell>
      </body>
    </html>
  );
}
