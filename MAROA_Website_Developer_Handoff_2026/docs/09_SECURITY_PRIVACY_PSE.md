# 09 — Security, Privacy & PSE Compliance Baseline

> Dokumen ini adalah engineering compliance baseline, bukan opini hukum final. Untuk teks legal final dan klasifikasi kewajiban spesifik, lakukan review hukum/regulatory bila diperlukan.

## 1. PSE readiness
PSE Lingkup Privat domestik saat ini meminta informasi antara lain:
- gambaran umum pengoperasian sistem elektronik;
- nama sistem elektronik;
- sektor;
- URL;
- DNS dan/atau IP server;
- model bisnis;
- fungsi dan proses bisnis;
- data pribadi yang diproses;
- lokasi pengelolaan/pemrosesan/penyimpanan sistem dan data;
- pernyataan terkait akses untuk pengawasan/penegakan hukum;
- keamanan informasi;
- pelindungan data pribadi;
- uji kelaikan sesuai ketentuan yang berlaku.

Developer harus menyiapkan fakta teknis ini secara terdokumentasi, bukan menebak saat pendaftaran.

## 2. System inventory
Buat inventory:
| Component | Operator | Function | Data | Region/location | Public? |
|---|---|---|---|---|---|
| Firebase Hosting | Google/Firebase | public website | static content/log metadata | global CDN | yes |
| Firestore | Google/Firebase | content/leads | content + inquiry data | choose actual region | no/direct API |
| Firebase Auth | Google/Firebase | admin auth | admin identity | actual service processing | no |
| App Check | Google/Firebase | abuse protection | attestation/risk metadata | vendor processing | no |
| Analytics if enabled | Google | analytics | usage identifiers/events | vendor processing | optional |

Jangan menulis `Indonesia only` bila faktanya ada global processing/CDN.

## 3. Privacy by design
- minimisasi data;
- purpose limitation;
- consent/notice yang jelas untuk inquiry;
- default no public profile;
- no sensitive personal data collection;
- access based on role;
- encryption in transit melalui HTTPS;
- restrict database writes;
- data subject request channel;
- documented deletion/correction process.

## 4. Contact form privacy
Sebelum submit tampilkan:
- ringkas tujuan pemrosesan;
- link Privacy Notice;
- checkbox persetujuan untuk penggunaan data guna menanggapi inquiry.

Jangan pre-check checkbox.

## 5. Cookies & analytics
Kategori:
- Essential: tidak dapat dimatikan jika benar-benar diperlukan.
- Analytics: non-essential, default sesuai keputusan kebijakan privasi.
- Marketing: jangan aktifkan jika belum digunakan.

Jika Analytics diaktifkan, implementasikan consent mode/config yang sesuai dan dokumentasikan data yang dikumpulkan.

## 6. Security headers
Baseline `firebase.json` headers:
```json
{
  "headers": [
    {
      "source": "**",
      "headers": [
        {"key": "X-Content-Type-Options", "value": "nosniff"},
        {"key": "Referrer-Policy", "value": "strict-origin-when-cross-origin"},
        {"key": "X-Frame-Options", "value": "SAMEORIGIN"},
        {"key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()"}
      ]
    }
  ]
}
```

CSP harus disusun sesuai domain yang benar. Jangan copy CSP terlalu ketat tanpa test, dan jangan memakai `unsafe-eval` di production kecuali benar-benar diperlukan dan terdokumentasi.

## 7. CSP target
Mulai dari report-only pada staging, inventaris seluruh origin:
- `self`;
- Firebase endpoints yang dipakai;
- fonts jika eksternal;
- analytics jika diaktifkan;
- image CDN jika ada.

Lalu pindah ke enforce setelah tidak ada violation legitimate.

## 8. Firestore security
- default deny;
- public read hanya published content;
- public client tidak dapat list leads;
- public lead write hanya schema tertentu atau melalui Function;
- admin access by auth + role.

## 9. Storage security
Jika Blaze + Storage:
- authenticated admin upload only;
- limit max file size;
- allowlist MIME;
- no executable upload;
- random names;
- do not trust original filename;
- public portfolio assets dapat read public setelah publish bila diperlukan.

## 10. App Check rollout
1. Register app.
2. Integrate provider.
3. Observe metrics.
4. Fix legitimate failures.
5. Enable enforcement per service.

Jangan langsung enforce tanpa observasi karena bisa memblokir pengguna sah.

## 11. Admin protection
- no public signup;
- MFA jika feasible;
- least privilege;
- remove ex-staff immediately;
- separate admin email from public contact email;
- never share accounts.

## 12. Secrets
Prohibited:
- service account JSON in repo;
- private key in `.env` committed;
- API secrets in browser;
- credentials in screenshots/documentation.

## 13. Incident response minimum
Jika ada suspected breach:
1. contain access;
2. rotate credentials;
3. preserve logs;
4. identify affected data;
5. assess legal notification requirement;
6. document timeline;
7. remediate root cause.

## 14. UGC
Versi pertama tidak memiliki public UGC/comment. Jika kelak ditambahkan, tambahkan moderation policy, reporting channel, takedown workflow, dan update PSE documentation.

## 15. Official references
- PSE registration requirements: https://pse.komdigi.go.id/panduan/persyaratan-pendaftaran-pse-lingkup-privat-domestik
- Permenkominfo 5/2020: https://jdih.komdigi.go.id/produk_hukum/view/id/759/
- UU 27/2022 PDP: https://jdihn.go.id/pencarian/detail/1555017/index.html
