# 02 — Information Architecture & Route Map

## 1. Main navigation
Desktop:
- Home
- About
- Expertise
- Work
- Insights
- Contact
- CTA: **Start a Project** / **Let's Talk**

Alternatif menu sesuai mockup boleh memecah Expertise menjadi Events, Multimedia, Digital. Namun route canonical tetap harus jelas.

## 2. Route publik wajib
| Route | Fungsi |
|---|---|
| `/` | Homepage |
| `/about` | Company profile |
| `/expertise` | Overview semua layanan |
| `/expertise/events` | Events & Experiences |
| `/expertise/multimedia` | Multimedia & Studio |
| `/expertise/digital` | Digital & Web Applications |
| `/work` | Portfolio / case studies |
| `/work/[slug]` | Detail case study |
| `/insights` | Artikel / insight perusahaan, opsional MVP namun route disiapkan |
| `/insights/[slug]` | Detail artikel |
| `/contact` | Contact & project inquiry |
| `/start-a-project` | Form inquiry fokus konversi |
| `/legal` | Ringkasan legal & compliance |
| `/privacy` | Privacy Notice |
| `/terms` | Terms of Use |
| `/cookies` | Cookie & analytics preference |
| `/accessibility` | Accessibility statement opsional namun direkomendasikan |
| `/security` | Responsible disclosure / security contact ringkas |
| `/404` | Not found |

## 3. Route admin
- `/admin/login`
- `/admin`
- `/admin/projects`
- `/admin/projects/new`
- `/admin/projects/[id]`
- `/admin/services`
- `/admin/insights`
- `/admin/leads`
- `/admin/settings`
- `/admin/legal`
- `/admin/audit`

Admin tidak boleh muncul di sitemap atau navigasi publik.

## 4. Route yang jangan dibuat dulu
- `/shop`
- `/account`
- `/checkout`
- `/forum`
- `/comments`

Kecuali ada scope baru.

## 5. Hierarki homepage
1. Header + navigation
2. Hero statement
3. 3 core pillar cards
4. Selected Work
5. Why MAROA / integrated approach
6. Process ringkas
7. Client/partner logos bila tersedia dan telah disetujui
8. Short About block
9. CTA Start a Project
10. Footer legal

## 6. Footer
Footer harus memiliki:
- MAROA logo;
- one-line positioning;
- quick links;
- services links;
- address/company contact publik;
- email corporate;
- social media;
- Privacy;
- Terms;
- Cookies;
- Legal/Compliance;
- copyright year otomatis;
- badge/link PSE **hanya setelah TDPSE benar-benar terbit**.

Jangan menampilkan nomor identitas pribadi, KTP, NPWP pribadi, scan dokumen, tanda tangan, atau QR verifikasi dokumen publik.
