# 01 — Project Scope & Engineering Principles

## 1. Produk yang dibangun
Website korporat MAROA adalah pusat digital perusahaan untuk:
- memperkenalkan profil dan positioning MAROA;
- menjelaskan layanan Events, Multimedia, dan Digital;
- menampilkan portfolio/case study;
- menerima inquiry / start-a-project;
- menyediakan informasi legal, privasi, terms, dan PSE-ready disclosure;
- menjadi fondasi untuk ekspansi ke portal klien, sistem registrasi event, atau produk web lain di masa depan.

## 2. Positioning publik
Gunakan descriptor:

> **MAROA — Creative Technology & Experience Company**

Komunikasi utama:

> **Events · Multimedia · Digital**

Konsep naratif yang boleh dipakai secara selektif:

> **On Stage · On Screen · Online**

Jangan menjadikan KBLI sebagai menu layanan. KBLI adalah legal backbone, sedangkan website harus menjual solusi.

## 3. Tiga pilar bisnis
### A. Events & Experiences
Ruang lingkup komunikasi:
- event management;
- corporate/government event;
- conference, seminar, launching, activation;
- exhibition;
- community & sports event;
- stage & multimedia coordination;
- registration, QR check-in, event technology;
- live production dan documentation.

### B. Multimedia & Studio
- podcast production;
- video production;
- audiovisual design;
- graphic & visual communication design;
- motion content;
- live streaming / multicamera;
- recording, editing, post-production;
- event documentation;
- creative campaign assets.

### C. Digital & Web Applications
- corporate website;
- web application;
- dashboard;
- CMS;
- event registration system;
- QR check-in;
- ticketing / guest management;
- survey / feedback;
- internal information system;
- data visualization;
- digital workflow automation.

## 4. Secondary venture
MAROA Café / F&B hanya ditempatkan sebagai:
- small card pada About/Services bagian bawah;
- section `Ventures`;
- tidak muncul pada hero homepage;
- tidak memiliki bobot visual setara 3 core pillars.

## 5. Non-goals versi pertama
Versi pertama tidak harus memiliki:
- e-commerce;
- payment gateway;
- user-generated public comment;
- community forum;
- public user account;
- news portal editorial;
- complex SaaS dashboard untuk pelanggan.

Jangan menambah scope tanpa approval.

## 6. Prinsip engineering
- **Secure by default:** deny by default pada Firestore/Storage rules.
- **Privacy by design:** hanya kumpulkan data yang perlu.
- **Static-first:** halaman publik sebaiknya pre-render/static agar cepat dan SEO kuat.
- **Progressive enhancement:** JS gagal tidak boleh membuat informasi inti hilang seluruhnya.
- **No secret in client:** Firebase config boleh publik, tetapi service account/API private key tidak boleh pernah masuk browser bundle.
- **Separation of concerns:** public site, admin, data, media, analytics, dan legal config dipisahkan secara logis.
- **Observability:** error, deployment, dan penggunaan harus dapat dipantau.
- **Documented:** setiap keputusan arsitektur penting ditulis.

## 7. Tech baseline yang direkomendasikan
- Next.js versi stabil terbaru + TypeScript.
- Static export untuk public corporate pages jika tetap memakai Firebase Hosting klasik.
- Tailwind CSS atau CSS Modules dengan design tokens konsisten.
- Firebase JS modular SDK.
- Firestore untuk konten dinamis/leads.
- Firebase Authentication untuk admin.
- Firebase App Check untuk melindungi request aplikasi.
- Firebase Hosting untuk production.
- Cloud Storage dan Cloud Functions hanya bila proyek menggunakan Blaze.

## 8. Sikap terhadap framework
Framework dapat diganti jika developer punya alasan kuat, tetapi harus memenuhi:
- static/pre-rendered public pages;
- TypeScript;
- component architecture;
- routing jelas;
- metadata server/build-time;
- image optimization;
- build reproducible;
- Firebase deploy compatible.

Perubahan stack harus dicatat di `ARCHITECTURE_DECISION_RECORD.md` pada repo.
