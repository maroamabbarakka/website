import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { initialServices, initialSiteSettings } from "@/data/initialData";
import { CalendarDays, Camera, Laptop, Coffee, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us — PT MAROA MEDIA MABBARAKKA",
  description:
    "Profil resmi PT MAROA MEDIA MABBARAKKA: Creative Technology & Experience Company yang bergerak di bidang Events, Multimedia, dan Digital.",
};

export default function AboutPage() {
  const corePillars = initialServices.filter((s) => s.category !== "venture");
  const cafeVenture = initialServices.find((s) => s.category === "venture");

  return (
    <div className="w-full bg-maroa-white">
      {/* Header Banner */}
      <section className="w-full bg-gradient-to-b from-maroa-gray-100/60 to-maroa-white py-16 lg:py-20 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Tentang Kami
            </span>
            <h1 className="hero-title text-maroa-black">
              Membangun Dampak Nyata Lewat Kreativitas & Teknologi.
            </h1>
            <p className="text-lg text-maroa-gray-700 leading-relaxed">
              PT MAROA MEDIA MABBARAKKA adalah *Creative Technology & Experience Company* yang berbasis di Indonesia, menghadirkan sinergi penyelenggaraan event, produksi multimedia, dan platform web modern.
            </p>
          </div>
        </div>
      </section>

      {/* Identitas & Positioning */}
      <section className="w-full py-16 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-maroa-charcoal">
                Filosofi & Pendekatan
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-maroa-black leading-tight">
                Menghubungkan Gagasan, Manusia, dan Solusi Digital.
              </h2>
              <p className="text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
                Kami percaya bahwa pengalaman panggung yang luar biasa, konten video yang menggugah, dan sistem aplikasi yang handal seharusnya tidak berjalan secara terpisah. Ketika ketiganya diintegrasikan secara terpadu, pesan perusahaan dapat tersampaikan secara utuh kepada publik dan pemangku kepentingan.
              </p>
              <div className="p-4 rounded-maroa-sm bg-maroa-gray-100 border-l-4 border-maroa-red text-sm text-maroa-charcoal italic">
                &ldquo;On Stage · On Screen · Online — Memastikan setiap sentuhan komunikasi Anda memiliki resonansi kuat di setiap medium.&rdquo;
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-maroa-md overflow-hidden border border-maroa-gray-300 shadow-card bg-maroa-charcoal">
                <Image
                  src="/mockups/04-about-responsive.png"
                  alt="Tentang PT MAROA MEDIA MABBARAKKA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Utama & Model Operasional */}
      <section className="w-full py-16 bg-maroa-gray-100/40 border-b border-maroa-gray-300/60">
        <div className="container-maroa">
          <div className="max-w-2xl mb-12 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Model Operasional
            </span>
            <h2 className="section-title text-maroa-black">
              Fondasi Tangkas & Jaringan Kolaboratif.
            </h2>
            <p className="text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
              MAROA beroperasi dengan tim inti profesional yang tangkas, didukung oleh jaringan talenta spesialis, penyedia teknologi panggung, dan mitra produksi terverifikasi untuk menjamin kualitas standar korporat pada setiap skala proyek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col gap-3">
              <CheckCircle2 className="h-6 w-6 text-maroa-red" />
              <h3 className="text-base font-bold text-maroa-black">Fokus Pada Hasil</h3>
              <p className="text-xs sm:text-sm text-maroa-gray-700 leading-relaxed">
                Setiap detail diarahkan pada pencapaian obyektif proyek, baik berupa kepuasan audiens, keterlibatan publik, maupun efisiensi proses digital.
              </p>
            </Card>

            <Card className="flex flex-col gap-3">
              <CheckCircle2 className="h-6 w-6 text-maroa-red" />
              <h3 className="text-base font-bold text-maroa-black">Kepatuhan & Integritas</h3>
              <p className="text-xs sm:text-sm text-maroa-gray-700 leading-relaxed">
                Menjaga standar keamanan informasi, prinsip privasi data (UU PDP No. 27/2022), serta transparansi legalitas sebagai badan usaha resmi.
              </p>
            </Card>

            <Card className="flex flex-col gap-3">
              <CheckCircle2 className="h-6 w-6 text-maroa-red" />
              <h3 className="text-base font-bold text-maroa-black">Teknologi Mutakhir</h3>
              <p className="text-xs sm:text-sm text-maroa-gray-700 leading-relaxed">
                Mengadopsi platform web modern, perangkat siaran berstandar industri, dan sistem otomatisasi untuk memastikan keunggulan eksekusi.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tiga Pilar Inti */}
      <section className="w-full py-16 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Layanan Inti
            </span>
            <h2 className="section-title text-maroa-black mt-2">
              Bidang Kompetensi Perusahaan.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar) => (
              <div key={pillar.id} className="p-6 rounded-maroa-md border border-maroa-gray-300 bg-maroa-white flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-maroa-black mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-maroa-gray-700 leading-relaxed mb-4">{pillar.summary}</p>
                </div>
                <Link
                  href={`/expertise/${pillar.slug}`}
                  className="text-xs font-semibold text-maroa-red hover:underline inline-flex items-center gap-1 mt-2"
                >
                  <span>Selengkapnya</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Venture: exótico Café (Secara subtil di bagian bawah) */}
      <section id="ventures" className="w-full py-14 bg-maroa-gray-100/30 border-b border-maroa-gray-200">
        <div className="container-maroa">
          <div className="max-w-xl mx-auto text-center mb-8">
            <Badge variant="gray" className="mb-2">Ventures & Hospitality</Badge>
            <h3 className="text-xl font-bold text-maroa-black">exótico Café & Spaces</h3>
            <p className="text-xs text-maroa-gray-700 mt-2">
              Unit pendukung hospitality dan ruang interaksi kreatif komunitas.
            </p>
          </div>

          {cafeVenture && (
            <div className="max-w-2xl mx-auto bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-maroa-red/10 flex items-center justify-center shrink-0">
                <Coffee className="h-8 w-8 text-maroa-red" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="font-bold text-maroa-black text-base">{cafeVenture.title}</h4>
                <p className="text-xs text-maroa-gray-700 mt-1 leading-relaxed">{cafeVenture.summary}</p>
                <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                  {cafeVenture.capabilities.map((cap, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-maroa-gray-100 text-maroa-gray-700">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="w-full py-16 bg-maroa-white text-center">
        <div className="container-maroa max-w-xl flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-maroa-black">
            Siap Berkolaborasi Bersama MAROA?
          </h2>
          <p className="text-sm text-maroa-gray-700">
            Hubungi kami untuk mendiskusikan konsep acara, kebutuhan produksi konten, atau pengembangan sistem digital Anda.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md" withArrow>
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
