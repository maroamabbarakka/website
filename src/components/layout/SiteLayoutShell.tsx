"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

interface SiteLayoutShellProps {
  children: React.ReactNode;
}

export function SiteLayoutShell({ children }: SiteLayoutShellProps) {
  const pathname = usePathname();
  // Deteksi apakah pengguna berada di area internal admin/CMS (/admin, /admin/login, /admin/projects, dll.)
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    // Pada area admin, jangan tampilkan header/footer frontend, popup cookie, maupun floating WhatsApp
    return (
      <main id="main-content" className="flex-1 focus:outline-none min-h-screen">
        {children}
      </main>
    );
  }

  // Tampilan halaman frontend publik lengkap
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <FloatingWhatsApp />
    </>
  );
}
