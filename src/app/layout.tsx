import type { Metadata, Viewport } from "next"; // <-- Tambahkan Viewport
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

// ─── OPTIMASI UX MOBILE (STANDAR BARU NEXT.JS) ───
export const viewport: Viewport = {
  themeColor: "#059669", // Warna emerald-600, membuat top bar browser HP Android jadi hijau elegan
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Mencegah zoom otomatis yang mengganggu saat mengisi form
};

// ─── OPTIMASI SEO & METADATA (TINGKAT MASTER) ───
export const metadata: Metadata = {
  metadataBase: new URL("https://www.gopangalengan.id"),
  
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
  authors: [{ name: "Go Pangalengan", url: "https://www.gopangalengan.id" }],
  
  // Mencegah isu duplicate content di mata Google
  alternates: {
    canonical: "/", 
  },
  
  // Persiapan untuk verifikasi Google Search Console nanti
  verification: {
    google: "dufDtxlBLTJBGAbqXoxhXZd65FYIZhtOIqOAq3K3s2M", 
  },

  openGraph: {
    title: "Go Pangalengan - Liburan Tanpa Ribet",
    description: "Temukan paket petualangan dan penginapan estetik di Pangalengan untuk keluarga maupun gathering perusahaan Anda.",
    url: "https://www.gopangalengan.id", 
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
  
  // Optimasi untuk sharing di Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Go Pangalengan | Paket Wisata, Outing & Penginapan",
    description: "Dapatkan promo paket Rafting, ATV, Offroad, Outing Corporate, dan Glamping estetik.",
    images: ["/hero1.jpg"],
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
        <Navbar />
        {children}
        <Footer />

        {/* ─── KODE SCHEMA MARKUP (KTP DIGITAL) UNTUK SEO & GMAPS ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Go Pangalengan",
              "image": "https://www.gopangalengan.id/logo-go-pangalengan.png",
              "description": "Agen perjalanan wisata dan event organizer terpercaya di Pangalengan. Menyediakan paket Rafting, Sewa Villa, Glamping, dan Corporate Outing.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pangalengan",
                "addressRegion": "Jawa Barat",
                "addressCountry": "ID"
              },
              "telephone": "+6285717075116",
              "url": "https://www.gopangalengan.id",
              "priceRange": "Rp 150.000 - Rp 1.500.000" // Menambah sinyal harga komersial untuk Google
            })
          }}
        />
      </body>
    </html>
  );
}