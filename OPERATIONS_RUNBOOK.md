# OPERATIONS, BACKUP & INCIDENT RUNBOOK
## PT MAROA MEDIA MABBARAKKA — Corporate Website

Dokumen panduan operasional, pemeliharaan, pencadangan data, serta penanganan insiden keamanan dan ketersediaan sistem web korporat MAROA.

---

## 1. Peran & Tanggung Jawab Operasional
- **Product Owner:** Direksi PT MAROA MEDIA MABBARAKKA
- **Technical Lead / Engineering:** Lead Full-Stack & DevOps Engineer
- **Firebase Billing Owner:** Penanggung jawab keuangan / akun Google Cloud MAROA
- **Domain & DNS Administrator:** Pengelola registrar domain dan DNS Cloudflare/Hosting
- **Data Protection & Incident Contact:** `security@maroa.co.id` / `contact@maroa.co.id`

---

## 2. Strategi Pencadangan (Backup Strategy)
### A. Repositori Kode & Konfigurasi
- Repositori Git dengan cabang `main` yang terproteksi (protected branch).
- Setiap rilis produksi ditandai dengan Git release tag (contoh: `v1.0.0-prod`).

### B. Basis Data Cloud Firestore
- **Ekspor Mandiri (Spark / Free Tier Baseline):** Pengambilan berkas JSON snapshot data secara berkala melalui Admin CMS atau script admin resmi sebelum perubahan konfigurasi besar.
- **Managed Backup (Blaze Tier):** Menjadwalkan Firebase Managed Backup / Cloud Firestore Scheduled Export ke Google Cloud Storage bucket pada region `asia-southeast2` (Jakarta) jika menggunakan paket berbayar.

### C. Master Media & Aset Visual
- Seluruh aset logo master (`maroa-main-signal.png`, monogram, mark) tersimpan secara permanen di direktori `/public/logos/` dan arsip lokal terenkripsi, bukan hanya di hosting CDN.

---

## 3. Tingkat Keparahan Insiden (Incident Severity Levels)
- **P1 (Kritis):** Situs web publik tidak dapat diakses (downtime total) atau terkonfirmasi terjadi pelanggaran kebocoran data tanpa izin.
- **P2 (Mayor):** Formulir kontak/pengajuan proyek gagal berfungsi, atau panel Admin CMS tidak dapat diakses oleh staf berwenang.
- **P3 (Minor):** Kesalahan tampilan visual minor, ketidaktepatan teks non-kritis, atau masalah performa sesaat.

---

## 4. Alur Penanganan Insiden Kritis (P1 Incident Playbook)
1. **Verifikasi & Penilaian:** Konfirmasi status ketersediaan sistem dan identifikasi vektor anomali.
2. **Pembekuan Rilis (Deploy Freeze):** Hentikan seluruh deployment baru yang sedang berjalan.
3. **Isolasi Layanan & Kredensial:** Jika dicurigai adanya kompromi kredensial, segera lakukan rotasi API Key pada Google Cloud Console dan cabut sesi admin yang terdampak.
4. **Preservasi Bukti & Log:** Simpan log Hosting dan audit logs untuk keperluan analisis forensik internal.
5. **Restorasi Rilis Aman (Rollback):**
   - Melalui Firebase Console: Buka *Hosting* -> Pilih rilis stabil sebelumnya -> Klik *Rollback to this version*.
   - Melalui CLI: `firebase hosting:clone <source-channel> <target-channel>`
6. **Penilaian Dampak Regulasi (UU PDP):** Jika insiden melibatkan kebocoran data pribadi, lakukan inventarisasi data yang terdampak dan siapkan notifikasi resmi kepada lembaga pelindungan data pribadi dan subjek data terdampak dalam jangka waktu maksimal 3×24 jam sesuai Pasal 46 UU No. 27 Tahun 2022.
7. **Tinjauan Pasca-Insiden (Post-Mortem):** Susun laporan tertulis penyebab akar masalah (Root Cause Analysis) dan rencana aksi mitigasi pencegahan berulang.

---

## 5. Pemeliharaan Kredensial & Siklus Akun Staf
- Evaluasi triwulanan atas seluruh akun staf pada Firebase Authentication dan koleksi `adminUsers`.
- Akun karyawan atau vendor yang telah menyelesaikan masa tugas segera dinonaktifkan (`active: false`).
- Larangan keras membagikan kredensial login atau mencatat kata sandi pada dokumen yang tidak terenkripsi.
