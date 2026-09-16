import React from "react";
import Link from "next/link";
import { initialSiteSettings } from "@/data/initialData";
import { FileText, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Syarat & Ketentuan Penggunaan (Terms of Use) — PT MAROA MEDIA MABBARAKKA",
  description:
    "Ketentuan hukum dan syarat penggunaan situs web resmi PT MAROA MEDIA MABBARAKKA.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-maroa-white py-16 lg:py-20">
      <div className="container-maroa max-w-4xl">
        {/* Header */}
        <div className="pb-8 border-b border-maroa-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroa-gray-100 text-maroa-charcoal text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="h-3.5 w-3.5 text-maroa-red" />
            <span>Ketentuan Hukum Situs Web</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-maroa-black">
            Syarat & Ketentuan Penggunaan (Terms of Use)
          </h1>
          <p className="text-xs text-maroa-gray-500 mt-2">
            Terakhir Diperbarui: 15 September 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-10 space-y-8 text-sm sm:text-base text-maroa-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">1. Penerimaan Ketentuan</h2>
            <p>
              Dengan mengakses dan menggunakan situs web <strong>PT MAROA MEDIA MABBARAKKA</strong> (&ldquo;MAROA&rdquo;), Anda menyatakan telah membaca, memahami, dan menyetujui untuk terikat secara hukum oleh Syarat dan Ketentuan Penggunaan ini beserta{" "}
              <Link href="/privacy" className="text-maroa-red hover:underline font-semibold">
                Kebijakan Privasi
              </Link>{" "}
              kami. Apabila Anda tidak menyetujui ketentuan ini, Anda dipersilakan untuk tidak melanjutkan penggunaan situs ini.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">2. Hak Kekayaan Intelektual</h2>
            <p>
              Seluruh materi visual, logo resmi MAROA (termasuk mark Signal, Monogram, App Icon, Dialog, Play, Shutter), tipografi, teks, tata letak, kode sumber, grafik, dan ilustrasi portofolio yang ditampilkan dalam situs ini adalah milik sah dari PT MAROA MEDIA MABBARAKKA atau digunakan berdasarkan izin yang sah dari klien dan mitra terkait.
            </p>
            <p className="text-sm">
              Dilarang keras menyalin, mereproduksi, mendistribusikan ulang, memodifikasi, atau mengeksploitasi materi apa pun dari situs ini untuk tujuan komersial pihak ketiga tanpa persetujuan tertulis resmi dari direksi PT MAROA MEDIA MABBARAKKA.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">3. Penggunaan Formulir & Pengajuan Proyek</h2>
            <p>
              Pengunjung diperkenankan menggunakan formulir &ldquo;Start a Project&rdquo; atau formulir kontak untuk tujuan yang sah, yakni mengajukan pertanyaan, permintaan penawaran harga (RFP/quotation), atau inisiasi kerja sama proyek resmi. Pengguna dilarang keras:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Mengirimkan informasi palsu, menyesatkan, atau identitas fiktif.</li>
              <li>Menyusupkan kode berbahaya, skrip injeksi, eksploitasi celah keamanan, atau serangan penolakan layanan (DoS/DDoS).</li>
              <li>Menggunakan alat otomatis (bot/scraper) tanpa izin untuk menyedot konten atau membanjiri sistem dengan pesan sampah (spam).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">4. Penawaran & Hubungan Kontraktual</h2>
            <p>
              Informasi yang ditampilkan di situs web ini bersifat representatif mengenai kapabilitas kami dan tidak dapat dianggap sebagai penawaran kontrak yang mengikat secara otomatis. Perikatan hukum atas suatu proyek event, produksi multimedia, atau pengembangan sistem web hanya berlaku sah setelah ditandatanganinya Surat Perjanjian Kerja Sama (PKS), Kontrak, atau Purchase Order (PO) resmi antara pihak klien dan PT MAROA MEDIA MABBARAKKA.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">5. Batasan Tanggung Jawab</h2>
            <p>
              Meskipun kami berupaya semaksimal mungkin memastikan ketepatan dan ketersediaan sistem tanpa henti, PT MAROA MEDIA MABBARAKKA tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari ketidaktersediaan sementara situs web akibat pemeliharaan rutin, gangguan konektivitas jaringan global, atau keadaan kahar (force majeure).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-maroa-black">6. Hukum yang Mengatur & Yurisdiksi</h2>
            <p>
              Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Negara Kesatuan Republik Indonesia. Setiap sengketa yang timbul sehubungan dengan penafsiran atau pelaksanaan ketentuan ini akan diselesaikan secara musyawarah untuk mufakat, dan bila tidak tercapai kata sepakat, akan diajukan ke domisili hukum Pengadilan Negeri yang berwenang di wilayah entitas perusahaan.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
