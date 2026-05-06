"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { generateWALink } from "@/config/contact";
import { masterPenginapan } from "@/data/penginapan";

// ─── DATA MINI KATALOG & AKTIVITAS ───
const miniKatalog = [
  { id: "paket-wisata-keluarga-hemat", nama: "Hemat & Praktis", durasi: "1 Hari", hargaNum: 199000, hargaTxt: "Rp 199.000", image: "/keluarga-hemat.JPG" },
  { id: "paket-wisata-keluarga-seru", nama: "Seru Maksimal (ATV)", durasi: "1 Hari", hargaNum: 299000, hargaTxt: "Rp 299.000", image: "/keluarga-seru.jpg" },
  { id: "paket-gathering-perusahaan-1-hari", nama: "Synergy Build", durasi: "1 Hari", hargaNum: 350000, hargaTxt: "Rp 350.000", image: "/corporate-1d-b.JPG" },
  { id: "paket-outing-corporate-offroad-1-hari", nama: "Xtreme Offroad", durasi: "1 Hari", hargaNum: 549000, hargaTxt: "Rp 549.000", image: "/corporate-1n-c.jpg" },
  { id: "paket-outing-kantor-2-hari-1-malam-relax", nama: "Relax & Retreat 2D", durasi: "2 Hari", hargaNum: 200000, hargaTxt: "Rp 200.000", image: "/teambuilding1.jpeg" },
  { id: "paket-camping-keluarga-pangalengan", nama: "Classic Glamping", durasi: "2 Hari", hargaNum: 395000, hargaTxt: "Rp 395.000", image: "/flyingfox.jpg" },
  { id: "paket-outing-perusahaan-2-hari-1-malam-bestseller", nama: "Feast & Fun 2D", durasi: "2 Hari", hargaNum: 650000, hargaTxt: "Rp 650.000", image: "/corporate-1n-b.JPG" },
  { id: "paket-gathering-perusahaan-vip-premium", nama: "VIP Executive 2D", durasi: "2 Hari", hargaNum: 1099000, hargaTxt: "Rp 1.099.000", image: "/corporate-vip.JPG" }
];

const aktivitasSatuan = [
  { id: "paket-rafting-pangalengan", nama: "Rafting Arus Deras", harga: "Rp 165.000", image: "/rafting.jpg", vibe: "Basah-basahan" },
  { id: "sewa-atv-pangalengan", nama: "ATV Adventure", harga: "Rp 175.000", image: "/keluarga-seru.jpg", vibe: "Ekstrem & Darat" },
  { id: "offroad-land-rover-pangalengan", nama: "Offroad Land Rover", harga: "Rp 220.000", image: "/offroad.jpg", vibe: "Ekstrem & Darat" },
  { id: "paket-paintball-pangalengan", nama: "Paintball Battle", harga: "Rp 85.000", image: "/paintball.jpg", vibe: "Kompetisi Tim" },
  { id: "tour-perahu-situ-cileunca", nama: "Tour Perahu Danau", harga: "Rp 20.000", image: "/perahu.jpg", vibe: "Santai & Healing" },
];

