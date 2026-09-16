import React from "react";
import Link from "next/link";
import Image from "next/image";
import { initialSiteSettings } from "@/data/initialData";
import { Mail, MapPin, ArrowUpRight, ExternalLink, Clock } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/SocialIcons";

interface FooterMenuLinkProps {
  href: string;
  children: React.ReactNode;
  highlight?: boolean;
}

function FooterMenuLink({ href, children, highlight = false }: FooterMenuLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className={`group flex items-center justify-between gap-1.5 py-1 text-xs sm:text-[13px] transition-colors ${
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
      <div className="container-maroa pt-12 pb-16 lg:pt-16 lg:pb-16">
        {/* BAGIAN ATAS: Profil Perusahaan & 3 Kolom Navigasi Utama (Portofolio Ditiadakan Sesuai Permintaan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
          {/* Kolom 1 (Kiri): Identitas Brand & Info Perusahaan (Lebar 5/12 di Desktop) */}
          <div className="flex flex-col gap-4 lg:col-span-5 lg:pr-8">
            <div className="relative h-9 w-40">
              <Image
                src="/brand/LOGO_MAROA_PLAY_DARK_SAFE.png"
                alt="PT MAROA MEDIA MABBARAKKA"
                fill
                className="object-contain object-left"
                sizes="160px"
              />
            </div>
            <p className="text-maroa-red font-semibold text-xs tracking-wider uppercase">
              Creative Technology & Experience Company
            </p>
            <p className="text-maroa-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-md">
              Mengintegrasikan penyelenggaraan event, produksi multimedia panggung & studio, serta rekayasa sistem aplikasi web untuk menciptakan dampak nyata bagi klien dan audiens.
            </p>
            <div className="flex items-start gap-2 text-xs text-maroa-gray-400 mt-1">
              <MapPin className="h-3.5 w-3.5 text-maroa-red shrink-0 mt-0.5" />
              <span>{initialSiteSettings.addressPublic}</span>
            </div>
          </div>

          {/* Kolom 2: Layanan & Pilar (Lebar 3/12 di Desktop) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-maroa-white pb-1.5 border-b border-maroa-charcoal">
              Layanan & Pilar
            </h2>
            <ul className="flex flex-col gap-0.5 pt-1">
              <FooterMenuLink href="/expertise/events">
                Events & Experiences
              </FooterMenuLink>
              <FooterMenuLink href="/expertise/multimedia">
                Multimedia & Studio
              </FooterMenuLink>
              <FooterMenuLink href="/expertise/digital">
                Digital & Web Applications
              </FooterMenuLink>
              <div className="pt-2 mt-1 border-t border-maroa-charcoal/60">
                <FooterMenuLink href="/about#ventures">
                  Ventures: exótico Café
                </FooterMenuLink>
              </div>
            </ul>
          </div>

          {/* Kolom 3: Sumber Daya (Lebar 2/12 di Desktop) */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-maroa-white pb-1.5 border-b border-maroa-charcoal">
              Sumber Daya
            </h2>
            <ul className="flex flex-col gap-0.5 pt-1">
              <FooterMenuLink href="/insights">
                Artikel & Insights
              </FooterMenuLink>
              <FooterMenuLink href="/insights/mengintegrasikan-teknologi-dalam-event-modern">
                Teknologi Event Modern
              </FooterMenuLink>
              <FooterMenuLink href="/insights/pentingnya-keamanan-dan-privasi-data-pada-web-korporat">
                Keamanan & UU PDP
              </FooterMenuLink>
              <FooterMenuLink href="/contact">
                Hubungi Konsultan
              </FooterMenuLink>
            </ul>
          </div>

          {/* Kolom 4: Perusahaan (Lebar 2/12 di Desktop) */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-maroa-white pb-1.5 border-b border-maroa-charcoal">
              Perusahaan
            </h2>
            <ul className="flex flex-col gap-0.5 pt-1">
              <FooterMenuLink href="/about">
                Tentang MAROA
              </FooterMenuLink>
              <FooterMenuLink href="/expertise">
                Kapabilitas & Keahlian
              </FooterMenuLink>
              <FooterMenuLink href="/work">
                Selected Work
              </FooterMenuLink>
              <FooterMenuLink href="/legal">
                Legalitas & Regulasi
              </FooterMenuLink>
              <FooterMenuLink href="/start-a-project" highlight>
                Mulai Proyek Baru
              </FooterMenuLink>
            </ul>
          </div>
        </div>

        {/* GARIS PEMBATAS TENGAH */}
        <div className="border-t border-maroa-charcoal/80" />

        {/* BAGIAN TENGAH: BADGES QR CODE LEGALITAS & SOSIAL MEDIA */}
        <div className="py-8 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
          {/* Sisi Kiri: 3 QR Code Resmi Verifikasi Pemerintah RI + Badge Status PSE Komdigi */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-5">
            {/* 1. Kemenkumham RI - AHU */}
            <a
              href="https://elayanan.ahu.go.id/perseroan-perseorangan/sertifikat/Perubahan Data/MAROA MEDIA MABBARAKKA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-lg bg-maroa-charcoal/60 hover:bg-maroa-charcoal border border-maroa-charcoal hover:border-gray-600 transition-all group"
              title="Klik untuk verifikasi resmi Akta & SK Pengesahan AHU Kemenkumham RI"
            >
              <div className="relative h-10 w-10 shrink-0 bg-white p-0.5 rounded border border-gray-300 overflow-hidden">
                <Image
                  src="/compliance/qr-kemenkumham-ahu.png"
                  alt="QR Code Kemenkumham AHU PT MAROA MEDIA MABBARAKKA"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-bold text-white group-hover:text-maroa-red transition-colors">
                    KEMENKUMHAM RI
                  </span>
                  <ExternalLink className="h-2.5 w-2.5 text-maroa-gray-500 group-hover:text-white" />
                </div>
                <span className="text-[10px] text-maroa-gray-400">
                  Badan Hukum AHU Terdaftar
                </span>
                <span className="text-[9px] text-emerald-400 font-mono">
                  Terverifikasi Sah
                </span>
              </div>
            </a>

            {/* 2. OSS - BKPM RI */}
            <a
              href="https://ui-login.oss.go.id/verify/VB8EJgFmCzVea1E3VDZTOVQwBzRUZwVhAGFaYgFhB2IDNVJtUjANNVZmB2FSMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-lg bg-maroa-charcoal/60 hover:bg-maroa-charcoal border border-maroa-charcoal hover:border-gray-600 transition-all group"
              title="Klik untuk verifikasi Perizinan Berusaha Berbasis Risiko OSS BKPM RI"
            >
              <div className="relative h-10 w-10 shrink-0 bg-white p-0.5 rounded border border-gray-300 overflow-hidden">
                <Image
                  src="/compliance/qr-oss-nib.png"
                  alt="QR Code OSS NIB PT MAROA MEDIA MABBARAKKA"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-bold text-white group-hover:text-maroa-red transition-colors">
                    OSS · BKPM RI
                  </span>
                  <ExternalLink className="h-2.5 w-2.5 text-maroa-gray-500 group-hover:text-white" />
                </div>
                <span className="text-[10px] text-maroa-gray-400">
                  NIB Berbasis Risiko
                </span>
                <span className="text-[9px] text-emerald-400 font-mono">
                  Izin Usaha Aktif
                </span>
              </div>
            </a>

            {/* 3. DJP - Kemenkeu RI */}
            <div
              className="flex items-center gap-2.5 p-2 rounded-lg bg-maroa-charcoal/60 border border-maroa-charcoal"
              title="Validasi Administrasi Perpajakan DJP Kemenkeu RI"
            >
              <div className="relative h-10 w-10 shrink-0 bg-white p-0.5 rounded border border-gray-300 overflow-hidden">
                <Image
                  src="/compliance/qr-djp-pajak.png"
                  alt="QR Code DJP Kemenkeu RI PT MAROA MEDIA MABBARAKKA"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-white">
                  DJP KEMENKEU RI
                </span>
                <span className="text-[10px] text-maroa-gray-400">
                  Wajib Pajak Terdaftar
                </span>
                <span className="text-[9px] text-emerald-400 font-mono">
                  NPWP Perusahaan Sah
                </span>
              </div>
            </div>

            {/* 4. Status PSE Komdigi (Keterangan Baru: Dalam Proses Registrasi Resmi) */}
            <div
              className="flex items-center gap-2.5 p-2 rounded-lg bg-maroa-charcoal/60 border border-maroa-charcoal"
              title="Kesiapan & Kepatuhan Pendaftaran Penyelenggara Sistem Elektronik (PSE) Komdigi RI"
            >
              <div className="h-10 w-10 shrink-0 rounded bg-maroa-charcoal flex items-center justify-center border border-gray-700/60">
                <Clock className="h-4 w-4 text-amber-400" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-white">
                  PSE KOMDIGI RI
                </span>
                <span className="text-[10px] text-maroa-gray-400">
                  Sistem Elektronik
                </span>
                <span className="text-[9px] text-amber-400 font-mono flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  Dalam Proses Registrasi
                </span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Connect With Us & Social Icons */}
          <div className="flex items-center gap-3.5 shrink-0 self-start xl:self-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-maroa-gray-400">
              Connect with us
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/6281343511099"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-maroa-charcoal hover:bg-emerald-600/30 border border-maroa-charcoal hover:border-emerald-500/50 flex items-center justify-center text-maroa-gray-300 hover:text-emerald-400 transition-all"
                title="WhatsApp Resmi PT MAROA MEDIA MABBARAKKA"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a
                href={initialSiteSettings.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-maroa-charcoal hover:bg-pink-600/30 border border-maroa-charcoal hover:border-pink-500/50 flex items-center justify-center text-maroa-gray-300 hover:text-pink-400 transition-all"
                title="Instagram Resmi @maroaproject"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${initialSiteSettings.primaryEmail}`}
                className="h-8 w-8 rounded-full bg-maroa-charcoal hover:bg-red-600/30 border border-maroa-charcoal hover:border-red-500/50 flex items-center justify-center text-maroa-gray-300 hover:text-maroa-red transition-all"
                title="Email Korporat PT MAROA MEDIA MABBARAKKA"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* GARIS PEMBATAS BAWAH */}
        <div className="border-t border-maroa-charcoal/80" />

        {/* BAGIAN BAWAH: HAK CIPTA & LINK LEGALITAS YANG RAPI, PRESISI, DAN TIDAK TERPOTONG */}
        <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs">
          {/* Teks Hak Cipta Perusahaan (Kiri) */}
          <div className="text-center lg:text-left text-maroa-gray-500 shrink-0">
            <span>© {currentYear} PT MAROA MEDIA MABBARAKKA. Seluruh hak cipta dilindungi.</span>
          </div>

          {/* Deretan Link Legalitas Lengkap, Simetris, & Teratur (Kanan) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-3.5 gap-y-1.5 text-maroa-gray-400 text-xs">
            <Link href="/terms" className="hover:text-maroa-white transition-colors">
              Syarat & Ketentuan
            </Link>
            <span className="text-maroa-gray-700 select-none">|</span>
            <Link href="/privacy" className="hover:text-maroa-white transition-colors">
              Kebijakan Privasi
            </Link>
            <span className="text-maroa-gray-700 select-none">|</span>
            <Link href="/cookies" className="hover:text-maroa-white transition-colors">
              Kebijakan Cookie
            </Link>
            <span className="text-maroa-gray-700 select-none">|</span>
            <Link href="/legal" className="hover:text-maroa-white transition-colors">
              Informasi Legal
            </Link>
            <span className="text-maroa-gray-700 select-none">|</span>
            <Link href="/accessibility" className="hover:text-maroa-white transition-colors">
              Pernyataan Aksesibilitas
            </Link>
            <span className="text-maroa-gray-700 select-none">|</span>
            <Link href="/security" className="hover:text-maroa-white transition-colors">
              Keamanan & Kepatuhan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
