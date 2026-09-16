# 08 — Admin CMS, Authentication & Roles

## 1. Tujuan admin
Admin bukan public SaaS. Pengguna sedikit, internal, dan privileged.

## 2. Authentication
- Firebase Authentication email/password atau Google account perusahaan.
- Email verification wajib.
- Strong password policy.
- MFA bila Identity Platform diaktifkan dan cost/operasional disetujui.
- Tidak ada self-signup publik.

## 3. Onboarding admin
Admin dibuat oleh superadmin melalui:
- Firebase Console; atau
- trusted local/admin script; atau
- server-side function khusus.

Jangan membuat endpoint `create-admin` publik tanpa proteksi sangat kuat.

## 4. Role matrix
| Action | superadmin | editor | sales | viewer |
|---|---:|---:|---:|---:|
| Edit site settings | ✓ | limited | - | - |
| Manage services | ✓ | ✓ | - | view |
| Manage projects | ✓ | ✓ | - | view |
| Manage insights | ✓ | ✓ | - | view |
| View leads | ✓ | - | ✓ | limited |
| Update lead status | ✓ | - | ✓ | - |
| Manage admins | ✓ | - | - | - |
| View audit | ✓ | - | - | - |
| Edit legal/privacy | ✓ | limited | - | - |

## 5. Admin UX
- left sidebar desktop;
- bottom/compact nav mobile;
- tables responsive;
- pagination;
- filter;
- search;
- confirmation modal untuk delete;
- autosave draft optional;
- dirty-form warning;
- publish/unpublish clearly separated.

## 6. Lead handling
Lead view harus:
- menampilkan field yang diperlukan;
- tidak menampilkan data lebih banyak dari yang dikumpulkan;
- punya status workflow;
- punya timestamp;
- punya assignment optional;
- tidak ada export massal tanpa role dan konfirmasi.

## 7. Session behavior
- logout button jelas;
- re-authentication untuk action sangat sensitif bila memungkinkan;
- idle timeout di UI opsional;
- server rules tetap menjadi enforcement utama.

## 8. Audit
Catat minimal:
- publish/unpublish;
- delete;
- edit settings;
- admin role changes;
- legal page updates.

Tidak perlu mencatat setiap keystroke.
