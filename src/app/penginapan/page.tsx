"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { generateWALink } from "@/config/contact";
import { masterPenginapan } from "@/data/penginapan"; 


const jenisFilters = ["Semua", "Villa Premium", "Cottage & Pool", "Glamour Camping", "Barak Outing"];

// ─── KOMPONEN KARTU ALA AGODA / TRAVELOKA (FASILITAS UNGGULAN) ─────────────
function OTACard({ item }: { item: any }) {
    return (
      <Link 
        href={`/penginapan/${item.id}`} 
        className="group flex bg-white rounded-xl sm:rounded-2xl border border-stone-200 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)] hover:border-emerald-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        {/* 1. Gambar Kiri */}
        <div className="relative w-[115px] sm:w-[180px] shrink-0 bg-stone-100">
          <Image 
            src={item.image} 
            alt={item.nama} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
            sizes="(max-width: 640px) 115px, 180px" 
          />
          {item.label && (
            <span className={`absolute top-0 left-0 text-white text-[8px] sm:text-[9px] font-black uppercase px-2 py-1 rounded-br-lg shadow-sm z-10 ${item.label.includes('VIP') || item.label.includes('Sultan') ? 'bg-amber-500' : 'bg-emerald-500'}`}>
              {item.label}
            </span>
          )}
        </div>
        
        {/* 2. Konten Kanan */}
        <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between min-h-[145px] sm:min-h-[165px]">
          <div>
            <h4 className="font-extrabold text-stone-800 text-sm sm:text-lg leading-tight group-hover:text-emerald-700 transition-colors line-clamp-2 mb-1">
              {item.nama}
            </h4>
            
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[9px] sm:text-xs text-stone-500 font-medium mb-2.5">
              <span className="text-emerald-600 font-bold">{item.kategori}</span>
              <span className="text-stone-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-0.5 bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {item.kapasitas}
              </span>
            </div>
  
            {/* FITUR UNGGULAN: Mengambil 3 list pertama dari Master Data */}
            <ul className="flex flex-col gap-0.5 sm:gap-1 mb-2">
              {item.fasilitas?.slice(0, 3).map((fas: string, idx: number) => (
                <li key={idx} className="flex items-start gap-1.5 text-[9px] sm:text-[10px] text-stone-500">
                  <span className="text-emerald-500 font-black text-[10px] sm:text-[11px] leading-none mt-[1px] sm:mt-0.5">•</span>
                  <span className="line-clamp-1 leading-tight">{fas}</span>
                </li>
              ))}
            </ul>
  
            <p className="text-[9px] sm:text-[11px] text-stone-400 line-clamp-1 hidden sm:block mt-1">
              {item.deskripsi}
            </p>
          </div>
          
          {/* Area Harga */}
          <div className="mt-auto flex flex-col items-end pt-2 border-t border-stone-100 sm:border-transparent">
            <span className="text-[8px] sm:text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-0.5">Mulai dari</span>
            <div className="flex items-baseline gap-1">
              <span className="font-black text-emerald-700 text-sm sm:text-xl leading-none">{item.hargaWeekday}</span>
            </div>
            <span className="text-[8px] sm:text-[9px] text-stone-400 font-medium mt-0.5">/malam (Net)</span>
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

// ─── HALAMAN UTAMA KATALOG PENGINAPAN ─────────────────────────────────────
export default function KatalogPenginapan() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  // LOGIKA CERDAS 1: Fungsi untuk mengubah "Rp 1.500.000" menjadi angka 1500000
  const parseHarga = (hargaString: string) => {
    return parseInt(hargaString.replace(/[^0-9]/g, ""), 10);
  };

  const filteredPenginapan = masterPenginapan.filter(item => {
    if (activeFilter === "Semua") return true;
    if (activeFilter === "Villa Premium" && (item.kategori.includes("Villa") || item.kategori === "Super Premium")) return true;
    if (activeFilter === "Cottage & Pool" && item.kategori.includes("Cottage")) return true;
    if (activeFilter === "Glamour Camping" && (item.kategori.includes("Cabin") || item.kategori.includes("Camping"))) return true;
    if (activeFilter === "Barak Outing" && item.kategori.includes("Barak")) return true;
    return false;
  })
  .sort((a, b) => parseHarga(a.hargaWeekday) - parseHarga(b.hargaWeekday));

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans pb-20">
      
      {/* 1. HERO HEADER (Lebih Bersih Tanpa Back Arrow) */}
      <section className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 text-center sm:px-6 lg:px-8 bg-stone-950">
        <Image src="/paket2.jpg" alt="Katalog Penginapan Pangalengan" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/80 to-stone-900/10"></div>
        
        <div className="relative z-10 mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-md">
            Katalog Penginapan <br />
            <span className="text-emerald-400 font-light italic tracking-wide mt-2 inline-block">Terbaru 2026</span>
          </h1>
          <p className="text-sm text-stone-300 sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Mulai dari Glamping estetik hingga Villa eksklusif berkapasitas besar. Temukan ruang peristirahatan yang sesuai dengan gaya dan anggaran Anda.
          </p>
        </div>
      </section>

      {/* 2. DAFTAR PENGINAPAN DENGAN FILTER */}
      <section className="px-4 py-8 sm:py-16 sm:px-6 lg:px-8 bg-stone-50 relative z-20">
        <div className="mx-auto max-w-5xl">
          
          {/* FILTER CERDAS DENGAN KETERANGAN */}
          <div className="mb-10 flex flex-col items-center">
            <h3 className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-stone-300"></span>
              Pilih Kategori Penginapan
              <span className="w-8 h-[1px] bg-stone-300"></span>
            </h3>
            
            <div className="inline-flex bg-white p-1.5 rounded-full border border-stone-200 shadow-sm overflow-x-auto max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
              {jenisFilters.map((jenis) => (
                <button
                  key={jenis}
                  onClick={() => setActiveFilter(jenis)}
                  className={`snap-center shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-bold transition-all duration-300 ${
                    activeFilter === jenis 
                      ? "bg-emerald-600 text-white shadow-md" 
                      : "bg-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-50"
                  }`}
                >
                  {jenis}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
            {filteredPenginapan.map((item) => (
              <OTACard key={item.id} item={item} />
            ))}
          </div>

          {filteredPenginapan.length === 0 && (
             <div className="text-center py-20 flex flex-col items-center">
               <span className="text-4xl mb-4 grayscale opacity-50">🏕️</span>
               <p className="text-stone-500 font-bold">Belum ada penginapan di kategori ini.</p>
             </div>
          )}
        </div>
      </section>
      
      {/* 3. BANNER CUSTOM TRIP */}
      <section className="relative w-full px-4 py-16 sm:py-20 sm:px-6 lg:px-8 text-center text-white overflow-hidden bg-stone-900 border-y border-stone-800">
        <Image src="/family-c.jpg" alt="Custom Trip Background" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-stone-900/85 backdrop-blur-[2px]"></div> 
        
        <div className="relative z-10 mx-auto max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-emerald-400">Rencanakan Liburan Tanpa Repot</h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl font-medium">
            Bingung mencocokkan jadwal penginapan dengan aktivitas wisata? Gunakan Kalkulator Custom Trip kami. Pilih penginapan, tambah aktivitas, dan dapatkan total biaya dalam hitungan detik.
          </p>
          <div className="pt-4">
            <Link href="/custom-trip" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 hover:-translate-y-1">
              Buka Kalkulator Custom Trip
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Seputar Penginapan</h2>
            <p className="text-sm text-stone-500 font-medium mt-2">Hal-hal yang sering ditanyakan sebelum melakukan reservasi.</p>
          </div>
          <div className="bg-stone-50 rounded-[2rem] p-6 sm:p-10 shadow-inner border border-stone-100">
            <FAQItem 
              q="Apakah harga penginapan sudah termasuk sarapan (breakfast)?" 
              a="Mayoritas penginapan di Pangalengan disewakan lepas (tanpa sarapan) karena tamu lebih suka memasak sendiri. Namun, khusus untuk tipe Glamping dan Cabin Premium, harga biasanya sudah termasuk sarapan." 
            />
            <FAQItem 
              q="Jam berapa standar Check-In dan Check-Out?" 
              a="Standar Check-In adalah mulai pukul 13:00 WIB, sedangkan maksimal Check-Out adalah pukul 11:00 WIB keesokan harinya." 
            />
            <FAQItem 
              q="Bagaimana prosedur pembayarannya?" 
              a="Untuk mengamankan jadwal, kami memerlukan DP (Down Payment) sebesar 30% hingga 50% dari total harga. Pelunasan dapat dilakukan pada hari H (sebelum masuk unit)." 
            />
          </div>
        </div>
      </section>

      {/* 5. FOOTER & FLOATING WA */}
      <a 
        href={generateWALink("Halo Admin Go Pangalengan, saya butuh rekomendasi Villa/Penginapan yang cocok untuk rombongan saya.")} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300"
        aria-label="Chat WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12.013 2.015c-5.506 0-9.988 4.473-9.99 9.98a9.964 9.964 0 001.332 5.01L2 22l5.148-1.352a9.97 9.97 0 004.865 1.26h.004c5.503 0 9.985-4.475 9.987-9.983 0-2.668-1.04-5.176-2.926-7.065A9.916 9.916 0 0012.013 2.015z" />
        </svg>
      </a>
    </div>
  );
}