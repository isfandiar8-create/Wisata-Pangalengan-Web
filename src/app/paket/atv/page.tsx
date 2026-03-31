"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ATVPage() {
  const [activeTab, setActiveTab] = useState("deskripsi");

  return (
    <div className="min-h-screen bg-zinc-50 pb-24 md:pb-0">
      {/* 1. Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-zinc-900">
        <Image src="/paket1.jpg" alt="ATV Pangalengan" fill className="object-cover opacity-80" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-2">
              <span className="inline-flex items-center rounded-md bg-amber-500/20 px-2.5 py-1 text-xs font-semibold text-amber-400 backdrop-blur-sm">
                ⛰️ Rute Eksklusif Kebun Teh
              </span>
              <h1 className="text-4xl font-extrabold text-white md:text-5xl">ATV Adventure</h1>
              <p className="text-emerald-300 font-medium">Terabas Jalur Berlumpur, Nikmati Udara Segar</p>
            </div>
            
            {/* Box Harga Desktop */}
            <div className="hidden shrink-0 rounded-2xl bg-white/10 p-5 backdrop-blur-md md:block border border-white/20 text-right">
              <p className="text-sm text-zinc-300 line-through">Rp 240.000</p>
              <p className="text-3xl font-bold text-white">Rp 175.000<span className="text-sm font-normal text-zinc-300">/unit</span></p>
              <a href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20booking%20ATV%20Pangalengan" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block w-full rounded-full bg-emerald-500 px-6 py-2.5 text-center text-sm font-bold text-white transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/30">
                Booking Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          
          {/* Kolom Kiri: Konten Utama */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Quick Stats Khusus ATV */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <div className="rounded-xl bg-white p-4 shadow-sm border border-zinc-100 text-center">
                <span className="text-2xl mb-1 block">🛣️</span>
                <p className="text-xs text-zinc-500">Kondisi Jalur</p>
                <p className="font-semibold text-zinc-900">Tanah, Batu, Lumpur</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-zinc-100 text-center">
                <span className="text-2xl mb-1 block">⏱️</span>
                <p className="text-xs text-zinc-500">Durasi</p>
                <p className="font-semibold text-zinc-900">± 45 - 60 Menit</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-zinc-100 text-center">
                <span className="text-2xl mb-1 block">👥</span>
                <p className="text-xs text-zinc-500">Kapasitas</p>
                <p className="font-semibold text-zinc-900">1 Unit = 1-2 Orang</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-zinc-100 text-center">
                <span className="text-2xl mb-1 block">📸</span>
                <p className="text-xs text-zinc-500">View Pemandangan</p>
                <p className="font-semibold text-zinc-900">Hutan & Kebun Teh</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-zinc-100">
              <div className="mb-6 flex gap-6 border-b border-zinc-100 pb-2 overflow-x-auto [scrollbar-width:none]">
                <button onClick={() => setActiveTab("deskripsi")} className={"pb-2 text-sm font-semibold transition-colors whitespace-nowrap " + (activeTab === "deskripsi" ? "border-b-2 border-emerald-500 text-emerald-600" : "text-zinc-500 hover:text-zinc-800")}>Deskripsi Aktivitas</button>
                <button onClick={() => setActiveTab("fasilitas")} className={"pb-2 text-sm font-semibold transition-colors whitespace-nowrap " + (activeTab === "fasilitas" ? "border-b-2 border-emerald-500 text-emerald-600" : "text-zinc-500 hover:text-zinc-800")}>Fasilitas & Include</button>
              </div>

              <div className="animate-in fade-in duration-300">
                {activeTab === "deskripsi" && (
                  <div className="space-y-4 text-sm leading-relaxed text-zinc-600">
                    <p>Bosan dengan jalan aspal? Saatnya mencoba mesin penggaruk tanah! Jalur ATV di Pangalengan menawarkan pengalaman unik melintasi sela-sela perkebunan teh yang eksotis dan hutan pinus yang lembab.</p>
                    <p>Trek ini dirancang khusus: sebagian lurus untuk Anda memacu kecepatan, sebagian berbatu untuk menguji ketangkasan, dan tentunya genangan lumpur yang menjadi syarat wajib sebuah petualangan <em>offroad</em>. Anda bisa mengendarainya sendirian (Single) untuk bermanuver bebas, atau berboncengan (Tandem) bersama pasangan/anak Anda. Seorang <em>guide</em> profesional akan membuka jalan di depan untuk memandu rute dan membantu Anda berfoto di <em>spot-spot</em> terbaik.</p>
                  </div>
                )}
                {activeTab === "fasilitas" && (
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-600">
                    <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> 1 Unit ATV (Bisa untuk 2 orang)</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Helm Safety & Sepatu Boots</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Guide Penunjuk Jalan (Riding)</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Track Khusus Kebun Teh/Pinus</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Air Mineral Tambahan</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Fasilitas Bilas Pascakegiatan</li>
                  </ul>
                )}
              </div>
            </div>

            {/* Galeri Action */}
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4">Momen Keseruan</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none]">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative h-48 w-72 shrink-0 snap-center rounded-2xl overflow-hidden bg-zinc-200">
                    <Image src="/paket1.jpg" alt={`Aksi ATV ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Upselling */}
          <div className="lg:sticky lg:top-8 lg:h-fit space-y-6">
            <h3 className="text-lg font-bold text-zinc-900">Gabungkan Serunya!</h3>
            
            <div className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm transition hover:shadow-md hover:border-emerald-300">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded bg-emerald-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Darat & Air</span>
              </div>
              <h4 className="font-bold text-zinc-900">Rafting + ATV (1 Hari)</h4>
              <p className="mt-1 text-xs text-zinc-600">Main lumpur pagi hari, bilas bersih di jeram siang hari. Sudah termasuk Makan Siang.</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-black text-emerald-600">Rp 300.000<span className="text-xs font-normal text-zinc-500">/pax</span></p>
                <Link href="/#petualangan" className="text-sm font-bold text-emerald-600 group-hover:underline">Pilih Paket</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white px-4 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-zinc-500 line-through">Rp 240.000</p>
            <p className="text-lg font-extrabold text-emerald-600">Rp 175.000</p>
          </div>
          <a href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20booking%20ATV" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-emerald-600 py-3 text-center text-sm font-bold text-white transition active:bg-emerald-700">
            Pesan Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}