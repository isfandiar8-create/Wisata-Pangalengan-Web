import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ─── DATABASE ARTIKEL LOKAL ─────────────────────────────────────────────
const databaseArtikel = [
  {
    slug: "estimasi-biaya-liburan-pangalengan",
    judul: "Estimasi Biaya Liburan ke Pangalengan 2026: Pilih Gaya Hemat atau Eksklusif?",
    tanggal: "16 April 2026",
    waktuBaca: "4 Menit Baca",
    image: "/cileunca.jpg",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Pangalengan kini bukan sekadar destinasi alternatif, melainkan primadona wisata di Bandung Selatan. Dengan udara sejuk yang stabil di angka 16 hingga 20 derajat Celcius dan akses Tol Soroja yang semakin memangkas waktu tempuh, kawasan ini menjadi magnet bagi wisatawan di tahun 2026.
        </p>
        <p className="text-stone-600 leading-relaxed mb-10 text-lg">
          Namun, pertanyaan yang paling sering muncul adalah: <strong>Berapa sebenarnya budget yang harus disiapkan?</strong> Jawabannya sangat bergantung pada strategi liburan Anda. Apakah Anda mengincar efisiensi biaya yang maksimal, atau Anda mencari diferensiasi pengalaman melalui layanan yang serba eksklusif?
        </p>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">1. Gaya Liburan Hemat (Smart Budgeting)</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Bagi Anda para petualang muda atau rombongan yang ingin memaksimalkan <i>value</i> dengan biaya minim, fokuslah pada aktivitas alam terbuka dan penginapan berbasis tenda.
        </p>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc pl-5 marker:text-emerald-500">
          <li><strong>Penginapan (Camping Reguler):</strong> Mulai dari Rp150.000 - Rp250.000 per malam/tenda (kapasitas 3-4 orang).</li>
          <li><strong>Aktivitas Utama:</strong> Tiket masuk spot foto berkisar Rp35.000 - Rp50.000 per orang.</li>
          <li><strong>Rafting Ekonomis:</strong> Sekitar Rp150.000 per orang (sudah termasuk perlengkapan).</li>
          <li><strong>Estimasi Total:</strong> Untuk 2 Hari 1 Malam siapkan budget <strong>Rp350.000 - Rp500.000 per orang</strong>.</li>
        </ul>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">2. Gaya Liburan Eksklusif (Premium Experience)</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Jika Anda membawa keluarga besar atau rombongan direksi perusahaan, diferensiasi layanan adalah prioritas. Anda membayar untuk privasi dan kenyamanan.
        </p>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc pl-5 marker:text-emerald-500">
          <li><strong>Penginapan (Private Villa / VIP Glamping):</strong> Rp1.500.000 - Rp4.000.000 per malam.</li>
          <li><strong>Aktivitas Utama:</strong> Private Offroad Landrover (Rp1.500.000/mobil) dan VIP Rafting.</li>
          <li><strong>Konsumsi:</strong> Layanan BBQ Premium di lokasi penginapan.</li>
          <li><strong>Estimasi Total:</strong> Siapkan budget berkisar <strong>Rp1.200.000 - Rp2.500.000 per orang</strong>.</li>
        </ul>
      </>
    )
  },
  {
    slug: "rekomendasi-villa-kapasitas-besar-pangalengan",
    judul: "5 Villa Kapasitas Besar di Pangalengan untuk Makrab & Gathering Kantor",
    tanggal: "14 April 2026",
    waktuBaca: "5 Menit Baca",
    image: "/villa-wantea.jpg",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Merencanakan acara Malam Keakraban (Makrab) kampus atau Gathering Tahunan Perusahaan (*Corporate Outing*) memiliki satu tantangan utama: mencari penginapan yang muat untuk puluhan orang sekaligus tanpa mengorbankan kenyamanan.
        </p>
        <p className="text-stone-600 leading-relaxed mb-10 text-lg">
          Pangalengan menjawab kebutuhan ini dengan sangat baik. Berikut adalah kriteria villa kapasitas besar (30-50 orang) yang biasanya kami rekomendasikan untuk klien *Corporate B2B* Go Pangalengan:
        </p>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Fasilitas Wajib untuk Rombongan</h2>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc pl-5 marker:text-emerald-500">
          <li><strong>Area Aula / Ruang Tengah Luas:</strong> Sangat krusial untuk sesi materi, *games indoor*, atau sekadar kumpul bersama saat malam hari.</li>
          <li><strong>Fasilitas Dapur Ekstra & Area BBQ:</strong> Memasak bersama adalah esensi dari *gathering*. Villa rombongan harus memiliki peralatan masak skala besar.</li>
          <li><strong>Jumlah Kamar Mandi:</strong> Ini sering terlupakan! Pastikan rasio kamar mandi setidaknya 1 berbanding 5 orang agar tidak ada antrean panjang di pagi hari.</li>
          <li><strong>Halaman Terbuka:</strong> Untuk kegiatan senam pagi atau *fun games* ringan sebelum menuju lokasi Rafting.</li>
        </ul>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Solusi Praktis dari Go Pangalengan</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Daripada Anda pusing mencari ketersediaan villa satu per satu, tim Go Pangalengan siap mencarikan villa yang paling sesuai dengan jumlah peserta dan anggaran Anda. Kami memiliki akses *database* penginapan lokal yang tidak selalu ada di aplikasi *booking online* biasa, tentunya dengan harga yang sangat kompetitif.
        </p>
      </>
    )
  },
  {
    slug: "panduan-aman-rafting-situ-cileunca",
    judul: "Rafting Situ Cileunca: Panduan Keamanan, Usia Minimal, dan Tips Pemula",
    tanggal: "10 April 2026",
    waktuBaca: "4 Menit Baca",
    image: "/rafting.jpg",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Sungai Palayangan yang mengalir dari Situ Cileunca adalah surga bagi para pecinta arung jeram (rafting). Dengan jeram *grade* 3-4, sungai ini menawarkan sensasi ekstrem yang masih sangat aman dan bersahabat bagi pemula sekalipun.
        </p>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Apakah Pemula Boleh Ikut?</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Sangat boleh! Faktanya, 80% klien rafting Go Pangalengan adalah pemula yang belum pernah memegang dayung sama sekali. Anda akan didampingi oleh seorang <i>River Guide</i> profesional di setiap perahu yang akan memberikan instruksi kapan harus mendayung, menunduk, atau berpegangan.
        </p>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Usia Minimal dan Standar Keamanan</h2>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc pl-5 marker:text-emerald-500">
          <li><strong>Usia Minimal:</strong> Umumnya anak berusia 7 atau 8 tahun sudah diizinkan ikut, dengan syarat ukuran tubuh mencukupi untuk memakai pelampung standar dan didampingi orang tua.</li>
          <li><strong>Pelampung & Helm:</strong> Wajib dipakai sepanjang pengarungan. Pelampung yang kami sediakan mampu menahan beban hingga di atas 100 kg di air arus deras.</li>
          <li><strong>Tim Rescue:</strong> Selain <i>guide</i> di perahu, selalu ada tim penyelamat (rescue team) yang berjaga di titik-titik jeram rawan.</li>
        </ul>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Tips Wajib Bawa</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Gunakan sandal gunung (jangan sepatu kets atau nyeker). Gunakan pakaian berbahan ringan seperti *dry-fit* yang cepat kering, hindari bahan jeans. Dan yang paling penting: bawa baju ganti dan peralatan mandi, karena Anda dipastikan akan basah kuyup 100%!
        </p>
      </>
    )
  },
  {
    slug: "spot-foto-sunrise-pangalengan",
    judul: "Sunrise Point Cukul vs Wayang Windu: Mana Spot Foto Estetik Terbaik?",
    tanggal: "05 April 2026",
    waktuBaca: "3 Menit Baca",
    image: "/hero1.jpg",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Bagi para pemburu *golden hour* dan pecinta fotografi lanskap, Pangalengan adalah studio alam tanpa batas. Dua nama yang selalu menduduki peringkat teratas untuk menikmati matahari terbit adalah Sunrise Point Cukul dan Wayang Windu Panenjoan. Mana yang harus masuk ke *itinerary* Anda?
        </p>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">1. Sunrise Point Cukul (Klasik & Syahdu)</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Cukul menawarkan lanskap klasik perbukitan kebun teh yang berlapis-lapis. Karakteristik utamanya adalah kabut tebal yang sering menyelimuti sela-sela bukit di pagi hari, menciptakan efek visual mistis dan megah.
        </p>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc pl-5 marker:text-emerald-500">
          <li><strong>Akses:</strong> Jalanan menanjak dan sedikit berbatu di mendekati lokasi parkir.</li>
          <li><strong>Vibe:</strong> Tenang, syahdu, sangat cocok untuk foto *landscape* murni dengan lensa tele.</li>
        </ul>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">2. Wayang Windu Panenjoan (Modern & 360° View)</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Terletak di ketinggian 1.800 mdpl dengan latar belakang instalasi pipa panas bumi (geothermal), Wayang Windu menawarkan perpaduan pemandangan alam dan industrial. Terdapat jembatan kayu estetik yang membelah kebun teh.
        </p>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc pl-5 marker:text-emerald-500">
          <li><strong>Akses:</strong> Relatif lebih mulus, parkiran luas.</li>
          <li><strong>Vibe:</strong> Lebih modern, angin sangat kencang, banyak titik foto instagenic buatan (jembatan, gardu pandang).</li>
        </ul>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Kesimpulan</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Jika Anda mencari *footage* alam murni dengan lautan kabut, <strong>Cukul</strong> adalah juaranya. Namun jika Anda mencari spot foto berkonsep dengan jembatan kayu kekinian dan *view* 360 derajat, <strong>Wayang Windu</strong> adalah pilihan yang lebih tepat.
        </p>
      </>
    )
  },
  {
    slug: "perbedaan-glamping-dan-camping-pangalengan",
    judul: "Perbedaan Glamping dan Camping Biasa di Pangalengan: Mana yang Cocok?",
    tanggal: "02 April 2026",
    waktuBaca: "4 Menit Baca",
    image: "/glamping-sagaya.jpg",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Tidur di bawah bintang-bintang di tepi Situ Cileunca atau di tengah hutan pinus Rahong adalah impian banyak orang. Namun, istilah *Glamping* dan *Camping* seringkali membingungkan wisatawan. Memahami perbedaannya sangat penting agar ekspektasi liburan Anda terpenuhi.
        </p>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Tenda Reguler (Camping Biasa)</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Ini adalah pengalaman kembali ke alam yang sesungguhnya. Anda akan tidur di dalam tenda dome standar (seperti tenda pramuka atau pendaki). 
        </p>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc pl-5 marker:text-emerald-500">
          <li><strong>Fasilitas Dalam Tenda:</strong> Biasanya hanya matras foil/spons, <i>sleeping bag</i>, dan bantal kecil. Tidak ada colokan listrik di dalam tenda.</li>
          <li><strong>Kamar Mandi:</strong> Berbagi (*sharing*) di fasilitas umum yang letaknya beberapa meter dari tenda.</li>
          <li><strong>Kelebihan:</strong> Harga sangat terjangkau, suasana petualangan lebih kental, dan *bonding* lebih erat.</li>
        </ul>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Glamorous Camping (Glamping)</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Glamping adalah memindahkan fasilitas hotel berbintang ke dalam sebuah tenda berukuran besar yang estetik (seperti tenda Safari atau tipe Bawang/Onion).
        </p>
        <ul className="space-y-2 text-stone-600 mb-8 list-disc pl-5 marker:text-emerald-500">
          <li><strong>Fasilitas Dalam Tenda:</strong> Kasur <i>springbed</i> empuk, selimut tebal, colokan listrik, lampu tidur estetik, bahkan beberapa menyediakan teko listrik dan TV.</li>
          <li><strong>Kamar Mandi:</strong> Tersedia kamar mandi privat di dalam tenda atau tepat di sebelahnya, lengkap dengan *Water Heater* (air panas).</li>
          <li><strong>Kelebihan:</strong> Tidur nyenyak bebas pegal, tidak kedinginan, sangat cocok untuk keluarga yang membawa balita atau orang tua.</li>
        </ul>
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Rekomendasi Go Pangalengan</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Jika Anda rombongan anak muda, mahasiswa, atau peserta *corporate training* yang mengejar kebersamaan tim, *Camping Reguler* adalah pilihan tepat. Namun, jika Anda sedang liburan keluarga (*Family Gathering*) dan mengutamakan kualitas istirahat, jangan ragu untuk memilih *Glamping*. Tim kami siap memesankan spot terbaik untuk Anda!
        </p>
      </>
    )
  }
];

