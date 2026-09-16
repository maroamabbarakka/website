import React from "react";
import Link from "next/link";
import { initialSiteSettings } from "@/data/initialData";
import { ShieldCheck, Lock, Eye, FileText, Mail } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi (Privacy Notice) — PT MAROA MEDIA MABBARAKKA",
  description:
    "Pemberitahuan privasi dan pelindungan data pribadi PT MAROA MEDIA MABBARAKKA sesuai Undang-Undang No. 27 Tahun 2022 (UU PDP) dan regulasi PSE.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-maroa-white py-16 lg:py-20">
      <div className="container-maroa max-w-4xl">
        {/* Header */}
        <div className="pb-8 border-b border-maroa-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroa-red/10 text-maroa-red text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Kepatuhan UU PDP No. 27/2022 & PSE Komdigi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-maroa-black">
            Kebijakan Privasi (Privacy Notice)
          </h1>
          <p className="text-xs text-maroa-gray-500 mt-2">
            Versi Dokumen: 2026-09-v1 · Berlaku Efektif: 15 September 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-10 space-y-10 text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
          {/* Bagian 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black flex items-center gap-2">
              <span className="text-maroa-red">1.</span> Pengendali Data Pribadi
            </h2>
            <p>
              Situs web ini dioperasikan oleh <strong>{initialSiteSettings.companyName}</strong> (&ldquo;MAROA&rdquo;, &ldquo;kami&rdquo;), sebuah perseroan terbatas yang didirikan secara sah berdasarkan hukum Republik Indonesia. Dalam kaitannya dengan data pribadi yang Anda serahkan melalui formulir di situs ini, MAROA bertindak sebagai Pengendali Data Pribadi sebagaimana diatur dalam Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).
            </p>
          </section>

          {/* Bagian 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black flex items-center gap-2">
              <span className="text-maroa-red">2.</span> Data Pribadi yang Kami Kumpulkan
            </h2>
            <p>
              Kami menerapkan prinsip minimisasi data. Kami hanya mengumpulkan informasi yang relevan dan diperlukan secara langsung untuk merespons pengajuan proyek atau pertanyaan Anda:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Data Identitas & Kontak:</strong> Nama lengkap, alamat surat elektronik (email), dan nomor telepon/WhatsApp (bila Anda cantumkan secara sukarela).</li>
              <li><strong>Data Organisasi:</strong> Nama perusahaan atau instansi yang Anda wakili.</li>
              <li><strong>Informasi Proyek:</strong> Pilihan pilar layanan (Events, Multimedia, Digital), estimasi anggaran, jadwal waktu pelaksanaan, dan pesan/deskripsi kebutuhan kerja sama.</li>
              <li><strong>Data Teknis Esensial:</strong> Alamat protokol internet (IP) terpotong/tersamar untuk proteksi anti-spam dan log keamanan server, serta metadata persetujuan (waktu dan versi formulir).</li>
            </ul>
            <div className="p-3.5 rounded-maroa-sm bg-maroa-gray-100 border border-maroa-gray-300 text-xs text-maroa-charcoal">
              <strong>Penting:</strong> Kami tidak pernah meminta data pribadi sensitif seperti Nomor Induk Kependudukan (NIK), foto identitas/KTP, data biometrik, orientasi politik, agama, atau informasi keuangan pribadi pada formulir publik ini.
            </div>
          </section>

          {/* Bagian 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black flex items-center gap-2">
              <span className="text-maroa-red">3.</span> Tujuan Pemrosesan & Dasar Hukum
            </h2>
            <p>
              Kami memproses data pribadi Anda semata-mata untuk tujuan berikut:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Merespons, memvalidasi, dan menindaklanjuti pengajuan proyek atau pertanyaan resmi yang Anda kirimkan.</li>
              <li>Menyusun penawaran proposal kerja sama, jadwal operasional, dan perkiraan biaya layanan.</li>
              <li>Memelihara keandalan, integritas, dan keamanan operasional situs web dari aktivitas bot jahat (spam/abuse).</li>
            </ul>
            <p className="text-sm">
              Dasar pemrosesan data ini adalah persetujuan eksplisit Anda saat mencentang kotak persetujuan pada formulir kontak (Pasal 20 UU PDP) serta kepentingan yang sah dalam rangka pra-kontraktual kerja sama profesional.
            </p>
          </section>

          {/* Bagian 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black flex items-center gap-2">
              <span className="text-maroa-red">4.</span> Lokasi Penyimpanan & Sub-prosesor
            </h2>
            <p>
              Infrastruktur situs web dan penyimpanan basis data dikelola menggunakan layanan komputasi awan Google Cloud / Firebase dengan standar sertifikasi keamanan internasional (ISO 27001, SOC 2). Wilayah penyimpanan basis data diprioritaskan pada zona <code>asia-southeast2</code> (Jakarta, Indonesia) guna mendukung kedaulatan data nasional. Kami tidak memperjualbelikan atau mendistribusikan data Anda kepada broker data komersial pihak ketiga.
            </p>
          </section>

          {/* Bagian 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black flex items-center gap-2">
              <span className="text-maroa-red">5.</span> Hak Subjek Data Pribadi
            </h2>
            <p>
              Berdasarkan UU PDP, Anda memiliki hak-hak berikut terkait data pribadi Anda:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Hak Akses:</strong> Meminta konfirmasi dan salinan data pribadi yang kami simpan tentang Anda.</li>
              <li><strong>Hak Koreksi:</strong> Memperbaiki data pribadi yang tidak akurat, tidak lengkap, atau sudah kadaluwarsa.</li>
              <li><strong>Hak Penghapusan:</strong> Meminta pemusnahan data pribadi Anda dari sistem kami bilamana tujuan pemrosesan telah selesai.</li>
              <li><strong>Hak Penarikan Persetujuan:</strong> Menarik kembali persetujuan pemrosesan yang telah diberikan sebelumnya.</li>
            </ul>
            <p className="text-sm">
              Untuk menggunakan hak-hak di atas, Anda dapat mengirimkan surat permohonan melalui email resmi kami di: <a href={`mailto:${initialSiteSettings.primaryEmail}`} className="text-maroa-red font-semibold hover:underline">{initialSiteSettings.primaryEmail}</a>. Kami akan menanggapi permohonan Anda dalam kurun waktu maksimal 3×24 jam kerja.
            </p>
          </section>

          {/* Bagian 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black flex items-center gap-2">
              <span className="text-maroa-red">6.</span> Keamanan Informasi
            </h2>
            <p>
              Kami mengimplementasikan langkah-langkah keamanan teknis dan organisasional mencakup enkripsi dalam transit (HTTPS/TLS), kontrol akses berbasis peran (RBAC) pada panel internal, verifikasi anti-bot (App Check & Honeypot), serta evaluasi sistem berkala guna mencegah akses tanpa hak, pengungkapan, atau perubahan data tidak sah.
            </p>
          </section>

          {/* Bagian 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black flex items-center gap-2">
              <span className="text-maroa-red">7.</span> Pembaruan Kebijakan
            </h2>
            <p>
              Kebijakan Privasi ini dapat kami perbarui sewaktu-waktu guna menyesuaikan dengan perkembangan teknologi, regulasi Kementerian Komunikasi dan Digital (Komdigi), maupun operasional perusahaan. Setiap perubahan substansial akan diumumkan pada halaman ini dengan pembaruan tanggal efektif.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
