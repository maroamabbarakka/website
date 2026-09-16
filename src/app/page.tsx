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
        "@type": "Organization",
        "@id": "https://maroa.co.id/#organization",
        name: initialSiteSettings.companyName,
        alternateName: initialSiteSettings.brandName,
        url: "https://maroa.co.id",
        logo: "https://maroa.co.id/logos/maroa-main-signal.png",
        contactPoint: {
          "@type": "ContactPoint",
          email: initialSiteSettings.primaryEmail,
          contactType: "customer service",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://maroa.co.id/#website",
        url: "https://maroa.co.id",
        name: "MAROA",
        publisher: {
          "@id": "https://maroa.co.id/#organization",
        },
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
