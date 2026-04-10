"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { generateWALink } from "@/config/contact"; // Pastikan path ini sesuai dengan file Anda

// ─── DATA MASTER PENGINAPAN ──────────────────────────────────────────────
const masterPenginapan = [
  {
    id: "wantea",
    nama: "Villa Wantea",
    kategori: "Villa Klasik",
    kapasitas: "20 - 30 Orang",
    hargaWeekday: "Rp 3.000.000",
    hargaWeekend: "Rp 3.500.000",
    extraBed: "Rp 75.000 / orang",
    fasilitas: [
      "6 Kamar Tidur (Single, King, & Queen Bed)",
      "2 Ruangan Luas (Bisa gelar extra bed)",
      "4 Kamar Mandi + Water Heater",
      "Meja Billiard & Speaker Karaoke",
      "TV, WiFi 24 Jam, & CCTV Keamanan",
      "Dapur Lengkap, Dispenser & Alat Makan",
      "Area Parkir Luas"
    ],
    label: "Kapasitas Besar",
    image: "/wantea.jpg",
    deskripsi: "Berarsitektur klasik Belanda yang megah dan nyaman. Dengan kapasitas raksasa hingga 30 orang, Villa Wantea adalah pilihan paling sempurna untuk memboyong seluruh keluarga besar atau divisi kantor Anda. Tersedia hiburan Billiard dan Karaoke!"
  },
  {
    id: "saung-rungkun",
    nama: "Saung Rungkun",
    kategori: "Cottage & Pool",
    kapasitas: "10 - 15 Orang",
    hargaWeekday: "Rp 1.500.000",
    hargaWeekend: "Rp 1.700.000",
    extraBed: "Rp 75.000 / orang",
    fasilitas: [
      "1 Ruang Tidur Utama (3 Queensize Bed)",
      "9 Extrabed Tebal Tersedia",
      "Akses Kolam Renang Bersama",
      "1 Kamar Mandi & Dapur Lengkap",
      "TV, WiFi, & Water Dispenser",
      "Area Parkir & CCTV Keamanan"
    ],
    image: "/saung-rungkun.jpg",
    deskripsi: "Cottage lengkap yang memadukan kenyamanan dan suasana alam yang sangat asri. Dilengkapi dengan kolam renang, tempat ini sangat pas untuk liburan akhir pekan keluarga yang mencari ketenangan dan udara segar."
  },
  {
    id: "saung-gadis",
    nama: "Saung Gadis",
    kategori: "Premium Cottage",
    kapasitas: "10 - 15 Orang",
    hargaWeekday: "Rp 850.000",
    hargaWeekend: "Rp 1.000.000",
    extraBed: "Rp 75.000 / bed",
    fasilitas: [
      "1 Ruang Tidur (5 Queensize Bed)",
      "2 Kamar Mandi + Water Heater & 10 Kamar Bilas",
      "Mini Pantry, Alat Masak & Alat Makan",
      "Fasilitas Alat Bakar BBQ",
      "Akses Kolam Renang Bersama",
      "TV, WiFi, Dispenser, Area Parkir & CCTV"
    ],
    label: "Bestseller",
    image: "/saung-gadis.jpg",
    deskripsi: "Cottage premium berkapasitas besar dengan harga yang sangat bersahabat. Punya area khusus untuk BBQ di malam hari dan akses kolam renang. Tersedia 2 unit yang bisa disewa bersamaan untuk rombongan lebih besar!"
  },
  {
    id: "saung-family",
    nama: "Saung Family",
    kategori: "Tradisional Cottage",
    kapasitas: "5 - 10 Orang",
    hargaWeekday: "Rp 750.000",
    hargaWeekend: "Rp 1.000.000",
    extraBed: "Tersedia dengan biaya tambahan",
    fasilitas: [
      "1 Ruang Tidur (1 Kingbed & 3 Twinbed)",
      "Toilet + Water Heater",
      "Kompor, Alat Masak & Water Dispenser",
      "Selimut & Bantal Lengkap",
      "TV, WiFi, Area Parkir & CCTV"
    ],
    image: "/saung-family.jpg",
    deskripsi: "Cottage ikonik bergaya tradisional Sunda yang langsung menghadap ke indahnya danau Situ Cileunca. Memberikan pengalaman menginap unik dan menyatu dengan alam Pangalengan untuk keluarga kecil Anda."
  },
  {
    id: "palayangan-b",
    nama: "Villa Palayangan B",
    kategori: "Villa Premium",
    kapasitas: "25 - 35 Orang",
    hargaWeekday: "Rp 4.500.000",
    hargaWeekend: "Rp 5.000.000",
    extraBed: "Rp 75.000 / orang",
    fasilitas: [
      "6 Kamar Tidur Mewah (Tersebar di 2 Lantai)",
      "Banyak Bed Kingsize & Queensize + Sofa",
      "Akses Langsung View Danau Situ Cileunca",
      "Meja Billiard & Meja Pingpong",
      "Aula Luas, Karaoke & Balkon Estetik",
      "Kulkas, Dapur, Dispenser, TV & WiFi",
      "Total 7+ Toilet (Sebagian En-suite)"
    ],
    label: "VIP",
    image: "/palayangan-b.jpg",
    deskripsi: "Definisi kemewahan di tepi danau! Villa raksasa berlantai dua ini dirancang untuk memanjakan rombongan hingga 35 orang. Dengan pemandangan langsung ke Situ Cileunca dan fasilitas hiburan sekelas hotel bintang, ini adalah pilihan paling elit di Pangalengan."
  },
  {
    id: "palayangan-a",
    nama: "Glamping Palayangan A",
    kategori: "Premium Cabin",
    kapasitas: "4 - 8 Orang / Unit",
    hargaWeekday: "Rp 1.750.000",
    hargaWeekend: "Rp 2.250.000",
    extraBed: "Rp 150.000 (Inc. Sarapan)",
    fasilitas: [
      "Cabin Kayu Estetik (2 Kasur Queensize)",
      "Sarapan Pagi (Breakfast) Termasuk",
      "Ruang Tengah + TV & Internet WiFi",
      "Toilet Duduk + Water Heater",
      "Mini Cafe & Mushola di Area",
      "FREE Transport ke Destinasi Wisata",
      "FREE Tour Leader Pendamping"
    ],
    label: "Sangat Estetik",
    image: "/palayangan-a.jpg",
    deskripsi: "Primadona baru di Pangalengan (Harmony Riverside). Glamping dan cabin berkelas premium untuk Anda yang ingin rehat sejenak dari hiruk-pikuk kota namun tetap menginginkan layanan ala hotel mewah. Dapatkan juga fasilitas antar-jemput gratis ke tempat wisata!"
  },
  {
    id: "bts",
    nama: "Villa BTS",
    kategori: "Villa Modern",
    kapasitas: "15 - 20 Orang",
    hargaWeekday: "Rp 2.000.000",
    hargaWeekend: "Rp 2.250.000",
    extraBed: "Rp 50.000 / bed",
    fasilitas: [
      "4 Kamar Tidur (Queen & Kingsize Bed)",
      "Ruangan Luas untuk Berkumpul",
      "3 Kamar Mandi",
      "Dapur (Kitchen) & Water Dispenser",
      "Fasilitas Hiburan: Billiard & Soccer Board",
      "TV, WiFi & Area Parkir"
    ],
    image: "/bts.jpg",
    deskripsi: "Villa super nyaman yang dirancang khusus untuk memecah kebosanan! Dilengkapi dengan fasilitas Billiard dan Meja Foosball (Soccer Board), menjadikan malam keakraban bersama keluarga atau teman terasa semakin hangat dan seru."
  },
  {
    id: "family-c",
    nama: "Homestay Family C",
    kategori: "Homestay Premium",
    kapasitas: "20 - 30 Orang",
    hargaWeekday: "Rp 3.000.000",
    hargaWeekend: "Rp 3.250.000",
    extraBed: "Rp 50.000 / bed",
    fasilitas: [
      "4 Kamar Tidur (Queensize Bed)",
      "1 Ruang Tengah Luas (Bisa Extra Bed)",
      "3 Kamar Mandi + Water Heater",
      "Perapian Klasik Penghangat Ruangan",
      "Dapur Lengkap & Dispenser",
      "View Langsung Situ Cileunca",
      "TV, WiFi & Area Parkir"
    ],
    label: "View Danau",
    image: "/family-c.jpg",
    deskripsi: "Rasakan syahdunya malam di Pangalengan dengan duduk mengelilingi perapian klasik di dalam rumah. Homestay berkapasitas besar ini menawarkan perpaduan suasana asri pegunungan dan tata letak rumah yang menghangatkan."
  },
  {
    id: "family-a",
    nama: "Homestay Family A",
    kategori: "Homestay Premium",
    kapasitas: "20 - 25 Orang",
    hargaWeekday: "Rp 2.000.000",
    hargaWeekend: "Rp 2.250.000",
    extraBed: "Rp 50.000 / bed",
    fasilitas: [
      "3 Kamar Tidur (Queensize Bed)",
      "2 Ruang Luas untuk Berkumpul",
      "2 Kamar Mandi + Water Heater",
      "Perapian Klasik (Fireplace)",
      "Dapur, Dispenser, TV & WiFi",
      "View Alam Situ Cileunca"
    ],
    image: "/family.jpg",
    deskripsi: "Homestay luas dengan fasilitas perapian di dalam ruangan. Menyuguhkan pemandangan menawan ke arah danau Situ Cileunca, menjadikannya pelarian sempurna untuk rombongan yang mencari keintiman."
  },
  {
    id: "family-b",
    nama: "Homestay Family B",
    kategori: "Homestay Premium",
    kapasitas: "25 - 30 Orang",
    hargaWeekday: "Rp 2.000.000",
    hargaWeekend: "Rp 2.250.000",
    extraBed: "Rp 50.000 / bed",
    fasilitas: [
      "3 Kamar Tidur (Queensize Bed)",
      "1 Ruang Tengah Raksasa",
      "2 Kamar Mandi + Water Heater",
      "Perapian Klasik dalam Rumah",
      "Dapur, Dispenser, TV & WiFi",
      "Pemandangan Alam Situ Cileunca"
    ],
    image: "/family.jpg",
    deskripsi: "Serupa dengan seri Family lainnya namun dengan optimalisasi kapasitas ruang tengah yang lebih lega. Solusi cerdas untuk rombongan 30 orang yang ingin menekan budget menginap namun tetap mendapat fasilitas bintang."
  },
  {
    id: "saung-cinta",
    nama: "Saung Cinta",
    kategori: "Cottage & Pool",
    kapasitas: "10 - 20 Orang",
    hargaWeekday: "Rp 750.000",
    hargaWeekend: "Rp 1.200.000",
    extraBed: "Rp 50.000 / bed",
    fasilitas: [
      "1 Kamar Tidur & 1 Ruang Tidur (2 Queensize Bed)",
      "16 Matras Tebal Tambahan",
      "1 Kamar Mandi Heater & 10 Kamar Bilas",
      "Akses Kolam Renang Bersama",
      "Mini Pantry & Alat Bakar BBQ",
      "TV, WiFi, Dispenser, Area Parkir & CCTV"
    ],
    image: "/saung-cinta.jpg",
    deskripsi: "Cottage berkonsep 'cozy' yang sangat bersahabat di kantong. Menyediakan fasilitas melimpah mulai dari alat BBQ hingga akses kolam renang, tempat ini dirancang untuk menciptakan memori penuh tawa bersama orang-orang tercinta."
  },
  {
    id: "glamping-sagaya",
    nama: "Glamping Sagaya",
    kategori: "Glamour Camping",
    kapasitas: "4 - 8 Orang",
    hargaWeekday: "Rp 750.000",
    hargaWeekend: "Rp 850.000",
    extraBed: "Tersedia dengan biaya tambahan",
    fasilitas: [
      "Tenda Estetik dengan Matras Tebal, Bantal & Selimut",
      "Kelistrikan & WiFi 24 Jam di dalam Tenda",
      "Kompor Portable & Dispenser",
      "Toilet + Water Heater (Di Luar Tenda)",
      "Aktivitas Memancing (Tangkap & Lepas)",
      "View Hamparan Kebun Teh & Pegunungan"
    ],
    label: "Tenda Premium",
    image: "/glamping-sagaya.jpg",
    deskripsi: "Rasakan magisnya tidur beralaskan alam tanpa mengorbankan kenyamanan. Buka pintu tenda Anda di pagi hari dan saksikan lukisan nyata hamparan kebun teh yang berselimut kabut tebal."
  },
  {
    id: "bumi-tilu",
    nama: "Villa Bumi Tilu",
    kategori: "Super Premium",
    kapasitas: "4 - 10 Orang",
    hargaWeekday: "Rp 4.500.000",
    hargaWeekend: "Rp 5.000.000",
    extraBed: "Tersedia dengan biaya tambahan",
    fasilitas: [
      "2 Kamar Tidur Utama & 1 Ruang Tidur (King & Twin Bed)",
      "Fasilitas Super Premium Serasa Hotel Bintang 5",
      "Kolam Renang Pribadi (Private Pool)",
      "Dapur Bersih Terbuka dengan Kompor & Alat Masak",
      "Kulkas / Freezer Besar & Dispenser",
      "Toilet Mewah + Water Heater",
      "TV, WiFi, Parkir & CCTV Keamanan"
    ],
    label: "Sultan Only",
    image: "/bumi-tilu.jpg",
    deskripsi: "Dirancang khusus untuk 'Sultan' yang mendambakan privasi tingkat tinggi. Villa dengan arsitektur modern minimalis yang berpadu dengan kolam renang pribadi dan pemandangan alam Pangalengan. Sebuah karya seni tempat Anda beristirahat."
  },
  {
    id: "vila-putih",
    nama: "Vila Putih",
    kategori: "Premium Villa",
    kapasitas: "35 - 45 Orang",
    hargaWeekday: "Rp 6.000.000",
    hargaWeekend: "Rp 6.500.000",
    extraBed: "Rp 50.000 / bed",
    fasilitas: [
      "4 Kamar Tidur (Queen & Kingsize Bed)",
      "Ruang Tengah Raksasa (Kapasitas Ekstra Bed Puluhan)",
      "4 Kamar Mandi + Water Heater",
      "Arsitektur Nyentrik Keren (Instagramable)",
      "Kitchen/Dapur & Water Dispenser",
      "TV, WiFi, Area Parkir Luas"
    ],
    image: "/vila-putih.jpg",
    deskripsi: "Villa berdesain arsitektur putih yang sangat nyentrik dan mencolok. Sangat 'Instagramable' di setiap sudutnya. Memiliki daya tampung ekstrem hingga 45 orang, ini adalah primadona untuk acara gathering perusahaan berskala besar."
  },
  {
    id: "vila-putih-a",
    nama: "Vila Putih A",
    kategori: "Premium Villa",
    kapasitas: "20 - 25 Orang",
    hargaWeekday: "Rp 3.500.000",
    hargaWeekend: "Rp 4.000.000",
    extraBed: "Rp 50.000 / bed",
    fasilitas: [
      "4 Kamar Tidur (Queensize Bed)",
      "1 Ruang Tengah untuk Berkumpul",
      "2 Kamar Mandi + Water Heater",
      "Desain Putih Nyentrik (Spot Foto Estetik)",
      "Kitchen/Dapur & Water Dispenser",
      "TV, WiFi, Area Parkir"
    ],
    image: "/vila-putih.jpg",
    deskripsi: "Versi lebih compact dari Vila Putih utama. Tetap mempertahankan garis arsitektur fotogenik yang elegan. Sangat pas untuk rombongan keluarga menengah yang mencari estetika dan kenyamanan premium."
  },
  {
    id: "barak-ghc",
    nama: "Barak GHC",
    kategori: "Barak Outing",
    kapasitas: "20 Orang / Unit",
    hargaWeekday: "Rp 2.000.000",
    hargaWeekend: "Rp 2.250.000",
    extraBed: "Tersedia",
    fasilitas: [
      "Ruang Tidur Konsep Barak (Setting 20 Matras)",
      "Matras Tebal, Selimut & Bantal Termasuk",
      "Kamar Mandi & Area Bilas Komunal",
      "Aula Serbaguna & Lapangan Luas (Cocok untuk Games)",
      "View Langsung Menghadap Danau",
      "TV, WiFi, Dispenser & Area Parkir",
      "Tersedia Total 6 Unit (Bisa untuk 120+ Orang)"
    ],
    label: "Ideal untuk Panitia/HRD",
    image: "/barak.jpg",
    deskripsi: "Dirancang secara spesifik untuk memfasilitasi rombongan LDKS, Mahasiswa, atau Outing Divisi Perusahaan. Konsep barak komunal memupuk kebersamaan. Ditambah akses lapangan luas dan aula serbaguna, semua rundown acara Anda akan berjalan lancar di sini."
  },
  {
    id: "imah",
    nama: "Villa Imah",
    kategori: "Villa Modern",
    kapasitas: "20 - 30 Orang",
    hargaWeekday: "Rp 5.500.000",
    hargaWeekend: "Rp 6.000.000",
    extraBed: "Tersedia",
    fasilitas: [
      "5 Kamar Tidur Mewah & 3 Ruang Tidur Terpisah",
      "King & Queensize Bed dengan Matras Premium",
      "Dapur Modern (Kitchen Super Lengkap + Oven & Stove)",
      "Ruang Tengah Elegan & Lapangan Luas",
      "Kamar Mandi & Area Bilas Bersih",
      "TV, WiFi, Dispenser, Area Parkir & CCTV"
    ],
    label: "Super Nyaman",
    image: "/imah.jpg",
    deskripsi: "Villa luas dengan sentuhan fasilitas serba modern. Daya tarik utamanya terletak pada 'Super Kitchen' yang dilengkapi Oven, memanjakan ibu-ibu yang gemar berkreasi memasak saat liburan. Kemewahan yang diimbangi dengan pemandangan alam memukau."
  }
];


