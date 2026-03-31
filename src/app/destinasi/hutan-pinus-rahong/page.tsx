"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HutanPinusRahongPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image src="/destinasi.jpg" alt="Hutan Pinus Rahong" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <span className="mb-3 inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
              📍 Pulosari, Pangalengan
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Hutan Pinus Rahong
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200 sm:text-xl">
              Teduhnya deretan pohon pinus berpadu dengan suara gemericik air sungai Palayangan. Episentrum petualangan alam di Pangalengan.
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
                  Hutan Pinus Rahong adalah kawasan ekowisata yang rimbun dan asri, di mana sinar matahari menembus sela-sela pepohonan pinus yang menjulang tinggi. Berada tepat di sisian Sungai Palayangan, tempat ini menjadi titik perpaduan sempurna antara ketenangan hutan dan adrenalin wisata air.
                </p>

                <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-4 animate-in fade-in duration-500`}>
                  <p>
                    Sejak puluhan tahun lalu, Rahong telah ditetapkan sebagai kawasan lindung dan resapan air. Kini, kawasan ini menjadi pusat bagi berbagai kegiatan <em>outdoor</em> bergengsi. Puluhan ribu peserta <em>corporate gathering</em> dari berbagai kota besar menjadikan Rahong sebagai arena bermain <em>paintball</em>, <em>flying fox</em>, dan area <em>finish</em> kegiatan <em>rafting</em>.
                  </p>
                  <p>
                    Anda tidak harus mencari adrenalin untuk menikmati tempat ini. Menyewa <em>hammock</em>, merebahkan diri di antara dua pohon pinus, dan mendengarkan simfoni alam sudah cukup untuk mencuci paru-paru dan pikiran Anda dari polusi kota.
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
                <li className="flex items-start gap-3"><span className="text-xl">🌡️</span><div><span className="block font-medium text-zinc-900">Cuaca</span>17°C - 22°C (Sejuk Terlindung)</div></li>
                <li className="flex items-start gap-3"><span className="text-xl">🧗‍♂️</span><div><span className="block font-medium text-zinc-900">Cocok Untuk</span>Corporate Outing, Petualang, Healing</div></li>
                <li className="flex items-start gap-3"><span className="text-xl">⏰</span><div><span className="block font-medium text-zinc-900">Waktu Terbaik</span>08:00 WIB - 14:00 WIB</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Galeri Visual (Carousel) */}
      <section className="py-12 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-white">Galeri Rahong</h2>
          <p className="text-zinc-400 mt-2 text-sm">Geser untuk merasakan teduhnya pepohonan pinus.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative h-64 w-[85vw] sm:w-[400px] shrink-0 snap-center overflow-hidden rounded-2xl">
              <Image src="/destinasi.jpg" alt={`Galeri Rahong ${item}`} fill className="object-cover" />
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
              { icon: "🔫", title: "Arena Paintball", desc: "Bermain strategi simulasi tempur alami di balik benteng pepohonan pinus." },
              { icon: "🧗", title: "Outbound & Flying Fox", desc: "Meluncur di antara rindangnya pohon dengan standar keamanan tinggi." },
              { icon: "☕", title: "Hammocking & Santai", desc: "Pasang tempat tidur gantung Anda, seduh kopi, dan hirup oksigen murni." }
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
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">Pusat Petualangan Pangalengan!</h2>
          <p className="text-emerald-800/80 max-w-2xl mx-auto">Sebagian besar aktivitas pemacu adrenalin kami seperti Rafting, Paintball, dan Flying Fox berpusat di kawasan Rahong. Pilih keseruan Anda sekarang.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/#petualangan" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700">Lihat Paket Petualangan</Link>
          </div>
        </div>
      </section>

      {/* 6. Custom Trip & Final CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-zinc-900 p-8 sm:p-12 text-center text-white shadow-xl">
          <span className="text-4xl mb-4 block">🏢</span>
          <h2 className="text-2xl font-bold sm:text-3xl mb-4">Rencana Outing Kantor?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Kawasan Rahong sangat sempurna untuk kegiatan Team Building dan Corporate Outing berskala besar. Biarkan tim kami merancang rundown-nya untuk Anda.</p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/30">💬 Tanya Paket Corporate</a>
        </div>
      </section>
    </div>
  );
}