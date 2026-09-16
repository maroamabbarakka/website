"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup drawer mobile saat rute berubah atau tombol Escape ditekan
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang" },
    { href: "/expertise", label: "Layanan" },
    { href: "/work", label: "Karya" },
    { href: "/insights", label: "Wawasan" },
    { href: "/contact", label: "Kontak" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Tentukan styling dinamis berdasarkan apakah halaman adalah Beranda dan status scroll
  let headerClasses = "w-full transition-all duration-300 z-40 ";
  let logoSrc = "/brand/LOGO_MAROA_PLAY_ORIGINAL.png";
  let linkBaseClass = "text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 rounded-maroa-sm ";
  let linkActiveClass = "text-maroa-red font-semibold";
  let linkInactiveClass = "text-maroa-charcoal hover:text-maroa-red";
  let toggleButtonClass = "p-2 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-maroa-sm text-maroa-charcoal hover:text-maroa-red";

  if (isHomePage) {
    logoSrc = "/brand/LOGO_MAROA_PLAY_DARK_SAFE.png";
    linkInactiveClass = "text-white/80 hover:text-white";
    linkActiveClass = "text-maroa-red font-bold";
    toggleButtonClass = "p-2 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-maroa-sm text-white hover:text-maroa-red";

    if (isScrolled) {
      headerClasses += "fixed top-0 left-0 right-0 bg-[#080808]/90 backdrop-blur-md shadow-xl border-b border-white/10 py-3.5";
    } else {
      headerClasses += "absolute top-0 left-0 right-0 bg-transparent border-b border-transparent py-5";
    }
  } else {
    // Halaman Internal Non-Beranda
    logoSrc = "/brand/LOGO_MAROA_PLAY_ORIGINAL.png";
    if (isScrolled) {
      headerClasses += "sticky top-0 bg-maroa-white/95 backdrop-blur-md shadow-sm border-b border-maroa-gray-300/60 py-3.5";
    } else {
      headerClasses += "sticky top-0 bg-maroa-white border-b border-maroa-gray-200/60 py-5";
    }
  }

  return (
    <header className={headerClasses}>
      <div className="container-maroa flex items-center justify-between">
        {/* Logo Master MAROA Signal */}
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-maroa-sm"
          aria-label="Beranda MAROA"
        >
          <div className="relative h-10 w-36 sm:h-11 sm:w-44">
            <Image
              src={logoSrc}
              alt="PT MAROA MEDIA MABBARAKKA"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 144px, 176px"
            />
          </div>
        </Link>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Navigasi Utama">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBaseClass} ${active ? linkActiveClass : linkInactiveClass}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Tombol Aksi Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            href="/contact"
            variant={isHomePage && !isScrolled ? "outline-light" : "primary"}
            size="sm"
            withArrow
          >
            Mulai Proyek
          </Button>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          type="button"
          className={`md:hidden ${toggleButtonClass}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[65px] z-50 bg-black/70 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            id="mobile-navigation-drawer"
            className="w-full bg-[#111111] border-b border-white/15 text-white shadow-2xl p-6 flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Seluler"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg py-2 transition-colors border-b border-white/10 flex items-center justify-between ${
                      active ? "text-maroa-red font-bold" : "text-gray-200"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-40" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <Button href="/contact" variant="primary" size="md" fullWidth withArrow>
                Mulai Proyek
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
