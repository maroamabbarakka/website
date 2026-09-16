# 05 — Responsive, Accessibility & Interaction Standards

## 1. Target viewport QA
Minimum test manual:
- 360×800
- 390×844
- 412×915
- 768×1024
- 820×1180
- 1024×768
- 1366×768
- 1440×900
- 1920×1080

## 2. Breakpoint baseline
Gunakan sesuai framework, tetapi behavior harus setara:
- `< 640`: mobile
- `640–767`: large mobile
- `768–1023`: tablet
- `1024–1279`: small desktop
- `>=1280`: desktop
- `>=1536`: wide desktop

## 3. Responsive behavior
- Navigation berubah menjadi hamburger pada mobile/tablet sesuai space.
- Hero 2 kolom menjadi 1 kolom.
- Card 3 kolom → 2 → 1.
- Portfolio grid 3 → 2 → 1.
- Form 2 kolom → 1.
- Footer multi-column → accordion/stacked pada mobile bila panjang.
- Typography menggunakan `clamp`.

## 4. Mobile first constraints
- touch target minimum ~44×44 px;
- gap minimum 8–12px antar target;
- button tidak terpotong;
- no hover-only essential action;
- form input minimal 16px font untuk mencegah unwanted zoom iOS;
- sticky CTA boleh dipakai hanya bila tidak menutupi konten.

## 5. WCAG target
Target implementasi: **WCAG 2.2 AA** sedapat mungkin.

Wajib:
- semantic landmarks (`header`, `nav`, `main`, `footer`);
- satu H1 utama per page;
- heading order logis;
- keyboard navigation;
- visible focus state;
- skip-to-content;
- form label eksplisit;
- error message terhubung ke field;
- `aria-live` untuk submit status;
- alt text bermakna;
- dekorasi gunakan empty alt;
- color contrast AA;
- reduce motion;
- modal focus trap;
- menu mobile dapat ditutup Esc.

## 6. Contrast
Red pada putih jangan dipakai sebagai body text kecil bila contrast tidak cukup. Gunakan red untuk accent/icon/button dengan white text setelah contrast diverifikasi.

## 7. Forms
- label tidak hanya placeholder;
- required ditandai tekstual dan programmatic;
- validation inline;
- server-side validation tetap wajib jika memakai backend;
- autocomplete attributes (`name`, `email`, `tel`, `organization`).

## 8. Testing accessibility
Gunakan:
- Lighthouse accessibility;
- axe DevTools;
- keyboard-only test;
- screen reader smoke test (NVDA/VoiceOver minimal untuk homepage + form).
