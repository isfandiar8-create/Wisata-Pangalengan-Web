"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { generateWALink } from "@/config/contact";

// ─── DATA: AKTIVITAS SATUAN ───────────────────────────────────────────────
const aktivitasSatuan = [
  { id: "rafting", nama: "Rafting Palayangan", kategori: "Air", harga: "Rp 165.000", hargaAsli: "Rp 200.000", label: "⚡ Terlaris", image: "/rafting.jpg", deskripsi: "Taklukkan derasnya arus. Tawa lepas dan adrenalin bersatu di alam bebas." },
  { id: "atv", nama: "ATV Adventure", kategori: "Darat", harga: "Rp 175.000", hargaAsli: "Rp 240.000", image: "/keluarga-seru.jpg", deskripsi: "Pacu adrenalin di jalur berlumpur dan hamparan kebun teh yang menantang." },
  { id: "offroad", nama: "Offroad Land Rover", kategori: "Darat", harga: "Rp 220.000", hargaAsli: "Rp 300.000", label: "Seru!", image: "/offroad.jpg", deskripsi: "Eksplorasi menembus hutan pinus liar menggunakan mobil tangguh." },
  { id: "paintball", nama: "Paintball Battle", kategori: "Grup & Game", harga: "Rp 85.000", hargaAsli: "Rp 125.000", image: "/paintball.jpg", deskripsi: "Simulasi tempur di tengah hutan. Strategi, ketegangan, dan keseruan tim." },
  { id: "team-building", nama: "Team Building", kategori: "Grup & Game", harga: "Rp 99.000", hargaAsli: "Rp 150.000", image: "/teambuilding1.jpeg", deskripsi: "Rangkaian games seru untuk merekatkan kekompakan dan kehangatan tim." },
  { id: "flying-fox", nama: "Flying Fox", kategori: "Udara", harga: "Rp 35.000", hargaAsli: "Rp 50.000", image: "/flyingfox.jpg", deskripsi: "Meluncur bebas melintasi lembah dan danau. Singkat namun mendebarkan." },
  { id: "tour-perahu", nama: "Tour Perahu", kategori: "Air", harga: "Rp 20.000", hargaAsli: "Rp 35.000", image: "/perahu.jpg", deskripsi: "Bersantai menikmati syahdunya pemandangan Situ Cileunca dari atas perahu." },
  { id: "treking", nama: "Treking Alam", kategori: "Darat", harga: "Rp 70.000", hargaAsli: "Rp 100.000", image: "/treking.jpg", deskripsi: "Menjelajahi sejuknya bukit dan hamparan kebun teh dengan panduan lokal." },
];

