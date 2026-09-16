import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function CtaBannerSection() {
  return (
    <section className="w-full py-20 lg:py-24 bg-maroa-white">
      <div className="container-maroa">
        <div className="bg-gradient-to-br from-maroa-black via-maroa-charcoal to-maroa-black text-maroa-white rounded-maroa-lg p-8 sm:p-12 lg:p-16 border border-maroa-charcoal flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl flex flex-col gap-4 text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
              Next-Level Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-maroa-white tracking-tight leading-tight">
              LET&apos;S CREATE SOMETHING REMARKABLE.
            </h2>
            <p className="text-base text-maroa-gray-300 leading-relaxed max-w-xl">
              Punya rencana penyelenggaraan event, produksi multimedia panggung &amp; studio, atau rekayasa sistem aplikasi web? Mari diskusikan ide Anda bersama tim MAROA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-maroa-sm bg-maroa-red hover:bg-maroa-red-dark text-maroa-white text-base font-semibold transition-colors shadow-lg group"
            >
              <span>Mulai Proyek</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/6281343511099"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-maroa-sm bg-maroa-charcoal hover:bg-maroa-gray-700 text-maroa-white border border-maroa-gray-700 text-base font-medium transition-colors gap-2"
            >
              <WhatsAppIcon size={18} className="text-emerald-400 shrink-0" />
              <span>WhatsApp Resmi</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
