"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { generateWALink } from "@/config/contact"; 
import { masterPenginapan } from "@/data/penginapan"; 

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
      
      {/* 1. HERO IMAGE (Bersih, Tanpa Back Arrow) */}
      <div className="relative w-full h-[40vh] sm:h-[55vh] bg-stone-900">
        <Image src={item.image} alt={item.nama} fill className="object-cover opacity-80" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-90"></div>
      </div>

      {/* 2. KONTEN UTAMA */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 p-6 sm:p-10">
          
          {/* Header Info */}
          <div className="border-b border-stone-100 pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-emerald-100 text-emerald-700">
                  {item.kategori}
                </span>
                
                {/* BADGE DIPINDAHKAN KE SINI (Selaras dengan Paket Wisata) */}
                {item.label && (
                  <span className="text-[10px] font-black uppercase px-3 py-1 rounded-md bg-emerald-500 text-white shadow-sm animate-pulse tracking-wider">
                    {item.label}
                  </span>
                )}

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