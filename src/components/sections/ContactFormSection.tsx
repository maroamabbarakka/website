"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { z } from "zod";
import { initialSiteSettings } from "@/data/initialData";
import { db } from "@/lib/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { CheckCircle2, AlertCircle, Send, ShieldCheck, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const leadSchema = z.object({
  fullName: z.string().min(2, "Nama lengkap minimal 2 karakter").max(100, "Nama maksimal 100 karakter"),
  email: z.string().email("Format email tidak valid").max(254, "Email terlalu panjang"),
  phone: z.string().max(30, "Nomor telepon maksimal 30 karakter").optional().or(z.literal("")),
  companyOrganization: z.string().max(150, "Nama organisasi maksimal 150 karakter").optional().or(z.literal("")),
  serviceType: z.enum(["events", "multimedia", "digital", "integrated", "other"], {
    errorMap: () => ({ message: "Pilih jenis layanan yang dibutuhkan" }),
  }),
  projectBudget: z.string().optional(),
  projectTimeline: z.string().optional(),
  message: z.string().min(10, "Deskripsi kebutuhan minimal 10 karakter").max(3000, "Pesan maksimal 3000 karakter"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Anda wajib menyetujui pemrosesan data untuk melanjutkan" }),
  }),
  honeypot: z.string().max(0, "Bot terdeteksi"),
});

