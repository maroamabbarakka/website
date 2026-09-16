"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { initialProjects, initialSiteSettings } from "@/data/initialData";
import { getAllAdminProjects } from "@/lib/firebase/projectRepository";
import { db } from "@/lib/firebase/config";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { Lead, Project } from "@/lib/types";
import {
  Briefcase,
  Inbox,
  Settings,
  Plus,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  RefreshCw,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function loadDashboardData() {
      setLoading(true);
      try {
        // Ambil data proyek dari Firestore dengan fallback lokal
        const projs = await getAllAdminProjects();
        if (isMounted) {
          setProjects(projs);
        }
      } catch (err) {
        console.error("Gagal memuat proyek admin:", err);
      }

      try {
        // Ambil data leads riil dari Cloud Firestore
        const q = query(collection(db, "leads"), orderBy("createdAt", "desc"), limit(10));
        const snap = await getDocs(q);
        const items: Lead[] = [];
        snap.forEach((d) => {
          items.push({ id: d.id, ...d.data() } as Lead);
        });
        if (isMounted) {
          setLeads(items);
        }
      } catch (err) {
        console.warn("Gagal memuat leads dari Firestore (kemungkinan izin/offline):", err);
        // Fallback aman tanpa crash
        if (isMounted) {
          setLeads([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  const publishedCount = projects.filter((p) => p.isPublished).length;
  const newLeadsCount = leads.filter((l) => (l.status || "new") === "new").length;

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Top Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-maroa-black">Ikhtisar Operasional</h1>
          <p className="text-xs text-maroa-gray-700 mt-1">
            Selamat datang di panel kontrol manajemen konten dan prospek proyek MAROA.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/projects/new"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-maroa-sm bg-maroa-red text-white text-xs font-semibold hover:bg-maroa-red-dark transition-colors shadow-sm"
          >
            <Plus className="h-4 w-4" />
            <span>Tambah Proyek Baru</span>
          </Link>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-maroa-gray-500">Proyek Tayang</span>
            <Briefcase className="h-5 w-5 text-maroa-red" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-extrabold text-maroa-black">{publishedCount}</span>
            <span className="text-xs text-maroa-gray-500 block mt-1">Studi kasus aktif di publik</span>
          </div>
        </div>

        <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-maroa-gray-500">Prospek Masuk</span>
            <Inbox className="h-5 w-5 text-maroa-red" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-extrabold text-maroa-black">{leads.length}</span>
            <span className="text-xs text-maroa-gray-500 block mt-1">{newLeadsCount} berstatus baru</span>
          </div>
        </div>

        <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-maroa-gray-500">Kesiapan PSE</span>
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="mt-4">
            <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block">
              {initialSiteSettings.pseRegistered ? "Terdaftar Resmi" : "Dokumen Siap (Draft)"}
            </span>
            <span className="text-xs text-maroa-gray-500 block mt-1 font-mono">
              {initialSiteSettings.pseRegistrationNumber || "029903.01/DJAI.PSE/09/2026"}
            </span>
          </div>
        </div>

        <div className="bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-maroa-gray-500">Kepatuhan PDP</span>
            <CheckCircle2 className="h-5 w-5 text-maroa-red" />
          </div>
          <div className="mt-4">
            <span className="text-sm font-bold text-maroa-black">UU No. 27/2022</span>
            <span className="text-xs text-maroa-gray-500 block mt-1">Form consent terverifikasi</span>
          </div>
        </div>
      </div>

      {/* Grid: Prospek Terbaru & Ringkasan Proyek */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Kolom Kiri: Prospek Proyek Masuk (7 Kolom) */}
        <div className="lg:col-span-7 bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-maroa-gray-100">
            <h2 className="text-sm font-bold text-maroa-black">Prospek Terbaru Masuk</h2>
            <Link href="/admin/leads" className="text-xs font-semibold text-maroa-red hover:underline flex items-center gap-1">
              <span>Buka Semua</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          {leads.length === 0 ? (
            <div className="text-center py-10 text-xs text-maroa-gray-500 space-y-2">
              <Clock className="h-8 w-8 mx-auto text-maroa-gray-400" />
              <p>Belum ada prospek baru yang masuk dari formulir.</p>
            </div>
          ) : (
            <div className="divide-y divide-maroa-gray-100">
              {leads.slice(0, 4).map((lead, i) => (
                <div key={lead.id || i} className="py-3 flex items-start justify-between gap-4 text-xs">
                  <div>
                    <span className="font-bold text-maroa-black block">{lead.fullName}</span>
                    <span className="text-maroa-gray-500">{lead.companyOrganization || lead.email}</span>
                    <span className="inline-block mt-1 text-[11px] px-2 py-0.5 rounded bg-maroa-gray-100 text-maroa-charcoal font-medium">
                      {(lead.serviceType || "proyek").toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded font-semibold bg-blue-50 text-blue-700 capitalize">
                    {lead.status || "new"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Kolom Kanan: Daftar Portofolio Aktif (5 Kolom) */}
        <div className="lg:col-span-5 bg-maroa-white p-6 rounded-maroa-md border border-maroa-gray-300 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-maroa-gray-100">
            <h2 className="text-sm font-bold text-maroa-black">Studi Kasus Portofolio</h2>
            <Link href="/admin/projects" className="text-xs font-semibold text-maroa-red hover:underline flex items-center gap-1">
              <span>Kelola</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="divide-y divide-maroa-gray-100 text-xs">
            {projects.slice(0, 6).map((p) => (
              <div key={p.id} className="py-3 flex items-center justify-between">
                <div>
                  <span className="font-bold text-maroa-black block truncate max-w-[200px]">{p.title}</span>
                  <span className="text-maroa-gray-500">{p.clientDisplayName} · {p.year}</span>
                </div>
                <span className={`text-[11px] px-2 py-0.5 rounded font-semibold ${
                  p.isPublished ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                }`}>
                  {p.isPublished ? "Published" : "Draft"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
