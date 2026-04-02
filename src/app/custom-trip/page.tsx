"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { generateWALink } from "@/config/contact";

// --- DATA HARGA & OPSIONAL ---
const HARGA = {
  petualangan: {
    rafting: 150000,
    atv: 175000,
    offroad: 200000,
    paintball: 85000,
    flyingFox: 35000,
  },
  penginapan: {
    "Tanpa Penginapan": 0,
    "Glamping": 350000,
    "Cottage": 450000,
    "Villa": 500000, 
  },
  makanan: 100000, 
  dokumentasi: 500000, 
};

const PAKET_COMBO = [
  {
    title: "Combo Pelajar Pelari",
    desc: "Rafting + Flying Fox + Makan Siang",
    price: "185.000",
    icon: "🎓",
    tag: "Paling Hemat"
  },
  {
    title: "Romantic Sunrise",
    desc: "Glamping + Sunrise Cukul + Dinner BBQ",
    price: "850.000",
    icon: "❤️",
    tag: "Pasangan"
  },
  {
    title: "Full Adrenaline",
    desc: "Rafting + ATV + Paintball + Dokumentasi",
    price: "380.000",
    icon: "🔥",
    tag: "Terpopuler"
  },
  {
    title: "Family Gathering",
    desc: "Villa + Offroad + Makan (Full Board)",
    price: "750.000",
    icon: "👨‍👩‍👧‍👦",
    tag: "Keluarga"
  }
];

