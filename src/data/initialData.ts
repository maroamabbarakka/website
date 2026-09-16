import { Service, Project, SiteSettings } from "@/lib/types";

export const initialSiteSettings: SiteSettings = {
  companyName: "PT MAROA MEDIA MABBARAKKA",
  brandName: "MAROA",
  tagline: "Creative Technology & Experience Company",
  primaryEmail: "maroamabbarakka@gmail.com",
  phonePublic: "+62 813-4351-1099",
  addressPublic: "Pinrang, Sulawesi Selatan, Indonesia",
  nibNumber: "NIB terdaftar di OSS RBA", // Placeholder resmi
  socialLinks: {
    instagram: "https://www.instagram.com/maroaproject/",
    whatsapp: "https://wa.me/6281343511099",
    linkedin: "https://linkedin.com/company/maroa",
    youtube: "https://youtube.com/@maroa",
  },
  pseRegistrationNumber: null, // Sesuai aturan: null hingga tanda daftar resmi terbit
  pseRegistered: false,
};

export const initialServices: Service[] = [
  {
    id: "events-experiences",
    slug: "events",
    title: "Events & Experiences",
    shortTitle: "Events",
    category: "events",
    summary: "Perancangan dan manajemen penyelenggaraan event profesional, aktivasi brand, konferensi, hingga koordinasi panggung terintegrasi teknologi.",
    description: "MAROA menghadirkan eksekusi event dari konsepsi kreatif hingga operasional lapangan. Kami memadukan manajemen panggung, tata multimedia, alur registrasi digital berorientasi audiens, dan koordinasi terstandarisasi untuk korporasi, pemerintah, dan organisasi.",
    iconName: "CalendarDays",
    capabilities: [
      "Corporate & Government Events",
      "Conferences, Seminars & Workshops",
      "Brand Activation & Launching",
      "Exhibition & Community Events",
      "Stage & Multimedia Coordination",
      "Digital Registration & QR Check-in",
      "Live Production & Multi-Camera",
      "Post-Event Analytics & Reporting"
    ],
    order: 1,
    isFeatured: true,
    isPublished: true,
    seoTitle: "Events & Experiences — Layanan Manajemen Event Profesional | MAROA",
    seoDescription: "Penyelenggaraan event korporat, konferensi, dan aktivasi terpadu didukung teknologi digital dan produksi terstandarisasi.",
  },
  {
    id: "multimedia-studio",
    slug: "multimedia",
    title: "Multimedia & Studio",
    shortTitle: "Multimedia",
    category: "multimedia",
    summary: "Produksi konten visual berkualitas tinggi, studio podcast, live streaming berstandar siaran, serta desain komunikasi visual strategis.",
    description: "Divisi multimedia MAROA berfokus pada storytelling audio-visual yang menggerakkan audiens. Dari pembuatan video profil korporat, produksi podcast bersuara jernih, siaran langsung multicamera, hingga animasi gerak untuk kampanye digital.",
    iconName: "Camera",
    capabilities: [
      "Podcast Production & Studio Recording",
      "Corporate Video & Commercial Production",
      "Multi-Camera Live Streaming",
      "Graphic & Visual Communication Design",
      "Motion Graphics & 2D/3D Content",
      "Audio Engineering & Post-Production",
      "Event Documentation & Highlight Reels",
      "Creative Digital Campaign Assets"
    ],
    order: 2,
    isFeatured: true,
    isPublished: true,
    seoTitle: "Multimedia & Studio — Produksi Video, Podcast & Live Streaming | MAROA",
    seoDescription: "Layanan studio kreatif multimedia, produksi video korporat, studio podcast profesional, dan siaran langsung berkualitas tinggi.",
  },
  {
    id: "digital-web",
    slug: "digital",
    title: "Digital & Web Applications",
    shortTitle: "Digital",
    category: "digital",
    summary: "Pengembangan situs web korporat berkinerja tinggi, aplikasi web kustom, sistem registrasi digital, dan otomasi alur kerja modern.",
    description: "Kami tidak sekadar membangun halaman web biasa. MAROA merancang platform digital yang cepat, aman, responsif, dan mudah dikelola untuk memperkuat operasi bisnis serta memfasilitasi interaksi pengguna secara andal.",
    iconName: "Laptop",
    capabilities: [
      "Modern Corporate Websites",
      "Custom Web Applications & Portals",
      "Event Registration & QR Verification Systems",
      "Interactive Dashboards & Data Analytics",
      "Tailored Content Management Systems (CMS)",
      "Digital Forms & Secure Data Collection",
      "Workflow & Task Automation Systems",
      "API Integration & Cloud Infrastructure"
    ],
    order: 3,
    isFeatured: true,
    isPublished: true,
    seoTitle: "Digital & Web Applications — Solusi Web & Sistem Aplikasi | MAROA",
    seoDescription: "Pengembangan website korporat, sistem aplikasi berbasis web, registrasi QR event, dan platform digital terkustomisasi.",
  },
  {
    id: "exotico-cafe",
    slug: "cafe",
    title: "exótico Café & Spaces",
    shortTitle: "Ventures / exótico Café",
    category: "venture",
    summary: "Ruang temu kreatif dan hospitality pendukung kolaborasi komunitas dan pelaku industri.",
    description: "Sebagai unit usaha sekunder kami, exótico Café menyediakan suasana berkumpul yang hangat untuk diskusi proyek, sesi kerja mandiri, atau sekadar menikmati sajian kopi bermutu di sela-sela aktivitas kreatif.",
    iconName: "Coffee",
    capabilities: [
      "Creative Meeting & Co-working Space",
      "Artisan Coffee & Food Beverages",
      "Intimate Gathering & Community Meetups"
    ],
    order: 4,
    isFeatured: false,
    isPublished: true,
    seoTitle: "exótico Café — Creative Hospitality & Meeting Spaces",
    seoDescription: "Ruang kolaborasi dan kafe kreatif exótico Café untuk pertemuan profesional dan komunitas.",
  }
];

