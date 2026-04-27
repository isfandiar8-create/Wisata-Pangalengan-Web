import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// IMPORT NAVBAR & FOOTER ANDA DI SINI
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; // 1. INI TAMBAHAN IMPORT FOOTER

const inter = Inter({ subsets: ["latin"] });

// ─── OPTIMASI SEO & METADATA ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Go Pangalengan | Paket Wisata, Outing & Penginapan Terbaik",
  description: "Platform reservasi wisata Go Pangalengan. Dapatkan promo paket Rafting, ATV, Offroad, Outing Corporate, dan Glamping estetik dengan harga transparan.",
  keywords: [
    "wisata pangalengan", 
    "rafting pangalengan", 
    "villa pangalengan", 
    "outing kantor bandung", 
    "go pangalengan", 
    "glamping pangalengan",
    "paket wisata bandung selatan"
  ],
  authors: [{ name: "Go Pangalengan" }],
  openGraph: {
    title: "Go Pangalengan - Liburan Tanpa Ribet",
    description: "Temukan paket petualangan dan penginapan estetik di Pangalengan untuk keluarga maupun gathering perusahaan Anda.",
    url: "https://gopangalengan.com", 
    siteName: "Go Pangalengan",
    images: [
      {
        url: "/hero1.jpg", 
        width: 1200,
        height: 630,
        alt: "Go Pangalengan Hero Image",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        {/* NAVBAR MUNCUL DI SEMUA HALAMAN */}
        <Navbar />
        
        {/* KONTEN HALAMAN (Home, Paket, Artikel, dll) */}
        {children}

        {/* 2. FOOTER MUNCUL DI PALING BAWAH SETELAH KONTEN */}
        <Footer />

        {/* ─── KODE SCHEMA MARKUP (KTP DIGITAL) UNTUK SEO & GMAPS ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Go Pangalengan",
              "image": "https://gopangalengan.com/logo-go-pangalengan.png",
              "description": "Agen perjalanan wisata dan event organizer terpercaya di Pangalengan. Menyediakan paket Rafting, Sewa Villa, Glamping, dan Corporate Outing.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pangalengan",
                "addressRegion": "Jawa Barat",
                "addressCountry": "ID"
              },
              "telephone": "+6285717075116",
              "url": "https://gopangalengan.com"
            })
          }}
        />
      </body>
    </html>
  );
}