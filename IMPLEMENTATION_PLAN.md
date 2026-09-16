# IMPLEMENTATION PLAN — PT MAROA MEDIA MABBARAKKA
## Corporate Website & Digital Platform Architecture

**Dokumen Referensi:** Developer Handoff 2026 (Docs 00–20, Mockups 01–05, Logos)  
**Entitas Bisnis:** PT MAROA MEDIA MABBARAKKA  
**Brand Positioning:** Creative Technology & Experience Company  
**Tiga Pilar Bisnis Utama:**
1. Events & Experiences
2. Multimedia & Studio
3. Digital & Web Applications  
**Ventura Sekunder:** MAROA Café (F&B) — diposisikan subtil, bukan pilar utama.  
**Tanggal:** 15 September 2026  

---

## 1. Ringkasan Arsitektur

Arsitektur yang dipilih mengusung prinsip **Static-First, Secure by Default, and Privacy-Aware**:
- **Penyajian Halaman Publik (SSG / Pre-rendering):** Menghasilkan berkas HTML/CSS/JS statis yang disajikan langsung melalui Firebase Hosting CDN global. Keuntungan: Performa LCP kilat (<2.0s), zero CLS, SEO teroptimasi penuh tanpa kendala crawling, dan permukaan serangan (attack surface) minimal.
- **Interaksi Formulir & Lead Pipeline:** Menggunakan formulir terkontrol dengan validasi skema Zod ganda (client & server-ready), honeypot tersembunyi untuk menangkal bot otomatis, timestamp threshold untuk mencegah automated spam, dan integrasi Firebase App Check.
- **Penyimpanan Data (Cloud Firestore):** Region prioritas `asia-southeast2` (Jakarta) untuk residensi data di Indonesia. Rules strict deny-by-default, hanya membuka data yang bertanda `isPublished == true` untuk baca publik.
- **Manajemen Konten Internal (Admin CMS):** Berada pada rute terisolasi `/admin/*` dengan proteksi otentikasi Firebase Auth dan otorisasi berbasis peran (Role-Based Access Control / RBAC) yang didefinisikan dalam koleksi `adminUsers`.
- **Keamanan & Kepatuhan:** Konfigurasi security headers ketat pada `firebase.json` (CSP bertahap, nosniff, frameguard SAMEORIGIN, strict referrer policy). Seluruh dokumen privasi, syarat penggunaan, preferensi cookie, dan lembar pendaftaran PSE disiapkan secara profesional dan mutakhir.

---

## 2. Stack Teknologi

- **Framework Web:** Next.js (App Router, TypeScript, React 19).
- **Styling & Desain Token:** Tailwind CSS dikonfigurasikan dengan custom theme tokens MAROA (`--maroa-red: #ff171f`, `--maroa-black: #090909`, `--maroa-charcoal: #171717`, fluid typography via `clamp()`, serta dukungan penuh `@media (prefers-reduced-motion)`).
- **Ikonografi:** Lucide React (ikon outline/linear bergaris bersih dan seragam untuk Events, Multimedia, Digital, dan UI interaktif).
- **Validasi Data:** Zod untuk validasi skema formulir kontak dan model data.
- **SDK Cloud & Database:** Firebase JS Modular SDK v10/v11 (Tree-shaken, minimal bundle overhead).
- **Quality Assurance & Testing:**
  - Strict TypeScript (`tsc --noEmit`).
  - ESLint dengan aturan modern.
  - Pengujian Firebase Security Rules dengan Emulator Suite.

---

## 3. Struktur Rute (Route Map)

### Rute Publik
- `/` — Homepage (Hero split, 3 Pilar Bisnis, Selected Work, Integrated Approach, Process, Final CTA)
- `/about` — Profil Perusahaan, Positioning, Visi Misi, Model Kolaborasi, Ventura Sekunder (Café)
- `/expertise` — Ikhtisar Solusi Terpadu, Metodologi 4 Tahap, Akses Pilar
- `/expertise/events` — Events & Experiences (Manajemen Event, Koordinasi Panggung, Sistem QR, Live Production)
- `/expertise/multimedia` — Multimedia & Studio (Produksi Video, Podcast Studio, Live Streaming, Motion Content)
- `/expertise/digital` — Digital & Web Applications (Aplikasi Web, CMS, Dashboard Korporat, Otomasi Alur Kerja)
- `/work` — Portfolio Proyek dengan filter instan (All, Events, Multimedia, Digital)
- `/work/[slug]` — Detail Studi Kasus Faktual (Hero, Fakta Proyek, Tantangan, Pendekatan, Eksekusi, Hasil, Galeri)
- `/insights` — Wawasan Korporat & Artikel Industri
- `/insights/[slug]` — Detail Artikel Wawasan
- `/contact` — Halaman Hubungi Kami & Start a Project terintegrasi
- `/start-a-project` — Halaman Khusus Pengajuan Proyek Berorientasi Konversi Tinggi
- `/privacy` — Kebijakan Privasi (Privacy Notice) sesuai regulasi UU PDP & PSE
- `/terms` — Syarat & Ketentuan Layanan (Terms of Use)
- `/cookies` — Pengaturan Cookie & Analitik Transparan
- `/legal` — Ringkasan Kepatuhan Hukum, Badan Usaha, NIB, KBLI, & Status PSE
- `/accessibility` — Pernyataan Aksesibilitas Standar WCAG 2.2 AA
- `/security` — Panduan Pelaporan Kerentanan (Responsible Disclosure) & Kontak Keamanan
- `/404` — Halaman Kesalahan 404 Kustom yang Elegan

