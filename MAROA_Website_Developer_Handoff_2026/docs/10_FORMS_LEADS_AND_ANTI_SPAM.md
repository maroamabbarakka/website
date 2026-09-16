# 10 — Forms, Lead Pipeline & Anti-Spam

## 1. Production recommendation
Untuk production-grade inquiry, gunakan server-side endpoint (Cloud Function / trusted backend) bila Blaze tersedia.

Flow:
```text
Form -> App Check token -> Cloud Function -> validate -> sanitize -> rate limit -> Firestore -> notification
```

## 2. Why not direct unvalidated writes
Direct browser write ke Firestore dapat dibuat cukup aman dengan rules, tetapi:
- rate limiting terbatas;
- anti-spam lebih lemah;
- server-side normalization lebih sulit;
- email notification tidak ideal.

Untuk corporate website profesional, Function lebih baik.

## 3. Schema validation
Gunakan Zod/Valibot/Yup di client dan server. Server adalah source of truth.

Contoh constraints:
- fullName: 2–100 chars;
- email: valid, max 254;
- phone: optional, max 30;
- companyOrganization: optional, max 150;
- serviceType: allowlist;
- projectBudget: allowlist;
- projectTimeline: allowlist;
- message: 20–3000 chars;
- consent: exactly true.

## 4. Anti-spam layers
- App Check;
- invisible honeypot;
- minimum time-to-submit heuristic;
- server rate limit;
- content size limits;
- block repeated identical payload hashes temporarily;
- optional reCAPTCHA risk signal via App Check provider.

## 5. UX
States:
- idle;
- validating;
- submitting;
- success;
- recoverable error;
- blocked/rate-limited.

Button harus disabled selama submit untuk mencegah duplicate.

## 6. Notifications
Preferred:
- dashboard lead inbox;
- email notification via approved provider/function;
- avoid embedding SMTP password in frontend.

Jika no email integration, admin harus punya dashboard + unread count.

## 7. Lead status
- new
- contacted
- qualified
- won
- lost
- spam

## 8. Export
CSV export opsional:
- superadmin/sales only;
- audit event;
- warning bahwa data pribadi akan diunduh;
- no public URL.

## 9. Privacy
Form harus link ke `/privacy` dan menyimpan `consentTextVersion` agar versi notice dapat ditelusuri.
