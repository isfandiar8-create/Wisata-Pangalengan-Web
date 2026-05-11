"use client";

import Image from "next/image";
import { generateWALink } from "@/config/contact";

export default function AboutUsPage() {
  
  // ─── KTP DIGITAL (SCHEMA) ABOUT PAGE ───
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "TravelAgency",
      "name": "Go Pangalengan",
      "description": "Biro Perjalanan Wisata Lokal Pangalengan tangan pertama. Berpengalaman sejak 2019 dalam mengawal kegiatan rafting, outbound, dan family gathering.",
      "foundingDate": "2019",
      "areaServed": {
        "@type": "City",
        "name": "Pangalengan"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-stone-50 font-sans pb-20">
        
        {/* 1. Hero Section - Seirama Katalog Wisata (Gelap/Emerald) */}
        <section className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 text-center sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
          <Image 
            src="/rafting.jpg" 
            alt="Tentang Go Pangalengan" 
            fill 
            className="object-cover opacity-30" 
            priority 
          />
          <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 mx-auto max-w-4xl space-y-5">
            <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 backdrop-blur-sm border border-emerald-500/30 uppercase tracking-widest">
              Siapa Kami?
            </span>
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl drop-shadow-sm">
              Keahlian Lokal, <br className="hidden sm:block" />
              <span className="text-emerald-400 font-light italic tracking-wide mt-2 inline-block">Standar Eksekutif.</span>
            </h1>
            <p className="max-w-2xl text-sm text-stone-300 sm:text-lg mx-auto leading-relaxed font-medium">
              Lebih dari sekadar biro perjalanan. Kami adalah sekumpulan warga dan pakar lokal yang telah mengawal pariwisata Pangalengan dari garis terdepan.
            </p>
          </div>
        </section>

        {/* 2. Filosofi & Cerita (The Origin Story) */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            
            <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-3xl bg-stone-200 shadow-xl border border-stone-200 group">
              <Image 
                src="/paket3.jpg" 
                alt="Tim Profesional Go Pangalengan di Lapangan" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg leading-tight">Berawal dari motor penggerak operasional di lapangan.</p>
              </div>
            </div>
            
            <div className="space-y-6 text-stone-600">
              <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl leading-tight">
                Memangkas Perantara, <br />
                <span className="text-emerald-600">Menjaga Kualitas.</span>
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base leading-relaxed font-medium text-justify">
                <p>
                  Jejak langkah kami di Pangalengan tidak dimulai kemarin. <strong className="text-stone-900 bg-emerald-100 px-1 rounded">Sejak tahun 2019</strong>, tim kami telah menjadi motor penggerak di lapangan yang mengeksekusi dan mengawal keselamatan ribuan klien dari berbagai agensi wisata luar kota.
                </p>
                <p>
                  Bekerja di garis depan selama bertahun-tahun membuat kami memahami betul setiap jengkal destinasi, celah keamanan, hingga ekspektasi tertinggi wisatawan. 
                </p>
                <p>
                  Dengan modal jam terbang tersebut, kami mendirikan <strong className="text-stone-900">Go Pangalengan</strong> untuk memotong birokrasi dan rantai calo. Kami memberikan layanan first-hand (tangan pertama) langsung kepada Anda, dengan kualitas yang tidak dikurangi sedikit pun.
                </p>
              </div>
              
              {/* Metrik Trust/Kepercayaan */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone-200 mt-8">
                <div>
                  <p className="text-4xl font-black text-emerald-600">2019</p>
                  <p className="text-xs sm:text-sm font-bold text-stone-800 mt-1 uppercase tracking-wider">Mulai Aktif di Lapangan</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-emerald-600">Ribuan</p>
                  <p className="text-xs sm:text-sm font-bold text-stone-800 mt-1 uppercase tracking-wider">Klien Tertangani Aman</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. VALUE PROPOSITION (Keunggulan Kompetitif) */}
        <section className="bg-emerald-900 py-20 text-white relative overflow-hidden border-y border-emerald-800">
          {/* Pola Latar Belakang Abstrak */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-emerald-800 opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-emerald-950 opacity-50 blur-3xl"></div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-white">Standar Layanan Kami</h2>
              <p className="text-emerald-100 font-medium text-sm sm:text-base">Inilah yang membuat ratusan panitia rombongan dan keluarga mempercayakan liburannya kepada tim lokal kami.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="bg-emerald-950/40 p-6 sm:p-8 rounded-3xl border border-emerald-800/50 backdrop-blur-sm hover:bg-emerald-800/60 transition-colors">
                <div className="h-14 w-14 bg-white text-emerald-700 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-emerald-900/50">🤝</div>
                <h3 className="text-lg font-bold mb-3 text-white">Transparansi Total</h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-medium">
                  Tidak ada biaya tersembunyi (*hidden fees*). Harga proposal yang kami ajukan sudah final, termasuk asuransi dan retribusi lokal. Anda tidak akan dimintai uang dadakan di lapangan.
                </p>
              </div>
              <div className="bg-emerald-950/40 p-6 sm:p-8 rounded-3xl border border-emerald-800/50 backdrop-blur-sm hover:bg-emerald-800/60 transition-colors">
                <div className="h-14 w-14 bg-white text-emerald-700 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-emerald-900/50">🛡️</div>
                <h3 className="text-lg font-bold mb-3 text-white">Asuransi & Keamanan</h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-medium">
                  Keselamatan adalah harga mati. Peralatan rafting dan *outbound* kami standar internasional, dan setiap peserta di-cover oleh asuransi resmi (BUMIDA).
                </p>
              </div>
              <div className="bg-emerald-950/40 p-6 sm:p-8 rounded-3xl border border-emerald-800/50 backdrop-blur-sm hover:bg-emerald-800/60 transition-colors">
                <div className="h-14 w-14 bg-white text-emerald-700 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-emerald-900/50">🎯</div>
                <h3 className="text-lg font-bold mb-3 text-white">Penguasaan Medan</h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-medium">
                  Sebagai warga asli, kami tahu jadwal cuaca, jalur alternatif menghindari macet, dan penginapan terbaik. *Rundown* yang kami buat sangat presisi dan realistis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Bagian Testimoni (Bukti Sosial) */}
        <section className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                Kepercayaan Klien
              </h2>
              <p className="max-w-2xl mx-auto text-sm text-stone-500 font-medium">
                Kesan mereka setelah mempercayakan perjalanan berharganya kepada Go Pangalengan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { id: "1", quote: "Rundown rapi, tim responsif, dan aktivitasnya seru. Tour leader-nya sangat membantu panitia dari awal sampai acara selesai.", name: "Dinda K.", role: "Panitia Outing Kantor" },
                { id: "2", quote: "Pesan paket via WA langsung direspon. Harganya masuk akal karena tidak lewat perantara. View penginapannya juara!", name: "Budi H.", role: "Liburan Keluarga" },
                { id: "3", quote: "ATV-nya asik banget dan jalurnya panjang. Guide sangat memperhatikan safety, terutama untuk peserta wanita di rombongan kami.", name: "Rangga P.", role: "Rombongan Mahasiswa" },
                { id: "4", quote: "Offroad Land Rover-nya menantang dan worth it. Supirnya tangguh dan asik diajak ngobrol sepanjang jalan.", name: "Sari W.", role: "Wisatawan Luar Kota" }
              ].map((t) => (
                <article key={t.id} className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-1 mb-4">
                    <span className="text-emerald-500 text-sm">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-stone-600 italic font-medium mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3 border-t border-stone-100 pt-4">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-900 leading-none mb-1">{t.name}</p>
                      <p className="text-[10px] text-stone-400 font-medium uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION (CTA) TERAKHIR */}
        <section className="px-4 py-16 sm:py-20 sm:px-6 lg:px-8 border-t border-stone-200">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-stone-900 p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Dekorasi BG */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <span className="text-5xl block mb-6">💼</span>
              <h2 className="text-2xl font-bold sm:text-3xl mb-4 text-emerald-400">Siap Mendiskusikan Rencana Anda?</h2>
              <p className="text-stone-300 mb-8 max-w-xl mx-auto text-sm sm:text-base font-medium leading-relaxed">
                Percayakan rencana Outing, Gathering, atau liburan santai keluarga Anda pada tim lokal yang tepat. Hubungi kami sekarang untuk mendapatkan penawaran proposal terbaik.
              </p>
              <a
                href={generateWALink("Halo Go Pangalengan, saya sudah membaca profilnya. Saya tertarik untuk merencanakan liburan rombongan/keluarga...")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-emerald-500"
              >
                💬 Hubungi Kami via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}