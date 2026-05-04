"use client";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { generateWALink } from "@/config/contact";

// ─── Data & Komponen Helper ─────────────────────────────────────────────

export type PaketItem = {
  id: string;
  nama: string;
  harga: string;
  hargaAsli: string;
  hargaDiskon: string;
  fasilitas: string[];
  label?: string;
  deskripsi: string;
  image: string;
  link?: string;
};

function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number; }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{value}</span>;
}

function LiveRollingCounter() {
  const [count, setCount] = useState(1351);
  useEffect(() => {
    const interval = setInterval(() => setCount((prev) => prev + 1), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex overflow-hidden h-[1.2em] relative align-bottom">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={count}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="inline-block"
        >
          {count}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ─── DATA: 8 Petualangan ─────────────────────────────────────────
const kategoriPetualangan: PaketItem[] = [
  { id: "rafting", nama: "Rafting Palayangan", harga: "Rp 190.000", hargaAsli: "", hargaDiskon: "Rp 165.000", fasilitas: [], label: "⚡ Terlaris", image: "/rafting.jpg", deskripsi: "Taklukkan derasnya arus. Tawa lepas dan adrenalin bersatu di alam bebas." },
  { id: "atv", nama: "ATV Adventure", harga: "Rp 175.000", hargaAsli: "", hargaDiskon: "Rp 175.000", fasilitas: [], image: "/keluarga-seru.jpg", deskripsi: "Pacu adrenalin di jalur berlumpur dan hamparan kebun teh yang menantang." },
  { id: "offroad", nama: "Offroad Land Rover", harga: "Rp 220.000", hargaAsli: "", hargaDiskon: "Rp 220.000", fasilitas: [], label: "Seru!", image: "/offroad.jpg", deskripsi: "Eksplorasi menembus hutan pinus liar menggunakan mobil tangguh." },
  { id: "paintball", nama: "Paintball Battle", harga: "Rp 85.000", hargaAsli: "", hargaDiskon: "Rp 85.000", fasilitas: [], image: "/paintball.jpg", deskripsi: "Simulasi tempur di tengah hutan. Strategi, ketegangan, dan keseruan tim." },
  { id: "team-building", nama: "Team Building", harga: "Rp 99.000", hargaAsli: "", hargaDiskon: "Rp 99.000", fasilitas: [], image: "/teambuilding1.jpeg", deskripsi: "Rangkaian games seru untuk merekatkan kekompakan dan kehangatan tim." },
  { id: "flying-fox", nama: "Flying Fox", harga: "Rp 35.000", hargaAsli: "", hargaDiskon: "Rp 35.000", fasilitas: [], image: "/flyingfox.jpg", deskripsi: "Meluncur bebas melintasi lembah dan danau. Singkat namun mendebarkan." },
  { id: "tour-perahu", nama: "Tour Perahu", harga: "Rp 20.000", hargaAsli: "", hargaDiskon: "Rp 20.000", fasilitas: [], image: "/perahu.jpg", deskripsi: "Bersantai menikmati syahdunya pemandangan Situ Cileunca dari atas perahu." },
  { id: "treking", nama: "Treking Alam", harga: "Rp 70.000", hargaAsli: "", hargaDiskon: "Rp 70.000", fasilitas: [], image: "/treking.jpg", deskripsi: "Menjelajahi sejuknya bukit dan hamparan kebun teh dengan panduan lokal." },
];

const paketCombo = [
  { id: "keluarga-hemat", nama: "Keluarga Hemat", tag: "Keluarga", durasi: "1 Hari", harga: "Rp 199.000", fasilitas: ["Rafting & Flying Fox", "Makan & Air Mineral", "Dokumentasi Foto"], color: "text-sky-700 bg-sky-100", image: "/keluarga-hemat.JPG" },
  { id: "keluarga-seru", nama: "Keluarga Seru", tag: "Keluarga", durasi: "1 Hari", harga: "Rp 299.000", fasilitas: ["Rafting & Flying Fox", "ATV", "Makan & Air Mineral", "Dokumentasi Foto"], color: "text-sky-700 bg-sky-100", image: "/keluarga-seru.jpg" },
  { id: "keluarga-puas", nama: "Keluarga Puas", tag: "Keluarga", durasi: "1 Hari", harga: "Rp 410.000", fasilitas: ["Rafting & Flying Fox", "Offroad Land Rover", "Makan & Air", "Dokumentasi"], color: "text-sky-700 bg-sky-100", image: "/keluarga-puas.jpg" },
  { id: "corp-a1d", nama: "Corporate A1D", tag: "Corporate 1D", durasi: "1 Hari", harga: "Rp 360.000", fasilitas: ["Rafting & Paintball", "ATV", "Makan Siang", "Dokumentasi"], color: "text-slate-700 bg-slate-100", image: "/corporate-1d-a.jpeg" },
  { id: "corp-b1d", nama: "Corporate B1D", tag: "Corporate 1D", durasi: "1 Hari", harga: "Rp 350.000", fasilitas: ["Rafting & Paintball", "Team Building", "Makan Siang", "Dokumentasi"], color: "text-slate-700 bg-slate-100", image: "/corporate-1d-b.JPG" },
  { id: "corp-c1d", nama: "Corporate C1D", tag: "Corporate 1D", durasi: "1 Hari", harga: "Rp 549.000", fasilitas: ["Rafting & Offroad", "Paintball & Ice Breaking", "Makan Siang", "Foto Rafting"], color: "text-slate-700 bg-slate-100", image: "/corporate-1n-c.jpg" },
  { id: "corp-a2d", nama: "Corporate A2D", tag: "Corp 2D1N", durasi: "Menginap", harga: "Rp 239.000", fasilitas: ["Fresh Rafting", "Paintball", "Makan", "Dokumentasi Rafting"], color: "text-indigo-700 bg-indigo-100", image: "/corporate-1n-a.JPG" },
  { id: "corp-b2d", nama: "Corporate B2D", tag: "Corp 2D1N", durasi: "Menginap", harga: "Rp 650.000", fasilitas: ["Penginapan", "Rafting, Paintball, Flying Fox", "3x Makan", "Kambing Guling"], color: "text-indigo-700 bg-indigo-100", image: "/corporate-1n-b.JPG" },
  { id: "corp-c2d", nama: "Corporate C2D", tag: "Corp 2D1N", durasi: "Menginap", harga: "Rp 450.000", fasilitas: ["Penginapan", "Rafting, Paintball, Flying Fox", "3x Makan", "Tour Leader"], color: "text-indigo-700 bg-indigo-100", image: "/rafting.jpg" },
  { id: "corp-d2d", nama: "Corporate D2D", tag: "Corp 2D1N", durasi: "Menginap", harga: "Rp 200.000", fasilitas: ["Rafting", "Fun Games", "Makan", "Dokumentasi Rafting"], color: "text-indigo-700 bg-indigo-100", image: "/paket3.jpg" },
  { id: "corp-vip", nama: "Corporate VIP E2D", tag: "VIP 2D1N", durasi: "Menginap", harga: "Rp 1.099.000", fasilitas: ["Villa VIP", "3x Makan", "Rafting & Team Building", "Offroad, Paintball"], color: "text-yellow-700 bg-yellow-50 border border-yellow-200", image: "/corporate-vip.JPG" },
  { id: "camp-fca", nama: "Family Camp FCA", tag: "Camp Menginap", durasi: "Menginap", harga: "Rp 495.000", fasilitas: ["Glamping", "Sarapan & Tea Break", "Rafting & ATV", "Flying Fox"], color: "text-emerald-700 bg-emerald-100", image: "/family-camp-a.JPG" },
  { id: "camp-fcb", nama: "Family Camp FCB", tag: "Camp Menginap", durasi: "Menginap", harga: "Rp 620.000", fasilitas: ["Glamping", "Sarapan & Tea Break", "Rafting & Offroad", "Flying Fox"], color: "text-emerald-700 bg-emerald-100", image: "/family-camp-b.JPG" },
  { id: "camp-fcc", nama: "Family Camp FCC", tag: "Camp Menginap", durasi: "Menginap", harga: "Rp 395.000", fasilitas: ["Glamping", "Sarapan & Tea Break", "Rafting", "Flying Fox"], color: "text-emerald-700 bg-emerald-100", image: "/flyingfox.jpg" },
];

// ─── DATA BARU 2026: PENGINAPAN ─────────────────
const kategoriPenginapan: PaketItem[] = [
  { id: "saung-cinta", nama: "Saung Cinta", harga: "", hargaAsli: "", hargaDiskon: "Rp 750.000", fasilitas: ["Max 20 Orang", "Kolam Renang", "Dekat Cileunca"], label: "Budget", image: "/saung-cinta.jpg", deskripsi: "Cottage luas dengan kolam renang, pas untuk menghangatkan momen keluarga." },
  { id: "saung-gadis", nama: "Saung Gadis", harga: "", hargaAsli: "", hargaDiskon: "Rp 850.000", fasilitas: ["Max 10 Orang", "Kolam Renang", "Dekat Cileunca"], label: "Budget", image: "/saung-gadis.JPG", deskripsi: "Fasilitas lengkap berkapasitas besar, sempurna untuk kumpul santai akhir pekan." },
  { id: "saung-rungkun", nama: "Saung Rungkun", harga: "", hargaAsli: "", hargaDiskon: "Rp 1.500.000", fasilitas: ["Max 15 Orang", "Kolam Renang", "Dekat Cileunca"], label: "Budget", image: "/saung-rungkun.jpg", deskripsi: "Pilihan hemat nan nyaman dengan gazebo asri untuk bersantai bersama kerabat." },
  { id: "saung-family", nama: "Saung Family", harga: "", hargaAsli: "", hargaDiskon: "Rp 750.000", fasilitas: ["Max 10 Orang", "Tradisional", "Kolam Renang"], label: "Budget", image: "/saung-family.jpg", deskripsi: "Nuansa tradisional yang menenangkan, lengkap dengan kolam renang menyegarkan." },
  { id: "villa-palayangan", nama: "Villa Palayangan", harga: "", hargaAsli: "", hargaDiskon: "Rp 4.000.000", fasilitas: ["Kapasitas Besar", "View Danau", "Biliard"], label: "Big Size", image: "/villa-palayangan.jpg", deskripsi: "Kemewahan berkapasitas besar dengan panorama eksklusif langsung ke danau." },
  { id: "villa-wantea", nama: "Villa Wantea", harga: "", hargaAsli: "", hargaDiskon: "Rp 3.000.000", fasilitas: ["20-30 Orang", "Gaya Belanda", "Halaman Luas"], label: "Big Size", image: "/villa-wantea.jpg", deskripsi: "Arsitektur klasik bergaya Belanda, sangat sejuk dan muat untuk rombongan besar." },
  { id: "barak-ghc", nama: "Barak GHC", harga: "", hargaAsli: "", hargaDiskon: "Rp 2.000.000", fasilitas: ["Max 20 Orang", "View Cileunca", "Cocok utk Kantor"], label: "Big Size", image: "/barak-ghc.jpg", deskripsi: "Solusi cerdas dan nyaman untuk menyukseskan acara keakraban kantor atau kampus." },
  { id: "villa-bts", nama: "Villa BTS", harga: "", hargaAsli: "", hargaDiskon: "Rp 2.000.000", fasilitas: ["Max 20 Orang", "Fasilitas Lengkap", "Nyaman"], label: "Big Size", image: "/villa-bts.jpg", deskripsi: "Kenyamanan maksimal dengan fasilitas komplit untuk menampung seluruh rombongan." },
  { id: "villa-palayangan-2", nama: "Vila Palayangan (30 Pax)", harga: "", hargaAsli: "", hargaDiskon: "Rp 2.250.000", fasilitas: ["Max 30 Orang", "View Cileunca", "Luas"], label: "Big Size", image: "/paket2.jpg", deskripsi: "Ruang ekstra luas dengan pemandangan danau Cileunca yang syahdu dari kejauhan." },
  { id: "family-c", nama: "Family C", harga: "", hargaAsli: "", hargaDiskon: "Rp 3.000.000", fasilitas: ["Max 30 Orang", "Homestay", "View Cileunca"], label: "Big Size", image: "/family-c.jpg", deskripsi: "Homestay hangat yang siap menyambut dan memanjakan rombongan besar Anda." },
  { id: "family-b", nama: "Family B", harga: "", hargaAsli: "", hargaDiskon: "Rp 2.000.000", fasilitas: ["Max 30 Orang", "View Danau", "Akses Mudah"], label: "Big Size", image: "/family-b.jpg", deskripsi: "Akses super mudah dengan area santai yang menghadap ketenangan air danau." },
  { id: "family-a", nama: "Family A", harga: "", hargaAsli: "", hargaDiskon: "Rp 2.000.000", fasilitas: ["Max 20 Orang", "View Danau", "Nyaman"], label: "Big Size", image: "/family-a.jpg", deskripsi: "Kenyamanan istirahat paripurna dengan view danau yang sungguh memanjakan mata." },
  { id: "villa-palayangan-b", nama: "Villa Palayangan B", harga: "", hargaAsli: "", hargaDiskon: "Rp 4.000.000", fasilitas: ["Premium", "Fasilitas Lengkap", "Eksklusif"], label: "VIP", image: "/villa-palayangan-b.jpg", deskripsi: "Eksklusivitas dan privasi tingkat tinggi yang dirancang khusus untuk tamu spesial." },
  { id: "harmony-riverside", nama: "Harmony Riverside", harga: "", hargaAsli: "", hargaDiskon: "Rp 1.750.000", fasilitas: ["Cabin Premium", "View Sungai", "Hutan Rahong"], label: "VIP", image: "/paket2.jpg", deskripsi: "Kabin estetik di tengah hutan pinus dengan nyanyian aliran sungai yang damai." },
  { id: "vila-imah", nama: "Vila Imah", harga: "", hargaAsli: "", hargaDiskon: "Rp 5.500.000", fasilitas: ["Max 30 Orang", "VIP Premium", "Eksklusif"], label: "VIP", image: "/villa-imah.jpg", deskripsi: "Standar kemewahan premium untuk menciptakan pengalaman menginap tak terlupakan." },
  { id: "vila-putih", nama: "Vila Putih", harga: "", hargaAsli: "", hargaDiskon: "Rp 6.000.000", fasilitas: ["Max 45 Orang", "Gazebo", "Estetik"], label: "VIP", image: "/villa-putih.jpg", deskripsi: "Vila megah nan estetik dengan kapasitas masif, pilihan utama untuk acara prestisius." },
  { id: "vila-putih-a", nama: "Vila Putih A", harga: "", hargaAsli: "", hargaDiskon: "Rp 3.500.000", fasilitas: ["Max 25 Orang", "Ikonik", "Premium"], label: "VIP", image: "/villa-putih-a.jpg", deskripsi: "Perpaduan harmoni antara desain ikonik dan keindahan alam yang memukau." },
  { id: "bumi-tilu", nama: "Bumi Tilu", harga: "", hargaAsli: "", hargaDiskon: "Rp 4.500.000", fasilitas: ["Max 10 Orang", "Kolam Renang", "Premium Estetik"], label: "VIP", image: "/bumi-tilu.jpg", deskripsi: "Estetika modern di tengah tenangnya alam, lengkap dengan kolam renang eksklusif." },
  { id: "glamping-sagaya", nama: "Glamping Sagaya", harga: "", hargaAsli: "", hargaDiskon: "Rp 750.000", fasilitas: ["Max 4 Orang", "View Kebun Teh", "Estetik"], label: "VIP", image: "/glamping-sagaya.jpg", deskripsi: "Tenda estetik nan nyaman dengan hamparan permadani kebun teh tepat di depan pintu." },
];

const sortedPenginapan = [...kategoriPenginapan].sort((a, b) => {
  const hargaA = parseInt(a.hargaDiskon.replace(/[^0-9]/g, ''));
  const hargaB = parseInt(b.hargaDiskon.replace(/[^0-9]/g, ''));
  return hargaA - hargaB;
});

// ─── KOMPONEN: Slider Otomatis untuk Combo ────────────────────
function ComboSlider({ items }: { items: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3500); 
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="relative mt-16 w-full pt-12 border-t border-emerald-200/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="text-center mb-8 space-y-1.5">
         <h3 className="text-2xl font-bold text-stone-800 sm:text-3xl">Paket Combo Wisata</h3>
         <p className="max-w-2xl text-sm text-stone-500 font-medium mx-auto">Solusi liburan praktis, hemat, dan paling lengkap.</p>
      </div>

      <div className="relative group">
        <div ref={scrollRef} className="grid grid-rows-2 grid-flow-col gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1">
          {items.map((pkt, idx) => (
            <Link 
              href={`/paket/${pkt.id}`} 
              key={idx}
              className="w-[85vw] sm:w-[320px] shrink-0 snap-start flex items-center gap-4 bg-white p-3 rounded-2xl border border-stone-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-xl overflow-hidden shrink-0 bg-stone-100">
                <Image src={pkt.image} alt={pkt.nama} fill className="object-cover" />
                <span className="absolute top-0 left-0 text-[8px] font-black uppercase px-2.5 py-1 rounded-br-xl bg-stone-900/80 backdrop-blur-sm text-emerald-400 shadow-sm">
                  {pkt.durasi}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-0.5">
                   <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${pkt.color}`}>{pkt.tag}</span>
                </div>
                <h4 className="font-bold text-stone-800 text-sm sm:text-base leading-tight mt-0.5">{pkt.nama}</h4>
                <p className="text-[10px] sm:text-xs text-stone-500 line-clamp-2 mt-1 mb-2 leading-relaxed">
                  {pkt.fasilitas.join(" • ")}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-black text-emerald-700 text-sm sm:text-base">{pkt.harga}</span>
                  <span className="bg-stone-100 text-stone-600 hover:bg-emerald-100 hover:text-emerald-700 text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-colors">Lihat &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── HALAMAN UTAMA (Diurutkan Sesuai Psikologi Marketing) ────────────────
export default function Home() {
  const [showAllDestinasi, setShowAllDestinasi] = useState(false); 
  const [showAllPenginapan, setShowAllPenginapan] = useState(false);
  const penginapanRef = useRef<HTMLDivElement>(null);
  const [activePenginapan, setActivePenginapan] = useState(0);
  // Karena datanya dibagi 2 baris, jumlah titiknya adalah (Total Data dibagi 2)
  const totalPenginapanCols = Math.ceil(sortedPenginapan.length / 2);
  const handlePenginapanScroll = () => {
    if (!penginapanRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = penginapanRef.current;
    // Hitung jarak maksimal yang bisa digeser
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return; // Abaikan jika layar sudah cukup lebar (tidak bisa digeser)
    // Hitung persentase geseran lalu ubah menjadi urutan titik (index)
    const scrollPercentage = scrollLeft / maxScroll;
    const currentIndex = Math.round(scrollPercentage * (totalPenginapanCols - 1));
    setActivePenginapan(currentIndex);
  };
  // --- 2. SENSOR PETUALANGAN SATUAN (DIREVISI MENJADI 2 BARIS) ---
  const petualanganRef = useRef<HTMLDivElement>(null);
  const [activePetualangan, setActivePetualangan] = useState(0);
  
  // PERUBAHAN: Karena sekarang 2 baris, total titik adalah jumlah data dibagi 2
  const totalPetualanganCols = Math.ceil(kategoriPetualangan.length / 2);
  
  const handlePetualanganScroll = () => {
    if (!petualanganRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = petualanganRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    setActivePetualangan(Math.round((scrollLeft / maxScroll) * (totalPetualanganCols - 1)));
  };
  // --- 3. SENSOR PAKET COMBO (BARU) ---
  const comboRef = useRef<HTMLDivElement>(null);
  const [activeCombo, setActiveCombo] = useState(0);
  // Combo formatnya 2 baris, jadi jumlah titiknya = total data dibagi 2
  const totalComboCols = Math.ceil(paketCombo.length / 2);
  const handleComboScroll = () => {
    if (!comboRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = comboRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    setActiveCombo(Math.round((scrollLeft / maxScroll) * (totalComboCols - 1)));
  };
  // ---------------------------------------
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <main className="flex flex-col">
        
        {/* 1. HERO SECTION (Attention) */}
        <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center bg-stone-900 px-4 text-center sm:px-6 lg:px-8 overflow-hidden">
          <Image src="/hero1.jpg" alt="Go Pangalengan" fill className="object-cover opacity-60" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-900/90"></div>
          
          <div className="relative z-10 mx-auto max-w-4xl space-y-6 pt-10">
            <div className="hidden sm:inline-flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[10px] md:text-xs font-semibold text-stone-100 backdrop-blur-md bg-white/10 border border-white/20 px-5 py-2.5 rounded-full mb-4 tracking-wider uppercase">
              <span className="flex items-center gap-1.5"><span className="text-emerald-400">★</span> Sejak 2019</span>
              <span className="opacity-50">•</span>
              <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 10.000+ Klien Puas</span>
              <span className="opacity-50">•</span>
              <span className="flex items-center gap-1.5"><span className="text-emerald-400">🛡️</span> Asuransi BUMIDA</span>
              <span className="opacity-50">•</span>
              <span className="flex items-center gap-1.5"><span className="text-emerald-400">📄</span> Operator Legal</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
              Katalog Wisata Pangalengan <br className="hidden sm:block" />
              <span className="text-emerald-400 font-light italic tracking-wide">Terlengkap & Terbaru.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-stone-200 sm:text-base font-medium drop-shadow">
              Temukan destinasi epik, paket petualangan seru, hingga koleksi vila estetik dalam satu platform. Transparan, aman, dan tanpa biaya tersembunyi.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#petualangan" className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 sm:w-auto tracking-wide">
                Eksplorasi Katalog
              </a>
              <a href={generateWALink("Halo Go Pangalengan, saya butuh panduan untuk merencanakan liburan.")} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto tracking-wide">
                Konsultasi Gratis
              </a>
            </div>
            <div className="flex sm:hidden flex-wrap justify-center items-center gap-2 text-[9px] font-semibold text-stone-200 mt-8 opacity-80 uppercase tracking-widest">
              <span>Sejak 2019</span> • <span>Legal & Berasuransi</span> • <span>10rb+ Klien</span>
            </div>
          </div>
        </section>

        <FadeIn>
          {/* 2. SPOT IKONIK DESTINASI (Interest - Format Grid 2x2 Mobile / 3x2 Desktop) */}
          <section className="bg-white px-4 py-16 sm:py-24 sm:px-6 lg:px-8" id="destinasi">
            <div className="mx-auto max-w-6xl">
              
              <div className="mb-10 space-y-1.5 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Spot Ikonik Pangalengan</h2>
                <p className="max-w-2xl mx-auto text-sm text-stone-500 font-medium">Temukan relaksasi di sudut-sudut paling fotogenik di Pangalengan.</p>
              </div>

              {/* Grid Layout: 2 Kolom di HP, 3 Kolom di Desktop */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
                {[
                  { nama: "Nimo Highland", desc: "Hamparan kebun teh 360°", img: "/nimo.jpg" },
                  { nama: "Sunrise Cukul", desc: "Matahari terbit terbaik", img: "/cukul.jpg" },
                  { nama: "Situ Cileunca", desc: "Danau syahdu & Rafting", img: "/cileunca.jpg" },
                  { nama: "Hutan Rahong", desc: "Ketenangan pinus rindang", img: "/rahong.jpg" },
                  { nama: "Wayang Windu", desc: "Romantisme senja & kabut", img: "/wayang.jpg" },
                  { nama: "Bosscha Malabar", desc: "Jejak sejarah raja teh", img: "/makam-bosscha.jpg" },
                ].map((dest, idx) => (
                  <Link 
                    href={`/destinasi/${dest.nama.toLowerCase().replace(/ /g, '-')}`} 
                    key={idx} 
                    // Trik Magis: Item ke-5 & ke-6 (idx >= 4) disembunyikan di HP jika tombol belum diklik, tapi selalu muncul di Desktop (md:block)
                    className={`group relative overflow-hidden rounded-2xl bg-stone-100 aspect-square border border-stone-200 shadow-sm ${
                      idx >= 4 && !showAllDestinasi ? 'hidden md:block' : 'block'
                    }`}
                  >
                    <Image 
                      src={dest.img} 
                      alt={dest.nama} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      sizes="(max-width: 768px) 50vw, 33vw" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                      <h3 className="text-sm font-bold text-white sm:text-base tracking-wide">{dest.nama}</h3>
                      <p className="text-[10px] text-stone-300 sm:text-xs mt-0.5 line-clamp-1">{dest.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Tombol Dropdown Khusus Mobile (Disembunyikan di Layar Desktop) */}
              <div className="mt-8 flex justify-center md:hidden">
                <button
                  onClick={() => setShowAllDestinasi(!showAllDestinasi)}
                  className="flex items-center gap-2 text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-6 py-2.5 rounded-full hover:bg-emerald-100 transition-all active:scale-95"
                >
                  {showAllDestinasi ? (
                    <>Sembunyikan <span className="text-lg leading-none">▴</span></>
                  ) : (
                    <>Spot Lainnya <span className="text-lg leading-none">▾</span></>
                  )}
                </button>
              </div>

            </div>
          </section>
        </FadeIn>

        <FadeIn>
          {/* 4. KATALOG PETUALANGAN & COMBO (Kini Semuanya Geser Manual yang Stabil) */}
          <section id="petualangan" className="bg-emerald-50/60 px-4 py-16 sm:py-24 sm:px-6 lg:px-8 border-b border-emerald-100/50">
            <div className="mx-auto max-w-6xl">
              
              {/* --- KATALOG PETUALANGAN SATUAN (2 Baris) --- */}
              <div className="mb-8 space-y-1.5 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Katalog Wisata</h2>
                <p className="max-w-2xl mx-auto text-sm text-stone-500 font-medium">Pilih keseruan Anda. Format ringkas dengan harga ter-update 2026.</p>
              </div>

              <div className="relative group">
                <div 
                  ref={petualanganRef}
                  onScroll={handlePetualanganScroll}
                  // PERUBAHAN DI SINI: grid-rows-1 diubah menjadi grid-rows-2
                  className="grid grid-rows-2 grid-flow-col gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1"
                >
                  {kategoriPetualangan.map((item, idx) => (
                    <Link href={`/paket/${item.id}`} key={idx} className="w-[85vw] sm:w-[320px] shrink-0 snap-start flex items-center gap-4 bg-white p-3 rounded-2xl border border-stone-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-xl overflow-hidden shrink-0 bg-stone-100">
                        <Image src={item.image} alt={item.nama} fill className="object-cover" />
                        {item.label && <span className="absolute top-0 left-0 bg-emerald-500 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-br-lg">{item.label}</span>}
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="font-bold text-stone-800 text-sm sm:text-base leading-tight">{item.nama}</h4>
                        <p className="text-[10px] sm:text-xs text-stone-500 line-clamp-2 mt-1 mb-2 leading-relaxed">{item.deskripsi}</p>
                        <div className="mt-auto flex justify-between items-center">
                          <span className="font-black text-emerald-700 text-sm sm:text-base">{item.hargaDiskon}</span>
                          <span className="bg-stone-100 text-stone-600 hover:bg-emerald-100 hover:text-emerald-700 text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-colors">Lihat &rarr;</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* INDIKATOR TITIK: Petualangan Satuan */}
                <div className="mt-4 flex justify-center items-center gap-1.5">
                  {Array.from({ length: totalPetualanganCols }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                        activePetualangan === i ? "w-5 bg-emerald-600" : "w-1.5 bg-emerald-200 hover:bg-emerald-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* --- PAKET COMBO (2 Baris) --- */}
              <div className="mt-16 pt-12 border-t border-emerald-200/60">
                <div className="text-center mb-8 space-y-1.5">
                   <h3 className="text-2xl font-bold text-stone-800 sm:text-3xl">Paket Combo Wisata</h3>
                   <p className="max-w-2xl text-sm text-stone-500 font-medium mx-auto">Solusi liburan praktis, hemat, dan paling lengkap.</p>
                </div>

                <div className="relative group">
                  <div 
                    ref={comboRef}
                    onScroll={handleComboScroll}
                    className="grid grid-rows-2 grid-flow-col gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1"
                  >
                    {paketCombo.map((pkt, idx) => (
                      <Link href={`/paket/${pkt.id}`} key={idx} className="w-[85vw] sm:w-[320px] shrink-0 snap-start flex items-center gap-4 bg-white p-3 rounded-2xl border border-stone-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-xl overflow-hidden shrink-0 bg-stone-100">
                          <Image src={pkt.image} alt={pkt.nama} fill className="object-cover" />
                          <span className="absolute top-0 left-0 text-[8px] font-black uppercase px-2.5 py-1 rounded-br-xl bg-stone-900/80 backdrop-blur-sm text-emerald-400 shadow-sm">{pkt.durasi}</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="flex justify-between items-start mb-0.5">
                             <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${pkt.color}`}>{pkt.tag}</span>
                          </div>
                          <h4 className="font-bold text-stone-800 text-sm sm:text-base leading-tight mt-0.5">{pkt.nama}</h4>
                          <p className="text-[10px] sm:text-xs text-stone-500 line-clamp-2 mt-1 mb-2 leading-relaxed">{pkt.fasilitas.join(" • ")}</p>
                          <div className="mt-auto flex justify-between items-center">
                            <span className="font-black text-emerald-700 text-sm sm:text-base">{pkt.harga}</span>
                            <span className="bg-stone-100 text-stone-600 hover:bg-emerald-100 hover:text-emerald-700 text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-colors">Lihat &rarr;</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* INDIKATOR TITIK: Paket Combo */}
                  <div className="mt-4 flex justify-center items-center gap-1.5">
                    {Array.from({ length: totalComboCols }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                          activeCombo === i ? "w-5 bg-emerald-600" : "w-1.5 bg-emerald-200 hover:bg-emerald-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Tombol ke Halaman Katalog Full */}
              <div className="mt-14 flex justify-center">
                <Link href="/katalog-wisata" className="group inline-flex items-center gap-2 rounded-full border-2 border-emerald-600 px-8 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white shadow-sm">
                  Lihat Seluruh Daftar Wisata 2026
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>

            </div>
          </section>
        </FadeIn>

        <FadeIn>
          {/* 5. KATALOG PENGINAPAN (Dengan Indikator Titik Estetik) */}
          <section id="penginapan" className="bg-white px-4 py-16 sm:py-24 sm:px-6 lg:px-8 border-b border-stone-100">
            <div className="mx-auto max-w-6xl">
              
              <div className="mb-10 text-center space-y-1.5">
                <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Katalog Penginapan</h2>
                <p className="max-w-2xl mx-auto text-sm text-stone-500 font-medium">Dari cottage hangat hingga vila eksklusif. Temukan tempat istirahat sempurna Anda.</p>
              </div>

              {/* PASANG SENSOR: ref dan onScroll ditambahkan di sini */}
              <div 
                ref={penginapanRef}
                onScroll={handlePenginapanScroll}
                className="grid grid-rows-2 grid-flow-col gap-3 sm:gap-4 pb-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-1"
              >
                {sortedPenginapan.map((item) => (
                  <Link 
                    href={`/penginapan/${item.id}`} 
                    key={item.id} 
                    className="group relative flex flex-col aspect-square w-[45vw] sm:w-[200px] shrink-0 snap-start overflow-hidden rounded-2xl bg-stone-100 shadow-sm border border-stone-200"
                  >
                    <Image 
                      src={item.image} 
                      alt={item.nama} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      sizes="(max-width: 768px) 45vw, 200px" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                    
                    {item.label && (
                      <span className={`absolute top-2 left-2 text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-lg tracking-wider ${
                        item.label === 'Budget' ? 'bg-emerald-600 text-white' : 
                        item.label === 'Big Size' ? 'bg-slate-700 text-white' : 
                        'bg-stone-900/90 text-amber-400 border border-amber-900/30 backdrop-blur-sm'
                      }`}>
                        {item.label}
                      </span>
                    )}
                    
                    <div className="absolute inset-x-0 bottom-0 p-3 flex flex-col justify-end">
                      <h3 className="font-bold text-white text-xs sm:text-sm leading-tight mb-1">{item.nama}</h3>
                      <p className="text-[9px] text-stone-300 line-clamp-1 mb-1.5">{item.deskripsi}</p>
                      <p className="text-xs sm:text-sm font-black text-emerald-400 tracking-tight">{item.hargaDiskon}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* INDIKATOR TITIK (DOTS) */}
              {/* Desain pil memanjang (w-5) untuk yang aktif, dan titik kecil (w-1.5) untuk yang belum disentuh */}
              <div className="mt-4 mb-8 flex justify-center items-center gap-1.5">
                {Array.from({ length: totalPenginapanCols }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                      activePenginapan === i ? "w-5 bg-emerald-600" : "w-1.5 bg-stone-200 hover:bg-stone-300"
                    }`}
                  />
                ))}
              </div>

              {/* Tombol ke Halaman Pricelist */}
              <div className="mt-8 flex justify-center">
                <Link href="/penginapan" className="group flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border-2 border-emerald-600 px-8 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white">
                  Lihat Pricelist Lengkap Penginapan 2026
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>

            </div>
          </section>
        </FadeIn>

        <FadeIn>
          {/* 5. SESI: VIDEO SHORTS (Intip Keseruannya) */}
          <section className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8 border-y border-stone-200">
            <div className="mx-auto max-w-4xl text-center">
              
              <div className="space-y-1.5 mb-10">
                <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Intip Keseruannya</h2>
                <p className="text-sm text-stone-500 font-medium">Visual nyata dari petualangan tak terlupakan.</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {/* Video 1: Cinematic Loop 1 */}
                <div className="w-[60vw] sm:w-[220px] rounded-2xl bg-white p-2 shadow-md border border-stone-200 shrink-0">
                  <div className="relative w-full overflow-hidden rounded-xl bg-stone-100 aspect-[9/16]">
                    <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline>
                      <source src="/promo-ig.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* Video 2: Cinematic Loop 2 (Muncul di layar menengah-besar) */}
                <div className="hidden sm:block w-[220px] rounded-2xl bg-white p-2 shadow-md border border-stone-200 shrink-0">
                  <div className="relative w-full overflow-hidden rounded-xl bg-stone-100 aspect-[9/16]">
                    <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline>
                      <source src="/promo-tiktok.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
              
              {/* Tombol Call to Action Sosmed */}
              <div className="pt-8 flex flex-wrap gap-4 justify-center w-full">
                <a href="https://www.instagram.com/gopangalengan/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform group-hover:scale-110"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/></svg>
                  Instagram Kami
                </a>
                <a href="https://www.tiktok.com/@go.pangalengan" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-stone-800">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform group-hover:scale-110"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  TikTok Kami
                </a>
              </div>

            </div>
          </section>
        </FadeIn>

        <FadeIn>
          {/* 6. BANNER CUSTOM TRIP (Penawaran Alternatif) */}
          <section className="relative w-full px-4 py-20 sm:py-28 sm:px-6 lg:px-8 text-center text-white overflow-hidden border-b border-stone-800">
            <Image src="/hero-pangalengan-trip.jpg" alt="Custom Trip Background" fill className="object-cover" />
            <div className="absolute inset-0 bg-stone-900/85 backdrop-blur-[2px]"></div> 
            
            <div className="relative z-10 mx-auto max-w-3xl space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-2xl mb-2">✨</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tidak Menemukan Paket yang Pas?</h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl">
                Gunakan <strong>Kalkulator Custom Trip</strong> kami untuk mengatur jumlah peserta, memilih fasilitas, dan menghitung estimasi biaya perjalanan impian Anda secara langsung.
              </p>
              <div className="pt-4">
                <Link href="/custom-trip" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 hover:-translate-y-1">
                  Buka Kalkulator Custom Trip
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          {/* 7. JASA LAYANAN ANTAR (Value Add) */}
          <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col overflow-hidden rounded-[2rem] bg-emerald-50 border border-emerald-100 sm:flex-row shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-56 w-full sm:h-auto sm:w-2/5 md:w-1/3 shrink-0">
                  <Image src="/jasa-antar.jpg" alt="Layanan Antar" fill className="object-cover" />
                  <div className="absolute inset-0 bg-emerald-900/10"></div> 
                </div>
                <div className="flex flex-1 flex-col items-center justify-center p-8 sm:items-start sm:p-12 text-center sm:text-left space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl">Butuh Sesuatu Spesial Atau Mendadak?</h2>
                    <p className="text-sm text-emerald-800/80 font-medium leading-relaxed">
                      Layanan jasa antar kami siap sedia 24 jam. Mulai dari logistik tambahan, set BBQ malam hari, hingga fotografer dadakan. Biar kami yang urus!
                    </p>
                  </div>
                  <a href={generateWALink("Halo Tim Layanan Antar, saya butuh bantuan untuk...")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 hover:-translate-y-1">
                    <span>🛵</span> Chat Jasa Antar
                  </a>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          {/* SESI: MITRA KLIEN (Telah Dipercaya Oleh) */}
          <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 border-b border-stone-200">
            <div className="mx-auto max-w-6xl overflow-hidden">
              
              <div className="space-y-1.5 text-center mb-12">
                <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Telah Dipercaya Oleh</h2>
                <p className="text-sm text-stone-500 font-medium">Korporasi besar, institusi pendidikan, dan mitra desa.</p>
              </div>
              
              <div className="relative flex flex-col gap-6 sm:gap-8 w-full" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                {/* Baris 1: Kanan ke Kiri */}
                <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 25, repeat: Infinity }} className="flex w-max items-center gap-10 sm:gap-14 px-4">
                  {[1, 2, 3].map((set) => (
                    <div key={set} className="flex items-center gap-10 sm:gap-14">
                      {['bca', 'mandiri', 'bni', 'bri'].map((logo) => (
                        <div key={logo} className="relative h-10 w-24 sm:h-12 sm:w-28 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                          <Image src={`/logos/${logo}.png`} alt={logo} fill className="object-contain" />
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
                
                {/* Baris 2: Kiri ke Kanan */}
                <motion.div animate={{ x: ["-50%", "0%"] }} transition={{ ease: "linear", duration: 30, repeat: Infinity }} className="flex w-max items-center gap-10 sm:gap-14 px-4">
                  {[1, 2, 3].map((set) => (
                    <div key={set} className="flex items-center gap-10 sm:gap-14">
                       {['unpad', 'unpar', 'koperasi', 'pemkab'].map((logo) => (
                        <div key={logo} className="relative h-12 w-28 sm:h-14 sm:w-32 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                          <Image src={`/logos/${logo}.png`} alt={logo} fill className="object-contain" />
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* 8. MENGAPA MEMILIH KAMI (Objection Killers - Dipindah ke Bawah) */}
        <section id="kenapa-kami" className="bg-stone-100 px-4 py-20 sm:px-6 lg:px-8 border-y border-stone-200">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Mengapa Memilih Kami?</h2>
              <p className="max-w-2xl text-sm text-stone-500 font-medium mx-auto">Kami mengutamakan ketenangan pikiran Anda dari mulai reservasi hingga perjalanan pulang.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {[
                { icon: "📞", title: "Layanan 24 Jam", desc: "Responsif kapanpun dibutuhkan." },
                { icon: "🛡️", title: "Asuransi Penuh", desc: "Mitra resmi asuransi BUMIDA." },
                { icon: "✅", title: "Tim Tersertifikasi", desc: "Pemandu ahli dan profesional." },
                { icon: "📄", title: "Legalitas Resmi", desc: "Badan usaha wisata berizin." }
              ].map((k, i) => (
                <div key={i} className="rounded-2xl border border-stone-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-xl">{k.icon}</div>
                  <h3 className="text-sm font-bold text-stone-800">{k.title}</h3>
                  <p className="mt-1.5 text-xs text-stone-500">{k.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FadeIn>
          {/* 9. TRUST METRICS & TESTIMONI (Social Proof Terakhir) */}
          <section className="bg-white border-b border-stone-100">
            {/* Trust Metrics */}
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 divide-x divide-stone-100">
                <div className="text-center px-4">
                  <p className="text-4xl font-black text-emerald-700"><LiveRollingCounter />+</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-stone-400">Klien Puas</p>
                </div>
                <div className="text-center px-4">
                  <p className="text-4xl font-black text-emerald-700"><AnimatedCounter to={120} />+</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-stone-400">Corporate Trip</p>
                </div>
                <div className="text-center px-4">
                  <p className="text-4xl font-black text-emerald-700"><AnimatedCounter to={4} />.<AnimatedCounter to={9} /></p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-stone-400">Rating Bintang</p>
                </div>
                <div className="text-center px-4">
                  <p className="text-4xl font-black text-emerald-700"><AnimatedCounter to={5} /> Th</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-stone-400">Pengalaman</p>
                </div>
              </div>
            </div>

            {/* Testimoni */}
            <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between gap-4 mb-12">
                <div className="space-y-1.5 text-center sm:text-left w-full sm:w-auto">
                  <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">Kata Mereka</h2>
                  <p className="max-w-2xl text-sm text-stone-500 font-medium">Pengalaman jujur dari mereka yang telah berlibur bersama kami.</p>
                </div>
                <div className="hidden sm:flex shrink-0 gap-2">
                  <button onClick={() => {document.getElementById('rel-testi')?.scrollBy({left: -320, behavior: 'smooth'})}} className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 shadow-sm hover:bg-stone-50 hover:text-emerald-700 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></button>
                  <button onClick={() => {document.getElementById('rel-testi')?.scrollBy({left: 320, behavior: 'smooth'})}} className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 shadow-sm hover:bg-stone-50 hover:text-emerald-700 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>
                </div>
              </div>

              <div id="rel-testi" className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {[
                  { id: "1", role: "Liburan Keluarga", quote: "Awalnya ragu bawa orang tua dan anak kecil, tapi ternyata guide-nya sangat telaten bantuin kita. Glamping-nya bersih banget dan udaranya seger. Bakal balik lagi sih ini!", name: "Ibu Dinda" },
                  { id: "2", role: "Corporate Outing", quote: "Acara kantor paling pecah sejauh ini! Rundown rapi, gak ada waktu ngaret. Makan siang dan kambing gulingnya juara, semua staf di kantor puas banget.", name: "Siska (Tim HRD)" },
                  { id: "3", role: "Trip Teman Kampus", quote: "Offroad Land Rover-nya bener-bener mantap menantang adrenalin. Mang Ade driver-nya asik diajak ngobrol. Pemandangan kebun tehnya ga ada obat.", name: "Reza Pratama" },
                  { id: "4", role: "Custom Trip", quote: "Gampang banget request ini itu. Kita minta tambahan BBQ dadakan malem-malam langsung disiapin dong sama tim layanannya. Pelayanan bintang 5!", name: "Dina Mariana" }
                ].map((t) => (
                  <article key={t.id} className="w-[85vw] sm:w-[350px] shrink-0 snap-start rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:border-emerald-200 transition-colors">
                    <div className="flex gap-1 mb-4 text-emerald-500 text-sm">★★★★★</div>
                    <p className="text-sm leading-relaxed text-stone-600 font-medium italic">"{t.quote}"</p>
                    <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
                      <div>
                        <p className="text-sm font-bold text-stone-800">{t.name}</p>
                        <p className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 10. Final CTA & Footer Maps */}
        <section className="py-20 bg-stone-50 overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              
              <div className="w-full md:w-[40%] space-y-6 text-center md:text-left">
                <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full">
                  Konsultasi Gratis
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight">
                  Mulai Rencanakan Perjalanan <span className="text-emerald-600">Tanpa Beban.</span>
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  Tim kami siap merancang itinerary, mengurus logistik, dan memastikan keamanan Anda. Hubungi kami untuk penawaran terbaik.
                </p>
                <div className="pt-4">
                  <a href={generateWALink("Halo Tim Go Pangalengan, saya ingin konsultasi untuk rencana liburan/outing saya.")} target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-black text-sm shadow-xl hover:bg-emerald-700 transition-all hover:-translate-y-1">
                    Konsultasi via WhatsApp
                  </a>
                </div>
              </div>

              <div className="w-full md:w-[60%] h-[300px] sm:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.8078186487863!2d107.5546903!3d-7.1879434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e689143386830cf%3A0xb2daa8146a071f96!2sGo%20Pangalengan%20-%20Paket%20Wisata%20%26%20Rafting%20Situ%20Cileunca!5e0!3m2!1sid!2sid!4v1777244658863!5m2!1sid!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale-[0.1] hover:grayscale-0 transition-all duration-500"></iframe>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}