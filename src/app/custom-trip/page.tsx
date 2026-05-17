"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { generateWALink } from "@/config/contact";

// ─── DATA PRICING GRANULAR (PER ORANG / PER PAX) ─────────────────
const DATA_AKTIVITAS = [
  { id: "rafting", nama: "Rafting Arus Deras", harga: 165000, icon: "🌊", fasilitas: "Perahu karet, pelampung, helm, instruktur (skipper), asuransi, ruang bilas" },
  { id: "atv", nama: "ATV Adventure Kebun Teh", harga: 175000, icon: "🏎️", fasilitas: "Unit motor ATV, helm, sepatu boots, pemandu lintasan, bahan bakar" },
  { id: "offroad", nama: "Offroad Land Rover", harga: 220000, icon: "🚙", fasilitas: "Sewa mobil Land Rover, bensin, driver berpengalaman, tiket jalur hutan" },
  { id: "paintball", nama: "Paintball War Game", harga: 85000, icon: "🔫", fasilitas: "Senjata gas, baju loreng tentara, goggle mask, 30 peluru cat" },
  { id: "flyingfox", nama: "Flying Fox Danau", harga: 35000, icon: "🦅", fasilitas: "Harness keamanan, tali baja, instruktur briefing, tiket wahana" },
  { id: "perahu", nama: "Tour Perahu Situ Cileunca", harga: 20000, icon: "⛵", fasilitas: "Sewa perahu kayu berkelompok, life jacket, pemandu perahu" }
];

const DATA_DESTINASI = [
  { id: "nimo", nama: "Nimo Highland (Jembatan Kaca)", harga: 35000, icon: "📍" },
  { id: "wayang", nama: "Wayang Windu Panenjoan", harga: 15000, icon: "📍" },
  { id: "cileunca", nama: "Kawasan Danau Situ Cileunca", harga: 15000, icon: "📍" },
  { id: "rahong", nama: "Hutan Pinus Rahong (Riverside)", harga: 15000, icon: "📍" }
];

const DATA_PENGINAPAN = [
  { id: "none", nama: "Tanpa Penginapan (Trip 1 Hari)", hargaUnit: 0, kapasitas: 1, icon: "☀️", fasilitas: [] },
  { id: "tenda", nama: "Classic Glamping / Tenda Dome", hargaUnit: 500000, kapasitas: 4, icon: "⛺", fasilitas: ["Kapasitas 4 Orang / Tenda", "Tenda kokoh di tepi danau", "Matras & Sleeping bag", "Fasilitas api unggun bersama"] },
  { id: "glamping_vip", nama: "Glamping Riverside VIP", hargaUnit: 1200000, kapasitas: 4, icon: "✨", fasilitas: ["Kapasitas 4 Orang / Cabin", "Tenda safari estetik pinggir sungai", "Kasur spring bed empuk & selimut", "Sarapan pagi diantarkan"] },
  { id: "villa_big", nama: "Private Villa (Kapasitas Besar)", hargaUnit: 2500000, kapasitas: 20, icon: "🏡", fasilitas: ["Kapasitas s/d 20 Orang / Unit", "Sewa 1 bangunan villa utuh", "Fasilitas dapur & alat masak lengkap", "Smart TV, Wi-Fi, & Water Heater"] }
];