### Rute Admin (Terproteksi & Noindex)
- `/admin/login` — Autentikasi Staf/Admin Internal
- `/admin` — Ikhtisar Metrik CMS & Status Operasional
- `/admin/projects` — Manajemen Studi Kasus Portfolio
- `/admin/projects/new` — Tambah Studi Kasus Baru
- `/admin/projects/[id]` — Sunting Studi Kasus Proyek
- `/admin/services` — Pengaturan Teks & Kapabilitas Layanan
- `/admin/insights` — Manajemen Artikel & Wawasan
- `/admin/leads` — Kotak Masuk Prospek / Formulir Kontak
- `/admin/settings` — Pengaturan Identitas Perusahaan & Parameter PSE
- `/admin/audit` — Catatan Log Audit Aktivitas Administratif

---

## 4. Komponen Utama

1. **Komponen Layout:**
   - `Header`: Header sticky/transparan dengan logo master `maroa-main-signal.png`, menu navigasi desktop, tombol CTA `Start a Project`, dan drawer hamburger mobile yang ramah aksesibilitas.
   - `Footer`: Tata letak multi-kolom rapi, memuat logo MAROA, deskripsi positioning, tautan navigasi pilar, kontak resmi, hak cipta dinamis, dan placeholder status TDPSE (tersembunyi sampai resmi terbit).
   - `SkipToContent`: Tautan pintas tersembunyi untuk navigasi keyboard langsung ke elemen `<main id="main-content">`.
2. **Komponen UI Primitif:**
   - `Button`: Varian Primary Red (aksesibilitas kontras teruji), Secondary Charcoal Outline, Ghost, dengan focus ring jelas.
   - `Card`: Varian PillarCard, ProjectCard (rasio aspek gambar terkontrol mencegah CLS), ServiceFeatureCard.
   - `Badge`: Label kategori, status, dan tag keahlian berdesain minimalis.
   - `Input`, `Select`, `Textarea`: Elemen formulir dengan label teks eksplisit, indikator wajib jelas, dan pesan error `aria-live`.
3. **Komponen Interaktif:**
   - `ProjectFilterBar`: Pengelompokan kategori portofolio instan tanpa refresh halaman.
   - `ContactForm`: Formulir pemesanan layanan dengan validasi real-time, honeypot anti-spam, proteksi duplicate submit, dan feedback sukses yang jelas.
   - `CookieConsent`: Banner persetujuan cookie non-intrusif yang mematuhi privasi pengguna.

---

## 5. Model Data Cloud Firestore

- **`siteSettings/global`**: Profil badan usaha, brand name, tagline, email korporat, telepon, alamat fisik, sosial media, status dan nomor PSE.
- **`services/{id}`**: Dokumen layanan publik (slug, title, category, summary, description, icon, order, isPublished).
- **`projects/{id}`**: Dokumen studi kasus (slug, title, clientDisplayName, category, year, thumbnail, heroImage, challenge, approach, execution, outcome, metrics, isPublished, publishedAt).
- **`insights/{id}`**: Dokumen artikel wawasan (slug, title, excerpt, body, coverImage, tags, status, publishedAt).
- **`leads/{id}`**: Data prospek masuk (fullName, email, phone, companyOrganization, serviceType, projectBudget, projectTimeline, message, consent: true, consentTextVersion, status: "new" | "contacted" | "qualified" | "won" | "lost" | "spam", createdAt).
- **`adminUsers/{uid}`**: Data otoritas akun staf (email, displayName, role: "superadmin" | "editor" | "sales" | "viewer", active: boolean).
- **`auditLogs/{id}`**: Log audit perubahan data internal (actorUid, actorEmail, action, targetType, targetId, createdAt).

---

## 6. Arsitektur Keamanan & Privasi

1. **Firestore Security Rules:**
   - Menggunakan konfigurasi *deny-by-default*.
   - Publik hanya diizinkan membaca dokumen dengan filter `isPublished == true`.
   - Data `leads`, `adminUsers`, dan `auditLogs` tidak dapat dibaca oleh publik atau pengguna anonim.
   - Otorisasi penulisan dikontrol oleh RBAC (`superadmin`, `editor`, `sales`).
2. **Security Headers (`firebase.json`):**
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
   - Content Security Policy (CSP) bertahap.
