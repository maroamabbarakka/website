# 06 — Firebase Architecture

## 1. Recommended production architecture

```text
Browser
  |
  v
Firebase Hosting (custom domain + SSL + global CDN)
  |
  +--> Static/Pre-rendered Next.js public pages
  |
  +--> Firebase Auth (admin only)
  |
  +--> App Check
  |
  +--> Cloud Firestore
  |      - public content metadata
  |      - leads
  |      - admin config
  |      - audit metadata
  |
  +--> Cloud Storage [Blaze]
  |      - portfolio images
  |      - article media
  |
  +--> Cloud Functions [Blaze, recommended]
         - secure lead submission
         - rate limiting
         - email notification/integration
         - server-side tasks
```

## 2. Recommended Firebase regions
Untuk data utama pengguna Indonesia, preferensi teknis:
- Firestore: `asia-southeast2` (Jakarta) jika tersedia pada project/edition yang dipakai.
- Jika layanan lain tidak tersedia di region sama, dokumentasikan region aktual.

Jangan mengklaim seluruh Firebase berada di Indonesia. Firebase Hosting memakai CDN global. Pada dokumentasi PSE, catat lokasi pengelolaan/pemrosesan/penyimpanan aktual per layanan.

## 3. Hosting mode
### Opsi A — Recommended baseline
Next.js static export → Firebase Hosting.

Kelebihan:
- cepat;
- murah;
- SEO kuat;
- attack surface kecil;
- cocok untuk corporate website.

### Opsi B — Dynamic SSR later
Firebase App Hosting / Functions / Cloud Run.

Gunakan hanya bila ada kebutuhan SSR real-time yang jelas. Ini memerlukan billing/Blaze untuk beberapa layanan.

## 4. Environments
Minimal:
- `maroa-web-dev`
- `maroa-web-prod`

Lebih ideal:
- dev
- staging
- prod

Jangan memakai satu project Firebase untuk eksperimen dan production.

## 5. Firebase services
### Hosting
- custom domain;
- force HTTPS;
- security headers;
- cache control per asset type;
- preview channels untuk PR/staging.

### Firestore
- rules deny-by-default;
- indexes versioned;
- queries paginated;
- avoid uncontrolled realtime listeners.

### Auth
Admin only. Public visitor tidak perlu login pada versi pertama.

### App Check
Aktifkan pada web. Untuk integrasi baru, pertimbangkan reCAPTCHA Enterprise provider sesuai dokumentasi Firebase.

### Storage
Gunakan untuk media hanya pada Blaze. Validate MIME, size, path, role.

### Functions
Recommended untuk production lead form agar validation/rate limit/server processing lebih kuat.

## 6. Environment variables
Public:
- Firebase client config (`NEXT_PUBLIC_...`) — boleh berada di client.

Secret:
- service account private key;
- third-party API secret;
- email credentials;
- webhook secret;
- admin bootstrap secret.

Secret tidak boleh berprefix public dan tidak boleh commit ke git.

## 7. Cache strategy
- hashed JS/CSS/static media: `public, max-age=31536000, immutable`;
- HTML: short/no-cache sesuai deploy strategy;
- legal/privacy pages: no aggressive long stale cache;
- API/function responses: explicit cache policy.

## 8. Offline persistence
Public corporate site tidak membutuhkan Firestore persistent offline cache secara default.
Untuk admin, gunakan memory cache kecuali ada alasan jelas. Jangan menyimpan data lead sensitif persisten di browser tanpa keputusan keamanan eksplisit.

## 9. Cost guardrails
- usage dashboard dipantau;
- billing budget alerts;
- spend caps untuk layanan yang mendukung;
- Firestore query harus bounded;
- image/video besar jangan disajikan langsung tanpa optimasi;
- no autoplay high-bitrate background video pada mobile.
