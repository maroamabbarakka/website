import React from "react";
import Link from "next/link";
import Image from "next/image";
import { initialSiteSettings } from "@/data/initialData";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-maroa-black text-maroa-white border-t border-maroa-charcoal mt-auto">
      <div className="container-maroa py-12 lg:py-16">
        {/* Grid 4 Kolom yang Sangat Seimbang dan Simetris */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Kolom 1: Profil Perusahaan */}
          <div className="flex flex-col gap-3">
            <div className="relative h-9 w-36">
              <Image
                src="/logos/maroa-main-signal.png"
                alt="PT MAROA MEDIA MABBARAKKA"
                fill
                className="object-contain object-left brightness-0 invert"
                sizes="144px"
              />
            </div>
            <p className="text-maroa-red font-semibold text-xs tracking-wider uppercase">
              Creative Technology & Experience
            </p>
            <p className="text-maroa-gray-400 text-xs sm:text-sm leading-relaxed">
              Mengintegrasikan penyelenggaraan event, produksi multimedia panggung, dan sistem aplikasi web korporat.
            </p>
            <div className="flex items-start gap-2 text-xs text-maroa-gray-400 mt-1">
              <MapPin className="h-3.5 w-3.5 text-maroa-red shrink-0 mt-0.5" />
              <span>{initialSiteSettings.addressPublic}</span>
            </div>
          </div>

          {/* Kolom 2: Core Pillars */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-maroa-white">
              Core Pillars
            </h2>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-maroa-gray-400">
              <li>
                <Link href="/expertise/events" className="hover:text-maroa-white transition-colors flex items-center gap-1 group">
                  <span>Events & Experiences</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-maroa-red" />
                </Link>
              </li>
              <li>
                <Link href="/expertise/multimedia" className="hover:text-maroa-white transition-colors flex items-center gap-1 group">
                  <span>Multimedia & Studio</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-maroa-red" />
                </Link>
              </li>
              <li>
                <Link href="/expertise/digital" className="hover:text-maroa-white transition-colors flex items-center gap-1 group">
                  <span>Digital & Web Applications</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-maroa-red" />
                </Link>
              </li>
              <li className="pt-1.5 border-t border-maroa-charcoal">
                <Link href="/about#ventures" className="text-xs text-maroa-gray-500 hover:text-maroa-gray-300 transition-colors">
                  Ventures: MAROA Café & Spaces
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Perusahaan & Kepatuhan */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-maroa-white">
              Company & Legal
            </h2>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-maroa-gray-400">
              <li>
                <Link href="/about" className="hover:text-maroa-white transition-colors">
                  About MAROA
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-maroa-white transition-colors">
                  Selected Work & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/start-a-project" className="hover:text-maroa-red font-medium text-white transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-maroa-white transition-colors">
                  Legal Information
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-maroa-white transition-colors">
                  Privacy Notice & Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami / Direct Connect */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-maroa-white">
              Direct Connect
            </h2>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-maroa-gray-400">
              <li>
                <a
                  href="https://wa.me/6281343511099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                    {initialSiteSettings.phonePublic}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={initialSiteSettings.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors flex items-center gap-2 group"
                >
                  <InstagramIcon className="h-4 w-4 text-pink-400 shrink-0" />
                  <span className="font-medium text-white group-hover:text-pink-400 transition-colors">
                    @maroaproject
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${initialSiteSettings.primaryEmail}`}
                  className="hover:text-maroa-white transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-maroa-red shrink-0" />
                  <span>{initialSiteSettings.primaryEmail}</span>
                </a>
              </li>
              <li className="pt-2 text-[11px] text-maroa-gray-500 leading-normal border-t border-maroa-charcoal">
                Senin – Sabtu · 09:00 – 18:00 WITA<br />
                Respons cepat via WhatsApp resmi
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Pembatas Bawah dengan Area Aman Tombol Floating WhatsApp */}
        <div className="mt-10 pt-6 border-t border-maroa-charcoal/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-maroa-gray-500 sm:pr-48">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} PT MAROA MEDIA MABBARAKKA.</span>
            <span className="hidden sm:inline text-maroa-gray-700">·</span>
            <span>On Stage · On Screen · Online</span>
          </div>

          {/* Status PSE */}
          <div className="text-center sm:text-right">
            {initialSiteSettings.pseRegistered && initialSiteSettings.pseRegistrationNumber ? (
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-maroa-charcoal text-maroa-gray-300 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>TDPSE No: {initialSiteSettings.pseRegistrationNumber}</span>
              </div>
            ) : (
              <span className="text-maroa-gray-500 text-[11px]">
                Sistem Elektronik dalam proses kesiapan pendaftaran PSE Komdigi
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
