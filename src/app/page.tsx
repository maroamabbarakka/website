import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { ClientLogoCarouselSection } from "@/components/sections/ClientLogoCarouselSection";
import { IntegratedApproachSection } from "@/components/sections/IntegratedApproachSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";

import { JsonLd } from "@/components/seo/JsonLd";
import { initialSiteSettings } from "@/data/initialData";

export const metadata = {
  title: "MAROA — Creative Technology & Experience Company",
  description:
    "Solusi terintegrasi Events & Experiences, Multimedia & Studio, serta Digital & Web Applications oleh PT MAROA MEDIA MABBARAKKA.",
};

export default function HomePage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Corporation", "ProfessionalService"],
        "@id": "https://maroamedia.web.app/#organization",
        name: "PT MAROA MEDIA MABBARAKKA",
        legalName: "PT MAROA MEDIA MABBARAKKA",
        alternateName: "MAROA",
        url: "https://maroamedia.web.app",
        logo: "https://maroamedia.web.app/brand/LOGO_MAROA_PLAY_ORIGINAL.png",
        image: "https://maroamedia.web.app/brand/LOGO_MAROA_PLAY_ORIGINAL.png",
        description:
          "Perusahaan teknologi kreatif dan pengalaman terintegrasi di Pinrang, Sulawesi Selatan. Menyelenggarakan event kolosal profesional, produksi multimedia studio & videotron panggung, serta rekayasa aplikasi web korporat.",
        telephone: "+6281343511099",
        email: "maroamabbarakka@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pinrang",
          addressRegion: "Sulawesi Selatan",
          addressCountry: "ID",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+6281343511099",
            contactType: "customer service",
            availableLanguage: ["Indonesian", "English"],
          },
        ],
        sameAs: [
          "https://www.instagram.com/maroaproject/",
          "https://github.com/maroamabbarakka/website",
          "https://elayanan.ahu.go.id/perseroan-perseorangan/sertifikat/Perubahan Data/MAROA MEDIA MABBARAKKA",
          "https://ui-login.oss.go.id/verify/VB8EJgFmCzVea1E3VDZTOVQwBzRUZwVhAGFaYgFhB2IDNVJtUjANNVZmB2FSMg==",
        ],
        areaServed: [
          "Kabupaten Pinrang",
          "Sulawesi Selatan",
          "Sulawesi Barat",
          "Indonesia",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://maroamedia.web.app/#website",
        url: "https://maroamedia.web.app",
        name: "MAROA — Creative Technology & Experience Company",
        publisher: {
          "@id": "https://maroamedia.web.app/#organization",
        },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <HeroSection />
      <PillarsSection />
      <SelectedWorkSection />
      <ClientLogoCarouselSection />
      <IntegratedApproachSection />
      <ProcessSection />
      <CtaBannerSection />
    </>
  );
}
