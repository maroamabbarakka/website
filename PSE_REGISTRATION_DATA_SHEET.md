# LEMBAR DATA PENDAFTARAN PSE LINGKUP PRIVAT
## Sistem Elektronik: Website Korporat & Platform Layanan PT MAROA MEDIA MABBARAKKA

**Status Dokumen:** Terdaftar Resmi (TDPSE Aktif)  
**Nomor Tanda Daftar PSE (TDPSE):** 029903.01/DJAI.PSE/09/2026  
**Lembaga Penerbit:** Kementerian Komunikasi dan Digital Republik Indonesia (KOMDIGI RI)  
**Tanggal Penerbitan:** September 2026  
**Entitas Hukum:** PT MAROA MEDIA MABBARAKKA  

---

### A. IDENTITAS PENYELENGGARA SISTEM ELEKTRONIK (PSE)
1. **Nama Badan Usaha:** PT MAROA MEDIA MABBARAKKA
2. **Bentuk Hukum:** Perseroan Terbatas (PT)
3. **Merek Dagang:** MAROA
4. **Klasifikasi Bisnis:** Creative Technology & Experience Company
5. **Nomor Induk Berusaha (NIB):** 1509260001449 (Sistem OSS-RBA BKPM RI)
6. **SK Pengesahan AHU Kemenkumham:** AHU-A122202.AH.01.30.Tahun 2026
7. **NPWP Perusahaan:** 1000000011150077 (DJP Kemenkeu RI)
8. **Alamat Domisili Resmi:** Pinrang, Sulawesi Selatan, Indonesia
9. **Email Korespondensi Resmi:** maroamabbarakka@gmail.com
10. **Nomor Kontak Resmi:** +62 813-4351-1099

---

### B. GAMBARAN UMUM SISTEM ELEKTRONIK
1. **Nama Sistem Elektronik:** MAROA Corporate Website & Digital Platform
2. **Sektor Usaha:** Teknologi Informasi, Komunikasi, dan Jasa Kreatif Event & Multimedia
3. **URL Produksi:** https://maroa.co.id [TODO: Konfirmasi Domain Final]
4. **Karakteristik Sistem:** Situs web korporat publik statis-terakselerasi dengan modul interaksi formulir pengajuan proyek (inquiry/lead pipeline) dan panel administrasi internal (CMS) terproteksi otentikasi.

---

### C. PROSES BISNIS & FUNGSI SISTEM
1. **Publikasi Profil & Portofolio:** Menyajikan informasi faktual mengenai tiga pilar bisnis (Events & Experiences, Multimedia & Studio, Digital & Web Applications) dan studi kasus proyek yang telah terselesaikan.
2. **Pengajuan Proyek (Inquiry/Lead Capture):** Calon klien mengisi formulir kebutuhan proyek (nama, email, organisasi, layanan, perkiraan anggaran, timeline, pesan kebutuhan).
3. **Pemberian Persetujuan Data:** Pengunjung memberikan persetujuan eksplisit (consent) pemrosesan data untuk keperluan korespondensi penawaran kerja sama.
4. **Pencegahan Bot Jahat (Anti-Spam):** Sistem memvalidasi skema data, memeriksa ketiadaan isian bot (honeypot), mengukur heuristik durasi pengisian form, dan melindungi endpoint dengan App Check.
5. **Manajemen Konten Internal (Admin CMS):** Staf terotentikasi mengelola publikasi portofolio dan status penanganan prospek klien.

---

### D. INVENTARISASI DATA PRIBADI YANG DIPROSES
| Kategori Data | Jenis Data | Dasar Pemrosesan | Tujuan Pemrosesan | Masa Retensi |
|---|---|---|---|---|
| Data Kontak | Nama lengkap, alamat email, nomor telepon | Persetujuan Subjek Data (Pasal 20 UU PDP) | Komunikasi & korespondensi penawaran kerja sama | Selama proses negosiasi atau hingga diminta dihapus |
| Data Organisasi | Nama instansi/perusahaan | Kepentingan yang Sah | Penyiapan proposal kerja sama profesional | Sama dengan data kontak |
| Informasi Proyek | Anggaran, timeline, rincian konsep | Pra-kontraktual | Analisis kelayakan dan ruang lingkup proyek | Sama dengan data kontak |
| Data Teknis | IP address tersamar, timestamp persetujuan | Keamanan Informasi & Log Audit | Perlindungan dari serangan siber & pembuktian kepatuhan | Maksimal 12 bulan untuk log keamanan |

*Catatan: Sistem sama sekali tidak mengumpulkan NIK, data biometrik, rekam medis, data keuangan pribadi/rekening, atau data sensitif lainnya.*

---

### E. LOKASI PENGELOLAAN, PEMROSESAN & PENYIMPANAN SISTEM
| Komponen Sistem | Penyedia Layanan (Vendor) | Lokasi / Wilayah Komputasi | Keterangan Teknis |
|---|---|---|---|
| Basis Data (Firestore) | Google Cloud / Firebase | `asia-southeast2` (Jakarta, Indonesia) | Mendukung kedaulatan data dan kepatuhan residensi data nasional |
| Pengiriman Web (Hosting) | Firebase Hosting | Global Content Delivery Network (CDN) | Akselerasi statis global dengan enkripsi HTTPS/TLS otomatis |
| Otentikasi Staf (Auth) | Firebase Authentication | Google Cloud Infrastructure | Enkripsi kredensial standar industri dengan proteksi brute-force |
| Proteksi Penyalahgunaan | Firebase App Check / reCAPTCHA Enterprise | Google Infrastructure | Analisis risiko dan atestasi permintaan sah |

---

### F. KENDALI KEAMANAN INFORMASI
1. **Enkripsi dalam Transit:** Seluruh komunikasi mewajibkan HTTPS dengan sertifikat SSL/TLS dan HTTP Strict Transport Security (HSTS).
2. **Aturan Basis Data (Firestore Rules):** Konfigurasi *deny-by-default*. Akses baca publik dibatasi ketat hanya pada dokumen bertanda `isPublished == true`. Koleksi data prospek (leads) dan profil staf terproteksi penuh dari akses tanpa otentikasi.
3. **Otorisasi Berbasis Peran (RBAC):** Pemisahan hak akses internal (`superadmin`, `editor`, `sales`, `viewer`).
4. **Header Keamanan Web:** Penerapan `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, dan Content Security Policy (CSP).
5. **Mitigasi Spam & Abuse:** Penggunaan honeypot tersembunyi dan heuristik waktu kirim minimal 3 detik untuk menolak bot otomatis.
6. **Kanal Hak Subjek Data:** Penyediaan tautan Kebijakan Privasi (/privacy) dan saluran email resmi untuk permintaan penarikan persetujuan, perbaikan, atau penghapusan data.

---

### G. PERNYATAAN STATUS TANDA DAFTAR PSE
Tanda Daftar Penyelenggara Sistem Elektronik (TDPSE) telah resmi diterbitkan oleh Kementerian Komunikasi dan Digital Republik Indonesia dengan Nomor Registrasi: **029903.01/DJAI.PSE/09/2026**.
Sertifikat Tanda Daftar dilengkapi QR Code resmi verifikasi Komdigi yang dipublikasikan secara transparan pada footer website dan halaman Legalitas (`/legal`) untuk validasi publik.
