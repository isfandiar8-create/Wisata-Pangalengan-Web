"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // Ini adalah "Saklar Memori" untuk HP yang kita bahas tadi
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Bagian Kiri: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              Pangalengan <span className="text-emerald-400">Trip</span>
            </Link>
          </div>

          {/* Bagian Tengah & Kanan: Menu Desktop (Sembunyi di HP) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/#destinasi" className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                Destinasi
              </Link>
              <Link href="/#petualangan" className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                Paket Wisata
              </Link>
              <Link href="/paket-custom" className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                Custom Trip
              </Link>
              <a
                // Ingat untuk mengganti nomor 628... di bawah dengan nomor asli Anda
                href="https://wa.me/6281234567890?text=Halo%20Pangalengan%20Trip%2C%20Saya%20berencana%20untuk%20berlibur%20ke%20Pangalengan.%20Tolong%20beri%20tahu%20paket%20wisata%20sekaligus%20paket%20custom%20trip"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                Tanya WhatsApp
              </a>
            </div>
          </div>

          {/* Tombol Saklar Hamburger untuk Layar HP */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} // Ini perintah untuk membalik saklar (Mati -> Hidup)
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Buka menu utama</span>
              {!isOpen ? (
                // Ikon Garis Tiga (Burger) saat tertutup
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                // Ikon Silang (X) saat terbuka
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Menu Dropdown untuk HP (Hanya muncul jika isOpen bernilai True) */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-900" id="mobile-menu">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <Link href="/#destinasi" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-3 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white">
              Destinasi
            </Link>
            <Link href="/#petualangan" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-3 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white">
              Paket Wisata
            </Link>
            <Link href="/paket-custom" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-3 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white">
              Custom Trip
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Pangalengan%20Trip%2C%20Saya%20berencana%20untuk%20berlibur%20ke%20Pangalengan.%20Tolong%20beri%20tahu%20paket%20wisata%20sekaligus%20paket%20custom%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full rounded-md bg-emerald-500 px-3 py-3 text-center text-base font-bold text-white hover:bg-emerald-600"
            >
              Tanya WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}