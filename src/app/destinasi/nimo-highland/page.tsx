"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NimoHighlandPage() {
  // Sihir JavaScript untuk tombol "Baca Selengkapnya"
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner (Immersive First Impression) */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="/destinasi.jpg" // Ganti dengan foto asli Nimo Highland nanti
          alt="Nimo Highland Pangalengan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <span className="mb-3 inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
              📍 Banjarsari, Pangalengan
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Nimo Highland
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200 sm:text-xl">
              Menyatu dengan hamparan kebun teh, awan, dan arsitektur ikonik bergaya Santorini di puncak Pangalengan.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quick Info & Deskripsi (Dilengkapi Fitur Read More) */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 mb-2">Tentang Destinasi</h2>
              
              <div className="space-y-4 leading-relaxed text-zinc-600 text-justify">
                {/* Paragraf 1: Selalu Tampil */}
                <p>
                  Berada di ketinggian Gunung Nini, Nimo Highland menawarkan lanskap 360 derajat yang menggabungkan luasnya hamparan kebun teh Malabar dan tenangnya Situ Cileunca dari kejauhan. Udara sejuk pegunungan yang menusuk lembut menjadi teman setia Anda saat berjalan di jembatan kaca ikonik yang mengitari area puncak.
                </p>

                {/* Paragraf Tambahan: Sembunyi di HP, Tampil di Laptop */}
                <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-4 animate-in fade-in duration-500`}>
                  <p>
                    Resmi dibuka untuk publik pada <strong>Mei 2022</strong>, destinasi ini dengan cepat menjelma menjadi primadona pariwisata Jawa Barat. Tercatat lebih dari ratusan ribu wisatawan telah menjejakkan kaki di sini, terpesona oleh keberanian memadukan arsitektur megah bergaya Santorini dengan kearifan alam tanah Pasundan.
                  </p>
                  <p>
                    Tempat ini dirancang untuk mereka yang mencari keindahan visual sekaligus ketenangan. Baik Anda datang untuk berburu kabut pagi saat matahari terbit, atau sekadar menyesap kopi hangat di sore hari, setiap sudut di sini adalah mahakarya alam yang disempurnakan.
                  </p>
                </div>
              </div>

              {/* Tombol Baca Selengkapnya - HANYA MUNCUL DI HP (md:hidden) */}
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
                <li className="flex items-start gap-3">
                  <span className="text-xl">🌡️</span>
                  <div>
                    <span className="block font-medium text-zinc-900">Cuaca</span>
                    15°C - 20°C (Sangat Sejuk)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <span className="block font-medium text-zinc-900">Cocok Untuk</span>
                    Keluarga, Pasangan, Fotografi
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">⏰</span>
                  <div>
                    <span className="block font-medium text-zinc-900">Waktu Terbaik</span>
                    05:00 WIB (Sunrise) & 15:00 WIB
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Galeri Visual (Carousel) */}
      <section className="py-12 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-white">Galeri Nimo Highland</h2>
          <p className="text-zinc-400 mt-2 text-sm">Geser untuk melihat keindahan sudut lainnya.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative h-64 w-[85vw] sm:w-[400px] shrink-0 snap-center overflow-hidden rounded-2xl">
              <Image src="/destinasi.jpg" alt={`Galeri ${item}`} fill className="object-cover" />
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
              { icon: "🌉", title: "Jembatan Kaca Ikonik", desc: "Berjalan di atas jembatan kaca terpanjang dengan view 360 derajat kebun teh." },
              { icon: "☕", title: "Kafe Estetik", desc: "Menikmati camilan dan kopi hangat dengan arsitektur ala Santorini." },
              { icon: "🌅", title: "Sunrise Point", desc: "Spot terbaik untuk melihat matahari terbit menembus kabut tebal Pangalengan." }
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
          <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">Ingin Liburan Tanpa Ribet ke Sini?</h2>
          <p className="text-emerald-800/80 max-w-2xl mx-auto">
            Jangan pusing memikirkan rute, tiket masuk, atau transportasi. Kami telah merangkum pengalaman terbaik Nimo Highland ke dalam paket wisata eksklusif kami.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/#petualangan" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Lihat Paket Wisata
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
          <h2 className="text-2xl font-bold sm:text-3xl mb-4">Punya Rencana Sendiri?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Ingin menggabungkan kunjungan Nimo Highland dengan Rafting atau ATV? Tim kami siap menyusun itinerary khusus yang sesuai dengan ritme liburan Anda. Masih bingung? Konsultasikan dengan kami, gratis.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Pangalengan%20Trip,%20saya%20tertarik%20dengan%20Nimo%20Highland%20dan%20ingin%20konsultasi%20custom%20trip."
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