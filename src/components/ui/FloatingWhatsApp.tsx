"use client";

import React, { useState } from "react";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { X, MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Popover Mini Chat Panel */}
      {isOpen && (
        <div className="w-72 sm:w-80 rounded-2xl bg-white text-maroa-black shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
          {/* Header Panel */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <WhatsAppIcon size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">MAROA Official</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse inline-block" />
                  <span>Siap Membantu Proyek Anda</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Tutup panel kontak"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Panel */}
          <div className="p-4 bg-gray-50 text-xs space-y-3">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900 mb-1">Halo! 👋</p>
              <p>
                Ada kebutuhan event, produksi multimedia panggung, atau pembuatan aplikasi web? Hubungi tim kami langsung via WhatsApp.
              </p>
            </div>

            {/* Quick Link Buttons */}
            <div className="space-y-2 pt-1">
              <a
                href="https://wa.me/6281343511099?text=Halo%20MAROA,%20saya%20tertarik%20untuk%20konsultasi%20proyek."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition-transform active:scale-95"
              >
                <WhatsAppIcon size={18} />
                <span>Chat via WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/maroaproject/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-sm transition-transform active:scale-95"
              >
                <InstagramIcon size={16} />
                <span>Instagram @maroaproject</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Buka kontak WhatsApp dan Instagram resmi MAROA"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
        >
          <WhatsAppIcon size={22} className="text-white" />
          <span className="hidden sm:inline font-semibold text-xs tracking-wide">
            Konsultasi WhatsApp
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute -top-0.5 -right-0.5" />
        </button>
      </div>
    </div>
  );
}
