# 03 — UI/UX Design System

## 1. Arah visual
Mockup mendefinisikan bahasa visual:
- premium;
- modern corporate-tech;
- white/light gray surfaces;
- black/charcoal typography;
- red MAROA sebagai primary accent;
- cinematic imagery dengan red highlight;
- whitespace luas;
- border tipis;
- radius medium;
- shadow lembut;
- typography tegas dan bersih.

## 2. Catatan penting mockup
Device frames pada mockup hanya presentation device. **Jangan** memasukkan monitor/laptop/tablet mockup ke dalam website sebenarnya kecuali sebagai ilustrasi portfolio tertentu.

## 3. Design tokens
Developer harus membuat CSS variables. Nilai berikut adalah baseline; final red harus disampling dari official logo asset.

```css
:root {
  --maroa-red: #ff171f;
  --maroa-red-dark: #d90d16;
  --maroa-black: #090909;
  --maroa-charcoal: #171717;
  --maroa-ink: #202124;
  --maroa-gray-700: #4b4f55;
  --maroa-gray-500: #7a7f87;
  --maroa-gray-300: #d9dce1;
  --maroa-gray-100: #f4f5f7;
  --maroa-white: #ffffff;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-card: 0 12px 36px rgba(0,0,0,.08);
  --container: 1280px;
}
```

Jangan menggunakan terlalu banyak gradient. Red harus terasa sebagai accent, bukan seluruh background.

## 4. Typography
Rekomendasi:
- Heading: Manrope / Geist / font geometrik modern setara.
- Body: Inter / Geist Sans / system sans.
- Fallback: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

Gunakan font self-hosted bila lisensi memungkinkan untuk mengurangi third-party calls.

Minimum:
- body: 16px desktop, 16px mobile;
- small text: jangan di bawah 12px;
- line-height body: 1.5–1.7;
- heading line-height: 1.0–1.15.

## 5. Type scale
Desktop baseline:
- Display XL: 64–80 px
- H1: 56–72 px
- H2: 40–52 px
- H3: 28–34 px
- Body L: 18–20 px
- Body: 16 px
- Caption: 12–14 px

Gunakan `clamp()` agar fluid.

Contoh:
```css
.hero-title {
  font-size: clamp(2.5rem, 5vw, 5rem);
}
```

## 6. Container & grid
- max content width: 1280px;
- horizontal padding: 24px desktop kecil, 32–48px desktop besar;
- mobile: 16–20px;
- 12-column grid desktop;
- 8-column tablet;
- 4-column mobile.

## 7. Buttons
Primary:
- MAROA red;
- white text;
- 44–48px minimum height;
- focus ring jelas;
- icon arrow optional.

Secondary:
- white/transparent;
- charcoal border;
- dark text.

Tidak boleh hanya mengandalkan warna untuk state.

## 8. Cards
Core pillar cards:
- icon red;
- heading dark;
- body gray;
- thin border;
- subtle hover lift;
- arrow cue.

Hover tidak boleh mengubah layout.

## 9. Imagery
Gunakan image ratio konsisten:
- hero: 16:9 atau custom wide crop;
- case study card: 4:3 / 16:10;
- editorial thumbnail: 3:2.

Semua image harus:
- punya `alt` yang benar;
- punya width/height untuk mencegah CLS;
- lazy load kecuali hero/LCP;
- dikompresi WebP/AVIF jika pipeline memungkinkan.

## 10. Motion
Motion hanya untuk memperkuat premium feel:
- fade/slide 12–24px;
- 180–400ms;
- easing lembut;
- card hover 2–4px lift;
- no aggressive parallax.

Wajib menghormati:
```css
@media (prefers-reduced-motion: reduce) { ... }
```

## 11. Icons
Gunakan satu keluarga icon linear/outline konsisten. Jangan mencampur banyak gaya.

Pilar:
- Events: calendar / stage / ticket
- Multimedia: shutter / play / camera
- Digital: monitor / code / browser
- Café: cup icon, tampil sekunder.

## 12. Logo use
- Main header: `maroa-main-signal.png` atau versi SVG resmi bila tersedia.
- App mark/favicon: monogram/app icon.
- Secondary play/dialog/shutter lockups hanya untuk section relevan, bukan menggantikan master logo.
- Jangan redraw logo dengan font lain.
- Jangan menambah shadow/outline berlebihan pada logo.
