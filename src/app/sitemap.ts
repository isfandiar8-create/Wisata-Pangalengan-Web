import { MetadataRoute } from "next";
// IMPORT DATA ARTIKEL SECARA OTOMATIS
import { masterArtikel } from "@/data/artikel"; 

const BASE_URL = "https://www.gopangalengan.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Semua halaman statis yang tersedia di folder app.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/katalog-wisata`, lastModified: now, changeFrequency: "daily", priority: 0.95 },
    { url: `${BASE_URL}/penginapan`, lastModified: now, changeFrequency: "weekly", priority: 0.92 },
    { url: `${BASE_URL}/custom-trip`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/tentang-kami`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/artikel`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/destinasi/nimo-highland`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/destinasi/bosscha-malabar`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/destinasi/hutan-rahong`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/destinasi/situ-cileunca`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/destinasi/sunrise-cukul`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/destinasi/wayang-windu`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];

  // ─── 1. PAKET WISATA ───
  const paketIds = [
    "paket-rafting-pangalengan", "sewa-atv-pangalengan", "offroad-land-rover-pangalengan",
    "paket-paintball-pangalengan", "paket-team-building-fun-games", "tiket-flying-fox-situ-cileunca",
    "tour-perahu-situ-cileunca", "paket-trekking-kebun-teh-pangalengan", "paket-wisata-keluarga-hemat",
    "paket-wisata-keluarga-seru", "paket-wisata-keluarga-premium", "paket-outing-kantor-1-hari-adventure",
    "paket-gathering-perusahaan-1-hari", "paket-outing-corporate-offroad-1-hari",
    "paket-gathering-kantor-2-hari-1-malam-hemat", "paket-outing-perusahaan-2-hari-1-malam-bestseller",
    "paket-gathering-corporate-2-hari-1-malam-all-in", "paket-outing-kantor-2-hari-1-malam-relax",
    "paket-gathering-perusahaan-vip-premium", "paket-glamping-atv-pangalengan",
    "paket-glamping-offroad-pangalengan", "paket-camping-keluarga-pangalengan",
  ];

  const paketRoutes: MetadataRoute.Sitemap = paketIds.map((id) => ({
    url: `${BASE_URL}/paket/${id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.88,
  }));

  // ─── 2. PENGINAPAN ───
  const penginapanIds = [
    "villa-wantea-pangalengan", "penginapan-saung-rungkun", "penginapan-saung-gadis",
    "villa-saung-family-pangalengan", "villa-palayangan-b", "villa-palayangan-a",
    "villa-bts-pangalengan", "villa-family-c-pangalengan", "villa-family-a-pangalengan",
    "villa-family-b-pangalengan", "penginapan-saung-cinta", "glamping-sagaya-pangalengan",
    "villa-bumi-tilu-pangalengan", "villa-putih-pangalengan", "villa-putih-a-pangalengan",
    "penginapan-barak-ghc-pangalengan", "villa-imah-pangalengan",
  ];

  const penginapanRoutes: MetadataRoute.Sitemap = penginapanIds.map((id) => ({
    url: `${BASE_URL}/penginapan/${id}`, 
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.88,
  }));

  // ─── 3. ARTIKEL (SEKARANG OTOMATIS) ───
  // Next.js akan membaca seluruh array masterArtikel, lalu mengekstrak "slug"-nya
  const artikelRoutes: MetadataRoute.Sitemap = masterArtikel.map((artikel) => ({
    url: `${BASE_URL}/artikel/${artikel.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    // Prioritas artikel baru dinaikkan sedikit karena ini sumber trafik organik
    priority: 0.85, 
  }));

  // Gabungkan semua array ke dalam return
  return [...staticRoutes, ...paketRoutes, ...penginapanRoutes, ...artikelRoutes]; 
}