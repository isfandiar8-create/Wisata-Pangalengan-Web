"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { masterPenginapan } from "@/data/penginapan";
import { generateWALink } from "@/config/contact";

// ─── KONFIGURASI FILTER (Lebih Ramping & Fokus) ───
const jenisFilters = ["Semua", "Villa", "Cottage", "Glamping", "Barak"];
const kapasitasFilters = ["Semua", "Kecil (< 10 Org)", "Sedang (10-20 Org)", "Besar (> 20 Org)"];

// ─── FUNGSI HELPER: Ekstrak Angka Kapasitas Maksimal ───
const getMaxCapacity = (kapasitasStr: string) => {
  const nums = kapasitasStr.match(/\d+/g);
  if (!nums) return 0;
  return Math.max(...nums.map(Number));
};

// ─── FUNGSI HELPER: Bikin Harga Coret (Mark up 25%) ───
const generateFakeOriginalPrice = (hargaStr: string) => {
  const numericPrice = parseInt(hargaStr.replace(/[^0-9]/g, ''));
  if (isNaN(numericPrice)) return "";
  const originalPrice = numericPrice * 1.25; 
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(originalPrice);
};

// ─── KOMPONEN KARTU OTA ELEGAN (LIST VIEW) ───
function OTAListCard({ item }: { item: any }) {
  const maxCap = getMaxCapacity(item.kapasitas);
  const hargaCoret = generateFakeOriginalPrice(item.hargaWeekday);

  // Menentukan tag elegan berdasarkan kapasitas & kategori
  let otaBadge = "";
  let otaBadgeColor = "";
  if (maxCap > 20) {
    otaBadge = "Kapasitas Besar";
    otaBadgeColor = "bg-stone-100 text-stone-600 border-stone-200";
  } else if (item.kategori.includes("Premium") || item.kategori.includes("Super")) {
    otaBadge = "Kenyamanan Ekstra";
    otaBadgeColor = "bg-amber-50 text-amber-700 border-amber-200";
  } else if (item.kategori.includes("Glamping")) {
    otaBadge = "Menyatu dengan Alam";
    otaBadgeColor = "bg-emerald-50 text-emerald-700 border-emerald-200";
  } else {
    otaBadge = "Sering Dipesan";
    otaBadgeColor = "bg-stone-100 text-stone-600 border-stone-200";
  }

  return (
    <Link 
      href={`/penginapan/${item.id}`} 
      className="group flex flex-row bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all duration-300 overflow-hidden h-36 sm:h-48"
    >
      {/* KIRI: Gambar Compact */}
      <div className="w-[120px] sm:w-[240px] h-full relative shrink-0 overflow-hidden bg-stone-100">
        <Image 
          src={item.image} 
          alt={item.nama} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
          sizes="(max-width: 768px) 120px, 240px"
        />
        {/* Label Unik (Kiri Atas) */}
        {item.label && (
          <div className="absolute top-0 left-0 bg-emerald-600 text-white text-[8px] sm:text-[9px] font-black uppercase px-2 py-1 rounded-br-lg shadow-sm z-10">
            {item.label}
          </div>
        )}
      </div>

      {/* KANAN: Detail Elegan Ala OTA */}
      <div className="flex-1 flex flex-col p-2.5 sm:p-4 justify-between min-w-0">
        
        {/* Bagian Atas: Judul, Kapasitas, Fasilitas */}
        <div>
          <div className="flex justify-between items-start gap-1">
            <h3 className="text-sm sm:text-lg font-bold text-stone-800 leading-tight truncate group-hover:text-emerald-700 transition-colors">
              {item.nama}
            </h3>
            {/* Rating Statis Elegan */}
            <div className="hidden sm:flex items-center gap-1 shrink-0 bg-stone-50 border border-stone-200 px-1.5 py-0.5 rounded-md">
              <span className="text-stone-700 text-[10px] sm:text-xs font-black">⭐ 4.8</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-medium text-stone-500 mt-0.5 mb-1.5 sm:mb-2">
            <span className="bg-stone-100 px-1.5 py-0.5 rounded uppercase tracking-wider">{item.kategori}</span>
            <span>•</span>
            <span className="truncate">📍 Pangalengan</span>
          </div>

          {/* Rincian Fasilitas Cerdas (Ambil 2 Poin Pertama dari Data) */}
          {item.fasilitas && item.fasilitas.length > 0 && (
            <ul className="hidden sm:block space-y-0.5 mb-2">
              {item.fasilitas.slice(0, 2).map((fas: string, i: number) => (
                <li key={i} className="text-[10px] text-stone-500 truncate font-medium flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> {fas}
                </li>
              ))}
            </ul>
          )}

          {/* Badges Kapasitas & Trust */}
          <div className="flex flex-wrap gap-1 mt-1">
            <span className="text-[8px] sm:text-[9px] font-bold text-stone-600 bg-stone-50 px-1.5 py-0.5 rounded-md border border-stone-200 flex items-center gap-1">
              👥 Muat {item.kapasitas}
            </span>
            <span className={`text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${otaBadgeColor}`}>
              {otaBadge}
            </span>
          </div>
        </div>

        {/* Bagian Bawah: Harga Final */}
        <div className="mt-auto flex flex-col items-end text-right border-t border-stone-100 pt-1.5 sm:pt-2">
          {/* Harga Coret Elegan */}
          {hargaCoret && (
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-[8px] sm:text-[9px] text-emerald-700 bg-emerald-50 font-bold px-1 rounded uppercase tracking-wider hidden sm:inline-block">Hemat 25%</span>
              <span className="text-[9px] sm:text-[11px] text-stone-400 line-through font-medium">
                {hargaCoret}
              </span>
            </div>
          )}
          {/* Harga Final */}
          <div className="flex items-baseline gap-1">
            <span className="text-sm sm:text-xl font-black text-emerald-700 tracking-tight">{item.hargaWeekday}</span>
          </div>
        </div>
        
      </div>
    </Link>
  );
}

