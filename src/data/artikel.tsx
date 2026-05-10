import { generateWALink } from "@/config/contact";

export const masterArtikel = [
  {
    slug: "panduan-lengkap-wisata-pangalengan", // Ini URL barunya
    judul: "Panduan Lengkap Wisata Pangalengan: Lokasi, Rute, dan Destinasi Populer",
    kategori: "Panduan Liburan",
    tanggal: "09 Mei 2026",
    waktuBaca: "6 Menit Baca",
    image: "/wayang.jpg", // Ganti dengan path gambar Nimo/Kebun Teh di folder public Anda
    excerpt: "Baru pertama kali ke Pangalengan? Temukan panduan lengkap arah lokasi, rute transportasi dari Jakarta, hingga daftar spot wisata estetik yang wajib dikunjungi.",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Apakah belakangan ini <i>feed</i> TikTok atau Instagram kamu sering dilewati video jalan-jalan ke kebun teh hijau yang sejuk dan estetik? Kalau iya, kemungkinan besar algoritma sedang mengajakmu main ke Pangalengan.
        </p>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Buat kamu yang tinggal di Jakarta atau sekitarnya dan baru pertama kali mau merencanakan liburan ke sini, wajar banget kalau isi kepalamu penuh dengan tanda tanya. Pangalengan itu di mana sih? Jalannya aman nggak buat mobil kecil?
        </p>
        <p className="text-stone-600 leading-relaxed mb-10 text-lg">
          Tenang saja, anggap artikel ini sebagai obrolan santai kita. Saya akan bantu petakan panduan dasarnya supaya rencana <i>weekend getaway</i> kamu bebas dari drama nyasar atau salah rute.
        </p>

        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Pangalengan Dimana? Apakah Sama dengan Lembang?</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Nah, ini adalah pertanyaan yang paling sering mampir dari teman-teman di luar kota: <i>"Pangalengan itu sebenarnya daerah mana sih? Kalau dari Bandung, searah nggak sama Lembang?"</i>
        </p>
        <p className="text-stone-600 leading-relaxed mb-4">
          Biar kamu gampang membayangkannya: <strong>Pangalengan dan Lembang itu beda arah, bahkan saling bertolak belakang.</strong> Kalau Lembang ada di ujung Utara (Kabupaten Bandung Barat), Pangalengan ini posisinya ada di ujung Selatan (Kabupaten Bandung).
        </p>
        <p className="text-stone-600 leading-relaxed mb-4">
          Secara geografis, daerah ini berada di ketinggian sekitar 1.500 mdpl. Jadi, tidak heran kalau udaranya sangat sejuk, dan bisa bikin kamu kedinginan kalau malam atau pagi hari.
        </p>
        <p className="text-stone-600 leading-relaxed font-bold mb-2">Kapan kamu harus pilih Pangalengan?</p>
        <p className="text-stone-600 leading-relaxed mb-10">
          Kalau kamu butuh tempat hiburan yang modern dan dekat dengan pusat kota, Lembang memang jagonya. Tapi, kalau kamu sama seperti saya yang sesekali butuh kabur dari macet, ingin melihat hamparan hijau yang benar-benar luas, menghirup udara bersih, dan mencari suasana yang jauh lebih tenang, maka Pangalengan adalah jawaban yang paling pas.
        </p>

        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Cara Menuju Pangalengan dari Jakarta</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Pertanyaan selanjutnya: <i>"Dari Jakarta ke Pangalengan enaknya naik apa, dan berapa jam perjalanannya?"</i> Normalnya, perjalanan dari Jakarta memakan waktu sekitar 3 sampai 4 jam. Supaya kamu punya gambaran, ini dua opsi rute dan kendaraan yang paling nyaman:
        </p>
        
        <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">1. Bawa Kendaraan Pribadi (Paling Fleksibel)</h3>
        <p className="text-stone-600 leading-relaxed mb-3">
          Kalau kamu bawa mobil sendiri, kamu punya kebebasan untuk berhenti kapan saja. Rute paling mulus dan cepat yang bisa kamu ikuti:
        </p>
        <ul className="space-y-2 text-stone-600 mb-4 list-disc pl-5 marker:text-emerald-500">
          <li>Masuk ke Tol Cipularang arah Bandung.</li>
          <li>Begitu masuk area Bandung, jangan keluar tol dulu! Lanjut langsung ke <strong>Tol Soroja</strong> (Soreang - Pasir Koja). Tol ini adalah penyelamat kita untuk melewati kemacetan di dalam Kota Bandung.</li>
          <li>Keluar di Gerbang Tol Soreang.</li>
          <li>Dari Soreang, tinggal ikuti peta navigasi menuju Banjaran, lalu lanjut ke jalan utama yang menanjak ke arah Pangalengan.</li>
        </ul>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-8">
          <p className="text-amber-900 text-sm font-medium">
            <strong>💡 Tips dari lokal:</strong> Sebisa mungkin jangan melewati daerah Banjaran di atas jam 4 sore. Itu jam pulang kerja warga lokal, lumayan padat! Untuk kondisi jalan ke Pangalengan sendiri sudah beraspal bagus dan cukup lebar, walau memang lumayan berkelok.
          </p>
        </div>

        <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">2. Naik Transportasi Umum (Buat Kaum Anti-Capek)</h3>
        <p className="text-stone-600 leading-relaxed mb-3">
          Mau tidur nyenyak selama perjalanan? Bisa banget! Kamu bisa pakai transportasi umum dengan rute estafet ini:
        </p>
        <ul className="space-y-2 text-stone-600 mb-10 list-disc pl-5 marker:text-emerald-500">
          <li><strong>Berangkat ke Bandung:</strong> Naik Kereta Whoosh biar cepat (turun di Padalarang, sambung kereta Feeder ke Stasiun Bandung), atau naik travel/bus dari Jakarta ke arah Bandung.</li>
          <li><strong>Menuju Terminal:</strong> Sesampainya di Bandung, pesan taksi online untuk *drop* kamu di Terminal Leuwipanjang.</li>
          <li><strong>Lanjut ke Pangalengan:</strong> Di dalam terminal, cari angkutan sejenis Elf jurusan Bandung-Pangalengan. Elf ini bakal langsung mengantarkanmu sampai ke Terminal Pangalengan. Gampang, kan?</li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Ada Apa Saja di Pangalengan Bandung?</h2>
        <p className="text-stone-600 leading-relaxed mb-6">
          Setelah perjalanan beberapa jam, apa yang bikin daerah ini <i>worth it</i> buat didatangi? Mungkin kamu pernah dengar kalau Pangalengan itu identik dengan susu sapi murni. Nah, sekarang kawasannya sudah berkembang pesat jadi destinasi wisata alam yang keren banget. Kalau ini kunjungan pertamamu, beberapa spot ini wajib masuk <i>itinerary</i>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Kotak Nimo Highland */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition">
            <div className="relative h-40 w-full bg-stone-200 overflow-hidden">
              {/* TAMBAHAN object-bottom DI SINI */}
              <img src="/nimo.jpg" alt="Nimo Highland Pangalengan" className="w-full h-full object-cover object-bottom hover:scale-105 transition duration-500" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h4 className="font-bold text-emerald-700 text-lg mb-2">Nimo Highland</h4>
              <p className="text-sm text-stone-600 mb-4 flex-grow">Ini ikon barunya Pangalengan yang lagi viral. Daya tarik utamanya adalah jembatan kaca lengkung super panjang dengan view kebun teh 360 derajat. Buat kamu yang suka foto-foto cantik, tempat ini wajib didatangi.</p>
              {/* LINK KE HALAMAN SPESIFIK */}
              <a href="/destinasi/nimo-highland" className="inline-flex items-center text-emerald-600 text-[11px] font-black uppercase tracking-wider hover:text-emerald-800 transition group mt-auto">
                Eksplor Nimo Highland <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Kotak Wayang Windu */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition">
            <div className="relative h-40 w-full bg-stone-200 overflow-hidden">
              <img src="/wayang-4.jpg" alt="Wayang Windu Pangalengan" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
            <div className="p-5 flex flex-col flex-grow">
              <h4 className="font-bold text-emerald-700 text-lg mb-2">Wayang Windu Panenjoan</h4>
              <p className="text-sm text-stone-600 mb-4 flex-grow">Terletak di tengah kebun teh dengan jembatan kayu panjang yang ikonik. Latar belakangnya makin unik dengan kepulan uap panas bumi (Geothermal) yang terlihat seperti awan. Saran saya, datang ke sini pas sore hari untuk ngejar sunset.</p>
              <a href="/destinasi/wayang-windu" className="inline-flex items-center text-emerald-600 text-[11px] font-black uppercase tracking-wider hover:text-emerald-800 transition group mt-auto">
                Eksplor Wayang Windu <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Kotak Taman Langit */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition">
            <div className="relative h-40 w-full bg-stone-200 overflow-hidden">
              {/* JIKA KURANG PAS, BISA PAKAI object-[center_75%] SEPERTI INI */}
              <img src="/sunrise-cukul-2.jpg" alt="Taman Langit Pangalengan" className="w-full h-full object-cover object-[center_75%] hover:scale-105 transition duration-500" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h4 className="font-bold text-emerald-700 text-lg mb-2">Taman Langit (360)</h4>
              <p className="text-sm text-stone-600 mb-4 flex-grow">Incaran utama teman-teman yang suka camping anti-ribet atau sekadar mau berburu sunrise. Meskipun kamu nggak menginap, datang pagi-pagi ke sini buat ngopi sambil melihat lautan kabut adalah salah satu pengalaman terbaik.</p>
              <a href="/destinasi/sunrise-cukul" className="inline-flex items-center text-emerald-600 text-[11px] font-black uppercase tracking-wider hover:text-emerald-800 transition group mt-auto">
                Eksplor Taman Langit <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Kotak Situ Cileunca */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition">
            <div className="relative h-40 w-full bg-stone-200 overflow-hidden">
              <img src="/cileunca.jpg" alt="Situ Cileunca Rafting" className="w-full h-full object-cover object-[center_70%] hover:scale-105 transition duration-500" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h4 className="font-bold text-emerald-700 text-lg mb-2">Situ Cileunca</h4>
              <p className="text-sm text-stone-600 mb-4 flex-grow">Ini dia danau legendaris yang luasnya mencapai 1.400 hektar. Di sini kamu bisa bersantai naik perahu kayu mengelilingi danau. Tapi kalau kamu dan teman-teman suka tantangan, cobain rafting (arung jeram) di Sungai Palayangan. Dijamin seru!</p>
              <a href="/destinasi/situ-cileunca" className="inline-flex items-center text-emerald-600 text-[11px] font-black uppercase tracking-wider hover:text-emerald-800 transition group mt-auto">
                Eksplor situ cileunca <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>

        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Pangalengan selalu terbuka buat kamu yang butuh ruang untuk sekadar tarik napas panjang dan melupakan <i>deadline</i> sejenak.
        </p>
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl my-8">
          <p className="text-emerald-900 leading-relaxed font-medium">
            Kalau kamu masih bingung menyusun jadwal, atau malah ingin terima beres dan butuh teman lokal untuk menemani eksplorasi tanpa pusing mikirin tiket dan rute, main-main saja ke layanan <a href="/custom-trip" className="text-emerald-700 font-bold underline decoration-2 underline-offset-4">Custom Trip</a> yang sudah kami siapkan di Go Pangalengan. Kami siap bantu aturkan semuanya.
          </p>
        </div>
        <p className="text-stone-600 leading-relaxed mb-4 font-bold">
          Gimana, sudah siap kirim artikel ini ke grup WhatsApp <i>circle</i> mainmu? Tentukan tanggalnya, dan sampai ketemu di Pangalengan!
        </p>
      </>
    )
  },
  {
    slug: "harga-tiket-wisata-dan-biaya-rafting-pangalengan", 
    judul: "Daftar Harga Tiket Wisata & Estimasi Biaya Rafting Pangalengan Terbaru",
    kategori: "Panduan Budget",
    tanggal: "09 Mei 2026",
    waktuBaca: "5 Menit Baca",
    image: "/rafting.jpg", 
    excerpt: "Berapa budget yang harus disiapkan? Temukan bocoran harga tiket masuk Nimo Highland, Wayang Windu, hingga rincian biaya Rafting di Situ Cileunca.",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Merencanakan liburan memang seru, tapi kadang bikin pusing kalau kita tidak tahu standar harga di lokasi tujuan. <i>Nanti uang saku kurang nggak ya? Wah, tiket masuk tempat viral itu mahal nggak sih?</i>
        </p>
        <p className="text-stone-600 leading-relaxed mb-10 text-lg">
          Sebagai teman lokal yang sudah terbiasa menemani tamu keliling Pangalengan, saya akan bantu membedah estimasi biayanya untukmu. Siapkan catatanmu, mari kita susun anggarannya supaya liburanmu tetap maksimal tanpa bikin kantong jebol!
        </p>

        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Berapa Harga Tiket Masuk Wisata Pangalengan?</h2>
        <p className="text-stone-600 leading-relaxed mb-6">
          Kabar baiknya, secara umum harga tiket wisata di kawasan Pangalengan itu masih sangat bersahabat. Berikut adalah bocoran harga tiket untuk beberapa spot wisata yang paling sering berseliweran di <i>FYP (For Your Page)</i> media sosialmu saat ini:
        </p>

        <ul className="space-y-4 text-stone-600 mb-6 list-none pl-0">
          
          <li className="bg-white border border-stone-200 p-4 sm:p-5 rounded-xl shadow-sm transition hover:border-emerald-200 hover:shadow-md">
            <div className="flex justify-between items-start gap-3 mb-2">
              <strong className="text-stone-800 text-base sm:text-lg leading-tight">Nimo Highland</strong>
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold px-2.5 py-1 rounded-md text-[11px] sm:text-xs shrink-0 whitespace-nowrap">
                Mulai Rp 35.000
              </div>
            </div>
            <p className="text-sm leading-relaxed m-0 text-stone-500">
              Sekitar Rp 35.000 (Dewasa) dan Rp 25.000 (Anak). Ini tiket masuk reguler untuk berfoto di jembatan kaca ikonik. Jika ingin naik wahana Bianglala, siapkan budget tambahan sekitar Rp 50.000.
            </p>
          </li>
          
          <li className="bg-white border border-stone-200 p-4 sm:p-5 rounded-xl shadow-sm transition hover:border-emerald-200 hover:shadow-md">
            <div className="flex justify-between items-start gap-3 mb-2">
              <strong className="text-stone-800 text-base sm:text-lg leading-tight">Wayang Windu Panenjoan</strong>
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold px-2.5 py-1 rounded-md text-[11px] sm:text-xs shrink-0 whitespace-nowrap">
                Sekitar Rp 15.000
              </div>
            </div>
            <p className="text-sm leading-relaxed m-0 text-stone-500">
              Sangat murah untuk pemandangan kebun teh berundak dengan jembatan kayu estetik dan kepulan asap geothermal di latar belakangnya.
            </p>
          </li>

          <li className="bg-white border border-stone-200 p-4 sm:p-5 rounded-xl shadow-sm transition hover:border-emerald-200 hover:shadow-md">
            <div className="flex justify-between items-start gap-3 mb-2">
              <strong className="text-stone-800 text-base sm:text-lg leading-tight">Hutan Pinus Rahong (Riverside)</strong>
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold px-2.5 py-1 rounded-md text-[11px] sm:text-xs shrink-0 whitespace-nowrap">
                Sekitar Rp 15.000
              </div>
            </div>
            <p className="text-sm leading-relaxed m-0 text-stone-500">
              Area ini lagi hits banget buat kamu yang ingin nongkrong atau ngopi cantik di pinggir sungai dengan rindangnya pohon pinus.
            </p>
          </li>

          <li className="bg-white border border-stone-200 p-4 sm:p-5 rounded-xl shadow-sm transition hover:border-emerald-200 hover:shadow-md">
            <div className="flex justify-between items-start gap-3 mb-2">
              <strong className="text-stone-800 text-base sm:text-lg leading-tight">Kawasan Situ Cileunca</strong>
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold px-2.5 py-1 rounded-md text-[11px] sm:text-xs shrink-0 whitespace-nowrap">
                Sekitar Rp 15.000
              </div>
            </div>
            <p className="text-sm leading-relaxed m-0 text-stone-500">
              Tiket masuk gerbang utamanya. Danau luas ini adalah pusat rekreasi sekaligus detak jantung pariwisata di Pangalengan.
            </p>
          </li>
          
        </ul>

        <div className="bg-amber-50 p-5 rounded-xl border border-amber-200 mb-10">
          <p className="text-amber-900 text-sm font-medium mb-2">
            <strong>⚠️ Catatan Penting:</strong> Harga bisa sedikit menyesuaikan saat musim liburan panjang (<i>high season</i>), tapi angka di atas bisa kamu jadikan patokan yang aman.
          </p>
          <p className="text-amber-900 text-sm font-medium">
            <strong>💡 Tips Lokal:</strong> Siapkan banyak pecahan uang kecil (recehan) untuk antisipasi biaya parkir yang mungkin ditarik di berbagai titik area wisata.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Serba-serbi Rafting di Situ Cileunca</h2>
        <p className="text-stone-600 leading-relaxed mb-6">
          Nah, karena kita sudah menyinggung Situ Cileunca di poin sebelumnya, rasanya ada yang kurang kalau liburan ke Pangalengan tapi tidak main air. Situ Cileunca bukan sekadar danau untuk dipandangi. Air dari danau inilah yang mengalir deras ke Sungai Palayangan dan menjadi arena bermain yang paling dicari orang-orang Jakarta dan sekitarnya: <strong>Rafting!</strong>
        </p>
        <p className="text-stone-600 leading-relaxed mb-6">
          Buat kamu yang penasaran tapi masih ragu, mari kita jawab pertanyaan yang paling sering mampir ke kami:
        </p>

        <h3 className="text-xl font-bold text-stone-800 mt-8 mb-2">1. Berapa Biaya Rafting di Pangalengan?</h3>
        <p className="text-stone-600 leading-relaxed mb-6">
          Biaya rafting tidak dihitung per perahu, melainkan <strong>per pax (per orang)</strong>. Estimasinya berada di kisaran <strong>Rp 165.000 hingga Rp 185.000 per orang</strong>. Harganya bervariasi tergantung fasilitas pelengkap yang kamu pilih (misalnya: apakah kamu mau tambah makan siang, <i>snack</i>, tiket <i>flying fox</i>, atau dokumentasi foto?).
        </p>

        <h3 className="text-xl font-bold text-stone-800 mt-6 mb-2">2. Berapa Lama Durasi Main Rafting-nya?</h3>
        <p className="text-stone-600 leading-relaxed mb-10">
          Jalur rafting di Sungai Palayangan ini panjangnya sekitar 4,5 sampai 5 kilometer. Dari <i>start</i> sampai <i>finish</i>, kamu akan menyusuri sungai selama <strong>1,5 hingga 2 jam</strong>. Ini adalah waktu yang sangat ideal—cukup untuk bikin jantung berdebar dan tertawa lepas, tapi tidak sampai bikin badan kelelahan seharian.
        </p>

        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Tips Pemula: Kalau Rafting Pakai Baju Apa?</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Buat kamu yang baru pertama kali mau mencoba, wajar kalau masih ada sedikit kecemasan. Termasuk pertanyaan lucu yang sering saya dengar: <i>"Apa sih beda rafting dan arung jeram?"</i>
        </p>
        <p className="text-stone-600 leading-relaxed mb-6">
          Jawabannya: <strong>Tidak ada bedanya.</strong> Rafting itu bahasa Inggrisnya, dan Arung Jeram itu bahasa Indonesianya. Jadi santai saja, ya!
        </p>
        <p className="text-stone-600 leading-relaxed mb-4">
          Lalu, supaya kamu nyaman bermanuver di atas perahu karet, ikuti <i>dress code</i> simpel ini:
        </p>

        <ul className="space-y-4 text-stone-600 mb-10 list-none pl-0">
          <li className="flex items-start gap-3">
            <span className="text-xl mt-0.5">👕</span>
            <div>
              <strong className="text-stone-800 block">Pakaian Utama</strong>
              <span>Pakai baju dan celana berbahan ringan yang mudah kering (<i>dri-fit</i> atau celana <i>training</i>). <strong>Hukumnya wajib: Jangan pakai celana jeans!</strong> Jeans yang basah akan jadi sangat berat, membatasi gerakmu, dan bikin kulit lecet saat duduk di perahu.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl mt-0.5">🩴</span>
            <div>
              <strong className="text-stone-800 block">Alas Kaki</strong>
              <span>Gunakan sandal gunung (sandal bertali) atau sepatu air. Jangan pakai sepatu <i>sneakers</i> mahalmu, dan hindari sandal jepit biasa karena dijamin akan hilang ditelan arus sungai.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl mt-0.5">📱</span>
            <div>
              <strong className="text-stone-800 block">Aksesoris & Gadget</strong>
              <span>Tinggalkan perhiasan di mobil. Kalau kamu berkacamata, pasang tali pengait. Mau bawa HP buat merekam Insta-story? Boleh, asalkan wajib memakai <i>waterproof case</i> dengan kalung yang kokoh.</span>
            </div>
          </li>
        </ul>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl my-8">
          <p className="text-emerald-900 leading-relaxed font-bold mb-3">
            Menghitung budget dan menyiapkan perlengkapan ternyata tidak sepusing itu, kan?
          </p>
          <p className="text-emerald-800 leading-relaxed">
            Tapi, kalau kamu dan rombongan tipe yang nggak mau ribet menjumlahkan tiket masuk A, sewa perahu B, sampai mencari fotografer terpisah... saya punya solusi paling praktis. Daripada bingung mencari operator setibanya di sana, lebih baik kamu <i>booking</i> saja <a href="/paket/paket-rafting-pangalengan" className="text-emerald-700 font-black underline decoration-2 underline-offset-4">Paket Rafting Pangalengan</a> dari Go Pangalengan. Di dalam paket ini, urusan perahu, pemandu (<i>skipper</i>), perlengkapan <i>safety</i>, tiket masuk, sampai asuransi sudah kami yang urus <i>all-in</i>. Kamu tinggal datang bawa baju ganti, dan siap seru-seruan!
          </p>
        </div>
      </>
    )
  },
  {
    slug: "itinerary-wisata-pangalengan-2-hari-1-malam-dari-jakarta", 
    judul: "Panduan Itinerary Liburan ke Pangalengan 2 Hari 1 Malam (Start Jakarta & Bekasi)",
    kategori: "Itinerary & Rute",
    tanggal: "10 Mei 2026",
    waktuBaca: "6 Menit Baca",
    image: "/corporate-1n-b.JPG", // Gambar rombongan Feast & Fun atau Land Rover
    excerpt: "Bingung menyusun jadwal liburan dari Jakarta? Contek itinerary 2D1N paling seimbang ini. Bebas macet, anti-ribet, dan langsung bisa terima beres!",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Biar saya tebak: kamu dan teman-teman kantor di Jakarta atau Bekasi sudah sangat butuh <i>healing</i>. Grup WhatsApp sudah ramai membahas rencana kabur dari polusi dan kemacetan ibukota. Tapi, begitu sampai pada pertanyaan, <strong>"Siapa yang mau susun jadwalnya?"</strong> tiba-tiba semua orang langsung <i>silent reader</i>.
        </p>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Merancang <i>itinerary</i> memang pusing. Kalau terlalu padat, jatuhnya malah lelah seperti ikut pelatihan militer. Kalau terlalu santai, rasanya rugi sudah jauh-jauh menyetir.
        </p>
        <p className="text-stone-600 leading-relaxed mb-10 text-lg">
          Sebagai teman lokalmu, saya sudah menyiapkan formula jadwal 2 Hari 1 Malam (2D1N) yang paling seimbang. Kombinasi sempurna antara bersantai merilekskan otot di hari pertama, dan memompa adrenalin di hari kedua. Mari kita bedah jadwalnya!
        </p>

        {/* TIPS PERJALANAN */}
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mb-10">
          <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375v-1.5a3 3 0 016 0v1.5h3.375a3 3 0 016 0v1.5h.75c1.035 0 1.875-.84 1.875-1.875V11.625a2.625 2.625 0 00-2.625-2.625H15V15z" /><path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM20.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" /></svg>
            Tips Perjalanan Jarak Jauh (Jakarta & Bekasi)
          </h2>
          <p className="text-amber-800 leading-relaxed mb-4 text-sm">
            Kunci dari liburan yang sukses adalah <i>mood</i> yang bagus di perjalanan. Agar kamu tidak tua di jalan akibat kemacetan, kuncinya hanya satu: <strong>berangkatlah lebih awal</strong>.
          </p>
          <ul className="space-y-3 text-amber-800 text-sm list-none pl-0">
            <li className="flex gap-3">
              <span className="font-black">⏰</span>
              <span><strong>Pukul 06.00 - 07.00 WIB:</strong> Pastikan ban mobilmu sudah mulai berputar meninggalkan Jakarta/Bekasi di jam ini.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-black">🛣️</span>
              <span><strong>Rute Terbaik:</strong> Langsung masuk Tol Cipularang, dan pastikan kamu menyambung ke <strong>Tol Soroja (Soreang-Pasir Koja)</strong>. Jangan keluar di gerbang tol dalam Kota Bandung agar tidak terjebak macet akhir pekan.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-black">📍</span>
              <span>Keluar di Gerbang Tol Soreang, ikuti jalur menanjak menuju Pangalengan. Dengan ritme santai, kamu akan tiba sekitar pukul 11.00 atau 12.00, waktu yang pas untuk kuliner lokal sebelum menuju penginapan.</span>
            </li>
          </ul>
        </div>

        {/* ITINERARY HARI PERTAMA */}
        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-2">Detail Itinerary 2 Hari 1 Malam di Pangalengan</h2>
        <p className="text-stone-600 leading-relaxed mb-8">
          Lupakan <i>spreadsheet</i> Excel-mu yang rumit. Ini adalah <i>rundown</i> aktual yang selalu terbukti berhasil membuat tamu-tamu kami pulang dengan senyum lebar.
        </p>

        <div className="mb-10">
          <div className="inline-block bg-emerald-600 text-white font-black px-4 py-2 rounded-lg text-sm uppercase tracking-widest mb-6 shadow-md">
            Hari Pertama: Santai & Keakraban
          </div>
          <p className="text-stone-600 text-sm mb-6 italic">
            Fase transisi. Tubuhmu butuh adaptasi dari udara panas ibukota ke suhu dingin Pangalengan.
          </p>
          
          <div className="relative border-l-2 border-emerald-200 ml-3 md:ml-4 space-y-8 pb-4">
            <div className="relative pl-6 md:pl-8">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
              <strong className="text-emerald-700 block text-lg mb-1">14:00 - Tiba & Check-in</strong>
              <p className="text-stone-600 text-sm leading-relaxed m-0">Setibanya di lokasi, langsung turunkan koper dan <i>check-in</i> ke penginapan atau tenda <i>glamping</i> pilihanmu. Luruskan punggung sejenak di kasur yang empuk.</p>
            </div>
            <div className="relative pl-6 md:pl-8">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
              <strong className="text-emerald-700 block text-lg mb-1">15:30 - Free Time & Sunset</strong>
              <p className="text-stone-600 text-sm leading-relaxed m-0">Waktu bebas yang magis. Kamu bisa jalan santai membelah kebun teh, berburu foto estetik, atau sekadar menyeduh teh hangat sambil menunggu matahari terbenam. Udaranya mulai turun, siapkan jaketmu.</p>
            </div>
            <div className="relative pl-6 md:pl-8">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
              <strong className="text-emerald-700 block text-lg mb-1">19:00 - Pesta Malam Hari</strong>
              <p className="text-stone-600 text-sm leading-relaxed m-0">Malam di Pangalengan terlalu sayang jika hanya untuk tidur. Nyalakan api unggun, bakar daging untuk BBQ, dan bernyanyilah diiringi <i>live music</i>. Dinginnya malam akan kalah dengan hangatnya obrolan.</p>
            </div>
          </div>
        </div>

        {/* ITINERARY HARI KEDUA */}
        <div className="mb-12">
          <div className="inline-block bg-emerald-600 text-white font-black px-4 py-2 rounded-lg text-sm uppercase tracking-widest mb-6 shadow-md">
            Hari Kedua: Puncak Petualangan
          </div>
          <p className="text-stone-600 text-sm mb-6 italic">
            Tubuh sudah segar? Bagus. Hari ini kita akan sedikit memacu detak jantung.
          </p>
          
          <div className="relative border-l-2 border-emerald-200 ml-3 md:ml-4 space-y-8 pb-4">
            <div className="relative pl-6 md:pl-8">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
              <strong className="text-emerald-700 block text-lg mb-1">07:00 - Sarapan Pagi</strong>
              <p className="text-stone-600 text-sm leading-relaxed m-0">Bangun pagi, hirup udara yang 100% bersih, dan nikmati kopi hangat serta sarapan ditemani lautan kabut yang perlahan naik dari perkebunan.</p>
            </div>
            <div className="relative pl-6 md:pl-8">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
              <strong className="text-emerald-700 block text-lg mb-1">08:30 - Persiapan Petualangan</strong>
              <p className="text-stone-600 text-sm leading-relaxed m-0">Waktunya berkumpul di <i>basecamp</i>. Tim instruktur kami akan membagikan perlengkapan keamanan (helm, pelampung) dan memberikan <i>briefing</i> singkat agar aman terkendali.</p>
            </div>
            <div className="relative pl-6 md:pl-8">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
              <strong className="text-emerald-700 block text-lg mb-1">09:00 - Mulai Aktivitas Inti</strong>
              <p className="text-stone-600 text-sm leading-relaxed m-0">Saatnya basah-basahan! Terjun ke Sungai Palayangan untuk Rafting, atur strategi di arena Paintball, atau teriak lepas menembus lumpur menggunakan ATV atau Offroad Land Rover.</p>
            </div>
            <div className="relative pl-6 md:pl-8">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
              <strong className="text-emerald-700 block text-lg mb-1">12:00 - Bersih-bersih & Check-out</strong>
              <p className="text-stone-600 text-sm leading-relaxed m-0">Puas berpetualang, bilas badan dengan air hangat, <i>packing</i> barang, nikmati makan siang terakhir, dan bersiaplah menyetir kembali ke rutinitas ibukota dengan energi penuh!</p>
            </div>
          </div>
        </div>

        {/* SOFT SELLING PRODUCT INJECTION */}
        <div className="bg-stone-900 rounded-3xl p-6 sm:p-10 my-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Jangan Pusing Jadi Panitia, Pilih Paket "Terima Beres"</h2>
            <p className="text-stone-300 leading-relaxed mb-8">
              Saya tahu apa yang kamu pikirkan: <i>"Jadwalnya sih seru, tapi siapa yang mau repot urus booking villa, cari vendor rafting, beli arang buat BBQ, sampai pesan makan siang?"</i><br/><br/>
              Menjadi panitia liburan itu berat. Karena itulah, kami di Go Pangalengan punya jalan pintas paling cemerlang untukmu:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Corporate */}
              <div className="bg-white rounded-2xl p-6 border-b-4 border-emerald-500 flex flex-col h-full hover:-translate-y-1 transition duration-300">
                <div className="bg-stone-100 text-stone-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-max mb-4">Rombongan Kantor</div>
                <h3 className="text-xl font-black text-stone-900 mb-2">Paket Feast & Fun</h3>
                <p className="text-sm text-stone-500 mb-4 flex-grow">Lupakan stres negosiasi vendor. Villa, Rafting, Paintball, 3x Makan, BBQ, Live Music, hingga Video Cinematic. Panitia cukup bawa koper!</p>
                <a href="/paket/paket-outing-perusahaan-2-hari-1-malam-bestseller" className="text-emerald-600 font-bold text-sm inline-flex items-center group mt-auto">
                  Lihat Detail Paket <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Card Family */}
              <div className="bg-white rounded-2xl p-6 border-b-4 border-emerald-500 flex flex-col h-full hover:-translate-y-1 transition duration-300">
                <div className="bg-stone-100 text-stone-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-max mb-4">Keluarga & Circle</div>
                <h3 className="text-xl font-black text-stone-900 mb-2">Glamping & Offroad / ATV</h3>
                <p className="text-sm text-stone-500 mb-4 flex-grow">Tidur intim di tenda Glamping VIP yang hangat, lalu siang harinya dijemput Land Rover/ATV untuk menembus hutan pinus. Urusan makan dan kayu bakar sudah siap di depan tendamu.</p>
                <a href="/paket/paket-glamping-offroad-pangalengan" className="text-emerald-600 font-bold text-sm inline-flex items-center group mt-auto">
                  Lihat Detail Paket <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CLOSING */}
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Amankan Tanggalmu Sekarang Sebelum Penuh!</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Pangalengan kini bukan lagi permata yang tersembunyi. Setiap akhir pekan tiba, villa-villa berfasilitas lengkap dan slot perahu <i>rafting</i> favorit selalu ludes terpesan berminggu-minggu sebelumnya.
        </p>
        <p className="text-stone-600 leading-relaxed mb-8">
          Jangan biarkan wacana <i>healing</i> grupmu berujung jadi wacana selamanya. Berhenti pusing menjadi panitia sendirian. Klik tombol di bawah ini, sapa admin kami, ceritakan berapa orang yang akan ikut, dan biarkan kami yang mengurus sisanya!
        </p>

        <a 
          href={generateWALink("Halo Go Pangalengan, saya butuh bantuan mengatur jadwal liburan 2 Hari 1 Malam untuk rombongan saya dari Jakarta/Bekasi.")} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full text-center transition flex justify-center items-center gap-2 shadow-xl w-full sm:w-auto inline-flex"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.048l-3.281-.525a1.125 1.125 0 00-1.22.59l-1.92 3.84a16.03 16.03 0 01-8.25-8.25l3.84-1.92c.28-.14.5-.38.59-1.22l-.525-3.28a1.125 1.125 0 00-1.048-.865H3.75A2.25 2.25 0 002.25 6.75z" /></svg>
          Konsultasi & Booking via WhatsApp
        </a>
      </>
    )
  },
  {
    slug: "daftar-harga-wahana-seru-pangalengan-atv-offroad-paintball", 
    judul: "Daftar Harga Wahana Seru di Pangalengan: Offroad Land Rover, ATV, hingga Paintball",
    kategori: "Info Wahana", 
    tanggal: "10 Mei 2026",
    waktuBaca: "5 Menit Baca",
    image: "/keluarga-seru.jpg", 
    excerpt: "Jangan cuma duduk ngopi! Cek daftar harga terbaru 2026 untuk wahana ekstrem di Pangalengan: Offroad, ATV, Paintball, dan Flying Fox.",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-5 sm:mb-6 text-base sm:text-lg">
          Banyak teman-teman dari luar kota yang mengira kalau liburan ke Pangalengan itu hanya tentang duduk manis menyeruput teh hangat sambil melihat kabut. Padahal, daratan di selatan Bandung ini menyimpan arena bermain yang sayang banget kalau dilewatkan.
        </p>
        <p className="text-stone-600 leading-relaxed mb-5 sm:mb-6 text-base sm:text-lg">
          Setelah puas menikmati ketenangan alam, ini saatnya menaikkan sedikit detak jantungmu. Ada banyak pilihan wisata adrenalin Pangalengan yang siap menantang nyalimu dan rombongan.
        </p>
        <p className="text-stone-600 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg">
          Biar kamu gampang mengatur <i>budget</i> patungan, saya sudah merekap daftar harga wahana Pangalengan edisi terbaru 2026, mulai dari rute darat yang berlumpur hingga berbagai wahana di Situ Cileunca. Yuk, kita bedah satu per satu!
        </p>

        {/* WAHANA 1: OFFROAD */}
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">🚙</span> Eksplorasi Ekstrem: Offroad Land Rover
        </h2>
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 shadow-sm group">
          <img src="/offroad.jpg" alt="Offroad Land Rover Pangalengan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-stone-900/90 backdrop-blur-sm text-emerald-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md flex items-center gap-1">
            <span className="animate-pulse w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Sering Full Booked
          </div>
        </div>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
          Malas jalan kaki menembus hutan, tapi ingin melihat sisi Pangalengan yang tersembunyi? Ini jawabannya. Bayangkan kamu dan teman-teman satu geng duduk di kap belakang mobil klasik Land Rover yang tangguh. 
        </p>
        
        <div className="bg-white border border-stone-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-10 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative z-10">
            <div className="w-full sm:w-1/3 shrink-0">
              <div className="bg-stone-50 text-stone-800 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-stone-200">
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-0.5 text-stone-500">Harga Sewa</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-700">Rp 220k</span>
                <span className="block text-[10px] sm:text-xs font-medium text-stone-500 mt-0.5">/ Orang (Pax)</span>
              </div>
            </div>
            <div className="w-full sm:w-2/3">
              <h4 className="font-bold text-stone-800 text-sm sm:text-base mb-2">Fasilitas All-In Termasuk:</h4>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-1.5 mb-4">
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Unit mobil Land Rover klasik</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Driver handal (merangkap fotografer)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Air mineral & Asuransi</li>
              </ul>
              <a href="/paket/offroad-land-rover-pangalengan" className="inline-block w-full sm:w-auto bg-stone-900 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold text-center px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg transition-colors">
                Detail & Galeri →
              </a>
            </div>
          </div>
        </div>

        {/* WAHANA 2: ATV */}
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">🏎️</span> Pacu Adrenalin Sendiri: ATV Adventure
        </h2>
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 shadow-sm group">
          <img src="/keluarga-seru.jpg" alt="Sewa ATV Pangalengan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-emerald-600/90 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md">
            Aktivitas Terfavorit
          </div>
        </div>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
          Kamu akan memacu kendaraan roda empat ini menyusuri lintasan tanah sejauh 4 kilometer yang membelah area perkebunan teh. <strong>Tips penting:</strong> Wajib bawa setelan baju ganti! Kubangan lumpur di sepanjang jalur pasti akan meninggalkan jejak seru di pakaianmu.
        </p>
        
        <div className="bg-white border border-stone-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-10 shadow-sm">
          <h4 className="font-bold text-stone-800 text-sm sm:text-base mb-3 border-b border-stone-100 pb-2">Opsi Sewa ATV Pangalengan:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <div className="bg-stone-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-stone-200">
              <span className="block text-xs sm:text-sm font-bold text-stone-800 mb-0.5">ATV Single</span>
              <span className="block text-[10px] sm:text-xs text-stone-500 mb-1.5">1 Motor untuk 1 Orang</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-700">Rp 175.000</span>
            </div>
            <div className="bg-stone-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-stone-200">
              <span className="block text-xs sm:text-sm font-bold text-stone-800 mb-0.5">ATV Tandem</span>
              <span className="block text-[10px] sm:text-xs text-stone-500 mb-1.5">1 Motor berdua (Opsi Hemat!)</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-700">Rp 225.000</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-2">
            <p className="text-[10px] sm:text-xs text-stone-500 italic text-center sm:text-left">*Termasuk peminjaman helm, sepatu boots, & instruktur.</p>
            <a href="/paket/sewa-atv-pangalengan" className="w-full sm:w-auto shrink-0 bg-stone-900 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold text-center px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg transition-colors">
              Cek Rute ATV →
            </a>
          </div>
        </div>

        {/* WAHANA 3: PAINTBALL */}
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">🔫</span> Adu Strategi Tim: Paintball Battle
        </h2>
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 shadow-sm group">
          <img src="/paintball.jpg" alt="Paintball Situ Cileunca Pangalengan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
          Ini adalah ajang yang paling pas untuk membalas dendam pada bos atau teman kerjamu—tentunya dengan cara yang aman! Keselamatannya sangat terjamin karena setiap peserta wajib memakai <i>goggle mask</i> dan rompi tebal di area Paintball Situ Cileunca.
        </p>

        <div className="bg-white border border-stone-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="w-full sm:w-1/3 shrink-0">
            <div className="bg-stone-50 text-stone-800 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-stone-200">
              <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-0.5 text-stone-500">Super Murah</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-700">Rp 85k</span>
              <span className="block text-[10px] sm:text-xs font-medium text-stone-500 mt-0.5">/ Orang (Pax)</span>
            </div>
          </div>
          <div className="w-full sm:w-2/3">
            <ul className="text-xs sm:text-sm text-stone-600 space-y-2 font-medium mb-4">
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-black">✓</span> Senjata gas & Perlengkapan safety lengkap</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-black">✓</span> 30 peluru cat per orang</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500 font-black">✓</span> Wasit lapangan & Set arena tempur</li>
            </ul>
            <a href="/paket/paket-paintball-pangalengan" className="inline-block w-full sm:w-auto bg-stone-900 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold text-center px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg transition-colors">
              Intip Arena Tempur →
            </a>
          </div>
        </div>

        {/* WAHANA 4: FLYING FOX */}
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">🦅</span> Singkat Namun Mendebarkan: Flying Fox
        </h2>
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 shadow-sm group">
          <img src="/flyingfox.jpg" alt="Flying Fox Pangalengan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
          Ini bukan <i>flying fox</i> biasa; kamu akan meluncur cepat sepanjang kurang lebih 300 meter dengan pemandangan langsung ke arah danau atau hamparan kebun teh yang hijau.
        </p>
        
        <div className="bg-stone-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-stone-200 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3 sm:gap-4 mb-10">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-stone-900 mb-0.5 text-base sm:text-lg">Tiket Zipline / Flying Fox</h4>
            <p className="text-[10px] sm:text-xs text-stone-500 max-w-xs">Pemandangan estetik meluncur di atas danau.</p>
          </div>
          <div className="text-center sm:text-right shrink-0">
            <span className="text-2xl sm:text-3xl font-black text-emerald-700 block mb-2">Rp 35.000</span>
            <a href="/paket/tiket-flying-fox-situ-cileunca" className="bg-stone-900 hover:bg-emerald-600 text-white text-[11px] sm:text-xs font-bold px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg transition-colors inline-block w-full sm:w-auto">
              Detail Tiket
            </a>
          </div>
        </div>

        {/* BAGIAN PENUTUP & CALL TO ACTION */}
        <div className="bg-stone-900 rounded-2xl sm:rounded-3xl p-5 sm:p-10 my-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block bg-stone-700 text-emerald-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 sm:px-3 sm:py-1 rounded-full mb-3 sm:mb-4 shadow-sm border border-stone-600">🚨 Rahasia Orang Dalam</span>
            <h2 className="text-xl sm:text-3xl font-black text-white mb-3 sm:mb-4 leading-tight">Trik Cerdas: Jangan Beli Tiket Eceran di Lokasi!</h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Risiko kehabisan kuota unit Land Rover dan ATV sangat tinggi karena sering dibooking berminggu-minggu sebelumnya. Selain itu, tiket loket dadakan biasanya lebih mahal.
            </p>
            <div className="bg-stone-800/80 border border-stone-700 rounded-lg sm:rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
              <p className="text-emerald-400 text-sm sm:text-base font-medium leading-relaxed m-0">
                <strong className="text-white">💡 Solusi Cerdas:</strong> Di Go Pangalengan, kamu bisa menggabungkan aktivitas utama (Rafting) dengan wahana tambahan dalam satu <a href="/katalog-wisata" className="text-white underline decoration-emerald-500 underline-offset-4 hover:text-emerald-300 transition">Paket Bundling Diskon</a>. Jauh lebih hemat, dan jadwal main pasti aman!
              </p>
            </div>

            <div className="pt-2 sm:pt-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Amankan Slot Bermainmu!</h3>
              <p className="text-xs sm:text-sm text-stone-400 mb-5 sm:mb-6">
                Sudah kebayang serunya kotor-kotoran naik ATV atau main Paintball? Hubungi kami untuk cek jadwal kosong.
              </p>
              <a 
                href={generateWALink("Halo Go Pangalengan, saya mau tanya ketersediaan tiket ATV/Offroad/Paintball untuk rombongan saya...")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-full text-center transition flex justify-center items-center gap-2 shadow-lg w-full sm:w-auto inline-flex hover:scale-105 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.048l-3.281-.525a1.125 1.125 0 00-1.22.59l-1.92 3.84a16.03 16.03 0 01-8.25-8.25l3.84-1.92c.28-.14.5-.38.59-1.22l-.525-3.28a1.125 1.125 0 00-1.048-.865H3.75A2.25 2.25 0 002.25 6.75z" /></svg>
                Cek Jadwal via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    slug: "harga-glamping-dan-camping-pangalengan-riverside-situ-cileunca", 
    judul: "Harga Glamping & Camping di Pangalengan: Sensasi Tidur Pinggir Sungai dan Danau",
    kategori: "Info Penginapan", 
    tanggal: "10 Mei 2026",
    waktuBaca: "6 Menit Baca",
    image: "/family-camp-a.JPG", 
    excerpt: "Lupakan kamar hotel yang membosankan. Cari tahu bedanya Glamping Riverside dan Camping Situ Cileunca, lengkap dengan bocoran harganya di sini!",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-5 sm:mb-6 text-base sm:text-lg">
          Tidur di kasur hotel berbintang dengan pendingin ruangan yang sejuk mungkin sudah jadi hal biasa bagi kita yang tinggal di ibukota. Tapi, pernahkah kamu merasakan sensasi tidur di atas kasur yang empuk, berselimut tebal, namun dengan atap berbahan kanvas dan lagu pengantar tidur berupa suara aliran sungai langsung di depan pintu kamarmu?
        </p>
        <p className="text-stone-600 leading-relaxed mb-5 sm:mb-6 text-base sm:text-lg">
          Jika kamu mencari pengalaman menginap yang benar-benar bisa menekan tombol <i>reset</i> dari stres pekerjaan, maka Glamping (<i>Glamorous Camping</i>) dan Camping adalah jawabannya. Ini jelas memberikan nyawa liburan yang jauh berbeda dibandingkan sekadar mengunci diri di dalam kamar <i>homestay</i> atau villa biasa.
        </p>
        <p className="text-stone-600 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg">
          Bagi kamu yang sedang memburu lokasi glamping Pangalengan rating tertinggi atau sekadar mencari area camping Pangalengan kebun teh yang tenang, mari kita bedah satu per satu daya tariknya—termasuk bocoran <i>budget</i> yang perlu disiapkan.
        </p>

        {/* SECTION 1: RIVERSIDE */}
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">🌊</span> Glamping Riverside (Pinggir Sungai)
        </h2>
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 shadow-sm">
          <img src="/family-camp-b.JPG" alt="Glamping Riverside Pangalengan" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
          Ini dia tren akomodasi yang sedang merajai lini masa media sosial. Area hutan pinus yang dilalui aliran Sungai Palayangan kini disulap menjadi kawasan elit perkemahan modern.
        </p>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
          Memilih <strong>glamping Pangalengan riverside</strong> berarti kamu memadukan alam liar dengan kenyamanan absolut. Bayangkan kamu membuka resleting tenda di pagi hari, menyeduh secangkir kopi panas, dan hal pertama yang kamu lihat adalah aliran sungai yang jernih membelah pepohonan pinus.
        </p>
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 sm:p-5 mb-10">
          <p className="text-emerald-800 text-sm sm:text-base leading-relaxed m-0 font-medium">
            <strong>Bukan Kemping Biasa:</strong> Kata Glamping di sini menonjolkan aspek <i>glamorous</i>-nya. Tenda sudah berdiri kokoh, ada <i>spring bed</i> empuk, selimut tebal menahan hawa dingin, colokan listrik untuk <i>gadget</i>, hingga sarapan pagi yang diantarkan ke depan tenda.
          </p>
        </div>

        {/* SECTION 2: SITU CILEUNCA */}
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">🌅</span> Syahdunya Camping Tepi Danau
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
          Bagaimana jika kamu adalah tipe orang yang lebih menyukai keheningan tanpa suara arus air sungai yang terlalu bergemuruh? Arahkan pilihanmu pada <strong>camping Pangalengan Situ Cileunca</strong>. Tepi danau seluas 1.400 hektar ini adalah area pelarian sempurna bagi kamu yang mencari kedamaian batin.
        </p>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-10">
          Daya tarik utamanya ada pada pantulan cahaya matahari. Saat sore, air danau akan memantulkan siluet lembayung senja yang magis. Di pagi hari, kamu bisa menikmati sarapan sambil melihat kabut perlahan menghilang dari permukaan danau. Sangat <i>kids-friendly</i> karena permukaannya yang datar.
        </p>

        {/* SECTION 3: ESTIMASI HARGA */}
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">💰</span> Berapa Kisaran Harganya?
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
          Mari kita bicara angka agar kamu bisa menakar ekspektasi saat memburu kueri <i>glamping Pangalengan harga</i> bersahabat atau mencari <i>camping Pangalengan murah</i>.
        </p>
        
        <div className="space-y-3 sm:space-y-4 mb-10">
          <div className="bg-white border border-stone-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center">
            <div className="bg-stone-50 text-stone-700 px-4 py-2 rounded-lg font-bold shrink-0 text-sm w-full sm:w-auto text-center sm:text-left">
              Rp 30k - 50k
            </div>
            <div>
              <h4 className="font-bold text-stone-800 text-sm sm:text-base mb-1">🏕️ Sewa Lahan (Mandiri)</h4>
              <p className="text-xs sm:text-sm text-stone-500 m-0">Sangat murah jika kamu punya peralatan <i>outdoor</i> sendiri (tenda, matras, kompor) dan hanya menyewa lahan di pinggir danau atau kebun teh.</p>
            </div>
          </div>
          
          <div className="bg-white border border-stone-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center">
            <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-bold shrink-0 text-sm w-full sm:w-auto text-center sm:text-left border border-emerald-100">
              Rp 150k - 250k
            </div>
            <div>
              <h4 className="font-bold text-stone-800 text-sm sm:text-base mb-1">⛺ Sewa Tenda Biasa (Terima Beres)</h4>
              <p className="text-xs sm:text-sm text-stone-500 m-0">Jika tidak bawa alat, pengelola menyewakan tenda dome lengkap dengan matras dan <i>sleeping bag</i> (Kapasitas 3-4 orang).</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center">
            <div className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg font-bold shrink-0 text-sm w-full sm:w-auto text-center sm:text-left border border-amber-100">
              Rp 600k - 1.5M+
            </div>
            <div>
              <h4 className="font-bold text-stone-800 text-sm sm:text-base mb-1">✨ Glamping VIP</h4>
              <p className="text-xs sm:text-sm text-stone-500 m-0">Tenda estetik bergaya safari/kabin dengan fasilitas <i>spring bed</i>, selimut, dan terkadang kamar mandi dalam (<i>water heater</i>).</p>
            </div>
          </div>
        </div>

        {/* SECTION 4: PRODUCT INJECTION (FAMILY CAMP) */}
        <div className="bg-stone-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 my-10 shadow-xl">
          <div className="text-center mb-6 sm:mb-8 border-b border-stone-700 pb-5 sm:pb-6">
            <span className="inline-block bg-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3 border border-emerald-500/30">Rekomendasi Go Pangalengan</span>
            <h2 className="text-xl sm:text-2xl font-black text-white mb-3">Jangan Cuma Tidur, Ambil Paket Family Camp!</h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-lg mx-auto">
              Sayang banget kan sudah bayar untuk glamping di alam terbuka, tapi siang harinya mati gaya? Daripada menyewa glamping dan wahana secara terpisah, coba lirik paket petualangan <i>all-in</i> kami ini:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Pakat 1 */}
            <div className="bg-stone-800 rounded-xl p-4 sm:p-5 border border-stone-700 hover:border-emerald-500 transition-colors flex flex-col h-full">
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">Classic Glamping</h4>
              <span className="text-emerald-400 font-black text-lg sm:text-xl mb-3 block">Rp 395k <span className="text-xs text-stone-400 font-normal">/pax</span></span>
              <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed flex-grow">
                Opsi paling ramah di kantong. Sudah dapat tenda, 1x sarapan hangat, ditambah bonus petualangan main Rafting dan Flying Fox!
              </p>
              <a href="/paket/paket-camping-keluarga-pangalengan" className="text-emerald-400 hover:text-white text-xs font-bold mt-4 inline-flex items-center gap-1">Lihat Detail →</a>
            </div>

            {/* Pakat 2 */}
            <div className="bg-stone-800 rounded-xl p-4 sm:p-5 border border-stone-700 hover:border-emerald-500 transition-colors flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[8px] sm:text-[9px] font-black uppercase px-2 py-1 rounded-bl-lg">Terlaris</div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">Glamping & ATV</h4>
              <span className="text-emerald-400 font-black text-lg sm:text-xl mb-3 block">Rp 495k <span className="text-xs text-stone-400 font-normal">/pax</span></span>
              <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed flex-grow">
                Tidur estetik di malam hari, siangnya lanjut kotor-kotoran main lumpur memacu motor ATV melintasi kebun teh. <i>Perfect!</i>
              </p>
              <a href="/paket/paket-glamping-atv-pangalengan" className="text-emerald-400 hover:text-white text-xs font-bold mt-4 inline-flex items-center gap-1">Lihat Detail →</a>
            </div>

            {/* Pakat 3 */}
            <div className="bg-stone-800 rounded-xl p-4 sm:p-5 border border-stone-700 hover:border-emerald-500 transition-colors flex flex-col h-full">
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">Glamping & Offroad</h4>
              <span className="text-emerald-400 font-black text-lg sm:text-xl mb-3 block">Rp 620k <span className="text-xs text-stone-400 font-normal">/pax</span></span>
              <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed flex-grow">
                Kasta tertinggi liburan <i>circle</i>-mu. Tidur VIP, paginya langsung dijemput Land Rover untuk menembus hutan pinus.
              </p>
              <a href="/paket/paket-glamping-offroad-pangalengan" className="text-emerald-400 hover:text-white text-xs font-bold mt-4 inline-flex items-center gap-1">Lihat Detail →</a>
            </div>
          </div>
          <p className="text-center text-[10px] sm:text-xs text-stone-500 mt-5 italic">*Semua paket sudah termasuk fasilitas api unggun, asuransi, tiket kawasan, dan dokumentasi foto.</p>
        </div>

        {/* CLOSING */}
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4">Waktunya Mengamankan Tenda Estetikmu!</h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
          Harus kami akui, jumlah unit <i>glamping</i> di pinggir sungai (Riverside) atau tepi danau ini jumlahnya sangat terbatas. Percayalah, slot untuk akhir pekan (Sabtu-Minggu) seringkali sudah ludes terpesan berminggu-minggu sebelumnya.
        </p>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
          Jangan biarkan wacana liburan estetikmu gagal hanya karena keduluan <i>circle</i> lain. Klik tombol di bawah ini, sapa admin kami, dan mari berdiskusi untuk mencocokkan jadwal serta memilih spot tenda terbaik untuk rombonganmu.
        </p>

        <a 
          href={generateWALink("Halo Go Pangalengan, saya mau tanya ketersediaan dan harga tenda Glamping/Camping untuk rombongan saya...")} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-center transition flex justify-center items-center gap-2 shadow-xl w-full sm:w-auto inline-flex hover:scale-105 duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.048l-3.281-.525a1.125 1.125 0 00-1.22.59l-1.92 3.84a16.03 16.03 0 01-8.25-8.25l3.84-1.92c.28-.14.5-.38.59-1.22l-.525-3.28a1.125 1.125 0 00-1.048-.865H3.75A2.25 2.25 0 002.25 6.75z" /></svg>
          Konsultasi Tenda Glamping
        </a>
      </>
    )
  },
  {
    slug: "rekomendasi-penginapan-pangalengan-terbaik", 
    judul: "Rekomendasi Penginapan di Pangalengan: View Bagus, Pinggir Sungai, hingga Air Panas",
    kategori: "Info Penginapan",
    tanggal: "09 Mei 2026",
    waktuBaca: "6 Menit Baca",
    image: "/saung-rungkun.jpg", // Gambar cover artikel
    excerpt: "Bingung mencari tempat menginap? Simak panduan memilih villa dan glamping di Pangalengan berdasarkan view, fasilitas air panas, hingga kapasitas rombongan.",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          Memilih tempat menginap memang gampang-gampang susah. Apalagi kalau kamu dan rombongan dari Jakarta punya selera yang berbeda-beda. Ada yang ingin buka jendela langsung lihat kebun teh, ada yang ingin <i>aesthetic</i> di pinggir sungai, tapi ada juga yang syarat utamanya: <i>“Pokoknya harus ada air panas, dingin euy!”</i>
        </p>
        <p className="text-stone-600 leading-relaxed mb-10 text-lg">
          Tenang, sebagai teman lokalmu, saya sudah memetakan tipe-tipe penginapan terbaik di sini. Mari kita bedah satu per satu supaya kamu bisa langsung <i>booking</i> tempat yang paling pas dengan <i>vibes</i> rombonganmu.
        </p>

        {/* BAGIAN 1: VIEW BAGUS */}
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Penginapan di Pangalengan dengan View Bagus</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Kalau tujuan utamamu datang ke Pangalengan adalah untuk "cuci mata" dari gedung-gedung bertingkat, maka penginapan di area dataran tinggi atau yang menghadap langsung ke bentang alam adalah pilihan mutlak.
        </p>
        <p className="text-stone-600 leading-relaxed mb-6">
          Keuntungannya: Kamu bisa bangun pagi, membuka pintu, dan langsung disambut lautan kabut putih sebelum matahari naik. Kamu tidak perlu terburu-buru memanaskan mobil di pagi buta untuk mengejar <i>sunrise</i>.
        </p>
        
        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 mb-10">
          <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-4">Rekomendasi Kami:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/penginapan/glamping-sagaya-pangalengan" className="flex items-center gap-4 bg-white p-3 rounded-xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition group">
              <div className="w-16 h-16 bg-stone-200 rounded-lg overflow-hidden shrink-0">
                <img src="/glamping-sagaya.jpg" alt="Glamping Sagaya" className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
              <div>
                <strong className="text-stone-800 block text-sm group-hover:text-emerald-700 transition">Glamping Sagaya</strong>
                <span className="text-[11px] text-stone-500 line-clamp-1">View hamparan kebun teh berkabut</span>
              </div>
            </a>
            <a href="/penginapan/villa-family-c-pangalengan" className="flex items-center gap-4 bg-white p-3 rounded-xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition group">
              <div className="w-16 h-16 bg-stone-200 rounded-lg overflow-hidden shrink-0">
                <img src="/family-c.jpg" alt="Homestay Family C" className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
              <div>
                <strong className="text-stone-800 block text-sm group-hover:text-emerald-700 transition">Homestay Family C</strong>
                <span className="text-[11px] text-stone-500 line-clamp-1">View langsung ke danau Cileunca</span>
              </div>
            </a>
          </div>
        </div>

        {/* BAGIAN 2: PINGGIR SUNGAI */}
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Sensasi Penginapan Pinggir Sungai</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Mungkin kamu tipe orang yang lebih suka suara gemericik air daripada sekadar pemandangan diam? Kalau iya, area Hutan Pinus Rahong dan kawasan sekitar aliran Sungai Palayangan adalah surga buatmu. Konsep penginapan di sini biasanya memadukan teduhnya hutan pinus dengan kabin yang berdiri tepat di tepi sungai.
        </p>
        <p className="text-stone-600 leading-relaxed mb-6">
          Keuntungannya: Suasana malamnya sangat syahdu. Selain itu, penginapan di pinggir sungai ini sangat taktis jika agenda utamamu adalah bermain rafting keesokan harinya. Kamu cukup berjalan kaki dari kamar menuju titik <i>start</i> perahu karet. Sangat praktis!
        </p>

        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 mb-10">
          <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-4">Rekomendasi Kami:</h4>
          <div className="grid grid-cols-1 gap-4">
            <a href="/penginapan/villa-palayangan-a" className="flex items-center gap-4 bg-white p-3 rounded-xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition group">
              <div className="w-16 h-16 bg-stone-200 rounded-lg overflow-hidden shrink-0">
                <img src="/paket2.jpg" alt="Glamping Palayangan A" className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
              <div>
                <strong className="text-stone-800 block text-sm group-hover:text-emerald-700 transition">Glamping Palayangan A (Harmony)</strong>
                <span className="text-[11px] text-stone-500 line-clamp-1">Kabin kayu premium di area riverside, lengkap dengan sarapan.</span>
              </div>
            </a>
          </div>
        </div>

        {/* BAGIAN 3: AIR PANAS / PRIVATE POOL */}
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Villa dengan Fasilitas Air Panas & Private Pool</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Membawa orang tua, anak kecil, atau rombongan keluarga besar? Keamanan dan kenyamanan ekstra adalah prioritas. Ingat, suhu malam hari di Pangalengan bisa turun menyentuh angka belasan derajat celcius. Bagi teman-teman yang terbiasa dengan udara panas ibukota, ini bisa bikin menggigil.
        </p>
        <p className="text-stone-600 leading-relaxed mb-6">
          Karena itu, mencari villa tertutup yang memiliki fasilitas <i>water heater</i> (pemanas air) di kamar mandi adalah sebuah keharusan. Bahkan, kini banyak villa premium yang menawarkan <i>private heated pool</i> (kolam renang air hangat) atau kolam renang akses khusus.
        </p>

        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 mb-10">
          <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-4">Rekomendasi Kami:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/penginapan/villa-bumi-tilu-pangalengan" className="flex items-center gap-4 bg-white p-3 rounded-xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition group">
              <div className="w-16 h-16 bg-stone-200 rounded-lg overflow-hidden shrink-0">
                <img src="/bumi-tilu.jpg" alt="Villa Bumi Tilu" className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
              <div>
                <strong className="text-stone-800 block text-sm group-hover:text-emerald-700 transition">Villa Bumi Tilu</strong>
                <span className="text-[11px] text-stone-500 line-clamp-1">Fasilitas sultan dengan private pool mewah.</span>
              </div>
            </a>
            <a href="/penginapan/penginapan-saung-gadis" className="flex items-center gap-4 bg-white p-3 rounded-xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition group">
              <div className="w-16 h-16 bg-stone-200 rounded-lg overflow-hidden shrink-0">
                <img src="/saung-gadis.JPG" alt="Saung Gadis" className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
              <div>
                <strong className="text-stone-800 block text-sm group-hover:text-emerald-700 transition">Saung Gadis</strong>
                <span className="text-[11px] text-stone-500 line-clamp-1">Water heater, 10 kamar bilas, & akses pool.</span>
              </div>
            </a>
          </div>
        </div>

        {/* BAGIAN 4: MURAH ROMBONGAN */}
        <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4">Tips Mencari Penginapan Murah untuk Rombongan</h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Nah, bagaimana kalau kamu datang dengan rombongan besar, misalnya gathering kantor atau reuni kampus yang jumlahnya belasan hingga puluhan orang?
        </p>
        <p className="text-stone-600 leading-relaxed mb-6">
          Menyewa glamping satu per satu tentu akan membuat budget membengkak. Solusi paling cerdas dan murah adalah menyewa satu rumah atau villa utuh (<i>Private Villa</i>). Sebagai gambaran, tarif sewa villa berkapasitas 20 hingga 40 orang di Pangalengan bisa jauh lebih hemat saat dibagikan dengan jumlah peserta. Seringkali hanya jatuh di angka seratus ribuan per orang! Sangat hemat, dan rombongan bisa berkumpul bebas.
        </p>

        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 mb-10">
          <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-4">Rekomendasi Kapasitas Raksasa:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/penginapan/villa-wantea-pangalengan" className="flex items-center gap-4 bg-white p-3 rounded-xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition group">
              <div className="w-16 h-16 bg-stone-200 rounded-lg overflow-hidden shrink-0">
                <img src="/villa-wantea.jpg" alt="Villa Wantea" className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
              <div>
                <strong className="text-stone-800 block text-sm group-hover:text-emerald-700 transition">Villa Wantea</strong>
                <span className="text-[11px] text-stone-500 line-clamp-1">Kapasitas 30 orang + Billiard & Karaoke</span>
              </div>
            </a>
            <a href="/penginapan/villa-putih-pangalengan" className="flex items-center gap-4 bg-white p-3 rounded-xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition group">
              <div className="w-16 h-16 bg-stone-200 rounded-lg overflow-hidden shrink-0">
                <img src="/villa-putih.jpg" alt="Vila Putih" className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
              <div>
                <strong className="text-stone-800 block text-sm group-hover:text-emerald-700 transition">Vila Putih</strong>
                <span className="text-[11px] text-stone-500 line-clamp-1">Kapasitas ekstrem 45 orang, super instagenic</span>
              </div>
            </a>
          </div>
        </div>

        {/* PENUTUP & CTA */}
        <div className="border-t-2 border-stone-100 mt-12 pt-8">
          <p className="text-stone-800 text-lg font-bold mb-4">
            Sudah menemukan tipe penginapan mana yang paling cocok untuk rencana liburanmu?
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Daripada kamu menghabiskan waktu berjam-jam melakukan riset, membaca review satu per satu, dan menebak-nebak apakah foto penginapannya sesuai dengan aslinya, kami sudah menyortir pilihan terbaiknya untukmu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/penginapan" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full text-center transition shadow-lg">
              Lihat Semua Katalog Penginapan
            </a>
            {/* Tombol dengan Import Contact.ts */}
            <a 
              href={generateWALink("Halo Go Pangalengan, saya butuh rekomendasi villa untuk rombongan.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold px-8 py-4 rounded-full text-center transition flex justify-center items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.048l-3.281-.525a1.125 1.125 0 00-1.22.59l-1.92 3.84a16.03 16.03 0 01-8.25-8.25l3.84-1.92c.28-.14.5-.38.59-1.22l-.525-3.28a1.125 1.125 0 00-1.048-.865H3.75A2.25 2.25 0 002.25 6.75z" /></svg>
              Konsultasi via WhatsApp
            </a>
          </div>
          <p className="text-sm text-stone-400 mt-4 font-medium italic">
            *Semua properti di atas sudah kami kurasi khusus agar malam istirahatmu sama berkesannya dengan petualangan siang harimu.
          </p>
        </div>
      </>
    )
  },
  
];