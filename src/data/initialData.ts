import { Service, Project, SiteSettings } from "@/lib/types";

export const initialSiteSettings: SiteSettings = {
  companyName: "PT MAROA MEDIA MABBARAKKA",
  brandName: "MAROA",
  tagline: "Creative Technology & Experience Company",
  primaryEmail: "maroamabbarakka@gmail.com",
  phonePublic: "+62 813-4351-1099",
  addressPublic: "Pinrang, Sulawesi Selatan, Indonesia",
  nibNumber: "1509260001449",
  socialLinks: {
    instagram: "https://www.instagram.com/maroaproject/",
    whatsapp: "https://wa.me/6281343511099",
    linkedin: "https://linkedin.com/company/maroa",
    youtube: "https://youtube.com/@maroa",
  },
  pseRegistrationNumber: "029903.01/DJAI.PSE/09/2026",
  pseRegistered: true,
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
    id: "festival-literasi-pinrang-2026",
    slug: "festival-literasi-pinrang-2026-lasinrang-merdeka-fest",
    title: "Festival Literasi Pinrang 2026 — Lasinrang Merdeka Fest (HUT Ke-81 RI)",
    category: "events",
    summary: "Manajemen festival literasi ruang publik Lasinrang Merdeka Fest bertema 'Literasi Menggerakkan, Seni Menyatukan, UMKM Menguatkan' dalam rangka Pekan Festival HUT Ke-81 Kemerdekaan RI di Lasinrang Park.",
    clientDisplayName: "Dinas Perpustakaan dan Kearsipan Kabupaten Pinrang",
    year: "2026",
    heroImage: "/portfolio/covers/festival-literasi-pinrang-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/festival-literasi-pinrang-2026-cover-1600x900.webp",
    role: "Event Organizer, Panggung Seni Videotron & Visual Branding",
    sourceCredit: "Dinas Perpustakaan dan Kearsipan Kabupaten Pinrang",
    rightsStatus: "Arsip Kreatif & Manajemen Acara MAROA",
    services: [
      "Event Organizer (EO) Terpadu",
      "Stage Videotron & Lighting",
      "Lasinrang Merdeka Fest Branding",
      "UMKM & Creative Booth Activation"
    ],
    challenge: "Mentransformasikan ruang terbuka hijau Lasinrang Park menjadi episentrum festival kemerdekaan yang memadukan buku, pentas seni, dan bazaar UMKM kuliner kreatif secara berdaya saing tinggi.",
    approach: "Merancang visual branding ikonik pejuang Lasinrang memegang buku diapit bendera pusaka, dipadu panggung konser seni terbuka dan tata cahaya malam hari.",
    execution: "Menyelenggarakan rangkaian festival 5 hari (11-15 Agustus 2026), mengoperasikan videotron panggung seni budaya, dan memfasilitasi puluhan stan UMKM.",
    outcome: "Menjadi magnet perayaan HUT RI ke-81 terfavorit di Kabupaten Pinrang dengan puluhan ribu kunjungan warga dari berbagai daerah.",
    gallery: [
      "/portfolio/covers/festival-literasi-pinrang-2026-cover-1600x900.webp",
      "/portfolio/gallery/festival-literasi-pinrang-2026-banner-1600x900.webp"
    ],
    galleryCaptions: {
      "/portfolio/covers/festival-literasi-pinrang-2026-cover-1600x900.webp": "Master Visual 16:9 — Lasinrang Merdeka Fest Festival Literasi 2026",
      "/portfolio/gallery/festival-literasi-pinrang-2026-banner-1600x900.webp": "Identitas Resmi Acara — Lambang Lasinrang Merdeka Fest HUT Ke-81 RI"
    },
    metrics: [
      { label: "Peran MAROA", value: "Event Organizer & Videotron" },
      { label: "Waktu Acara", value: "11 - 15 Agustus 2026" },
      { label: "Lokasi", value: "Lasinrang Park, Pinrang" }
    ],
    features: [
      {
        title: "Pentas Seni Terbuka Lasinrang Merdeka Fest",
        description: "Panggung musik, tari kolosal kemerdekaan, dan teater literasi siswa di bawah langit malam kota.",
      },
      {
        title: "Ekosistem Pemberdayaan UMKM Pinrang",
        description: "Zonasi puluhan tenant kuliner dan cinderamata kreatif lokal yang tertata rapi dan ramai pengunjung.",
      }
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-08-15",
    seoTitle: "Festival Literasi Pinrang 2026 — Lasinrang Merdeka Fest | MAROA",
    seoDescription: "Penyelenggaraan Lasinrang Merdeka Fest Festival Literasi Pinrang 2026 di Lasinrang Park oleh MAROA.",
  },
  {
    id: "brilian-culture-fest-pinrang-2026",
    slug: "brilian-culture-fest-pinrang-2026",
    title: "BRILiaN Culture Fest 2026 — Movie Character Night (Visualisasi Konsep & Motion 3D)",
    category: "integrated",
    summary: "Pengembangan visualisasi konsep 3D tata panggung, tata cahaya tematik tokoh film, dan sekuens animasi motion graphic untuk malam apresiasi budaya insan perbankan.",
    clientDisplayName: "Bank Rakyat Indonesia (BRI) Branch Office Pinrang",
    year: "2026",
    heroImage: "/portfolio/covers/brilian-culture-fest-pinrang-2026--cover.webp",
    thumbnail: "/portfolio/covers/brilian-culture-fest-pinrang-2026--cover.webp",
    role: "Desain Visual Panggung & Visualisasi Konsep 3D",
    isConceptOnly: true,
    sourceCredit: "BRI Branch Office Pinrang & Studio Kreatif MAROA",
    rightsStatus: "Karya Desain 3D Render & Animasi Orisinal MAROA",
    services: [
      "3D Stage Concept Visualization",
      "Thematic Atmosphere Rendering",
      "Opening Motion Graphics",
      "Dynamic Stage Loop Animation"
    ],
    challenge: "Mentransformasikan tema 'Movie Character Night' ke dalam visualisasi ruang panggung megah yang futuristik, teatrikal, dan memacu kebanggaan budaya insan BRILiaN.",
    approach: "Membuat pemodelan 3D arsitektur panggung dengan pencahayaan dramatis serta animasi motion graphic pembuka bertema sinematik layar lebar.",
    execution: "Merender 3 sudut pandang visual konsep panggung dan memproduksi rangkaian looping motion gerak beresolusi 16:9.",
    outcome: "Visualisasi rancangan 3D memberikan gambaran panggung yang impresif dan memukau bagi manajemen institusi.",
    gallery: [
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--extra-01.webp",
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--extra-02.webp",
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--extra-03.webp",
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--motion-frame-03s.webp",
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--motion-frame-15s.webp",
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--motion-frame-29s.webp"
    ],
    galleryCaptions: {
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--extra-01.webp": "Visualisasi Konsep 3D — Sudut Pandang Center Stage Panggung Utama",
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--extra-02.webp": "Visualisasi Konsep 3D — Tata Pencahayaan & Dekorasi Tematik Film",
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--extra-03.webp": "Visualisasi Konsep 3D — Perspektif Ruang Tamu & Area Apresiasi",
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--motion-frame-03s.webp": "Cuplikan Motion Graphic — Pembuka Acara Movie Character Night",
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--motion-frame-15s.webp": "Cuplikan Motion Graphic — Efek Partikel & Tipografi Sinematik",
      "/portfolio/gallery/brilian-culture-fest-pinrang-2026--motion-frame-29s.webp": "Cuplikan Motion Graphic — Visual Dinamis Layar LED Panggung"
    },
    metrics: [
      { label: "Peran MAROA", value: "Desain Konsep 3D & Motion" },
      { label: "Klasifikasi Bukti", value: "Visualisasi 3D Render & Motion" },
      { label: "Format Master", value: "Render 16:9 & Motion HD" }
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-08-15",
    seoTitle: "BRILiaN Culture Fest 2026 — Konsep 3D & Motion Visual | MAROA",
    seoDescription: "Visualisasi konsep 3D tata panggung dan desain motion graphic BRILiaN Culture Fest 2026 Movie Character Night oleh MAROA.",
  },
  {
    id: "majene-run-2026",
    slug: "majene-run-2026",
    title: "Majene Run 2026 — Desain Poster Kampanye Visual Olahraga Pesisir",
    category: "multimedia",
    summary: "Perancangan poster promosi resmi dan aset media grafis kampanye lomba lari pesisir pantai Majene Run 2026 di Kabupaten Majene, Sulawesi Barat.",
    clientDisplayName: "Penyelenggara Majene Run 2026",
    year: "2026",
    heroImage: "/portfolio/covers/majene-run-2026--cover.webp",
    thumbnail: "/portfolio/covers/majene-run-2026--cover.webp",
    role: "Desain Poster Kampanye Visual",
    sourceCredit: "Penyelenggara Resmi Majene Run 2026 & Arsip Desain MAROA",
    sourceUrl: "https://majenerun.com/",
    rightsStatus: "Karya Desain Poster Promosi Orisinal MAROA",
    services: [
      "Campaign Poster Design",
      "Sport Event Key Visual",
      "Digital Banner Media"
    ],
    challenge: "Menonjolkan daya tarik lanskap garis pantai Majene berpadu dengan atmosfer kompetisi lari jalan raya yang profesional dan dinamis.",
    approach: "Mengombinasikan tipografi sport berkarakter tajam, gradasi warna maritim cerah, dan ilustrasi pelari yang merepresentasikan ketahanan fisik.",
    execution: "Merilis poster master 16:9 non-crop resolusi tinggi untuk media cetak baliho, display digital, dan konten kampanye pendaftaran daring.",
    outcome: "Desain poster menjadi elemen promosi kunci yang memikat antusiasme ribuan pelari dari berbagai daerah di pulau Sulawesi.",
    gallery: [
      "/portfolio/covers/majene-run-2026--cover.webp"
    ],
    galleryCaptions: {
      "/portfolio/covers/majene-run-2026--cover.webp": "Master Artwork Poster 16:9 — Identitas Visual Majene Run 2026"
    },
    metrics: [
      { label: "Peran MAROA", value: "Desain Poster Visual" },
      { label: "Format Master", value: "16:9 Ultra-Sharp WebP" },
      { label: "Lokasi Pelaksanaan", value: "Kabupaten Majene, Sulbar" }
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2026-08-09",
    seoTitle: "Majene Run 2026 — Desain Poster Kampanye Visual | MAROA",
    seoDescription: "Perancangan desain poster promosi dan identitas visual lomba lari Majene Run 2026 oleh MAROA.",
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
    id: "festival-penyu-mampie",
    slug: "festival-penyu-mampie-2026",
    title: "Festival Penyu Mampie 2026 — Desain Motion Graphic & Visual Kampanye Konservasi Pesisir",
    category: "multimedia",
    summary: "Produksi desain motion graphic panggung edukasi, animasi narasi konservasi penyu laut, dan visualisasi kesadaran ekosistem pesisir pada Festival Penyu Mampie di Kabupaten Polewali Mandar.",
    clientDisplayName: "Sahabat Penyu Mampie & Dinas Pariwisata Kab. Polewali Mandar",
    year: "2026",
    heroImage: "/portfolio/covers/festival-penyu-mampie-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/festival-penyu-mampie-2026-cover-1600x900.webp",
    role: "Desain Motion Graphic",
    sourceCredit: "Dokumentasi Publikasi Sahabat Penyu Mampie & Pemkab Polman",
    sourceUrl: "https://polmankab.go.id/Front/kegiatandetail/1750214251979-festival-penyu-mampie-2025-harapan-baru-dari-pesisir",
    rightsStatus: "Karya Desain Motion Orisinal MAROA",
    services: [
      "Motion Graphics Design",
      "Conservation Story Animation",
      "Stage LED Display Graphics",
      "Environmental Campaign Visuals"
    ],
    challenge: "Menyampaikan pesan konservasi fauna laut yang dilindungi dan urgensi perlindungan pantai dari sampah plastik secara menyentuh, edukatif, dan menarik bagi lintas generasi.",
    approach: "Mengembangkan animasi motion graphic sinematik bertema perjalanan hidup penyu laut berpadu palet warna biru samudra dan estetika lanskap pesisir Mampie.",
    execution: "Memproduksi sekuens animasi penayangan panggung berdurasi penuh yang diputar saat seremoni pelepasan tukik dan sesi dialog edukasi lingkungan.",
    outcome: "Visual motion graphic mengundang antusiasme tinggi peserta dan memperkuat daya gugah kepedulian lingkungan di pesisir barat Sulawesi.",
    gallery: [
      "/portfolio/covers/festival-penyu-mampie-2026-cover-1600x900.webp",
      "/portfolio/gallery/festival-penyu-mampie-2026-cover-1600x900.jpg"
    ],
    metrics: [
      { label: "Peran MAROA", value: "Desain Motion Graphic" },
      { label: "Fokus Tema", value: "Konservasi Tukik & Laut" },
      { label: "Lokasi", value: "Pantai Mampie, Polman, Sulbar" }
    ],
    features: [
      {
        title: "Animasi Narasi Siklus Hidup Penyu",
        description: "Visualisasi perjalanan tukik menembus ombak samudera dengan transisi grafis gerak yang halus.",
      },
      {
        title: "Pesan Konservasi Visual Edukatif",
        description: "Infografis bergerak mengenai bahaya limbah plastik dan pentingnya menjaga habitat peneluran.",
      },
      {
        title: "Grafis Panggung LED Terbuka",
        description: "Optimasi kontras dan kecerahan warna untuk visibilitas maksimal di bawah cahaya panggung pesisir pantai.",
      }
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-06-14",
    seoTitle: "Festival Penyu Mampie 2026 — Desain Motion Graphic | MAROA",
    seoDescription: "Produksi desain motion graphic panggung edukasi dan kampanye konservasi pesisir Festival Penyu Mampie oleh MAROA.",
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
    id: "mtq-xi-sulbar",
    slug: "mtq-xi-tingkat-provinsi-sulawesi-barat-2026",
    title: "MTQ XI Tingkat Provinsi Sulawesi Barat 2026 — Desain Motion Graphic & Visual Mimbar Tilawah",
    category: "multimedia",
    summary: "Produksi desain motion graphic panggung utama, animasi bumper cabang musabaqah tilawah, dan ornamen visual kaligrafi digital pada perhelatan akbar MTQ XI Provinsi Sulawesi Barat.",
    clientDisplayName: "Lembaga Pengembangan Tilawatil Qur'an (LPTQ) & Kanwil Kemenag Sulbar",
    year: "2026",
    heroImage: "/portfolio/covers/mtq-xi-sulbar-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/mtq-xi-sulbar-2026-cover-1600x900.webp",
    role: "Desain Motion Graphic",
    sourceCredit: "Kanwil Kementerian Agama Provinsi Sulawesi Barat",
    sourceUrl: "https://sulbar.kemenag.go.id/index.php/wilayah/mtq-xi-tingkat-provinsi-sulbar-siap-digelar-kemenag-pastikan-kesiapan-teknis-dan-administrasi-9tyCh",
    rightsStatus: "Karya Desain Motion Orisinal MAROA",
    services: [
      "Motion Graphics Design",
      "Quranic Stage Visual Art",
      "Competition Category Bumpers",
      "Ceremony LED Backdrop Animation"
    ],
    challenge: "Menghadirkan tata visual mimbar tilawah yang megah, islami, dan berwibawa tinggi dengan pergerakan motion grafis yang anggun tanpa mengaburkan fokus lantunan suci Al-Qur'an.",
    approach: "Mengolah ragam hias arsitektur islami nusantara dan kaligrafi tsuluts ke dalam komposisi gerak melayang halus dengan pencahayaan emas-zamrud berlatar malam.",
    execution: "Menyusun rangkaian animasi pembuka defile kafilah 6 kabupaten, bumper penayangan nama dewan hakim dan peserta, serta visual latar mimbar tilawah.",
    outcome: "Atmosfer panggung utama MTQ XI Sulbar tampil syiar, agung, dan menuai apresiasi tinggi dari para kafilah serta pimpinan Kemenag dan Pemprov Sulbar.",
    gallery: [
      "/portfolio/covers/mtq-xi-sulbar-2026-cover-1600x900.webp",
      "/portfolio/gallery/mtq-xi-sulbar-2026-cover-1600x900.jpg"
    ],
    metrics: [
      { label: "Peran MAROA", value: "Desain Motion Graphic" },
      { label: "Skala Perhelatan", value: "Tingkat Provinsi Sulbar" },
      { label: "Kafilah Terlibat", value: "6 Kabupaten Se-Sulbar" }
    ],
    features: [
      {
        title: "Bumper Animasi Cabang Musabaqah",
        description: "Grafis gerak transisi penanda cabang lomba tilawah, hifdzil, dan tafsir Al-Qur'an beresolusi tinggi.",
      },
      {
        title: "Latar Visual Dinamis Mimbar Tilawah",
        description: "Komposisi ornamen kaligrafi dengan gerak partikel halus yang memperkuat keheningan prosesi pembacaan ayat.",
      },
      {
        title: "Defile Kontingen Animasi",
        description: "Sekuens pembuka penyambutan kafilah peserta dari seluruh kabupaten di Sulawesi Barat.",
      }
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-05-10",
    seoTitle: "MTQ XI Provinsi Sulawesi Barat 2026 — Desain Motion Graphic | MAROA",
    seoDescription: "Produksi desain motion graphic panggung utama dan visual mimbar tilawah MTQ XI Tingkat Provinsi Sulawesi Barat oleh MAROA.",
  },
  {
    id: "jabat-3-trail-adventure",
    slug: "jabat-3-jelajah-alam-batas-produksi-konten-desain-multimedia",
    title: "Reborn Trail Pinrang JABAT Part #3 — Motion Graphic & LED Videotron Extreme Sport",
    category: "multimedia",
    summary: "Produksi motion graphic visual panggung, operasional layar LED videotron gerbang start-finish Stadion Bau Massepe, dan multimedia panggung malam apresiasi One Day Trail Adventure Jelajah Alam Batas (JABAT Part #3) Pinrang–Enrekang.",
    clientDisplayName: "Panitia Reborn Trail Pinrang JABAT Part #3 & IMI Pengcab Pinrang",
    year: "2026",
    heroImage: "/portfolio/covers/jabat-3-trail-adventure-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/jabat-3-trail-adventure-2026-cover-1600x900.webp",
    role: "Motion Graphic dan LED Videotron",
    sourceCredit: "Panitia Reborn Trail Pinrang JABAT Part #3 & IMI Pengcab Pinrang",
    rightsStatus: "Karya Desain Motion & Dokumentasi Resmi JABAT 3",
    services: [
      "Motion Graphics Design",
      "LED Videotron Stage Display",
      "Extreme Sport Visual Production",
      "Start-Finish Gate Multimedia"
    ],
    challenge: "Menghadirkan tata visual dinamis dan operasional layar videotron luar ruang berkontras tinggi di Stadion Bau Massepe yang mampu memandu pelepasan ribuan offroader serta menayangkan leaderboard hadiah 9 unit motor Honda Revo.",
    approach: "Merancang rangkaian motion graphic berenergi tinggi bertema petualangan ekstrem dengan tipografi tegas, efek pendaran oranye-hitam khas Reborn Trail, dan visualisasi rute jalur perbatasan Pinrang-Enrekang.",
    execution: "Mengoperasikan videotron panggung utama dan gerbang start line, memutar countdown animasi pelepasan kloter rider, serta memvisualisasikan penyerahan grand prize 9 unit motor Honda Revo dan uang tunai 5 rider finish tercepat.",
    outcome: "Pelaksanaan One Day Trail Adventure JABAT Part #3 berlangsung semarak, tertib, dan megah, menuai apresiasi tinggi dari ribuan rider nusantara serta sponsor resmi daerah.",
    gallery: [
      "/portfolio/covers/jabat-3-trail-adventure-2026-cover-1600x900.webp",
      "/portfolio/gallery/jabat-3-trail-adventure-2026-banner-1600x900.webp"
    ],
    galleryCaptions: {
      "/portfolio/covers/jabat-3-trail-adventure-2026-cover-1600x900.webp": "Master Banner Visual 16:9 — Reborn Trail Pinrang JABAT Part #3 (Pinrang-Enrekang)",
      "/portfolio/gallery/jabat-3-trail-adventure-2026-banner-1600x900.webp": "Visual Resmi Informasi Lomba — Grand Prize 9 Unit Honda Revo & Hadiah Tunai"
    },
    metrics: [
      { label: "Peran MAROA", value: "Motion Graphic dan LED Videotron" },
      { label: "Grand Prize", value: "9 Unit Honda Revo" },
      { label: "Start - Finish", value: "Stadion Bau Massepe Pinrang" }
    ],
    features: [
      {
        title: "Motion Graphics Hitung Mundur Pelepasan Start Line",
        description: "Animasi visual dinamis yang menggelegar di layar LED gerbang pelepasan untuk menyemangati setiap kloter rider yang melaju.",
      },
      {
        title: "Stage Visual LED Videotron Malam Apresiasi",
        description: "Latar visual panggung konser musik dan malam ramah tamah para pembalap dengan efek visual modern bertenaga tinggi.",
      },
      {
        title: "Visualisasi Rute Jalur Perbatasan Pinrang - Enrekang",
        description: "Peta grafis informatif menampilkan tanjakan ekstrem jalur petualangan dan titik pos pertolongan.",
      },
      {
        title: "Penayangan Interaktif Hadiah 9 Unit Honda Revo",
        description: "Format penayangan pemenang undian hadiah motor dan bonus rider tercepat pada layar panggung videotron.",
      },
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2026-04-25",
    seoTitle: "Reborn Trail Pinrang JABAT Part #3 — Motion Graphic & LED Videotron | MAROA",
    seoDescription: "Produksi motion graphic dan operasional LED videotron ajang trail adventure JABAT Part #3 Pinrang-Enrekang oleh MAROA.",
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
    publishedAt: "2026-04-15",
    seoTitle: "Temu Pendidik Nusantara Pinrang — Mitra Kolaborasi Daerah | MAROA",
    seoDescription: "Kemitraan strategis daerah dan produksi visual ekosistem Temu Pendidik Nusantara KGBN Kabupaten Pinrang bersama MAROA.",
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
    id: "fakkie-ramadhan-fest",
    slug: "fakkie-ramadhan-fest-multimedia-video-mapping",
    title: "FAKKIE Ramadhan Fest 2026 — Desain Multimedia, Panggung Seni & Video Mapping Arsitektural",
    category: "multimedia",
    summary: "Produksi materi komunikasi visual promosi opening ceremony, bintang tamu MC, serta proyeksi video mapping arsitektural 3D religi pada festival patrol sahur FAKKIE Ramadhan Fest by Eighty Seven.",
    clientDisplayName: "Panitia FAKKIE Ramadhan Fest by Eighty Seven & Pemuda Alecalimpo",
    year: "2026",
    heroImage: "/portfolio/covers/fakkie-ramadhan-fest-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/fakkie-ramadhan-fest-2026-cover-1600x900.webp",
    role: "Desain Multimedia, Video Mapping 3D & Visual Panggung",
    sourceCredit: "Panitia FAKKIE Ramadhan Fest by Eighty Seven & Studio MAROA",
    rightsStatus: "Karya Desain Poster & Dokumentasi Video Mapping MAROA",
    services: [
      "Arsitektural Video Mapping 3D",
      "Opening Ceremony Key Visual Design",
      "Guest Star MC Promo Assets",
      "Synchronized Stage Light & Sound System"
    ],
    challenge: "Menggabungkan tradisi seni musik patrol sahur masyarakat Tiroang dengan suguhan visual panggung modern yang megah, menampilkan bintang tamu MC kondang, serta atraksi video mapping arsitektural di depan Masjid Mustaqim.",
    approach: "Merancang paket desain grafis promosi pembuka berwarna merah membara yang energetik, dipadu pemetaan proyeksi 3D (video mapping) pada fasad bangunan panggung pementasan.",
    execution: "Membuat master poster 16:9 non-destruktif penayangan opening ceremony 26 Februari 2026 dan memproyeksikan video mapping 3D animasi kaligrafi yang tersinkronisasi dengan tabuhan perkusi patrol Bentrok Family.",
    outcome: "Malam pembukaan festival dipadati ribuan warga, viral di media sosial, dan menorehkan standar baru pertunjukan religi berbasis komunitas di Sulawesi Selatan.",
    gallery: [
      "/portfolio/covers/fakkie-ramadhan-fest-2026-cover-1600x900.webp",
      "/portfolio/gallery/fakkie-ramadhan-fest-live-video-mapping-1600x900.webp",
      "/portfolio/gallery/fakkie-ramadhan-fest-2026-poster-1600x900.webp"
    ],
    galleryCaptions: {
      "/portfolio/covers/fakkie-ramadhan-fest-2026-cover-1600x900.webp": "Master Artwork Poster 16:9 — Opening Ceremony FAKKIE Ramadhan Fest 2026",
      "/portfolio/gallery/fakkie-ramadhan-fest-live-video-mapping-1600x900.webp": "Dokumentasi Lapangan — Proyeksi Video Mapping Arsitektural 3D Religi di Panggung Utama",
      "/portfolio/gallery/fakkie-ramadhan-fest-2026-poster-1600x900.webp": "Materi Publikasi Resmi — Bintang Tamu MC Syukri Gazali (Chuke) & Syaiful Muharram (Ambonai)"
    },
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
    id: "gemudaya-festival-majene",
    slug: "gemudaya-festival-majene-2026",
    title: "GEMUDAYA (Generasi Muda Berdaya) Festival Majene 2026 — Desain Poster, Visual Media & Projector Mapping",
    category: "multimedia",
    summary: "Perancangan poster kampanye resmi 16:9, aset visual media publikasi, dan konten projector mapping arsitektural untuk festival kreativitas generasi muda di Kabupaten Majene.",
    clientDisplayName: "Komunitas Kreatif & Pemuda Majene Bersatu",
    year: "2026",
    heroImage: "/portfolio/covers/gemudaya-festival-majene-2026-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/gemudaya-festival-majene-2026-cover-1600x900.webp",
    role: "Desain Poster, Visual Media & Projector Mapping",
    sourceCredit: "Arsip Desain Komunikasi Visual Studio MAROA",
    rightsStatus: "Karya Desain Orisinal MAROA",
    services: [
      "Poster Campaign Design",
      "Visual Media Production",
      "Projector Mapping Content",
      "Stage Atmosphere Enhancement"
    ],
    challenge: "Menghadirkan citra visual yang memancarkan energi muda, modernitas, dan optimisme tanpa meninggalkan sentuhan nilai kebersamaan khas tanah Mandar, serta mentransformasikannya ke format projector mapping fasad.",
    approach: "Mengembangkan tipografi kustom berkarakter tebal dipadu palet warna cerah yang mencerminkan semangat kolaborasi, serta pemetaan grafis kontur dinding untuk pertunjukan projector mapping.",
    execution: "Membuat master poster 16:9 (1600x900) resolusi tinggi untuk cetak baliho, aset feed media sosial, dan sekuens animasi mapping proyeksi luar ruang.",
    outcome: "Materi promosi dan atraksi mapping memukau ribuan pemuda yang hadir, menciptakan pengalaman festival visual yang tak terlupakan di Kabupaten Majene.",
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
    id: "sbl-undian",
    slug: "sistem-undian-interaktif-digital-doorprize",
    title: "Grand Doorprize Event — Sistem Undian Interaktif & Acak Pemenang Layar Lebar",
    category: "integrated",
    summary: "Aplikasi animasi pengundian door-prize panggung real-time beresolusi tinggi dengan algoritma angka acak kriptografis transparan untuk event akbar dan siaran langsung.",
    clientDisplayName: "Penyelenggara Event & Media Partner",
    year: "2025 - 2026",
    heroImage: "/portfolio/covers/grand-doorprize-stage-system-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/grand-doorprize-stage-system-cover-1600x900.webp",
    mobileImage: "/portfolio/undian-mobile.webp",
    role: "Aplikasi Undian Kriptografis Layar Lebar",
    sourceCredit: "Arsip Teknologi Panggung & Rekayasa Perangkat Lunak MAROA",
    rightsStatus: "Karya Sistem & Visual Panggung Orisinal MAROA",
    services: [
      "Stage Visual Software",
      "Cryptographic Randomizer",
      "Ultra-Wide Screen Optimization",
      "Live Event Engineering"
    ],
    challenge: "Menyelenggarakan sesi penarikan door-prize berhadiah mobil, motor, dan ratusan hadiah elektronik pada event berskala ribuan peserta yang menuntut keadilan mutlak, transparansi tanpa kecurigaan manipulasi, serta visualisasi panggung yang dramatis dan mendebarkan.",
    approach: "Mengembangkan aplikasi web stage-ready dengan engine randomizer angka acak berbasis kriptografi yang menghasilkan animasi putaran angka berkecepatan tinggi dengan efek pendaran cahaya (glow effect) yang memukau di layar videotron LED panggung utama.",
    execution: "Membangun panel manajemen hadiah berjenjang (Grand Prize Mobil, Motor, Elektronik); sistem import basis data nomor kupon/peserta; panel kontrol tombol operator (Mulai Undian, Kunci Pemenang); filter pencegahan dobel menang; serta modul export rekapitulasi Berita Acara resmi.",
    outcome: "Menghidupkan atmosfer kemeriahan puncak event, memikat ribuan tatap mata penonton di depan panggung tanpa keraguan kecurangan, dan mempermudah saksi notaris serta kepolisian menandatangani keabsahan undian.",
    gallery: [
      "/portfolio/covers/grand-doorprize-stage-system-cover-1600x900.webp",
      "/portfolio/gallery/grand-doorprize-stage-system-1600x900.webp",
      "/portfolio/undian-desktop.webp",
      "/portfolio/undian-mobile.webp"
    ],
    galleryCaptions: {
      "/portfolio/covers/grand-doorprize-stage-system-cover-1600x900.webp": "Visualisasi Panggung — Display Sistem Undian Layar Lengkung Videotron LED",
      "/portfolio/gallery/grand-doorprize-stage-system-1600x900.webp": "Visual Panggung Resolusi Tinggi — Animasi Pengundian Grand Prize",
      "/portfolio/undian-desktop.webp": "Antarmuka Dashboard Operator — Panel Kendali Pengundian Kriptografis",
      "/portfolio/undian-mobile.webp": "Antarmuka Responsif Mobile — Verifikasi Nomor Kupon Pemenang"
    },
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
    id: "pos-sanggar-3-berlian",
    slug: "aplikasi-kasir-pos-sanggar-seni-3-berlian",
    title: "Aplikasi Kasir Sanggar Seni 3 Berlian — Sistem POS & Manajemen Persewaan Busana Seni",
    category: "digital",
    summary: "Pengembangan sistem kasir web Point of Sale (POS) dan manajemen inventaris persewaan busana adat, properti tari tradisional, dan tata rias Sanggar Seni 3 Berlian.",
    clientDisplayName: "Sanggar Seni 3 Berlian",
    year: "2025 - 2026",
    heroImage: "/portfolio/sbl-portal-desktop.webp",
    thumbnail: "/portfolio/sbl-portal-desktop.webp",
    mobileImage: "/portfolio/sbl-portal-mobile.webp",
    role: "Aplikasi Kasir Sanggar Seni 3 Berlian",
    sourceCredit: "Repositori Kode Sumber Resmi MAROA (GitHub: sblfm2025/3berlian)",
    sourceUrl: "https://github.com/sblfm2025/3berlian",
    githubUrl: "https://github.com/sblfm2025/3berlian",
    rightsStatus: "Pengembangan Perangkat Lunak Resmi MAROA",
    services: [
      "Point of Sale (POS) Architecture",
      "Costume Rental Tracking",
      "Billing & Receipt Generation",
      "Mobile-Responsive Cashier UI"
    ],
    challenge: "Mengganti pencatatan manual sewa busana adat dan properti tari yang rentan selisih inventaris dengan sistem kasir terintegrasi yang mencatat deposit dan tenggat kembali.",
    approach: "Merancang aplikasi kasir berbasis web ringan yang dapat dioperasikan dari tablet maupun ponsel kasir dengan alur sewa-kembali yang intuitif.",
    execution: "Membangun modul katalog busana adat, kalkulasi sewa otomatis per hari, integrasi cetak struk nota digital, dan pelacakan riwayat keterlambatan pengembalian.",
    outcome: "Operasional transaksi sanggar menjadi rapi, pelacakan busana tari yang sedang tersewa terpantau akurat, dan laporan omzet harian terekam otomatis.",
    gallery: [
      "/portfolio/sbl-portal-desktop.webp",
      "/portfolio/sbl-portal-mobile.webp"
    ],
    metrics: [
      { label: "Peran MAROA", value: "Aplikasi Kasir POS" },
      { label: "Platform", value: "Web-Based Responsive POS" },
      { label: "Repositori", value: "Tervalidasi di GitHub" }
    ],
    features: [
      {
        title: "Katalog Inventaris Busana & Properti Tari",
        description: "Pencatatan foto, ukuran, dan ketersediaan stok baju bodo, jas tutup, mahkota, dan aksesoris pentas.",
      },
      {
        title: "Kalkulator Sewa & Pelacak Tenggat Kembali",
        description: "Perhitungan biaya sewa harian, uang jaminan, serta notifikasi jatuh tempo pengembalian barang.",
      },
      {
        title: "Nota Digital & Struk Kasir Otomatis",
        description: "Penerbitan bukti transaksi sewa langsung yang dapat dicetak atau dikirim via WhatsApp pelanggan.",
      }
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2026-02-10",
    seoTitle: "Aplikasi Kasir Sanggar Seni 3 Berlian — Sistem POS Persewaan | MAROA",
    seoDescription: "Pengembangan aplikasi kasir web Point of Sale (POS) dan manajemen persewaan busana tari Sanggar Seni 3 Berlian oleh MAROA.",
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
    id: "kodim-1404-lepas-sambut-2025",
    slug: "kodim-1404-lepas-sambut-2025",
    title: "Lepas Sambut Dandim 1404/Pinrang 2025 — Tata Visual & Motion Graphic",
    category: "multimedia",
    summary: "Produksi motion graphic latar layar panggung kehormatan pada upacara Lepas Sambut Komandan Kodim 1404/Pinrang dari Letkol Inf Abdullah Mahua kepada Letkol Inf Erwin Swandiyana.",
    clientDisplayName: "Komando Distrik Militer (Kodim) 1404/Pinrang",
    year: "2025",
    heroImage: "/portfolio/covers/kodim-1404-lepas-sambut-2025--cover.webp",
    thumbnail: "/portfolio/covers/kodim-1404-lepas-sambut-2025--cover.webp",
    role: "Desain Visual & Motion Graphic Lepas Sambut",
    sourceCredit: "Dokumentasi Kodim 1404/Pinrang & Arsip Motion MAROA",
    sourceUrl: "https://penasultra.id/suasana-haru-warnai-acara-lepas-sambut-dandim-1404-pinrang/",
    rightsStatus: "Karya Motion Graphic Orisinal MAROA (Sumber: Background.mp4)",
    services: [
      "Ceremony Motion Graphic",
      "LED Stage Background Animation",
      "Military Protocol Visual Media"
    ],
    challenge: "Menghadirkan tata visual mimbar serah terima jabatan militer yang khidmat, presisi, berkarakter tegas, dan memancarkan rasa hormat pengabdian prajurit.",
    approach: "Mengembangkan transisi motion grafis ornamen lambang kesatuan TNI AD, tipografi keprotokolan formal, dan efek pencahayaan emas-kehijauan yang agung.",
    execution: "Memproduksi video looping panggung beresolusi tinggi (Background.mp4) yang ditayangkan pada layar LED utama sepanjang seremoni pisah sambut.",
    outcome: "Acara pisah sambut berlangsung penuh haru dan wibawa, mendapat apresiasi dari jajaran Forkopimda dan para tamu kehormatan.",
    gallery: [
      "/portfolio/gallery/kodim-1404-lepas-sambut-2025--frame-03s.webp",
      "/portfolio/gallery/kodim-1404-lepas-sambut-2025--frame-17s.webp"
    ],
    galleryCaptions: {
      "/portfolio/gallery/kodim-1404-lepas-sambut-2025--frame-03s.webp": "Cuplikan Motion Graphic — Pembuka Penghormatan Komandan Kodim 1404",
      "/portfolio/gallery/kodim-1404-lepas-sambut-2025--frame-17s.webp": "Cuplikan Motion Graphic — Visual Latar Mimbar Panggung Resmi"
    },
    metrics: [
      { label: "Peran MAROA", value: "Motion Graphic LED" },
      { label: "Sumber Berkas", value: "Background.mp4 (Tervalidasi Kodim)" },
      { label: "Waktu Acara", value: "29 November 2025" }
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2025-11-29",
    seoTitle: "Lepas Sambut Dandim 1404/Pinrang — Motion Graphic Panggung | MAROA",
    seoDescription: "Produksi motion graphic latar videotron upacara Lepas Sambut Dandim 1404/Pinrang oleh studio multimedia MAROA.",
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
    id: "jamnas-iv-ivi-soppeng-2025",
    slug: "jamnas-iv-ivi-soppeng-2025",
    title: "JAMNAS IV IVI Soppeng 2025 — Jambore Nasional Indonesia Vespa Idaman",
    category: "multimedia",
    summary: "Produksi konten motion graphic panggung utama dan visual animasi videotron pada perhelatan akbar Jambore Nasional IV Indonesia Vespa Idaman (IVI) di Kabupaten Soppeng.",
    clientDisplayName: "Indonesia Vespa Idaman (IVI) & Panitia Jamnas IV Soppeng",
    year: "2025",
    heroImage: "/portfolio/covers/jamnas-iv-ivi-soppeng-2025--cover.webp",
    thumbnail: "/portfolio/covers/jamnas-iv-ivi-soppeng-2025--cover.webp",
    role: "Desain Motion Graphic Latar Videotron Panggung",
    sourceCredit: "Panitia Jamnas IV IVI Soppeng & Dokumentasi Komunitas",
    sourceUrl: "https://www.detik.com/sulsel/berita/d-8207023/jambore-nasional-vespa-2025-jadi-ajang-promosi-wisata-soppeng",
    rightsStatus: "Karya Desain Grafis & Motion Orisinal MAROA",
    services: [
      "Stage Motion Graphic",
      "Videotron Visual Loop",
      "Community Event Branding"
    ],
    challenge: "Menyatukan semangat solidaritas skuteris nusantara dengan kekayaan budaya lokal Bumi Latemmamala ke dalam visual panggung musik luar ruang yang energik.",
    approach: "Merancang grafis siluet vespa legendaris berpadu efek neon dan elemen motif kearifan lokal dalam sekuens gerak yang sinkron dengan alunan musik panggung.",
    execution: "Menghasilkan berkas video animasi panggung utama yang ditayangkan terus-menerus selama parade dan malam puncak festival.",
    outcome: "Panggung musik Jamnas IV IVI tampil spektakuler dan membakar antusiasme ribuan skuteris dari seluruh penjuru tanah air.",
    gallery: [
      "/portfolio/gallery/jamnas-iv-ivi-soppeng-2025--frame-02s.webp",
      "/portfolio/gallery/jamnas-iv-ivi-soppeng-2025--frame-24s.webp",
      "/portfolio/gallery/jamnas-iv-ivi-soppeng-2025--extra-01.webp"
    ],
    galleryCaptions: {
      "/portfolio/gallery/jamnas-iv-ivi-soppeng-2025--frame-02s.webp": "Cuplikan Motion Graphic — Animasi Center Stage Backdrop",
      "/portfolio/gallery/jamnas-iv-ivi-soppeng-2025--frame-24s.webp": "Cuplikan Motion Graphic — Sekuens Identitas Vespa Nusantara",
      "/portfolio/gallery/jamnas-iv-ivi-soppeng-2025--extra-01.webp": "Desain Grafis Poster Resmi — Publikasi Jamnas IV IVI"
    },
    metrics: [
      { label: "Peran MAROA", value: "Motion Graphic Videotron" },
      { label: "Skala Event", value: "Nasional (Skuteris Se-Indonesia)" },
      { label: "Tuan Rumah", value: "Kabupaten Soppeng" }
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2025-11-16",
    seoTitle: "JAMNAS IV IVI Soppeng 2025 — Motion Graphic Panggung | MAROA",
    seoDescription: "Produksi desain motion graphic panggung dan videotron Jambore Nasional IV Indonesia Vespa Idaman di Soppeng oleh MAROA.",
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
    id: "festival-literasi-pinrang-2025",
    slug: "festival-literasi-pinrang-2025-multiliterasi-inklusif",
    title: "Festival Literasi Pinrang 2025 — Multiliterasi Inklusif & Panggung Edukasi Budaya",
    category: "events",
    summary: "Penyelenggaraan festival literasi daerah berskala besar bekerjasama dengan Perpustakaan Nasional RI bertema 'Multiliterasi Inklusif, Bergerak Bersama Membangun Pinrang Berbudaya'.",
    clientDisplayName: "Dinas Perpustakaan dan Kearsipan Kab. Pinrang & Perpusnas RI",
    year: "2025",
    heroImage: "/portfolio/covers/festival-literasi-pinrang-2025-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/festival-literasi-pinrang-2025-cover-1600x900.webp",
    role: "Manajemen Acara & Tata Multimedia Panggung",
    sourceCredit: "Dinas Perpustakaan dan Kearsipan Kabupaten Pinrang & Perpusnas RI",
    rightsStatus: "Dokumentasi & Desain Publikasi Resmi Acara",
    services: [
      "Event Management & Production",
      "Stage Multimedia Screen",
      "Perpusnas RI Collaboration",
      "Cultural & Literacy Showcase"
    ],
    challenge: "Menghadirkan festival literasi komprehensif yang mengintegrasikan agenda nasional Perpustakaan Nasional RI dengan pelestarian budaya lokal Bumi Lasinrang.",
    approach: "Memadukan visual panggung bertema arsitektur budaya Pinrang, instalasi perpustakaan keliling, dan seminar multiliterasi bagi lintas generasi.",
    execution: "Menyiapkan panggung utama, multimedia display siaran langsung, sesi gelar wicara bersama Bunda Literasi, dan malam penganugerahan pegiat literasi daerah.",
    outcome: "Memperkuat indeks pembangunan literasi masyarakat (IPLM) Kabupaten Pinrang dan mendapat apresiasi pimpinan Perpustakaan Nasional.",
    gallery: [
      "/portfolio/covers/festival-literasi-pinrang-2025-cover-1600x900.webp",
      "/portfolio/gallery/festival-literasi-pinrang-2025-banner-1600x900.webp"
    ],
    galleryCaptions: {
      "/portfolio/covers/festival-literasi-pinrang-2025-cover-1600x900.webp": "Master Visual 16:9 — Festival Literasi Pinrang 2025 Multiliterasi Inklusif",
      "/portfolio/gallery/festival-literasi-pinrang-2025-banner-1600x900.webp": "Banner Resmi Penyelenggaraan — Kerjasama Dispusip Pinrang & Perpusnas RI"
    },
    metrics: [
      { label: "Peran MAROA", value: "Event Management & Multimedia" },
      { label: "Waktu Acara", value: "10 - 14 September 2025" },
      { label: "Kemitraan", value: "Perpustakaan Nasional RI" }
    ],
    features: [
      {
        title: "Seminar Multiliterasi Inklusif Nasional",
        description: "Diskusi panel bersama narasumber Perpustakaan Nasional RI dan tokoh literasi Sulawesi Selatan.",
      },
      {
        title: "Panggung Apresiasi Pegiat Literasi",
        description: "Penghargaan bagi pengelola pojok baca desa, taman bacaan masyarakat, dan pegiat literasi disabilitas.",
      }
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2025-09-14",
    seoTitle: "Festival Literasi Pinrang 2025 — Multiliterasi Inklusif | MAROA",
    seoDescription: "Penyelenggaraan Festival Literasi Pinrang 2025 kerjasama Perpustakaan Nasional RI oleh MAROA.",
  },
  {
    id: "hut-ri-80-pinrang-2025",
    slug: "hut-ri-80-pinrang-2025",
    title: "Semarak HUT RI ke-80 Kabupaten Pinrang 2025 — Perancangan Layout & Visualisasi 3D Venue",
    category: "integrated",
    summary: "Perancangan tata letak venue terpadu, pemodelan 3D panggung seremoni kemerdekaan, simulasi animasi walkthrough lokasi, dan kurasi struktur rundown kegiatan HUT RI ke-80.",
    clientDisplayName: "Pemerintah Kabupaten Pinrang & Panitia HUT RI ke-80",
    year: "2025",
    heroImage: "/portfolio/covers/hut-ri-80-pinrang-2025--cover.webp",
    thumbnail: "/portfolio/covers/hut-ri-80-pinrang-2025--cover.webp",
    role: "Perancangan Konsep Layout & Visualisasi 3D Panggung/Venue",
    isConceptOnly: true,
    sourceCredit: "Pemerintah Kabupaten Pinrang & Studio Perancangan MAROA",
    sourceUrl: "https://sbl.pinrangkab.go.id/2025/08/10/bupati-pinrang-apresiasi-antusiasme-peserta-lomba-gerak-jalan-hut-ri-ke-80/",
    rightsStatus: "Karya Desain Perencanaan Venue & Animasi 3D Orisinal MAROA",
    services: [
      "Venue Spatial Layout Masterplan",
      "3D Ceremony Stage Modeling",
      "3D Animated Venue Walkthrough",
      "Event Rundown Blueprinting"
    ],
    challenge: "Merancang tata ruang lapangan terbuka peringatan kemerdekaan berskala ribuan warga yang mencakup zona upacara resmi, tenda kehormatan, serta zona pameran dan stan UMKM.",
    approach: "Membuat pemodelan 3D spasial akurat yang memvisualisasikan alur mobilitas massa, titik panggung utama, instalasi tenda bazar rakyat, serta simulasi video drone visual.",
    execution: "Membuat 4 paket lembar layout arsitektural 3D dan video animasi walkthrough 3D venue (Venue HUT RI-80.mp4) berdurasi penuh.",
    outcome: "Masterplan visualisasi 3D menjadi rujukan komprehensif bagi panitia pemerintah daerah dalam menata pelaksanaan perayaan HUT RI ke-80 di Pinrang.",
    gallery: [
      "/portfolio/gallery/hut-ri-80-pinrang-2025--extra-01.webp",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--extra-02.webp",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--extra-03.webp",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--extra-04.webp",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--motion-frame-03s.webp",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--motion-frame-24s.webp",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--motion-frame-51s.webp"
    ],
    galleryCaptions: {
      "/portfolio/gallery/hut-ri-80-pinrang-2025--extra-01.webp": "Visualisasi Konsep 3D — Masterplan Denah & Zonasi Venue Terpadu",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--extra-02.webp": "Visualisasi Konsep 3D — Rencana Panggung Utama Upacara Kemerdekaan",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--extra-03.webp": "Visualisasi Konsep 3D — Area Tenda Bazar UMKM & Gerak Jalan Warga",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--extra-04.webp": "Dokumen Perancangan — Bagan Alur Rundown Acara Peringatan",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--motion-frame-03s.webp": "Cuplikan Animasi 3D Walkthrough Venue — Sudut Masuk Utama (03s)",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--motion-frame-24s.webp": "Cuplikan Animasi 3D Walkthrough Venue — Panorama Lapangan (24s)",
      "/portfolio/gallery/hut-ri-80-pinrang-2025--motion-frame-51s.webp": "Cuplikan Animasi 3D Walkthrough Venue — Kompleks Panggung & Tenda (51s)"
    },
    metrics: [
      { label: "Peran MAROA", value: "Layout & Visualisasi 3D" },
      { label: "Klasifikasi Bukti", value: "Masterplan 3D & Walkthrough Video" },
      { label: "Skala Peringatan", value: "Tingkat Kabupaten Pinrang" }
    ],
    isFeatured: true,
    isPublished: true,
    publishedAt: "2025-08-17",
    seoTitle: "HUT RI ke-80 Pinrang — Visualisasi 3D Venue & Layout | MAROA",
    seoDescription: "Perancangan konsep tata letak 3D venue dan animasi panggung peringatan HUT RI ke-80 Kabupaten Pinrang oleh MAROA.",
  },
  {
    id: "adhyaksa-trail-run-in-beach-2025",
    slug: "adhyaksa-trail-run-in-beach-2025",
    title: "Adhyaksa Trail Run in Beach Pinrang 2025",
    category: "multimedia",
    summary: "Dokumentasi proyek panggung dan visual perhelatan Adhyaksa Trail Run in Beach di Pantai Harapan Ammani Kabupaten Pinrang (Menunggu Verifikasi Media Lengkap).",
    clientDisplayName: "Kejaksaan Negeri Pinrang & Komunitas Trail Run",
    year: "2025",
    heroImage: "/portfolio/covers/adhyaksa-pending.webp",
    thumbnail: "/portfolio/covers/adhyaksa-pending.webp",
    role: "Motion Graphic dan LED Videotron (Menunggu Verifikasi)",
    mediaPending: true,
    sourceCredit: "Kejaksaan Negeri Pinrang & Berita Terverifikasi",
    sourceUrl: "https://sindomakassar.com/read/sulsel/19091/bupati-pinrang-sebut-adhyaksa-trail-run-in-beach-perpaduan-olahraga-dan-promosi-wisata-1752998831",
    rightsStatus: "Status Media Pending — Menunggu Penyerahan Berkas Asli MAROA",
    services: [
      "Stage Motion Graphic",
      "Videotron Visual"
    ],
    challenge: "Menunggu kelengkapan aset visual orisinal MAROA guna memastikan kepatuhan pembuktian karya.",
    approach: "Mempertahankan integritas arsip tanpa menyubstitusi aset dari proyek lain.",
    execution: "Menahan status publikasi proyek dalam sistem draf hingga master video resmi diverifikasi.",
    outcome: "Menjaga keaslian portofolio MAROA bebas dari klaim aset yang belum terverifikasi.",
    gallery: [],
    metrics: [
      { label: "Status Publikasi", value: "Draf Tertahan (Media Pending)" },
      { label: "Integritas Arsip", value: "Bebas Substitusi Palsu" }
    ],
    isFeatured: false,
    isPublished: false,
    publishedAt: "2025-07-20",
    seoTitle: "Adhyaksa Trail Run in Beach 2025 | MAROA",
    seoDescription: "Studi kasus Adhyaksa Trail Run in Beach Pinrang 2025.",
  },
  {
    id: "pinrang-yes-2025",
    slug: "pinrang-yes-2025",
    title: "PINRANG YES (Youthpreneur Expo Showcase) 2025 — Konsep & Proposal Acara",
    category: "events",
    summary: "Penyusunan dokumen master proposal konsep festival wirausaha muda, pemetaan zona stan pameran, dan kurasi program pertunjukan kepemudaan PINRANG YES.",
    clientDisplayName: "Inisiatif Kolaboratif Kepemudaan Pinrang",
    year: "2025",
    heroImage: "/portfolio/covers/pinrang-yes-2025--cover-concept.webp",
    thumbnail: "/portfolio/covers/pinrang-yes-2025--cover-concept.webp",
    role: "Perancangan Konsep & Proposal Perencanaan Acara",
    isConceptOnly: true,
    sourceCredit: "Dokumen Master Proposal Perencanaan PT MAROA MEDIA MABBARAKKA",
    sourceUrl: "https://www.sahabatnews.net/2025/05/pinrang-yes-2025-ketua-karang-taruna.html",
    rightsStatus: "Dokumen Master Proposal & Hak Kekayaan Intelektual Konsep MAROA",
    services: [
      "Event Concept Architecture",
      "Strategic Proposal Formulation",
      "Zone Spatial Layout Planning",
      "Youth Community Engagement Strategy"
    ],
    challenge: "Menyusun skema kegiatan pameran kewirausahaan pemuda yang komprehensif, terstruktur, dan memiliki kelayakan bisnis untuk menarik partisipasi mitra multisektor.",
    approach: "Menyusun dokumen proposal strategis 11 halaman yang merinci arsitektur zona stan, panggung gelar wicara, panggung musik komunitas, dan proyeksi dampak ekonomi lokal.",
    execution: "Menuntaskan dokumen presentasi konsep terpadu yang memadukan desain grafis editorial elegan, alur kegiatan tematik, dan proyeksi anggaran transparan.",
    outcome: "Dokumen konsep proposal menjadi fondasi acuan perencanaan kegiatan pemuda dan apresiasi dari pemangku kepentingan daerah.",
    gallery: [
      "/portfolio/gallery/pinrang-yes-2025--proposal-page-05.webp",
      "/portfolio/gallery/pinrang-yes-2025--proposal-page-07.webp",
      "/portfolio/gallery/pinrang-yes-2025--proposal-page-10.webp"
    ],
    galleryCaptions: {
      "/portfolio/gallery/pinrang-yes-2025--proposal-page-05.webp": "Dokumen Desain Proposal — Pemetaan Zona Stan & Layout Area",
      "/portfolio/gallery/pinrang-yes-2025--proposal-page-07.webp": "Dokumen Desain Proposal — Model Kolaborasi Ekosistem Wirausaha",
      "/portfolio/gallery/pinrang-yes-2025--proposal-page-10.webp": "Dokumen Desain Proposal — Struktur Rangkaian Acara Tematik"
    },
    metrics: [
      { label: "Peran MAROA", value: "Konsep & Master Proposal" },
      { label: "Status Bukti", value: "Dokumen Desain Konsep Sah" },
      { label: "Cakupan Proposal", value: "11 Halaman Kajian Terpadu" }
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2025-05-27",
    seoTitle: "PINRANG YES 2025 — Perancangan Konsep & Proposal Event | MAROA",
    seoDescription: "Penyusunan dokumen master proposal konsep festival wirausaha muda PINRANG YES 2025 oleh tim strategic MAROA.",
  },
  {
    id: "hiswanamigas-sulbar-2025",
    slug: "hiswanamigas-pelantikan-pengurus-2025",
    title: "Pelantikan Pengurus DPC VIII Hiswana Migas Sulawesi Barat 2025",
    category: "multimedia",
    summary: "Produksi motion graphic latar videotron LED panggung pada upacara pelantikan Pengurus DPC VIII Hiswana Migas Provinsi Sulawesi Barat di Hotel MATOS Mamuju.",
    clientDisplayName: "DPC VIII Hiswana Migas Sulawesi Barat",
    year: "2025",
    heroImage: "/portfolio/covers/hiswanamigas-pelantikan-pengurus-2025--cover.webp",
    thumbnail: "/portfolio/covers/hiswanamigas-pelantikan-pengurus-2025--cover.webp",
    role: "Desain Motion Graphic Latar Layar LED",
    sourceCredit: "DPC VIII Hiswana Migas Sulawesi Barat & Arsip Studio MAROA",
    sourceUrl: "https://sulbarpedia.com/hiswana-migas-sulbar-gelar-muscab-ke-ii-di-mamuju-dibuka-langsung-gubernur-sdk/",
    rightsStatus: "Karya Desain Motion Orisinal Studio MAROA",
    services: [
      "Motion Graphics Design",
      "LED Stage Backdrop Animation",
      "Corporate Event Identity"
    ],
    challenge: "Menghadirkan komposisi visual panggung pelantikan organisasi energi migas yang formal, berwibawa, dan elegan dengan animasi partikel logo dinamis.",
    approach: "Mengembangkan transisi tipografi resmi dipadu identitas warna biru-merah korporat energi dan pencahayaan panggung hotel konvensi.",
    execution: "Memproduksi video looping beresolusi tinggi 16:9 untuk diproyeksikan pada layar LED panggung utama selama rangkaian sambutan pimpinan dan pelantikan.",
    outcome: "Suasana pelantikan berlangsung khidmat dan visual layar LED menghadirkan standar estetika korporat yang prestisius.",
    gallery: [
      "/portfolio/gallery/hiswanamigas-pelantikan-pengurus-2025--frame-02s.webp",
      "/portfolio/gallery/hiswanamigas-pelantikan-pengurus-2025--frame-17s.webp"
    ],
    galleryCaptions: {
      "/portfolio/gallery/hiswanamigas-pelantikan-pengurus-2025--frame-02s.webp": "Cuplikan Motion Graphic — Pembuka Seremoni Pelantikan",
      "/portfolio/gallery/hiswanamigas-pelantikan-pengurus-2025--frame-17s.webp": "Cuplikan Motion Graphic — Visual Latar Layar LED Panggung"
    },
    metrics: [
      { label: "Peran MAROA", value: "Motion Graphic LED" },
      { label: "Format Visual", value: "16:9 High Definition" },
      { label: "Lokasi Acara", value: "Hotel MATOS Mamuju" }
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2025-05-18",
    seoTitle: "Pelantikan Hiswana Migas Sulbar 2025 — Motion Graphic LED | MAROA",
    seoDescription: "Produksi motion graphic latar videotron LED pelantikan Pengurus DPC VIII Hiswana Migas Sulawesi Barat oleh MAROA.",
  },
  {
    id: "hipmi-fest-pinrang-2025",
    slug: "hipmi-fest-pinrang-2025",
    title: "HIPMI FEST Pinrang 2025 — Pesta Kreativitas & Kolaborasi Pengusaha Muda",
    category: "events",
    summary: "Perancangan identitas visual promosi, materi grafis publikasi, dan komunikasi visual festival UMKM pengusaha muda BPC HIPMI Pinrang di Lapangan Bosowa.",
    clientDisplayName: "BPC HIPMI Kabupaten Pinrang",
    year: "2025",
    heroImage: "/portfolio/covers/hipmi-fest-pinrang-2025--cover.webp",
    thumbnail: "/portfolio/covers/hipmi-fest-pinrang-2025--cover.webp",
    role: "Desain Identitas & Materi Visual Promosi",
    sourceCredit: "BPC HIPMI Kabupaten Pinrang & Rilis Resmi",
    sourceUrl: "https://rri.co.id/umkm/1250064/hipmi-fest-2025-dorong-umkm-pinrang-dan-kolaborasi",
    rightsStatus: "Karya Desain Komunikasi Visual Orisinal MAROA",
    services: [
      "Event Branding Identity",
      "Campaign Poster Design",
      "Digital Promotion Media"
    ],
    challenge: "Membangun identitas visual yang mencerminkan ketangguhan wirausaha muda, semangat kolaborasi UMKM lokal, dan daya tarik bagi generasi milenial dan Gen Z.",
    approach: "Memilih palet warna berkarakter modern dan tipografi kontemporer tebal yang aplikatif untuk media cetak baliho maupun konten media sosial.",
    execution: "Membuat paket master artwork 16:9, materi feed media sosial, dan materi spanduk promosi titik keramaian kota Pinrang.",
    outcome: "Materi visual yang atraktif berhasil meningkatkan atensi publik dan mendatangkan kunjungan warga pada gelaran festival.",
    gallery: [
      "/portfolio/covers/hipmi-fest-pinrang-2025--cover.webp"
    ],
    galleryCaptions: {
      "/portfolio/covers/hipmi-fest-pinrang-2025--cover.webp": "Master Artwork Poster 16:9 — Identitas Visual HIPMI FEST Pinrang"
    },
    metrics: [
      { label: "Peran MAROA", value: "Desain Identitas & Media Promosi" },
      { label: "Lokasi Acara", value: "Lapangan Bosowa Pinrang" },
      { label: "Fokus Acara", value: "UMKM & Kolaborasi Pengusaha Muda" }
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2025-02-23",
    seoTitle: "HIPMI FEST Pinrang 2025 — Desain Visual & Identitas | MAROA",
    seoDescription: "Perancangan identitas komunikasi visual dan poster promosi gelaran HIPMI FEST Pinrang 2025 oleh MAROA.",
  },
  {
    id: "perpustakaan-expo-pinrang",
    slug: "perpustakaan-expo-2023-kabupaten-pinrang",
    title: "Perpustakaan Expo 2023 Kabupaten Pinrang — Pameran Literasi & Grand Final Duta Baca",
    category: "events",
    summary: "Penyelenggaraan pameran perpustakaan terpadu, Grand Final Duta Baca Kabupaten Pinrang, cerdas cermat, stand pameran terbaik, dan pentas seni budaya di Halaman Kantor Dinas Perpustakaan dan Kearsipan.",
    clientDisplayName: "Dinas Perpustakaan dan Kearsipan Kabupaten Pinrang",
    year: "2023",
    heroImage: "/portfolio/covers/perpustakaan-expo-pinrang-2023-cover-1600x900.webp",
    thumbnail: "/portfolio/covers/perpustakaan-expo-pinrang-2023-cover-1600x900.webp",
    role: "Event Organizer, Tata Panggung Pameran & Stan Pustaka",
    sourceCredit: "Dinas Perpustakaan dan Kearsipan Kabupaten Pinrang",
    rightsStatus: "Dokumentasi Publikasi Resmi Pemerintah Daerah",
    services: [
      "Manajemen Event Organizer (EO) Terpadu",
      "Tata Panggung & Stand Pameran",
      "Lomba Grand Final Duta Baca",
      "Pentas Seni Budaya & Pameran UMKM"
    ],
    challenge: "Menata pameran literasi multi-kegiatan di halaman kantor dinas dengan menyatukan lomba kecerdasan pelajar, pameran buku, seleksi duta baca daerah, dan panggung pertunjukan dalam satu kesatuan alur yang rapi.",
    approach: "Merancang zonasi panggung utama semi-outdoor, stan modular pameran perpustakaan sekolah/kecamatan, dan area bazar UMKM dengan alur kunjungan terstruktur.",
    execution: "Menyiapkan instalasi panggung penghargaan, sistem tata suara, backdrop panggung resmi, dan tata kelola rundown acara selama 6 hari pelaksanaan (14-19 November 2023).",
    outcome: "Perpustakaan Expo 2023 sukses besar menggerakkan antusiasme pelajar dan masyarakat, serta melahirkan Duta Baca inspiratif bagi Kabupaten Pinrang.",
    gallery: [
      "/portfolio/covers/perpustakaan-expo-pinrang-2023-cover-1600x900.webp",
      "/portfolio/gallery/perpustakaan-expo-pinrang-2023-poster-1600x900.webp"
    ],
    galleryCaptions: {
      "/portfolio/covers/perpustakaan-expo-pinrang-2023-cover-1600x900.webp": "Master Artwork Poster 16:9 — Perpustakaan Expo 2023 Kabupaten Pinrang",
      "/portfolio/gallery/perpustakaan-expo-pinrang-2023-poster-1600x900.webp": "Poster Resmi Informasi Acara — Pameran Perpustakaan & Grand Final Duta Baca"
    },
    metrics: [
      { label: "Peran MAROA", value: "Event Organizer & Stage" },
      { label: "Waktu Acara", value: "14 - 19 November 2023" },
      { label: "Lokasi", value: "Halaman Dinas Perpustakaan" }
    ],
    features: [
      {
        title: "Pameran Perpustakaan Sekolah & Kecamatan",
        description: "Menghadirkan stan pameran inovasi layanan buku dan pojok baca dari berbagai lembaga pendidikan.",
      },
      {
        title: "Grand Final Pemilihan Duta Baca Pinrang",
        description: "Panggung unjuk bakat, orasi literasi, dan penobatan Duta Baca Kabupaten Pinrang 2023.",
      },
      {
        title: "Pentas Seni Tradisional & Pameran UMKM",
        description: "Aktivasi panggung pentas seni pelajar serta pemberdayaan produk kuliner UMKM lokal.",
      }
    ],
    isFeatured: false,
    isPublished: true,
    publishedAt: "2023-11-19",
    seoTitle: "Perpustakaan Expo 2023 Kabupaten Pinrang — Event Organizer | MAROA",
    seoDescription: "Penyelenggaraan Perpustakaan Expo 2023 dan Grand Final Duta Baca Kabupaten Pinrang oleh MAROA.",
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
