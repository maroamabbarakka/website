# 20 — Firebase Cost Profile: Spark vs Blaze

## Executive recommendation
Untuk **production yang benar-benar profesional**, terutama bila membutuhkan:
- media upload dari CMS;
- Cloud Storage;
- secure server-side contact form;
- Cloud Functions;
- automated email/webhook;

maka gunakan **Blaze (pay-as-you-go)** dengan budget guardrails.

Untuk prototype/static corporate site tanpa media upload dan tanpa server functions, Spark masih bisa dipakai untuk Hosting/Firestore/Auth sesuai layanan dan quota yang tersedia.

## Important 2026 Firebase fact
Cloud Storage for Firebase sekarang mensyaratkan project berada di Blaze untuk dapat digunakan/diakses. Cloud Functions juga membutuhkan Blaze untuk deploy.

Karena itu jangan mendesain CMS upload lalu berharap berjalan penuh di Spark.

## Spark-compatible architecture
- Firebase Hosting;
- static assets committed with repo/build;
- Firestore free quota;
- Firebase Auth admin;
- App Check;
- no Cloud Storage;
- no deployed Cloud Functions;
- contact form direct-to-Firestore only if strict rules accepted as risk tradeoff.

Cocok untuk:
- tahap awal;
- static portfolio;
- low traffic;
- developer-managed content deploy.

## Blaze production architecture
- semua baseline;
- Cloud Storage;
- Cloud Functions;
- better lead endpoint;
- server notification;
- media CMS;
- optional advanced features.

## Guardrails
1. Set budget alert low/medium/high.
2. Enable spend caps where supported.
3. Limit Function instances where appropriate.
4. Bound Firestore reads.
5. Avoid realtime listeners for public catalog.
6. Optimize media.
7. Monitor first 30 days daily/weekly.

## Free Firestore quota reference
Firebase documents free Firestore quota including 1 GiB stored data, 50,000 reads/day, 20,000 writes/day, 20,000 deletes/day, and outbound quota as documented at time of implementation. Developer must re-check current docs before relying on numeric limits.

## Official references
- Pricing plans: https://firebase.google.com/docs/projects/billing/firebase-pricing-plans
- Firestore quotas: https://firebase.google.com/docs/firestore/quotas
- Storage billing requirements: https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024
- Cloud Functions: https://firebase.google.com/docs/functions/get-started
