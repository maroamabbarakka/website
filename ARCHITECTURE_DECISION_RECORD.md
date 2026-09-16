# ARCHITECTURE DECISION RECORD (ADR)
## PT MAROA MEDIA MABBARAKKA — Corporate Website

Catatan keputusan arsitektural teknis formal yang mendasari perancangan dan implementasi website korporat MAROA.

---

### ADR 01: Pemilihan Framework Web (Next.js 15 dengan Turbopack Engine)
- **Status:** Diterima & Diimplementasikan
- **Konteks:** Website korporat memerlukan kecepatan rendering awal yang sangat tinggi, SEO optimal tanpa kendala perayapan mesin pencari, serta arsitektur berbasis komponen TypeScript yang terstandarisasi.
- **Keputusan:** Menggunakan Next.js (App Router, React 19, TypeScript) dengan engine bundler Turbopack (`--turbo`).
- **Konsekuensi:** Turbopack menyediakan kompilasi kilat, mengekspor seluruh 29 halaman publik dan admin secara statis (SSG) tanpa terpengaruh oleh bug karakter fragment Webpack pada sistem berkas Windows.

---

### ADR 02: Arsitektur Static-First dengan Firebase Hosting
- **Status:** Diterima & Diimplementasikan
- **Konteks:** Menjaga biaya operasional awal tetap efisien pada Firebase Spark Tier dan meminimalkan permukaan serangan server-side.
- **Keputusan:** Halaman publik diekspor sebagai pre-rendered HTML/CSS/JS statis yang disajikan langsung via Firebase Hosting global CDN dengan header keamanan lengkap (HSTS, nosniff, SAMEORIGIN, CSP).
- **Konsekuensi:** LCP sangat cepat (< 1,5 detik), zero Layout Shift (CLS), dan keandalan tinggi tanpa server node yang berjalan terus-menerus.

---

### ADR 03: Keamanan Basis Data & Otorisasi Berbasis Peran (Firestore RBAC)
- **Status:** Diterima & Diimplementasikan
- **Konteks:** Melindungi data internal, data leads calon klien, dan konfigurasi sistem dari akses pihak luar yang tidak berhak.
- **Keputusan:** Aturan Firestore menerapkan prinsip *deny-by-default*. Akses baca publik hanya diizinkan untuk dokumen yang memiliki status `isPublished == true`. Koleksi `leads`, `adminUsers`, dan `auditLogs` terisolasi dan hanya dapat diakses oleh staf terotentikasi berdasarkan peran (`superadmin`, `editor`, `sales`, `viewer`).
- **Konsekuensi:** Keamanan data terlindungi di tingkat basis data, bukan hanya disembunyikan pada antarmuka frontend.

---

### ADR 04: Proteksi Formulir Berlapis (Anti-Spam & UU PDP)
- **Status:** Diterima & Diimplementasikan
- **Konteks:** Formulir publik sering menjadi target bot spam otomatis dan harus mematuhi regulasi privasi UU No. 27 Tahun 2022.
- **Keputusan:** Menerapkan validasi skema Zod ketat, field honeypot tersembunyi, heuristik waktu isi minimal 3 detik, serta persetujuan privasi eksplisit (un-checked default) dengan tautan ke Kebijakan Privasi.
- **Konsekuensi:** Bot otomatis ditolak sebelum mencemari basis data, dan integritas hukum persetujuan pemrosesan data terjaga.

---

### ADR 05: Kebijakan Publikasi Status PSE Komdigi
- **Status:** Diterima & Diimplementasikan
- **Konteks:** Kepatuhan terhadap Peraturan Menteri Kominfo No. 5/2020 dan instruksi handoff.
- **Keputusan:** Tidak menampilkan label "PSE Terdaftar" atau nomor dummy sebelum Tanda Daftar Penyelenggara Sistem Elektronik (TDPSE) resmi diterbitkan oleh Kementerian Komunikasi dan Digital. Seluruh lembar data teknis PSE disiapkan sebagai living documentation.
- **Konsekuensi:** Menghindari klaim kepatuhan fiktif dan menjamin transparansi hukum yang sah.
