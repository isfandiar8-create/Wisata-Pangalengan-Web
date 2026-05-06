"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { generateWALink } from "@/config/contact";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // STATE BARU: Mengontrol dropdown mana yang sedang terbuka
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Ref untuk mendeteksi klik di luar navbar
  const navRef = useRef<HTMLElement>(null);

  // Efek transparan saat di puncak, menjadi solid saat di-scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efek untuk menutup dropdown jika pengguna mengklik area di luar menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fungsi khusus untuk buka-tutup dropdown saat di-tap/klik
  const toggleDropdown = (menuName: string) => {
    if (activeDropdown === menuName) {
      setActiveDropdown(null); // Tutup jika yang di-tap adalah menu yang sedang terbuka
    } else {
      setActiveDropdown(menuName); // Buka menu yang baru di-tap
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* ─── LOGO BRANDING ─── */}
        <Link href="/" onClick={() => setActiveDropdown(null)} className="group flex items-center gap-2">
          <div className="relative h-8 w-32 sm:h-10 sm:w-40 transition-transform duration-300 hover:scale-105">
            <Image 
              src={isScrolled ? "/logo-gelap.png" : "/logo-putih.png"} 
              alt="Logo Go Pangalengan"
              fill
              className="object-contain object-left transition-opacity duration-300" 
              priority
            />
          </div>
        </Link>

        {/* ─── STICKY CTA MOBILE ─── */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden transition-all duration-300 ${
          isScrolled ? "opacity-100 visible" : "opacity-0 invisible translate-y-2"
        }`}>
          <a
            href={generateWALink("Halo Tim Go Pangalengan, saya butuh rekomendasi paket liburan yang pas untuk saya.")}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-wide shadow-md hover:bg-emerald-700 active:scale-95 transition-all"
          >
            <span>💬</span> Tanya Admin
          </a>
        </div>
        
        {/* ─── MENU DESKTOP & TABLET ─── */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-bold ${isScrolled ? "text-stone-700" : "text-white/95"}`}>
          <Link href="/" onClick={() => setActiveDropdown(null)} className="hover:text-emerald-500 transition">Beranda</Link>
          
          {/* 1. Dropdown Katalog (Sistem Tap/Klik) */}
          <div className="relative py-2">
            <button 
              onClick={() => toggleDropdown("katalog")}
              className="flex items-center gap-1.5 hover:text-emerald-500 transition outline-none"
            >
              Katalog 
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 opacity-70 transition-transform duration-300 ${activeDropdown === "katalog" ? "rotate-180 text-emerald-500" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`absolute top-full left-0 mt-2 w-48 transition-all duration-300 transform origin-top ${
              activeDropdown === "katalog" ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
            }`}>
              <div className="rounded-2xl bg-white p-2 shadow-xl border border-stone-100 flex flex-col gap-1">
                <Link href="/#destinasi" onClick={() => setActiveDropdown(null)} className="px-4 py-2.5 rounded-xl text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 font-bold transition">Destinasi</Link>
                <Link href="/katalog-wisata" onClick={() => setActiveDropdown(null)} className="px-4 py-2.5 rounded-xl text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 font-bold transition">Wisata</Link>
                <Link href="/penginapan" onClick={() => setActiveDropdown(null)} className="px-4 py-2.5 rounded-xl text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 font-bold transition">Penginapan</Link>
              </div>
            </div>
          </div>

          {/* 2. Dropdown Layanan (Sistem Tap/Klik) */}
          <div className="relative py-2">
            <button 
              onClick={() => toggleDropdown("layanan")}
              className="flex items-center gap-1.5 hover:text-emerald-500 transition outline-none"
            >
              Layanan 
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 opacity-70 transition-transform duration-300 ${activeDropdown === "layanan" ? "rotate-180 text-emerald-500" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`absolute top-full left-0 mt-2 w-52 transition-all duration-300 transform origin-top ${
              activeDropdown === "layanan" ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
            }`}>
              <div className="rounded-2xl bg-white p-2 shadow-xl border border-stone-100 flex flex-col gap-1">
                <Link href="/custom-trip" onClick={() => setActiveDropdown(null)} className="px-4 py-2.5 rounded-xl text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 font-bold transition">Custom Trip</Link>
                <Link href="/katalog-wisata#corporate" onClick={() => setActiveDropdown(null)} className="px-4 py-2.5 rounded-xl text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 font-bold transition">Corporate / B2B</Link>
                <a href={generateWALink("Halo, saya ingin bertanya tentang Layanan Antar Jemput lokasi wisata.")} target="_blank" onClick={() => setActiveDropdown(null)} className="px-4 py-2.5 rounded-xl text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 font-bold transition">Layanan Antar</a>
              </div>
            </div>
          </div>

          <Link href="/tentang-kami" onClick={() => setActiveDropdown(null)} className="hover:text-emerald-500 transition">Tentang Kami</Link>
          <Link href="/artikel" onClick={() => setActiveDropdown(null)} className="hover:text-emerald-500 transition text-emerald-400">Jurnal</Link>
        </div>

        {/* ─── TOMBOL CTA DESKTOP ─── */}
        <div className="hidden md:block">
          <a
            href={generateWALink("Halo Go Pangalengan, saya ingin konsultasi rencana liburan saya.")}
            target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all shadow-md hover:-translate-y-0.5 ${
              isScrolled ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg" : "bg-white text-emerald-700 hover:bg-emerald-50"
            }`}
          >
            <span>💬</span> Konsultasi Gratis
          </a>
        </div>

        {/* ─── TOMBOL HAMBURGER MOBILE ─── */}
        <button 
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setActiveDropdown(null); // Tutup dropdown desktop jika terlanjur terbuka
          }}
          className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? "text-stone-900 bg-stone-100" : "text-white bg-white/20"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* ─── MENU MOBILE ─── */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-2xl px-5 py-6 flex flex-col gap-5 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-300">
          
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-100 pb-2">Menu Utama</p>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-stone-800 text-base">Beranda</Link>
            <Link href="/tentang-kami" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-stone-800 text-base">Tentang Kami</Link>
            <Link href="/artikel" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-stone-800 text-base">Jurnal Perjalanan</Link>
          </div>
          
          <div className="flex flex-col gap-3 mt-2">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-100 pb-2">Katalog</p>
            <Link href="/#destinasi" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-emerald-600 text-base">Destinasi</Link>
            <Link href="/katalog-wisata" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-emerald-600 text-base">Wisata</Link>
            <Link href="/penginapan" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-emerald-600 text-base">Penginapan</Link>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-100 pb-2">Layanan Kami</p>
            <Link href="/custom-trip" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-emerald-600 text-base">Custom Trip</Link>
            <Link href="/katalog-wisata#corporate" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-emerald-600 text-base">Corporate / B2B</Link>
            <a href={generateWALink("Halo, saya ingin bertanya tentang Layanan Antar Jemput lokasi wisata.")} onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-emerald-600 text-base">Layanan Antar</a>
          </div>

          <a href={generateWALink("Halo Tim Go Pangalengan, saya butuh konsultasi trip.")} target="_blank" className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl py-3.5 text-center font-black shadow-lg shadow-emerald-600/30 transition-all">
            Konsultasi WhatsApp 24/7
          </a>
        </div>
      )}
    </nav>
  );
}