// ─── DATA: PAKET COMBO WISATA ─────────────────────────────────────────────
const paketCombo = [
  // KELUARGA
  { id: "keluarga-hemat", nama: "Hemat & Praktis", kategori: "Keluarga", durasi: "1 Hari", harga: "Rp 199.000", hargaAsli: "Rp 250.000", label: "Lebih Hemat", image: "/keluarga-hemat.JPG", deskripsi: "Rafting, Flying Fox, Makan & Dokumentasi. Paket dasar terlengkap." },
  { id: "keluarga-seru", nama: "Seru Maksimal", kategori: "Keluarga", durasi: "1 Hari", harga: "Rp 299.000", hargaAsli: "Rp 380.000", image: "/keluarga-seru.jpg", deskripsi: "Ekstra petualangan dengan ATV! Pilihan pas untuk keluarga petualang." },
  { id: "keluarga-puas", nama: "Puas Eksplorasi", kategori: "Keluarga", durasi: "1 Hari", harga: "Rp 410.000", hargaAsli: "Rp 480.000", label: "Rekomendasi", image: "/keluarga-puas.jpg", deskripsi: "Rafting, Flying Fox & Offroad Land Rover. Paket premium tanpa lelah." },

  // CORPORATE
  { id: "corp-a1d", nama: "Adventure Plus", kategori: "Corporate", durasi: "1 Hari", harga: "Rp 360.000", hargaAsli: "Rp 430.000", image: "/corporate-1d-a.jpeg", deskripsi: "Rafting, Paintball, ATV & Makan Siang. Satu hari penuh aksi." },
  { id: "corp-b1d", nama: "Synergy Build", kategori: "Corporate", durasi: "1 Hari", harga: "Rp 350.000", hargaAsli: "Rp 410.000", label: "⚡ Favorit HRD", image: "/corporate-1d-b.JPG", deskripsi: "Rafting, Paintball & Team Building. Sempurna untuk kekompakan tim." },
  { id: "corp-c1d", nama: "Xtreme Offroad", kategori: "Corporate", durasi: "1 Hari", harga: "Rp 549.000", hargaAsli: "Rp 630.000", image: "/corporate-1n-c.jpg", deskripsi: "Rafting, Offroad, Paintball & Ice Breaking. Mewah dan padat." },
  { id: "corp-a2d", nama: "Essential Trip", kategori: "Corporate", durasi: "2 Hari", harga: "Rp 239.000", hargaAsli: "Rp 300.000", image: "/corporate-1n-a.JPG", deskripsi: "Fresh Rafting, Paintball & Makan. Paket ekonomis 2 Hari." },
  { id: "corp-b2d", nama: "Feast & Fun", kategori: "Corporate", durasi: "2 Hari", harga: "Rp 650.000", hargaAsli: "Rp 750.000", label: "Bestseller", image: "/corporate-1n-b.JPG", deskripsi: "Rafting, Paintball, Kambing Guling & Live Music. Standar emas outing." },
  { id: "corp-c2d", nama: "All-Inclusive", kategori: "Corporate", durasi: "2 Hari", harga: "Rp 450.000", hargaAsli: "Rp 520.000", image: "/rafting.jpg", deskripsi: "Fasilitas lengkap 2D1N dikawal penuh oleh tour leader kami." },
  { id: "corp-d2d", nama: "Relax & Retreat", kategori: "Corporate", durasi: "2 Hari", harga: "Rp 200.000", hargaAsli: "Rp 250.000", image: "/teambuilding1.jpeg", deskripsi: "Rafting & Fun Games. Fokus pada tawa dan keseruan santai." },
  { id: "corp-vip", nama: "VIP Executive", kategori: "Corporate", durasi: "2 Hari", harga: "Rp 1.099.000", hargaAsli: "Rp 1.300.000", label: "⭐ VIP", image: "/corporate-vip.JPG", deskripsi: "Layanan karpet merah. Villa Mewah, Offroad, Rafting & Makan Premium." },

  // FAMILY CAMP
  { id: "camp-fca", nama: "Glamping & ATV", kategori: "Family Camp", durasi: "2 Hari", harga: "Rp 495.000", hargaAsli: "Rp 580.000", image: "/family-camp-a.JPG", deskripsi: "Glamping, Rafting, ATV & Flying Fox. Petualangan lengkap di alam." },
  { id: "camp-fcb", nama: "Glamping & Offroad", kategori: "Family Camp", durasi: "2 Hari", harga: "Rp 620.000", hargaAsli: "Rp 700.000", label: "Rekomendasi", image: "/family-camp-b.JPG", deskripsi: "Glamping, Rafting, Offroad & Flying Fox. Eksplorasi pinus yang sunyi." },
  { id: "camp-fcc", nama: "Classic Glamping", kategori: "Family Camp", durasi: "2 Hari", harga: "Rp 395.000", hargaAsli: "Rp 450.000", image: "/flyingfox.jpg", deskripsi: "Glamping, Rafting & Flying Fox. Menikmati kabut dan keseruan air." },
];

const comboFilters = ["Semua", "Keluarga", "Corporate", "Family Camp"];
const durasiFilters = ["Semua Waktu", "1 Hari", "2 Hari"];

