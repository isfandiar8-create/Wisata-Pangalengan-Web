"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { masterPenginapan } from "@/data/penginapan";
import { generateWALink } from "@/config/contact";

export default function PenginapanKatalogPage() {
  const [activeKategori, setActiveKategori] = useState("Semua");

  // Filter Kategori Unik
  const kategoriList = ["Semua", ...Array.from(new Set(masterPenginapan.map(p => p.kategori)))];

  // Logika Filter
  const filteredPenginapan = masterPenginapan.filter(p => {
    if (activeKategori === "Semua") return true;
    return p.kategori === activeKategori;
  });

  // ─── KTP DIGITAL (SCHEMA) ITEMLIST UNTUK ETALASE PENGINAPAN ───
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Katalog Penginapan & Villa Go Pangalengan",
    "description": "Daftar lengkap penyewaan villa, homestay, glamping, dan cottage di Pangalengan.",
    "itemListElement": masterPenginapan.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.gopangalengan.id/penginapan/${item.id}`,
      "name": item.nama
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-stone-50 font-sans pb-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 text-center sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
          <Image src="/villa-wantea.jpg" alt="Katalog Penginapan Pangalengan" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 mx-auto max-w-3xl space-y-5">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-sm">
              Pilihan Penginapan <br className="hidden sm:block" />
              <span className="text-emerald-400 font-light italic tracking-wide mt-2 inline-block">Terbaik di Pangalengan</span>
            </h1>
            <p className="text-sm text-stone-200 sm:text-base font-medium max-w-xl mx-auto leading-relaxed drop-shadow-sm">
              Mulai dari villa klasik untuk keluarga besar, cottage romantis, hingga barak komunal untuk gathering perusahaan.
            </p>
          </div>
        </section>

        {/* KONTEN UTAMA */}
        <section className="px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            
            {/* FILTER KATEGORI */}
            <div className="flex flex-col items-center mb-10 w-full">
              <div className="flex items-center gap-3 mb-5 w-full max-w-xs sm:max-w-sm">
                <div className="h-[1px] bg-stone-200 flex-1 rounded-full"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 shrink-0">
                  Filter Kategori
                </span>
                <div className="h-[1px] bg-stone-200 flex-1 rounded-full"></div>
              </div>
              
              <div className="inline-flex bg-white p-1.5 rounded-2xl sm:rounded-full border border-stone-200 shadow-sm overflow-x-auto max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {kategoriList.map((kat) => (
                  <button
                    key={kat}
                    onClick={() => setActiveKategori(kat)}
                    className={`relative shrink-0 px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                      activeKategori === kat
                        ? "bg-emerald-600 text-white shadow-md transform scale-[1.02]"
                        : "bg-transparent text-stone-500 hover:text-emerald-600 hover:bg-stone-50"
                    }`}
                  >
                    {kat}
                  </button>
                ))}
              </div>
            </div>

            {/* GRID PENGINAPAN */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPenginapan.map((item) => (
                <Link 
                  href={`/penginapan/${item.id}`} 
                  key={item.id}
                  className="group bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-400 overflow-hidden transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.nama} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.label && (
                      <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-lg shadow-md tracking-wider">
                        {item.label}
                      </span>
                    )}
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        {item.kategori}
                      </span>
                      <span className="text-[11px] font-bold text-stone-500 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        {item.kapasitas}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-1">{item.nama}</h3>
                    <p className="text-xs text-stone-500 line-clamp-2 mb-4 flex-1">{item.deskripsi}</p>
                    
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase font-bold tracking-wider mb-0.5">Mulai Dari</span>
                        <span className="text-emerald-700 font-black text-lg">{item.hargaWeekday}</span>
                      </div>
                      <span className="bg-stone-50 text-stone-600 group-hover:bg-emerald-600 group-hover:text-white border border-stone-200 group-hover:border-emerald-600 text-xs font-bold px-4 py-2 rounded-xl transition-colors">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* FLOATING ACTION BUTTON */}
        <a 
          href={generateWALink("Halo Go Pangalengan, saya butuh rekomendasi penginapan yang cocok nih.")} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12.013 2.015c-5.506 0-9.988 4.473-9.99 9.98a9.964 9.964 0 001.332 5.01L2 22l5.148-1.352a9.97 9.97 0 004.865 1.26h.004c5.503 0 9.985-4.475 9.987-9.983 0-2.668-1.04-5.176-2.926-7.065A9.916 9.916 0 0012.013 2.015zM12.018 20c-1.545 0-3.056-.416-4.382-1.202l-.314-.187-3.256.853.867-3.174-.205-.327a8.318 8.318 0 01-1.274-4.444c.002-4.606 3.75-8.354 8.358-8.356 2.235.001 4.335.872 5.914 2.454a8.336 8.336 0 012.449 5.912c-.002 4.607-3.748 8.354-8.354 8.354zm4.584-6.262c-.251-.126-1.488-.736-1.718-.82-.23-.085-.398-.126-.565.126-.168.252-.647.82-.793.988-.146.168-.293.189-.544.063-.251-.126-1.06-.39-2.018-1.196-.745-.626-1.25-1.4-1.396-1.652-.146-.252-.016-.388.11-.514.113-.112.251-.293.377-.44.126-.146.168-.252.251-.419.084-.168.042-.315-.021-.44-.063-.126-.565-1.363-.774-1.867-.203-.491-.41-.424-.565-.432-.146-.008-.314-.01-.482-.01s-.44.063-.67.315c-.23.252-.88 8.61 10.364 8.61 10.364zm0 0c-1.11 1.05-2.908 1.408-4.08 1.408-1.504 0-3.41-.532-4.836-1.567l-3.21-.634z" />
          </svg>
        </a>
      </div>
    </>
  );
}