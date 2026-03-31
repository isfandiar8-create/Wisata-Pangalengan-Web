"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SunriseCukulPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image src="/destinasi.jpg" alt="Sunrise Point Cukul" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <span className="mb-3 inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
              📍 Sukaluyu, Pangalengan
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Sunrise Point Cukul
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200 sm:text-xl">
              Sambut pagi di atas awan. Titik magis di mana hamparan kebun teh menyatu dengan semburat emas matahari terbit.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quick Info & Deskripsi */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 mb-2">Tentang Destinasi</h2>
              
              <div className="space-y-4 leading-relaxed text-zinc-600 text-justify">
                <p>
                  Berada di ketinggian sekitar 1.600 meter di atas permukaan laut, Sunrise Point Cukul adalah surga bagi para pemburu matahari terbit dan fotografer lanskap. Begitu fajar menyingsing, lautan kabut putih perlahan turun menyelimuti perbukitan teh yang hijau bak karpet raksasa, menciptakan siluet dramatis yang tak terlupakan.
                </p>

                <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-4 animate-in fade-in duration-500`}>
                  <p>
                    Kawasan Perkebunan Teh Cukul ini dikelola oleh PTPN VIII dan menyimpan sejarah panjang peninggalan era kolonial Belanda. Tidak jauh dari titik <em>sunrise</em>, terdapat Villa Cukul (Villa Jerman) bergaya arsitektur klasik Eropa yang sering menjadi ikon misterius sekaligus estetik bagi para wisatawan.
                  </p>
                  <p>
                    Udara di sini sangat sejuk hingga menusuk tulang saat subuh, sehingga jaket tebal adalah kewajiban. Selain menikmati <em>sunrise</em>, pengunjung juga bisa berkemah ringan atau sekadar berjalan-jalan menyusuri labirin hijau perkebunan teh yang menenangkan jiwa.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 font-semibold text-emerald-600 md:hidden hover:text-emerald-700 focus:outline-none transition-colors"
              >
                {isExpanded ? "Tampilkan lebih sedikit ▲" : "Baca selengkapnya ▼"}
              </button>
            </div>
            
            {/* Quick Info Box */}
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 shadow-sm h-fit">
              <h3 className="font-semibold text-zinc-900 mb-4">Info Singkat</h3>
              <ul className="space-y-4 text-sm text-zinc-600">
                <li className="flex items-start gap-3"><span className="text-xl">🌡️</span><div><span className="block font-medium text-zinc-900">Cuaca</span>12°C - 18°C (Sangat Dingin)</div></li>
                <li className="flex items-start gap-3"><span className="text-xl">📸</span><div><span className="block font-medium text-zinc-900">Cocok Untuk</span>Fotografi, Camping, Pasangan</div></li>
                <li className="flex items-start gap-3"><span className="text-xl">⏰</span><div><span className="block font-medium text-zinc-900">Waktu Terbaik</span>04:30 WIB (Persiapan Sunrise)</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Galeri Visual (Carousel) */}
      <section className="py-12 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-white">Galeri Cukul</h2>
          <p className="text-zinc-400 mt-2 text-sm">Geser untuk melihat magisnya lautan kabut Cukul.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative h-64 w-[85vw] sm:w-[400px] shrink-0 snap-center overflow-hidden rounded-2xl">
              <Image src="/destinasi.jpg" alt={`Galeri Cukul ${item}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Daya Tarik & Aktivitas */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Apa yang Bisa Dinikmati?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🌅", title: "Golden Sunrise", desc: "Momen matahari terbit terbaik di Jawa Barat dengan latar kabut dan bukit." },
              { icon: "🏕️", title: "Camping Ground", desc: "Dirikan tenda dan nikmati langit penuh bintang (Milky Way) saat malam hari." },
              { icon: "🏰", title: "Villa Jerman", desc: "Berfoto dengan latar belakang villa tua berasitektur klasik yang ikonik." }
            ].map((fasilitas, i) => (
              <div key={i} className="rounded-2xl border border-zinc-200 p-6 hover:border-emerald-500 transition-colors">
                <div className="text-3xl mb-4">{fasilitas.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{fasilitas.title}</h3>
                <p className="text-sm text-zinc-600">{fasilitas.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contextual Upselling (Penawaran Paket) */}
      {/* ... [KODE SAMA PERSIS DENGAN NIMO HIGHLAND] ... */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">Berburu Sunrise Tanpa Repot?</h2>
          <p className="text-emerald-800/80 max-w-2xl mx-auto">Kami menyediakan paket camping dan transportasi khusus fajar agar Anda tidak melewatkan momen golden hour di Cukul.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/#petualangan" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700">Lihat Paket Wisata</Link>
            <Link href="/#penginapan" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-emerald-600 bg-transparent px-8 py-3.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">Cari Penginapan Terdekat</Link>
          </div>
        </div>
      </section>

      {/* 6. Custom Trip & Final CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-zinc-900 p-8 sm:p-12 text-center text-white shadow-xl">
          <span className="text-4xl mb-4 block">🗺️</span>
          <h2 className="text-2xl font-bold sm:text-3xl mb-4">Ingin Gabung Cukul & Rafting?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Habiskan subuh di Cukul, siangnya uji nyali di sungai Palayangan. Konsultasikan jadwal Anda bersama kami secara gratis.</p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/30">💬 Tanya Lewat WhatsApp</a>
        </div>
      </section>
    </div>
  );
}