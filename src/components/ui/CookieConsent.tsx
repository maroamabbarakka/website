"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, X } from "lucide-react";

export function CookieConsent() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("maroa_cookie_consent");
    if (!consent) {
      // Tampilkan banner setelah jeda singkat agar tidak mengganggu LCP
      const timer = setTimeout(() => {
        setIsVisible(true);
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("maroa_cookie_visibility", { detail: { visible: true } })
          );
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeConsent = (type: "accepted" | "essential_only") => {
    localStorage.setItem("maroa_cookie_consent", type);
    setIsVisible(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("maroa_cookie_visibility", { detail: { visible: false } })
      );
    }
  };

  if (pathname?.startsWith("/admin") || !isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Pemberitahuan Kebijakan Cookie dan Privasi"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-md z-[60] bg-maroa-white border border-maroa-gray-300 rounded-maroa-md shadow-2xl p-5 animate-slide-up backdrop-blur-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-maroa-red/10 text-maroa-red shrink-0 mt-0.5">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="flex-1 text-xs text-maroa-charcoal leading-relaxed">
            <p className="font-bold text-sm text-maroa-black mb-1">
              Privasi & Preferensi Cookie
            </p>
            <p className="text-maroa-gray-700">
              Kami menggunakan cookie esensial untuk menjaga fungsionalitas dan keamanan situs. Kami menghormati privasi data Anda sesuai ketentuan UU Pelindungan Data Pribadi (UU PDP No. 27/2022).
            </p>
            <div className="mt-2">
              <Link
                href="/privacy"
                className="text-maroa-red hover:underline font-semibold inline-flex items-center gap-1"
              >
                Pelajari Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>

        {/* Tombol Tutup Cepat */}
        <button
          onClick={() => closeConsent("essential_only")}
          className="text-maroa-gray-500 hover:text-maroa-black p-1 rounded hover:bg-maroa-gray-100 transition-colors shrink-0 -mr-1 -mt-1"
          aria-label="Tutup pemberitahuan privasi"
          title="Tutup (Hanya Esensial)"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2.5 pt-3 border-t border-maroa-gray-200">
        <button
          onClick={() => closeConsent("essential_only")}
          className="px-3.5 py-2 text-xs font-medium text-maroa-gray-700 hover:text-maroa-black hover:bg-maroa-gray-100 rounded-maroa-sm transition-colors cursor-pointer"
        >
          Hanya Esensial
        </button>
        <button
          onClick={() => closeConsent("accepted")}
          className="px-5 py-2 text-xs font-bold text-white bg-maroa-red hover:bg-maroa-red-dark rounded-maroa-sm transition-all shadow-sm active:scale-95 cursor-pointer"
        >
          Setujui
        </button>
      </div>
    </aside>
  );
}
