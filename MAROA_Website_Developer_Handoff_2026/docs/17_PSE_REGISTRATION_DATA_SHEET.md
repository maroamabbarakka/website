# 17 — PSE Registration Data Sheet — Working Draft

> Isi final harus berdasarkan sistem production yang benar-benar berjalan. Jangan mengisi dengan asumsi.

## A. Identity
**PSE / legal entity:** PT MAROA MEDIA MABBARAKKA  
**System name:** `MAROA Corporate Website & Digital Platform` *(working name; final confirm)*  
**System type:** Corporate website / service offering / inquiry platform  
**Sector:** `[select actual category available in OSS/PSE]`

## B. URL
**Production URL:** `[TBD custom domain]`  
**Alternative URL:** `[www redirect if any]`

## C. DNS / IP
Record at registration date:
- A: `[TBD]`
- AAAA: `[TBD if any]`
- CNAME: `[TBD]`
- TXT ownership records: `[internal only if needed]`

Firebase Hosting may use global CDN; do not hard-code IP in this document until DNS final.

## D. Business model
Draft description:

> MAROA mengoperasikan situs korporat untuk mempublikasikan profil perusahaan, layanan Events & Experiences, Multimedia & Studio, dan Digital & Web Applications, menampilkan portfolio/case study, serta menerima permintaan informasi dan pengajuan proyek dari calon klien. Website tidak menyediakan marketplace atau transaksi keuangan pada versi awal.

## E. System functions
1. Publication of company information.
2. Service information.
3. Portfolio/case study publication.
4. Inquiry / start-a-project form.
5. Internal admin content management.
6. Lead management.
7. Analytics, only if enabled according to privacy settings.

## F. Business process
```text
Visitor -> Browse services/work -> Open Start a Project -> Read privacy notice ->
Submit inquiry -> Validation/anti-spam -> Store lead -> Internal review -> Contact visitor
```

Admin:
```text
Admin login -> Authentication -> Role check -> Manage published content/leads -> Audit log
```

## G. Personal data processed
Expected MVP:
- name;
- email;
- phone, if provided;
- company/organization, if provided;
- service interest;
- budget range, if provided;
- project timeline, if provided;
- inquiry text;
- consent/version metadata;
- technical/security metadata from platform as applicable.

Explicitly not requested:
- NIK;
- KTP image;
- religion;
- health data;
- biometric data;
- personal financial data;
- password from public visitor.

## H. Purpose
- respond to inquiries;
- prepare initial project discussion;
- operate website securely;
- improve service analytics if user/privacy configuration allows.

## I. Data location inventory
Fill from actual production configuration:
| Service | Function | Location / processing statement |
|---|---|---|
| Firebase Hosting | web delivery | Global CDN; record vendor architecture accurately |
| Firestore | content + inquiry | `[e.g. asia-southeast2 Jakarta if selected]` |
| Firebase Auth | admin auth | `[document actual vendor service]` |
| App Check | abuse protection | `[document provider]` |
| Analytics | optional | `[if enabled]` |
| Cloud Storage | media | `[actual bucket region if used]` |
| Functions | backend | `[actual function region if used]` |

## J. Security controls summary
- HTTPS/SSL;
- App Check;
- Firestore Security Rules;
- role-based admin;
- no public signup;
- server validation for inquiry if using Function;
- rate limiting;
- security headers;
- dependency updates;
- monitoring;
- incident runbook.

## K. Privacy controls summary
- privacy notice;
- purpose-limited form;
- consent/notice;
- no unnecessary sensitive data;
- admin access restriction;
- data correction/deletion request channel;
- retention policy.

## L. PSE publication rule
Website footer may show `PSE Registered` / registration number only **after** valid registration has been issued. Before that, use no badge and no claim.

## M. Evidence folder recommended
Developer/project owner should retain:
- architecture diagram;
- domain/DNS screenshots;
- Firebase region screenshots/config;
- privacy notice version;
- security rules snapshot;
- App Check configuration evidence;
- deployment release tag;
- contact form data inventory;
- incident/security contact list.
