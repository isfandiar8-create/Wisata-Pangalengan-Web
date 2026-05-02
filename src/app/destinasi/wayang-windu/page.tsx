"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WayangWinduPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner (Immersive First Impression) */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="/wayang-hero.jpg" 
          alt="Panorama Wayang Windu Panenjoan Pangalengan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <span className="mb-3 inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              📍 Margamukti, Pangalengan
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
              Wayang Windu
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200 sm:text-xl drop-shadow-md">
              Berjalan di atas awan. Menikmati harmoni hamparan kebun teh hijau yang berpadu dengan kabut magis dan siluet senja di atap Pangalengan.
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
                  Wayang Windu Panenjoan (WWP) adalah primadona bagi para pencari ketenangan estetik. Berada di ketinggian sekitar 1.800 meter di atas permukaan laut, suhu di kawasan ini bisa turun hingga menyentuh belasan derajat celsius. Udara yang teramat sejuk ini paling pas dinikmati sambil berjalan menyusuri jembatan kayu ikonik yang membelah mulusnya karpet hijau perkebunan teh Kertamanah.
                </p>

                <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-4 animate-in fade-in duration-500`}>
                  <p>
                    Keunikan utama yang tidak dimiliki tempat lain adalah latar belakang pemandangannya. Saat Anda memandang ke kejauhan, kepulan asap putih dari cerobong Pembangkit Listrik Tenaga Panas Bumi (Geothermal) Wayang Windu membumbung tinggi, menciptakan kontras yang epik dan sangat sinematik sebagai latar belakang foto Anda.
                  </p>
                  <p>
                    Meski indah di pagi hari, Wayang Windu menampakkan sihir aslinya saat menjelang senja. Tempat ini diakui sebagai salah satu titik <em>Sunset</em> terbaik di Bandung Selatan. Menyaksikan matahari terbenam perlahan di balik perbukitan, mengubah warna langit dari biru menjadi gradasi ungu keemasan sambil menyesap bandrek hangat, adalah pengalaman yang akan terus membekas di ingatan.
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
                  <source src="/wayang-reels.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              </div>

              {/* Info Singkat */}
              <div className="w-full max-w-[320px] md:max-w-full rounded-2xl border border-zinc-100 bg-zinc-50 p-4 shadow-sm">
                <ul className="space-y-3 text-sm text-zinc-600">
                  <li className="flex items-center gap-3">
                    <span className="text-lg">🥶</span>
                    <div>
                      <span className="font-semibold text-zinc-900 block leading-none mb-1">10°C - 16°C</span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Sangat Dingin & Berkabut</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">🌅</span>
                    <div>
                      <span className="font-semibold text-zinc-900 block leading-none mb-1">16:30 WIB</span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Waktu Terbaik (Sunset)</span>
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
          <h2 className="text-2xl font-bold text-white">Potret Wayang Windu</h2>
          <p className="text-zinc-400 mt-2 text-sm">Geser untuk melihat jembatan kayu dan kabut senjanya.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          
          {[
            "/wayang-1.jpg", 
            "/wayang-2.jpg", 
            "/wayang-3.jpg",
            "/wayang-4.jpg"
          ].map((imgSrc, index) => (
            <div key={index} className="relative h-64 w-[85vw] sm:w-[400px] shrink-0 snap-center overflow-hidden rounded-2xl border border-zinc-800 shadow-lg">
              <Image 
                src={imgSrc} 
                alt={`Momen di Wayang Windu ${index + 1}`} 
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
              { icon: "🌉", title: "Jembatan Kayu (Sky Park)", desc: "Berjalan membelah kebun teh di atas boardwalk estetik." },
              { icon: "🌅", title: "Spot Sunset Juara", desc: "Nikmati transisi magis matahari terbenam di atas awan." },
              { icon: "🏎️", title: "ATV Keliling Perkebunan", desc: "Jelajahi luasnya kebun teh Kertamanah dengan mesin 4x4." },
              { icon: "🏕️", title: "Camping Ground Dingin", desc: "Area berkemah dengan pemandangan langsung ke lembah." },
              { icon: "🏭", title: "View Geothermal", desc: "Latar foto unik dengan asap putih PLTP Wayang Windu." },
              { icon: "🚲", title: "Bike Park", desc: "Tersedia trek khusus bagi pecinta sepeda gunung (MTB)." }
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
          <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">Lengkapi Romantisme Liburan Anda</h2>
          <p className="text-emerald-800/80 max-w-2xl mx-auto text-sm sm:text-base">
            Jangan sampai kelelahan menyetir merusak momen senja Anda. Kami memiliki paket yang menggabungkan kesejukan Wayang Windu dengan penginapan hangat yang nyaman.
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
          <h2 className="text-2xl font-bold sm:text-3xl mb-4">Ingin Trip Khusus Pasangan / Keluarga?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Ingin menggabungkan foto-foto cantik di Wayang Windu pada sore hari setelah bermain ATV? Tim kami siap merangkai jadwal yang santai, romantis, dan tak terlupakan.
          </p>
          <a
            href="https://wa.me/6285717075116?text=Halo%20Go%20Pangalengan,%20saya%20tertarik%20dengan%20Wayang%20Windu%20dan%20ingin%20konsultasi%20untuk%20liburan%20santai."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/30"
          >
            💬 Rencanakan Trip via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}