import React from "react";
import Link from "next/link";
import { Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

export function IntegratedApproachSection() {
  const highlights = [
    {
      icon: <Layers className="h-6 w-6 text-maroa-red" />,
      title: "Satu Titik Tanggung Jawab",
      desc: "Tidak ada silo antardisiplin. Koordinasi panggung, visual siaran, dan platform registrasi berada dalam satu komando terpadu.",
    },
    {
      icon: <Zap className="h-6 w-6 text-maroa-red" />,
      title: "Kecepatan & Konsistensi",
      desc: "Bahasa visual, identitas brand, dan aset kampanye mengalir mulus dari media sosial, siaran panggung, hingga platform web.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-maroa-red" />,
      title: "Standar Korporat & Pemerintahan",
      desc: "Proses kerja terdokumentasi, tata kelola kepatuhan privasi (UU PDP & PSE), serta ketepatan waktu eksekusi.",
    },
  ];

  return (
    <section className="w-full py-20 bg-maroa-white">
      <div className="container-maroa">
        <div className="bg-maroa-black text-maroa-white rounded-maroa-lg p-8 md:p-14 lg:p-16 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 -z-0 h-80 w-80 rounded-full bg-maroa-red/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroa-red/20 text-maroa-red text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Pendekatan Terintegrasi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-maroa-white mb-6">
              On Stage. On Screen. Online.
            </h2>
            <p className="text-base sm:text-lg text-maroa-gray-300 leading-relaxed">
              Banyak proyek kehilangan momentum karena tim event, rumah produksi video, dan pengembang web bekerja terpisah tanpa koordinasi. MAROA menghapus friksi tersebut dengan menghadirkan ketiganya dalam satu ekosistem terpadu.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-maroa-charcoal">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-maroa-sm bg-maroa-charcoal flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-maroa-white">
                  {item.title}
                </h3>
                <p className="text-sm text-maroa-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-12 pt-8 border-t border-maroa-charcoal/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-maroa-gray-300">
              Ingin mendiskusikan kebutuhan aktivasi, konten, atau sistem digital Anda?
            </span>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-maroa-sm bg-maroa-red hover:bg-maroa-red-dark text-maroa-white text-sm font-semibold transition-colors shrink-0"
            >
              Konsultasikan Proyek Anda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
