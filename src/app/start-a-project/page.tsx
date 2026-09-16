import React from "react";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Start a Project — PT MAROA MEDIA MABBARAKKA",
  description:
    "Ajukan kebutuhan proyek Anda kepada PT MAROA MEDIA MABBARAKKA: Events & Experiences, Multimedia & Studio, dan Digital & Web Applications.",
};

export default function StartAProjectPage() {
  return (
    <div className="w-full bg-maroa-white">
      {/* Header Banner */}
      <section className="w-full bg-gradient-to-b from-maroa-gray-100/60 to-maroa-white py-16 lg:py-20 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Pengajuan Proyek
            </span>
            <h1 className="hero-title text-maroa-black">
              Mulai Proyek Bersama MAROA.
            </h1>
            <p className="text-lg text-maroa-gray-700 leading-relaxed font-normal">
              Sampaikan ruang lingkup proyek, target waktu, dan ekspektasi hasil Anda. Tim kami akan menyiapkan proposal kerja sama terinci.
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
