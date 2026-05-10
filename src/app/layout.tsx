import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

// ─── OPTIMASI UX MOBILE ───
export const viewport: Viewport = {
  themeColor: "#059669", 
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, 
};

// ─── OPTIMASI SEO & METADATA (LEVEL DEWA) ───
export const metadata: Metadata = {
  metadataBase: new URL("https://www.gopangalengan.id"),
  
  // FITUR SUPER: Template Judul Otomatis
  title: {
    default: "Go Pangalengan | Paket Wisata Outing & Penginapan Terbaik",
    template: "%s | Go Pangalengan", // %s akan otomatis diganti dengan judul tiap halaman
  },
  
  description: "Platform reservasi wisata resmi Go Pangalengan. Dapatkan promo paket Rafting, ATV, Offroad, Outing Corporate, dan sewa Villa estetik dengan harga transparan.",
  keywords: [
    "wisata pangalengan", 
    "rafting pangalengan", 
    "situ cileunca",
    "villa pangalengan", 
    "penginapan pangalengan",
    "outing kantor bandung",
    "gathering perusahaan",
    "glamping pangalengan",
    "go pangalengan",
    "paket wisata bandung selatan"
  ],
  authors: [{ name: "Go Pangalengan", url: "https://www.gopangalengan.id" }],
  
  // Mengizinkan Google merayapi seluruh isi web
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: "/", 
  },
  
  verification: {
    google: "dufDtxlBLTJBGAbqXoxhXZd65FYIZhtOIqOAq3K3s2M", 
  },

  openGraph: {
    title: {
      default: "Go Pangalengan - Liburan Tanpa Ribet",
      template: "%s | Go Pangalengan",
    },
    description: "Temukan paket petualangan dan penginapan estetik di Pangalengan untuk liburan keluarga maupun gathering perusahaan Anda.",
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
  
  twitter: {
    card: "summary_large_image",
    title: "Go Pangalengan | Paket Wisata Outing & Penginapan",
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
              "image": "https://www.gopangalengan.id/logo-go-pangalengan.png", // Pastikan file logo ini ada di folder public Anda
              "description": "Agen perjalanan wisata dan event organizer terpercaya di Pangalengan. Menyediakan paket Rafting, Sewa Villa, Glamping, dan Corporate Outing.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Raya Situ Cileunca, Warnasari", // Masukkan alamat spesifik basecamp/kantor Anda
                "addressLocality": "Pangalengan",
                "addressRegion": "Jawa Barat",
                "postalCode": "40378", // Kode pos Pangalengan
                "addressCountry": "ID"
              },
              "telephone": "+6285717075116",
              "url": "https://www.gopangalengan.id",
              "priceRange": "Rp 150.000 - Rp 1.500.000" 
            })
          }}
        />
      </body>
    </html>
  );
}