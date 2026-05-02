"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SunriseCukulPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner (Immersive First Impression) */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          // Pastikan file gambar ini ada di folder public
          src="/cukul.jpg" 
          alt="Panorama Sunrise Point Cukul Pangalengan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <span className="mb-3 inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              📍 Sukaluyu, Pangalengan
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
              Sunrise Point Cukul
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200 sm:text-xl drop-shadow-md">
              Saksikan magisnya lautan awan yang memeluk kebun teh saat cahaya mentari pagi pertama menyapa. Ketenangan visual yang menghipnotis di atap Pangalengan.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quick Info, Deskripsi & Video Reels */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            
            {/* KIRI: Deskripsi Teks */}
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 mb-2">Tentang Destinasi</h2>
              
              <div className="space-y-4 leading-relaxed text-zinc-600 text-justify">
                <p>
                  Dikenal sebagai salah satu titik matahari terbit terbaik di Jawa Barat, Sunrise Point Cukul menawarkan terapi ketenangan bagi Anda yang lelah dengan rutinitas. Berada di ketinggian 1.600 mdpl, tempat ini menyajikan fenomena menakjubkan berupa kabut tebal yang menyerupai lautan awan, terhampar di atas karpet hijau kebun teh sejauh mata memandang.
                </p>

                <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-4 animate-in fade-in duration-500`}>
                  <p>
                    Destinasi ini sangat ramah untuk keluarga maupun anak-anak karena akses jalannya yang sudah tertata rapi. Sambil menanti gradasi langit berubah dari gelap gulita menjadi semburat jingga keemasan, Anda bisa menikmati secangkir kopi atau teh hangat di warung-warung kecil milik warga lokal yang memberikan kesan intim dan merakyat.
                  </p>
                  <p>
                    Tidak jauh dari titik pantau, mata Anda akan dimanjakan oleh siluet Villa Merah—sebuah bangunan bersejarah bergaya arsitektur Jerman klasik yang berdiri anggun di tengah perkebunan. Setelah fajar menyingsing, Anda dan keluarga bisa melanjutkan pagi dengan melakukan <em>Tea Walk</em> santai, menghirup udara yang luar biasa bersih dan segar.
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
            
            {/* KANAN: Video Vertikal & Info Singkat */}
            <div className="md:col-span-1 flex flex-col gap-6 items-center md:items-end">
              
              {/* Bingkai Video Reels Estetik (Phone-style) */}
              <div className="relative w-full max-w-[260px] md:max-w-full aspect-[9/16] overflow-hidden rounded-2xl bg-zinc-100 shadow-xl border-[6px] border-white">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  {/* Pastikan file ini ada di folder public Anda */}
                  <source src="/cukul-reels.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              </div>

              {/* Info Singkat */}
              <div className="w-full max-w-[320px] md:max-w-full rounded-2xl border border-zinc-100 bg-zinc-50 p-4 shadow-sm">
                <ul className="space-y-3 text-sm text-zinc-600">
                  <li className="flex items-center gap-3">
                    <span className="text-lg">🧣</span>
                    <div>
                      <span className="font-semibold text-zinc-900 block leading-none mb-1">10°C - 15°C</span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Sangat Dingin (Bawa Jaket)</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">⏰</span>
                    <div>
                      <span className="font-semibold text-zinc-900 block leading-none mb-1">04:30 WIB</span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Tiba Sebelum Fajar</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Galeri Visual (Carousel Dinamis) */}
      <section className="py-12 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-white">Lanskap Cukul</h2>
          <p className="text-zinc-400 mt-2 text-sm">Geser untuk melihat keindahan samudra awan.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          
          {/* ARRAY GAMBAR: Ganti nama-nama file di bawah ini sesuai dengan foto galeri Cukul Anda */}
          {[
            "/cukul-1.jpg", 
            "/cukul-2.jpg", 
            "/cukul-3.jpg",
            "/cukul-4.jpg"
          ].map((imgSrc, index) => (
            <div key={index} className="relative h-64 w-[85vw] sm:w-[400px] shrink-0 snap-center overflow-hidden rounded-2xl border border-zinc-800 shadow-lg">
              <Image 
                src={imgSrc} 
                alt={`Momen di Sunrise Cukul ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105" 
                sizes="(max-width: 768px) 85vw, 400px"
              />
            </div>
          ))}

        </div>
      </section>

      {/* 4. Daya Tarik & Aktivitas */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-6">Apa yang Bisa Dinikmati?</h2>
          
          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🌅", title: "Samudra Awan", desc: "Saksikan kabut tebal menyelimuti lembah layaknya lautan." },
              { icon: "🏰", title: "Spot Villa Merah", desc: "Pemandangan estetik vila klasik Eropa di tengah kebun teh." },
              { icon: "🚶‍♂️", title: "Tea Walk Santai", desc: "Jalan pagi membelah kebun teh yang sangat ramah anak." },
              { icon: "🏕️", title: "Camping Menanti Pagi", desc: "Tersedia area khusus untuk mendirikan tenda keluarga." },
              { icon: "☕", title: "Kuliner Hangat", desc: "Nikmati mie rebus dan kopi lokal di tengah cuaca dingin." },
              { icon: "📸", title: "Fotografi Siluet", desc: "Momen magis untuk memotret siluet keluarga berlatar mentari." }
            ].map((fasilitas, i) => (
              <div key={i} className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{fasilitas.icon}</div>
                <h3 className="font-bold text-zinc-800 text-sm sm:text-base leading-tight mb-1">{fasilitas.title}</h3>
                <p className="text-[10px] sm:text-xs text-zinc-500 leading-relaxed">{fasilitas.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contextual Upselling (Penawaran Paket) */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">Malas Bangun Subuh Mengemudi Sendiri?</h2>
          <p className="text-emerald-800/80 max-w-2xl mx-auto text-sm sm:text-base">
            Jangan biarkan liburan santai Anda rusak karena harus menyetir menembus kabut tebal pagi hari. Kami sediakan armada dan penginapan terdekat dalam Katalog Paket 2026.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/katalog-wisata" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 shadow-lg shadow-emerald-600/20">
              Buka Katalog Wisata 2026
            </Link>
            
            <Link href="/#penginapan" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-emerald-600 bg-transparent px-8 py-3.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
              Cari Penginapan Terdekat
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Custom Trip & Final CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-zinc-900 p-8 sm:p-12 text-center text-white shadow-xl">
          <span className="text-4xl mb-4 block">🗺️</span>
          <h2 className="text-2xl font-bold sm:text-3xl mb-4">Ingin Menjadwalkan Trip Keluarga?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Kami bisa menyusun jadwal santai di mana Anda mengunjungi Sunrise Cukul di pagi hari, lalu dilanjutkan dengan istirahat dan makan siang di pinggir danau. Konsultasikan jadwal Anda bersama kami.
          </p>
          <a
            href="https://wa.me/6285717075116?text=Halo%20Go%20Pangalengan,%20saya%20tertarik%20dengan%20Sunrise%20Cukul%20dan%20ingin%20konsultasi%20untuk%20trip%20keluarga."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/30"
          >
            💬 Tanya Lewat WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}