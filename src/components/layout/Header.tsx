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
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/expertise", label: "Expertise" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-maroa-white/95 backdrop-blur-md shadow-sm border-b border-maroa-gray-300/60 py-3.5"
          : "bg-maroa-white py-5"
      }`}
    >
      <div className="container-maroa flex items-center justify-between">
        {/* Logo Master MAROA Signal */}
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-maroa-sm"
          aria-label="Beranda MAROA"
        >
          <div className="relative h-10 w-36 sm:h-11 sm:w-44">
            <Image
              src="/brand/LOGO_MAROA_PLAY_ORIGINAL.png"
              alt="PT MAROA MEDIA MABBARAKKA"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 144px, 176px"
            />
          </div>
        </Link>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-maroa-red focus-visible:outline-2 focus-visible:outline-offset-2 rounded-maroa-sm ${
                  active ? "text-maroa-red font-semibold" : "text-maroa-charcoal"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Tombol Aksi Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Button href="/contact" variant="primary" size="sm" withArrow>
            Start a Project
          </Button>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          type="button"
          className="md:hidden p-2 text-maroa-charcoal hover:text-maroa-red focus-visible:outline-2 focus-visible:outline-offset-2 rounded-maroa-sm"
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
          className="fixed inset-0 top-[65px] z-50 bg-maroa-black/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            id="mobile-navigation-drawer"
            className="w-full bg-maroa-white border-b border-maroa-gray-300 shadow-xl p-6 flex flex-col gap-5"
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
                    className={`text-lg py-2 transition-colors border-b border-maroa-gray-100 flex items-center justify-between ${
                      active ? "text-maroa-red font-semibold" : "text-maroa-charcoal"
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
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
