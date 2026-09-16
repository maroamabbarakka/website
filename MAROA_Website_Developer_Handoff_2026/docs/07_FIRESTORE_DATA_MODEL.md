# 07 — Firestore Data Model

## 1. Naming convention
- collection: camelCase plural (`siteSettings`, `projects`, `leads`)
- document id: UUID atau stable slug bila aman
- timestamp: Firestore server timestamp
- store normalized lowercase field untuk search ringan bila perlu

## 2. Collections

### `siteSettings/global`
```ts
{
  companyName: "PT MAROA MEDIA MABBARAKKA",
  brandName: "MAROA",
  tagline: "Creative Technology & Experience Company",
  primaryEmail: "...",
  phonePublic: "...",
  addressPublic: "...",
  socialLinks: {...},
  pseRegistrationNumber: null | string,
  pseRegistered: boolean,
  updatedAt,
  updatedBy
}
```

### `services/{id}`
```ts
{
  slug,
  title,
  shortTitle,
  category: "events" | "multimedia" | "digital" | "venture",
  summary,
  description,
  icon,
  order,
  isFeatured,
  isPublished,
  seoTitle,
  seoDescription,
  updatedAt,
  updatedBy
}
```

### `projects/{id}`
```ts
{
  slug,
  title,
  category,
  summary,
  clientDisplayName,
  year,
  heroImage,
  thumbnail,
  services: [],
  challenge,
  approach,
  execution,
  outcome,
  gallery: [],
  metrics: [],
  isFeatured,
  isPublished,
  publishedAt,
  seoTitle,
  seoDescription,
  ogImage,
  createdAt,
  createdBy,
  updatedAt,
  updatedBy
}
```

### `insights/{id}`
```ts
{
  slug,
  title,
  excerpt,
  body,
  coverImage,
  tags: [],
  authorDisplayName,
  status: "draft" | "review" | "published" | "archived",
  publishedAt,
  seoTitle,
  seoDescription,
  updatedAt,
  updatedBy
}
```

### `leads/{id}`
```ts
{
  fullName,
  email,
  phone,
  companyOrganization,
  serviceType,
  projectBudget,
  projectTimeline,
  message,
  consent: true,
  consentTextVersion: "2026-09-v1",
  sourcePath,
  utm: {source, medium, campaign},
  status: "new" | "contacted" | "qualified" | "won" | "lost" | "spam",
  assignedTo: null | string,
  createdAt,
  updatedAt
}
```

Jangan menyimpan full IP address kecuali ada alasan keamanan/legal yang terdokumentasi. Jika rate limiting membutuhkan IP, lakukan di server dan minimalkan retention.

### `adminUsers/{uid}`
```ts
{
  email,
  displayName,
  role: "superadmin" | "editor" | "sales" | "viewer",
  active: true,
  createdAt,
  updatedAt
}
```

### `auditLogs/{id}`
```ts
{
  actorUid,
  actorEmail,
  action,
  targetType,
  targetId,
  metadata,
  createdAt
}
```

Audit log jangan menyimpan seluruh body lead atau data sensitif tanpa kebutuhan.

## 3. Publication pattern
Public reads hanya untuk dokumen `isPublished == true`.
Draft hanya admin.

## 4. Avoid giant documents
- gallery list yang sangat panjang dapat dipisah menjadi subcollection;
- article content bisa menggunakan structured blocks;
- hindari base64 image di Firestore.

## 5. Query patterns
Projects:
- `where isPublished == true orderBy publishedAt desc limit 12`
- category filter + publishedAt composite index.

Leads:
- orderBy createdAt desc;
- filter status;
- pagination cursor;
- admin only.

## 6. Data deletion
Setiap collection harus punya owner dan retention policy internal. Jangan membuat TTL otomatis sebelum memastikan implikasi legal dan billing.
