"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/firebase/authContext";
import { Lock, Mail, AlertCircle, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      router.push("/admin");
    } catch (err: unknown) {
      // Tangani error autentikasi Firebase
      setError("Email atau kata sandi tidak valid. Pastikan akun terdaftar di Firebase Auth.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-maroa-black p-4">
      <div className="w-full max-w-md bg-maroa-charcoal border border-white/10 rounded-maroa-lg p-8 sm:p-10 shadow-2xl text-white space-y-8">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="relative h-10 w-44 mx-auto">
            <Image
              src="/brand/LOGO_MAROA_PLAY_DARK_SAFE.png"
              alt="PT MAROA MEDIA MABBARAKKA"
              fill
              className="object-contain"
              sizes="176px"
            />
          </div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-maroa-red bg-maroa-red/10 px-3 py-1 rounded-full border border-maroa-red/20">
            Internal Operations Portal
          </span>
          <p className="text-xs text-maroa-gray-300">
            Masuk untuk mengelola portofolio, memproses prospek masuk, dan konfigurasi situs.
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-maroa-sm bg-red-900/40 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-maroa-gray-300 mb-1.5">
              Email Staf Resmi
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 h-4 w-4 text-maroa-gray-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@maroa.co.id"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-maroa-sm bg-maroa-black/60 border border-white/20 text-sm text-white placeholder:text-maroa-gray-500 focus:border-maroa-red focus:ring-1 focus:ring-maroa-red transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-maroa-gray-300 mb-1.5">
              Kata Sandi
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 h-4 w-4 text-maroa-gray-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-maroa-sm bg-maroa-black/60 border border-white/20 text-sm text-white placeholder:text-maroa-gray-500 focus:border-maroa-red focus:ring-1 focus:ring-maroa-red transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-maroa-sm bg-maroa-red hover:bg-maroa-red-dark text-white font-semibold text-xs transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <span>Memverifikasi Akun...</span>
            ) : (
              <>
                <span>Masuk ke Dashboard</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        <div className="pt-4 border-t border-white/10 text-center">
          <p className="text-[11px] text-maroa-gray-400">
            Akses publik tidak tersedia. Hubungi Superadmin untuk penerbitan akun staf baru.
          </p>
        </div>
      </div>
    </div>
  );
}