export default function CustomTripPage() {
  const [peserta, setPeserta] = useState<number | "">("");
  const [durasi, setDurasi] = useState<"1 Hari" | "2 Hari" | "">("");
  const [budget, setBudget] = useState<string>("");
  const [vibe, setVibe] = useState<string[]>([]);
  const [destinasi, setDestinasi] = useState<string[]>([]); // STATE BARU UNTUK DESTINASI

  const opsiBudget = [
    "Super Hemat (< Rp 150.000)",
    "Standar (Rp 150k - 350k)",
    "Premium (Rp 350k - 700k)",
    "Sultan (> Rp 700.000)"
  ];
  
  const opsiVibe = ["Santai & Healing", "Basah-basahan", "Ekstrem & Darat", "Kompetisi Tim"];
  
  // OPSI DESTINASI IKONIK PANGALENGAN
  const opsiDestinasi = [
    "Nimo Highland", 
    "Wayang Windu", 
    "Situ Cileunca", 
    "Hutan Pinus Rahong", 
    "Kawah Wayang",
    "Bebas, aturin aja! ✨" // Jawaban pamungkas untuk UX
  ];

  const toggleVibe = (item: string) => {
    if (vibe.includes(item)) setVibe(vibe.filter(v => v !== item));
    else setVibe([...vibe, item]);
  };

  const toggleDestinasi = (item: string) => {
    if (destinasi.includes(item)) setDestinasi(destinasi.filter(d => d !== item));
    else setDestinasi([...destinasi, item]);
  };

  // --- LOGIKA CERDAS FILTERING ---
  const maxBudgetNum = useMemo(() => {
    if (budget.includes("< Rp 150.000")) return 150000;
    if (budget.includes("350k")) return 350000;
    if (budget.includes("700k")) return 700000;
    if (budget.includes("Sultan")) return 5000000;
    return 0;
  }, [budget]);

  const rekoPaket = useMemo(() => {
    if (!durasi || !budget) return [];
    return miniKatalog.filter(p => {
      if (p.durasi !== durasi) return false;
      if (maxBudgetNum === 150000) return p.hargaNum <= 200000;
      if (maxBudgetNum === 350000) return p.hargaNum > 150000 && p.hargaNum <= 360000;
      if (maxBudgetNum === 700000) return p.hargaNum > 350000 && p.hargaNum <= 700000;
      return p.hargaNum > 700000;
    }).slice(0, 2);
  }, [durasi, maxBudgetNum]);

  const rekoPenginapan = useMemo(() => {
    if (durasi !== "2 Hari") return null;
    let labelTarget = "Budget";
    if (maxBudgetNum === 150000) labelTarget = "Tenda Premium";
    else if (maxBudgetNum === 350000) labelTarget = "Budget";
    else if (maxBudgetNum === 700000) labelTarget = "Big Size";
    else labelTarget = "VIP";

    return masterPenginapan.find(p => p.label === labelTarget || p.kategori.includes(labelTarget)) || masterPenginapan[0];
  }, [durasi, maxBudgetNum]);

  const rekoAktivitas = useMemo(() => {
    if (vibe.length === 0) return [];
    return aktivitasSatuan.filter(a => vibe.includes(a.vibe)).slice(0, 2);
  }, [vibe]);

  // --- WA GENERATOR (Ditambah Pilihan Destinasi) ---
  const pesanWA = `Halo Tim Go Pangalengan! 👋\n\nSaya mohon dibuatkan *Proposal/Itinerary Custom Trip* dengan rincian:\n👥 *Peserta:* ${peserta ? peserta + ' Orang' : '-'}\n⏱️ *Durasi:* ${durasi || '-'}\n💰 *Anggaran per Pax:* ${budget || '-'}\n🎯 *Gaya Liburan:* ${vibe.length > 0 ? vibe.join(', ') : '-'}\n📍 *Destinasi Pilihan:* ${destinasi.length > 0 ? destinasi.join(', ') : 'Belum menentukan / Fleksibel'}\n\nApakah bisa dikirimkan rincian fasilitas dan harganya segera? Terima kasih!`;
  const linkWA = generateWALink(pesanWA);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 pb-28 font-sans">
      
      {/* 1. HERO BANNER */}
      <div className="relative w-full h-[45vh] bg-stone-900 rounded-b-[2.5rem] sm:rounded-b-[3.5rem] overflow-hidden shadow-lg">
        <Image src="/nimo-hero.jpg" alt="Pemandangan Pangalengan" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 text-center">
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight drop-shadow-md">
            Custom Trip
          </h1>
          <p className="text-stone-200 text-sm sm:text-base font-medium max-w-lg mx-auto leading-relaxed">
            Dari pasangan berdua hingga rombongan perusahaan. Sesuaikan durasi, budget, dan aktivitas, kami akan siapkan rinciannya.
          </p>
        </div>
      </div>

      {/* 2. FORM AREA */}
      <div className="max-w-xl mx-auto px-4 -mt-8 relative z-20 space-y-5">
        
        {/* Step 1: Peserta & Durasi */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
          <h2 className="text-base font-bold text-stone-800 mb-4 flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-600 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span> 
            Peserta & Waktu
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input 
                type="number" 
                value={peserta} 
                onChange={(e) => setPeserta(Number(e.target.value))} 
                placeholder="Misal: 2 atau 20 orang" 
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:font-medium placeholder:text-stone-400" 
              />
            </div>
            <div className="flex bg-stone-50 border border-stone-200 rounded-xl overflow-hidden p-1">
              {["1 Hari", "2 Hari"].map((item) => (
                <button 
                  key={item} 
                  onClick={() => setDurasi(item as any)} 
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${durasi === item ? 'bg-white text-emerald-600 shadow border border-stone-100' : 'text-stone-500 hover:bg-stone-100'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step 2: Budget */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
          <h2 className="text-base font-bold text-stone-800 mb-4 flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-600 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span> 
            Anggaran Per Orang
          </h2>
          <div className="grid grid-cols-2 gap-2.5">
            {opsiBudget.map((item) => (
              <button 
                key={item} 
                onClick={() => setBudget(item)} 
                className={`text-left py-3 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${budget === item ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-stone-50 border-stone-200 text-stone-500 hover:border-emerald-300'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Vibe */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
          <h2 className="text-base font-bold text-stone-800 mb-4 flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-600 w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span> 
            Karakteristik Aktivitas
          </h2>
          <div className="flex flex-wrap gap-2">
            {opsiVibe.map((item) => (
              <button 
                key={item} 
                onClick={() => toggleVibe(item)} 
                className={`py-2 px-3.5 rounded-full text-xs font-bold transition-all border ${vibe.includes(item) ? 'bg-stone-800 border-stone-800 text-white' : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300'}`}
              >
                {vibe.includes(item) ? '✓ ' : '+ '} {item}
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Destinasi (BARU DITAMBAHKAN) */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-bold text-stone-800 flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-600 w-6 h-6 rounded-full flex items-center justify-center text-xs">4</span> 
              Destinasi Pilihan
            </h2>
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Opsional</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {opsiDestinasi.map((item) => (
              <button 
                key={item} 
                onClick={() => toggleDestinasi(item)} 
                className={`py-2 px-3.5 rounded-full text-xs font-bold transition-all border ${destinasi.includes(item) ? (item.includes("Bebas") ? 'bg-emerald-600 border-emerald-600 text-white shadow-md' : 'bg-stone-800 border-stone-800 text-white') : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300'}`}
              >
                {destinasi.includes(item) ? '✓ ' : '+ '} {item}
              </button>
            ))}
          </div>
        </div>

        {/* --- SMART DASHBOARD (Hasil Prediksi Anti-Fatigue) --- */}
        {(budget && vibe.length > 0 && durasi) && (
          <div className="bg-stone-900 p-6 rounded-3xl shadow-xl mt-6 border border-stone-800 animate-in zoom-in-95 duration-500">
            <h3 className="text-emerald-400 text-sm font-black uppercase tracking-widest mb-4 border-b border-stone-800 pb-3">
              Hasil Analisis Sistem
            </h3>

            <div className="space-y-5">
              
              {/* Saran Paket */}
              {rekoPaket.length > 0 && (
                <div>
                  <p className="text-[10px] text-stone-400 font-medium mb-2">PAKET COMBO MENDEKATI</p>
                  <div className="flex overflow-x-auto gap-3 pb-2 [scrollbar-width:none]">
                    {rekoPaket.map(rek => (
                      <div key={rek.id} className="w-[85%] sm:w-64 shrink-0 bg-stone-800 p-2.5 rounded-2xl flex items-center gap-3 border border-stone-700">
                        <Image src={rek.image} alt={rek.nama} width={50} height={50} className="rounded-xl object-cover" />
                        <div>
                          <h4 className="text-xs font-bold text-white leading-tight">{rek.nama}</h4>
                          <span className="text-[10px] text-emerald-400 font-bold">{rek.hargaTxt}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saran Penginapan Khusus */}
              {rekoPenginapan && (
                <div>
                  <p className="text-[10px] text-stone-400 font-medium mb-2">REKOMENDASI TEMPAT SINGGAH</p>
                  <div className="bg-stone-800 p-3 rounded-2xl flex items-center gap-3 border border-stone-700">
                    <Image src={rekoPenginapan.image} alt={rekoPenginapan.nama} width={60} height={60} className="rounded-xl object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{rekoPenginapan.nama}</h4>
                      <p className="text-[10px] text-stone-400 line-clamp-1">{rekoPenginapan.fasilitas.slice(0,2).join(" • ")}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Add-ons Satuan */}
              {rekoAktivitas.length > 0 && (
                <div>
                  <p className="text-[10px] text-stone-400 font-medium mb-2">COCOK DITAMBAHKAN (SATUAN)</p>
                  <div className="flex flex-wrap gap-2">
                    {rekoAktivitas.map(akt => (
                      <span key={akt.id} className="bg-stone-800 text-stone-300 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-stone-700 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        {akt.nama} ({akt.harga})
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* TRUST BADGES & CTA (Konversi Akhir) */}
        <div className="pt-8 pb-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
            <span className="text-[10px] font-bold text-stone-500 bg-stone-200/50 px-2.5 py-1 rounded-md flex items-center gap-1">🛡️ Tanpa Hidden Fee</span>
            <span className="text-[10px] font-bold text-stone-500 bg-stone-200/50 px-2.5 py-1 rounded-md flex items-center gap-1">🙋‍♂️ Guide Lokal Expert</span>
            <span className="text-[10px] font-bold text-stone-500 bg-stone-200/50 px-2.5 py-1 rounded-md flex items-center gap-1">✅ Flexible Reschedule</span>
          </div>

          <a href={linkWA} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 rounded-2xl transition-all shadow-[0_10px_20px_-10px_rgba(5,150,105,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
            Minta Proposal & Rincian Harga
          </a>
        </div>

      </div>
    </div>
  );
}