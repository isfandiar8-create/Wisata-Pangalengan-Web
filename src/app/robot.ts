import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/', // Mengizinkan semua robot untuk merayapi seluruh web
      disallow: '/private/', // Contoh jika ada folder yang ingin disembunyikan
    },
    sitemap: 'https://www.gopangalengan.id/sitemap.xml', // Mengarahkan robot ke peta situs Anda
  }
}