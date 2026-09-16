import React from "react";
import Link from "next/link";
import Image from "next/image";
import { initialSiteSettings } from "@/data/initialData";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/SocialIcons";

interface FooterNavLinkProps {
  href: string;
  children: React.ReactNode;
  highlight?: boolean;
}

function FooterNavLink({ href, children, highlight = false }: FooterNavLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className={`group flex items-center justify-between gap-1.5 py-1 text-xs sm:text-sm transition-colors ${
          highlight
            ? "text-maroa-white font-semibold hover:text-maroa-red"
            : "text-maroa-gray-400 hover:text-maroa-white"
        }`}
      >
        <span className="group-hover:translate-x-1 transition-transform duration-200">
          {children}
        </span>
        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-maroa-red shrink-0" />
      </Link>
    </li>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-maroa-black text-maroa-white border-t border-maroa-charcoal mt-auto">
      <div className="container-maroa py-12 lg:py-16">
        {/* Grid 12 Kolom Simetris & Proporsional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Kolom 1: Profil Perusahaan & Saluran Kontak (Lebar 4/12 di Desktop) */}
          <div className="flex flex-col gap-4 lg:col-span-4 lg:pr-4">
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
              Creative Technology & Experience Company
            </p>
            <p className="text-maroa-gray-400 text-xs sm:text-sm leading-relaxed">
              Mengintegrasikan penyelenggaraan event, produksi multimedia panggung, dan teknologi aplikasi web untuk menciptakan dampak nyata bagi klien dan audiens.
            </p>

            {/* Saluran Kontak Terverifikasi */}
            <div className="flex flex-col gap-2.5 pt-2 text-xs sm:text-sm">
              <a
                href="https://wa.me/6281343511099"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-2 group w-fit"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                  {initialSiteSettings.phonePublic}
                </span>
                <span className="text-[10px] bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 px-1.5 py-0.5 rounded font-mono">
                  WhatsApp
                </span>
              </a>

              <a
                href={initialSiteSettings.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors flex items-center gap-2 group w-fit"
              >
                <InstagramIcon className="h-4 w-4 text-pink-400 shrink-0" />
                <span className="font-medium text-white group-hover:text-pink-400 transition-colors">
                  @maroaproject
                </span>
                <span className="text-[10px] bg-pink-950/70 text-pink-400 border border-pink-800/60 px-1.5 py-0.5 rounded font-mono">
                  Instagram
                </span>
              </a>

              <a
                href={`mailto:${initialSiteSettings.primaryEmail}`}
                className="hover:text-maroa-white transition-colors flex items-center gap-2 w-fit text-maroa-gray-300"
              >
                <Mail className="h-4 w-4 text-maroa-red shrink-0" />
                <span>{initialSiteSettings.primaryEmail}</span>
              </a>

              <div className="flex items-start gap-2 text-xs text-maroa-gray-400 mt-0.5">
                <MapPin className="h-4 w-4 text-maroa-red shrink-0 mt-0.5" />
                <span>{initialSiteSettings.addressPublic}</span>
              </div>
            </div>
          </div>

          {/* Kolom 2: Core Pillars (Lebar 3/12 di Desktop) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-maroa-white pb-1 border-b border-maroa-charcoal">
              Core Pillars
            </h2>
            <ul className="flex flex-col gap-1">
              <FooterNavLink href="/expertise/events">
                Events & Experiences
              </FooterNavLink>
              <FooterNavLink href="/expertise/multimedia">
                Multimedia & Studio
              </FooterNavLink>
              <FooterNavLink href="/expertise/digital">
                Digital & Web Applications
              </FooterNavLink>
              <div className="pt-2 mt-1 border-t border-maroa-charcoal/60">
                <FooterNavLink href="/about#ventures">
                  Ventures: MAROA Café
                </FooterNavLink>
              </div>
            </ul>
          </div>

          {/* Kolom 3: Company (Lebar 2/12 di Desktop) */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-maroa-white pb-1 border-b border-maroa-charcoal">
              Company
            </h2>
            <ul className="flex flex-col gap-1">
              <FooterNavLink href="/about">
                About MAROA
              </FooterNavLink>
              <FooterNavLink href="/expertise">
                All Expertise
              </FooterNavLink>
              <FooterNavLink href="/work">
                Selected Work
              </FooterNavLink>
              <FooterNavLink href="/contact">
                Contact Us
              </FooterNavLink>
              <FooterNavLink href="/start-a-project" highlight>
                Start a Project
              </FooterNavLink>
            </ul>
          </div>

          {/* Kolom 4: Compliance & Legal (Lebar 3/12 di Desktop - Semua Halaman Lengkap) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-maroa-white pb-1 border-b border-maroa-charcoal">
              Compliance & Legal
            </h2>
            <ul className="flex flex-col gap-1">
              <FooterNavLink href="/legal">
                Legal Information
              </FooterNavLink>
              <FooterNavLink href="/privacy">
                Privacy Notice
              </FooterNavLink>
              <FooterNavLink href="/terms">
                Terms of Use
              </FooterNavLink>
              <FooterNavLink href="/cookies">
                Cookie Preferences
              </FooterNavLink>
              <FooterNavLink href="/accessibility">
                Accessibility Statement
              </FooterNavLink>
              <FooterNavLink href="/security">
                Security & Disclosure
              </FooterNavLink>
            </ul>
          </div>
        </div>

        {/* Garis Pembatas Bawah dengan Area Aman Tombol Floating WhatsApp */}
        <div className="mt-12 pt-6 border-t border-maroa-charcoal/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-maroa-gray-500 sm:pr-48">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} PT MAROA MEDIA MABBARAKKA. Seluruh hak cipta dilindungi.</span>
            <span className="hidden sm:inline text-maroa-gray-700">·</span>
            <span className="text-maroa-gray-400">On Stage · On Screen · Online</span>
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
