"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { generateWALink } from "@/config/contact";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek transparan saat di puncak, menjadi solid saat di-scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg transition-transform group-hover:scale-105">
            <span className="text-sm font-black">PT</span>
          </div>
          <span className={`font-bold tracking-tight transition-colors ${isScrolled ? "text-stone-900" : "text-white"}`}>
            Go Pangalengan
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-bold ${isScrolled ? "text-stone-600" : "text-white/90"}`}>
          <Link href="/" className="hover:text-emerald-500 transition">Beranda</Link>
          
          {/* Dropdown Katalog */}
          <div className="group relative py-2 cursor-pointer">
            <span className="flex items-center gap-1 hover:text-emerald-500 transition">
              Katalog Wisata ▾
            </span>
            <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
              <div className="rounded-2xl bg-white p-2 shadow-xl ring-1 ring-stone-900/5 flex flex-col gap-1">
                <Link href="/#petualangan" className="px-4 py-2 rounded-xl text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 transition">Petualangan & Game</Link>
                <Link href="/#penginapan" className="px-4 py-2 rounded-xl text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 transition">Sewa Penginapan</Link>
                <Link href="/destinasi" className="px-4 py-2 rounded-xl text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 transition">Spot Destinasi Ikonik</Link>
              </div>
            </div>
          </div>

          {/* Dropdown Layanan Eksekutif */}
          <div className="group relative py-2 cursor-pointer">
            <span className="flex items-center gap-1 hover:text-emerald-500 transition">
              Layanan Khusus ▾
            </span>
            <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
              <div className="rounded-2xl bg-white p-2 shadow-xl ring-1 ring-stone-900/5 flex flex-col gap-1">
                <Link href="/paket/corporate" className="px-4 py-2 rounded-xl text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 transition">Corporate / B2B Outing</Link>
                <Link href="/custom-trip" className="px-4 py-2 rounded-xl text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 transition">Kalkulator Custom Trip</Link>
              </div>
            </div>
          </div>

          <Link href="/tentang-kami" className="hover:text-emerald-500 transition">Tentang Kami</Link>
        </div>

        {/* Tombol Concierge Desktop */}
        <div className="hidden md:block">
          <a
            href={generateWALink("Halo Concierge Go Pangalengan, saya ingin bertanya seputar layanan pendampingan liburan.")}
            target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all shadow-md hover:-translate-y-0.5 ${
              isScrolled ? "bg-stone-900 text-white hover:bg-emerald-600" : "bg-white text-stone-900 hover:bg-emerald-50"
            }`}
          >
            <span>🛵</span> Layanan antar
          </a>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-full ${isScrolled ? "text-stone-900 bg-stone-100" : "text-white bg-white/20"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Menu Mobile Dropdown (Terbuka) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-2xl px-4 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest border-b pb-2">Menu Utama</p>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-stone-800 text-lg">Beranda</Link>
          <Link href="/tentang-kami" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-stone-800 text-lg">Profil Agensi</Link>
          
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest border-b pb-2 mt-4">Katalog & Layanan</p>
          <Link href="/#petualangan" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-emerald-700">Ragam Petualangan</Link>
          <Link href="/#penginapan" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-emerald-700">Sewa Penginapan</Link>
          <Link href="/paket/corporate" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-emerald-700">Paket Corporate B2B</Link>
          <Link href="/custom-trip" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-emerald-700">Custom Trip</Link>

          <a href={generateWALink("Halo Tim Go Pangalengan!")} target="_blank" className="mt-6 bg-stone-900 text-white rounded-xl py-3 text-center font-bold">
            Chat WhatsApp 24/7
          </a>
        </div>
      )}
    </nav>
  );
}