"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("maroa_cookie_consent");
    if (!consent) {
      // Tampilkan banner setelah sedikit jeda agar tidak mengganggu LCP
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("maroa_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("maroa_cookie_consent", "essential_only");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Pemberitahuan Cookie dan Privasi"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-maroa-white border border-maroa-gray-300 rounded-maroa-md shadow-2xl p-5 animate-slide-up"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded bg-maroa-red/10 text-maroa-red shrink-0 mt-0.5">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="flex-1 text-xs text-maroa-charcoal leading-relaxed">
          <p className="font-semibold text-sm text-maroa-black mb-1">
            Privasi & Preferensi Cookie
          </p>
          <p className="text-maroa-gray-700">
            Kami menggunakan cookie esensial untuk menjaga fungsionalitas dan keamanan situs. Kami menghormati privasi data Anda sesuai ketentuan UU Pelindungan Data Pribadi (UU PDP No. 27/2022).
          </p>
          <div className="mt-2">
            <Link href="/privacy" className="text-maroa-red hover:underline font-medium">
              Pelajari Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2 pt-3 border-t border-maroa-gray-100">
        <button
          onClick={handleDecline}
          className="px-3 py-1.5 text-xs font-medium text-maroa-gray-700 hover:text-maroa-black hover:bg-maroa-gray-100 rounded-maroa-sm transition-colors"
        >
          Hanya Esensial
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 text-xs font-medium text-maroa-white bg-maroa-charcoal hover:bg-maroa-black rounded-maroa-sm transition-colors"
        >
          Setujui
        </button>
      </div>
    </div>
  );
}
