# 18 — Firebase Rules Blueprint

> Ini blueprint, bukan rules final. Developer harus menyesuaikan collection schema dan test dengan Firebase Emulator Suite sebelum production.

## 1. Principles
- deny by default;
- public read only published content;
- no public read of admin/leads/audit;
- role check from trusted admin profile;
- immutable system fields where necessary;
- validate keys/types.

## 2. Firestore rules skeleton
```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function signedIn() {
      return request.auth != null;
    }

    function adminDoc() {
      return get(/databases/$(database)/documents/adminUsers/$(request.auth.uid));
    }

    function activeAdmin() {
      return signedIn() && adminDoc().data.active == true;
    }

    function hasRole(role) {
      return activeAdmin() && adminDoc().data.role == role;
    }

    function canEditContent() {
      return activeAdmin() &&
        adminDoc().data.role in ['superadmin', 'editor'];
    }

    function canHandleLeads() {
      return activeAdmin() &&
        adminDoc().data.role in ['superadmin', 'sales'];
    }

    match /projects/{id} {
      allow read: if resource.data.isPublished == true || canEditContent();
      allow create, update: if canEditContent();
      allow delete: if hasRole('superadmin');
    }

    match /services/{id} {
      allow read: if resource.data.isPublished == true || canEditContent();
      allow write: if canEditContent();
    }

    match /insights/{id} {
      allow read: if resource.data.status == 'published' || canEditContent();
      allow write: if canEditContent();
    }

    match /leads/{id} {
      allow read, update: if canHandleLeads();
      allow delete: if hasRole('superadmin');
      allow create: if false; // Recommended: create through Cloud Function
    }

    match /adminUsers/{uid} {
      allow read: if signedIn() && request.auth.uid == uid || hasRole('superadmin');
      allow write: if hasRole('superadmin');
    }

    match /auditLogs/{id} {
      allow read: if hasRole('superadmin');
      allow write: if false; // server only
    }

    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## 3. Public direct lead fallback
Jika Spark-only dan tidak menggunakan Function, `leads.create` dapat dibuka dengan strict schema, tetapi ini second-best.

Rules harus memeriksa:
- exact allowed keys;
- string max lengths;
- service allowlist;
- consent true;
- createdAt server timestamp pattern bila dapat diverifikasi;
- no status/assignedTo supplied by client.

Tetap tidak bisa menggantikan server rate limiting yang kuat.

## 4. Storage rules blueprint [Blaze]
```text
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /portfolio/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
        && request.resource.size < 10 * 1024 * 1024
        && request.resource.contentType.matches('image/(jpeg|png|webp|avif)');
    }

    match /private/{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

Role enforcement sebaiknya ditambahkan, jangan cukup `auth != null` untuk final production.

## 5. Rules tests
Minimum tests:
- anonymous can read published project;
- anonymous cannot read draft;
- anonymous cannot read leads;
- editor can update project;
- editor cannot edit adminUsers;
- sales can read/update leads;
- sales cannot edit projects;
- viewer cannot write;
- disabled admin cannot access protected data;
- oversized/invalid Storage upload rejected.
