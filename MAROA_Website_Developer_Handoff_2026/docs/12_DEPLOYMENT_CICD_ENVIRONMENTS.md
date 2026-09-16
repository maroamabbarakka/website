# 12 — Deployment, CI/CD & Environments

## 1. Branch strategy
Simple recommended:
- `main` = production
- `develop` = staging/dev integration
- feature branches = PR

## 2. Required checks before merge
- TypeScript typecheck;
- lint;
- unit tests;
- build;
- security rules tests;
- accessibility smoke test where automated;
- no secret scanning findings.

## 3. Firebase projects
Do not use same Firestore prod for staging.

Suggested aliases:
```json
{
  "projects": {
    "default": "maroa-web-dev",
    "staging": "maroa-web-staging",
    "production": "maroa-web-prod"
  }
}
```

## 4. Preview
Gunakan Firebase Hosting preview channels atau equivalent untuk review PR.

## 5. Deploy ownership
Production deploy hanya:
- CI service identity; atau
- authorized technical owner.

Jangan deploy production dari laptop acak tanpa change record.

## 6. Rollback
Dokumentasikan:
- previous Hosting release restore;
- rules rollback;
- Firestore data rollback limitation;
- emergency disable lead form.

## 7. Domain
Production wajib custom domain profesional.
Firebase Hosting menyediakan SSL otomatis pada custom domain.

Canonical harus mengarah hanya ke satu domain utama, misalnya:
- `https://maroa...`

www dapat redirect ke apex atau sebaliknya.

## 8. DNS documentation
Simpan internal:
- registrar;
- DNS provider;
- verification records;
- Firebase records;
- contact owner;
- renewal date.

Ini juga membantu pengisian PSE DNS/IP.

## 9. Staging
Staging:
- visually same as production;
- noindex;
- test data only;
- no real user sensitive data jika tidak perlu.