export const initialProjects: Project[] = [
  {
    id: "sbl-portal",
    slug: "portal-lppl-radio-suara-bumi-lasinrang",
    title: "Portal Resmi & Pusat Warta Publik LPPL Radio Suara Bumi Lasinrang 92,4 FM",
    category: "digital",
    summary: "Portal informasi publik dan penyiaran daerah terintegrasi yang menyajikan warta aktual, jadwal siaran radio live, chart musik, kepatuhan media siber, dan interaksi pendengar.",
    clientDisplayName: "LPPL Radio Suara Bumi Lasinrang",
    year: "2025 - 2026",
    heroImage: "/portfolio/sbl-portal-desktop.webp",
    thumbnail: "/portfolio/sbl-portal-desktop.webp",
    mobileImage: "/portfolio/sbl-portal-mobile.webp",
    services: ["Web Portal Architecture", "Radio Database Integration", "Siber Law Compliance", "Mobile-First News UI"],
    challenge: "Media penyiaran publik daerah membutuhkan kanal digital terpadu yang tidak hanya menyiarkan audio, melainkan menyajikan warta daerah terverifikasi, jadwal program harian yang akurat, transparansi PPID sesuai regulasi keterbukaan informasi publik, serta interaksi pendengar yang dinamis.",
    approach: "MAROA merancang arsitektur SBL Web 2.0 yang menggabungkan ticker warta kilat darurat, widget pemutar audio on-air yang tersinkronisasi dengan database siaran, ranking musik mingguan Spotify/YouTube, serta katalog podcast multimedia on-demand.",
    execution: "Membangun sistem penerbitan berita berbasis kategori pemerintahan, sosial budaya, dan kebencanaan; mengintegrasikan data siaran kru penyiar aktif; menyusun dokumen kepatuhan pedoman media siber; serta memfasilitasi formulir permohonan informasi KIP dan interaksi WhatsApp Studio terpadu.",
    outcome: "Portal beroperasi menjadi rujukan berita resmi masyarakat Bumi Lasinrang, memperluas akses informasi publik daerah, dan memperkuat posisi LPPL SBL sebagai radio publik modern yang adaptif di era digital.",
    gallery: [
      "/portfolio/sbl-portal-desktop.webp",
      "/portfolio/sbl-portal-mobile.webp",
      "/portfolio/radiosbl-desktop.webp"
    ],
    metrics: [
      { label: "Kanal Terintegrasi", value: "Warta + Audio + PPID" },
      { label: "Sinkronisasi Data", value: "Real-Time SBL DB" },
      { label: "Aksesibilitas", value: "100% Mobile Ready" }
    ],
    features: [
      {
        title: "Ticker Breaking News Real-Time",
        description: "Pembaruan otomatis warta kilat daerah terkait kebijakan penting, tanggap bencana, dan agenda pembangunan terkini.",
      },
      {
        title: "Widget Audio On-Air & Jadwal Sepekan",
        description: "Pemutar audio di beranda yang terhubung langsung ke RadioSBL Database menampilkan jam siar, judul program, dan nama penyiar.",
      },
      {
        title: "SBL Top Chart Indonesia (Spotify/YouTube)",
        description: "Integrasi tangga lagu mingguan terpopuler nasional berbasis agregasi data streaming resmi untuk referensi musik pendengar.",
      },
      {
        title: "Warta Daerah Multi-Kanal",
        description: "Liputan mendalam seputar dinamika pemerintahan, pemberdayaan UMKM lokal, agenda seni budaya Bugis, dan ketertiban umum.",
      },
      {
        title: "Kepatuhan PPID & Pedoman Media Siber",
        description: "Struktur menu transparansi sesuai standar Dewan Pers dan UU KIP No. 14/2008, dilengkapi formulir permohonan informasi daring.",
      },
      {
        title: "Interaktivitas Kirim Salam WA Studio",
        description: "Koneksi instan satu klik bagi pendengar untuk berinteraksi, titip salam, dan request lagu langsung ke ruang siaran operator.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-01-15",
    seoTitle: "Portal Resmi LPPL Radio Suara Bumi Lasinrang | Portofolio MAROA",
    seoDescription: "Pengembangan portal web informasi publik dan penyiaran warta terpadu LPPL Radio Suara Bumi Lasinrang oleh MAROA.",
  },
  {
    id: "radiosbl-streaming",
    slug: "web-streaming-radio-suara-bumi-lasinrang",
    title: "Aplikasi Web Streaming & Audio Player Digital Radio Suara Bumi Lasinrang 92,4 FM",
    category: "multimedia",
    summary: "Platform pemutar audio streaming daring berlatensi rendah dengan pendeteksi program siaran on-air aktif, sleep timer kustom, dan riwayat lagu.",
    clientDisplayName: "Radio Suara Bumi Lasinrang 92,4 FM",
    year: "2025 - 2026",
    heroImage: "/portfolio/radiosbl-desktop.webp",
    thumbnail: "/portfolio/radiosbl-desktop.webp",
    mobileImage: "/portfolio/radiosbl-mobile.webp",
    services: ["Web Audio Streaming", "Real-Time Broadcast Engine", "Interactive Audio UI", "Mobile Optimization"],
    challenge: "Keterbatasan daya jangkau pemancar frekuensi analog FM di daerah perbukitan dan kebutuhan pendengar warga perantau di luar daerah untuk tetap dapat menikmati siaran radio lokal dengan konsumsi kuota data seluler yang hemat.",
    approach: "Mengembangkan aplikasi web audio streaming minimalis modern dengan kompresi stream audio berlatensi rendah, tampilan status siaran on-air adaptif, dan fitur pendamping seperti sleep timer dan interaksi request salam.",
    execution: "Menghubungkan stream server berkapasitas tinggi; membangun antarmuka pemutar audio responsif dengan kontrol play/pause instan; menambahkan widget 'Sedang Mengudara' dengan sinopsis program; dan merancang sistem pemantauan 5 lagu terakhir.",
    outcome: "Siaran Radio SBL 92,4 FM dapat didengarkan secara jernih 24 jam nonstop dari seluruh dunia, meningkatkan interaksi pendengar lintas wilayah dan memperkuat jangkauan komunitas pendengar.",
    gallery: [
      "/portfolio/radiosbl-desktop.webp",
      "/portfolio/radiosbl-mobile.webp",
      "/portfolio/sbl-portal-desktop.webp"
    ],
    metrics: [
      { label: "Jangkauan Siaran", value: "Global / 24 Jam" },
      { label: "Fitur Unggulan", value: "Sleep Timer Kustom" },
      { label: "Kualitas Suara", value: "Lossless Broadcast" }
    ],
    features: [
      {
        title: "Pendeteksi Program On-Air Otomatis",
        description: "Menampilkan kartu acara yang sedang mengudara secara langsung, nama penyiar/instansi pengisi acara, dan sinopsis edukasi materi.",
      },
      {
        title: "Sleep Timer Cerdas",
        description: "Fitur timer pemutus siaran otomatis (15m, 30m, 45m, 60m, atau kustom) untuk menemani pendengar menjelang waktu tidur tanpa boros baterai.",
      },
      {
        title: "Riwayat 5 Lagu Terakhir",
        description: "Menyajikan daftar lima judul lagu dan artis yang baru saja diputar di udara agar pendengar tidak ketinggalan informasi musik.",
      },
      {
        title: "Tombol Request Lagu & Salam",
        description: "Jalur interaksi cepat yang menghubungkan pendengar langsung dengan kru penyiar di meja siaran saat acara berlangsung.",
      },
      {
        title: "Katalog Serial Podcast",
        description: "Pustaka audio rekaman topik perbincangan inspiratif dan edukasi publik yang dapat didengarkan kembali sesuai waktu pendengar.",
      },
      {
        title: "Indikator Status Pemancar Live",
        description: "Visual pendaran status siaran langsung (ON AIR / OFF AIR) dengan indikator frekuensi 92.40 MHz FM yang elegan.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-01-20",
    seoTitle: "Web Streaming Radio Suara Bumi Lasinrang 92,4 FM | Portofolio MAROA",
    seoDescription: "Aplikasi web audio streaming modern untuk siaran radio digital real-time berlatensi rendah oleh MAROA.",
  },
  {
    id: "ckg-malimpung",
    slug: "tersanjung-ckg-pkm-malimpung",
    title: "TERSANJUNG — Sistem Informasi Layanan Kesehatan Berbasis Jaringan Terpadu Puskesmas Malimpung",
    category: "digital",
    summary: "Platform inovasi digital pelayanan kesehatan primer terintegrasi yang mendigitalkan 7 pos alur skrining pasien, layanan jemput bola door to door, dan manajemen antrean.",
    clientDisplayName: "Puskesmas Malimpung, Kabupaten Pinrang",
    year: "2025",
    heroImage: "/portfolio/ckg-desktop.webp",
    thumbnail: "/portfolio/ckg-desktop.webp",
    mobileImage: "/portfolio/ckg-mobile.webp",
    services: ["Healthcare Information System", "Screening Workflow Automation", "Queue Management", "Clinical Data Security"],
    challenge: "Pencatatan skrining kesehatan warga dan faktor risiko penyakit tidak menular (PTM) di wilayah puskesmas sebelumnya masih menggunakan formulir kertas manual yang rentan rusak, memperlambat antrean pemeriksaan, dan menyulitkan rekapitulasi pelaporan capaian program kesehatan.",
    approach: "MAROA merancang sistem digitalisasi TERSANJUNG yang membagi alur pemeriksaan pasien ke dalam 7 pos skrining digital terkoordinasi, dilengkapi sistem tiket antrean, modul layanan lapangan door to door, dan dashboard analitik terpusat.",
    execution: "Pengembangan modul Pos 1 (Registrasi), Pos 2 (TTV & Laboratorium), Pos 3 (Fisik), Pos 4 (Skrining PTM), Pos 5 (Skrining Khusus), Pos 6 (Diagnosis Medis), hingga Pos 7 (Penerbitan Rapor Pasien); serta integrasi layar antrean ruang tunggu publik.",
    outcome: "Menghilangkan penggunaan kertas (paperless), memangkas waktu tunggu pasien secara signifikan, meningkatkan ketepatan deteksi faktor risiko penyakit warga, dan mempercepat pelaporan epidemiologi ke tingkat dinas kesehatan.",
    gallery: [
      "/portfolio/ckg-desktop.webp",
      "/portfolio/ckg-mobile.webp"
    ],
    metrics: [
      { label: "Alur Skrining", value: "7 Pos Digital Terpadu" },
      { label: "Metode Operasional", value: "Klinik & Door to Door" },
      { label: "Efisiensi Berkas", value: "100% Paperless" }
    ],
    features: [
      {
        title: "Alur 7 Pos Skrining Terstruktur",
        description: "Rangkaian estafet pemeriksaan terintegrasi dari identitas pasien, tanda vital & lab, fisik, skrining PTM, skrining khusus, hingga penetapan diagnosis.",
      },
      {
        title: "Modul Rapor Kesehatan Pasien (Pos 7)",
        description: "Penerbitan rekapitulasi kondisi kesehatan dan catatan anjuran medis pasien secara otomatis untuk panduan perawatan berkala.",
      },
      {
        title: "Layanan Lapangan Door to Door",
        description: "Antarmuka ramah smartphone bagi tenaga kesehatan dan kader desa untuk melakukan skrining kesehatan langsung ke rumah-rumah warga lansia/rentan.",
      },
      {
        title: "Loket Antrean & Layar Monitor Publik",
        description: "Manajemen nomor antrean digital yang ditampilkan di layar ruang tunggu puskesmas untuk menciptakan alur pelayanan yang tertib.",
      },
      {
        title: "Dashboard Analitik Tren Kesehatan",
        description: "Visualisasi data agregat prevalensi faktor risiko kesehatan warga Malimpung untuk dasar perencanaan intervensi medis puskesmas.",
      },
      {
        title: "Admin & Akses Kontrol Terproteksi",
        description: "Manajemen hak akses bertingkat untuk petugas loket, perawat pemeriksa, dokter penanggung jawab, dan administrator faskes.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2025-11-10",
    seoTitle: "TERSANJUNG Puskesmas Malimpung — Sistem Skrining Kesehatan | Portofolio MAROA",
    seoDescription: "Platform digitalisasi alur skrining kesehatan 7 pos dan antrean terpadu Puskesmas Malimpung oleh MAROA.",
  },
  {
    id: "zonasi-hd",
    slug: "zonasi-hd-command-center",
    title: "ZONASI-HD — Pusat Pantau Visual Risiko Cairan & IDWG Unit Hemodialisis",
    category: "digital",
    summary: "Sistem aplikasi pendukung keputusan klinis hemodialisis untuk menghitung IDWG otomatis, memvisualisasikan zona risiko cairan pasien, dan memberikan peringatan dini medis.",
    clientDisplayName: "Unit Hemodialisis Rumah Sakit / Klinik Spesialis",
    year: "2025 - 2026",
    heroImage: "/portfolio/zonasi-desktop.webp",
    thumbnail: "/portfolio/zonasi-desktop.webp",
    mobileImage: "/portfolio/zonasi-mobile.webp",
    services: ["Clinical Decision Support", "IDWG Algorithm Engine", "Medical Risk Visualizer", "Healthcare Data Privacy"],
    challenge: "Pasien gagal ginjal kronis yang menjalani cuci darah (hemodialisis) sangat rentan mengalami kelebihan cairan (fluid overload) yang berisiko memicu komplikasi fatal seperti edema paru dan gagal jantung akut akibat kenaikan berat badan antar-sesi (IDWG) yang tidak terpantau ketat.",
    approach: "Mengembangkan platform ZONASI-HD dengan filosofi 'Risiko cairan terlihat. Tindakan menjadi cepat. Cepat, Akurat, dan Selamat.' yang memetakan toleransi kenaikan cairan pasien ke dalam zonasi visual intuitif untuk mempercepat tindakan preventif tim medis.",
    execution: "Membangun kalkulator IDWG real-time berbasis parameter berat badan kering; sistem triase zonasi visual (Zona Hijau, Kuning, Merah); sistem peringatan dini (early warning alert); modul edukasi pembatasan cairan bagi pasien; serta kontrol login petugas medis resmi.",
    outcome: "Membantu dokter dan perawat hemodialisis mendeteksi pasien berisiko tinggi dalam hitungan detik sebelum tindakan cuci darah dimulai, menurunkan insiden komplikasi intradialitik, dan meningkatkan kepatuhan restriksi cairan pasien.",
    gallery: [
      "/portfolio/zonasi-desktop.webp",
      "/portfolio/zonasi-mobile.webp"
    ],
    metrics: [
      { label: "Tujuan Klinis", value: "Cepat, Akurat, Selamat" },
      { label: "Kalkulasi", value: "Presisi IDWG Real-Time" },
      { label: "Klasifikasi", value: "Triase 3 Zona Risiko" }
    ],
    features: [
      {
        title: "Kalkulator Otomatis IDWG Pasien",
        description: "Penghitungan persentase kenaikan berat badan antar-dialisis berbasis berat kering pasien secara instan tanpa risiko salah hitung manual.",
      },
      {
        title: "Visualisasi Triase 3 Zona Risiko",
        description: "Pengelompokan status cairan pasien ke dalam kode warna Zona Hijau (Aman), Zona Kuning (Perlu Waspada), dan Zona Merah (Bahaya Kritis).",
      },
      {
        title: "Sistem Peringatan Dini Medis (Alert)",
        description: "Notifikasi visual tegas saat cairan pasien melampaui ambang batas aman untuk penyesuaian target ultrafiltrasi (UF Goal) mesin cuci darah.",
      },
      {
        title: "Modul Edukasi Asupan Pasien",
        description: "Alat bantu komunikasi perawat dalam menjelaskan bahaya penumpukan cairan dan panduan kuota minum harian kepada keluarga pasien.",
      },
      {
        title: "Portal Akses Petugas Medis Resmi",
        description: "Otentikasi aman menggunakan ID petugas pendek atau email resmi unit untuk menjaga kerahasiaan data rekam medis dialisis.",
      },
      {
        title: "Desain Antarmuka Klinis Kontras Tinggi",
        description: "Tampilan antarmuka yang dirancang khusus untuk kemudahan keterbacaan cepat di lingkungan ruang tindakan dialisis yang sibuk.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2025-12-05",
    seoTitle: "ZONASI-HD Unit Hemodialisis — Pemantauan Risiko Cairan | Portofolio MAROA",
    seoDescription: "Sistem aplikasi klinis pemantauan IDWG dan zona risiko cairan pasien hemodialisis oleh MAROA.",
  },
  {
    id: "disperindag-pinrang",
    slug: "portal-terpadu-disperindag-esdm-pinrang",
    title: "Portal Pelayanan Prima & Pemantauan Komoditas Dinas Perindag ESDM Kabupaten Pinrang",
    category: "digital",
    summary: "Portal pemerintahan terpadu yang memadukan data live harga pasar SP2KP, sistem pencarian 681 pangkalan LPG 3 Kg subsidi, katalog IKM, kemetrologian, dan pengaduan 6 tahap.",
    clientDisplayName: "Dinas Perindag ESDM Kabupaten Pinrang",
    year: "2025 - 2026",
    heroImage: "/portfolio/disperindag-desktop.webp",
    thumbnail: "/portfolio/disperindag-desktop.webp",
    mobileImage: "/portfolio/disperindag-mobile.webp",
    services: ["E-Government Portal Architecture", "SP2KP Commodity API", "GIS Energy Directory", "Citizen Ticketing System"],
    challenge: "Menghadirkan keterbukaan informasi publik dan akuntabilitas pelayanan di sektor industri, perdagangan, dan energi; mengatasi kepanikan masyarakat terkait ketersediaan LPG 3 Kg subsidi; serta mempublikasikan fluktuasi harga kebutuhan pokok harian secara transparan.",
    approach: "MAROA membangun portal resmi berkonsep MANTAP (Melayani Anda dengan Transparan, Adil & Profesional) yang mengintegrasikan pemantauan harga komoditas pasar harian, database 681 pangkalan LPG resmi di 12 kecamatan, standar SOP 9 layanan kedinasan, dan kanal pengaduan terenkripsi.",
    execution: "Integrasi data SP2KP Kemendag RI untuk Pasar Sentral & Pekkabata; modul pencarian pangkalan elpiji berbasis desa/kecamatan; etalase produk unggulan IKM binaan (Kain Sutra Motif Pinrang, Kerajinan Serat Alam, Kopi Benteng Paremba); sistem tera/tera ulang UTTP gratis; dan jalur pengaduan 6 tahap terhubung SP4N-LAPOR!.",
    outcome: "Masyarakat dan pelaku usaha mendapatkan rujukan harga pangan terpercaya setiap hari, menekan spekulasi harga LPG di tingkat pangkalan, mempermudah akses perizinan IKM, dan memperkuat transparansi birokrasi daerah.",
    gallery: [
      "/portfolio/disperindag-desktop.webp",
      "/portfolio/disperindag-mobile.webp"
    ],
    metrics: [
      { label: "Data Pasar", value: "Update Harian 09:00 WITA" },
      { label: "Basis Data Energi", value: "681 Pangkalan LPG 3 Kg" },
      { label: "Standar Layanan", value: "9 SOP & Alur 6 Tahap" }
    ],
    features: [
      {
        title: "Live Harga Komoditas SP2KP Kemendag RI",
        description: "Pembaruan harian harga 17 bahan pokok utama (Beras SPHP Bulog, Cabai, Bawang, Minyakita, Daging Sapi, dll) di Pasar Sentral & Pasar Pekkabata.",
      },
      {
        title: "Pencarian 681 Pangkalan LPG 3 Kg Resmi",
        description: "Direktori interaktif verifikasi pangkalan elpiji bersubsidi Pertamina di 12 kecamatan untuk memantau kepatuhan HET dan mencegah pangkalan nakal.",
      },
      {
        title: "Etalase Produk Unggulan IKM Binaan",
        description: "Katalog promosi produk lokal ber-HAKI dan bersertifikat Halal: Tenun Sutra Motif Khas Pinrang, Anyaman Serat Alam Lembang, dan Kopi Robusta.",
      },
      {
        title: "Pelayanan Kemetrologian UTTP Gratis",
        description: "Informasi SOP dan jadwal pelayanan tera & tera ulang alat ukur, takar, timbang menuju terwujudnya Pinrang sebagai Daerah Tertib Ukur.",
      },
      {
        title: "Sistem Pengaduan Berjenjang 6 Tahap",
        description: "Formulir aspirasi masyarakat dengan penerbitan kode tiket terenkripsi, respon awal maksimal 1x24 jam kerja, dan integrasi WhatsApp serta SP4N-LAPOR!.",
      },
      {
        title: "Direktori Interoperabilitas ASN & Lembaga",
        description: "Pintu gerbang terpadu bagi pegawai kedinasan menuju sistem SIPD, SIPPN, e-SAKIP, e-Absensi, SIKDA, dan portal kementerian terkait.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-02-01",
    seoTitle: "Portal Disperindag ESDM Pinrang — Pelayanan & Komoditas | Portofolio MAROA",
    seoDescription: "Pengembangan portal e-government terpadu Dinas Perindustrian, Perdagangan, ESDM Pinrang oleh MAROA.",
  },
  {
    id: "dinsos-pinrang",
    slug: "portal-layanan-terpadu-dinas-sosial-pinrang",
    title: "Portal Sistem Layanan & Rujukan Terpadu Dinas Sosial Kabupaten Pinrang",
    category: "digital",
    summary: "Portal keterbukaan informasi program bantuan sosial pemerintah daerah yang dilengkapi widget aksesibilitas khusus disabilitas (Text-to-Speech), cek bansos, dan rujukan kedaruratan 24 jam.",
    clientDisplayName: "Dinas Sosial Kabupaten Pinrang",
    year: "2025",
    heroImage: "/portfolio/dinsos-desktop.webp",
    thumbnail: "/portfolio/dinsos-desktop.webp",
    mobileImage: "/portfolio/dinsos-mobile.webp",
    services: ["Inclusive Web Accessibility (WCAG 2.2 AA)", "Text-to-Speech Engine", "Social Assistance Directory", "Emergency Social Help"],
    challenge: "Menghadirkan portal layanan sosial yang benar-benar inklusif bagi seluruh lapisan warga, termasuk penyandang disabilitas netra/fisik dan lansia, serta meminimalisir praktik penipuan bansos dengan memperjelas kriteria bantuan sosial gratis.",
    approach: "Membangun portal sosial bersemboyan 'Melayani dengan Peduli, Menghubungkan dengan Solusi' yang dilengkapi fitur mesin pembaca suara otomatis (Text-to-Speech), penyesuai kontras dan ukuran teks, kanal cek bansos, serta kanal darurat penanganan korban bencana 24 jam.",
    execution: "Integrasi engine TTS Bahasa Indonesia; panel kustomisasi tampilan ramah disleksia dan mode kontras; direktori layanan DTSEN, PKH, MARENNU, dan penanganan warga terlantar; modul kemitraan pilar sosial TKSK di 12 kecamatan; serta publikasi dokumen SK resmi.",
    outcome: "Menjadi pelopor website kedinasan ramah disabilitas di Sulawesi Selatan, memudahkan warga rentan mengakses hak bantuan sosial tanpa perantara, dan mempercepat tanggap darurat bencana sosial.",
    gallery: [
      "/portfolio/dinsos-desktop.webp",
      "/portfolio/dinsos-mobile.webp"
    ],
    metrics: [
      { label: "Aksesibilitas", value: "Mesin Suara TTS & Disleksia" },
      { label: "Kanal Darurat", value: "TAGANA Siaga 24 Jam" },
      { label: "Pilar Sosial", value: "12 Kecamatan TKSK & PKH" }
    ],
    features: [
      {
        title: "Pembaca Suara Otomatis (Text-to-Speech)",
        description: "Mesin pembaca teks artikel dan halaman dalam Bahasa Indonesia yang memudahkan warga penyandang disabilitas netra dan lansia.",
      },
      {
        title: "Panel Penyesuaian Aksesibilitas Visual",
        description: "Pengaturan mandiri untuk kontras tinggi, mode monokrom, perbesaran teks, font ramah disleksia, kursor besar, dan penghentian animasi.",
      },
      {
        title: "Kanal Cek Bansos & DTSEN",
        description: "Panduan alur verifikasi data penerima bantuan sosial resmi, pendaftaran DTSEN, dan persyaratan kepesertaan program PKH.",
      },
      {
        title: "Layanan Tanggap Darurat Bencana 24 Jam",
        description: "Jalur siaga bantuan kedaruratan sosial, evakuasi warga terlantar, dan koordinasi logistik bersama Taruna Siaga Bencana (TAGANA).",
      },
      {
        title: "Layanan Konsultasi MARENNU",
        description: "Sistem rujukan dan pendampingan terpadu bagi pemerlu pelayanan kesejahteraan sosial (PPKS) untuk solusi perlindungan keluarga.",
      },
      {
        title: "Transparansi Dokumen SK & Anti-Pungli",
        description: "Maklumat pelayanan gratis (Rp 0) berani tolak pungli serta repositori unduh berkas SK pengelola pengaduan resmi kedinasan.",
      },
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2025-10-18",
    seoTitle: "Portal Layanan Sosial Terpadu Dinas Sosial Pinrang | Portofolio MAROA",
    seoDescription: "Portal inklusif ramah disabilitas dengan TTS dan informasi bansos terpadu Dinas Sosial Pinrang oleh MAROA.",
  },
  {
    id: "sbl-undian",
    slug: "sistem-undian-interaktif-digital-doorprize",
    title: "Grand Doorprize Event — Sistem Undian Interaktif & Acak Pemenang Layar Lebar",
    category: "integrated",
    summary: "Aplikasi animasi pengundian door-prize panggung real-time beresolusi tinggi dengan algoritma angka acak kriptografis transparan untuk event akbar dan siaran langsung.",
    clientDisplayName: "Penyelenggara Event & Media Partner",
    year: "2025 - 2026",
    heroImage: "/portfolio/undian-desktop.webp",
    thumbnail: "/portfolio/undian-desktop.webp",
    mobileImage: "/portfolio/undian-mobile.webp",
    services: ["Stage Visual Software", "Cryptographic Randomizer", "Ultra-Wide Screen Optimization", "Live Event Engineering"],
    challenge: "Menyelenggarakan sesi penarikan door-prize berhadiah mobil, motor, dan ratusan hadiah elektronik pada event berskala ribuan peserta yang menuntut keadilan mutlak, transparansi tanpa kecurigaan manipulasi, serta visualisasi panggung yang dramatis dan mendebarkan.",
    approach: "Mengembangkan aplikasi web stage-ready dengan engine randomizer angka acak berbasis kriptografi yang menghasilkan animasi putaran angka berkecepatan tinggi dengan efek pendaran cahaya (glow effect) yang memukau di layar videotron LED panggung utama.",
    execution: "Membangun panel manajemen hadiah berjenjang (Grand Prize Mobil, Motor, Elektronik); sistem import basis data nomor kupon/peserta; panel kontrol tombol operator (Mulai Undian, Kunci Pemenang); filter pencegahan dobel menang; serta modul export rekapitulasi Berita Acara resmi.",
    outcome: "Menghidupkan atmosfer kemeriahan puncak event, memikat ribuan tatap mata penonton di depan panggung tanpa keraguan kecurangan, dan mempermudah saksi notaris serta kepolisian menandatangani keabsahan undian.",
    gallery: [
      "/portfolio/undian-desktop.webp",
      "/portfolio/undian-mobile.webp"
    ],
    metrics: [
      { label: "Algoritma Acak", value: "100% Kripto Adil" },
      { label: "Output Tampilan", value: "Videotron Ultra-Wide LED" },
      { label: "Pelaporan", value: "Ekspor Berita Acara Notaris" }
    ],
    features: [
      {
        title: "Mesin Acak Kriptografis Bebas Manipulasi",
        description: "Menghasilkan angka pemenang secara acak murni menggunakan web cryptography API yang tidak dapat diatur atau direkayasa sebelumnya.",
      },
      {
        title: "Animasi Roll Panggung Resolusi Tinggi",
        description: "Efek animasi perputaran digit angka dengan transisi akselerasi-deselerasi dinamis yang memacu ketegangan positif seluruh penonton acara.",
      },
      {
        title: "Pengaturan Kategori Hadiah Berjenjang",
        description: "Dukungan pengelompokan undian mulai dari Grand Prize utama hingga puluhan hadiah hiburan dalam satu sesi acara tanpa jeda.",
      },
      {
        title: "Filter Proteksi Anti-Duplikasi Pemenang",
        description: "Sistem otomatis mengunci nomor peserta yang telah dinyatakan menang agar tidak keluar kembali pada kategori hadiah berikutnya.",
      },
      {
        title: "Export Riwayat Pemenang Seketika",
        description: "Modul unduh rekapan nama, nomor kupon, dan waktu kemenangan untuk keperluan penyerahan hadiah dan pengesahan Berita Acara saksi.",
      },
      {
        title: "Antarmuka Operator Khusus Panggung",
        description: "Tombol kontrol berukuran besar dan responsif yang dapat dioperasikan secara percaya diri oleh kru operator teknis panggung.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-02-25",
    seoTitle: "Sistem Undian Interaktif Panggung Grand Doorprize | Portofolio MAROA",
    seoDescription: "Aplikasi animasi undian door-prize panggung interaktif layar lebar dengan randomizer kriptografis transparan oleh MAROA.",
  },
  {
    id: "peduli-pinrang",
    slug: "peduli-pinrang-jemput-sampah-warga",
    title: "Peduli Pinrang — Platform Layanan Permintaan Jemput Sampah Digital & Gerakan Lingkungan Warga",
    category: "digital",
    summary: "Platform civic-tech jemput sampah terpilah warga secara on-demand, integrasi Bank Sampah & TPS3R, peta cakupan area, dan program sedekah sampah.",
    clientDisplayName: "Yayasan Peduli Pinrang",
    year: "2025 - 2026",
    heroImage: "/portfolio/peduli-desktop.webp",
    thumbnail: "/portfolio/peduli-desktop.webp",
    mobileImage: "/portfolio/peduli-mobile.webp",
    services: ["Civic Tech Web Platform", "On-Demand Logistics Booking", "Interactive GIS Map", "Social Environmental Impact"],
    challenge: "Banyak warga di pemukiman perkotaan yang telah memiliki kesadaran memilah sampah organik dan daur ulang namun kesulitan menjangkau bank sampah atau tidak memiliki waktu mengantar, sehingga sampah berakhir menumpuk di saluran air atau lahan terbuka liar.",
    approach: "Mengembangkan platform kepedulian lingkungan bertagline 'Dari gerakan warga, untuk Pinrang lebih bersih' yang didukung MAROA Project untuk memfasilitasi pemesanan armada jemput sampah warga, jadwal rutin UMKM, dan layanan event bersih.",
    execution: "Membangun formulir pengajuan jemput sampah ramah tamu (cukup foto sampah dan titik lokasi peta OpenStreetMap); integrasi wilayah operasional (Watang Sawitto & Paleteang bersama Bank Sampah dan TPS3R Paleteang Bersinar); serta kalkulasi otomatis metrik kilogram sampah terkelola.",
    outcome: "Mengalihkan ratusan kilogram sampah dari TPA, membuka peluang sirkular ekonomi baru bagi warga melalui program tabungan Sampah Tukar Emas (MiniGold) dan Sedekah Sampah, serta menciptakan lingkungan pemukiman yang lebih asri.",
    gallery: [
      "/portfolio/peduli-desktop.webp",
      "/portfolio/peduli-mobile.webp"
    ],
    metrics: [
      { label: "Pengajuan", value: "3 Langkah Foto & Lokasi" },
      { label: "Cakupan Pilot", value: "Watang Sawitto & Paleteang" },
      { label: "Mitra Fasilitas", value: "Bank Sampah & TPS3R" }
    ],
    features: [
      {
        title: "Pengajuan Jemput Sampah Ramah Tamu (Guest)",
        description: "Warga dapat langsung meminta penjemputan sampah rumah tangga cukup dengan mengirimkan foto sampah terpilah dan titik lokasi tanpa wajib login rumit.",
      },
      {
        title: "Peta Interaktif Wilayah Cakupan (Leaflet GIS)",
        description: "Visualisasi peta batas operasional armada di Kecamatan Watang Sawitto dan Paleteang serta letak fasilitas Bank Sampah dan TPS3R mitra.",
      },
      {
        title: "Layanan Sampah Terjadwal UMKM & Kantor",
        description: "Skema kemitraan pengelolaan sampah berkala bagi kafe, restoran, pertokoan, dan perkantoran untuk kemandirian operasional yayasan.",
      },
      {
        title: "Dukungan Event & Hajatan Bersih",
        description: "Layanan pendampingan dan penjemputan armada untuk memastikan lokasi pesta pernikahan atau event publik terbebas dari tumpukan sampah sisa.",
      },
      {
        title: "Program Sedekah Sampah & Tukar Emas",
        description: "Inovasi sosial yang mengonversi nilai jual sampah anorganik terpilah menjadi donasi kaum dhuafa atau ditabung menjadi kepingan MiniGold.",
      },
      {
        title: "Pelacak Metrik Dampak Lingkungan",
        description: "Pencatatan statistik kumulatif jumlah penjemputan selesai, warga terlayani, dan total tonase sampah yang berhasil diselamatkan dari TPA.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-03-05",
    seoTitle: "Peduli Pinrang — Platform Layanan Jemput Sampah Warga | Portofolio MAROA",
    seoDescription: "Platform aplikasi web civic-tech untuk penjemputan sampah warga dan inovasi daur ulang terpadu di Pinrang oleh MAROA.",
  },
  {
    id: "porsenijar-sidrap-pgri",
    slug: "porsenijar-sidrap-pgri-sulsel-multimedia-videotron",
    title: "PORSENIJAR PGRI Sulsel Kab. Sidrap 2026 — Tata Multimedia Videotron & Visual Panggung",
    category: "multimedia",
    summary: "Produksi motion graphics pembuka, visual bumper pengiring kontingen, dan operasional layar videotron panggung utama pada perhelatan akbar PORSENIJAR PGRI Sulsel di Kabupaten Sidrap.",
    clientDisplayName: "Pengurus PGRI Provinsi Sulawesi Selatan & Panitia Pelaksana Sidrap",
    year: "2026",
    heroImage: "/portfolio/covers/porsenijar-sidrap-pgri-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/porsenijar-sidrap-pgri-2026-cover-1600x900.webp",
    role: "Produksi Motion Graphics, Visual Panggung & Tata Multimedia Videotron",
    sourceCredit: "Dokumentasi Resmi Humas Pemkab Sidenreng Rappang (Sidrap)",
    sourceUrl: "https://sidrapkab.go.id/berita/detail_berita/Berita054835-Porsenijar-PGRI-Sulsel-Sukses-Digelar--Bupati-Syaharuddin-Apresiasi-Dukungan-Seluruh-Pihak",
    rightsStatus: "Dokumentasi Pelaksanaan & Arsip Resmi MAROA",
    services: [
      "Stage LED Screen Content Production",
      "Contingent Parade Video Bumpers",
      "Live Videotron Switching Operation",
      "Motion Typography & Scoreboard Graphics"
    ],
    challenge: "Menyelenggarakan tata visual panggung yang dinamis untuk defile puluhan ribu tenaga pendidik dari 24 kabupaten/kota se-Sulsel di stadion terbuka dengan visibilitas prima.",
    approach: "Membuat template grafis gerak resolusi tinggi berkecepatan refresh tinggi yang memadukan identitas oranye-hitam khas PGRI dengan elemen kultural Bumi Nene Mallomo.",
    execution: "Menyiapkan sekuens animasi penayangan nama kontingen, cuplikan prestasi cabang olahraga, dan sinkronisasi audio-visual live selama upacara pembukaan dan penutupan.",
    outcome: "Perhelatan pembukaan berlangsung meriah dan mendapatkan apresiasi langsung dari Bupati Sidrap dan jajaran Pengurus Besar PGRI.",
    gallery: [
      "/portfolio/covers/porsenijar-sidrap-pgri-2026-cover-1600x900.webp",
      "/portfolio/gallery/porsenijar-sidrap-pgri-2026-cover-1600x900.jpg",
      "/portfolio/events/porsenijar-sidrap.png"
    ],
    metrics: [
      { label: "Partisipasi", value: "24 Kontingen Se-Sulsel" },
      { label: "Cabang Lomba", value: "16 Cabang Olahraga & Seni" },
      { label: "Format Visual", value: "Ultra-HD 4K Videotron" }
    ],
    features: [
      {
        title: "Motion Graphics Opening Ceremony 3D",
        description: "Animasi hitung mundur pembukaan bertaraf nasional yang menggabungkan elemen obor api olimpiade dan ornamen khas Sulawesi Selatan.",
      },
      {
        title: "Aset Animasi 16 Cabang Olahraga & Seni",
        description: "Visualisasi dinamis untuk Tenis, Futsal, Sepak Takraw, Catur, Paduan Suara, Vokal Grup, Tari Kreasi, Stand-Up Komedi, MTQ, hingga Media Pembelajaran.",
      },
      {
        title: "Sistem Visual Split-Screen Panggung Utama",
        description: "Tata layar fleksibel yang dapat membagi feed siaran langsung kamera panggung dengan grafis nama penampil dan live scoring.",
      },
      {
        title: "Integrasi Landmark Ikonik Bumi Nene Mallomo",
        description: "Penyusunan ilustrasi 3D Monumen Jam Beras, Masjid Agung Sidrap, Kincir Angin PLTB Mattirotasi, dan Rumah Adat Bola Sobbi.",
      },
      {
        title: "Tata Video Loop Latar Tari Kolosal",
        description: "Penciptaan latar visual bergerak yang selaras dengan ritme ketukan gendang dan musik etnik tarian kolosal guru.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-07-02",
    seoTitle: "PORSENIJAR PGRI Sulsel 2026 Sidrap — Desain Multimedia & Videotron | MAROA",
    seoDescription: "Produksi desain multimedia panggung dan videotron upacara kolosal PORSENIJAR PGRI Sulsel 2026 di Kabupaten Sidrap oleh MAROA.",
  },
  {
    id: "harganas-33-sulbar",
    slug: "harganas-33-sulbar-produksi-konten-desain-multimedia",
    title: "Peringatan Hari Keluarga Nasional (HARGANAS) Ke-33 Sulawesi Barat — Produksi Konten Desain Multimedia & Branding Panggung",
    category: "multimedia",
    summary: "Produksi konten visual multimedia, motion graphics program stunting, dan tata panggung kehormatan puncak peringatan HARGANAS Ke-33 Tingkat Provinsi Sulawesi Barat di Pelataran Pendopo Rujab Bupati Majene.",
    clientDisplayName: "Perwakilan BKKBN Provinsi Sulawesi Barat & DPPKB Majene",
    year: "2026",
    heroImage: "/portfolio/events/harganas-sulbar.jpg",
    thumbnail: "/portfolio/events/harganas-sulbar.jpg",
    services: [
      "Produksi Konten Desain Multimedia",
      "Stage Visual Identity & Backdrop",
      "Motion Graphic Launching TAMASYA",
      "Kampanye Audio-Visual Cegah Stunting",
      "Tata Multimedia Hiburan Tradisional"
    ],
    challenge: "Menyampaikan pesan strategis nasional penguatan ketahanan keluarga dengan tema sentral 'Ayah Wajib Hadir' serta percepatan penurunan stunting di hadapan para kepala daerah, pimpinan BKKBN, dan instansi lintas sektor dalam format audio-visual yang menyentuh, resmi, namun tetap estetis dan ramah masyarakat.",
    approach: "Mengembangkan konsep visual berwibawa memadukan lambang kebangsaan merah putih dengan siluet kehangatan keluarga emas dan biru bahari khas Majene, diperkaya konten video edukasi interaktif untuk sesi launching program dan penandatanganan MoU kolaborasi.",
    execution: "Mendesain master backdrop panggung utama di Pelataran Pendopo Rujab Bupati Majene, video motion peluncuran program inovasi TAMASYA, visual animasi pengukuhan Duta GenRe, serta aset visual latar persembahan seni musik tradisional Sayang-Sayang.",
    outcome: "Sukses menggaungkan pesan 'Ayah Wajib Hadir' ke seluruh penjuru Sulawesi Barat, menghadirkan alur acara kenegaraan yang khidmat dan tertata rapi, serta memperkuat sinergi Program Bangga Kencana antardaerah.",
    gallery: [
      "/portfolio/events/harganas-sulbar.jpg"
    ],
    metrics: [
      { label: "Skala Acara", value: "Tingkat Provinsi Sulbar" },
      { label: "Tema Utama", value: "Ayah Wajib Hadir" },
      { label: "Rangkaian Acara", value: "3 Hari Penuh Kegiatan" }
    ],
    features: [
      {
        title: "Desain Backdrop Panggung Kehormatan 3D",
        description: "Komposisi visual master panggung utama beresolusi tinggi dengan tipografi emas 3D dan siluet keluarga Indonesia harmonis.",
      },
      {
        title: "Motion Graphics Peluncuran Program TAMASYA",
        description: "Animasi peluncuran resmi program inovatif percepatan penurunan stunting bersama keterlibatan aktif para ayah.",
      },
      {
        title: "Aset Multimedia Pengukuhan Duta GenRe & MoU",
        description: "Tampilan grafis seremoni pengukuhan generasi berencana serta penandatanganan komitmen bersama PKK, Dharma Wanita, dan Persit.",
      },
      {
        title: "Visual Pendukung Hiburan Musik Sayang-Sayang",
        description: "Latar multimedia dinamis berornamen Mandar tradisional yang mengiringi alunan kecapi dan syair sastra lokal.",
      },
      {
        title: "Sistem Informasi Agenda 3 Hari Rangkaian",
        description: "Grafis panduan kegiatan mencakup jalan santai, seminar penyuluh KB, pameran UPPKA, hingga parade defile kontingen kabupaten.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-07-28",
    seoTitle: "HARGANAS Ke-33 Sulawesi Barat — Produksi Multimedia Panggung | MAROA",
    seoDescription: "Produksi konten desain multimedia dan panggung kehormatan HARGANAS Ke-33 Tingkat Provinsi Sulawesi Barat di Majene oleh MAROA.",
  },
  {
    id: "perpustakaan-expo-pinrang",
    slug: "perpustakaan-expo-festival-literasi-pinrang-event-organizer",
    title: "Perpustakaan Expo & Festival Literasi Pinrang — Manajemen Penyelenggaraan Event Organizer (EO) & Ekosistem Edukasi Publik",
    category: "events",
    summary: "Manajemen acara terpadu (Event Organizer) festival literasi daerah mencakup kurasi panggung outdoor, stan pameran interaktif sekolah, talkshow kepenulisan, dan aktivasi ekonomi kreatif di Lasinrang Park.",
    clientDisplayName: "Dinas Perpustakaan dan Kearsipan Kabupaten Pinrang",
    year: "2026",
    heroImage: "/portfolio/events/perpustakaan-expo.jpg",
    thumbnail: "/portfolio/events/perpustakaan-expo.jpg",
    services: [
      "Manajemen Event Organizer (EO) Terpadu",
      "Spatial & Exhibition Booth Layout",
      "Tata Panggung Utama Outdoor & Videotron",
      "Kurasi Pengisi Acara & Rundown Multi-Hari",
      "Dokumentasi & Live Media Production"
    ],
    challenge: "Mengubah persepsi konvensional tentang perpustakaan menjadi festival publik terbuka yang berjiwa muda, interaktif, dan inklusif di Lasinrang Park dengan puluhan tenant sekolah, penerbit, komunitas seni, dan UMKM dalam rangkaian kegiatan multi-hari menyambut HUT RI.",
    approach: "Mengadopsi model festival kota modern dengan membagi ruang menjadi Literacy Main Stage, Modular Exhibition Booths, Interactive Creative Workshop Corner, dan Local Culinary Area yang tertata higienis dan nyaman.",
    execution: "Mengelola perizinan dan tata kelola massa, konstruksi panggung beratap melengkung dengan layar LED videotron interaktif, tata pencahayaan hangat senja hingga malam, serta manajemen acara talkshow bedah buku dan lomba mendongeng anak.",
    outcome: "Menarik ribuan pelajar, pegiat literasi, pendidik, dan masyarakat umum, meningkatkan keterlibatan publik terhadap fasilitas perpustakaan daerah, serta membuka ruang promosi yang sukses bagi UMKM lokal.",
    gallery: [
      "/portfolio/events/perpustakaan-expo.jpg",
      "/portfolio/events/tpn-guru-belajar.png"
    ],
    metrics: [
      { label: "Durasi Festival", value: "5 Hari Pelaksanaan" },
      { label: "Lokasi", value: "Lasinrang Park Pinrang" },
      { label: "Keterlibatan", value: "Sekolah, Komunitas & UMKM" }
    ],
    features: [
      {
        title: "Perencanaan & Eksekusi Lapangan Menyeluruh",
        description: "Pengendalian alur acara terstruktur mulai dari opening ceremony resmi, rundown teknis pengisi panggung, hingga evaluasi harian tim EO.",
      },
      {
        title: "Konstruksi Panggung Utama Berlayar Videotron Lengkung",
        description: "Panggung outdoor megah dengan videotron LED melengkung (curved display) menampilkan konten edukasi ramah anak.",
      },
      {
        title: "Tata Kelola Stan Pameran Sekolah & Penerbit",
        description: "Penyusunan stan pameran modular bertema kayu hangat dan pencahayaan estetik untuk menampilkan karya literasi unggulan siswa.",
      },
      {
        title: "Manajemen Talkshow Inspiratif & Bedah Buku",
        description: "Fasilitasi sesi diskusi bersama penulis nasional, tokoh literasi perempuan, dan praktisi pendidikan daerah.",
      },
      {
        title: "Pemberdayaan Area Kuliner & UMKM Kreatif",
        description: "Penataan stan makanan dan kerajinan khas Pinrang guna mendukung perputaran ekonomi kreatif selama festival berlangsung.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-08-11",
    seoTitle: "Perpustakaan Expo & Festival Literasi Pinrang — Event Organizer | MAROA",
    seoDescription: "Penyelenggaraan terpadu Event Organizer Perpustakaan Expo dan Festival Literasi Kabupaten Pinrang oleh MAROA.",
  },
  {
    id: "fakkie-ramadhan-fest",
    slug: "fakkie-ramadhan-fest-multimedia-video-mapping",
    title: "FAKKIE Ramadhan Fest — Produksi Konten Desain Multimedia Panggung & Video Mapping Arsitektural Religi",
    category: "multimedia",
    summary: "Penerapan proyeksi video mapping 3D berarsitektur Islami dan konten multimedia panggung pada festival semarak Ramadan dan festival seni musik patrol kebanggaan masyarakat Tiroang.",
    clientDisplayName: "Panitia FAKKIE Ramadhan Fest & Karang Taruna Kelurahan Fakkie",
    year: "2026",
    heroImage: "/portfolio/events/fakkie-video-mapping.jpg",
    thumbnail: "/portfolio/events/fakkie-video-mapping.jpg",
    services: [
      "Arsitektural Video Mapping 3D",
      "Produksi Konten Multimedia Panggung",
      "Synchronized Light & Sound System",
      "Desain Visual Panggung Seni Musik Patrol"
    ],
    challenge: "Membawa tradisi seni patrol sahur masyarakat Tiroang ke panggung pertunjukan modern yang spektakuler tanpa mengaburkan kesakralan, kekhusyukan, dan kehangatan nilai-nilai bulan suci Ramadan.",
    approach: "Menerapkan teknologi proyeksi video mapping arsitektural 3D pada fasad panggung utama festival, memadukan ornamen kaligrafi geometri Islam modern, pendaran laser emas-toska, dan ketukan perkusi patrol khas Sulawesi Selatan.",
    execution: "Melakukan pemetaan proyeksi permukaan 3D (surface mapping) pada panggung gerbang menara, memprogram animasi transisi cahaya yang tersinkronisasi dengan tabuhan perkusi kelompok patrol, serta memandu operator multimedia selama malam puncak perayaan.",
    outcome: "Menjadi suguhan pertunjukan yang sangat viral dan spektakuler di media sosial lokal, dihadiri ribuan warga dari berbagai kecamatan, dan menorehkan standar baru pemanfaatan teknologi video mapping untuk event religi berbasis komunitas di Pinrang.",
    gallery: [
      "/portfolio/events/fakkie-video-mapping.jpg"
    ],
    metrics: [
      { label: "Teknologi Visual", value: "3D Projection Mapping" },
      { label: "Peserta Lomba", value: "Puluhan Grup Patrol" },
      { label: "Kehadiran Warga", value: "Ribuan Penonton" }
    ],
    features: [
      {
        title: "Video Mapping Fasad Panggung Arsitektural 3D",
        description: "Proyeksi visual dinamis beresolusi tinggi yang menghidupkan dinding panggung dengan ilusi gerak geometri kubah dan menara Islam.",
      },
      {
        title: "Sinkronisasi Visual Dinamis Ritme Musik Patrol",
        description: "Visualisasi panggung yang berdenyut responsif mengikuti ketukan alat musik bambu dan perkusi peserta lomba patrol sahur.",
      },
      {
        title: "Motion Countdown & Opening Show Spektakuler",
        description: "Sekuens pembukaan pertunjukan cahaya dengan laser beam dan sound design megah menyambut dimulainya kompetisi.",
      },
      {
        title: "Integrasi Tipografi Kaligrafi Modern",
        description: "Sentuhan tipografi Arab kontemporer yang memancarkan pendaran cahaya emas elegan di panggung malam hari.",
      },
      {
        title: "Dokumentasi Sinematik & Highlight Reels",
        description: "Pengambilan gambar sinematik multi-angle malam hari untuk disiarkan di platform media sosial komunitas.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-03-01",
    seoTitle: "FAKKIE Ramadhan Fest — Video Mapping & Desain Multimedia | MAROA",
    seoDescription: "Produksi konten desain multimedia dan arsitektural video mapping 3D spektakuler pada FAKKIE Ramadhan Fest di Pinrang oleh MAROA.",
  },
  {
    id: "mandar-culture-fest",
    slug: "mandar-culture-festival-2026",
    title: "Mandar Culture Festival 2026 — Desain Grafis Promosi & Visual Branding Warisan Maritim",
    category: "multimedia",
    summary: "Perancangan identitas visual, desain poster resmi, dan materi promosi kultural untuk festival kebudayaan maritim Mandar di Kabupaten Polewali Mandar.",
    clientDisplayName: "Dinas Pemuda, Olahraga & Pariwisata Kab. Polewali Mandar",
    year: "2026",
    heroImage: "/portfolio/covers/mandar-culture-festival-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/mandar-culture-festival-2026-cover-1600x900.webp",
    role: "Desain Grafis Poster Resmi & Media Publikasi Visual",
    sourceCredit: "Rilis Resmi Dinas Kebudayaan & Pariwisata Pemkab Polewali Mandar",
    sourceUrl: "https://polmankab.go.id/Front/kegiatandetail/1771980082871-press-conference--soft-launching-mandar-culture-festival-2026-menjaga-warisan-merajut-masa-depan",
    rightsStatus: "Karya Desain Promosi Resmi Klien",
    services: [
      "Official Poster & Key Visual Design",
      "Social Media Campaign Assets",
      "Stage Screen Graphic Backdrop",
      "Print Media Supervision"
    ],
    challenge: "Menampilkan filosofi kelautan Mandar dan ikon perahu Sandeq dalam format poster vertikal modern tanpa kehilangan identitas kultural lokal, serta mentransformasikannya ke format layar panggung 16:9 secara proporsional.",
    approach: "Mengembangkan tata letak poster vertikal dinamis dengan perpaduan warna tanah liat kultural dan merah menyala, kemudian menyusun komposisi non-destruktif 16:9 berlatar ambient agar seluruh judul, tipografi, dan sponsor penanggung jawab tampil utuh.",
    execution: "Menghasilkan master artwork cetak resolusi tinggi (1080x1350) untuk materi media luar ruang, serta paket aset visual panggung 16:9 (1600x900) untuk kebutuhan penayangan layar digital.",
    outcome: "Desain poster dipublikasikan secara resmi oleh Pemkab Polman dan menjadi materi visual utama promosi kebudayaan daerah hingga portal pariwisata nasional.",
    gallery: [
      "/portfolio/covers/mandar-culture-festival-2026-cover-1600x900.webp",
      "/portfolio/gallery/mandar-culture-festival-2026-cover-1600x900.jpg",
      "/portfolio/events/mandar-culture-fest.jpg"
    ],
    metrics: [
      { label: "Tema Kebudayaan", value: "Warisan Maritim Sandeq" },
      { label: "Sistem Layar", value: "Curved Stage LED Screen" },
      { label: "Lokasi", value: "Pesisir Sulawesi Barat" }
    ],
    features: [
      {
        title: "Motion Graphics 3D Armada Perahu Layar Sandeq",
        description: "Visualisasi sinematik perahu cadik tradisional tercepat di dunia yang membelah ombak di bawah pendaran cahaya rembulan.",
      },
      {
        title: "Visual Backdrop Pengiring Tarian Sayang-Sayang & Kuda Menari",
        description: "Grafis latar panggung yang dinamis dan anggun untuk memperkuat penjiwaan para penari tradisi di atas panggung.",
      },
      {
        title: "Digital Horizon Ombak Pesisir & Bintang",
        description: "Efek visual atmosferik yang menyatu dengan hembusan angin laut dan lanskap pantai lokasi panggung acara.",
      },
      {
        title: "Penerapan Motif Tenun Sa'be Mandar",
        description: "Pemanfaatan pola geometris khas tenun sutra Mandar sebagai bingkai ornamen panggung berestetika luhur.",
      },
      {
        title: "Sinkronisasi Multimedia Instrumen Musik Etnik",
        description: "Integrasi visual panggung yang berpadu serasi dengan tabuhan gendang dan petikan kecapi tradisional Mandar.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-05-18",
    seoTitle: "MANDAR Culture Fest — Produksi Konten Desain Multimedia | MAROA",
    seoDescription: "Produksi konten desain multimedia dan visual panggung tradisi maritim Sandeq pada Mandar Culture Fest oleh MAROA.",
  },
  {
    id: "festival-seni-ruang",
    slug: "festival-seni-ruang-produksi-konten-desain-multimedia",
    title: "Festival Seni Ruang — Produksi Konten Desain Multimedia & Instalasi Visual Ruang Kreatif Publik",
    category: "multimedia",
    summary: "Eksplorasi multimedia eksperimental dan proyeksi visual interaktif untuk mengaktivasi ruang terbuka publik menjadi wahana apresiasi seni kontemporer generasi muda.",
    clientDisplayName: "Kolektif Seniman & Komunitas Kreatif Ruang Publik Pinrang",
    year: "2025 - 2026",
    heroImage: "/portfolio/events/porsenijar-sidrap.png",
    thumbnail: "/portfolio/events/porsenijar-sidrap.png",
    services: [
      "Desain Konten Multimedia Eksperimental",
      "Instalasi Proyeksi Visual Interaktif",
      "Branding Identitas Visual Acara",
      "Multimedia Panggung Musik Akustik"
    ],
    challenge: "Mengaktivasi ruang terbuka publik di perkotaan agar bertransformasi menjadi galeri seni digital terbuka yang inklusif, memicu dialog sosial, dan mengapresiasi karya kreator lokal lintas disiplin seni rupa, musik, dan sastra.",
    approach: "Menggabungkan seni rupa kontemporer, proyeksi grafis generatif, dan tata audio-visual panggung terbuka yang menyatu secara harmonis dengan vegetasi dan arsitektur taman kota.",
    execution: "Memproduksi grafis gerak abstrak, tipografi responsif suara, identitas poster dan visual merchandise acara, serta panggung instalasi proyektor yang menyorot kanvas ruang publik perkotaan.",
    outcome: "Berhasil memikat ratusan insan kreatif, komunitas literasi, dan pelajar untuk berkumpul, berdiskusi, serta mengeksplorasi dimensi baru ekspresi seni multimedia di ruang publik Pinrang.",
    gallery: [
      "/portfolio/events/porsenijar-sidrap.png",
      "/portfolio/events/tpn-guru-belajar.png"
    ],
    metrics: [
      { label: "Format Acara", value: "Art Space & Multimedia" },
      { label: "Kolaborator", value: "Seniman & Musisi Lokal" },
      { label: "Respon Publik", value: "Ratusan Pegiat Kreatif" }
    ],
    features: [
      {
        title: "Proyeksi Grafis Generatif & Visual Dinamis",
        description: "Karya seni visual digital yang merespons nuansa lingkungan sekitar dan alunan musik pertunjukan secara langsung.",
      },
      {
        title: "Panggung Intim Musik Akustik & Teater Terbuka",
        description: "Pengaturan tata panggung bersahaja namun berkarakter kuat untuk penampilan musisi independen dan monolog sastra.",
      },
      {
        title: "Sistem Identitas Grafis & Publikasi Komunitas",
        description: "Bahasa visual kontemporer yang diterapkan pada media publikasi digital, poster fisik, dan instalasi penunjuk arah.",
      },
      {
        title: "Pemanfaatan Kanvas Ruang Publik Kota",
        description: "Menghidupkan sudut taman kota menjadi ruang interaksi budaya yang ramah bagi seluruh lapisan masyarakat.",
      },
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2025-11-20",
    seoTitle: "Festival Seni Ruang — Produksi Desain Multimedia & Instalasi | MAROA",
    seoDescription: "Produksi konten desain multimedia dan instalasi visual proyeksi seni kontemporer pada Festival Seni Ruang oleh MAROA.",
  },
  {
    id: "jabat-3-trail-adventure",
    slug: "jabat-3-jelajah-alam-batas-produksi-konten-desain-multimedia",
    title: "Jelajah Alam Batas (JABAT 3) Pinrang–Enrekang — Produksi Konten Desain Multimedia & Stage Visual Extreme Sport",
    category: "multimedia",
    summary: "Produksi konten visual panggung gerbang start-finish, motion graphics countdown ekstrem, dan multimedia malam apresiasi untuk ajang trail adventure akbar perbatasan Pinrang - Enrekang.",
    clientDisplayName: "Panitia JABAT 3 & Komunitas Trail Adventure Indonesia",
    year: "2026",
    heroImage: "/portfolio/events/tyro1-wgb.jpg",
    thumbnail: "/portfolio/events/tyro1-wgb.jpg",
    services: [
      "Produksi Konten Desain Multimedia",
      "Stage Visual Extreme Sport",
      "Opening Countdown Motion Graphics",
      "Visual Identity Gerbang Start & Finish"
    ],
    challenge: "Menciptakan atmosfer panggung dan visual sirkuit yang memacu adrenalin bagi ribuan peserta offroad dari berbagai provinsi yang melintasi jalur ekstrem perbukitan batas Pinrang-Enrekang.",
    approach: "Mengusung estetika visual bertema rugged adventure dan industrial grunge yang tangguh, memadukan elemen topografi pegunungan, semburan lumpur, dan visual maskot adventure berani.",
    execution: "Memproduksi animasi hitung mundur pelepasan rider pada layar LED panggung gerbang start, visual live entertainment panggung malam apresiasi, serta branding visual trofi dan seragam kejuaraan.",
    outcome: "Event JABAT 3 tampil sangat berkelas dan terorganisir rapi secara visual, mendapat sambutan luar biasa dari ribuan rider nasional dan apresiasi pemerintah daerah setempat.",
    gallery: [
      "/portfolio/events/tyro1-wgb.jpg"
    ],
    metrics: [
      { label: "Peserta Rider", value: "Ribuan Offroader Nusantara" },
      { label: "Jalur Lintasan", value: "Batas Pinrang - Enrekang" },
      { label: "Panggung Utama", value: "LED Screen Extreme Stage" }
    ],
    features: [
      {
        title: "Motion Graphics Hitung Mundur Pelepasan Start Line",
        description: "Animasi visual dinamis yang menggelegar di layar LED gerbang pelepasan untuk menyemangati setiap kloter rider yang melaju.",
      },
      {
        title: "Stage Visual LED Malam Hiburan & Apresiasi",
        description: "Latar visual panggung konser musik dan malam ramah tamah para pembalap dengan efek visual modern bertenaga tinggi.",
      },
      {
        title: "Visualisasi Peta Topografi Jalur Ekstrem",
        description: "Peta rute jalur petualangan yang dikemas grafis informatif menampilkan tanjakan curam dan titik pos pertolongan.",
      },
      {
        title: "Sistem Penayangan Mitra Sponsor & Live Recap",
        description: "Format rotasi logo sponsor resmi dan cuplikan langsung aksi para rider di medan lumpur yang ditayangkan ke layar panggung.",
      },
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2026-04-25",
    seoTitle: "JABAT 3 Jelajah Alam Batas — Desain Multimedia & Stage Visual | MAROA",
    seoDescription: "Produksi konten desain multimedia dan visual panggung kejuaraan offroad trail adventure JABAT 3 Pinrang-Enrekang oleh MAROA.",
  },
  {
    id: "wisuda-icp-senat",
    slug: "wisuda-sarjana-pengukuhan-guru-besar-institut-cokroaminoto-pinrang",
    title: "Wisuda Sarjana & Pengukuhan Guru Besar Institut Cokroaminoto Pinrang 2026",
    category: "events",
    summary: "Manajemen multimedia panggung, penayangan nama wisudawan real-time, dan dokumentasi siaran langsung multi-kamera untuk sidang senat terbuka wisuda sarjana dan pengukuhan guru besar.",
    clientDisplayName: "Institut Cokroaminoto Pinrang (ICP)",
    year: "2026",
    heroImage: "/portfolio/covers/wisuda-icp-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/wisuda-icp-2026-cover-1600x900.webp",
    role: "Manajemen Tata Multimedia Panggung & Produksi Siaran Multi-Kamera",
    sourceCredit: "Arsip Dokumentasi Sidang Senat Terbuka ICP Pinrang",
    rightsStatus: "Dokumentasi Resmi Kerjasama Kampus",
    services: [
      "Live Multi-Camera Video Production",
      "Graduate Name Display Automation",
      "Stage LED Multimedia Management",
      "Audio-Visual Protocol Recording"
    ],
    challenge: "Menjaga kekhidmatan prosesi akademik wisuda sekaligus memastikan penayangan profil wisudawan tersinkronisasi presisi detik per detik saat prosesi pemindahan kuncir.",
    approach: "Membangun sistem switching video multi-kamera latensi rendah dan antarmuka operator operator penayangan nama wisudawan berbasis nomor urut kursi.",
    execution: "Menghubungkan kamera panggung utama, kamera audiens keluarga, dan sistem proyeksi aula besar dengan audio terkalibrasi.",
    outcome: "Rangkaian prosesi wisuda berjalan tertib dan keluarga wisudawan menikmati tayangan visual panggung yang jernih dan berwibawa.",
    gallery: [
      "/portfolio/covers/wisuda-icp-2026-cover-1600x900.webp",
      "/portfolio/gallery/wisuda-icp-2026-cover-1600x900.jpg",
      "/portfolio/events/wisuda-icp.jpg"
    ],
    metrics: [
      { label: "Momen Sejarah", value: "Wisuda III & Guru Besar I" },
      { label: "Identitas Warna", value: "Emerald Green & 3D Gold" },
      { label: "Kategori", value: "Akademik & Kenegaraan" }
    ],
    features: [
      {
        title: "Tipografi Emas 3D Emboss & Ornamen Tirai Mewah",
        description: "Desain teks keemasan berdimensi realistis yang dipadukan dengan lipatan tirai sutra hijau tua untuk suasana panggung bermartabat.",
      },
      {
        title: "Integrasi Lambang Institusi ICP Berpendar Elegan",
        description: "Penempatan lambang resmi kampus dengan lingkaran pendar keemasan sebagai titik fokus kehormatan panggung dewan senat.",
      },
      {
        title: "Layout Panggung Senat Berdimensi Presisi",
        description: "Perhitungan rasio visual bidang panggung agar terbaca sangat tajam dan jelas dari sudut mana pun di dalam aula utama.",
      },
      {
        title: "Media Penayangan Profil Lulusan & Wisudawan Terbaik",
        description: "Format visual multimedia yang menampilkan capaian akademik dan indeks prestasi mahasiswa berprestasi selama prosesi.",
      },
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2026-01-15",
    seoTitle: "Wisuda III & Pengukuhan Guru Besar ICP — Desain Visual Panggung | MAROA",
    seoDescription: "Desain visual panggung emerald-gold dan multimedia akademik Rapat Senat Terbuka Luar Biasa Institut Cokroaminoto Pinrang oleh MAROA.",
  },
  {
    id: "tyro1-wgb-tournament",
    slug: "tyro1-water-gel-blaster-war-zone-official-partner-3d-visual",
    title: "TYRO1 Water Gel Blaster Arena 2026 — Identitas Visual 3D & Cuplikan Video Aksi",
    category: "multimedia",
    summary: "Pengembangan visual branding arena permainan taktis, desain materi promosi 3D, dan produksi teaser video sinematik untuk arena Water Gel Blaster modern pertama di Pinrang.",
    clientDisplayName: "Manajemen Arena Taktis TYRO1 Pinrang",
    year: "2026",
    heroImage: "/portfolio/covers/tyro1-wgb-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/tyro1-wgb-2026-cover-1600x900.webp",
    role: "Pengembangan Identitas Visual 3D, Desain Grafis Arena & Video Sinematik",
    sourceCredit: "Arsip Produksi Studio Multimedia MAROA & TYRO1 Pinrang",
    rightsStatus: "Kemitraan Komersial Resmi MAROA",
    services: [
      "3D Visual Asset Development",
      "Tactical Arena Branding & Signage",
      "Cinematic Action Video Production",
      "Tournament Visual Guidelines"
    ],
    challenge: "Mengkomunikasikan sensasi olahraga taktis yang seru, aman, dan kompetitif kepada komunitas anak muda dan keluarga di Pinrang dan sekitarnya.",
    approach: "Menggabungkan estetika militer futuristik dengan palet warna berdaya tarik tinggi dan potongan video laga berkecepatan tinggi.",
    execution: "Membuat render visual 3D perlengkapan taktis, papan panduan keselamatan arena, serta mengedit klip video promosi aksi pemain di lapangan.",
    outcome: "Arena TYRO1 sukses menjadi destinasi favorit komunitas pemuda dan membuka kejuaraan mini perdana dengan antusiasme tinggi.",
    gallery: [
      "/portfolio/covers/tyro1-wgb-2026-cover-1600x900.webp",
      "/portfolio/gallery/tyro1-wgb-video-2026-03s.jpg",
      "/portfolio/gallery/tyro1-wgb-video-2026-12s.jpg",
      "/portfolio/events/tyro1-wgb.jpg"
    ],
    metrics: [
      { label: "Total Hadiah", value: "10 Juta Rupiah" },
      { label: "Konsep Maskot", value: "3D Cyber Rooster Armor" },
      { label: "Peran MAROA", value: "Official Production Partner" }
    ],
    features: [
      {
        title: "Karakter Maskot 3D Cyber-Rooster 'Ayam Jantan'",
        description: "Pemodelan 3D ayam petarung futuristik berarmor baja mecha dengan blaster water gel canggih bernuansa oranye-biru.",
      },
      {
        title: "Duel Visual Elemen Frost vs Incendiary",
        description: "Komposisi panggung arena yang membelah nuansa biru es dingin di sisi kiri dan kobaran api ledakan di sisi kanan.",
      },
      {
        title: "Emblem Kejuaraan Logam 3D & Koin Medali Emas",
        description: "Rancangan medali emas digital 10 Juta Rupiah dan perisai turnamen beraksen emas tempaan untuk trofi juara.",
      },
      {
        title: "Identitas Lapangan Mattiro Deceng Tiroang",
        description: "Plakat visual penanda arena kejuaraan yang membanggakan potensi pemuda dan ruang olahraga lokal di Tiroang.",
      },
      {
        title: "Jajaran Kemitraan Kreatif & Media Partner",
        description: "Penyematan resmi logo MAROA Project bersama Peace Production, Ceritakirana, Frameline, dan Radio SBL di barisan partner.",
      },
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2026-03-16",
    seoTitle: "TYRO1 WGB War Zone 2026 — Desain 3D & Official Partner | MAROA",
    seoDescription: "Produksi desain visual 3D maskot arena dan official partner kompetisi Water Gel Blaster TYRO1 Tiroang Pinrang oleh MAROA.",
  },
  {
    id: "tpn-kgbn-pinrang",
    slug: "temu-pendidik-nusantara-kgbn-pinrang-mitra-kolaborasi",
    title: "Temu Pendidik Nusantara XIII Kab. Pinrang 2026 — Desain Visual Panggung & Kemitraan Daerah",
    category: "events",
    summary: "Desain visual panggung utama, materi seminar kependidikan, dan kemitraan teknologi publikasi untuk forum tahunan komunitas guru inovatif se-Kabupaten Pinrang.",
    clientDisplayName: "Komunitas Guru Belajar Nusantara (KGBN) Kabupaten Pinrang",
    year: "2026",
    heroImage: "/portfolio/covers/tpn-xiii-pinrang-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/tpn-xiii-pinrang-2026-cover-1600x900.webp",
    role: "Mitra Desain Visual, Tata Panggung Kultural & Kemitraan Teknis",
    sourceCredit: "Dokumentasi Resmi KGBN Pinrang & MAROA Media",
    rightsStatus: "Kemitraan Komunitas Pendidikan Daerah",
    services: [
      "Stage Backdrop Artwork & Banner Design",
      "Educational Seminar Presentation Layout",
      "Digital Registration Coordination Support",
      "Community Documentation Packaging"
    ],
    challenge: "Menghadirkan suasana ruang belajar yang bersahabat, kolaboratif, namun berstandar konferensi profesional bagi ratusan pendidik dari berbagai pelosok daerah.",
    approach: "Memilih kombinasi tipografi bersahabat dengan elemen visual batik/ornamen edukasi nusantara dalam komposisi panggung yang lapang dan terang.",
    execution: "Menyiapkan file cetak backdrop panggung berskala besar (1600x900 / 2048x1365), sertifikat digital peserta, dan materi tayangan presentasi narasumber utama.",
    outcome: "Konferensi berjalan sukses dan menghasilkan ruang berbagi praktik baik pembelajaran antar-guru dengan kepuasan peserta yang tinggi.",
    gallery: [
      "/portfolio/covers/tpn-xiii-pinrang-2026-cover-1600x900.webp",
      "/portfolio/gallery/tpn-xiii-pinrang-backdrop-2026-cover-1600x900.jpg",
      "/portfolio/events/tpn-guru-belajar.png"
    ],
    metrics: [
      { label: "Mitra Kolaborasi", value: "40+ Lembaga & UMKM" },
      { label: "Cakupan", value: "Pendidik Se-Kabupaten Pinrang" },
      { label: "Peran MAROA", value: "Mitra Daerah Resmi" }
    ],
    features: [
      {
        title: "Harmonisasi Visual Puluhan Logo Mitra Daerah",
        description: "Penataan tipografi dan tata letak logo lintas dinas, kementerian, perbankan, dan UMKM dalam keselarasan estetika tinggi.",
      },
      {
        title: "Desain Identitas Maskot Pelajar & Pendidik",
        description: "Ilustrasi maskot edukatif ramah yang menyambut para peserta guru dalam suasana hangat dan menginspirasi.",
      },
      {
        title: "Materi Visual Kelas Berbagi Praktik Baik",
        description: "Template slide dan materi panduan presentasi yang memudahkan para guru mendemonstrasikan inovasi mengajar.",
      },
      {
        title: "Sinergi Media Bersama Radio Suara Bumi Lasinrang",
        description: "Diseminasi informasi agenda konferensi ke ruang publik secara luas melalui siaran radio daerah terintegrasi.",
      },
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2025-10-15",
    seoTitle: "Temu Pendidik Nusantara Pinrang — Mitra Kolaborasi Daerah | MAROA",
    seoDescription: "Kemitraan strategis daerah dan produksi visual ekosistem Temu Pendidik Nusantara KGBN Kabupaten Pinrang bersama MAROA.",
  },
  {
    id: "gemudaya-festival-majene",
    slug: "gemudaya-festival-majene-2026",
    title: "GEMUDAYA (Generasi Muda Berdaya) Festival Majene 2026 — Desain Identitas Visual & Kampanye Promosi",
    category: "multimedia",
    summary: "Perancangan identitas visual, poster kampanye resmi 16:9, dan materi publikasi digital untuk festival pemberdayaan dan ekspresi pemuda di Kabupaten Majene.",
    clientDisplayName: "Komunitas Kreatif & Pemuda Majene Bersatu",
    year: "2026",
    heroImage: "/portfolio/covers/gemudaya-festival-majene-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/gemudaya-festival-majene-2026-cover-1600x900.webp",
    role: "Perancangan Identitas Visual, Poster Promosi 16:9 & Desain Feed Media Sosial",
    sourceCredit: "Arsip Desain Komunikasi Visual Studio MAROA",
    rightsStatus: "Karya Desain Orisinal MAROA",
    services: [
      "Event Visual Branding",
      "Official 16:9 Poster Design",
      "Social Media Campaign Assets",
      "Typography & Color Palette System"
    ],
    challenge: "Menghadirkan citra visual yang memancarkan energi muda, modernitas, dan optimisme tanpa meninggalkan sentuhan nilai kebersamaan khas tanah Mandar.",
    approach: "Mengembangkan tipografi kustom berkarakter tebal dipadu palet warna cerah yang mencerminkan semangat kolaborasi dan inovasi generasi muda.",
    execution: "Membuat master poster 16:9 (1600x900) resolusi tinggi untuk cetak baliho serta format vertikal untuk kebutuhan publikasi di platform media sosial.",
    outcome: "Materi promosi diterima dengan antusias oleh komunitas pemuda se-Kabupaten Majene dan memperkuat gaung pergerakan kepemudaan daerah.",
    gallery: [
      "/portfolio/covers/gemudaya-festival-majene-2026-cover-1600x900.webp",
      "/portfolio/gallery/gemudaya-festival-majene-2026-cover-1600x900.jpg"
    ],
    metrics: [
      { label: "Format Master", value: "1600x900 WebP + Vector" },
      { label: "Cakupan Aset", value: "Baliho + Feed + Story" },
      { label: "Target Audiens", value: "Komunitas Pemuda Majene" }
    ],
    features: [
      {
        title: "Tipografi Kustom Berdaya Tarik Tinggi",
        description: "Penataan judul bergaya modern yang mudah dikenali dari kejauhan pada media luar ruang.",
      },
      {
        title: "Palet Warna Harmonis Multikultural",
        description: "Gradasi warna yang melambangkan keberagaman bakat dan semangat kepemudaan kontemporer.",
      },
      {
        title: "Aset Multi-Format Siap Cetak & Digital",
        description: "Pemisahan layer grafis untuk kemudahan adaptasi ke berbagai rasio media penayangan.",
      }
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-02-28",
    seoTitle: "GEMUDAYA Festival Majene 2026 — Desain Identitas Visual | MAROA",
    seoDescription: "Perancangan identitas visual, poster kampanye 16:9, dan materi publikasi digital festival pemuda Majene oleh MAROA.",
  },
  {
    id: "maulid-salabose-majene",
    slug: "maulid-nabi-salabose-majene-2026",
    title: "Peringatan Tradisi Maulid Nabi Besar Muhammad SAW Masjid Kuno Salabose Majene 2026",
    category: "multimedia",
    summary: "Desain visual backdrop panggung dan materi grafis ornamen bernuansa kultural Mandar untuk peringatan tradisi Maulid akbar di kawasan bersejarah Salabose.",
    clientDisplayName: "Panitia Hari Besar Islam & Pengurus Masjid Salabose Majene",
    year: "2026",
    heroImage: "/portfolio/covers/maulid-salabose-majene-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/maulid-salabose-majene-2026-cover-1600x900.webp",
    role: "Desain Visual Panggung, Tata Kaligrafi Kultural & Supervisi Cetak Luar Ruang",
    sourceCredit: "Dokumentasi Desain MAROA & Panitia Peringatan Maulid Salabose",
    rightsStatus: "Karya Desain Orisinal MAROA",
    services: [
      "Stage Backdrop Artwork Design",
      "Cultural Calligraphy Layout",
      "High-Resolution Print Preparation",
      "Venue Signage & Welcome Banners"
    ],
    challenge: "Mengharmonisasikan kesakralan tradisi keagamaan lokal dengan estetika panggung modern yang anggun dan proporsional bagi ribuan jamaah lintas daerah.",
    approach: "Memadukan ornamen geometris Islam klasik dengan sentuhan ragam hias khas Mandar dalam komposisi panggung simetris seimbang.",
    execution: "Menghasilkan format cetak backdrop panggung berskala besar (1600x900) siap cetak tanpa degradasi resolusi dan format proyeksi layar.",
    outcome: "Suasana peringatan Maulid berlangsung khidmat dan visual panggung diapresiasi luas oleh jamaah, tokoh adat, serta pejabat pemerintah yang hadir.",
    gallery: [
      "/portfolio/covers/maulid-salabose-majene-2026-cover-1600x900.webp",
      "/portfolio/gallery/maulid-salabose-majene-2026-cover-1600x900.jpg"
    ],
    metrics: [
      { label: "Skala Cetak", value: "Backdrop Panggung Utama" },
      { label: "Ragam Hias", value: "Kaligrafi + Ornamen Mandar" },
      { label: "Lokasi", value: "Salabose, Majene, Sulbar" }
    ],
    features: [
      {
        title: "Komposisi Kaligrafi Arab Simetris",
        description: "Tata letak lafaz suci yang diposisikan proporsional sebagai titik fokus utama panggung.",
      },
      {
        title: "Integrasi Ornamen Kultural Lokal",
        description: "Aksen motif khas Mandar pada tepian bingkai untuk mempertegas identitas sejarah Salabose.",
      },
      {
        title: "Spesifikasi Cetak Ultra-Sharp",
        description: "Optimasi ketajaman warna agar tetap kontras dan tidak pudar di bawah pencahayaan panggung malam.",
      }
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2026-03-02",
    seoTitle: "Maulid Nabi Salabose Majene 2026 — Desain Visual Panggung | MAROA",
    seoDescription: "Desain visual backdrop panggung kultural peringatan Maulid Nabi Masjid Kuno Salabose Majene oleh MAROA.",
  },
  {
    id: "bhayangkara-80-polres-sidrap",
    slug: "hari-bhayangkara-ke-80-polres-sidenreng-rappang",
    title: "Hari Bhayangkara Ke-80 Polres Sidrap 2026 — Produksi Motion Graphics & Visual Sinematik Panggung",
    category: "multimedia",
    summary: "Produksi motion graphics pembuka, cuplikan video sinematik pengabdian, dan tata visual layar videotron untuk rangkaian peringatan Hari Bhayangkara Ke-80 di Kabupaten Sidrap.",
    clientDisplayName: "Kepolisian Resor Sidenreng Rappang (Polres Sidrap)",
    year: "2026",
    heroImage: "/portfolio/gallery/bhayangkara-80-polres-sidrap-2026-03s.jpg",
    thumbnail: "/portfolio/gallery/bhayangkara-80-polres-sidrap-2026-03s.jpg",
    role: "Produksi Motion Graphics, Editing Video Sinematik & Visual Layar Videotron",
    sourceCredit: "Cuplikan Video Arsip Produksi Studio Multimedia MAROA",
    rightsStatus: "Dokumentasi Produksi Asli MAROA",
    services: [
      "Cinematic Video Editing",
      "Motion Graphics Opening Bumper",
      "LED Videotron Screen Content",
      "Audio-Visual Sync for Official Ceremony"
    ],
    challenge: "Menyajikan narasi pengabdian kepolisian yang berwibawa, tegas, namun tetap humanis dalam format tayangan resolusi tinggi yang selaras dengan alur protokoler resmi.",
    approach: "Memanfaatkan ritme visual dinamis dengan tipografi berkarakter kokoh dan gradasi palet warna emas-biru tua kepolisian.",
    execution: "Memproduksi bumper video pembuka, transisi segmen sambutan, serta klip dokumentasi pengamanan terpadu untuk penayangan di layar videotron aula utama.",
    outcome: "Penayangan multimedia berjalan mulus dan memperkuat citra profesional institusi di hadapan jajaran Forkopimda dan tamu undangan.",
    gallery: [
      "/portfolio/gallery/bhayangkara-80-polres-sidrap-2026-03s.jpg",
      "/portfolio/gallery/bhayangkara-80-polres-sidrap-2026-12s.jpg"
    ],
    metrics: [
      { label: "Format Video", value: "Full HD Sinematik 60fps" },
      { label: "Medium Tayang", value: "Videotron Panggung Aula" },
      { label: "Klien", value: "Polres Sidrap" }
    ],
    features: [
      {
        title: "Bumper Video Pembuka Dinamis",
        description: "Sekuens animasi logo dan angka 80 tahun Hari Bhayangkara dengan efek suara berbobot menggelegar.",
      },
      {
        title: "Visualisasi Pengabdian Presisi",
        description: "Potongan video aksi pelayanan masyarakat dan ketertiban wilayah yang tertata terstruktur.",
      },
      {
        title: "Template Layar Protokoler",
        description: "Tata grafis pendamping saat momen pengucapan ikrar, sambutan pimpinan, dan ramah tamah.",
      }
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-07-01",
    seoTitle: "Hari Bhayangkara Ke-80 Polres Sidrap — Produksi Visual Multimedia | MAROA",
    seoDescription: "Produksi motion graphics, video sinematik, dan visual videotron perhelatan Hari Bhayangkara Ke-80 Polres Sidrap oleh MAROA.",
  },
  {
    id: "antrian-dppkb-majene",
    slug: "sistem-antrean-digital-pelayanan-dppkb-majene",
    title: "Sistem Antrean Digital Pelayanan Publik Terpadu DPPKB Kabupaten Majene",
    category: "digital",
    summary: "Pengembangan sistem antrean berbasis aplikasi web untuk otomasi loket pelayanan administrasi kependudukan dan penyuluhan KB pada Dinas Pengendalian Penduduk dan KB Majene.",
    clientDisplayName: "Dinas Pengendalian Penduduk & KB Kabupaten Majene",
    year: "2025 - 2026",
    heroImage: "/portfolio/sbl-portal-desktop.webp",
    thumbnail: "/portfolio/sbl-portal-desktop.webp",
    mobileImage: "/portfolio/sbl-portal-mobile.webp",
    role: "Rekayasa Perangkat Lunak Web, Antarmuka Multi-Loket & Pengelolaan Basis Data",
    sourceCredit: "Repositori Kode Sumber Resmi MAROA (GitHub: maroamabbarakka/Antrian-DPPKB-)",
    sourceUrl: "https://github.com/maroamabbarakka/Antrian-DPPKB-",
    githubUrl: "https://github.com/maroamabbarakka/Antrian-DPPKB-",
    rightsStatus: "Pengembangan Perangkat Lunak Resmi MAROA",
    services: [
      "Web Queue Management System",
      "Multi-Counter Audio Announcement",
      "Public TV Display Dashboard",
      "Real-Time Wait-Time Tracking"
    ],
    challenge: "Mengurai penumpukan warga pada jam sibuk loket pelayanan dengan sistem pemanggilan otomatis yang tertib, mudah dipantau, dan tidak memerlukan biaya perangkat keras mahal.",
    approach: "Membangun sistem berbasis web browser responsif yang dapat dioperasikan langsung pada layar monitor publik dan perangkat kerja petugas loket.",
    execution: "Mengembangkan algoritma antrean multi-layanan, integrasi modul text-to-speech bahasa Indonesia untuk pemanggilan nomor antrean, serta pencatatan waktu tunggu per warga.",
    outcome: "Alur antrean masyarakat menjadi jauh lebih teratur, waktu tunggu warga menurun drastis, dan petugas memiliki rekapitulasi data layanan harian yang transparan.",
    gallery: [
      "/portfolio/sbl-portal-desktop.webp",
      "/portfolio/sbl-portal-mobile.webp"
    ],
    metrics: [
      { label: "Arsitektur", value: "Web-Based Multi-Loket" },
      { label: "Audio", value: "Otomatisasi Panggilan Suara" },
      { label: "Repositori", value: "Tervalidasi di GitHub" }
    ],
    features: [
      {
        title: "Tampilan Layar Antrean Publik",
        description: "Antarmuka layar monitor lobi yang menampilkan nomor antrean aktif, loket tujuan, dan video edukasi KB.",
      },
      {
        title: "Panel Kendali Petugas Loket",
        description: "Tombol panggilan antrean berikutnya, panggil ulang, dan penandaan selesai layanan yang ringkas.",
      },
      {
        title: "Suara Panggilan Otomatis",
        description: "Sistem audio yang membacakan nomor antrean dan nama loket dengan artikulasi jelas.",
      }
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2026-01-28",
    seoTitle: "Sistem Antrean Digital DPPKB Majene — Rekayasa Aplikasi Web | MAROA",
    seoDescription: "Pengembangan sistem antrean publik digital berbasis web untuk DPPKB Kabupaten Majene oleh MAROA.",
  }

];

export const initialInsights = [
  {
    id: "insight-01",
    slug: "mengintegrasikan-teknologi-dalam-event-modern",
    title: "Mengintegrasikan Teknologi dalam Penyelenggaraan Event Modern",
    excerpt: "Bagaimana perpaduan manajemen panggung, tata multimedia, dan sistem registrasi QR nirkontak meningkatkan kepuasan peserta konferensi.",
    body: "Penyelenggaraan acara di era modern tidak lagi sekadar menata panggung fisik. Kehadiran teknologi digital seperti sistem check-in nir-sentuh, siaran langsung interaktif dengan latensi rendah, serta dokumentasi yang cepat dipublikasikan telah menjadi standar baru bagi kepuasan para pemangku kepentingan. MAROA mengadopsi pendekatan terintegrasi untuk memastikan setiap elemen berjalan harmonis tanpa friksi antartim.",
    coverImage: "/mockups/01-home-responsive.png",
    tags: ["Events", "Technology", "Experience"],
    authorDisplayName: "Tim Redaksi MAROA",
    status: "published",
    publishedAt: "2026-02-15",
    seoTitle: "Mengintegrasikan Teknologi dalam Event Modern | Wawasan MAROA",
    seoDescription: "Ulasan mendalam mengenai peran teknologi dalam mentransformasi pengalaman penyelenggaraan event korporat dan pemerintahan.",
  },
  {
    id: "insight-02",
    slug: "pentingnya-keamanan-dan-privasi-data-pada-web-korporat",
    title: "Pentingnya Keamanan Informasi & Privasi Data pada Situs Web Korporat",
    excerpt: "Tinjauan kepatuhan UU PDP No. 27/2022 dan kesiapan PSE untuk melindungi reputasi dan integritas data perusahaan.",
    body: "Situs web korporat adalah etalase digital utama perusahaan. Di tengah penegakan hukum pelindungan data pribadi di Indonesia, kepatuhan privasi bukan sekadar formalitas hukum melainkan fondasi kepercayaan klien. Mulai dari minimisasi data formulir, penerapan enkripsi TLS, hingga kejelasan kebijakan privasi adalah pilar pertahanan utama reputasi bisnis.",
    coverImage: "/mockups/03-portfolio-responsive.png",
    tags: ["Digital", "Security", "Compliance"],
    authorDisplayName: "Tim Engineering MAROA",
    status: "published",
    publishedAt: "2026-03-01",
    seoTitle: "Keamanan Informasi & Kepatuhan Privasi Web Korporat | MAROA",
    seoDescription: "Memahami pentingnya penerapan prinsip privacy-by-design dan kepatuhan regulasi data pada platform web korporat.",
  }
];
