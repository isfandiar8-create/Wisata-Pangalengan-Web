import Image from "next/image";
import Link from "next/link";

// ─── DATA ARTIKEL SEO GO PANGALENGAN ─────────────────────────────────────────────
const daftarArtikel = [
  {
    slug: "estimasi-biaya-liburan-pangalengan",
    judul: "Estimasi Biaya Liburan ke Pangalengan 2026: Pilih Gaya Hemat atau Eksklusif?",
    kategori: "Panduan Budget",
    tanggal: "16 April 2026",
    waktuBaca: "4 Menit Baca",
    image: "/cileunca.jpg", // Pastikan gambar ini ada di folder public
    excerpt: "Berapa budget yang harus disiapkan untuk ke Pangalengan? Temukan rincian biaya lengkap untuk gaya liburan ala backpacker hingga layanan VIP korporat.",
  },
  {
    slug: "rekomendasi-villa-kapasitas-besar-pangalengan",
    judul: "5 Villa Kapasitas Besar di Pangalengan untuk Makrab & Gathering Kantor",
    kategori: "Info Penginapan",
    tanggal: "14 April 2026",
    waktuBaca: "5 Menit Baca",
    image: "/villa-wantea.jpg", // Ganti dengan aset gambar Anda jika ada
    excerpt: "Mencari penginapan untuk 30 hingga 50 orang memang gampang-gampang susah. Ini daftar villa terbaik dengan fasilitas aula dan area BBQ.",
  },
  {
    slug: "panduan-aman-rafting-situ-cileunca",
    judul: "Rafting Situ Cileunca: Panduan Keamanan, Usia Minimal, dan Tips Pemula",
    kategori: "Tips Petualangan",
    tanggal: "10 April 2026",
    waktuBaca: "4 Menit Baca",
    image: "/rafting.jpg", // Ganti dengan aset gambar Anda jika ada
    excerpt: "Ingin mencoba arung jeram tapi belum punya pengalaman? Ketahui prosedur keamanan standar dan persiapan wajib sebelum menantang arus Palayangan.",
  },
  {
    slug: "spot-foto-sunrise-pangalengan",
    judul: "Sunrise Point Cukul vs Wayang Windu: Mana Spot Foto Estetik Terbaik?",
    kategori: "Destinasi Ikonik",
    tanggal: "05 April 2026",
    waktuBaca: "3 Menit Baca",
    image: "/hero1.jpg", // Ganti dengan aset gambar Anda jika ada
    excerpt: "Dua primadona bagi para pemburu matahari terbit di Bandung Selatan. Mari bandingkan akses jalan, harga tiket masuk, dan lanskap pemandangannya.",
  },
  {
    slug: "perbedaan-glamping-dan-camping-pangalengan",
    judul: "Perbedaan Glamping dan Camping Biasa di Pangalengan: Mana yang Cocok?",
    kategori: "Panduan Liburan",
    tanggal: "02 April 2026",
    waktuBaca: "4 Menit Baca",
    image: "/glamping-sagaya.jpg", // Ganti dengan aset gambar Anda jika ada
    excerpt: "Bingung memilih antara tidur organik di tenda biasa atau mencoba kenyamanan glamour camping? Kami bedah tuntas perbedaan fasilitasnya untuk Anda.",
  }
];

export default function ArtikelPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 pb-24 sm:pb-28 font-sans">
      
      {/* HEADER SECTION */}
      <div className="bg-stone-900 pt-14 pb-20 sm:pt-16 sm:pb-24 px-5 sm:px-6 rounded-b-[2rem] sm:rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-stone-900/90"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <Link href="/" className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white mb-2 sm:mb-4 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </Link>
          <h1 className="text-2xl sm:text-5xl font-black text-white tracking-tight">Jurnal Perjalanan</h1>
          <p className="text-stone-300 text-xs sm:text-base font-medium max-w-xl mx-auto leading-relaxed px-2">
            Temukan panduan lokal, tips liburan hemat, dan inspirasi destinasi terbaik di Pangalengan yang ditulis langsung oleh tim ahli kami.
          </p>
        </div>
      </div>

      {/* LIST ARTIKEL BERBARIS (ROW FORMAT) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-20">
        <div className="flex flex-col gap-4 sm:gap-6">
          
          {daftarArtikel.map((artikel) => (
            <Link 
              href={`/artikel/${artikel.slug}`} 
              key={artikel.slug}
              className="group flex items-center sm:items-start gap-4 sm:gap-6 bg-white p-3 sm:p-5 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300"
            >
              {/* Gambar Kotak Proporsional */}
              <div className="relative w-24 h-24 sm:w-64 sm:h-44 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                <Image 
                  src={artikel.image} 
                  alt={artikel.judul} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Konten Teks di Kanan */}
              <div className="flex-1 flex flex-col justify-center sm:justify-start h-full py-1 sm:py-2">
                
                {/* Meta Info Atas */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-3 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">{artikel.kategori}</span>
                  <span className="hidden sm:inline-block opacity-50">•</span>
                  <span className="hidden sm:inline-block">{artikel.tanggal}</span>
                </div>

                {/* Judul Artikel */}
                <h2 className="text-sm sm:text-xl font-bold text-stone-800 leading-snug sm:leading-tight mb-1 sm:mb-2 group-hover:text-emerald-600 transition-colors line-clamp-3 sm:line-clamp-2">
                  {artikel.judul}
                </h2>

                {/* Deskripsi Singkat */}
                <p className="hidden sm:block text-sm text-stone-500 font-medium leading-relaxed line-clamp-2 mb-4">
                  {artikel.excerpt}
                </p>
                
                {/* Waktu Baca */}
                <div className="mt-auto pt-1 sm:pt-0 flex items-center gap-1.5 text-[9px] sm:text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {artikel.waktuBaca}
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>

    </div>
  );
}