export default function CustomTripPage() {
  // ─── STATE UTAMA ────────────────────────────────────────────────
  const [peserta, setPeserta] = useState<number>(10); // Default 10 orang untuk simulasi awal
  const [durasi, setDurasi] = useState<"1 Hari" | "2 Hari">("1 Hari");
  const [selectedAktivitas, setSelectedAktivitas] = useState<string[]>(["rafting"]);
  const [selectedDestinasi, setSelectedDestinasi] = useState<string[]>(["cileunca"]);
  const [penginapan, setPenginapan] = useState<string>("none");
  const [inputReferral, setInputReferral] = useState<string>("");
  const [appliedReferral, setAppliedReferral] = useState<string>("");
  const [showRincian, setShowRincian] = useState<boolean>(false);

  // Otomatis tangkap kode referal jika sebelumnya tamu datang dari link teman Anda
  useEffect(() => {
    const savedRef = localStorage.getItem("gp_referral");
    if (savedRef) {
      setAppliedReferral(savedRef);
      setInputReferral(savedRef);
    }
  }, []);

  // Otomatis reset penginapan jika durasi diubah ke 1 Hari
  useEffect(() => {
    if (durasi === "1 Hari") setPenginapan("none");
    else if (penginapan === "none") setPenginapan("tenda");
  }, [durasi]);

  // ─── LOGIKA MATEMATIKA CERDAS (GABUNGAN PER-PAX & PER-UNIT) ───
  const kalkulasiHarga = useMemo(() => {
    // 1. Biaya Variabel (Aktivitas & Destinasi dihitung PER ORANG)
    const costAktivitasPerOrang = DATA_AKTIVITAS
      .filter(a => selectedAktivitas.includes(a.id))
      .reduce((sum, item) => sum + item.harga, 0);

    const costDestinasiPerOrang = DATA_DESTINASI
      .filter(d => selectedDestinasi.includes(d.id))
      .reduce((sum, item) => sum + item.harga, 0);

    const totalBiayaVariabel = (costAktivitasPerOrang + costDestinasiPerOrang) * peserta;

    // 2. Biaya Tetap (Penginapan dihitung PER UNIT)
    const objekPenginapan = DATA_PENGINAPAN.find(p => p.id === penginapan);
    let totalBiayaPenginapan = 0;
    let unitDibutuhkan = 0;

    if (objekPenginapan && objekPenginapan.id !== "none") {
      // Rumus: Peserta dibagi Kapasitas Unit, dibulatkan ke atas (Contoh: 25 peserta / 20 = 1.25 -> butuh 2 Villa)
      unitDibutuhkan = Math.ceil(peserta / objekPenginapan.kapasitas);
      totalBiayaPenginapan = unitDibutuhkan * objekPenginapan.hargaUnit;
    }

    // 3. Total Keseluruhan Dasar
    const totalKeseluruhanDasar = totalBiayaVariabel + totalBiayaPenginapan;

    // 4. Pembagian Beban Per Orang secara Realistis
    const hargaPerOrangDasar = totalKeseluruhanDasar / peserta;

    // 5. Potongan Diskon Referral
    const nominalDiskonPerOrang = appliedReferral ? 15000 : 0;
    const hargaPerOrangFinal = Math.max(0, hargaPerOrangDasar - nominalDiskonPerOrang);
    const totalKeseluruhanFinal = hargaPerOrangFinal * peserta;

    return {
      perOrangFinal: Math.round(hargaPerOrangFinal),
      totalKeseluruhan: Math.round(totalKeseluruhanFinal),
      objekPenginapan,
      unitDibutuhkan,
      totalBiayaPenginapan
    };
  }, [peserta, selectedAktivitas, selectedDestinasi, penginapan, appliedReferral]);

  // ─── TRIGGER TOMBOL DISKON ───
  const handleApplyDiskon = () => {
    if (inputReferral.trim() !== "") {
      setAppliedReferral(inputReferral.toUpperCase());
      localStorage.setItem("gp_referral", inputReferral.toUpperCase());
    } else {
      setAppliedReferral("");
      localStorage.removeItem("gp_referral");
    }
  };

  // ─── WA TEXT GENERATOR ───
  const handleKirimWA = () => {
    const listAkt = DATA_AKTIVITAS.filter(a => selectedAktivitas.includes(a.id)).map(a => a.nama).join(", ");
    const listDest = DATA_DESTINASI.filter(d => selectedDestinasi.includes(d.id)).map(d => d.nama).join(", ");
    
    const pesan = `Halo Tim Go Pangalengan! 👋\n\nSaya telah menggunakan Kalkulator Custom Trip di web untuk menyusun rencana *Custom Trip*:\n\n👥 *Jumlah Peserta:* ${peserta} Orang\n⏱️ *Durasi:* ${durasi}\n🏡 *Akomodasi:* ${kalkulasiHarga.objekPenginapan?.nama}\n🌊 *Aktivitas:* ${listAkt || "Tidak ada"}\n📍 *Destinasi:* ${listDest || "Tidak ada"}\n\n💳 *Estimasi Biaya di Web:* Rp ${kalkulasiHarga.perOrangFinal.toLocaleString("id-ID")}/orang`;
    
    window.open(generateWALink(pesan), "_blank");
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 pb-28 font-sans">
      
      {/* HEADER HERO */}
      <div className="bg-stone-900 text-white pt-16 pb-24 px-4 text-center shadow-md relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/hero1.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full">Interactive Budgeting Tool</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Kalkulator Custom Trip</h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto font-medium">Atur sendiri anggaran petualangan Anda secara transparan. Harga jujur, akurat, dan tanpa biaya siluman.</p>
        </div>
      </div>

      {/* MAIN CONTAINER LAYOUT */}
      <div className="max-w-6xl mx-auto px-4 -mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-20">
        
        {/* PANEL KIRI: FORM PILIHAN (6 Kolom di Layar Lebar) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* KONFIGURASI UTAMA */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/60 space-y-5">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-stone-400 mb-2">1. Jumlah Peserta Rombongan</label>
              <div className="flex items-center gap-3">
                <input 
                  type="number" 
                  min={1}
                  value={peserta} 
                  onChange={(e) => setPeserta(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3.5 text-base font-black text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
                <span className="text-sm font-bold text-stone-500 shrink-0 bg-stone-50 border border-stone-200 px-4 py-3.5 rounded-2xl">Orang</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-stone-400 mb-2">2. Durasi Kunjungan</label>
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-stone-50 border border-stone-200 rounded-2xl">
                {(["1 Hari", "2 Hari"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setDurasi(t)}
                    className={`py-3 text-xs sm:text-sm font-black rounded-xl transition-all ${durasi === t ? "bg-white text-emerald-700 shadow-sm border border-stone-200" : "text-stone-500 hover:text-stone-800"}`}
                  >
                    {t === "1 Hari" ? "☀️ Perjalanan 1 Hari (One Day Trip)" : "🌙 Menginap (2 Hari 1 Malam)"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PILIHAN AKTIVITAS ADVENTURE */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/60">
            <label className="block text-xs font-black uppercase tracking-wider text-stone-400 mb-3">3. Pilih Wahana & Aktivitas Seru</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {DATA_AKTIVITAS.map((item) => {
                const isSelected = selectedAktivitas.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (isSelected) setSelectedAktivitas(selectedAktivitas.filter(id => id !== item.id));
                      else setSelectedAktivitas([...selectedAktivitas, item.id]);
                    }}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl text-left border transition-all ${isSelected ? "bg-emerald-50/60 border-emerald-500 shadow-sm" : "bg-white border-stone-200 hover:border-stone-300"}`}
                  >
                    <span className="text-2xl bg-stone-50 p-2 rounded-xl border border-stone-100">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className={`block text-xs sm:text-sm font-black truncate ${isSelected ? "text-emerald-950" : "text-stone-700"}`}>{item.nama}</span>
                      <span className="block text-xs font-bold text-emerald-600 mt-0.5">+{item.harga.toLocaleString("id-ID")}/pax</span>
                    </div>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs font-bold shrink-0 ${isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "border-stone-300 bg-white"}`}>
                      {isSelected && "✓"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PILIHAN DESTINASI */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/60">
            <label className="block text-xs font-black uppercase tracking-wider text-stone-400 mb-3">4. Pilih Spot Destinasi Kebun Teh & Wisata</label>
            <div className="grid grid-cols-2 gap-2.5">
              {DATA_DESTINASI.map((item) => {
                const isSelected = selectedDestinasi.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (isSelected) setSelectedDestinasi(selectedDestinasi.filter(id => id !== item.id));
                      else setSelectedDestinasi([...selectedDestinasi, item.id]);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-2xl text-left border transition-all ${isSelected ? "bg-emerald-50/60 border-emerald-500" : "bg-white border-stone-200 hover:border-stone-300"}`}
                  >
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs font-black text-stone-700 truncate">{item.nama}</span>
                      <span className="block text-[11px] font-bold text-stone-400 mt-0.5">Tiket: Rp {item.harga.toLocaleString("id-ID")}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] shrink-0 ${isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "border-stone-300 bg-white"}`}>
                      {isSelected && "✓"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PILIHAN PENGINAPAN (HANYA MUNCUL JIKA 2 HARI) */}
          <AnimatePresence>
            {durasi === "2 Hari" && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/60 overflow-hidden"
              >
                <label className="block text-xs font-black uppercase tracking-wider text-stone-400 mb-3">5. Pilih Jenis Properti / Penginapan</label>
                <div className="space-y-2">
                  {DATA_PENGINAPAN.filter(p => p.id !== "none").map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPenginapan(item.id)}
                      className={`flex items-center justify-between w-full p-4 rounded-2xl border text-left transition-all ${penginapan === item.id ? "bg-emerald-50/60 border-emerald-500 shadow-sm" : "bg-white border-stone-200 hover:border-stone-300"}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <span className="block text-xs sm:text-sm font-black text-stone-800">{item.nama}</span>
                          <span className="block text-[11px] text-stone-400 font-medium mt-0.5">{item.id === "tenda" ? "Sensasi alam terbuka" : "Nyaman untuk rombongan"}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                          <span className="block text-xs sm:text-sm font-black text-emerald-700">Rp {item.hargaUnit.toLocaleString("id-ID")}</span>
                          <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Per Unit</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
        
         {/* SMART WARNING SYSTEM (Elegant Emerald Theme) */}
          {kalkulasiHarga.objekPenginapan && kalkulasiHarga.objekPenginapan.id.includes("villa") && peserta < 10 && (
            <div className="bg-emerald-950/40 border border-emerald-800/60 p-4 rounded-2xl flex gap-3 items-start animate-in fade-in duration-500">
              {/* Warna ikon disesuaikan menjadi emerald cerah */}
              <span className="text-emerald-400 text-base shrink-0">💡</span>
    
              <p className="text-[11px] text-emerald-100/90 font-medium leading-relaxed">
                <strong className="text-emerald-400 font-black">Saran Efisiensi:</strong> Rombongan Anda berjumlah {peserta} orang. Menyewa Villa Besar (Kapasitas {kalkulasiHarga.objekPenginapan.kapasitas}) membuat beban harga per-orang menjadi tinggi. Kami sarankan beralih ke <strong className="text-white border-b border-emerald-400 border-dashed cursor-pointer hover:text-emerald-300 transition-colors" onClick={() => setPenginapan("glamping_vip")}>Glamping VIP</strong> untuk efisiensi budget maksimal.
              </p>
            </div>
          )}

        {/* PANEL KANAN: LIVE ESTIMASI NOTA DIGITAL (5 Kolom di Layar Lebar - Sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-6 h-max">
          <div className="bg-stone-900 text-white rounded-[2rem] p-6 shadow-2xl border border-stone-800 space-y-6">
            
            {/* HARGA UTAMA (PSIKOLOGI MARKETING) */}
            <div className="text-center bg-stone-800/60 border border-stone-800 p-5 rounded-2xl space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 block">Estimasi Investasi Liburan</span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                Rp {kalkulasiHarga.perOrangFinal.toLocaleString("id-ID")}
                <span className="text-xs text-white font-normal tracking-normal"> / orang</span>
              </div>
              <p className="text-[11px] text-stone-400 font-medium">Total Rombongan ({peserta} Pax): Rp {kalkulasiHarga.totalKeseluruhan.toLocaleString("id-ID")}</p>
            </div>

            {/* DROPDOWN RINCIAN FASILITAS ACCORDION */}
            <div className="border border-stone-800 rounded-2xl overflow-hidden bg-stone-950/40">
              <button 
                onClick={() => setShowRincian(!showRincian)}
                className="w-full px-4 py-3.5 text-xs font-black uppercase tracking-wider text-left flex justify-between items-center text-stone-300 hover:bg-stone-800/40 transition-colors"
              >
                <span>🔎 Lihat Rincian Fasilitas</span>
                <span className="text-base transition-transform duration-300" style={{ transform: showRincian ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
              </button>
              
              <AnimatePresence>
                {showRincian && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 pb-4 border-t border-stone-800/60 pt-3 text-xs text-stone-400 space-y-3 max-h-60 overflow-y-auto"
                  >
                    {/* Rincian Aktivitas */}
                    {selectedAktivitas.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider block">Fasilitas Aktivitas:</span>
                        {DATA_AKTIVITAS.filter(a => selectedAktivitas.includes(a.id)).map(a => (
                          <div key={a.id} className="border-l border-stone-700 pl-2.5">
                            <strong className="text-stone-200 block">{a.nama}</strong>
                            <p className="text-[11px] mt-0.5 leading-relaxed">{a.fasilitas}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Rincian Penginapan */}
                    {penginapan !== "none" && kalkulasiHarga.objekPenginapan && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider block">Fasilitas Akomodasi:</span>
                        <div className="border-l border-stone-700 pl-2.5">
                          <strong className="text-stone-200 block">{kalkulasiHarga.objekPenginapan.nama}</strong>
                          <ul className="list-disc pl-3.5 space-y-0.5 mt-1 text-[11px]">
                            {kalkulasiHarga.objekPenginapan.fasilitas.map((f, i) => <li key={i}>{f}</li>)}
                          </ul>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INPUT KODE DISKON / REFERRAL */}
            <div className="bg-stone-950/40 p-4 border border-stone-800 rounded-2xl space-y-2.5">
              <label className="block text-[10px] font-black uppercase tracking-wider text-stone-400">Punya Kode Referral Diskon?</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputReferral}
                  onChange={(e) => setInputReferral(e.target.value)}
                  placeholder="Contoh: TIRTA"
                  className="bg-stone-800 border border-stone-700 rounded-xl px-3.5 py-2 text-xs uppercase flex-1 text-white focus:outline-none focus:border-emerald-500 font-bold tracking-wider placeholder:font-medium placeholder:text-stone-500"
                />
                <button 
                  onClick={handleApplyDiskon}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs px-4 py-2 rounded-xl transition-all"
                >
                  {appliedReferral ? "Terpasang" : "Terapkan"}
                </button>
              </div>
              {appliedReferral && (
                <span className="text-[10px] text-emerald-400 font-bold block animate-pulse">
                  ✓ Berhasil hemat Rp 25.000 / orang dengan referral dari Kak {appliedReferral}!
                </span>
              )}
            </div>

            {/* ACTION CTA TOMBOL */}
            <div className="space-y-3 pt-2">
              <button 
                onClick={handleKirimWA}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm py-4 rounded-2xl transition-all shadow-[0_10px_20px_-10px_rgba(5,150,105,0.4)] text-center flex justify-center items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                Kirim & Minta Penawaran Resmi
              </button>
              <div className="flex justify-center items-center gap-4 text-[10px] text-stone-500 font-bold uppercase tracking-wide">
                <span>🛡️ Resmi & Berizin</span>
                <span>{"•"}</span>
                <span>⚡ Respon Cepat</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}