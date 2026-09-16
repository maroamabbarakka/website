# MAROA Website — Developer Handoff Package

**Project:** Website Korporat PT MAROA MEDIA MABBARAKKA  
**Positioning:** Creative Technology & Experience Company  
**Core business:** Events & Experiences · Multimedia & Studio · Digital & Web Applications  
**Secondary venture:** MAROA Café / F&B — ditampilkan subtil, bukan sebagai core business  
**Target platform:** Firebase  
**Target quality:** production-grade, responsive, secure, PSE-ready, privacy-aware, professional corporate website  
**Reference date:** 15 September 2026

## Tujuan paket ini
Paket ini adalah arahan teknis dan visual yang harus dijadikan sumber utama developer. Mockup adalah **referensi visual responsif**, bukan gambar yang harus ditempel sebagai satu layout statis. Developer harus membangun komponen nyata yang dapat beradaptasi di desktop, laptop, tablet, dan mobile.

## Prinsip utama
1. MAROA harus terlihat sebagai perusahaan profesional, modern, premium, dan terorganisasi meski tim operasional masih ramping.
2. Fokus komunikasi hanya pada tiga pilar utama: **Events**, **Multimedia**, **Digital**.
3. Café hanya tampil sebagai **secondary venture**.
4. Legalitas usaha, KBLI, NIB, dan data perusahaan digunakan pada halaman legal/compliance secukupnya; jangan menampilkan dokumen sensitif atau identitas pribadi.
5. Website harus dapat digunakan sebagai bahan pendukung pendaftaran **PSE Lingkup Privat**.
6. Keamanan, privasi, performa, SEO, dan aksesibilitas adalah bagian dari definition of done.

## Struktur paket
- `docs/` — arahan teknis dan implementasi.
- `assets/mockups/` — 5 mockup referensi halaman.
- `assets/logos/` — logo dan secondary mark MAROA.

## Urutan baca developer
1. `01_PROJECT_SCOPE_AND_PRINCIPLES.md`
2. `02_INFORMATION_ARCHITECTURE_AND_ROUTES.md`
3. `03_UI_UX_DESIGN_SYSTEM.md`
4. `04_PAGE_SPECIFICATIONS.md`
5. `05_RESPONSIVE_ACCESSIBILITY.md`
6. `06_FIREBASE_ARCHITECTURE.md`
7. `07_FIRESTORE_DATA_MODEL.md`
8. `08_ADMIN_CMS_AND_ROLES.md`
9. `09_SECURITY_PRIVACY_PSE.md`
10. `10_FORMS_LEADS_AND_ANTI_SPAM.md`
11. `11_SEO_ANALYTICS_PERFORMANCE.md`
12. `12_DEPLOYMENT_CICD_ENVIRONMENTS.md`
13. `13_TESTING_QA_ACCEPTANCE.md`
14. `14_OPERATIONS_BACKUP_INCIDENT.md`
15. `15_CONTENT_AND_COPY_GUIDE.md`
16. `16_IMPLEMENTATION_ROADMAP.md`
17. `17_PSE_REGISTRATION_DATA_SHEET.md`
18. `18_FIREBASE_RULES_BLUEPRINT.md`
19. `19_DEVELOPER_HANDOFF_CHECKLIST.md`
20. `20_COST_PROFILE_SPARK_VS_BLAZE.md`

## Mockup referensi
- `assets/mockups/01-home-responsive.png`
- `assets/mockups/02-services-responsive.png`
- `assets/mockups/03-portfolio-responsive.png`
- `assets/mockups/04-about-responsive.png`
- `assets/mockups/05-contact-responsive.png`

## Definition of Done tingkat proyek
Website belum dianggap selesai hanya karena secara visual mirip mockup. Selesai berarti:
- halaman utama sesuai desain dan struktur informasi;
- responsif pada minimal 360, 390, 768, 1024, 1366, 1440, dan 1920 px;
- tidak ada horizontal scroll tidak disengaja;
- Firestore Security Rules diuji di emulator;
- admin tidak dapat diakses publik;
- App Check aktif dan dipantau sebelum enforcement penuh;
- form contact tidak menulis field sembarangan ke database;
- privacy policy, terms, cookie preference, dan legal contact tersedia;
- sitemap, robots, canonical, OG image, structured data, metadata lengkap;
- Lighthouse dan Core Web Vitals diperiksa;
- tidak ada API secret di frontend;
- staging dan production terpisah;
- bukti teknis PSE tersedia pada dokumen internal;
- runbook backup dan incident response tersedia.
