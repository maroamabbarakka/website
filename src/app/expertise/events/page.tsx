import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CalendarDays, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { initialServices, initialProjects } from "@/data/initialData";

export const metadata = {
  title: "Events & Experiences — Manajemen Event Profesional | MAROA",
  description:
    "Layanan penyelenggaraan event korporat, konferensi, aktivasi merek, dan koordinasi multimedia panggung terintegrasi teknologi.",
};

export default function EventsPage() {
  const service = initialServices.find((s) => s.slug === "events")!;
  const relatedProjects = initialProjects.filter(
    (p) => (p.category === "events" || p.category === "integrated") && p.isPublished
  );

  return (
    <div className="w-full bg-maroa-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-maroa-gray-100/70 to-maroa-white py-16 lg:py-24 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="max-w-3xl flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Link href="/expertise" className="text-xs text-maroa-gray-500 hover:text-maroa-red transition-colors">
                Expertise
              </Link>
              <span className="text-xs text-maroa-gray-300">/</span>
              <Badge variant="red">Pilar 01</Badge>
            </div>
            <h1 className="hero-title text-maroa-black">
              Events & Experiences
            </h1>
            <p className="text-lg text-maroa-gray-700 leading-relaxed font-normal">
              {service.description}
            </p>
            <div className="pt-2">
              <Button href="/contact?service=events" variant="primary" size="lg" withArrow>
                Konsultasikan Event Anda
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="w-full py-16 border-b border-maroa-gray-100">
        <div className="container-maroa">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Ruang Lingkup Layanan
            </span>
            <h2 className="section-title text-maroa-black mt-2">
              Kapabilitas Manajemen Event & Aktivasi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.capabilities.map((cap, i) => (
              <Card key={i} className="flex flex-col gap-3 p-6">
                <div className="w-10 h-10 rounded-maroa-sm bg-maroa-red/10 flex items-center justify-center">
                  <CalendarDays className="h-5 w-5 text-maroa-red" />
                </div>
                <h3 className="font-bold text-maroa-black text-base">{cap}</h3>
                <p className="text-xs text-maroa-gray-700 leading-relaxed">
                  Dikelola dengan perencanaan terinci, alur komando panggung terstandarisasi, dan koordinasi teknis komprehensif.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="w-full py-16 bg-maroa-gray-100/40 border-b border-maroa-gray-300/60">
        <div className="container-maroa">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Alur Kerja
            </span>
            <h2 className="section-title text-maroa-black mt-2">
              Dari Brief Konsep Hingga Panggung Utama
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300">
              <span className="text-xl font-black text-maroa-red">Fase 1</span>
              <h3 className="font-bold text-maroa-black mt-2">Konsep & Perencanaan</h3>
              <p className="text-xs text-maroa-gray-700 mt-1 leading-relaxed">Penyusunan rundown detail, layout venue, alur kedatangan peserta, dan spesifikasi teknis panggung.</p>
            </div>
            <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300">
              <span className="text-xl font-black text-maroa-red">Fase 2</span>
              <h3 className="font-bold text-maroa-black mt-2">Koordinasi & Gladi Bersih</h3>
              <p className="text-xs text-maroa-gray-700 mt-1 leading-relaxed">Sinkronisasi lighting, sound system, multimedia backdrop, serta simulasi sistem registrasi.</p>
            </div>
            <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300">
              <span className="text-xl font-black text-maroa-red">Fase 3</span>
              <h3 className="font-bold text-maroa-black mt-2">Eksekusi Hari H</h3>
              <p className="text-xs text-maroa-gray-700 mt-1 leading-relaxed">Manajemen panggung tepat waktu, penanganan tamu VIP, live production siaran langsung, dan dokumentasi.</p>
            </div>
            <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300">
              <span className="text-xl font-black text-maroa-red">Fase 4</span>
              <h3 className="font-bold text-maroa-black mt-2">Pasca-Event & Evaluasi</h3>
              <p className="text-xs text-maroa-gray-700 mt-1 leading-relaxed">Penyerahan video dokumentasi, foto rekaman, rekapitulasi data kehadiran peserta, dan laporan akhir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyek Terkait */}
      {relatedProjects.length > 0 && (
        <section className="w-full py-16 border-b border-maroa-gray-100">
          <div className="container-maroa">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
                Studi Kasus Terkait
              </span>
              <h2 className="text-2xl font-bold text-maroa-black mt-2">
                Penyelenggaraan Event yang Telah Berjalan
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/work/${p.slug}`}
                  className="group bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 hover-lift flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs text-maroa-gray-500">{p.clientDisplayName} · {p.year}</span>
                    <h3 className="text-lg font-bold text-maroa-black group-hover:text-maroa-red transition-colors mt-1">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-maroa-gray-700 mt-2 leading-relaxed">{p.summary}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-maroa-gray-100 text-xs font-semibold text-maroa-red inline-flex items-center gap-1">
                    <span>Lihat Studi Kasus</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Bottom */}
      <section className="w-full py-16 bg-maroa-white text-center">
        <div className="container-maroa max-w-xl flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-maroa-black">
            Rencanakan Event Perusahaan Anda Bersama MAROA
          </h2>
          <p className="text-sm text-maroa-gray-700">
            Dapatkan proposal konsep dan rencana manajemen penyelenggaraan event yang terukur.
          </p>
          <div className="pt-2">
            <Button href="/contact?service=events" variant="primary" size="md" withArrow>
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