// ─── KOMPONEN KARTU BENTO RINGKAS ─────────────────────────────────────────
function CompactCard({ item }: { item: any }) {
  return (
    <Link 
      href={`/paket/${item.id}`} 
      className="group w-full flex items-center gap-3 sm:gap-4 bg-white p-3 rounded-2xl border border-stone-200 shadow-sm hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="w-24 h-24 sm:w-28 sm:h-28 relative rounded-xl overflow-hidden shrink-0 bg-stone-100">
        <Image src={item.image} alt={item.nama} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="112px" />
        {item.label && (
          <span className={`absolute top-0 left-0 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-br-lg ${item.label.includes('VIP') ? 'bg-amber-500' : 'bg-emerald-500'}`}>
            {item.label}
          </span>
        )}
      </div>
      
      <div className="flex-1 flex flex-col justify-center overflow-hidden py-1">
        <div className="flex justify-between items-start mb-0.5 gap-1">
           <span className="text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-stone-100 text-stone-500 truncate">{item.kategori}</span>
           {item.durasi && (
             <span className="text-[8px] font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 shrink-0">{item.durasi}</span>
           )}
        </div>
        <h4 className="font-bold text-stone-800 text-sm sm:text-base leading-tight truncate mt-0.5">{item.nama}</h4>
        <p className="text-[10px] sm:text-[11px] text-stone-500 line-clamp-1 mt-1 mb-2.5">{item.deskripsi}</p>
        
        <div className="mt-auto flex justify-between items-end">
          <div className="flex flex-col">
            {item.hargaAsli && <span className="text-[9px] text-stone-400 line-through mb-0.5">{item.hargaAsli}</span>}
            <span className="font-black text-emerald-700 text-sm sm:text-base tracking-tight">{item.harga}</span>
          </div>
          <span className="bg-stone-50 text-stone-600 border border-stone-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-colors shrink-0">
            Detail &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── KOMPONEN FAQ INTERAKTIF ──────────────────────────────────────────────
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

// ─── HALAMAN UTAMA KATALOG ────────────────────────────────────────────────
export default function KatalogPetualangan() {
  const [activeComboFilter, setActiveComboFilter] = useState("Semua");
  const [activeDurasiFilter, setActiveDurasiFilter] = useState("Semua Waktu");

  const filteredCombo = paketCombo.filter(item => {
    const matchKategori = activeComboFilter === "Semua" || item.kategori === activeComboFilter;
    const matchDurasi = activeDurasiFilter === "Semua Waktu" || item.durasi === activeDurasiFilter;
    return matchKategori && matchDurasi;
  });

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 text-center sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
        <Image src="/rafting.jpg" alt="Katalog Wisata Pangalengan" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-50"></div>
        <div className="relative z-10 mx-auto max-w-3xl space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition text-xs font-bold uppercase tracking-widest mb-2">
            &larr; Kembali ke Beranda
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-md">
            Katalog <br className="hidden sm:block" /> Wisata <br className="hidden sm:block" />
            <span className="text-emerald-400 font-light italic tracking-wide">Terbaru 2026</span>
            </h1>
          <p className="text-sm text-stone-300 sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Pilih aktivitas satuan sesuka hati, atau hemat budget Anda dengan memilih Paket Combo. Transparan, aman, dan tanpa biaya tersembunyi.
          </p>
        </div>
      </section>

      {/* 2. SESI: AKTIVITAS SATUAN */}
      <section className="px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Judul Di-Center */}
          <div className="mb-10 text-center space-y-1.5">
            <h2 className="text-2xl font-bold text-stone-800 sm:text-3xl">Aktivitas Satuan</h2>
            <p className="text-sm text-stone-500 font-medium">Bebas pilih petualangan tunggal sesuai keinginan Anda.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aktivitasSatuan.map((item) => (
              <CompactCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SESI: PAKET COMBO WISATA (Desain Silo dengan Data Master Baru) */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-emerald-50/50 border-y border-emerald-100">
        <div className="mx-auto max-w-6xl">
          
          <div className="mb-10 text-center space-y-1.5">
            <h2 className="text-2xl font-bold text-stone-800 sm:text-3xl">Katalog Paket Combo</h2>
            <p className="text-sm text-stone-500 font-medium max-w-2xl mx-auto">Dirancang khusus untuk rombongan. Pilih paket yang paling sesuai dengan kebutuhan Anda.</p>
          </div>

          {/* FILTER DURASI ELEGAN */}
          <div className="mb-16 flex justify-center">
            <div className="inline-flex bg-white/60 p-1.5 rounded-2xl sm:rounded-full border border-emerald-200/60 shadow-[0_4px_20px_-10px_rgba(5,150,105,0.15)] backdrop-blur-sm overflow-x-auto max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {durasiFilters.map((durasi) => (
                <button
                  key={durasi}
                  onClick={() => setActiveDurasiFilter(durasi)}
                  className={`relative shrink-0 px-6 py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                    activeDurasiFilter === durasi 
                      ? "bg-emerald-600 text-white shadow-md transform scale-[1.02]" 
                      : "bg-transparent text-emerald-800/70 hover:text-emerald-900 hover:bg-emerald-50/80"
                  }`}
                >
                  <span className={`text-base leading-none ${activeDurasiFilter === durasi ? 'opacity-100' : 'opacity-60 grayscale'}`}>
                    {durasi === "Semua Waktu" ? "✨" : durasi === "1 Hari" ? "☀️" : "⛺"}
                  </span>
                  {durasi}
                </button>
              ))}
            </div>
          </div>

          {/* MAPPING SETIAP KATEGORI (SILO RINGKAS) */}
          <div className="space-y-16 sm:space-y-20">
            {[
              { 
                id: "keluarga", 
                nama: "👨‍👩‍👧‍👦 Liburan Keluarga", 
                desc: "Hangat, aman, dan penuh tawa untuk segala usia.", 
                targetKat: ["Keluarga"] 
              },
              { 
                id: "corporate", 
                nama: "🏢 Corporate & Outing", 
                desc: "Dari kegiatan satu hari yang padat hingga malam keakraban.", 
                targetKat: ["Corporate"] 
              },
              { 
                id: "camp", 
                nama: "⛺ Glamping & Camp", 
                desc: "Sensasi tidur di alam bebas dengan fasilitas eksklusif.", 
                targetKat: ["Family Camp"] 
              }
            ].map((kategoriSesi) => {
              
              // 1. Filter Berdasarkan Kategori Saja (Durasi diabaikan di sini)
              let paketDiSesiIni = paketCombo.filter(p => kategoriSesi.targetKat.includes(p.kategori));

              // 2. Terapkan Filter Durasi Waktu (dari tombol klik pengguna di atas)
              if (activeDurasiFilter !== "Semua Waktu") {
                paketDiSesiIni = paketDiSesiIni.filter(p => p.durasi === activeDurasiFilter);
              }

              // 3. Sembunyikan Sesi jika kosong
              if (paketDiSesiIni.length === 0) return null;

              return (
                <div key={kategoriSesi.id} className="space-y-5 sm:space-y-6">
                  {/* Judul Sesi */}
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-emerald-100 pb-3">
                    <div>
                      <h3 className="text-xl font-bold text-emerald-900">{kategoriSesi.nama}</h3>
                      <p className="text-xs text-emerald-700/70 mt-1 font-medium">{kategoriSesi.desc}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full w-fit shrink-0">
                      {paketDiSesiIni.length} Paket
                    </span>
                  </div>

                  {/* GRID KARTU PAKET (Format COMPACT HORIZONTAL) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {paketDiSesiIni.map((pkt) => (
                      <Link 
                        href={`/paket/${pkt.id}`} 
                        key={pkt.id} 
                        className="group flex items-center gap-3 sm:gap-4 bg-white p-3 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5 relative"
                      >
                        {/* Gambar Thumbnail */}
                        <div className="w-24 h-28 sm:w-28 sm:h-32 relative rounded-xl overflow-hidden shrink-0 bg-stone-100">
                          <Image 
                            src={pkt.image} 
                            alt={pkt.nama} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110" 
                            sizes="(max-width: 768px) 100px, 120px"
                          />
                          <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
                          
                          {/* Badge Durasi */}
                          <span className="absolute top-0 left-0 bg-stone-900/80 backdrop-blur-sm text-white text-[8px] font-black uppercase px-2 py-1 rounded-br-xl shadow-sm">
                            {pkt.durasi}
                          </span>
                        </div>

                        {/* Konten Teks di Sebelah Kanan */}
                        <div className="flex-1 flex flex-col py-1 h-full justify-between overflow-hidden">
                          <div>
                            {/* Label Promo */}
                            {pkt.label && (
                              <div className="mb-1">
                                <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200/60 text-[8px] font-black uppercase px-2 py-0.5 rounded-md shadow-sm">
                                  {pkt.label}
                                </span>
                              </div>
                            )}

                            {/* Judul & Deskripsi */}
                            <h4 className="font-bold text-stone-800 text-sm sm:text-base leading-tight mt-0.5 group-hover:text-emerald-700 transition-colors truncate">
                              {pkt.nama}
                            </h4>
                            <p className="text-[10px] sm:text-xs text-stone-500 line-clamp-2 mt-1 mb-2 leading-relaxed">
                              {pkt.deskripsi}
                            </p>
                          </div>

                          {/* Harga & Tombol */}
                          <div className="mt-auto flex justify-between items-end">
                            <div className="flex flex-col">
                              {/* Harga Coret */}
                              {pkt.hargaAsli && (
                                <span className="text-[9px] sm:text-[10px] text-rose-400/90 font-bold line-through decoration-rose-400/50 mb-0.5">
                                  {pkt.hargaAsli}
                                </span>
                              )}
                              <span className="font-black text-emerald-700 text-sm sm:text-base leading-none">
                                {pkt.harga}
                              </span>
                            </div>
                            
                            <span className="bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shrink-0 ml-2">
                              Detail &rarr;
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      
      {/* 3.5 BANNER CUSTOM TRIP (JARING PENGAMAN) */}
      <section className="relative w-full px-4 py-16 sm:py-20 sm:px-6 lg:px-8 text-center text-white overflow-hidden bg-stone-900 border-y border-stone-800">
        <Image src="/rafting.jpg" alt="Custom Trip Background" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-stone-900/85 backdrop-blur-[2px]"></div> 
        
        <div className="relative z-10 mx-auto max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-emerald-400">Belum Menemukan Kombinasi yang Pas?</h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl font-medium">
            Setiap rombongan punya gaya liburannya masing-masing. Jangan kompromi! Rancang itinerary Anda sendiri menggunakan Kalkulator Custom Trip kami secara langsung dan transparan.
          </p>
          <div className="pt-4">
            <Link href="/custom-trip" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 hover:-translate-y-1">
              Buka Kalkulator Custom Trip
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TRUST SECTION RINGKAS */}
      <section className="bg-white border-b border-stone-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          <div className="flex flex-col items-center text-center sm:px-4 pt-6 sm:pt-0 first:pt-0">
            <span className="text-3xl mb-3">🦺</span>
            <h3 className="text-sm font-bold text-stone-800 mb-1">Standar Keamanan</h3>
            <p className="text-[11px] text-stone-500 font-medium">Peralatan secara rutin dirawat dan dicek sebelum digunakan.</p>
          </div>
          <div className="flex flex-col items-center text-center sm:px-4 pt-6 sm:pt-0">
            <span className="text-3xl mb-3">🛡️</span>
            <h3 className="text-sm font-bold text-stone-800 mb-1">Asuransi BUMIDA</h3>
            <p className="text-[11px] text-stone-500 font-medium">Seluruh aktivitas dilindungi penuh oleh asuransi resmi.</p>
          </div>
          <div className="flex flex-col items-center text-center sm:px-4 pt-6 sm:pt-0">
            <span className="text-3xl mb-3">👨‍✈️</span>
            <h3 className="text-sm font-bold text-stone-800 mb-1">Pemandu Ahli</h3>
            <p className="text-[11px] text-stone-500 font-medium">Tim tersertifikasi yang sigap, ramah, dan berpengalaman.</p>
          </div>
        </div>
      </section>

      {/* 5. FAQ (PERTANYAAN UMUM) */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Pertanyaan Seputar Paket</h2>
            <p className="text-sm text-stone-500 font-medium mt-2">Biar liburan makin tenang, simak jawaban dari pertanyaan yang sering diajukan.</p>
          </div>
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-stone-200">
            <FAQItem 
              q="Apakah Rafting aman untuk pemula dan anak-anak?" 
              a="Sangat aman! Arus sungai Palayangan cocok untuk pemula. Peserta anak-anak dengan usia minimal 7 tahun diperbolehkan ikut karena akan dipandu 1 instruktur ahli di setiap perahu." 
            />
            <FAQItem 
              q="Apakah ada minimal orang untuk booking Paket Combo?" 
              a="Untuk paket Combo Keluarga minimal booking adalah 4-5 Pax (orang). Jika peserta kurang dari kuota minimum, harga dapat disesuaikan atau bisa digabung (join trip) dengan rombongan lain." 
            />
            <FAQItem 
              q="Bagaimana jika turun hujan?" 
              a="Aktivitas seperti Rafting dan Offroad justru semakin seru saat gerimis! Namun jika cuaca dinilai membahayakan keselamatan oleh instruktur kami, jadwal akan ditunda sementara hingga aman." 
            />
            <FAQItem 
              q="Apakah bisa request jadwal (itinerary) sendiri?" 
              a="Tentu saja! Anda bisa membuka halaman Kalkulator Custom Trip kami atau langsung chat admin untuk merakit jadwal liburan sesuai keinginan Anda tanpa tambahan biaya konsultasi." 
            />
          </div>
        </div>
      </section>

      {/* 6. FLOATING ACTION BUTTON (WA) */}
      <a 
        href={generateWALink("Halo Go Pangalengan, saya mau tanya detail harga dan ketersediaan paket di Katalog Wisata nih.")} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300"
        aria-label="Chat WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12.013 2.015c-5.506 0-9.988 4.473-9.99 9.98a9.964 9.964 0 001.332 5.01L2 22l5.148-1.352a9.97 9.97 0 004.865 1.26h.004c5.503 0 9.985-4.475 9.987-9.983 0-2.668-1.04-5.176-2.926-7.065A9.916 9.916 0 0012.013 2.015zM12.018 20c-1.545 0-3.056-.416-4.382-1.202l-.314-.187-3.256.853.867-3.174-.205-.327a8.318 8.318 0 01-1.274-4.444c.002-4.606 3.75-8.354 8.358-8.356 2.235.001 4.335.872 5.914 2.454a8.336 8.336 0 012.449 5.912c-.002 4.607-3.748 8.354-8.354 8.354zm4.584-6.262c-.251-.126-1.488-.736-1.718-.82-.23-.085-.398-.126-.565.126-.168.252-.647.82-.793.988-.146.168-.293.189-.544.063-.251-.126-1.06-.39-2.018-1.196-.745-.626-1.25-1.4-1.396-1.652-.146-.252-.016-.388.11-.514.113-.112.251-.293.377-.44.126-.146.168-.252.251-.419.084-.168.042-.315-.021-.44-.063-.126-.565-1.363-.774-1.867-.203-.491-.41-.424-.565-.432-.146-.008-.314-.01-.482-.01s-.44.063-.67.315c-.23.252-.88 8.61 10.364 8.61 10.364zm0 0c-1.11 1.05-2.908 1.408-4.08 1.408-1.504 0-3.41-.532-4.836-1.567l-3.21-.634z" />
        </svg>
      </a>

      {/* 7. FAT FOOTER */}
      <footer className="bg-stone-950 text-stone-300 mt-auto">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <p className="text-xl font-bold tracking-tight text-white">Go Pangalengan</p>
              <p className="text-sm leading-relaxed text-stone-400">Partner perjalanan terpercaya Anda untuk menjelajahi keindahan alam, petualangan, dan ketenangan di Pangalengan, Bandung Selatan.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500">Hubungi Kami</h3>
              <ul className="space-y-3 text-sm text-stone-400 font-medium">
                <li><span className="text-stone-200">Alamat:</span> Jl. Raya Situ Cileunca, Pangalengan.</li>
                <li><span className="text-stone-200">Email:</span> hello@gopangalengan.com</li>
                <li><span className="text-stone-200">WhatsApp:</span> +62 857-1707-5116</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500">Layanan Utama</h3>
              <ul className="space-y-2.5 text-sm font-medium">
                <li><Link href="/katalog-petualangan" className="text-stone-400 transition hover:text-white">Katalog Petualangan</Link></li>
                <li><Link href="/penginapan" className="text-stone-400 transition hover:text-white">Katalog Penginapan</Link></li>
                <li><Link href="/custom-trip" className="text-stone-400 transition hover:text-white">Custom Trip</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-stone-800/50 py-10 text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-stone-500 font-medium">© 2026 Go Pangalengan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}