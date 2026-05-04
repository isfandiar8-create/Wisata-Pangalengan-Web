"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { generateWALink } from "@/config/contact";

// ─── DATA MASTER KATALOG (Dengan Data Real Rafting) ──────────────────────
const masterKatalog = [
  { 
    id: "rafting", 
    nama: "Rafting Palayangan", 
    kategori: "Aktivitas Satuan", 
    harga: "Rp 165.000", 
    hargaAsli: "Rp 250.000", 
    fasilitas: [
      "Arung Jeram 4.5 KM (Sungai Palayangan)",
      "Instruktur, Guide & Team Rescue Profesional",
      "Safety Equipment (Helm, Pelampung, Dayung)",
      "Local Transport (Basecamp ke Start Point)",
      "Tiket Masuk Kawasan Wisata Situ Cileunca",
      "Fasilitas Kamar Mandi & Toilet Bilas",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi Foto (Khusus harga normal & pax penuh)"
    ], 
    opsiHarga: [
      { nama: "Rafting Only", harga: "Rp 165.000" },
      { nama: "Rafting + Dokumentasi", harga: "Rp 175.000" },
      { nama: "Rafting + Dok + Makan", harga: "Rp 190.000 (Rekomendasi)" },
    ],
    persiapan: [
      "Baju ganti setelah rafting", 
      "Handuk dan peralatan mandi (sabun)", 
      "Sandal atau sepatu air (pasti basah)", 
      "Obat-obatan pribadi"
    ],
    label: "⚡ Terlaris", 
    image: "/rafting.jpg", 
    video: "/promo-ig.mp4",
    deskripsi: "Olahraga mengarungi segarnya air di sungai Palayangan sepanjang 4.5km. Paket sudah lengkap, tinggal bawa badan aja! Dapatkan promo spesial untuk rombongan di atas 15 orang." 
  },
  { 
    id: "atv", 
    nama: "ATV Adventure", 
    kategori: "Aktivitas Satuan", 
    harga: "Rp 175.000", 
    hargaAsli: "Rp 240.000", 
    fasilitas: [
      "Track ATV Kebun Teh & Pegunungan (4 KM)",
      "Instruktur & Tour Guide Profesional",
      "Safety Equipment (Helm Khusus & Sepatu Boots)",
      "Local Transport (Basecamp ke Start Point)",
      "Fasilitas Kamar Mandi & Toilet Bilas",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi Foto (Khusus harga normal & pax penuh)"
    ], 
    opsiHarga: [
      { nama: "Single (1 ATV - 1 Orang)", harga: "Rp 175.000 / unit" },
      { nama: "Tandem (1 ATV - 2 Orang)", harga: "Rp 225.000 / unit" },
    ],
    persiapan: [
      "Baju ganti (karena pasti kotor/berlumpur)", 
      "Kacamata hitam & Masker/Buff (anti debu)", 
      "Sepatu tertutup (sneakers/sepatu outdoor)", 
      "Handuk dan perlengkapan mandi pribadi"
    ],
    label: "Super Seru", 
    image: "/keluarga-seru.jpg", 
    deskripsi: "Wisata adventure memacu adrenalin menjelajahi hamparan perkebunan teh dan pegunungan dengan lintasan sepanjang 4 KM. Ditemani udara sejuk Pangalengan dan tour guide profesional." 
  },
  { 
    id: "offroad", 
    nama: "Offroad Land Rover", 
    kategori: "Aktivitas Satuan", 
    harga: "Rp 220.000", 
    hargaAsli: "Rp 300.000", 
    fasilitas: [
      "Mobil Offroad Land Rover Klasik",
      "Driver Profesional & Team Rescue",
      "Tiket Masuk Trek Offroad Pegunungan/Hutan Pinus",
      "Tour Guide Handal",
      "Air Mineral (Aqua Botol)",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi Foto (Khusus harga normal & pax penuh)"
    ], 
    persiapan: [
      "Jaket tebal (udara pegunungan sangat dingin)", 
      "Kacamata hitam & masker (pelindung debu/lumpur)", 
      "Pakaian kasual yang nyaman dan menyerap keringat", 
      "Obat anti mabuk perjalanan (jika tidak terbiasa guncangan kuat)"
    ],
    label: "Super Seru!", 
    image: "/offroad.jpg", 
    deskripsi: "Wisata eksplorasi menjelajahi alam pegunungan Pangalengan dengan rintangan berlumpur dan bebatuan yang menegangkan. Rasakan sensasi memacu adrenalin menggunakan mobil Land Rover legendaris bersama driver profesional kami." 
  },
  { 
    id: "paintball", 
    nama: "Paintball Battle", 
    kategori: "Aktivitas Satuan", 
    harga: "Rp 85.000", 
    hargaAsli: "Rp 125.000", 
    fasilitas: [
      "Pistol Gas / Marker Semi-Automatic Terbaru",
      "30 Pcs Peluru Cat (Aman & Mudah Dicuci)",
      "Safety Equipment (Goggle Mask & Rompi Pelindung Tempur)",
      "Instruktur Game, Wasit & Team Medis",
      "Local Transport (Antar Jemput Basecamp)",
      "P3K & Asuransi Kegiatan Resmi",
      "Dokumentasi Kegiatan (S&K Berlaku)"
    ], 
    persiapan: [
      "Baju & celana panjang tebal (mengurangi rasa perih jika terkena tembakan)", 
      "Sepatu olahraga/kets yang nyaman dan tidak licin untuk berlari", 
      "Baju ganti cadangan (jika terkena percikan peluru cat)", 
      "Uang saku ekstra (Paket belum termasuk makan siang/minum, tapi bisa pesan di lokasi)"
    ],
    image: "/paintball.jpg", 
    deskripsi: "Permainan olahraga outbound tembak-menembak menggunakan pistol gas dengan peluru cat. Sangat cocok untuk Anda yang ingin berkompetisi antar tim sambil merasakan ketegangan adrenalin. Susun strategi, hindari tembakan, dan raih objektif bersama tim!" 
  },
  { 
    id: "team-building", 
    nama: "Team Building (Fun Games)", 
    kategori: "Aktivitas Satuan", 
    harga: "Rp 99.000", 
    hargaAsli: "Rp 150.000", 
    fasilitas: [
      "Master Game Tersertifikasi & Tim Fasilitator",
      "Lebih dari 10 Sesi Mini Games Interaktif",
      "Peralatan Games & Sewa Area Lapangan Luas",
      "Sound System Standar Outdoor",
      "Local Transport (Antar Jemput Basecamp)",
      "Air Mineral (Aqua Botol)",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi Foto (S&K Berlaku)"
    ], 
    persiapan: [
      "Pakaian olahraga/kasual yang menyerap keringat dan bebas bergerak", 
      "Sepatu olahraga/kets yang nyaman untuk berlarian di lapangan rumput", 
      "Topi & Sunblock (pelindung dari terik matahari lapangan)", 
      "Uang saku ekstra (Paket belum termasuk makan siang & tiket parkir)"
    ],
    label: "Favorit HRD", 
    image: "/teambuilding1.jpeg", 
    deskripsi: "Rangkaian permainan interaktif yang dirancang khusus untuk memecah ketegangan (ice breaking), membangun solidaritas, dan menumbuhkan kerja sama tim. Sangat direkomendasikan untuk rombongan keluarga besar maupun divisi perusahaan yang ingin me-refresh kekompakan." 
  },
  { 
    id: "flying-fox", 
    nama: "Flying Fox", 
    kategori: "Aktivitas Satuan", 
    harga: "Rp 35.000", 
    hargaAsli: "Rp 50.000", 
    fasilitas: [
      "Zipline Lintas Danau / Kebun Teh (300 Meter)",
      "Safety Equipment Standar Internasional (Harness, Helm)",
      "Instruktur Profesional & Rescue Team",
      "Welcome Drink (Teh Hangat Khas Pangalengan)",
      "Local Transport (Antar Jemput Basecamp)",
      "Akses Kamar Mandi & Toilet Bilas",
      "P3K & Asuransi Kegiatan Resmi",
      "Dokumentasi Kegiatan (S&K Berlaku)"
    ], 
    persiapan: [
      "Pakaian kasual yang nyaman dan tidak longgar saat dipasangkan harness pengaman", 
      "Sepatu tertutup atau sandal gunung (Hindari sandal jepit agar tidak jatuh saat meluncur)", 
      "Kacamata hitam untuk melindungi mata dari angin dan silau matahari", 
      "Uang saku ekstra (Paket belum termasuk tiket parkir kendaraan pribadi & makan)"
    ],
    image: "/flyingfox.jpg", 
    deskripsi: "Pacu adrenalin Anda dengan meluncur bebas menggunakan zipline sepanjang 300 meter. Nikmati sensasi layaknya terbang melintasi hamparan kebun teh yang hijau atau sejuknya permukaan air danau Situ Cileunca yang ikonik di Pangalengan." 
  },
  { 
    id: "treking", 
    nama: "Treking Alam", 
    kategori: "Aktivitas Satuan", 
    harga: "Rp 70.000", 
    hargaAsli: "Rp 100.000", 
    fasilitas: [
      "Eksplorasi Rute Bukit & Kebun Teh (Jarak 5 KM)",
      "Tour Guide Lokal Berpengalaman",
      "Tim Rescue & Pengamanan Jalur",
      "P3K & Medical Kit Darurat",
      "Akses Kamar Mandi & Toilet Bilas",
      "FREE Dokumentasi Kegiatan (S&K Berlaku)"
    ], 
    persiapan: [
      "Sepatu olahraga/trekking yang empuk dan nyaman untuk berjalan jauh (5 KM)", 
      "Air minum (tumbler) pribadi agar tetap terhidrasi di tengah perjalanan", 
      "Topi, kacamata hitam, dan Sunblock untuk melindungi kulit dari terik matahari", 
      "Uang saku ekstra (Paket belum termasuk tiket parkir kendaraan & makan siang)"
    ],
    image: "/treking.jpg", 
    deskripsi: "Lepaskan penat dengan berjalan kaki menjelajahi sejuknya perbukitan dan hamparan kebun teh Pangalengan yang hijau memanjakan mata. Menempuh jarak sekitar 5 KM yang menyehatkan, Anda akan dipandu oleh tour guide lokal kami yang ramah dan berpengalaman menyusuri jalur-jalur estetik tersembunyi." 
  },
  { 
    id: "tour-perahu", 
    nama: "Tour Perahu Danau", 
    kategori: "Aktivitas Satuan", 
    harga: "Rp 20.000", 
    hargaAsli: "Rp 35.000", 
    fasilitas: [
      "Perahu Danau (Kapasitas Max 10 Orang)",
      "Durasi Keliling Danau 30 - 60 Menit",
      "Bahan Bakar & Pengemudi Perahu",
      "Tour Guide Lokal & Tim Rescue Standby",
      "Alat Pengaman (Pelampung / Life Jacket)",
      "Akses Kamar Mandi & Toilet Bilas",
      "P3K & Medical Kit Darurat",
      "FREE Dokumentasi Kegiatan (S&K Berlaku)"
    ], 
    persiapan: [
      "Kamera atau Smartphone dengan memori kosong untuk hunting foto estetik di tengah danau", 
      "Topi, kacamata hitam, dan Sunblock (pantulan sinar matahari di danau cukup silau)", 
      "Pakaian kasual dan santai untuk menikmati angin sepoi-sepoi", 
      "Uang cash ekstra (Paket belum termasuk tiket mampir petik jeruk/strawberry, tiket parkir & makan)"
    ],
    image: "/perahu.jpg", 
    deskripsi: "Bersantai menikmati syahdunya pemandangan dan ketenangan ikonik Situ Cileunca dari atas perahu (durasi 30-60 menit). Anda juga memiliki opsi rute spesial untuk mampir berkunjung ke area kebun petik jeruk atau strawberry di tepian danau!" 
  },

  // COMBO KELUARGA
  { 
    id: "keluarga-hemat", 
    nama: "Hemat & Praktis", 
    kategori: "Combo Keluarga", 
    durasi: "1 Hari", 
    harga: "Rp 199.000", 
    hargaAsli: "Rp 250.000", 
    fasilitas: [
      "Rafting Palayangan 4.5 KM (Aman untuk anak min. 7 tahun & pemula)",
      "Zipline Flying Fox Melintasi Danau Situ Cileunca",
      "1x Makan Siang Khas Sunda (Nikmat disantap setelah lelah bermain)",
      "Seluruh Tiket Masuk Kawasan Wisata",
      "Instruktur Berpengalaman & Tim Rescue Khusus",
      "Perlengkapan Keamanan Standar Internasional (Helm & Pelampung Anak)",
      "Akses Kamar Mandi & Toilet Bilas",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi Foto (Momen tawa keluarga terabadikan sempurna)"
    ], 
    persiapan: [
      "Baju ganti cadangan untuk sekeluarga (termasuk pakaian dalam)", 
      "Kantong plastik tebal atau drybag untuk menyimpan pakaian basah", 
      "Sandal gunung atau sepatu air yang tidak licin untuk anak-anak", 
      "Sunblock, minyak telon/kayu putih, dan obat-obatan pribadi keluarga"
    ],
    label: "Lebih Hemat", 
    image: "/keluarga-hemat.JPG", 
    deskripsi: "Berikan senyuman dan liburan terbaik untuk keluarga tanpa harus merogoh kocek dalam. Paket All-In One Day Trip ini dirancang khusus untuk menciptakan quality time yang bebas ribet. Anda sekeluarga tinggal datang, bermain aman, makan siang dengan nikmat, dan pulang membawa puluhan foto kenangan manis." 
  },

  // KELUARGA SERU
  { 
    id: "keluarga-seru", 
    nama: "Seru Maksimal", 
    kategori: "Combo Keluarga", 
    durasi: "1 Hari", 
    harga: "Rp 299.000", 
    hargaAsli: "Rp 380.000", 
    fasilitas: [
      "ATV Adventure Kebun Teh & Pegunungan (Seru & menantang!)",
      "Rafting Palayangan 4.5 KM (Dipandu penuh instruktur ahli)",
      "Zipline Flying Fox Lintas Danau Situ Cileunca",
      "1x Makan Siang Khas Sunda (Prasmanan/Box sesuai kuota)",
      "Seluruh Tiket Masuk Kawasan & Retribusi",
      "Perlengkapan Keamanan Ekstra (Helm ATV, Sepatu Boots, Pelampung)",
      "Akses Kamar Mandi & Toilet Bilas",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi Foto Spesial Keluarga"
    ], 
    persiapan: [
      "Baju ganti cadangan ekstra (akan kotor berlumpur di ATV & basah di Rafting)", 
      "Kacamata hitam & masker/buff untuk melindungi wajah dari debu saat main ATV", 
      "Sepatu tertutup yang siap kotor (untuk ATV) & sandal gunung (untuk Rafting)", 
      "Kantong plastik tebal untuk memisahkan pakaian basah dan pakaian berlumpur"
    ],
    image: "/keluarga-seru.jpg", 
    deskripsi: "Tingkatkan level petualangan akhir pekan keluarga Anda! Rasakan sensasi 'Triple Action': membelah angin di atas danau (Flying Fox), memacu adrenalin di jalur berlumpur (ATV), dan menantang arus sungai (Rafting). Paket komplit yang dijamin akan membuat anak-anak lepas dari layar gadget mereka seharian penuh." 
  },

  // KELUARGA PUAS
  { 
    id: "keluarga-puas", 
    nama: "Puas Eksplorasi", 
    kategori: "Combo Keluarga", 
    durasi: "1 Hari", 
    harga: "Rp 410.000", 
    hargaAsli: "Rp 480.000", 
    fasilitas: [
      "Eksplorasi Hutan Pinus via Mobil Offroad Land Rover",
      "Rafting Palayangan 4.5 KM (Dipandu instruktur ahli)",
      "Zipline Flying Fox Lintas Danau Situ Cileunca",
      "1x Makan Siang Khas Sunda (Nikmat & Mengenyangkan)",
      "Driver Land Rover, Instruktur Rafting & Tim Rescue Khusus",
      "Seluruh Tiket Masuk Kawasan & Retribusi",
      "Perlengkapan Keamanan Standar Internasional",
      "Akses Kamar Mandi & Toilet Bilas",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi Foto Premium Keluarga"
    ], 
    persiapan: [
      "Jaket tebal pelindung angin (untuk di atas mobil Offroad)",
      "Baju ganti cadangan untuk sekeluarga (karena diakhiri dengan Rafting)", 
      "Sandal gunung atau sepatu air yang tidak licin", 
      "Kacamata hitam, Topi, dan Sunblock untuk kenyamanan maksimal",
      "Kantong plastik tebal untuk menyimpan pakaian basah"
    ],
    label: "Rekomendasi", 
    image: "/keluarga-puas.jpg", 
    deskripsi: "Paket 'Sultan' untuk keluarga bahagia! Jelajahi eksotisme hutan pinus tanpa lelah menggunakan mobil legendaris Land Rover, meluncur bebas di atas danau, lalu ditutup dengan serunya bermain air di sungai Palayangan. Pengalaman premium satu hari penuh dengan letih yang sepadan dengan tawa lepas seluruh anggota keluarga." 
  },
  // COMBO CORPORATE
  // ─── COMBO CORPORATE (1 HARI / ONE DAY TRIP) ───
  { 
    id: "corp-a1d", 
    nama: "Adventure Plus", 
    kategori: "Combo Corporate", 
    durasi: "1 Hari", 
    harga: "Rp 360.000", 
    hargaAsli: "Rp 430.000", 
    fasilitas: [
      "Rafting Palayangan 4.5 KM",
      "Paintball Battle (Termasuk 40 Peluru & Seragam Tempur)",
      "ATV Adventure Kebun Teh",
      "1x Makan Siang Khas Sunda (Prasmanan)",
      "Master Game, Instruktur, & Tim Rescue Profesional",
      "Akses Kamar Mandi, Toilet Bilas & Area Istirahat",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi Foto & Spanduk Kegiatan (S&K Berlaku)"
    ], 
    persiapan: [
      "Baju ganti cadangan (karena akan basah di sungai & berlumpur di ATV)", 
      "Sepatu olahraga/kets yang nyaman dan tidak licin", 
      "Kantong plastik tebal untuk memisahkan pakaian kotor",
      "Flashdisk/Hardisk dari panitia untuk mengamankan file dokumentasi mentah"
    ],
    image: "/corporate-1d-a.jpeg", 
    deskripsi: "Satu hari penuh aksi untuk melepaskan penat dari rutinitas kantor! Kombinasi sempurna antara petualangan air, lumpur (ATV), dan strategi tempur (Paintball) yang akan memompa semangat dan energi baru bagi tim Anda." 
  },
  { 
    id: "corp-b1d", 
    nama: "Synergy Build", 
    kategori: "Combo Corporate", 
    durasi: "1 Hari", 
    harga: "Rp 350.000", 
    hargaAsli: "Rp 410.000", 
    fasilitas: [
      "Team Building & Ice Breaking (Dipandu Master Game ahli)",
      "Paintball Battle (Adu Strategi Antar Divisi)",
      "Rafting Palayangan 4.5 KM",
      "1x Makan Siang Khas Sunda (Prasmanan)",
      "Peralatan Games, Sewa Area Lapangan & Sound System",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi Foto, Video Pendek & Cetak Spanduk Acara"
    ], 
    persiapan: [
      "Pakaian olahraga/seragam kantor (jika ada untuk foto bersama)", 
      "Sepatu olahraga yang nyaman untuk berlarian di lapangan rumput", 
      "Baju ganti cadangan untuk sesi akhir (Rafting)", 
      "Topi & Sunblock pelindung dari terik matahari"
    ],
    label: "⚡ Favorit HRD", 
    image: "/corporate-1d-b.JPG", 
    deskripsi: "Senjata rahasia para HRD! Paket ini dirancang khusus untuk meruntuhkan sekat senioritas, mencairkan kekakuan antar divisi (Ice Breaking), melatih komunikasi tim di bawah tekanan (Paintball), dan diakhiri dengan tawa lepas bersama di derasnya sungai (Rafting)." 
  },
  { 
    id: "corp-c1d", 
    nama: "Xtreme Offroad", 
    kategori: "Combo Corporate", 
    durasi: "1 Hari", 
    harga: "Rp 549.000", 
    hargaAsli: "Rp 630.000", 
    fasilitas: [
      "Team Building & Ice Breaking",
      "Offroad Land Rover Eksplorasi Hutan Pinus",
      "Paintball Battle (Di Area Hutan Pinus)",
      "Rafting Palayangan 4.5 KM",
      "1x Makan Siang Prasmanan & 1x Coffee Break/Snack",
      "Tim Fasilitator, Instruktur, & Driver Profesional",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi VIP & Spanduk Eksklusif Perusahaan"
    ], 
    persiapan: [
      "Pakaian kasual/olahraga yang nyaman dan menyerap keringat", 
      "Jaket pelindung angin untuk perjalanan Offroad di pagi hari", 
      "Baju ganti ekstra karena intensitas kegiatan sangat tinggi", 
      "Sepatu kets tertutup untuk keamanan Paintball & Offroad"
    ],
    image: "/corporate-1n-c.jpg", 
    deskripsi: "Pengalaman outing 1 hari yang super padat dan premium. Anda sebagai panitia cukup duduk tenang, kami yang mengeksekusi seluruh jadwalnya. Biarkan karyawan Anda dimanjakan dengan fasilitas berkelas dan rentetan petualangan ekstrem yang akan menjadi perbincangan hangat di kantor berbulan-bulan lamanya." 
  },

  // COMBO CORPORATE 2 HARI
// ─── COMBO CORPORATE MENGINAP (2 HARI 1 MALAM) ───
  { 
    id: "corp-a2d", 
    nama: "Essential Trip", 
    kategori: "Combo Corporate", 
    durasi: "Menginap", 
    harga: "Rp 239.000", 
    hargaAsli: "Rp 300.000", 
    fasilitas: [
      "Penginapan Standar (Barak / Tenda / Villa Basic 2D1N)",
      "Rafting Palayangan 4.5 KM",
      "Paintball Battle (Seragam, Goggle, Senjata, Peluru)",
      "1x Makan Utama (Siang/Malam)",
      "Fasilitas Api Unggun (Kehangatan Malam Hari)",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Dokumentasi Foto Kegiatan"
    ], 
    persiapan: [
      "Pakaian ganti untuk 2 hari 1 malam, termasuk baju tebal/jaket",
      "Perlengkapan mandi pribadi (handuk, sabun, sikat gigi)",
      "Cemilan ekstra atau bahan makanan (jika ingin masak/bakar-bakar sendiri malam hari)",
      "Obat-obatan pribadi yang spesifik"
    ],
    image: "/corporate-1n-a.JPG", 
    deskripsi: "Solusi cerdas untuk rombongan mahasiswa, komunitas, atau perusahaan dengan budget ketat. Paket ekonomis ini memastikan Anda tetap mendapatkan pengalaman petualangan maksimal (Rafting & Paintball) serta kehangatan berkumpul mengelilingi api unggun di malam hari." 
  },
  { 
    id: "corp-b2d", 
    nama: "Feast & Fun", 
    kategori: "Combo Corporate", 
    durasi: "Menginap", 
    harga: "Rp 650.000", 
    hargaAsli: "Rp 750.000", 
    fasilitas: [
      "Penginapan Villa Nyaman (Kapasitas menyesuaikan rombongan 2D1N)",
      "Rafting Palayangan, Paintball Battle & Flying Fox",
      "Pesta Malam Keakraban: Barbeque",
      "Live Music / Electone (Menyanyi & menari bersama)",
      "Konsumsi Penuh: 3x Makan Besar & 1x Coffee Break",
      "Tour Leader & Master Game Dedikasi Penuh",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Cetak Spanduk, Dokumentasi Foto & Video Cinematic"
    ], 
    persiapan: [
      "Dresscode / Seragam khusus perusahaan untuk foto bersama",
      "Jaket tebal & pakaian tidur yang hangat",
      "Sepatu olahraga yang nyaman untuk aktivitas siang hari",
      "Flashdisk berkapasitas besar (dari panitia) untuk file dokumentasi"
    ],
    label: "Bestseller", 
    image: "/corporate-1n-b.JPG", 
    deskripsi: "Standar Emas (Gold Standard) untuk Outing Perusahaan! Bebaskan panitia dari rasa pusing. Kami urus jadwal dari Anda datang hingga pulang. Siang hari dipacu adrenalinnya, malam hari dimanjakan dengan lezatnya Kambing Guling sambil bernyanyi bersama iringan Live Music. Sempurna!" 
  },
  { 
    id: "corp-c2d", 
    nama: "All-Inclusive", 
    kategori: "Combo Corporate", 
    durasi: "Menginap", 
    harga: "Rp 450.000", 
    hargaAsli: "Rp 520.000", 
    fasilitas: [
      "Penginapan Villa / Homestay Bersih 2D1N",
      "Rafting Palayangan, Paintball Battle & Flying Fox",
      "Konsumsi Penuh: 3x Makan Besar (Siang, Malam, Sarapan)",
      "Fasilitas Api Unggun & Area Kumpul Malam",
      "Tour Leader Pendamping Rombongan",
      "P3K & Asuransi Kegiatan Resmi",
      "FREE Cetak Spanduk Perusahaan & Dokumentasi Foto"
    ], 
    persiapan: [
      "Baju ganti lengkap untuk 2 Hari 1 Malam",
      "Obat-obatan pribadi dan perlengkapan mandi",
      "Sepatu kets untuk Paintball & Sandal gunung untuk Rafting",
      "Jaket pelindung hawa dingin Pangalengan"
    ],
    image: "/rafting.jpg", 
    deskripsi: "Paket efisien yang mencakup semua kebutuhan dasar outing kantor tanpa embel-embel berlebihan. Tidur nyenyak di villa, perut kenyang dengan 3x makan, dan adrenalin terpompa dengan 3 aktivitas ekstrem. Sangat pas untuk menjaga keseimbangan antara budget dan kepuasan karyawan." 
  },
  { 
    id: "corp-d2d", 
    nama: "Relax & Retreat", 
    kategori: "Combo Corporate", 
    durasi: "Menginap", 
    harga: "Rp 200.000", 
    hargaAsli: "Rp 250.000", 
    fasilitas: [
      "Akses Penginapan Standar (Barak/Tenda 2D1N)",
      "Rafting Palayangan 4.5 KM",
      "Sesi Fun Games Ringan di Lapangan",
      "1x Makan Siang Khas Sunda",
      "Instruktur Rafting & Master Game",
      "P3K & Asuransi Kegiatan Resmi"
    ], 
    persiapan: [
      "Pakaian santai dan baju ganti untuk basah-basahan",
      "Uang saku ekstra untuk makan malam dan sarapan (Mandiri)",
      "Perlengkapan mandi & jaket hangat"
    ],
    image: "/paket3.jpg", 
    deskripsi: "Fokus murni pada tawa dan keseruan air dengan harga yang sangat terjangkau. Paket menginap semi-mandiri ini cocok untuk tim kerja kecil yang mengedepankan suasana santai (relax), tidak suka aktivitas yang terlalu berat, dan ingin lebih fleksibel mengatur makan malam sendiri di luar." 
  },
  { 
    id: "corp-vip", 
    nama: "VIP Executive", 
    kategori: "Combo Corporate", 
    durasi: "Menginap", 
    harga: "Rp 1.099.000", 
    hargaAsli: "Rp 1.300.000", 
    fasilitas: [
      "Villa VIP Premium Eksklusif 2D1N (Fasilitas Bintang/Water Heater)",
      "Offroad Land Rover, Rafting Palayangan & Paintball",
      "Konsumsi VIP: 3x Makan Prasmanan Premium & Barbeque Malam",
      "Sesi Motivasi / Team Building Profesional",
      "Private Tour Leader & Asisten Lapangan 24 Jam",
      "Api Unggun & Malam Keakraban Eksklusif",
      "P3K & Asuransi Kegiatan VIP",
      "FREE Dokumentasi Premium: Drone Aerial, Kamera DSLR & Video Cinematic"
    ], 
    persiapan: [
      "Koper berisi pakaian lengkap dan kasual/olahraga",
      "Kacamata hitam, jaket estetik, dan sepatu kets favorit",
      "Flashdisk berkapasitas besar untuk menerima ratusan file foto & video resolusi tinggi"
    ],
    label: "⭐ VIP", 
    image: "/corporate-vip.JPG", 
    deskripsi: "Layanan karpet merah khusus untuk Jajaran Direksi (BOD), Manajer, atau tim dengan pencapaian target tertinggi. Nikmati kemewahan penginapan VIP, menu makan berkelas, hingga dokumentasi megah dari udara menggunakan Drone. Kami melayani Anda layaknya keluarga kerajaan selama di Pangalengan." 
  },
  // ─── FAMILY CAMP / GLAMPING MENGINAP (2 HARI 1 MALAM) ───
  { 
    id: "camp-fca", 
    nama: "Glamping & ATV", 
    kategori: "Family Camp", 
    durasi: "Menginap", 
    harga: "Rp 495.000", 
    hargaAsli: "Rp 580.000", 
    fasilitas: [
      "Tenda Glamping Premium 2D1N (Kasur empuk, bantal, selimut hangat)",
      "Rafting Palayangan, ATV Adventure & Flying Fox",
      "Makan: 1x Sarapan Pagi & 1x Makan Siang",
      "Peminjaman Kompor Portable & Alat Masak",
      "Kayu Bakar untuk Api Unggun Malam Hari",
      "Akses Toilet Bersih & Kamar Mandi Bilas",
      "P3K, Asuransi Kegiatan & Tim Keamanan Lapangan"
    ], 
    persiapan: [
      "Bahan makanan instan / BBQ (Sosis, daging, jagung) untuk dimasak malam hari",
      "Jaket tebal, kaos kaki, dan kupluk (Udara malam kebun teh sangat dingin)",
      "Baju ganti cadangan untuk aktivitas Rafting & ATV keesokan harinya",
      "Powerbank (Meskipun ada aliran listrik, powerbank berguna saat di luar tenda)"
    ],
    image: "/family-camp-a.JPG", 
    deskripsi: "Camping tanpa ribet! Nikmati suasana malam bertabur bintang dan syahdunya api unggun di depan tenda estetik yang sudah kami siapkan lengkap dengan kasur empuk. Pagi harinya, Anda langsung disambut dengan rentetan petualangan seru melintasi air, udara, dan lumpur daratan." 
  },
  { 
    id: "camp-fcb", 
    nama: "Glamping & Offroad", 
    kategori: "Family Camp", 
    durasi: "Menginap", 
    harga: "Rp 620.000", 
    hargaAsli: "Rp 700.000", 
    fasilitas: [
      "Tenda Glamping VIP Premium 2D1N (Fasilitas lengkap & nyaman)",
      "Offroad Land Rover Eksplorasi Hutan Pinus",
      "Rafting Palayangan 4.5 KM & Flying Fox",
      "Makan: 1x Sarapan Pagi & 1x Makan Siang Khas Sunda",
      "Fasilitas Api Unggun Privat & Area Bersantai",
      "FREE Dokumentasi Foto Kegiatan Lapangan",
      "P3K, Asuransi Kegiatan & Guide Berpengalaman"
    ], 
    persiapan: [
      "Pakaian tidur yang sangat hangat dan jaket tebal pelindung angin",
      "Bahan cemilan/BBQ ekstra untuk dinikmati bersama keluarga di depan api unggun",
      "Sepatu kets tertutup untuk perjalanan Offroad dan sandal gunung untuk Rafting",
      "Obat-obatan pribadi keluarga"
    ],
    label: "Rekomendasi", 
    image: "/family-camp-b.JPG",  
    deskripsi: "Kasta tertinggi dari paket Family Camp kami. Ganti ATV dengan sensasi menembus rimbunnya hutan pinus menggunakan mobil tangguh Offroad Land Rover. Pilihan paling sempurna dan estetik bagi keluarga yang mencari harmoni antara ketenangan tidur di alam dan adrenalin tinggi di siang hari." 
  },
  { 
    id: "camp-fcc", 
    nama: "Classic Glamping", 
    kategori: "Family Camp", 
    durasi: "Menginap", 
    harga: "Rp 395.000", 
    hargaAsli: "Rp 450.000", 
    fasilitas: [
      "Tenda Glamping / Dome Standar 2D1N (Termasuk Sleeping Bag/Matras)",
      "Rafting Palayangan 4.5 KM",
      "Zipline Flying Fox Lintas Danau",
      "1x Sarapan Pagi Hangat",
      "Akses Area Api Unggun Bersama",
      "Instruktur Rafting & Tim Rescue",
      "P3K & Asuransi Kegiatan"
    ], 
    persiapan: [
      "Pakaian tebal berlapis (Jaket, sarung tangan, kupluk panjang)",
      "Uang saku ekstra untuk membeli makan malam dan makan siang (Bisa pesan di area camp)",
      "Senter kecil atau headlamp untuk mobilitas malam hari di area camping",
      "Pakaian ganti untuk aktivitas basah-basahan"
    ],
    image: "/flyingfox.jpg",  
    deskripsi: "Pilihan paling bersahabat di kantong untuk merasakan kabut pagi khas Pangalengan dari pintu tenda Anda. Paket basic ini menyertakan sarapan pagi dan dua aktivitas petualangan utama (Rafting & Flying Fox) tanpa mengurangi standar keselamatan dan keseruan sedikit pun." 
  }
];

