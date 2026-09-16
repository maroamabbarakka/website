import React from "react";
import Image from "next/image";

interface DeviceMockupShowcaseProps {
  desktopImage: string;
  mobileImage?: string;
  title: string;
  category?: string;
  className?: string;
}

export function DeviceMockupShowcase({
  desktopImage,
  mobileImage,
  title,
  category,
  className = "",
}: DeviceMockupShowcaseProps) {
  const isEventOrMultimedia = category === "events" || category === "multimedia" || !mobileImage;

  return (
    <div
      className={`relative w-full rounded-maroa-lg overflow-hidden bg-gradient-to-br from-[#18191d] via-[#101114] to-[#08090a] p-3 sm:p-6 lg:p-10 border border-white/10 shadow-2xl flex items-center justify-center min-h-[360px] sm:min-h-[480px] lg:min-h-[580px] ${className}`}
    >
      {/* Ambient Lighting Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-maroa-red/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-60 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Subtil */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Konten Utama */}
      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
        {isEventOrMultimedia ? (
          /* Stage Videotron & Event Production Display Frame */
          <div className="w-full max-w-4xl rounded-xl overflow-hidden bg-[#16171a] border border-white/20 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] transform transition-transform duration-500 hover:scale-[1.01]">
            {/* Stage LED Header Bar */}
            <div className="h-9 sm:h-11 bg-gradient-to-r from-[#1c1d22] via-[#24262c] to-[#1c1d22] border-b border-white/15 px-3 sm:px-5 flex items-center justify-between">
              {/* LED Status Signal */}
              <div className="flex items-center gap-2">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                  LIVE STAGE VISUAL
                </span>
                <span className="hidden sm:inline text-white/30 text-xs">|</span>
                <span className="hidden sm:inline text-[11px] font-mono text-maroa-gray-400">
                  VIDEOTRON SYSTEM
                </span>
              </div>

              {/* Center Title Pill */}
              <div className="max-w-[180px] sm:max-w-md h-5 sm:h-6 rounded bg-black/60 border border-white/10 flex items-center justify-center px-3">
                <span className="text-[10px] sm:text-[11px] font-medium text-maroa-gray-200 truncate tracking-wide">
                  {title}
                </span>
              </div>

              {/* Right Metrix Info */}
              <div className="flex items-center gap-2 text-[10px] font-mono text-maroa-gray-400">
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-white/90 font-semibold">
                  4K UHD
                </span>
                <span className="hidden md:inline">60 FPS</span>
              </div>
            </div>

            {/* Screen Viewport */}
            <div className="relative aspect-[16/9] w-full bg-[#0a0b0d] overflow-hidden flex items-center justify-center group">
              <Image
                src={desktopImage}
                alt={`${title} - Stage Visual`}
                fill
                priority
                className="object-contain sm:object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Stage LED Footer Rigging Accent */}
            <div className="h-6 sm:h-7 bg-[#121316] border-t border-white/10 px-4 flex items-center justify-between text-[9px] sm:text-[10px] text-maroa-gray-400 font-mono">
              <span>MAROA MULTIMEDIA & EVENT PRODUCTION RIG</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-maroa-red" />
                <span>SYNCHRONIZED FEED</span>
              </span>
            </div>
          </div>
        ) : (
          /* Web & Digital Multi-Device Showcase (Browser + Smartphone) */
          <>
            <div className="w-full max-w-4xl rounded-xl overflow-hidden bg-[#1f2024] border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] transform transition-transform duration-500 hover:scale-[1.01]">
              {/* Browser Header Bar */}
              <div className="h-9 sm:h-10 bg-[#292a2f] border-b border-white/10 px-3 sm:px-4 flex items-center justify-between">
                {/* Window Dots */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] inline-block" />
                </div>

                {/* Address / Title Bar Pill */}
                <div className="w-1/2 max-w-xs h-5 sm:h-6 rounded-md bg-black/40 border border-white/10 flex items-center justify-center px-3">
                  <span className="text-[10px] sm:text-[11px] font-medium text-maroa-gray-300 truncate tracking-wide">
                    {title}
                  </span>
                </div>

                {/* Spacer */}
                <div className="w-10 sm:w-12" />
              </div>

              {/* Desktop Screen Content */}
              <div className="relative aspect-[16/10] w-full bg-[#0d0e11] overflow-hidden">
                <Image
                  src={desktopImage}
                  alt={`${title} - Desktop Preview`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 1000px"
                />
              </div>
            </div>

            {/* Floating Mobile Smartphone Mockup */}
            {mobileImage && (
              <div className="absolute -bottom-4 right-2 sm:right-6 lg:right-10 w-28 sm:w-44 lg:w-56 rounded-[24px] sm:rounded-[36px] p-1.5 sm:p-2.5 bg-[#18191c] border-2 border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.9)] transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
                {/* Screen Wrapper */}
                <div className="relative aspect-[9/19.5] w-full rounded-[18px] sm:rounded-[28px] overflow-hidden bg-black border border-white/10">
                  {/* Dynamic Island / Speaker Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-3 sm:h-4 bg-black rounded-full z-20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 ml-auto mr-2" />
                  </div>

                  {/* Mobile Screen Image */}
                  <Image
                    src={mobileImage}
                    alt={`${title} - Mobile View`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 120px, 240px"
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Category Tag Overlay */}
      {category && (
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-maroa-red" />
            <span>{category}</span>
          </span>
        </div>
      )}
    </div>
  );
}
