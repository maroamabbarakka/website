# 11 — SEO, Analytics & Performance

## 1. SEO baseline
Setiap public page wajib:
- unique `<title>`;
- meta description;
- canonical URL;
- Open Graph title/description/image;
- Twitter/X card metadata bila relevan;
- index/follow directive yang benar;
- structured data sesuai page.

## 2. Structured data
Homepage:
- `Organization`
- `WebSite`

Services:
- `Service`
- `BreadcrumbList`

Case study:
- `CreativeWork` atau schema yang paling sesuai, jangan memaksa jenis yang salah.

Contact:
- `Organization` contactPoint.

Jangan masukkan rating/review palsu.

## 3. Sitemap
Generate `sitemap.xml` berisi:
- static routes;
- published projects;
- published insights.

Exclude:
- admin;
- preview;
- draft;
- private URLs.

## 4. robots.txt
Production allow public pages. Staging harus `noindex` dan sebaiknya access-protected bila memungkinkan.

## 5. Performance budgets
Target aspirational:
- LCP < 2.5 s pada kondisi baik;
- CLS < 0.1;
- INP < 200 ms;
- JS initial bundle dijaga kecil;
- hero image optimized.

Developer harus menguji dengan Lighthouse dan real-device throttling.

## 6. Images
- responsive `srcset`;
- modern formats;
- compress;
- correct dimensions;
- `fetchpriority="high"` hanya untuk actual LCP image;
- below-the-fold lazy load.

## 7. Video
Showreel:
- poster image dulu;
- no autoplay audio;
- lazy initialize player;
- embed third-party hanya setelah user action bila bisa.

## 8. Analytics
Recommended event taxonomy:
- `cta_start_project`
- `cta_view_work`
- `service_view`
- `case_study_view`
- `lead_form_start`
- `lead_form_submit`
- `lead_form_success`
- `contact_click_email`
- `contact_click_phone`

Jangan mengirim fullName, email, phone, message, atau data pribadi ke analytics event parameters.

## 9. Search Console
Setelah production:
- verify domain;
- submit sitemap;
- inspect core pages;
- monitor indexing and CWV.

## 10. Social share
Setiap case study harus memiliki OG image 1200×630 atau ratio setara, tidak memuat data rahasia klien.