// FUNGSI HELPER: Bikin Itinerary Otomatis
function getItinerary(kategori: string, durasi?: string) {
  if (durasi === "Menginap") {
    return [
      { waktu: "14:00", kegiatan: "Tiba di lokasi & Check-in Penginapan/Glamping." },
      { waktu: "15:30", kegiatan: "Waktu bebas (Free Time) & Menikmati pemandangan sore." },
      { waktu: "19:00", kegiatan: "Makan Malam & Barbeque / Api Unggun (Sesuai Paket)." },
      { waktu: "07:00", kegiatan: "Sarapan Pagi diiringi udara sejuk Pangalengan (Hari ke-2)." },
      { waktu: "08:30", kegiatan: "Persiapan & Pemakaian Safety Gear." },
      { waktu: "09:00", kegiatan: "Memulai Aktivitas Petualangan." },
      { waktu: "12:00", kegiatan: "Bersih-bersih & Check-out." },
    ];
  }
  return [
    { waktu: "15 Menit", kegiatan: "Registrasi ulang di Basecamp & Penitipan barang bawaan yang aman." },
    { waktu: "15 Menit", kegiatan: "Pemasangan alat keselamatan (Helm, Pelampung) & Briefing oleh instruktur ahli." },
    { waktu: "1.5 - 2 Jam", kegiatan: "Pelaksanaan Aktivitas Inti di lapangan penuh keseruan." },
    { waktu: "30 Menit", kegiatan: "Kembali ke basecamp, istirahat, bersih-bersih (mandi), dan selesai." },
  ];
  
}

