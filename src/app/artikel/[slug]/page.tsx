import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { masterArtikel } from "@/data/artikel";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const artikel = masterArtikel.find((item) => item.slug === resolvedParams.slug);
  
  if (!artikel) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: artikel.judul,
    description: artikel.excerpt,
    openGraph: {
      title: `${artikel.judul} | Go Pangalengan`,
      description: artikel.excerpt,
      images: [{ url: artikel.image, width: 800, height: 600, alt: artikel.judul }],
    },
  };
}

export default async function DetailArtikel({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;

  // Pencarian menggunakan masterArtikel
  const artikelAktif = masterArtikel.find((item) => item.slug === resolvedParams.slug);

  if (!artikelAktif) {
    notFound();
  }

  // ─── KODE SCHEMA MARKUP (JSON-LD) UNTUK ARTIKEL ───
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": artikelAktif.judul,
    "description": artikelAktif.excerpt,
    "image": [
      `https://www.gopangalengan.id${artikelAktif.image}`
    ],
    "datePublished": artikelAktif.tanggal, 
    "author": [{
      "@type": "Organization",
      "name": "Tim Go Pangalengan",
      "url": "https://www.gopangalengan.id"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Go Pangalengan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.gopangalengan.id/logo-go-pangalengan.png"
      }
    }
  };

  // Tampilkan isi artikelnya secara dinamis
  return (
    <>
      {/* SUNTIKAN JSON-LD KE DALAM HALAMAN */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-stone-50 pb-20">
        
        {/* 1. HEADER SECTION */}
        <div className="bg-stone-900 pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-stone-900/90"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Tombol Kembali */}
            <Link href="/artikel" className="inline-flex items-center text-sm font-bold text-emerald-400 mb-6 hover:text-emerald-300 hover:gap-2 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
              Kembali ke Jurnal
            </Link>
            
            {/* Judul Artikel */}
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
              {artikelAktif.judul}
            </h1>

            {/* Meta Penulis */}
            <div className="flex items-center gap-4 border-b border-stone-700/50 pb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg">GP</div>
              <div>
                <p className="text-sm font-bold text-stone-200">Tim Go Pangalengan</p>
                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">{artikelAktif.tanggal} • {artikelAktif.waktuBaca}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. GAMBAR UTAMA */}
        <div className="max-w-6xl mx-auto px-4 mt-8 sm:mt-12 relative z-20 mb-12">
          <div className="relative h-[300px] sm:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-xl bg-stone-100">
            <Image src={artikelAktif.image} alt={artikelAktif.judul} fill className="object-cover object-center" />
          </div>
        </div>

        {/* 3. KONTEN TULISAN DINAMIS */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          {/* Konten Text dari Database */}
          <div className="prose prose-stone prose-lg max-w-none">
            {artikelAktif.content}
          </div>
          
          {/* Box Promo Di Tengah Artikel */}
          <div className="mt-16 bg-emerald-900 rounded-[2rem] p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-2">Tertarik Menjelajah Pangalengan?</h3>
              <p className="text-emerald-100 text-sm">Konsultasikan rencana trip atau pemesanan villa Anda dengan admin kami.</p>
            </div>
            <Link href="/custom-trip" className="bg-white text-emerald-900 px-8 py-4 rounded-full font-black text-sm hover:bg-emerald-50 transition shadow-xl shrink-0">
              Cek Harga & Jadwal
            </Link>
          </div>
          
        </div>
      </article>
    </>
  );
}