3. **Privasi Data Sesuai UU PDP No. 27/2022:**
   - Pembatasan data formulir (minimisasi data).
   - Checkbox persetujuan eksplisit (un-checked secara default) dengan tautan ke Privacy Notice.
   - Tidak ada pengumpulan data sensitif publik (NIK, data biometrik, atau nomor rekening).
4. **Proteksi Kredensial:**
   - Tidak ada secret API atau private key yang disimpan dalam repositori atau diakses pada sisi klien.

---

## 7. Layanan Firebase & Manajemen Biaya

- **Fase Awal (Spark Plan):**
  - Mengoptimalkan Hosting statis, Firestore kuota gratis (50.000 read, 20.000 write per hari), dan Firebase Auth gratis.
  - Aset portfolio dikompresi dan disimpan secara terdistribusi di repositori statis.
- **Fase Lanjutan (Blaze Plan):**
  - Cloud Storage untuk unggah media CMS langsung dari panel admin.
  - Cloud Functions untuk pemrosesan endpoint lead server-side dan notifikasi otomatis.
  - Dilengkapi *budget alerts* dan kuota pengaman untuk memastikan biaya operasional terkendali.

---

## 8. Strategi Lingkungan (Environments)

1. **Local Development:** Menjalankan `npm run dev` dan Firebase Local Emulators.
2. **Staging (`maroa-web-dev`):** Untuk review internal, pengujian fitur, dengan header `X-Robots-Tag: noindex, nofollow` agar tidak terindeks mesin pencari.
3. **Production (`maroa-web-prod`):** Siap integrasi domain utama kustom dengan sertifikat SSL otomatis, sitemap aktif, dan indeksasi penuh.

---

## 9. Urutan Implementasi Bertahap

- **Phase 0 — Foundation:** Inisialisasi proyek Next.js, konfigurasi TypeScript & Tailwind CSS, pembuatan design tokens CSS, integrasi aset logo master, dan konfigurasi Firebase (`firebase.json`, `firestore.rules`).
- **Phase 1 — Public UI:** Pembuatan seluruh halaman publik (Home, About, Expertise, Sub-pilar, Work, Detail Case Study, Contact, dan Halaman Legal) dengan fidelity visual tinggi sesuai mockup.
- **Phase 2 — Data & Admin CMS:** Implementasi Firebase Auth, panel CMS admin, pengelolaan portfolio, dan inbox lead manajemen.
- **Phase 3 — Secure Inquiry:** Penerapan validasi Zod ketat, honeypot anti-spam, dan penanganan status inquiry.
- **Phase 4 — SEO, Aksesibilitas & Performa:** Penerapan metadata lengkap, schema JSON-LD, sitemap/robots, optimasi gambar (WebP/LCP), dan audit WCAG 2.2 AA.
- **Phase 5 — Kesiapan PSE:** Finalisasi inventaris sistem pada `17_PSE_REGISTRATION_DATA_SHEET.md` dan kepatuhan privasi.
- **Phase 6 — Final Review & Deliverable:** Uji responsivitas pada 7 resolusi target dan pembuatan `FINAL_IMPLEMENTATION_REPORT.md`.

---

## 10. Manajemen Risiko & Keputusan Asumsi

- **Keputusan Data Faktual:** Menghindari angka metrik fiktif. Seluruh data studi kasus awal menggunakan narasi realistis berbasis portofolio dan kapabilitas MAROA tanpa membuat klaim statistik palsu.
- **Pendaftaran PSE:** Status "PSE Terdaftar" tidak ditampilkan di footer publik hingga tanda daftar resmi diperoleh.
- **Aspek Biaya:** Seluruh arsitektur awal dirancang agar dapat berjalan dengan andal dan aman tanpa membebani biaya langganan berbayar.

---

## 11. Checklist Berdasarkan Handoff

- [x] Audit seluruh 21 dokumen handoff dan manifest.
- [x] Audit aset logo asli (`assets/logos/`) dan mockup (`assets/mockups/`).
- [x] Pembuatan dokumen `IMPLEMENTATION_PLAN.md`.
- [ ] Setup proyek Next.js, TypeScript, Tailwind CSS, dan token warna MAROA.
- [ ] Pembuatan konfigurasi Firebase (`firebase.json`, `firestore.rules`, `.firebaserc`, `.env.example`).
- [ ] Implementasi Halaman Publik responsif (Home, About, Services, Work, Contact, Legal).
- [ ] Implementasi Admin CMS terproteksi dengan RBAC.
- [ ] Validasi form kontak anti-spam (Honeypot + Zod).
- [ ] Implementasi SEO (Metadata, JSON-LD, sitemap, robots).
- [ ] Pengujian responsivitas 7 resolusi (360px s.d. 1920px) dan aksesibilitas.
- [ ] Penyusunan dokumen final `FINAL_IMPLEMENTATION_REPORT.md`.
