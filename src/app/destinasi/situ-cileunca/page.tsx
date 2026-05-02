"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SituCileuncaPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner (Immersive First Impression) */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          // Pastikan file gambar ini ada di folder public
          src="/cileunca.jpg" 
          alt="Panorama Danau Situ Cileunca Pangalengan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <span className="mb-3 inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              📍 Warnasari, Pangalengan
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
              Situ Cileunca
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200 sm:text-xl drop-shadow-md">
              Jantung petualangan Pangalengan. Nikmati tenangnya riak air danau bersejarah, atau pacu adrenalin Anda menembus jeram sungai yang menantang.
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
                  Berada di ketinggian 1.550 mdpl, Situ Cileunca bukan sekadar danau buatan peninggalan era kolonial Belanda, melainkan episentrum pariwisata Bandung Selatan. Hamparan air seluas 1.400 hektare ini dibingkai oleh perbukitan hijau dan kebun teh, menciptakan kanvas alam yang begitu mendamaikan bagi siapa saja yang memandangnya.
                </p>

                <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-4 animate-in fade-in duration-500`}>
                  <p>
                    Daya tarik utama Situ Cileunca terletak pada fleksibilitasnya. Bagi keluarga yang mencari ketenangan, menyewa perahu kayu menyusuri danau atau berjalan melintasi "Jembatan Cinta" yang ikonik adalah pilihan sempurna. Angin sejuk yang membawa aroma air tawar akan membuat durasi liburan terasa berjalan lebih lambat dan bermakna.
                  </p>
                  <p>
                    Namun, bagi para pencari tantangan, danau ini adalah gerbang menuju petualangan ekstrem. Aliran air Situ Cileunca merupakan hulu dari Sungai Palayangan, jalur <em>Rafting</em> (arung jeram) legendaris yang menyajikan jeram-jeram menantang namun tetap aman untuk pemula. Di sinilah tawa lepas dan adrenalin bersatu dalam satu pengalaman yang tak terlupakan.
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
                  <source src="/cileunca-reels.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              </div>

              {/* Info Singkat */}
              <div className="w-full max-w-[320px] md:max-w-full rounded-2xl border border-zinc-100 bg-zinc-50 p-4 shadow-sm">
                <ul className="space-y-3 text-sm text-zinc-600">
                  <li className="flex items-center gap-3">
                    <span className="text-lg">🎯</span>
                    <div>
                      <span className="font-semibold text-zinc-900 block leading-none mb-1">Semua Kalangan</span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Keluarga s/d Corporate</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">🌤️</span>
                    <div>
                      <span className="font-semibold text-zinc-900 block leading-none mb-1">Pagi & Sore</span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Hindari Terik Matahari</span>
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
          <h2 className="text-2xl font-bold text-white">Pesona Cileunca</h2>
          <p className="text-zinc-400 mt-2 text-sm">Geser untuk menjelajahi sudut danau dan keseruan arusnya.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          
          {/* ARRAY GAMBAR: Ganti nama-nama file di bawah ini sesuai dengan foto galeri Cileunca Anda */}
          {[
            "/cileunca-1.jpg", 
            "/cileunca-2.jpg", 
            "/cileunca-3.jpg",
            "/cileunca-4.jpg"
          ].map((imgSrc, index) => (
            <div key={index} className="relative h-64 w-[85vw] sm:w-[400px] shrink-0 snap-center overflow-hidden rounded-2xl border border-zinc-800 shadow-lg">
              <Image 
                src={imgSrc} 
                alt={`Momen di Situ Cileunca ${index + 1}`} 
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
              { icon: "🚣‍♂️", title: "Rafting Palayangan", desc: "Taklukkan jeram seru sepanjang 4,5 km yang menguji adrenalin." },
              { icon: "🚤", title: "Perahu Keliling Danau", desc: "Sewa perahu kayu menikmati tenangnya air dan angin sejuk." },
              { icon: "🌉", title: "Jembatan Cinta", desc: "Spot foto estetik dengan latar belakang pegunungan memukau." },
              { icon: "🏕️", title: "Lakeside Camping", desc: "Mendirikan tenda tepat di pinggir danau dengan api unggun." },
              { icon: "🍓", title: "Petik Stroberi", desc: "Agrowisata memetik buah segar langsung dari kebun warga." },
              { icon: "🎯", title: "Outbound & Gathering", desc: "Area lapang ideal untuk kegiatan tim dan permainan kelompok." }
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
          <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">Ingin Pengalaman Rafting Tanpa Repot?</h2>
          <p className="text-emerald-800/80 max-w-2xl mx-auto text-sm sm:text-base">
            Jangan biarkan energi Anda habis untuk tawar-menawar perahu atau mencari tempat makan. Kami menyediakan paket komplit Rafting, makan siang, dan dokumentasi eksklusif di Katalog 2026.
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
          <h2 className="text-2xl font-bold sm:text-3xl mb-4">Rencana Gathering Kantor atau Kampus?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Situ Cileunca adalah lokasi terbaik untuk kegiatan grup berskala besar. Tim Go Pangalengan siap merancang jadwal Outbound, Rafting, dan BBQ malam yang menyesuaikan dengan anggaran perusahaan Anda.
          </p>
          <a
            href="https://wa.me/6285717075116?text=Halo%20Go%20Pangalengan,%20saya%20tertarik%20dengan%20Situ%20Cileunca%20dan%20ingin%20konsultasi%20untuk%20kegiatan%20grup/gathering."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/30"
          >
            💬 Konsultasi Grup via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}