"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { generateWALink } from "@/config/contact";

// ─── DATA MASTER PENGINAPAN (19 Item) ─────────────────────────────────────
const dataPenginapan = [
  // BUDGET
  { id: "saung-cinta", nama: "Saung Cinta", kategori: "Budget Friendly", harga: "Rp 750.000", hargaAsli: "", fasilitas: ["Max 20 Orang", "Kolam Renang", "Dekat Cileunca"], label: "Budget", image: "/saung-cinta.jpg", deskripsi: "Cottage luas dengan kolam renang, pas untuk menghangatkan momen keluarga." },
  { id: "saung-gadis", nama: "Saung Gadis", kategori: "Budget Friendly", harga: "Rp 850.000", hargaAsli: "", fasilitas: ["Max 10 Orang", "Kolam Renang", "Dekat Cileunca"], label: "Budget", image: "/saung-gadis.jpg", deskripsi: "Fasilitas lengkap berkapasitas besar, sempurna untuk kumpul santai akhir pekan." },
  { id: "saung-rungkun", nama: "Saung Rungkun", kategori: "Budget Friendly", harga: "Rp 1.500.000", hargaAsli: "", fasilitas: ["Max 15 Orang", "Kolam Renang", "Dekat Cileunca"], label: "Budget", image: "/saung-rungkun.jpg", deskripsi: "Pilihan hemat nan nyaman dengan gazebo asri untuk bersantai bersama kerabat." },
  { id: "saung-family", nama: "Saung Family", kategori: "Budget Friendly", harga: "Rp 750.000", hargaAsli: "", fasilitas: ["Max 10 Orang", "Nuansa Tradisional", "Kolam Renang"], label: "Budget", image: "/saung-family.jpg", deskripsi: "Nuansa tradisional yang menenangkan, lengkap dengan kolam renang menyegarkan." },

  // BIG SIZE
  { id: "villa-palayangan", nama: "Villa Palayangan", kategori: "Kapasitas Besar", harga: "Rp 4.000.000", hargaAsli: "", fasilitas: ["Kapasitas Ekstra Besar", "View Danau", "Meja Biliard"], label: "Big Size", image: "/villa-palayangan.jpg", deskripsi: "Kemewahan berkapasitas besar dengan panorama eksklusif langsung ke danau." },
  { id: "villa-wantea", nama: "Villa Wantea", kategori: "Kapasitas Besar", harga: "Rp 3.000.000", hargaAsli: "", fasilitas: ["Max 20-30 Orang", "Gaya Belanda", "Halaman Luas"], label: "Big Size", image: "/villa-wantea.jpg", deskripsi: "Arsitektur klasik bergaya Belanda, sangat sejuk dan muat untuk rombongan besar." },
  { id: "barak-ghc", nama: "Barak GHC", kategori: "Kapasitas Besar", harga: "Rp 2.000.000", hargaAsli: "", fasilitas: ["Max 20 Orang", "View Cileunca", "Cocok utk Kantor"], label: "Big Size", image: "/barak-ghc.jpg", deskripsi: "Solusi cerdas dan nyaman untuk menyukseskan acara keakraban kantor atau kampus." },
  { id: "villa-bts", nama: "Villa BTS", kategori: "Kapasitas Besar", harga: "Rp 2.000.000", hargaAsli: "", fasilitas: ["Max 20 Orang", "Fasilitas Lengkap", "Lingkungan Nyaman"], label: "Big Size", image: "/villa-bts.jpg", deskripsi: "Kenyamanan maksimal dengan fasilitas komplit untuk menampung seluruh rombongan." },
  { id: "villa-palayangan-2", nama: "Vila Palayangan (30 Pax)", kategori: "Kapasitas Besar", harga: "Rp 2.250.000", hargaAsli: "", fasilitas: ["Max 30 Orang", "View Cileunca", "Area Luas"], label: "Big Size", image: "/paket2.jpg", deskripsi: "Ruang ekstra luas dengan pemandangan danau Cileunca yang syahdu dari kejauhan." },
  { id: "family-c", nama: "Family C", kategori: "Kapasitas Besar", harga: "Rp 3.000.000", hargaAsli: "", fasilitas: ["Max 30 Orang", "Tipe Homestay", "View Cileunca"], label: "Big Size", image: "/family-c.jpg", deskripsi: "Homestay hangat yang siap menyambut dan memanjakan rombongan besar Anda." },
  { id: "family-b", nama: "Family B", kategori: "Kapasitas Besar", harga: "Rp 2.000.000", hargaAsli: "", fasilitas: ["Max 30 Orang", "View Danau", "Akses Mudah"], label: "Big Size", image: "/family-b.jpg", deskripsi: "Akses super mudah dengan area santai yang menghadap ketenangan air danau." },
  { id: "family-a", nama: "Family A", kategori: "Kapasitas Besar", harga: "Rp 2.000.000", hargaAsli: "", fasilitas: ["Max 20 Orang", "View Danau", "Kenyamanan Penuh"], label: "Big Size", image: "/family-a.jpg", deskripsi: "Kenyamanan istirahat paripurna dengan view danau yang sungguh memanjakan mata." },

  // VIP
  { id: "villa-palayangan-b", nama: "Villa Palayangan B", kategori: "VIP & Premium", harga: "Rp 4.000.000", hargaAsli: "", fasilitas: ["Kapasitas Premium", "Fasilitas Mewah", "Sangat Eksklusif"], label: "VIP", image: "/villa-palayangan-b.jpg", deskripsi: "Eksklusivitas dan privasi tingkat tinggi yang dirancang khusus untuk tamu spesial." },
  { id: "harmony-riverside", nama: "Harmony Riverside", kategori: "VIP & Premium", harga: "Rp 1.750.000", hargaAsli: "", fasilitas: ["Cabin Premium", "View Sungai", "Hutan Rahong"], label: "VIP", image: "/paket2.jpg", deskripsi: "Kabin estetik di tengah hutan pinus dengan nyanyian aliran sungai yang damai." },
  { id: "vila-imah", nama: "Vila Imah", kategori: "VIP & Premium", harga: "Rp 5.500.000", hargaAsli: "", fasilitas: ["Max 30 Orang", "VIP Premium", "Eksklusif"], label: "VIP", image: "/vila-imah.jpg", deskripsi: "Standar kemewahan premium untuk menciptakan pengalaman menginap tak terlupakan." },
  { id: "vila-putih", nama: "Vila Putih", kategori: "VIP & Premium", harga: "Rp 6.000.000", hargaAsli: "", fasilitas: ["Max 45 Orang", "Gazebo Pribadi", "Arsitektur Estetik"], label: "VIP", image: "/vila-putih.jpg", deskripsi: "Vila megah nan estetik dengan kapasitas masif, pilihan utama untuk acara prestisius." },
  { id: "vila-putih-a", nama: "Vila Putih A", kategori: "VIP & Premium", harga: "Rp 3.500.000", hargaAsli: "", fasilitas: ["Max 25 Orang", "Desain Ikonik", "Pelayanan Premium"], label: "VIP", image: "/vila-putih-a.jpg", deskripsi: "Perpaduan harmoni antara desain ikonik dan keindahan alam yang memukau." },
  { id: "bumi-tilu", nama: "Bumi Tilu", kategori: "VIP & Premium", harga: "Rp 4.500.000", hargaAsli: "", fasilitas: ["Max 10 Orang", "Kolam Renang Privat", "Premium Estetik"], label: "VIP", image: "/bumi-tilu.jpg", deskripsi: "Estetika modern di tengah tenangnya alam, lengkap dengan kolam renang eksklusif." },
  { id: "glamping-sagaya", nama: "Glamping Sagaya", kategori: "VIP & Premium", harga: "Rp 750.000", hargaAsli: "", fasilitas: ["Max 4 Orang", "View Kebun Teh", "Tenda Estetik"], label: "VIP", image: "/glamping-sagaya.jpg", deskripsi: "Tenda estetik nan nyaman dengan hamparan permadani kebun teh tepat di depan pintu." },
];

