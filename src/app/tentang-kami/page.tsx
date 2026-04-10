"use client";

import Image from "next/image";
import Link from "next/link";
import { generateWALink } from "@/config/contact";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* 1. Hero Section - Elegan & Profesional */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-zinc-900">
        <Image 
          src="/hero-pangalengan-trip.jpg" 
          alt="Tentang Go Pangalengan" 
          fill 
          className="object-cover opacity-40" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-4 text-center md:text-left">
            <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 backdrop-blur-sm border border-emerald-500/30 uppercase tracking-widest">
              Profil Agensi
            </span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              Keahlian Lokal, <br className="hidden md:block" />
              <span className="text-emerald-400">Standar Profesional.</span>
            </h1>
            <p className="max-w-2xl text-base text-zinc-300 sm:text-lg md:mx-0 mx-auto leading-relaxed">
              Lebih dari sekadar biro perjalanan. Kami adalah sekumpulan pakar lokal yang telah mengawal pariwisata Pangalengan dari garis depan sejak 2019.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filosofi & Cerita (The Origin Story yang Luar Biasa) */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-200 shadow-xl border border-zinc-200">
            {/* Silakan ganti dengan foto tim Anda atau foto aktivitas seru */}
            <Image 
              src="/paket3.jpg" 
              alt="Tim Go Pangalengan" 
              fill 
              className="object-cover" 
            />
          </div>
          
          <div className="space-y-6 text-zinc-600">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Dari Balik Layar Menuju <span className="text-emerald-600">Layanan Eksekutif.</span>
            </h2>
            <p className="text-base leading-relaxed">
              Jejak langkah kami di Pangalengan tidak dimulai kemarin. <strong className="text-zinc-900">Sejak tahun 2019</strong>, tim kami telah menjadi motor penggerak (*outsource*) di lapangan yang mengeksekusi dan mengawal keselamatan ribuan klien dari berbagai agensi wisata luar kota.
            </p>
            <p className="text-base leading-relaxed">
              Bekerja di garis depan selama bertahun-tahun membuat kami memahami betul setiap jengkal destinasi, celah keamanan, hingga ekspektasi tertinggi wisatawan. Dengan modal jam terbang tersebut, kami mendirikan <strong className="text-zinc-900">Go Pangalengan</strong> untuk memotong birokrasi dan memberikan layanan *first-hand* (tangan pertama) langsung kepada Anda, tanpa perantara.
            </p>
            
            {/* Metrik Jujur berdasarkan pengalaman lapangan */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200 mt-6">
              <div>
                <p className="text-3xl font-black text-emerald-600">2019</p>
                <p className="text-sm font-semibold text-zinc-900 mt-1">Mulai Aktif di Lapangan</p>
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-600">Ribuan+</p>
                <p className="text-sm font-semibold text-zinc-900 mt-1">Klien Tertangani (Akumulasi)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Value Proposition */}
      <section className="bg-zinc-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mengapa Bersama Kami?</h2>
            <p className="text-zinc-400">Keuntungan merencanakan perjalanan bersama pakar lokal tangan pertama.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 hover:bg-zinc-800 transition">
              <div className="h-12 w-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center text-2xl mb-6">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Harga Tangan Pertama</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Tanpa rantai perantara (*markup* agensi luar). Anda mendapatkan harga terbaik dengan kualitas operasional VIP langsung dari warga lokal.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 hover:bg-zinc-800 transition">
              <div className="h-12 w-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center text-2xl mb-6">🎯</div>
              <h3 className="text-xl font-bold mb-3">Penguasaan Medan</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Kami hafal setiap jalur, alternatif kemacetan, hingga cuaca. *Rundown* yang kami buat sangat realistis, presisi, dan aman.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 hover:bg-zinc-800 transition">
              <div className="h-12 w-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center text-2xl mb-6">🤝</div>
              <h3 className="text-xl font-bold mb-3">Transparansi Total</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Tidak ada biaya tersembunyi (*hidden fees*). Semua harga tiket, parkir, hingga makan sudah tertera jelas dalam proposal penawaran kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bagian Testimoni (Sama dengan Halaman Utama) */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                Kata Mereka
              </h2>
              <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
                Ulasan singkat dari pelanggan yang sudah merasakan perjalanan bersama kami.
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button onClick={() => {document.getElementById('rel-testi-about')?.scrollBy({left: -320, behavior: 'smooth'})}} className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm hover:bg-zinc-50"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></button>
              <button onClick={() => {document.getElementById('rel-testi-about')?.scrollBy({left: 320, behavior: 'smooth'})}} className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm hover:bg-zinc-50"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>
            </div>
          </div>

          <div id="rel-testi-about" className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {[
              { id: "1", quote: "Rundown rapi, tim responsif, dan aktivitasnya seru. Rafting di Palayangan jadi highlight trip kami.", name: "Dinda K." },
              { id: "2", quote: "ATV-nya asik banget! Jalur kebun teh Warnasari cantik, guide jelas, dan safety-nya diperhatikan.", name: "Rangga P." },
              { id: "3", quote: "Offroad-nya menantang dan worth it. Land Rover-nya tangguh, rute hutan pinusnya dapet banget feel petualangannya.", name: "Sari W." },
              { id: "4", quote: "Glampingnya bersih dan view-nya juara. Anak-anak betah banget main di pinggir danau.", name: "Budi H." }
            ].map((t) => (
              <article key={t.id} className="w-[85vw] sm:w-[350px] shrink-0 snap-start rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm backdrop-blur">
                <p className="text-sm leading-relaxed text-zinc-700 italic">" {t.quote} "</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-amber-500 text-xs">⭐⭐⭐⭐⭐</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer (Sama dengan Halaman Utama) */}
      <footer className="bg-zinc-900 text-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <p className="text-lg font-bold tracking-tight text-white">
                Go Pangalengan
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Partner perjalanan terpercaya Anda untuk menjelajahi keindahan
                alam, petualangan, dan ketenangan di Pangalengan, Bandung
                Selatan.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Hubungi Kami
              </h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <span className="font-medium text-zinc-300">Alamat:</span>{" "}
                  Jl. Raya Situ Cileunca, Pangalengan, Bandung.
                </li>
                <li>
                  <span className="font-medium text-zinc-300">Email:</span>{" "}
                  hello@gopangalengan.com
                </li>
                <li>
                  <span className="font-medium text-zinc-300">WhatsApp:</span>{" "}
                  +62 857-1707-5116
                </li>
                <li>
                  <span className="font-medium text-zinc-300">
                    Jam Operasional:
                  </span>{" "}
                  Setiap Hari (07.00 - 20.00 WIB)
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Layanan Utama
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/#petualangan" className="text-zinc-400 transition hover:text-emerald-400">
                    Rafting & Petualangan
                  </Link>
                </li>
                <li>
                  <Link href="/penginapan" className="text-zinc-400 transition hover:text-emerald-400">
                    Sewa Villa & Glamping
                  </Link>
                </li>
                <li>
                  <Link href="/paket/corporate" className="text-zinc-400 transition hover:text-emerald-400">
                    Corporate Outing
                  </Link>
                </li>
                <li>
                  <Link href="/custom-trip" className="text-zinc-400 transition hover:text-emerald-400">
                    Custom Trip
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Ikuti Keseruannya
              </h3>
              <p className="text-sm text-zinc-400">
                Lihat keseruan trip klien kami di sosial media!
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-700 hover:text-white"
                >
                  <span aria-hidden>📷</span>
                  <span>Instagram</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-700 hover:text-white"
                >
                  <span aria-hidden>🎵</span>
                  <span>TikTok</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-700 hover:text-white"
                >
                  <span aria-hidden>▶️</span>
                  <span>YouTube</span>
                </a>
              </div>
              <p className="text-xs text-zinc-500">@gopangalengan</p>
            </div>
          </div>

          <div className="mt-16 border-t border-zinc-800 py-10">
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-sm text-zinc-500">
                © 2026 Go Pangalengan. All rights reserved.
              </p>
              <p className="text-xs text-zinc-600">
                Designed for the ultimate experience.
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}