// ─── KOMPONEN FAQ INTERAKTIF ───
function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between text-left font-bold text-stone-800 focus:outline-none">
        <span className="text-sm sm:text-base pr-4">{q}</span>
        <span className={`transform transition-transform duration-300 text-emerald-600 ${isOpen ? "rotate-45" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pt-3 text-sm text-stone-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


// ─── HALAMAN UTAMA KATALOG PENGINAPAN ───
export default function PenginapanKatalogPage() {
  const [activeJenis, setActiveJenis] = useState("Semua");
  const [activeKapasitas, setActiveKapasitas] = useState("Semua");

  // ─── ENGINE FILTER MULTI-DIMENSI ───
  const filteredPenginapan = useMemo(() => {
    return masterPenginapan.filter((item) => {
      const kategori = item.kategori.toLowerCase();
      const nama = item.nama.toLowerCase();
      const maxCap = getMaxCapacity(item.kapasitas);

      // 1. Cek Filter Jenis (Lebih Presisi)
      let matchJenis = false;
      if (activeJenis === "Semua") matchJenis = true;
      else if (activeJenis === "Villa") matchJenis = kategori.includes("villa") || nama.includes("villa") || kategori.includes("super premium") || kategori.includes("homestay");
      else if (activeJenis === "Cottage") matchJenis = kategori.includes("cottage") || nama.includes("saung");
      else if (activeJenis === "Glamping") matchJenis = kategori.includes("glamping") || kategori.includes("cabin");
      else if (activeJenis === "Barak") matchJenis = kategori.includes("barak");

      // 2. Cek Filter Kapasitas
      let matchKapasitas = false;
      if (activeKapasitas === "Semua") matchKapasitas = true;
      else if (activeKapasitas === "Kecil (< 10 Org)") matchKapasitas = maxCap > 0 && maxCap < 10;
      else if (activeKapasitas === "Sedang (10-20 Org)") matchKapasitas = maxCap >= 10 && maxCap <= 20;
      else if (activeKapasitas === "Besar (> 20 Org)") matchKapasitas = maxCap > 20;

      return matchJenis && matchKapasitas;
    });
  }, [activeJenis, activeKapasitas]);

  // ─── KTP DIGITAL (SCHEMA) ITEMLIST ───
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Katalog Penginapan & Villa Go Pangalengan",
    "description": "Daftar sewa villa, cottage, glamping, dan barak di Pangalengan dengan harga terbaik.",
    "itemListElement": masterPenginapan.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.gopangalengan.id/penginapan/${item.id}`,
      "name": item.nama
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-stone-50 font-sans pb-20">
        
        {/* 1. HERO HEADER (Gaya Gelap Elegan seperti Katalog Wisata) */}
        <section className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 text-center sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
          <Image src="/villa-wantea.jpg" alt="Katalog Penginapan Pangalengan" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 mx-auto max-w-3xl space-y-5">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-sm">
              Katalog Penginapan <br className="hidden sm:block" />
              <span className="text-emerald-400 font-light italic tracking-wide mt-2 inline-block">Terbaik 2026</span>
            </h1>
            
            <p className="text-sm text-stone-200 sm:text-base font-medium max-w-xl mx-auto leading-relaxed drop-shadow-sm">
              Mulai dari villa klasik untuk keluarga besar, cottage romantis, hingga glamping yang menyatu dengan alam. Temukan akomodasi ideal Anda.
            </p>
          </div>
        </section>

        {/* 2. AREA PENCARIAN & DAFTAR */}
        <section className="px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            
            {/* FILTER UI KATEGORI (Estetika Kapsul Menyerupai Katalog Wisata) */}
            <div className="flex flex-col items-center mb-8 w-full gap-6">
              
              {/* Filter 1: Jenis Penginapan */}
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-3 mb-3 w-full max-w-xs sm:max-w-sm">
                  <div className="h-[1px] bg-stone-200 flex-1 rounded-full"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 shrink-0">1. Jenis Penginapan</span>
                  <div className="h-[1px] bg-stone-200 flex-1 rounded-full"></div>
                </div>
                <div className="inline-flex bg-white p-1.5 rounded-2xl sm:rounded-full border border-stone-200 shadow-sm overflow-x-auto max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {jenisFilters.map((jenis) => (
                    <button
                      key={jenis}
                      onClick={() => setActiveJenis(jenis)}
                      className={`shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                        activeJenis === jenis
                          ? "bg-emerald-600 text-white shadow-md transform scale-[1.02]"
                          : "bg-transparent text-stone-500 hover:text-emerald-600 hover:bg-stone-50"
                      }`}
                    >
                      {jenis}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter 2: Kapasitas Orang */}
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-3 mb-3 w-full max-w-xs sm:max-w-sm">
                  <div className="h-[1px] bg-stone-200 flex-1 rounded-full"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 shrink-0">2. Kapasitas Peserta</span>
                  <div className="h-[1px] bg-stone-200 flex-1 rounded-full"></div>
                </div>
                <div className="inline-flex bg-white p-1.5 rounded-2xl sm:rounded-full border border-stone-200 shadow-sm overflow-x-auto max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {kapasitasFilters.map((kap) => (
                    <button
                      key={kap}
                      onClick={() => setActiveKapasitas(kap)}
                      className={`shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                        activeKapasitas === kap
                          ? "bg-emerald-600 text-white shadow-md transform scale-[1.02]"
                          : "bg-transparent text-stone-500 hover:text-emerald-600 hover:bg-stone-50"
                      }`}
                    >
                      {kap}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* HASIL PENCARIAN (LISTING OTA COMPACT) */}
            <div className="mb-4 text-sm font-bold text-stone-500 flex items-center justify-between border-b border-stone-200 pb-3">
              <span>Menampilkan {filteredPenginapan.length} Properti Tersedia</span>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              {filteredPenginapan.length > 0 ? (
                filteredPenginapan.map((item) => (
                  <OTAListCard key={item.id} item={item} />
                ))
              ) : (
                <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center shadow-sm">
                  <span className="text-5xl block mb-4">🕵️‍♂️</span>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Properti Tidak Ditemukan</h3>
                  <p className="text-stone-500 max-w-md mx-auto">Kami tidak dapat menemukan penginapan yang sesuai dengan kombinasi jenis dan kapasitas yang Anda pilih.</p>
                  <button 
                    onClick={() => { setActiveJenis("Semua"); setActiveKapasitas("Semua"); }}
                    className="mt-6 bg-emerald-100 text-emerald-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-emerald-200 transition-colors"
                  >
                    Tampilkan Semua Penginapan
                  </button>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 3. BANNER CUSTOM TRIP (Sama Seperti Katalog Wisata) */}
        <section className="relative w-full px-4 py-16 sm:py-20 sm:px-6 lg:px-8 text-center text-white overflow-hidden bg-stone-900 border-y border-stone-800 mt-8">
          <Image src="/saung-family.jpg" alt="Konsultasi Penginapan" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-stone-900/85 backdrop-blur-[2px]"></div> 
          
          <div className="relative z-10 mx-auto max-w-3xl space-y-5">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-emerald-400">Bingung Memilih Penginapan?</h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl font-medium">
              Konsultasikan jumlah rombongan, kebutuhan acara, dan budget Anda kepada tim kami. Kami akan merekomendasikan villa atau cottage yang paling sempurna untuk Anda.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={generateWALink("Halo Go Pangalengan, saya butuh rekomendasi penginapan nih. Rencananya untuk rombongan...")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 hover:-translate-y-1"
              >
                💬 Tanya via WhatsApp
              </a>
              <Link href="/custom-trip" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-emerald-600 bg-transparent px-8 py-3.5 text-sm font-bold text-emerald-400 transition hover:bg-emerald-900/50">
                Buka Kalkulator Custom Trip
              </Link>
            </div>
          </div>
        </section>

        {/* 4. TRUST SECTION RINGKAS */}
        <section className="bg-white border-b border-stone-200 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
            <div className="flex flex-col items-center text-center sm:px-4 pt-6 sm:pt-0 first:pt-0">
              <span className="text-3xl mb-3">📍</span>
              <h3 className="text-sm font-bold text-stone-800 mb-1">Lokasi Strategis</h3>
              <p className="text-[11px] text-stone-500 font-medium">Mayoritas properti berdekatan dengan Situ Cileunca dan Hutan Rahong.</p>
            </div>
            <div className="flex flex-col items-center text-center sm:px-4 pt-6 sm:pt-0">
              <span className="text-3xl mb-3">🧹</span>
              <h3 className="text-sm font-bold text-stone-800 mb-1">Garansi Kebersihan</h3>
              <p className="text-[11px] text-stone-500 font-medium">Kamar, toilet, dan linen selalu dibersihkan secara profesional sebelum kedatangan.</p>
            </div>
            <div className="flex flex-col items-center text-center sm:px-4 pt-6 sm:pt-0">
              <span className="text-3xl mb-3">👨‍💼</span>
              <h3 className="text-sm font-bold text-stone-800 mb-1">Layanan Sigap</h3>
              <p className="text-[11px] text-stone-500 font-medium">Tim penjaga villa atau tim lapangan kami siap membantu Anda selama menginap.</p>
            </div>
          </div>
        </section>

        {/* 5. FAQ KHUSUS PENGINAPAN */}
        <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-stone-50">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Pertanyaan Seputar Penginapan</h2>
              <p className="text-sm text-stone-500 font-medium mt-2">Pastikan persiapan menginap Anda matang dengan membaca informasi di bawah ini.</p>
            </div>
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-stone-200">
              <FAQItem 
                q="Jam berapa ketentuan Check-in dan Check-out?" 
                a="Standar waktu Check-in kami dimulai pukul 13:00 WIB, sedangkan batas maksimal Check-out adalah pukul 11:00 WIB keesokan harinya." 
              />
              <FAQItem 
                q="Apakah bisa menambah jumlah kasur (Extra Bed)?" 
                a="Tentu bisa! Hampir semua properti kami menyediakan opsi Extra Bed yang sudah termasuk selimut dan bantal. Rincian harga Extra Bed dapat Anda lihat di detail masing-masing penginapan." 
              />
              <FAQItem 
                q="Apakah penginapan dilengkapi dapur dan alat masak?" 
                a="Mayoritas Villa dan Homestay kami sudah dilengkapi dengan fasilitas dapur standar, kompor, dan alat masak/makan. Sangat cocok jika Anda ingin membawa bahan makanan dan memasak bersama rombongan." 
              />
              <FAQItem 
                q="Apakah ada fasilitas pemanas air (Water Heater)?" 
                a="Ya, fasilitas Water Heater tersedia di hampir seluruh properti Villa Premium, Homestay, dan Glamping kami mengingat suhu udara Pangalengan yang cukup dingin di malam hari." 
              />
            </div>
          </div>
        </section>

        {/* 6. FLOATING ACTION BUTTON (WA) */}
        <a 
          href={generateWALink("Halo Go Pangalengan, saya mau tanya ketersediaan jadwal untuk penginapan nih.")} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300"
          aria-label="Chat WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12.013 2.015c-5.506 0-9.988 4.473-9.99 9.98a9.964 9.964 0 001.332 5.01L2 22l5.148-1.352a9.97 9.97 0 004.865 1.26h.004c5.503 0 9.985-4.475 9.987-9.983 0-2.668-1.04-5.176-2.926-7.065A9.916 9.916 0 0012.013 2.015zM12.018 20c-1.545 0-3.056-.416-4.382-1.202l-.314-.187-3.256.853.867-3.174-.205-.327a8.318 8.318 0 01-1.274-4.444c.002-4.606 3.75-8.354 8.358-8.356 2.235.001 4.335.872 5.914 2.454a8.336 8.336 0 012.449 5.912c-.002 4.607-3.748 8.354-8.354 8.354zm4.584-6.262c-.251-.126-1.488-.736-1.718-.82-.23-.085-.398-.126-.565.126-.168.252-.647.82-.793.988-.146.168-.293.189-.544.063-.251-.126-1.06-.39-2.018-1.196-.745-.626-1.25-1.4-1.396-1.652-.146-.252-.016-.388.11-.514.113-.112.251-.293.377-.44.126-.146.168-.252.251-.419.084-.168.042-.315-.021-.44-.063-.126-.565-1.363-.774-1.867-.203-.491-.41-.424-.565-.432-.146-.008-.314-.01-.482-.01s-.44.063-.67.315c-.23.252-.88 8.61 10.364 8.61 10.364zm0 0c-1.11 1.05-2.908 1.408-4.08 1.408-1.504 0-3.41-.532-4.836-1.567l-3.21-.634z" />
          </svg>
        </a>
      </div>
    </>
  );
}