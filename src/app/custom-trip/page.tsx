"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { generateWALink } from "@/config/contact";

// Data Mini Katalog untuk Sistem Rekomendasi Pintar
const miniKatalog = [
  { id: "keluarga-hemat", nama: "Keluarga Hemat", durasi: "1 Hari", hargaNum: 199000, hargaTxt: "Rp 199.000", image: "/combo-keluarga.jpg" },
  { id: "keluarga-seru", nama: "Keluarga Seru", durasi: "1 Hari", hargaNum: 299000, hargaTxt: "Rp 299.000", image: "/combo-keluarga.jpg" },
  { id: "corp-a1d", nama: "Corporate 1D", durasi: "1 Hari", hargaNum: 360000, hargaTxt: "Rp 360.000", image: "/combo-corp-1d.jpg" },
  { id: "corp-c1d", nama: "Corporate Premium 1D", durasi: "1 Hari", hargaNum: 549000, hargaTxt: "Rp 549.000", image: "/combo-corp-1d.jpg" },
  { id: "corp-d2d", nama: "Corp Inap Ekonomis", durasi: "Menginap", hargaNum: 200000, hargaTxt: "Rp 200.000", image: "/combo-corp-2d.jpg" },
  { id: "camp-fca", nama: "Family Camp Standar", durasi: "Menginap", hargaNum: 495000, hargaTxt: "Rp 495.000", image: "/combo-camp.jpg" },
  { id: "corp-b2d", nama: "Corp Inap Makrab", durasi: "Menginap", hargaNum: 650000, hargaTxt: "Rp 650.000", image: "/combo-corp-2d.jpg" },
  { id: "corp-vip", nama: "VIP Sultan Inap", durasi: "Menginap", hargaNum: 1099000, hargaTxt: "Rp 1.099.000", image: "/combo-vip.jpg" }
];

