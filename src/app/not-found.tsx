import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export const metadata = {
  title: "404 — Halaman Tidak Ditemukan | MAROA",
  description: "Halaman yang Anda cari tidak tersedia atau telah dipindahkan.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-maroa-white">
      <div className="container-maroa text-center max-w-lg flex flex-col items-center gap-6">
        <span className="text-6xl sm:text-7xl font-black text-maroa-red tracking-tight">
          404
        </span>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-maroa-black">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-maroa-gray-700 leading-relaxed">
            Halaman yang Anda tuju mungkin telah dipindahkan, dihapus, atau tautan yang dimasukkan tidak tepat.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Button href="/" variant="primary" size="md" withArrow>
            Kembali ke Beranda
          </Button>
          <Button href="/work" variant="secondary" size="md">
            Lihat Portofolio
          </Button>
        </div>
      </div>
    </div>
  );
}