export default function CustomTripPage() {
  const [peserta, setPeserta] = useState<number>(2);
  const [durasi, setDurasi] = useState<number>(1);
  const [destinasi, setDestinasi] = useState<string[]>([]);
  const [penginapan, setPenginapan] = useState<string>("Tanpa Penginapan");
  const [petualangan, setPetualangan] = useState<string[]>([]);
  const [pilihMakanan, setPilihMakanan] = useState<boolean>(false);
  const [pilihDokumentasi, setPilihDokumentasi] = useState<boolean>(false);
  const [estimasiTotal, setEstimasiTotal] = useState<number>(0);

  const comboScrollRef = useRef<HTMLDivElement>(null);

  // Kalkulasi Otomatis
  useEffect(() => {
    let total = 0;
    petualangan.forEach(p => {
      const key = p.toLowerCase().replace(" ", "") as keyof typeof HARGA.petualangan;
      if (HARGA.petualangan[key]) total += HARGA.petualangan[key] * peserta;
    });
    const malam = durasi > 1 ? durasi - 1 : 0;
    total += (HARGA.penginapan[penginapan as keyof typeof HARGA.penginapan] || 0) * peserta * malam;
    if (pilihMakanan) total += HARGA.makanan * peserta * durasi;
    if (pilihDokumentasi) total += HARGA.dokumentasi;
    setEstimasiTotal(total);
  }, [peserta, durasi, penginapan, petualangan, pilihMakanan, pilihDokumentasi]);

  const toggleList = (item: string, state: string[], setState: any) => {
    state.includes(item) ? setState(state.filter(i => i !== item)) : setState([...state, item]);
  };

  const buatPesanWA = () => {
    return `*HALO PANGALENGAN TRIP!* 👋\nSaya ingin request Custom Trip:\n\n👥 *Peserta:* ${peserta} Orang\n⏱️ *Durasi:* ${durasi} Hari\n📍 *Destinasi Incaran:* ${destinasi.join(", ") || "-"}\n🏡 *Akomodasi:* ${penginapan}\n🎯 *Aktivitas:* ${petualangan.join(", ") || "-"}\n🍱 *Makan:* ${pilihMakanan ? "Ya" : "Tidak"}\n📸 *Dokumentasi:* ${pilihDokumentasi ? "Ya" : "Tidak"}\n\n💰 *Estimasi:* Rp ${estimasiTotal.toLocaleString("id-ID")}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-40">
      <section className="relative h-[40vh] min-h-[300px] w-full bg-zinc-900 text-white">
        <Image src="/hero-pangalengan-trip.jpg" alt="Custom Trip" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-12 text-center md:text-left mx-auto max-w-4xl">
          <h1 className="text-4xl font-black md:text-5xl">Rakit Liburanmu Sendiri.</h1>
          <p className="mt-3 text-zinc-300">Pilih destinasi, atur budget, dan berangkat kapanpun Anda siap.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 space-y-10">
        
        {/* STEP 1: DESTINASI */}
        <div className="bg-white p-6 rounded-3xl border border-zinc-300 shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-zinc-900">📍 1. Destinasi yang Ingin Dikunjungi</h2>
          <div className="flex flex-wrap gap-2">
            {["Situ Cileunca", "Hutan Pinus Rahong", "Sunrise Point Cukul", "Nimo Highland", "Wayang Windu", "Kebun Teh Malabar"].map(place => (
              <button 
                key={place} 
                onClick={() => toggleList(place, destinasi, setDestinasi)} 
                // PERUBAHAN WARNA: Dari text-zinc-600 menjadi text-zinc-900 dan menambahkan border agar jelas
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${destinasi.includes(place) ? "bg-emerald-600 border-emerald-600 text-white shadow-lg" : "bg-white border-zinc-300 text-zinc-900 hover:bg-zinc-100"}`}
              >
                {place}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 2: INFO DASAR */}
        <div className="bg-white p-6 rounded-3xl border border-zinc-300 shadow-sm grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900">👥 2. Berapa Orang?</h2>
            <div className="flex items-center gap-6 bg-zinc-50 w-fit p-2 rounded-2xl border border-zinc-300">
              <button onClick={() => setPeserta(peserta > 1 ? peserta - 1 : 1)} className="h-10 w-10 bg-white shadow rounded-xl font-bold text-zinc-900 hover:bg-zinc-100">-</button>
              <span className="text-xl font-black text-zinc-900">{peserta}</span>
              <button onClick={() => setPeserta(peserta + 1)} className="h-10 w-10 bg-white shadow rounded-xl font-bold text-zinc-900 hover:bg-zinc-100">+</button>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900">⏱️ 3. Berapa Hari?</h2>
            <select 
              value={durasi} 
              onChange={(e) => setDurasi(Number(e.target.value))} 
              // PERUBAHAN WARNA: Menambahkan text-zinc-900 agar pilihan di dalam box lebih hitam
              className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-300 font-bold text-zinc-900 outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value={1}>Hanya 1 Hari (Tanpa Menginap)</option>
              <option value={2}>2 Hari 1 Malam (2D1N)</option>
              <option value={3}>3 Hari 2 Malam (3D2N)</option>
            </select>
          </div>
        </div>

        {/* STEP 4: AKOMODASI & PETUALANGAN */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900">🏡 4. Penginapan</h2>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(HARGA.penginapan).map(t => (
                <button 
                  key={t} 
                  onClick={() => setPenginapan(t)} 
                  // PERUBAHAN WARNA: Dari text-zinc-500 menjadi text-zinc-900
                  className={`p-4 rounded-2xl border text-sm font-bold transition-all ${penginapan === t ? "border-emerald-500 bg-emerald-50 text-emerald-800" : "bg-white border-zinc-300 text-zinc-900 hover:bg-zinc-50"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900">🎯 5. Aktivitas</h2>
            <div className="grid grid-cols-2 gap-2">
              {["Rafting", "ATV", "Offroad", "Paintball", "Flying Fox"].map(p => (
                <button 
                  key={p} 
                  onClick={() => toggleList(p, petualangan, setPetualangan)} 
                  // PERUBAHAN WARNA: Dari text-zinc-500 menjadi text-zinc-900
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${petualangan.includes(p) ? "border-emerald-500 bg-emerald-50 text-emerald-800" : "bg-white border-zinc-300 text-zinc-900 hover:bg-zinc-50"}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* REKOMENDASI COMBO SLIDER */}
        <div className="pt-10 border-t border-zinc-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-zinc-900">🎁 Rekomendasi Paket Combo Hemat</h2>
              <p className="text-sm text-zinc-700">Pilihan paket yang sudah kami racik dengan harga spesial.</p>
            </div>
          </div>
          
          <div 
            ref={comboScrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PAKET_COMBO.map((combo, idx) => (
              <div key={idx} className="w-[280px] shrink-0 snap-center p-5 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-xl">
                <span className="bg-white/20 px-2 py-1 rounded-md text-[10px] font-bold uppercase">{combo.tag}</span>
                <p className="text-3xl mt-4">{combo.icon}</p>
                <h3 className="text-lg font-bold mt-2">{combo.title}</h3>
                <p className="text-xs text-emerald-100 mt-1 h-8 line-clamp-2">{combo.desc}</p>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] opacity-70">Mulai dari</p>
                    <p className="text-xl font-black">Rp {combo.price}</p>
                  </div>
                  <a href={generateWALink(`Halo, saya tertarik dengan Paket Combo ${combo.title}.`)} className="bg-white text-emerald-800 px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-50 transition">Pilih</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY BOTTOM BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur-xl border-t border-zinc-300 px-6 py-4 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.15)]">
        <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Estimasi Total</p>
            <p className="text-3xl font-black text-emerald-600">Rp {estimasiTotal.toLocaleString("id-ID")}</p>
          </div>
          <a href={generateWALink(buatPesanWA())} target="_blank" className="w-full md:w-auto bg-zinc-900 text-white px-10 py-4 rounded-2xl font-bold text-center hover:bg-emerald-600 transition-all shadow-lg shadow-zinc-900/20">Ajukan Custom Trip ke WA</a>
        </div>
      </div>
    </div>
  );
}