// ─── KOMPONEN UTAMA HALAMAN DETAIL ────────────────────────────────────────
export default function DetailPaket() {
  const params = useParams();
  const id = params?.id as string;

  // Cari data
  const paket = masterKatalog.find((item) => item.id === id);

  // Jika paket tidak ada (menghindari error)
  if (!paket) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 px-4 text-center">
        <span className="text-6xl mb-4">🧭</span>
        <h1 className="text-2xl font-bold text-stone-800 sm:text-4xl mb-2">Paket Tidak Ditemukan</h1>
        <p className="text-stone-500 mb-8 max-w-md">Waduh, sepertinya Anda tersesat. Paket yang Anda cari tidak ada dalam daftar.</p>
        <Link href="/katalog-petualangan" className="bg-emerald-600 text-white font-bold px-8 py-3 rounded-full hover:bg-emerald-700 transition">
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const itinerary = getItinerary(paket.kategori, paket.durasi);
  const waLink = generateWALink(`Halo Go Pangalengan, saya tertarik dengan paket *${paket.nama}* (${paket.harga}). Boleh minta info tanggal yang kosong?`);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 pb-28 sm:pb-32 font-sans relative">
      
      {/* 1. HERO IMAGE & TOMBOL KEMBALI */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] bg-stone-900">
        <Image src={paket.image} alt={paket.nama} fill className="object-cover opacity-70" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
        
        <Link href="/katalog-petualangan" className="absolute top-6 left-4 sm:top-8 sm:left-8 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-black/50 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </Link>

        {paket.label && (
           <span className={`absolute top-6 right-4 sm:top-8 sm:right-8 z-10 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg tracking-wider bg-emerald-500`}>
             {paket.label}
           </span>
        )}
      </div>

      {/* 2. KONTEN UTAMA (Body) */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 p-6 sm:p-10">
          
          {/* Header Info */}
          <div className="border-b border-stone-100 pb-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-stone-100 text-stone-500">{paket.kategori}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-800 tracking-tight leading-tight mb-4">{paket.nama}</h1>
            <p className="text-sm sm:text-base text-stone-500 leading-relaxed font-medium">{paket.deskripsi}</p>
          </div>

          {/* Bagian Grid: Fasilitas & Itinerary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Fasilitas */}
            <div>
              <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="text-emerald-500">✨</span> Apa yang Anda Dapatkan
              </h2>
              <ul className="space-y-3">
                {paket.fasilitas.map((fas, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-stone-600 font-medium">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 font-bold text-[10px] mt-0.5">✓</span>
                    <span className="leading-relaxed">{fas}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="text-lg font-bold text-stone-800 mb-5 flex items-center gap-2">
                <span className="text-emerald-500">⏱️</span> Rencana Perjalanan
              </h2>
              <div className="relative border-l-2 border-stone-100 ml-3 space-y-6">
                {itinerary.map((item, i) => (
                  <div key={i} className="relative pl-6">
                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white bg-emerald-400 shadow-sm"></span>
                    <h4 className="text-[11px] font-black text-emerald-600 uppercase tracking-wider mb-0.5">{item.waktu}</h4>
                    <p className="text-sm text-stone-600 font-medium leading-relaxed">{item.kegiatan}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SESI BARU: OPSI TIER HARGA (Muncul jika ada data) */}
          {paket.opsiHarga && (
            <div className="mt-10 p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100">
              <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2 text-base">
                <span className="text-xl">💰</span> Pilihan Tier Paket
              </h3>
              <div className="space-y-3">
                {paket.opsiHarga.map((opsi, i) => (
                  <div key={i} className="flex justify-between items-center bg-white p-3 sm:p-4 rounded-xl border border-emerald-100 shadow-sm">
                    <span className="text-sm font-bold text-stone-700">{opsi.nama}</span>
                    <span className="text-sm font-black text-emerald-600">{opsi.harga}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SESI BARU: PERSIAPAN (Muncul jika ada data) */}
          {paket.persiapan && (
            <div className="mt-8 bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2 text-base">
                <span className="text-xl">🎒</span> Perlu Kamu Siapkan!
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {paket.persiapan.map((item, i) => (
                  <li key={i} className="text-xs font-medium text-amber-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* SESI BARU: VIDEO SHORT LOCAL (Dari folder public) */}
          {paket.video && (
            <div className="mt-12 pt-8 border-t border-stone-100 text-center">
              <h2 className="text-lg font-bold text-stone-800 mb-2 flex items-center justify-center gap-2">
                <span className="text-emerald-500">🎬</span> Cuplikan Keseruan
              </h2>
              <p className="text-xs text-stone-500 mb-6">Lihat aksi nyatanya sebelum Anda merasakannya langsung!</p>
              
              <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-stone-100 border-4 border-white group">
                <video 
                  className="w-full h-full object-cover"
                  controls // Menampilkan tombol play/pause bawaan browser
                  preload="metadata" // Agar tidak berat saat loading halaman pertama kali
                  playsInline
                >
                  <source src={paket.video} type="video/mp4" />
                  Browser Anda tidak mendukung pemutar video ini.
                </video>
              </div>
            </div>
          )}

          {/* SESI BARU: REKOMENDASI PAKET LAIN */}
          <div className="mt-16 pt-8 border-t border-stone-100">
            <h2 className="text-lg font-bold text-stone-800 mb-6 text-center">Mungkin Kamu Juga Suka</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {masterKatalog.filter(p => p.id !== id).slice(0, 2).map((item) => (
                <Link 
                  key={item.id}
                  href={`/paket/${item.id}`}
                  className="group flex items-center gap-4 bg-white p-3 rounded-2xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition"
                >
                  <div className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.nama} fill className="object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-800 line-clamp-1 group-hover:text-emerald-600 transition">{item.nama}</h4>
                    <p className="text-[11px] text-emerald-600 font-black mt-0.5">{item.harga}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 3. STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 p-4 sm:px-8 sm:py-5 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
        <div className="mx-auto max-w-4xl flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-widest mb-0.5">Mulai Dari</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-2xl font-black text-emerald-700 tracking-tight">{paket.harga}</span>
              <span className="text-[10px] sm:text-xs text-stone-500 font-medium">/pax</span>
            </div>
          </div>
          
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-3.5 rounded-full transition-all shadow-md hover:shadow-lg shrink-0">
            Pesan Sekarang
          </a>
        </div>
      </div>

    </div>
  );
}