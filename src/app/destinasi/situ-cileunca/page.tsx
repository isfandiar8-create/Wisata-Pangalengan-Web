"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SituCileuncaPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image src="/destinasi.jpg" alt="Situ Cileunca" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <span className="mb-3 inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
              📍 Warnasari, Pangalengan
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Situ Cileunca
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200 sm:text-xl">
              Ikon kebanggaan Pangalengan. Danau bersejarah seluas 1.400 hektar yang menawarkan ketenangan paripurna.
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
                  Dikelilingi oleh perbukitan hijau dan perkebunan teh yang menghampar luas, Situ Cileunca bukan sekadar danau biasa. Airnya yang tenang mencerminkan langit biru Pangalengan, menjadikannya kanvas alam yang sempurna bagi mereka yang ingin menepi sejenak dari hiruk-pikuk perkotaan.
                </p>

                <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-4 animate-in fade-in duration-500`}>
                  <p>
                    Danau ini memiliki nilai sejarah yang sangat dalam. Berada pada ketinggian 1.400 mdpl, Situ Cileunca merupakan danau buatan yang dibangun oleh pemerintah kolonial Belanda pada kurun waktu <strong>1918 hingga 1926</strong>. Awalnya dirancang sebagai bendungan pembangkit listrik tenaga air (PLTA) dan pemasok air bersih bagi kota Bandung, kini kawasan ini telah berevolusi menjadi mahkota pariwisata Pangalengan.
                  </p>
                  <p>
                    Sebagai urat nadi pariwisata air, danau ini juga menjadi sumber aliran bagi derasnya Sungai Palayangan—jalur favorit untuk aktivitas <em>rafting</em> (arung jeram). Mengarungi danau dengan perahu kayu sambil menunggu matahari terbenam adalah salah satu pengalaman paling romantis yang bisa Anda dapatkan di sini.
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
                <li className="flex items-start gap-3"><span className="text-xl">🌡️</span><div><span className="block font-medium text-zinc-900">Cuaca</span>16°C - 21°C (Sejuk Dingin)</div></li>
                <li className="flex items-start gap-3"><span className="text-xl">⛵</span><div><span className="block font-medium text-zinc-900">Cocok Untuk</span>Keluarga, Pasangan, Wisata Air</div></li>
                <li className="flex items-start gap-3"><span className="text-xl">⏰</span><div><span className="block font-medium text-zinc-900">Waktu Terbaik</span>15:30 WIB (Sore Hari / Senja)</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Galeri Visual (Carousel) */}
      <section className="py-12 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-bold text-white">Galeri Situ Cileunca</h2>
          <p className="text-zinc-400 mt-2 text-sm">Geser untuk melihat tenangnya air danau bersejarah ini.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative h-64 w-[85vw] sm:w-[400px] shrink-0 snap-center overflow-hidden rounded-2xl">
              <Image src="/destinasi.jpg" alt={`Galeri Situ Cileunca ${item}`} fill className="object-cover" />
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
              { icon: "🛶", title: "Tour Perahu Danau", desc: "Berkeliling situ menggunakan perahu motor kayu mengitari pulau-pulau kecil." },
              { icon: "🌊", title: "Arung Jeram (Rafting)", desc: "Menaklukkan jeram sungai Palayangan yang aliran airnya berasal dari danau ini." },
              { icon: "⛺", title: "Lakeside Glamping", desc: "Menginap di tenda premium tepat di pinggir danau dengan fasilitas hotel." }
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
          <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">Tidur di Tepi Danau?</h2>
          <p className="text-emerald-800/80 max-w-2xl mx-auto">Pengalaman terbaik di Situ Cileunca adalah bermalam di pinggirannya. Kami menyediakan paket Glamping dan Villa dengan akses langsung ke air.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/#penginapan" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700">Lihat Paket Penginapan</Link>
          </div>
        </div>
      </section>

      {/* 6. Custom Trip & Final CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-zinc-900 p-8 sm:p-12 text-center text-white shadow-xl">
          <span className="text-4xl mb-4 block">🗺️</span>
          <h2 className="text-2xl font-bold sm:text-3xl mb-4">Butuh Rekomendasi Liburan Keluarga?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Situ Cileunca sangat bersahabat untuk wisata keluarga segala usia. Hubungi kami untuk menyusun itinerary santai yang cocok untuk orang tua maupun anak-anak.</p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/30">💬 Konsultasi Gratis</a>
        </div>
      </section>
    </div>
  );
}