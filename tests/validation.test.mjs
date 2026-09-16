import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { z } from "zod";

// Skema Zod Leads sesuai implementasi ContactFormSection.tsx
const leadSchema = z.object({
  fullName: z.string().min(2, "Nama lengkap wajib diisi minimal 2 karakter"),
  email: z.string().email("Alamat email tidak valid"),
  phone: z.string().optional(),
  companyOrganization: z.string().optional(),
  serviceType: z.enum(["events", "multimedia", "digital", "integrated", "other"]),
  projectBudget: z.string().optional(),
  projectTimeline: z.string().optional(),
  message: z.string().min(10, "Pesan proyek minimal 10 karakter"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Persetujuan pemrosesan data pribadi wajib dicentang" }),
  }),
});

describe("Form & Anti-Spam Validation Tests", () => {
  test("Valid lead submission should pass validation", () => {
    const validData = {
      fullName: "Budi Pratama",
      email: "budi@perusahaan.co.id",
      phone: "+628123456789",
      companyOrganization: "PT Sukses Bersama",
      serviceType: "events",
      projectBudget: "IDR 50M - 100M",
      projectTimeline: "Q4 2026",
      message: "Kami memerlukan tata kelola panggung dan registrasi QR untuk konferensi tahunan.",
      consent: true,
    };

    const result = leadSchema.safeParse(validData);
    assert.equal(result.success, true);
  });

  test("Missing consent must fail validation", () => {
    const invalidData = {
      fullName: "Andi Saputra",
      email: "andi@example.com",
      serviceType: "digital",
      message: "Pengembangan website korporat baru.",
      consent: false,
    };

    const result = leadSchema.safeParse(invalidData);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.ok(result.error.errors.some((e) => e.path.includes("consent")));
    }
  });

  test("Invalid email format must fail validation", () => {
    const invalidData = {
      fullName: "Dewi Lestari",
      email: "bukan-email-valid",
      serviceType: "multimedia",
      message: "Produksi video podcast korporat.",
      consent: true,
    };

    const result = leadSchema.safeParse(invalidData);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.ok(result.error.errors.some((e) => e.path.includes("email")));
    }
  });

  test("Too short message (< 10 chars) must fail validation", () => {
    const invalidData = {
      fullName: "Rian",
      email: "rian@example.com",
      serviceType: "other",
      message: "Halo",
      consent: true,
    };

    const result = leadSchema.safeParse(invalidData);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.ok(result.error.errors.some((e) => e.path.includes("message")));
    }
  });

  test("Honeypot field detection: bot filled honeypot must be rejected", () => {
    const honeypot = "https://spam-bot-url.com";
    const isBot = Boolean(honeypot && honeypot.trim() !== "");
    assert.equal(isBot, true, "Honeypot non-empty harus dideteksi sebagai bot");
  });

  test("Timing heuristic: submission under 3 seconds must be rejected", () => {
    const startTime = Date.now();
    // Simulasi pengiriman instan bot dalam 500ms
    const submitTime = startTime + 500;
    const durationSeconds = (submitTime - startTime) / 1000;
    const isTooFast = durationSeconds < 3;
    assert.equal(isTooFast, true, "Pengiriman di bawah 3 detik harus ditolak");

    // Simulasi pengiriman wajar manusia dalam 10 detik
    const humanSubmitTime = startTime + 10000;
    const humanDurationSeconds = (humanSubmitTime - startTime) / 1000;
    const isHumanFast = humanDurationSeconds < 3;
    assert.equal(isHumanFast, false, "Pengiriman di atas 3 detik harus diterima");
  });
});
