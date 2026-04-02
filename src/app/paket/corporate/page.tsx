"use client";

import Image from "next/image";
import Link from "next/link";
// Mengambil alat sihir pembuat link WA otomatis
import { generateWALink } from "@/config/contact";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      {/* 1. Hero Section Premium B2B */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-zinc-900">
        <Image src="/paket3.jpg" alt="Corporate Gathering Pangalengan" fill className="object-cover opacity-50" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-4 text-center md:text-left">
            <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 backdrop-blur-sm border border-emerald-500/30">
              💼 Layanan Corporate & B2B
            </span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
              Corporate Outing & <br className="hidden md:block" />
              <span className="text-emerald-400">Team Building</span>
            </h1>
            <p className="max-w-2xl text-base text-zinc-300 sm:text-lg md:mx-0 mx-auto">
              Tinggalkan sejenak rutinitas kantor. Bangun solidaritas, segarkan pikiran, dan ciptakan sinergi baru di tengah alam Pangalengan. Kami urus semuanya, dari A sampai Z.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Nilai Plus untuk Meyakinkan HRD / Panitia */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-md border border-zinc-100 transition hover:-translate-y-1">
            <span className="text-3xl mb-3 block">📋</span>
            <h3 className="font-bold text-zinc-900">Rundown Terstruktur</h3>
            <p className="mt-2 text-sm text-zinc-600">Jadwal diatur sangat presisi oleh tim fasilitator kami. Panitia/HRD cukup duduk manis dan ikut menikmati acara.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md border border-zinc-100 transition hover:-translate-y-1">
            <span className="text-3xl mb-3 block">🤝</span>
            <h3 className="font-bold text-zinc-900">Master Game Bersertifikat</h3>
            <p className="mt-2 text-sm text-zinc-600">Bukan sekadar main-main. Games dirancang khusus dengan pendekatan psikologis untuk meningkatkan *leadership* tim.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md border border-zinc-100 transition hover:-translate-y-1">
            <span className="text-3xl mb-3 block">📸</span>
            <h3 className="font-bold text-zinc-900">Dokumentasi Premium</h3>
            <p className="mt-2 text-sm text-zinc-600">Kualitas konten HD. Tersedia fotografer khusus dan videografi drone untuk *after-movie* *company profile* Anda.</p>
          </div>
        </div>
      </section>

      {/* 3. Pilihan Paket Corporate */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">Pilih Skala Acara Anda</h2>
          <p className="mt-2 text-sm text-zinc-600">Harga dapat disesuaikan kembali (Custom) berdasarkan jumlah peserta dan kebutuhan menu makan.</p>
        </div>
        
        <div className="space-y-8">
          
          {/* Paket 1: 1 Hari */}
          <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm border border-zinc-200 md:flex-row hover:shadow-md transition">
            <div className="relative h-64 md:h-auto md:w-2/5">
              <Image src="/paket3.jpg" alt="Outing 1 Hari" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6 md:w-3/5 md:p-10">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">One Day Trip</span>
                <span className="text-lg font-black text-emerald-600">Rp 295.000<span className="text-xs font-normal text-zinc-500">/pax</span></span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-900">Outing & Refresh 1 Hari</h3>
              <p className="mb-6 text-sm text-zinc-600">Cocok untuk pelarian singkat tanpa menginap. Bebas pilih 1 aktivitas petualangan utama (Rafting / ATV / Paintball) ditambah makan siang prasmanan.</p>
              <ul className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-zinc-600 border-t border-zinc-100 pt-5">
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> 1 Petualangan Pilihan</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Makan Siang Prasmanan</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> 1x Coffee Break & Snack</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Pemandu / Guide</li>
              </ul>
              {/* Tombol WA Dinamis */}
              <a href={generateWALink("Halo Pangalengan Trip, kami dari [Nama Perusahaan / Organisasi] tertarik dengan Paket Corporate One Day Trip. Boleh dikirimkan proposal penawarannya?")} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600">
                Minta Proposal Penawaran
              </a>
            </div>
          </div>

          {/* Paket 2: Team Building */}
          <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm border border-zinc-200 md:flex-row-reverse hover:shadow-md transition">
            <div className="relative h-64 md:h-auto md:w-2/5">
              <Image src="/paket3.jpg" alt="Team Building" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6 md:w-3/5 md:p-10">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Intensive Program</span>
                <span className="text-lg font-black text-emerald-600">Rp 450.000<span className="text-xs font-normal text-zinc-500">/pax</span></span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-900">Capacity & Team Building</h3>
              <p className="mb-6 text-sm text-zinc-600">Fokus utama pada pengembangan SDM perusahaan Anda. Dilengkapi dengan sesi *fun games*, *problem solving*, pembentukan karakter, dan aktivitas alam.</p>
              <ul className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-zinc-600 border-t border-zinc-100 pt-5">
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Master Game Profesional</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Peralatan Team Building Full</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Sound System Standar</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Spanduk / Banner Acara</li>
              </ul>
              {/* Tombol WA Dinamis */}
              <a href={generateWALink("Halo Pangalengan Trip, kami tertarik dengan program Team Building / Capacity Building. Bisa kirimkan detail modul games dan biayanya?")} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600">
                Diskusikan Program
              </a>
            </div>
          </div>

          {/* Paket 3: Menginap 2D1N (Diberi gaya lebih menonjol) */}
          <div className="flex flex-col overflow-hidden rounded-3xl border-2 border-emerald-500 bg-white shadow-xl md:flex-row relative hover:-translate-y-1 transition duration-300">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl z-10 uppercase tracking-wider">
              ⭐ Paling Direkomendasikan
            </div>
            <div className="relative h-64 md:h-auto md:w-2/5">
              <Image src="/paket3.jpg" alt="Corporate 2D1N" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6 md:w-3/5 md:p-10">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Staycation & Outing</span>
                <span className="text-lg font-black text-emerald-600">Rp 950.000<span className="text-xs font-normal text-zinc-500">/pax</span></span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-900">Corporate Gathering 2 Hari 1 Malam</h3>
              <p className="mb-6 text-sm text-zinc-600">Paket paripurna. Sinergi sempurna antara rapat tahunan, team building, gala dinner (Kambing Guling/BBQ), dan ditutup dengan wisata petualangan esok harinya.</p>
              <ul className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-zinc-600 border-t border-zinc-100 pt-5">
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Penginapan Private (Villa/Glamping)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> 3x Makan Besar & 2x Coffee Break</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Malam Keakraban & Api Unggun</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Rafting / Paintball / Offroad</li>
              </ul>
              {/* Tombol WA Dinamis (Premium) */}
              <a href={generateWALink("Halo Pangalengan Trip, kami ingin merencanakan Corporate Gathering 2D1N. Mohon info ketersediaan tanggal, pilihan penginapan, dan penawaran lengkapnya.")} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center justify-center rounded-xl bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-500 shadow-lg shadow-emerald-500/30">
                Pesan Jadwal Sekarang
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}