# 13 — Testing, QA & Acceptance Criteria

## 1. Functional
- all navigation routes valid;
- active nav correct;
- all CTAs work;
- portfolio filters work;
- case study links work;
- contact validation works;
- submit duplicate prevented;
- success/error states clear;
- 404 works;
- admin auth works;
- permissions matrix enforced.

## 2. Responsive
Test all target viewports in `05_RESPONSIVE_ACCESSIBILITY.md`.
Acceptance:
- no unintended horizontal scroll;
- no clipped logo;
- nav usable;
- hero readable;
- cards not overlapping;
- form labels visible;
- footer not broken.

## 3. Browser matrix
Latest stable:
- Chrome;
- Edge;
- Firefox;
- Safari desktop;
- Safari iOS;
- Chrome Android.

## 4. Security
- unauthenticated cannot read leads;
- unauthenticated cannot edit content;
- editor cannot manage admins;
- sales cannot edit site content;
- invalid form payload rejected;
- App Check observed/enforced;
- Storage rules reject executable/oversized files;
- no secrets in bundle.

## 5. Accessibility
- keyboard all interactive elements;
- visible focus;
- modal traps focus;
- menu Esc close;
- labels associated;
- contrast pass;
- headings logical;
- reduced motion respected.

## 6. SEO
- title/description present;
- canonical correct;
- OG image works;
- sitemap valid;
- robots correct;
- no staging URLs in production;
- no admin pages indexed.

## 7. Performance
- inspect LCP image;
- no massive JS bundles;
- no autoplay huge video;
- image dimensions specified;
- no obvious CLS.

## 8. Content QA
- spelling and capitalization consistent;
- no placeholder Lorem Ipsum;
- no fake metrics;
- no fake client logos;
- no dummy phone/email on production;
- no developer test data visible.

## 9. PSE readiness QA
Before registration/final launch:
- system name final;
- domain final;
- DNS/IP documented;
- model business description final;
- system function/process description final;
- personal data inventory final;
- data location inventory final;
- privacy notice deployed;
- security owner named;
- incident contact named;
- PSE status footer remains hidden until registration issued.