export default function CustomTripPage() {
  const [peserta, setPeserta] = useState<number | "">("");
  const [durasi, setDurasi] = useState<"1 Hari" | "Menginap" | "">("");
  const [budget, setBudget] = useState<string>("");
  const [vibe, setVibe] = useState<string[]>([]);

  const opsiBudget = [
    "< Rp 200.000 / pax",
    "Rp 200.000 - Rp 400.000 / pax",
    "Rp 400.000 - Rp 700.000 / pax",
    "Sultan (> Rp 700.000 / pax)"
  ];
  
  const opsiVibe = ["Santai & Healing", "Basah-basahan", "Ekstrem & Darat", "Kompetisi Tim"];

  const toggleVibe = (item: string) => {
    if (vibe.includes(item)) setVibe(vibe.filter(v => v !== item));
    else setVibe([...vibe, item]);
  };

  // --- LOGIKA ESTIMASI OTOMATIS ---
  // Menentukan batas angka budget untuk filter rekomendasi
  const maxBudgetNum = useMemo(() => {
    if (budget === "< Rp 200.000 / pax") return 200000;
    if (budget === "Rp 200.000 - Rp 400.000 / pax") return 400000;
    if (budget === "Rp 400.000 - Rp 700.000 / pax") return 700000;
    if (budget === "Sultan (> Rp 700.000 / pax)") return 5000000; // Uncapped
    return 0;
  }, [budget]);

  // Filter rekomendasi paket berdasarkan durasi & budget
  const rekomendasi = useMemo(() => {
    if (!durasi || !budget) return [];
    return miniKatalog.filter(p => 
      p.durasi === durasi && 
      p.hargaNum <= maxBudgetNum &&
      p.hargaNum >= (maxBudgetNum === 200000 ? 0 : maxBudgetNum === 400000 ? 200000 : maxBudgetNum === 700000 ? 400000 : 700000)
    ).slice(0, 2); // Ambil maksimal 2 rekomendasi
  }, [durasi, budget, maxBudgetNum]);

  // Teks Penginapan Dinamis
  const estimasiPenginapan = useMemo(() => {
    if (durasi !== "Menginap") return null;
    if (maxBudgetNum === 200000) return "Barak Komunal atau Tenda Basic (Cocok untuk massal)";
    if (maxBudgetNum === 400000) return "Homestay / Glamping Standar (Nyaman & Hangat)";
    if (maxBudgetNum === 700000) return "Cottage Premium / Villa dengan Kolam Renang";
    return "Villa Super Premium / Resort VIP dengan fasilitas Bintang 5";
  }, [durasi, maxBudgetNum]);

  // Teks Keamanan & Fasilitas Dinamis
  const estimasiKeamanan = useMemo(() => {
    let fasilitas = ["Asuransi Kegiatan Resmi", "Tim P3K & Rescue Siaga", "Transportasi Lokal Antar Jemput"];
    if (vibe.includes("Basah-basahan")) fasilitas.push("Pelampung Standar Internasional & Helm Air", "Instruktur River Guide Tersertifikasi");
    if (vibe.includes("Ekstrem & Darat")) fasilitas.push("Helm Pelindung Darat & Safety Belt (Offroad/ATV)", "Driver & Guide Medan Ekstrem");
    if (vibe.includes("Kompetisi Tim")) fasilitas.push("Goggle Mask Anti-Fog & Rompi Pelindung (Paintball)", "Master Game Profesional");
    if (vibe.includes("Santai & Healing")) fasilitas.push("Akses Spot Estetik Privat", "Tour Guide Lokal Ramah");
    return fasilitas;
  }, [vibe]);

  const pesanWA = `Halo Tim Go Pangalengan! 👋\nSaya ingin dibuatkan *Custom Trip* dengan detail:\n\n👥 *Peserta:* ${peserta ? peserta + ' Orang' : '-'}\n⏱️ *Durasi:* ${durasi || '-'}\n💰 *Budget:* ${budget || '-'}\n🎯 *Vibe:* ${vibe.length > 0 ? vibe.join(', ') : '-'}\n\nMohon buatkan penawaran spesialnya ya!`;
  const linkWA = generateWALink(pesanWA);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 pb-28 font-sans">
      
      {/* HEADER */}
      <div className="bg-emerald-700 pt-16 pb-20 px-6 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-lg mx-auto text-center">
          <Link href="/" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white mb-6 backdrop-blur-sm hover:bg-white/30 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </Link>
          <h1 className="text-3xl font-black text-white mb-3 tracking-tight">Rakit Liburanmu!</h1>
          <p className="text-emerald-50 text-sm font-medium leading-relaxed">
            Pilih preferensi di bawah, dan sistem kami akan langsung memberikan estimasi fasilitas yang Anda dapatkan.
          </p>
        </div>
      </div>

      {/* FORM AREA */}
      <div className="max-w-lg mx-auto px-4 -mt-10 relative z-20 space-y-5">
        
        {/* Card 1: Peserta & Durasi */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
          <h2 className="text-base font-bold text-stone-800 mb-4 flex items-center gap-2">
            <span className="text-emerald-500 text-lg">👥</span> Siapa saja yang ikut?
          </h2>
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Jumlah Peserta (Orang)</label>
              <input type="number" value={peserta} onChange={(e) => setPeserta(Number(e.target.value))} placeholder="Misal: 15" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:font-medium placeholder:text-stone-400" />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Durasi Liburan</label>
              <div className="grid grid-cols-2 gap-3">
                {["1 Hari", "Menginap"].map((item) => (
                  <button key={item} onClick={() => setDurasi(item as any)} className={`py-3 px-4 rounded-xl text-sm font-bold transition-all border ${durasi === item ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-stone-200 text-stone-500 hover:border-emerald-300'}`}>{item}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Budget */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
          <h2 className="text-base font-bold text-stone-800 mb-4 flex items-center gap-2"><span className="text-emerald-500 text-lg">💰</span> Target Budget (Per Orang)</h2>
          <div className="space-y-3">
            {opsiBudget.map((item) => (
              <button key={item} onClick={() => setBudget(item)} className={`w-full text-left py-3.5 px-5 rounded-xl text-sm font-bold transition-all border ${budget === item ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-stone-200 text-stone-500 hover:border-emerald-300'}`}>{item}</button>
            ))}
          </div>
        </div>

        {/* Card 3: Vibe/Aktivitas */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
          <h2 className="text-base font-bold text-stone-800 mb-1 flex items-center gap-2"><span className="text-emerald-500 text-lg">🎯</span> Gaya Liburan</h2>
          <p className="text-xs text-stone-500 mb-4">Bisa pilih lebih dari satu</p>
          <div className="flex flex-wrap gap-2.5">
            {opsiVibe.map((item) => (
              <button key={item} onClick={() => toggleVibe(item)} className={`py-2 px-4 rounded-full text-xs font-bold transition-all border ${vibe.includes(item) ? 'bg-stone-800 border-stone-800 text-white' : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300'}`}>{vibe.includes(item) ? '✓ ' : '+ '} {item}</button>
            ))}
          </div>
        </div>

        {/* --- LIVE ESTIMATION RESULT (Muncul otomatis saat data diisi) --- */}
        {(budget && vibe.length > 0) && (
          <div className="bg-stone-900 p-6 rounded-3xl shadow-xl mt-8 border border-stone-800 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-base font-black text-white mb-5 flex items-center gap-2 border-b border-stone-700 pb-3">
              <span className="text-emerald-400">✨</span> Estimasi Fasilitas Anda
            </h2>

            <div className="space-y-5">
              {estimasiPenginapan && (
                <div>
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">Kualitas Penginapan</h4>
                  <p className="text-sm font-medium text-emerald-300 bg-emerald-900/30 px-3 py-2 rounded-lg border border-emerald-800/50">{estimasiPenginapan}</p>
                </div>
              )}

              <div>
                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Jaminan Keamanan & Pelayanan</h4>
                <ul className="space-y-2">
                  {estimasiKeamanan.map((fas, idx) => (
                    <li key={idx} className="text-xs text-stone-300 flex items-start gap-2">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span> {fas}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rekomendasi Pintar */}
              {rekomendasi.length > 0 && (
                <div className="pt-4 border-t border-stone-700">
                   <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Paket Mendekati Kriteria Anda:</h4>
                   <div className="grid grid-cols-1 gap-3">
                     {rekomendasi.map(rek => (
                       <Link href={`/paket/${rek.id}`} key={rek.id} className="flex items-center gap-3 bg-stone-800 p-2.5 rounded-xl hover:bg-stone-700 transition">
                          <div className="w-12 h-12 relative rounded-lg overflow-hidden shrink-0">
                            <Image src={rek.image} alt={rek.nama} fill className="object-cover" />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">{rek.nama}</h5>
                            <p className="text-[10px] font-medium text-emerald-400 mt-0.5">{rek.hargaTxt} / pax</p>
                          </div>
                       </Link>
                     ))}
                   </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tombol Eksekusi */}
        <div className="pt-6 pb-6">
          <a href={linkWA} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 rounded-2xl transition-all shadow-lg shadow-emerald-600/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
            Konsultasi Gratis Sekarang
          </a>
          <p className="text-center text-[10px] font-medium text-stone-400 mt-3">
            Klik tombol di atas untuk berdiskusi dengan Tour Konsultan kami via WhatsApp.
          </p>
        </div>

      </div>
    </div>
  );
}