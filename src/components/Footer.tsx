import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* KOLOM 1: BRANDING & DESKRIPSI */}
          <div className="col-span-1 md:col-span-1">
            
            {/* Pembungkus Flexbox dengan gap yang diperkecil (gap-1.5) */}
            <div className="flex items-center gap-1.5 mb-6">
              
              {/* Bingkai logo dibatasi ketat agar teks langsung nempel */}
              <div className="relative h-9 w-9 shrink-0">
                <Image 
                  src="/logo-putih.png" 
                  alt="Logo Icon" 
                  fill 
                  className="object-contain" 
                />
              </div>
              
              {/* Teks Sub Judul */}
              <span className="text-[1.35rem] font-extrabold text-white tracking-tight leading-none mt-0.5">
                Go Pangalengan
              </span>
            </div>

            <p className="text-sm leading-relaxed text-stone-400">
              Agen perjalanan wisata dan event organizer spesialis Pangalengan, Bandung Selatan. Kami merancang pengalaman petualangan yang tak terlupakan dengan layanan profesional dan transparan.
            </p>
          </div>

          {/* KOLOM 2: QUICK LINKS (Navigasi Internal) */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigasi</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-emerald-500 transition">Beranda</Link></li>
              <li><Link href="/artikel" className="hover:text-emerald-500 transition">Jurnal Perjalanan</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-emerald-500 transition">Profil Agensi</Link></li>
              <li><Link href="/custom-trip" className="hover:text-emerald-500 transition">Kalkulator Budget</Link></li>
            </ul>
          </div>

          {/* KOLOM 3: LAYANAN UNGGULAN (SEO Internal Linking) */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Layanan Kami</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#petualangan" className="hover:text-emerald-500 transition">Rafting Situ Cileunca</Link></li>
              <li><Link href="/#penginapan" className="hover:text-emerald-500 transition">Sewa Villa Rombongan</Link></li>
              <li><Link href="/#penginapan" className="hover:text-emerald-500 transition">Glamping Estetik</Link></li>
              <li><Link href="/paket/corporate" className="hover:text-emerald-500 transition">Corporate B2B Outing</Link></li>
            </ul>
          </div>

          {/* KOLOM 4: KONTAK & ALAMAT (NAP) */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Kontak & Lokasi</h4>
            <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
                <span className="text-emerald-500">📍</span>
                <a 
                    // Menggunakan link pencarian/lokasi standar agar mudah dipakai rute (Direction)
                    href="https://www.google.com/maps/search/?api=1&query=Go+Pangalengan+-+Paket+Wisata+%26+Rafting+Situ+Cileunca" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-emerald-500 transition underline decoration-stone-700 underline-offset-4"
                >
                  Pangalengan, Bandung Selatan,<br />Jawa Barat, Indonesia
                </a>
              </li>
  
              <li className="flex gap-3">
                <span className="text-emerald-500">📞</span>
                <span>+62 857-1707-5116</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500">✉️</span>
                <span>gopangalengan@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-tighter text-stone-500">
          <p>© 2026 Go Pangalengan. All Rights Reserved.</p>
          <div className="flex gap-6">
            {/* Link Instagram Aktif */}
            <a 
              href="https://www.instagram.com/gopangalengan/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition"
            >
              Instagram
            </a>
            
            {/* Link TikTok Aktif */}
            <a 
              href="https://www.tiktok.com/@go.pangalengan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition"
            >
              TikTok
            </a>
            
            {/* Link Facebook (Saya jadikan komentar/disembunyikan sementara. Hapus tanda komentarnya jika Anda sudah punya link Facebooknya) */}
            {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}