export default async function DetailArtikel({ params }: { params: Promise<{ slug: string }> }) {
  // 1. "Buka bungkus" URL terlebih dahulu (Wajib di Next.js terbaru)
  const resolvedParams = await params;

  // 2. Cari artikel yang slug-nya sama dengan URL yang sedang diklik
  const artikelAktif = databaseArtikel.find((item) => item.slug === resolvedParams.slug);

  // 3. Jika pengunjung mengetik URL ngawur, tampilkan halaman 404 (Not Found)
  if (!artikelAktif) {
    notFound();
  }

  // 4. Jika ketemu, tampilkan isi artikelnya secara dinamis
  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Tombol Kembali & Header */}
      <div className="max-w-4xl mx-auto px-4 pt-28 sm:pt-36">
        <Link href="/artikel" className="inline-flex items-center text-sm font-bold text-emerald-600 mb-6 hover:gap-2 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          Kembali ke Jurnal
        </Link>
        
        <h1 className="text-3xl sm:text-5xl font-black text-stone-900 leading-tight mb-6">
          {artikelAktif.judul}
        </h1>

        <div className="flex items-center gap-4 mb-10 border-b border-stone-100 pb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">GP</div>
          <div>
            <p className="text-sm font-bold text-stone-800">Tim Go Pangalengan</p>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">{artikelAktif.tanggal} • {artikelAktif.waktuBaca}</p>
          </div>
        </div>
      </div>

      {/* Gambar Utama */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="relative h-[300px] sm:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl bg-stone-100">
          <Image src={artikelAktif.image} alt={artikelAktif.judul} fill className="object-cover" />
        </div>
      </div>

      {/* Konten Tulisan Dinamis */}
      <div className="max-w-3xl mx-auto px-4">
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
  );
}