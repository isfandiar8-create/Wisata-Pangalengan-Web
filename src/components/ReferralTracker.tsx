// src/components/ReferralTracker.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ReferralTracker() {
  const searchParams = useSearchParams();

  // 1. TUGAS PERTAMA: Menyimpan Kode Referal dari URL ke Memori
  useEffect(() => {
    const refCode = searchParams.get("ref");
    if (refCode) {
      localStorage.setItem("gp_referral", refCode.toUpperCase());
    }
  }, [searchParams]);

  // 2. TUGAS KEDUA: Mencegat Semua Tombol WA di Seluruh Website
  useEffect(() => {
    const handleWaClick = (e: MouseEvent) => {
      // Cari tahu apakah elemen yang diklik adalah sebuah link (tag <a>)
      const target = (e.target as HTMLElement).closest('a');
      
      // Jika itu link dan mengarah ke domain WhatsApp (wa.me)
      if (target && target.href.includes('wa.me')) {
        const refCode = localStorage.getItem("gp_referral");
        
        // Jika di memori HP tamu ada kode referal
        if (refCode) {
          e.preventDefault(); // Tahan dulu, jangan langsung pindah halaman
          
          try {
            // Ambil URL WA aslinya dan pisahkan teks pesannya
            const url = new URL(target.href);
            const text = url.searchParams.get('text') || '';
            
            // Cek agar tidak tertulis ganda (sesuaikan emojinya)
            if (!text.includes('[🎟️')) {
              // \n\n\n akan memberikan jarak 2 baris kosong yang lega
              const newText = `${text}\n\n\n[🎟️ Kode Diskon: ${refCode}]`;
              url.searchParams.set('text', newText);
            }
            
            // Lanjutkan buka WhatsApp di tab baru dengan pesan yang sudah disuntik
            window.open(url.toString(), '_blank');
          } catch (error) {
            console.error("Gagal menyuntik referal", error);
            // Kalau gagal, tetap buka link WA aslinya (Failsafe)
            window.open(target.href, '_blank');
          }
        }
      }
    };

    // Pasang "CCTV" Pencegat ini di seluruh dokumen web
    document.addEventListener('click', handleWaClick);
    
    // Bersihkan CCTV jika pengunjung keluar dari website
    return () => document.removeEventListener('click', handleWaClick);
  }, []);

  return null;
}