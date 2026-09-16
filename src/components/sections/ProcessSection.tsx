import React from "react";
import { Compass, PenTool, Play, BarChart3 } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover & Strategy",
      desc: "Menyelami tujuan bisnis, profil audiens, serta tantangan operasional untuk merumuskan arah solusi yang tepat sasaran.",
      icon: <Compass className="h-6 w-6 text-maroa-red" />,
    },
    {
      number: "02",
      title: "Plan & Create",
      desc: "Merancang konsep visual, tata ruang event, rancangan tata suara siaran, hingga wireframe dan arsitektur platform web.",
      icon: <PenTool className="h-6 w-6 text-maroa-red" />,
    },
    {
      number: "03",
      title: "Produce & Deliver",
      desc: "Eksekusi lapangan dengan standar disiplin tinggi: koordinasi panggung presisi, produksi multimedia siar, dan kompilasi sistem web aman.",
      icon: <Play className="h-6 w-6 text-maroa-red" />,
    },
    {
      number: "04",
      title: "Measure & Deliver",
      desc: "Penyerahan seluruh aset dokumentasi, pelaporan metrik partisipasi, dan evaluasi berkelanjutan untuk pengembangan masa depan.",
      icon: <BarChart3 className="h-6 w-6 text-maroa-red" />,
    },
  ];

  return (
    <section className="w-full py-20 bg-maroa-gray-100/40 border-b border-maroa-gray-300/60">
      <div className="container-maroa">
        <div className="max-w-2xl mx-auto text-center mb-16 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
            Metodologi Kerja
          </span>
          <h2 className="section-title text-maroa-black">
            Alur Eksekusi Terstruktur & Terukur.
          </h2>
          <p className="text-base text-maroa-gray-700 leading-relaxed">
            Setiap ide besar membutuhkan eksekusi disiplin. Kami menerapkan kerangka kerja terstandarisasi untuk menjamin kepastian kualitas dan ketepatan waktu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 flex flex-col justify-between shadow-card hover-lift relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-maroa-gray-300 tracking-tight">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-maroa-red/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-maroa-black mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-maroa-gray-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-maroa-gray-100">
                <span className="text-[11px] font-semibold text-maroa-red uppercase tracking-wider">
                  Tahap {step.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
