import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090909",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://maroa.co.id"),
  title: {
    default: "MAROA — Creative Technology & Experience Company",
    template: "%s | MAROA",
  },
  description:
    "PT MAROA MEDIA MABBARAKKA mengintegrasikan penyelenggaraan event profesional, produksi studio multimedia, dan pengembangan solusi teknologi web korporat.",
  keywords: [
    "MAROA",
    "PT MAROA MEDIA MABBARAKKA",
    "Events & Experiences",
    "Multimedia & Studio",
    "Digital & Web Applications",
    "Event Management Pinrang",
    "Event Management Sulawesi Selatan",
    "Creative Technology Company Indonesia",
    "Web Development",
    "Live Streaming Studio",
  ],
  authors: [{ name: "PT MAROA MEDIA MABBARAKKA" }],
  creator: "PT MAROA MEDIA MABBARAKKA",
  publisher: "PT MAROA MEDIA MABBARAKKA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MAROA — Creative Technology & Experience Company",
    description:
      "Mengintegrasikan event, multimedia, dan teknologi digital untuk menghadirkan pengalaman berdampak nyata.",
    url: "https://maroa.co.id",
    siteName: "MAROA",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logos/maroa-main-signal.png",
        width: 1200,
        height: 630,
        alt: "MAROA — Creative Technology & Experience Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAROA — Creative Technology & Experience Company",
    description:
      "Penyelenggaraan event, produksi konten multimedia, dan pengembangan sistem aplikasi web.",
    images: ["/logos/maroa-main-signal.png"],
  },
  icons: {
    icon: "/logos/maroa-app-icon.png",
    apple: "/logos/maroa-monogram.png",
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
        <Header />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