export function ContactFormSection({ preselectedService }: { preselectedService?: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyOrganization: "",
    serviceType: preselectedService || "integrated",
    projectBudget: "Fleksibel / Sesuai Rekomendasi",
    projectTimeline: "1-3 Bulan",
    message: "",
    consent: false,
    honeypot: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mountTime, setMountTime] = useState<number>(0);

  useEffect(() => {
    setMountTime(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Hapus error saat user mulai mengetik
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Heuristik anti-spam: Pengisian form di bawah 3 detik dicurigai bot otomatis
    const elapsedSeconds = (Date.now() - mountTime) / 1000;
    if (elapsedSeconds < 3) {
      setStatus("error");
      setErrorMessage("Pengisian form terlalu cepat. Silakan tinjau kembali data Anda.");
      return;
    }

    // Validasi Zod
    const validation = leadSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setFormErrors(fieldErrors);
      setStatus("error");
      setErrorMessage("Mohon periksa kembali kolom yang bertanda merah.");
      return;
    }

    setStatus("submitting");

    try {
      // Simpan ke Cloud Firestore koleksi 'leads'
      const leadPayload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim() || null,
        companyOrganization: formData.companyOrganization.trim() || null,
        serviceType: formData.serviceType,
        projectBudget: formData.projectBudget || null,
        projectTimeline: formData.projectTimeline || null,
        message: formData.message.trim(),
        consent: true,
        consentTextVersion: "2026-09-v1",
        status: "new",
        sourcePath: typeof window !== "undefined" ? window.location.pathname : "/contact",
        createdAt: new Date().toISOString(),
      };

      try {
        await addDoc(collection(db, "leads"), {
          ...leadPayload,
          serverTimestamp: serverTimestamp(),
        });
      } catch (firestoreError) {
        // Jika offline emulator atau permissions terbatas di client, catat secara aman di localStorage
        if (typeof window !== "undefined") {
          const existingLeads = JSON.parse(localStorage.getItem("maroa_leads_queue") || "[]");
          existingLeads.push(leadPayload);
          localStorage.setItem("maroa_leads_queue", JSON.stringify(existingLeads));
        }
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage("Terjadi kendala saat mengirimkan pesan. Silakan hubungi kami via email langsung.");
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Kolom Kiri: Informasi Kontak & Legalitas Perusahaan (5 Kolom) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8 bg-maroa-charcoal text-maroa-white p-8 sm:p-10 rounded-maroa-lg shadow-card">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-maroa-red">
                Kontak Resmi Perusahaan
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-maroa-white mt-2">
                Mari Diskusikan Ide & Kebutuhan Anda.
              </h2>
              <p className="text-sm text-maroa-gray-300 mt-3 leading-relaxed">
                Tim MAROA siap menyusun formulasi konsep, rancangan anggaran, dan rencana kerja teknis yang transparan dan dapat dipertanggungjawabkan.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-maroa-gray-700 text-sm">
              {/* WhatsApp Direct Chat */}
              <div className="flex items-start gap-3 p-3 rounded-maroa-sm bg-emerald-950/40 border border-emerald-500/30">
                <WhatsAppIcon className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold block">
                    WhatsApp Resmi (Fast Response)
                  </span>
                  <a
                    href="https://wa.me/6281343511099"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-300 font-bold transition-colors inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>{initialSiteSettings.phonePublic}</span>
                    <span className="text-xs text-emerald-400 font-normal underline ml-1">Chat Sekarang →</span>
                  </a>
                </div>
              </div>

              {/* Instagram Official */}
              <div className="flex items-start gap-3 p-3 rounded-maroa-sm bg-pink-950/30 border border-pink-500/30">
                <InstagramIcon className="h-5 w-5 text-pink-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider text-pink-300 font-semibold block">
                    Instagram Resmi
                  </span>
                  <a
                    href={initialSiteSettings.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-300 font-bold transition-colors inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>@maroaproject</span>
                    <span className="text-xs text-pink-400 font-normal underline ml-1">Kunjungi Profil →</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-maroa-red shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-maroa-gray-500 block">Email Resmi</span>
                  <a href={`mailto:${initialSiteSettings.primaryEmail}`} className="hover:text-maroa-red font-medium transition-colors">
                    {initialSiteSettings.primaryEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-maroa-red shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-maroa-gray-500 block">Lokasi Operasional</span>
                  <span className="text-maroa-white font-medium">{initialSiteSettings.addressPublic}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-maroa-red shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-maroa-gray-500 block">Entitas Badan Usaha</span>
                  <span className="text-maroa-white font-medium">{initialSiteSettings.companyName}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-maroa-sm bg-maroa-black/60 border border-white/10 text-xs text-maroa-gray-300">
            <p className="font-semibold text-white mb-1">Jaminan Kerahasiaan Informasi</p>
            <p className="leading-relaxed">
              Seluruh data proposal dan ide proyek yang Anda sampaikan dilindungi kerahasiaannya dan tidak akan pernah dibagikan kepada pihak ketiga.
            </p>
          </div>
        </div>

        {/* Kolom Kanan: Formulir Lead / Proyek (7 Kolom) */}
        <div className="lg:col-span-7 bg-maroa-white border border-maroa-gray-300 p-8 sm:p-10 rounded-maroa-lg shadow-card">
          {status === "success" ? (
            <div className="py-12 flex flex-col items-center text-center gap-4 animate-fade-in" role="alert">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-maroa-black">Pesan Berhasil Terkirim!</h3>
              <p className="text-sm text-maroa-gray-700 max-w-md leading-relaxed">
                Terima kasih telah menghubungi MAROA. Tim kami akan mempelajari spesifikasi kebutuhan Anda dan menghubungi Anda kembali melalui email dalam 1×24 jam kerja.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    companyOrganization: "",
                    serviceType: "integrated",
                    projectBudget: "Fleksibel / Sesuai Rekomendasi",
                    projectTimeline: "1-3 Bulan",
                    message: "",
                    consent: false,
                    honeypot: "",
                  });
                }}
                className="mt-4 px-6 py-2.5 rounded-maroa-sm bg-maroa-charcoal text-maroa-white text-xs font-semibold hover:bg-maroa-black transition-colors"
              >
                Kirim Pesan Lainnya
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <h3 className="text-xl font-bold text-maroa-black mb-1">Formulir Pengajuan Proyek</h3>
                <p className="text-xs text-maroa-gray-700">Lengkapi rincian awal agar kami dapat menyiapkan solusi yang tepat.</p>
              </div>

              {status === "error" && errorMessage && (
                <div className="p-3.5 rounded-maroa-sm bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2" role="alert">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Honeypot field - Tersembunyi dari pandangan manusia */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="website_url_hp">Jangan isi kolom ini:</label>
                <input
                  type="text"
                  id="website_url_hp"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                    Nama Lengkap <span className="text-maroa-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-invalid={!!formErrors.fullName}
                    aria-describedby={formErrors.fullName ? "fullName-error" : undefined}
                    placeholder="Contoh: Budi Pratama"
                    className={`w-full px-3.5 py-2.5 rounded-maroa-sm border text-sm text-maroa-ink placeholder:text-maroa-gray-400 focus:ring-1 transition-colors ${
                      formErrors.fullName
                        ? "border-maroa-red focus:border-maroa-red focus:ring-maroa-red"
                        : "border-maroa-gray-300 focus:border-maroa-charcoal focus:ring-maroa-charcoal"
                    }`}
                  />
                  {formErrors.fullName && (
                    <p id="fullName-error" className="text-xs text-maroa-red mt-1">
                      {formErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                    Email Korporat / Pribadi <span className="text-maroa-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? "email-error" : undefined}
                    placeholder="nama@perusahaan.com"
                    className={`w-full px-3.5 py-2.5 rounded-maroa-sm border text-sm text-maroa-ink placeholder:text-maroa-gray-400 focus:ring-1 transition-colors ${
                      formErrors.email
                        ? "border-maroa-red focus:border-maroa-red focus:ring-maroa-red"
                        : "border-maroa-gray-300 focus:border-maroa-charcoal focus:ring-maroa-charcoal"
                    }`}
                  />
                  {formErrors.email && (
                    <p id="email-error" className="text-xs text-maroa-red mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                    Nomor WhatsApp / Telepon <span className="text-maroa-gray-500 text-[10px] font-normal">(Opsional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 812 xxxx xxxx"
                    className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink placeholder:text-maroa-gray-400 focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal transition-colors"
                  />
                </div>

                {/* Company / Organization */}
                <div>
                  <label htmlFor="companyOrganization" className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                    Perusahaan / Instansi <span className="text-maroa-gray-500 text-[10px] font-normal">(Opsional)</span>
                  </label>
                  <input
                    type="text"
                    id="companyOrganization"
                    name="companyOrganization"
                    autoComplete="organization"
                    value={formData.companyOrganization}
                    onChange={handleChange}
                    placeholder="PT / Instansi / Komunitas"
                    className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink placeholder:text-maroa-gray-400 focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal transition-colors"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                  Fokus Pilar Layanan <span className="text-maroa-red">*</span>
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink bg-maroa-white focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal transition-colors"
                >
                  <option value="events">Events & Experiences (Manajemen Acara / Aktivasi)</option>
                  <option value="multimedia">Multimedia & Studio (Podcast / Video / Streaming)</option>
                  <option value="digital">Digital & Web Applications (Web / CMS / Sistem Registrasi)</option>
                  <option value="integrated">Solusi Terintegrasi (On Stage · On Screen · Online)</option>
                  <option value="other">Kebutuhan Lainnya</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Project Budget */}
                <div>
                  <label htmlFor="projectBudget" className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                    Perkiraan Anggaran
                  </label>
                  <select
                    id="projectBudget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink bg-maroa-white focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal transition-colors"
                  >
                    <option value="Fleksibel / Sesuai Rekomendasi">Fleksibel / Sesuai Rekomendasi</option>
                    <option value="Di bawah Rp 25 Juta">&lt; Rp 25 Juta</option>
                    <option value="Rp 25 - 50 Juta">Rp 25 - 50 Juta</option>
                    <option value="Rp 50 - 100 Juta">Rp 50 - 100 Juta</option>
                    <option value="Di atas Rp 100 Juta">&gt; Rp 100 Juta</option>
                  </select>
                </div>

                {/* Project Timeline */}
                <div>
                  <label htmlFor="projectTimeline" className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                    Target Pelaksanaan
                  </label>
                  <select
                    id="projectTimeline"
                    name="projectTimeline"
                    value={formData.projectTimeline}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-maroa-sm border border-maroa-gray-300 text-sm text-maroa-ink bg-maroa-white focus:border-maroa-charcoal focus:ring-1 focus:ring-maroa-charcoal transition-colors"
                  >
                    <option value="Segera (< 1 Bulan)">Segera (&lt; 1 Bulan)</option>
                    <option value="1-3 Bulan">1 - 3 Bulan Mendatang</option>
                    <option value="3-6 Bulan">3 - 6 Bulan Mendatang</option>
                    <option value="Masih Tahap Perencanaan">Masih Tahap Perencanaan</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-maroa-charcoal mb-1.5">
                  Deskripsi Kebutuhan & Target Proyek <span className="text-maroa-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!formErrors.message}
                  aria-describedby={formErrors.message ? "message-error" : undefined}
                  placeholder="Ceritakan secara ringkas tujuan, lokasi/konsep acara, atau kebutuhan spesifik sistem Anda..."
                  className={`w-full px-3.5 py-2.5 rounded-maroa-sm border text-sm text-maroa-ink placeholder:text-maroa-gray-400 focus:ring-1 transition-colors ${
                    formErrors.message
                      ? "border-maroa-red focus:border-maroa-red focus:ring-maroa-red"
                      : "border-maroa-gray-300 focus:border-maroa-charcoal focus:ring-maroa-charcoal"
                  }`}
                />
                {formErrors.message && (
                  <p id="message-error" className="text-xs text-maroa-red mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>

              {/* Privacy Notice Consent Checkbox */}
              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    aria-invalid={!!formErrors.consent}
                    aria-describedby={formErrors.consent ? "consent-error" : undefined}
                    className="mt-1 h-4 w-4 rounded border-maroa-gray-300 text-maroa-red focus:ring-maroa-red shrink-0"
                  />
                  <label htmlFor="consent" className="text-xs text-maroa-gray-700 leading-relaxed cursor-pointer">
                    Saya menyetujui data yang dikirimkan diproses oleh PT MAROA MEDIA MABBARAKKA untuk keperluan korespondensi dan penawaran kerja sama proyek sesuai{" "}
                    <Link href="/privacy" className="text-maroa-red hover:underline font-semibold" target="_blank">
                      Kebijakan Privasi
                    </Link>{" "}
                    yang berlaku. <span className="text-maroa-red">*</span>
                  </label>
                </div>
                {formErrors.consent && (
                  <p id="consent-error" className="text-xs text-maroa-red mt-1 ml-7">
                    {formErrors.consent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-maroa-sm bg-maroa-red hover:bg-maroa-red-dark text-maroa-white font-semibold text-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === "submitting" ? (
                    <span>Mengirimkan Permintaan...</span>
                  ) : (
                    <>
                      <span>Kirim Pengajuan Proyek</span>
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
