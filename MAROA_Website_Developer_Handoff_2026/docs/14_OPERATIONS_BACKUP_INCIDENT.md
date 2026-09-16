# 14 — Operations, Backup, Monitoring & Incident Runbook

## 1. Ownership
Tetapkan nama/role internal untuk:
- product owner;
- technical owner;
- Firebase billing owner;
- domain/DNS owner;
- privacy contact;
- incident lead.

## 2. Monitoring
Pantau:
- Firebase usage;
- Hosting errors;
- Firestore usage;
- Auth failures;
- App Check metrics;
- Functions errors jika dipakai;
- Search Console;
- uptime external monitor optional.

## 3. Backup strategy
### Repository
- Git remote with protected main branch.
- release tags.

### Firestore
Jika fitur managed backup/PITR membutuhkan billing, pilih sesuai cost profile. Jika tidak digunakan:
- scheduled/manual export strategy dengan mekanisme resmi yang tersedia pada plan;
- atau admin JSON/CSV export untuk content non-sensitive sebagai secondary copy.

Jangan menyebut export manual sebagai full disaster recovery bila tidak lengkap.

### Media
- source/master media disimpan juga di repository asset library/controlled archive, bukan hanya satu bucket.

## 4. Recovery targets
Tentukan internal:
- RPO desired;
- RTO desired.

Untuk website corporate, target praktis dapat lebih sederhana daripada aplikasi transaksional, tetapi tetap harus terdokumentasi.

## 5. Incident levels
- P1: site unavailable / confirmed unauthorized data access
- P2: admin unavailable / lead form broken / major content issue
- P3: minor UI/SEO/content issue

## 6. P1 playbook
1. verify incident;
2. freeze deploy;
3. disable compromised credentials;
4. contain service/rule;
5. preserve logs;
6. assess affected users/data;
7. restore safe version;
8. communicate internally;
9. evaluate required external notification;
10. post-incident review.

## 7. Credential lifecycle
- quarterly review admin accounts;
- remove unused accounts immediately;
- rotate secrets after staff/vendor change;
- no shared password spreadsheet.

## 8. Domain renewal
Enable auto-renew where appropriate and maintain recovery email not tied to one individual if possible.