// ─── KOMPONEN UTAMA HALAMAN DETAIL PENGINAPAN ───────────────────────────
export default function DetailPenginapan() {
  const params = useParams();
  const id = params?.id as string;

  // Cari data
  const item = masterPenginapan.find((p) => p.id === id);

  // Jika penginapan tidak ada
  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 px-4 text-center">
        <span className="text-6xl mb-4">🏠</span>
        <h1 className="text-2xl font-bold text-stone-800 sm:text-4xl mb-2">Penginapan Tidak Ditemukan</h1>
        <p className="text-stone-500 mb-8 max-w-md">Mohon maaf, penginapan yang Anda cari tidak tersedia di katalog kami.</p>
        <Link href="/katalog-penginapan" className="bg-emerald-600 text-white font-bold px-8 py-3 rounded-full hover:bg-emerald-700 transition">
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  // Generate WA Link
  const waLink = generateWALink(`Halo Go Pangalengan, saya tertarik untuk reservasi penginapan *${item.nama}*. Boleh minta info availability tanggal kosong?`);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 pb-28 sm:pb-32 font-sans relative">
      
      {/* 1. HERO IMAGE & TOMBOL KEMBALI */}
      <div className="relative w-full h-[40vh] sm:h-[55vh] bg-stone-900">
        <Image src={item.image} alt={item.nama} fill className="object-cover opacity-80" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-90"></div>
        
        <Link href="/katalog-penginapan" className="absolute top-6 left-4 sm:top-8 sm:left-8 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-black/50 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </Link>

        {item.label && (
           <span className="absolute top-6 right-4 sm:top-8 sm:right-8 z-10 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg tracking-wider bg-emerald-500">
             {item.label}
           </span>
        )}
      </div>

      {/* 2. KONTEN UTAMA */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 p-6 sm:p-10">
          
          {/* Header Info */}
          <div className="border-b border-stone-100 pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-emerald-100 text-emerald-700">{item.kategori}</span>
                <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded bg-stone-100 text-stone-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Kapasitas: {item.kapasitas}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-800 tracking-tight leading-tight mb-4">{item.nama}</h1>
              <p className="text-sm sm:text-base text-stone-500 leading-relaxed font-medium max-w-2xl">{item.deskripsi}</p>
            </div>
          </div>

          {/* Kotak Harga */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">Tarif Weekday</h4>
              <p className="text-2xl font-black text-stone-800">{item.hargaWeekday} <span className="text-sm font-medium text-stone-500">/ malam</span></p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200">
              <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Tarif Weekend</h4>
              <p className="text-2xl font-black text-emerald-800">{item.hargaWeekend} <span className="text-sm font-medium text-emerald-600">/ malam</span></p>
            </div>
          </div>

          {/* Grid Fasilitas & Aturan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Kiri: Fasilitas */}
            <div>
              <h2 className="text-lg font-bold text-stone-800 mb-5 flex items-center gap-2">
                <span className="text-emerald-500">✨</span> Fasilitas Utama
              </h2>
              <ul className="space-y-4">
                {item.fasilitas.map((fas, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-stone-600 font-medium">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-bold text-[10px]">✓</span>
                    <span className="leading-relaxed mt-0.5">{fas}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kanan: Aturan & Info Penting */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-5 border-2 border-stone-100 shadow-sm">
                <h3 className="font-bold text-stone-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <span className="text-lg">🛏️</span> Ekstra Bed
                </h3>
                <p className="text-sm text-stone-600 font-medium bg-stone-50 p-3 rounded-lg border border-stone-200">
                  Biaya tambahan: <strong className="text-stone-800">{item.extraBed}</strong> jika jumlah peserta melebihi kapasitas standar bed yang disediakan.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
                <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <span className="text-lg">⏰</span> Ketentuan Waktu
                </h3>
                <div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-amber-100 mb-2">
                  <span className="text-sm font-bold text-amber-700">Waktu Check-In</span>
                  <span className="text-sm font-black text-amber-900">Mulai 13:00 WIB</span>
                </div>
                <div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-amber-100">
                  <span className="text-sm font-bold text-amber-700">Waktu Check-Out</span>
                  <span className="text-sm font-black text-amber-900">Maksimal 11:00 WIB</span>
                </div>
              </div>
            </div>

          </div>

          {/* SESI REKOMENDASI PENGINAPAN LAIN */}
          <div className="mt-16 pt-8 border-t border-stone-100">
            <h2 className="text-lg font-bold text-stone-800 mb-6 text-center">Jelajahi Pilihan Lainnya</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {masterPenginapan.filter(p => p.id !== id).sort(() => 0.5 - Math.random()).slice(0, 2).map((other) => (
                <Link 
                  key={other.id}
                  href={`/penginapan/${other.id}`}
                  className="group flex items-center gap-4 bg-white p-3 rounded-2xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition"
                >
                  <div className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0">
                    <Image src={other.image} alt={other.nama} fill className="object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-800 line-clamp-1 group-hover:text-emerald-600 transition">{other.nama}</h4>
                    <p className="text-[11px] text-stone-500 font-medium mt-0.5">Mulai dari <span className="text-emerald-600 font-black">{other.hargaWeekday}</span></p>
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
            <span className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-widest mb-0.5">Amankan Tanggalnya</span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm sm:text-base font-medium text-stone-600">Hubungi CS Kami</span>
            </div>
          </div>
          
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-3.5 rounded-full transition-all shadow-md hover:shadow-lg shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.048l-3.281-.525a1.125 1.125 0 00-1.22.59l-1.92 3.84a16.03 16.03 0 01-8.25-8.25l3.84-1.92c.28-.14.5-.38.59-1.22l-.525-3.28a1.125 1.125 0 00-1.048-.865H3.75A2.25 2.25 0 002.25 6.75z" /></svg>
            Tanya Ketersediaan
          </a>
        </div>
      </div>

    </div>
  );
}