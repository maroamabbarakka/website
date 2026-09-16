import React from "react";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Kontak & Mulai Proyek — PT MAROA MEDIA MABBARAKKA",
  description:
    "Hubungi PT MAROA MEDIA MABBARAKKA untuk konsultasi penyelenggaraan event, produksi multimedia studio, dan pengembangan aplikasi web korporat.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-maroa-white">
      {/* Header Banner */}
      <section className="w-full bg-gradient-to-b from-maroa-gray-100/60 to-maroa-white py-16 lg:py-20 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Hubungi Kami
            </span>
            <h1 className="hero-title text-maroa-black">
              Let&apos;s Bring Your Ideas to Life.
            </h1>
            <p className="text-lg text-maroa-gray-700 leading-relaxed font-normal">
              Kami siap berdiskusi mengenai penyelenggaraan event, produksi audio-visual, hingga pengembangan platform web korporat Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="w-full py-16">
        <div className="container-maroa">
          <ContactFormSection />
        </div>
      </section>
    </div>
  );
}
