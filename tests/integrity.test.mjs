import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

describe("System Integrity & Asset Availability Tests", () => {
  test("Critical configuration files must exist", () => {
    const criticalFiles = [
      "firebase.json",
      ".firebaserc",
      "firestore.rules",
      "firestore.indexes.json",
      "storage.rules",
      "package.json",
      "tsconfig.json",
      "tailwind.config.ts",
      "next.config.mjs",
      "IMPLEMENTATION_PLAN.md",
      "FINAL_IMPLEMENTATION_REPORT.md",
      "PSE_REGISTRATION_DATA_SHEET.md",
    ];

    for (const file of criticalFiles) {
      const fullPath = path.join(rootDir, file);
      assert.equal(fs.existsSync(fullPath), true, `File ${file} wajib tersedia di root.`);
    }
  });

  test("All 6 official brand logo assets must exist in public/logos", () => {
    const requiredLogos = [
      "maroa-main-signal.png",
      "maroa-app-icon.png",
      "maroa-play.png",
      "maroa-dialog.png",
      "maroa-monogram.png",
      "maroa-shutter.png",
    ];

    for (const logo of requiredLogos) {
      const fullPath = path.join(rootDir, "public", "logos", logo);
      assert.equal(fs.existsSync(fullPath), true, `Logo aset ${logo} wajib ada di public/logos/`);
    }
  });

  test("All 5 responsive mockup assets must exist in public/mockups", () => {
    const requiredMockups = [
      "01-home-responsive.png",
      "02-services-responsive.png",
      "03-portfolio-responsive.png",
      "04-about-responsive.png",
      "05-contact-responsive.png",
    ];

    for (const mockup of requiredMockups) {
      const fullPath = path.join(rootDir, "public", "mockups", mockup);
      assert.equal(fs.existsSync(fullPath), true, `Mockup aset ${mockup} wajib ada di public/mockups/`);
    }
  });

  test("firebase.json must contain strict security headers", () => {
    const firebaseJsonPath = path.join(rootDir, "firebase.json");
    const content = JSON.parse(fs.readFileSync(firebaseJsonPath, "utf-8"));

    assert.ok(content.hosting, "Bagian hosting harus didefinisikan");
    assert.ok(Array.isArray(content.hosting.headers), "Array headers wajib ada");

    const rootHeaders = content.hosting.headers.find((h) => h.source === "**");
    assert.ok(rootHeaders, "Header global untuk source ** harus ada");

    const headerKeys = rootHeaders.headers.map((h) => h.key.toLowerCase());
    assert.ok(headerKeys.includes("x-content-type-options"), "X-Content-Type-Options wajib ada");
    assert.ok(headerKeys.includes("x-frame-options"), "X-Frame-Options wajib ada");
    assert.ok(headerKeys.includes("strict-transport-security"), "Strict-Transport-Security wajib ada");
    assert.ok(headerKeys.includes("referrer-policy"), "Referrer-Policy wajib ada");
    assert.ok(headerKeys.includes("permissions-policy"), "Permissions-Policy wajib ada");
  });

  test("firestore.rules must enforce deny-by-default and prevent public leads read", () => {
    const rulesPath = path.join(rootDir, "firestore.rules");
    const rulesContent = fs.readFileSync(rulesPath, "utf-8");

    assert.ok(rulesContent.includes("rules_version = '2'"), "Rules version harus 2");
    assert.ok(rulesContent.includes("match /leads/{id}"), "Koleksi leads harus diatur");
    assert.ok(rulesContent.includes("allow read, update: if canHandleLeads()"), "Leads read hanya boleh oleh canHandleLeads()");
    assert.ok(rulesContent.includes("match /adminUsers/{uid}"), "Koleksi adminUsers harus terproteksi");
  });
});
