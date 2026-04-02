"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { generateWALink } from "@/config/contact";

// --- DATA MOCKUP PENGINAPAN (Nanti bisa diedit sesuka hati) ---
const dataPenginapan = [
  {
    id: "glamping-lakeside",
    nama: "Lakeside Glamping Premium",
    tipe: "Glamping",
    area: "Situ Cileunca",
    kapasitas: "2-4 Orang",
    jarak: "0 KM (Tepi Danau)",
    fasilitas: ["Water Heater", "Api Unggun", "BBQ Set", "Sarapan"],
    harga: "Mulai Rp 650.000/malam",
    image: "/destinasi.jpg" // Gunakan foto default dulu
  },
  {
    id: "villa-nimo",
    nama: "Villa Kayu Puncak Nini",
    tipe: "Villa",
    area: "Nimo Highland",
    kapasitas: "10-15 Orang",
    jarak: "2.5 KM ke Nimo Highland",
    fasilitas: ["3 Kamar Tidur", "Dapur Lengkap", "Karaoke", "Balkon View"],
    harga: "Mulai Rp 1.800.000/malam",
    image: "/paket1.jpg"
  },
  {
    id: "cabin-rahong",
    nama: "Pine Cabin Rahong",
    tipe: "Cottage",
    area: "Hutan Pinus Rahong",
    kapasitas: "4-6 Orang",
    jarak: "1 KM ke Arena Rafting",
    fasilitas: ["Kamar Mandi Dalam", "Teras Santai", "Akses Sungai", "Wifi"],
    harga: "Mulai Rp 850.000/malam",
    image: "/destinasi.jpg"
  },
  {
    id: "villa-cileunca",
    nama: "Grand Cileunca Family Villa",
    tipe: "Villa",
    area: "Situ Cileunca",
    kapasitas: "20-30 Orang",
    jarak: "5 Menit Jalan Kaki ke Danau",
    fasilitas: ["5 Kamar Tidur", "Aula Kumpul", "Biliar", "Halaman Luas"],
    harga: "Mulai Rp 3.500.000/malam",
    image: "/paket1.jpg"
  },
  {
    id: "glamping-cukul",
    nama: "Sunrise Hill Glamping",
    tipe: "Glamping",
    area: "Sunrise Cukul",
    kapasitas: "2 Orang",
    jarak: "1.5 KM ke Point Sunrise",
    fasilitas: ["Selimut Tebal", "Matras Premium", "Toilet Bersih", "Kopi Pagi"],
    harga: "Mulai Rp 450.000/malam",
    image: "/destinasi.jpg"
  }
];

export default function PenginapanPage() {
  // Sihir Filter Dinamis
  const [filterArea, setFilterArea] = useState("Semua");
  const [filterTipe, setFilterTipe] = useState("Semua");

  // Logika penyaringan data
  const filteredData = dataPenginapan.filter((item) => {
    const matchArea = filterArea === "Semua" || item.area === filterArea;
    const matchTipe = filterTipe === "Semua" || item.tipe === filterTipe;
    return matchArea && matchTipe;
  });

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] w-full bg-zinc-900">
        <Image src="/destinasi.jpg" alt="Penginapan Pangalengan" fill className="object-cover opacity-70" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h1 className="mb-2 text-3xl font-extrabold text-white sm:text-5xl">Staycation Pangalengan</h1>
            <p className="max-w-2xl text-base text-zinc-300 sm:text-lg">
              Dari tenda glamping di tepi danau hingga villa besar untuk keluarga. Temukan penginapan terbaik yang paling dekat dengan destinasi impian Anda.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Fitur Panel Filter Premium */}
        <div className="mb-10 rounded-2xl bg-white p-4 shadow-sm border border-zinc-200 lg:p-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Filter Berdasarkan Destinasi */}
            <div>
              <p className="mb-3 text-sm font-bold text-zinc-900">📍 Dekat Destinasi Apa?</p>
              <div className="flex flex-wrap gap-2">
                {["Semua", "Situ Cileunca", "Hutan Pinus Rahong", "Nimo Highland", "Sunrise Cukul"].map((area) => (
                  <button
                    key={area}
                    onClick={() => setFilterArea(area)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      filterArea === area 
                      ? "bg-emerald-600 text-white shadow-md" 
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Berdasarkan Jenis */}
            <div>
              <p className="mb-3 text-sm font-bold text-zinc-900">🏡 Jenis Penginapan</p>
              <div className="flex flex-wrap gap-2">
                {["Semua", "Glamping", "Villa", "Cottage"].map((tipe) => (
                  <button
                    key={tipe}
                    onClick={() => setFilterTipe(tipe)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      filterTipe === tipe 
                      ? "bg-emerald-600 text-white shadow-md" 
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                    }`}
                  >
                    {tipe}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hasil Pencarian / Grid Kartu */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900">
            {filteredData.length} Penginapan Ditemukan
          </h2>
        </div>

        {filteredData.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredData.map((item) => (
              <div key={item.id} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-zinc-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-300">
                {/* Foto & Label Tipe */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-200">
                  <div className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-emerald-700 shadow-sm backdrop-blur-md">
                    {item.tipe}
                  </div>
                  <Image src={item.image} alt={item.nama} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                
                {/* Konten Info */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-1 text-lg font-bold tracking-tight text-zinc-900 group-hover:text-emerald-600 transition-colors">
                    {item.nama}
                  </h3>
                  <p className="mb-4 text-xs font-medium text-amber-600 bg-amber-50 inline-block w-fit px-2 py-1 rounded-md">
                    📍 {item.jarak}
                  </p>

                  {/* Spesifikasi Ringkas */}
                  <div className="mb-4 grid grid-cols-2 gap-2 border-y border-zinc-100 py-3 text-xs font-medium text-zinc-600">
                    <div className="flex items-center gap-1.5"><span className="text-emerald-500 text-base">👥</span> {item.kapasitas}</div>
                    <div className="flex items-center gap-1.5"><span className="text-emerald-500 text-base">🗺️</span> {item.area}</div>
                  </div>

                  {/* Fasilitas */}
                  <div className="mb-6 flex-1">
                    <p className="mb-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Fasilitas Unggulan:</p>
                    <ul className="space-y-1.5 text-xs text-zinc-600">
                      {item.fasilitas.map((fas, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-emerald-500">✓</span> {fas}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Harga & Tombol */}
                  <div className="mt-auto border-t border-zinc-100 pt-4 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-medium text-zinc-400">Estimasi Harga</p>
                      <p className="text-sm font-bold text-emerald-600">{item.harga}</p>
                    </div>
                    <a 
  href={generateWALink(`Halo Pangalengan Trip, saya berencana menginap di ${item.nama} (Area: ${item.area}). Boleh minta informasi lengkap terkait ketersediaan dan harganya?`)}
  target="_blank" rel="noopener noreferrer"
  className="rounded-lg bg-zinc-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-600"
>
  Tanya WA
</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tampilan jika filter tidak menemukan hasil */
          <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 py-20 text-center">
            <span className="text-4xl block mb-3">🙈</span>
            <h3 className="text-lg font-bold text-zinc-900">Penginapan Tidak Ditemukan</h3>
            <p className="text-sm text-zinc-500 mt-1">Coba ubah kombinasi filter area dan jenis penginapan Anda.</p>
            <button onClick={() => {setFilterArea("Semua"); setFilterTipe("Semua");}} className="mt-4 text-sm font-semibold text-emerald-600 hover:underline">
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
}