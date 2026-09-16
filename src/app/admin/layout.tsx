"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AuthProvider, useAuth } from "@/lib/firebase/authContext";
import {
  LayoutDashboard,
  Briefcase,
  Inbox,
  Settings,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ShieldAlert,
  Scale,
} from "lucide-react";

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { user, adminProfile, loading, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Jika sedang di halaman login, tampilkan langsung (toleran terhadap trailing slash di Firebase Hosting)
  const isLoginPage = pathname?.replace(/\/$/, "") === "/admin/login";
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Tampilan loading otentikasi
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-maroa-gray-100">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-maroa-red border-t-transparent rounded-full animate-spin" />
          <span className="text-xs text-maroa-gray-700 font-medium">Memuat Sesi Admin...</span>
        </div>
      </div>
    );
  }

  // Jika belum login, tampilkan pemberitahuan harus login
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-maroa-gray-100 p-4">
        <div className="bg-maroa-white p-8 rounded-maroa-md border border-maroa-gray-300 max-w-sm w-full text-center space-y-4 shadow-card">
          <ShieldAlert className="h-12 w-12 text-maroa-red mx-auto" />
          <h2 className="text-lg font-bold text-maroa-black">Akses Internal Terbatas</h2>
          <p className="text-xs text-maroa-gray-700">
            Anda harus masuk menggunakan kredensial staf resmi untuk mengakses panel CMS.
          </p>
          <Link
            href="/admin/login"
            className="block w-full py-2.5 rounded-maroa-sm bg-maroa-red text-white text-xs font-semibold hover:bg-maroa-red-dark transition-colors"
          >
            Masuk ke Panel Admin
          </Link>
        </div>
      </div>
    );
  }

  // Jika login namun akun tidak terdaftar di adminUsers atau dinonaktifkan (Fail-Closed)
  if (!adminProfile || !adminProfile.active) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-maroa-gray-100 p-4">
        <div className="bg-maroa-white p-8 rounded-maroa-md border border-red-200 max-w-md w-full text-center space-y-4 shadow-card">
          <ShieldAlert className="h-12 w-12 text-maroa-red mx-auto" />
          <h2 className="text-lg font-bold text-maroa-black">Otorisasi Ditolak (403)</h2>
          <p className="text-xs text-maroa-gray-700 leading-relaxed">
            Akun Google/Email Anda (<span className="font-semibold text-maroa-black">{user.email}</span>) telah terotentikasi, namun belum memiliki penetapan peran staf aktif di direktori resmi <code className="bg-gray-100 px-1 py-0.5 rounded text-[11px]">adminUsers</code> MAROA.
          </p>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={async () => {
                await logout();
                router.push("/admin/login");
              }}
              className="w-full py-2.5 rounded-maroa-sm bg-maroa-black text-white text-xs font-semibold hover:bg-maroa-charcoal transition-colors cursor-pointer"
            >
              Keluar & Gunakan Akun Lain
            </button>
            <Link
              href="/"
              className="text-xs text-maroa-gray-600 hover:text-maroa-red font-medium py-1"
            >
              Kembali ke Beranda Utama
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
    { href: "/admin/projects", label: "Proyek & Portfolio", icon: <Briefcase className="h-4 w-4" /> },
    { href: "/admin/services", label: "Layanan & Pilar", icon: <Briefcase className="h-4 w-4" /> },
    { href: "/admin/insights", label: "Wawasan & Artikel", icon: <Briefcase className="h-4 w-4" /> },
    { href: "/admin/leads", label: "Kotak Masuk Leads", icon: <Inbox className="h-4 w-4" /> },
    { href: "/admin/audit", label: "Log Audit Sistem", icon: <ShieldAlert className="h-4 w-4" /> },
    { href: "/admin/legal", label: "Legal & Regulasi PSE", icon: <Scale className="h-4 w-4" /> },
    { href: "/admin/settings", label: "Pengaturan Situs", icon: <Settings className="h-4 w-4" /> },
  ];

  const handleLogout = async () => {
    await logout();
    router.push("/admin/login");
  };

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <div className="min-h-screen flex flex-col md:flex-row bg-maroa-gray-100">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-maroa-black text-maroa-white p-6 justify-between shrink-0 border-r border-maroa-charcoal">
        <div className="space-y-8">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-28">
              <Image
                src="/brand/LOGO_MAROA_PLAY_DARK_SAFE.png"
                alt="MAROA Admin"
                fill
                className="object-contain object-left"
                sizes="112px"
              />
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-maroa-red text-white font-bold uppercase">
              CMS
            </span>
          </div>

          {/* User Profile Badge */}
          <div className="p-3 rounded-maroa-sm bg-maroa-charcoal border border-white/10 text-xs">
            <p className="font-bold text-white truncate">{adminProfile?.displayName || user.email}</p>
            <div className="flex items-center justify-between text-[11px] text-maroa-gray-300 mt-1">
              <span className="capitalize">{adminProfile?.role || "Admin"}</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5" aria-label="Navigasi Panel Admin">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-maroa-sm text-xs font-semibold transition-colors ${
                    active
                      ? "bg-maroa-red text-white"
                      : "text-maroa-gray-300 hover:text-white hover:bg-maroa-charcoal"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="space-y-3 pt-6 border-t border-maroa-charcoal">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between text-xs text-maroa-gray-400 hover:text-white py-1 transition-colors"
          >
            <span>Buka Situs Publik</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 w-full text-xs text-maroa-red hover:text-maroa-red-dark py-1 font-semibold transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Keluar (Logout)</span>
          </button>
        </div>
      </aside>

      {/* Header Mobile Admin */}
      <header className="md:hidden bg-maroa-black text-white p-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm tracking-wider text-maroa-white">MAROA CMS</span>
        </div>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1.5 text-white"
          aria-label="Toggle Menu"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Drawer Mobile Nav */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="w-4/5 max-w-xs h-full bg-maroa-black text-white p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-maroa-red">Panel Staf</span>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-maroa-sm text-sm ${
                      pathname === item.href ? "bg-maroa-red text-white" : "text-maroa-gray-300"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-maroa-red font-semibold pt-4 border-t border-maroa-charcoal"
            >
              <LogOut className="h-4 w-4" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      )}

      {/* Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  </>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  );
}