const filterList = ["Semua Penginapan", "Budget Friendly", "Kapasitas Besar", "VIP & Premium"];

// ─── KOMPONEN KARTU BENTO RINGKAS (Khusus Penginapan) ─────────────────────
function CompactCard({ item }: { item: any }) {
  return (
    <Link 
      href={`/penginapan/${item.id}`} 
      className="group w-full flex items-center gap-3 sm:gap-4 bg-white p-3 rounded-2xl border border-stone-200 shadow-sm hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="w-24 h-24 sm:w-28 sm:h-28 relative rounded-xl overflow-hidden shrink-0 bg-stone-100">
        <Image src={item.image} alt={item.nama} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="112px" />
        {item.label && (
          <span className={`absolute top-0 left-0 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-br-lg ${item.label === 'Budget' ? 'bg-emerald-500' : item.label === 'Big Size' ? 'bg-blue-600' : 'bg-amber-500'}`}>
            {item.label}
          </span>
        )}
      </div>
      
      <div className="flex-1 flex flex-col justify-center overflow-hidden py-1">
        <div className="flex justify-between items-start mb-0.5 gap-1">
           <span className="text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-stone-100 text-stone-500 truncate">{item.kategori}</span>
        </div>
        <h4 className="font-bold text-stone-800 text-sm sm:text-base leading-tight truncate mt-0.5">{item.nama}</h4>
        
        {/* Highlight Kapasitas/Fasilitas */}
        <p className="text-[9px] sm:text-[10px] text-emerald-600 font-bold mt-1 line-clamp-1">
          {item.fasilitas[0]} <span className="text-stone-400 font-normal ml-1">• {item.fasilitas[1]}</span>
        </p>
        
        <p className="text-[10px] sm:text-[11px] text-stone-500 line-clamp-1 mt-1 mb-2.5">{item.deskripsi}</p>
        
        <div className="mt-auto flex justify-between items-end">
          <div className="flex flex-col">
            <span className="font-black text-stone-800 text-sm sm:text-base tracking-tight">{item.harga}<span className="text-[8px] sm:text-[10px] font-medium text-stone-400 ml-1">/malam</span></span>
          </div>
          <span className="bg-stone-50 text-stone-600 border border-stone-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-colors shrink-0">
            Cek Villa &rarr;
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

// ─── HALAMAN UTAMA KATALOG PENGINAPAN ─────────────────────────────────────
export default function KatalogPenginapan() {
  const [activeFilter, setActiveFilter] = useState("Semua Penginapan");

  // Sortir harga termurah ke termahal untuk default (Semua)
  const sortedData = [...dataPenginapan].sort((a, b) => {
    const hargaA = parseInt(a.harga.replace(/[^0-9]/g, ''));
    const hargaB = parseInt(b.harga.replace(/[^0-9]/g, ''));
    return hargaA - hargaB;
  });

  const filteredData = activeFilter === "Semua Penginapan" 
    ? sortedData 
    : dataPenginapan.filter(item => item.kategori === activeFilter);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans pb-20">
      
      {/* 1. HERO HEADER (Aksen Hijau di Judul) */}
      <section className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 text-center sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
        <Image src="/hero-pangalengan-trip.jpg" alt="Katalog Penginapan Pangalengan" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-50"></div>
        <div className="relative z-10 mx-auto max-w-3xl space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition text-xs font-bold uppercase tracking-widest mb-2">
            &larr; Kembali ke Beranda
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-md">
            Katalog Penginapan <br className="hidden sm:block" />
            <span className="text-emerald-400 font-light italic tracking-wide">Terbaru 2026</span>
          </h1>
          <p className="text-sm text-stone-300 sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Dari cottage keluarga yang hangat hingga villa eksklusif berkapasitas besar. Temukan tempat istirahat sempurna Anda di Pangalengan.
          </p>
        </div>
      </section>

      {/* 2. SESI: KATALOG FILTER DINAMIS */}
      <section className="px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* Judul Di-Center */}
          <div className="mb-8 text-center space-y-1.5">
            <h2 className="text-2xl font-bold text-stone-800 sm:text-3xl">Pilih Penginapan</h2>
            <p className="text-sm text-stone-500 font-medium">Sesuaikan dengan kapasitas rombongan dan kebutuhan fasilitas Anda.</p>
          </div>

          {/* Wrapper Filter Di-Center */}
          <div className="mb-10 flex justify-center gap-2 overflow-x-auto w-full max-w-full px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filterList.map((kat) => (
              <button
                key={kat}
                onClick={() => setActiveFilter(kat)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                  activeFilter === kat 
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-md" 
                    : "bg-white text-stone-500 border-stone-200 hover:bg-stone-100 hover:text-stone-800"
                }`}
              >
                {kat}
              </button>
            ))}
          </div>

          {/* Grid Penginapan Dinamis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                >
                  <CompactCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredData.length === 0 && (
               <div className="col-span-full text-center py-10 bg-white rounded-2xl border border-stone-200">
                 <p className="text-sm text-stone-500">Belum ada penginapan di kategori ini.</p>
               </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. BANNER CUSTOM TRIP (JARING PENGAMAN) */}
      <section className="relative w-full px-4 py-16 sm:py-20 sm:px-6 lg:px-8 text-center text-white overflow-hidden bg-stone-900 border-y border-stone-800 mt-8">
        <Image src="/hero-pangalengan-trip.jpg" alt="Custom Trip Background" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-stone-900/85 backdrop-blur-[2px]"></div> 
        
        <div className="relative z-10 mx-auto max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-emerald-400">Bingung Menyusun Jadwal Rombongan?</h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl font-medium">
            Mencocokkan villa dengan jadwal wisata rombongan besar memang merepotkan. Biar kami yang urus! Gunakan Kalkulator Custom Trip untuk merancang itinerary dan penginapan dalam satu harga paket yang bersih.
          </p>
          <div className="pt-4">
            <Link href="/custom-trip" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 hover:-translate-y-1">
              Rancang Custom Trip Sekarang
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FAQ (PERTANYAAN KHUSUS MENGINAP) */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Informasi Penginapan</h2>
            <p className="text-sm text-stone-500 font-medium mt-2">Hal-hal yang perlu Anda ketahui sebelum melakukan pemesanan (booking).</p>
          </div>
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-stone-200">
            <FAQItem 
              q="Jam berapa waktu Check-in dan Check-out standar?" 
              a="Standar waktu Check-in kami adalah pukul 14.00 WIB, dan waktu Check-out maksimal pukul 12.00 WIB siang di hari berikutnya." 
            />
            <FAQItem 
              q="Apakah bisa menambah peserta (Extra Bed) melebihi kapasitas maksimal?" 
              a="Bisa, namun akan dikenakan biaya tambahan (Extra Bed) per orangnya. Hubungi admin kami untuk memastikan apakah villa yang Anda pilih masih memiliki ruang untuk tambahan bed." 
            />
            <FAQItem 
              q="Apakah disediakan alat masak dan dapur?" 
              a="Hampir seluruh villa berkapasitas besar dan VIP kami sudah dilengkapi dengan dapur bersih, kompor, dan alat masak standar. Anda bebas membawa bahan makanan mentah dari luar." 
            />
            <FAQItem 
              q="Bagaimana cara memesan (booking) penginapan?" 
              a="Pemesanan dilakukan dengan menghubungi admin kami via WhatsApp. Kami akan mengecek ketersediaan tanggal, dan jika tersedia, Anda cukup membayarkan Uang Muka (DP) untuk mengamankan pesanan." 
            />
          </div>
        </div>
      </section>

      {/* 5. FLOATING ACTION BUTTON (WA) */}
      <a 
        href={generateWALink("Halo Pangalengan Trip, saya mau cek ketersediaan villa/penginapan untuk tanggal...")} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300"
        aria-label="Chat WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12.013 2.015c-5.506 0-9.988 4.473-9.99 9.98a9.964 9.964 0 001.332 5.01L2 22l5.148-1.352a9.97 9.97 0 004.865 1.26h.004c5.503 0 9.985-4.475 9.987-9.983 0-2.668-1.04-5.176-2.926-7.065A9.916 9.916 0 0012.013 2.015zM12.018 20c-1.545 0-3.056-.416-4.382-1.202l-.314-.187-3.256.853.867-3.174-.205-.327a8.318 8.318 0 01-1.274-4.444c.002-4.606 3.75-8.354 8.358-8.356 2.235.001 4.335.872 5.914 2.454a8.336 8.336 0 012.449 5.912c-.002 4.607-3.748 8.354-8.354 8.354zm4.584-6.262c-.251-.126-1.488-.736-1.718-.82-.23-.085-.398-.126-.565.126-.168.252-.647.82-.793.988-.146.168-.293.189-.544.063-.251-.126-1.06-.39-2.018-1.196-.745-.626-1.25-1.4-1.396-1.652-.146-.252-.016-.388.11-.514.113-.112.251-.293.377-.44.126-.146.168-.252.251-.419.084-.168.042-.315-.021-.44-.063-.126-.565-1.363-.774-1.867-.203-.491-.41-.424-.565-.432-.146-.008-.314-.01-.482-.01s-.44.063-.67.315c-.23.252-.88 8.61 10.364 8.61 10.364zm0 0c-1.11 1.05-2.908 1.408-4.08 1.408-1.504 0-3.41-.532-4.836-1.567l-3.21-.634z" />
        </svg>
      </a>

      {/* 6. FAT FOOTER */}
      <footer className="bg-stone-950 text-stone-300 mt-auto">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <p className="text-xl font-bold tracking-tight text-white">Pangalengan Trip</p>
              <p className="text-sm leading-relaxed text-stone-400">Partner perjalanan terpercaya Anda untuk menjelajahi keindahan alam, petualangan, dan ketenangan di Pangalengan, Bandung Selatan.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500">Hubungi Kami</h3>
              <ul className="space-y-3 text-sm text-stone-400 font-medium">
                <li><span className="text-stone-200">Alamat:</span> Jl. Raya Situ Cileunca, Pangalengan.</li>
                <li><span className="text-stone-200">Email:</span> hello@pangalengantrip.com</li>
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
            <p className="text-sm text-stone-500 font-medium">© 2026 Pangalengan Trip. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}