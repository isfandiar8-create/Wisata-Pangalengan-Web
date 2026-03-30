"use client";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import Image from "next/image";

// ─── Data: pemisahan data dan UI ─────────────────────────────────────────────

export type PaketItem = {
  id: string;
  nama: string;
  harga: string;
  hargaAsli: string;
  hargaDiskon: string;
  fasilitas: string[];
  label?: string;
  deskripsi: string;
  image: string;
};

function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
}: {
  from?: number;
  to: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{value}</span>;
}

function LiveRollingCounter() {
  const [count, setCount] = useState(1351);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex overflow-hidden h-[1.2em] relative align-bottom">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={count}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="inline-block"
        >
          {count}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

const kategoriPetualangan: PaketItem[] = [
  {
    id: "rafting",
    nama: "Rafting Pangalengan",
    harga: "Rp 150.000 / Orang",
    hargaAsli: "Rp 250.000",
    hargaDiskon: "Rp 175.000",
    fasilitas: [
      "Perahu Karet & Safety Gear",
      "Makan Siang & Snack",
      "Dokumentasi Lengkap",
    ],
    label: "⚡ Terlaris",
    image: "/paket1.jpg",
    deskripsi:
      "Taklukkan derasnya arus Palayangan. Perpaduan sempurna antara tawa lepas, adrenalin, dan kerja sama tim yang akan terus dibicarakan.",
  },
  {
    id: "atv",
    nama: "ATV Pangalengan",
    harga: "Rp 175.000 / Unit",
    hargaAsli: "Rp 240.000",
    hargaDiskon: "Rp 185.000",
    fasilitas: [
      "Unit ATV & Helm Standar",
      "Guide Jalur Perkebunan",
      "Air Mineral",
    ],
    image: "/paket1.jpg",
    deskripsi:
      "Jelajahi kebun teh tanpa batas. Rasakan kebebasan saat mesin menggema dan angin segar menerpa—pelarian singkat yang mengembalikan semangat.",
  },
  {
    id: "offroad",
    nama: "Offroad Pangalengan",
    harga: "Rp 1.500.000 / Unit",
    hargaAsli: "Rp 1.900.000",
    hargaDiskon: "Rp 1.500.000",
    fasilitas: [
      "Land Rover + Driver",
      "Rute Hutan Pinus Premium",
      "Dokumentasi Spot Ikonik",
    ],
    label: "Sisa 2 Slot",
    image: "/paket1.jpg",
    deskripsi:
      "Menembus jalur liar dan hutan pinus yang sunyi. Perjalanan yang menantang jiwa dan mempertemukan Anda dengan keheningan alam.",
  },
  {
    id: "flying-fox",
    nama: "Flying Fox",
    harga: "Rp 75.000 / Orang",
    hargaAsli: "Rp 110.000",
    hargaDiskon: "Rp 85.000",
    fasilitas: [
      "Harness & Safety Briefing",
      "Pendampingan Instruktur",
      "Akses Spot Foto",
    ],
    image: "/paket1.jpg",
    deskripsi:
      "Terbang melintasi lembah hijau. Momen singkat di udara saat segalanya melambat dan pemandangan Pangalengan terhampar di bawah kaki.",
  },
  {
    id: "paintball",
    nama: "Paintball",
    harga: "Rp 125.000 / Orang",
    hargaAsli: "Rp 175.000",
    hargaDiskon: "Rp 135.000",
    fasilitas: [
      "Marker Gun + Peluru Standar",
      "Rompi Pelindung",
      "Wasit & Arena Game",
    ],
    image: "/paket1.jpg",
    deskripsi:
      "Arena bermain di tengah alam. Lepaskan penat sambil merasakan tawa bersama tim—pelarian yang seru dan penuh energi positif.",
  },
];

const kategoriPenginapan: PaketItem[] = [
  {
    id: "glamping",
    nama: "Glamping",
    harga: "Rp 350.000 / Malam",
    hargaAsli: "Rp 500.000",
    hargaDiskon: "Rp 375.000",
    fasilitas: [
      "Tenda Premium + Kasur Nyaman",
      "Sarapan Hangat",
      "Area Api Unggun",
    ],
    label: "⚡ Terlaris",
    image: "/paket2.jpg",
    deskripsi:
      "Tidur di bawah taburan bintang dengan fasilitas premium. Bangun dengan pemandangan kabut pagi di atas danau, persis di depan pintu tenda Anda.",
  },
  {
    id: "villa-besar",
    nama: "Villa Kapasitas Besar",
    harga: "Rp 5.000.000 / Malam",
    hargaAsli: "Rp 6.200.000",
    hargaDiskon: "Rp 5.200.000",
    fasilitas: [
      "8-12 Kamar + Aula Kumpul",
      "Kitchen Set Lengkap",
      "Private Garden View",
    ],
    image: "/paket2.jpg",
    deskripsi:
      "Ruang privat untuk seluruh tim. Taman hijau, udara sejuk, dan keheningan yang membantu setiap percakapan bermakna mengalir lebih dalam.",
  },
  {
    id: "cottage",
    nama: "Cottage",
    harga: "Rp 450.000 / Malam",
    hargaAsli: "Rp 620.000",
    hargaDiskon: "Rp 475.000",
    fasilitas: [
      "Kamar Cozy + Air Panas",
      "Sarapan 2 Pax",
      "Dekat Spot Danau",
    ],
    label: "Sisa 2 Slot",
    image: "/paket2.jpg",
    deskripsi:
      "Kamar cozy di tengah perkebunan. Bangun pagi dengan aroma teh dan pemandangan bukit—pelarian sederhana yang memulihkan jiwa.",
  },
];

const kategoriCorporate: PaketItem[] = [
  {
    id: "outing-1hari",
    nama: "Outing 1 Hari",
    harga: "Rp 250.000 / Orang",
    hargaAsli: "Rp 375.000",
    hargaDiskon: "Rp 295.000",
    fasilitas: [
      "Aktivitas Pilihan 1 Hari",
      "Lunch Box + Coffee Break",
      "Facilitator Lapangan",
    ],
    label: "⚡ Favorit Tim HR",
    image: "/paket3.jpg",
    deskripsi:
      "Tinggalkan sejenak rutinitas kantor. Bangun kembali solidaritas tim Anda melalui petualangan alam yang dirancang khusus untuk menyegarkan pikiran.",
  },
  {
    id: "team-building",
    nama: "Team Building",
    harga: "Rp 400.000 / Orang",
    hargaAsli: "Rp 550.000",
    hargaDiskon: "Rp 450.000",
    fasilitas: [
      "Program Games Terstruktur",
      "MC + Fasilitator Profesional",
      "Dokumentasi Tim",
    ],
    image: "/paket3.jpg",
    deskripsi:
      "Rangkaian aktivitas yang menyatukan hati dan pikiran. Di tengah alam Pangalengan, setiap anggota tim menemukan ruang untuk saling mengenal dan berkembang.",
  },
  {
    id: "corporate-2d1n",
    nama: "Corporate 2D1N",
    harga: "Rp 850.000 / Orang",
    hargaAsli: "Rp 1.200.000",
    hargaDiskon: "Rp 950.000",
    fasilitas: [
      "Penginapan 1 Malam",
      "Program Team Session + Outbound",
      "3x Makan + Coffee Break",
    ],
    label: "Sisa 2 Slot",
    image: "/paket3.jpg",
    deskripsi:
      "Dua hari satu malam untuk reset dan reconnect. Penginapan nyaman, aktivitas terukur, dan waktu luang yang cukup untuk bernapas kembali.",
  },
];

// ─── Komponen kartu paket (digunakan oleh .map()) ─────────────────────────────

function PaketCard({ item }: { item: PaketItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200/80 hover:shadow-xl hover:shadow-emerald-500/5">
      <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
        <Image
          src={item.image}
          alt={item.nama}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {item.label ? (
          <span className="absolute right-0 top-0 rounded-bl-lg bg-red-500/90 px-3 py-1 text-xs font-bold text-white">
            {item.label}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-base font-semibold tracking-tight text-zinc-900">
          {item.nama}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-zinc-600">
          {item.deskripsi}
        </p>
        <ul className="mb-5 space-y-2 text-sm text-zinc-600">
          {item.fasilitas.map((fasilitasItem) => (
            <li key={fasilitasItem} className="flex items-start gap-2">
              <span className="mt-0.5 text-emerald-600">✓</span>
              <span>{fasilitasItem}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <div className="flex items-end justify-between gap-3">
            <p className="text-sm text-zinc-400 line-through">{item.hargaAsli}</p>
            <p className="text-xl font-bold text-emerald-600">
              {item.hargaDiskon}
              <span className="ml-1 text-xs font-medium text-zinc-500">/pax</span>
            </p>
          </div>
          <a
            href="#"
            className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-emerald-600 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Pilih Paket
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── Section kategori paket (judul + grid .map()) ─────────────────────────────

function SectionPaket({
  id,
  title,
  subtitle,
  items,
  bgClass,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: PaketItem[];
  bgClass: string;
}) {
  return (
    <section id={id} className={`${bgClass} px-4 py-20 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
            {title}
          </h2>
          <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
            {subtitle}
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <PaketCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex flex-col">
      <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center bg-zinc-950 px-4 text-center sm:px-6 lg:px-8">
  {/* Foto Background. Ganti /hero-pangalengan-trip.webp dengan nama file foto Anda yang ada di folder public */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: 'url(/hero-pangalengan-trip.jpg)' }} 
  ></div>

  {/* Lapisan Hitam Transparan agar teks mudah dibaca */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Konten Teks Hero */}
  <div className="relative z-10 mx-auto max-w-4xl space-y-6">
    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
      Jeda Sejenak dari <br className="hidden sm:block" />
      <span className="text-emerald-400">Bisingnya Kota.</span>
    </h1>
    <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg md:text-xl">
      Eksplorasi Pangalengan dengan cara yang berbeda. Dari rafting penuh tawa, hingga malam tenang di glamping premium. Kami urus detailnya, Anda tinggal menikmati momen.
    </p>
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="#petualangan"
        className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 sm:w-auto sm:text-base"
      >
        Lihat Paket Wisata
      </a>
      <a
        href="https://wa.me/6281234567890?text=Halo%20Pangalengan%20Trip%2C%20Saya%20berencana%20untuk%20berlibur%20ke%20Pangalengan.%20Tolong%20beri%20tahu%20paket%20wisata%20sekaligus%20paket%20custom%20trip"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 sm:w-auto sm:text-base"
      >
        <span>💬</span> Tanya Lewat WhatsApp
      </a>
    </div>
  </div>
</section>

        <FadeIn>
          {/* Jelajahi Destinasi Ikonik */}
          <section
            className="bg-white px-4 py-20 sm:px-6 lg:px-8"
            id="destinasi"
          >
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 space-y-2">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                  Jelajahi Destinasi Ikonik
                </h2>
                <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
                  Tempat-tempat yang membuat perjalanan Anda di Pangalengan tak
                  terlupakan.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:grid-rows-3">
                {/* Nimo Highland - tinggi 2 baris */}
                <div className="group relative overflow-hidden rounded-2xl bg-zinc-200 md:row-span-2">
                  <div className="relative aspect-[4/5] w-full md:aspect-auto md:min-h-[420px]">
                    <Image
                      src="/destinasi.jpg"
                      alt="Nimo Highland"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6 md:p-6">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-emerald-300/90">
                      Pangalengan
                    </p>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight sm:text-xl">
                      Nimo Highland
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-zinc-200">
                      Padang rumput hijau dan langit luas. Rasakan dinginnya pagi
                      dan keheningan yang memulihkan.
                    </p>
                    <p className="text-xs text-zinc-400">
                      Cocok untuk: Camping, Fotografi, Keluarga
                    </p>
                  </div>
                </div>
                {/* Sunrise Point Cukul */}
                <div className="group relative overflow-hidden rounded-2xl bg-zinc-200">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/destinasi.jpg"
                      alt="Sunrise Point Cukul"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-emerald-300/90">
                      Cukul, Pangalengan
                    </p>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight sm:text-xl">
                      Sunrise Point Cukul
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-zinc-200">
                      Sambut pagi di atas awan. Hamparan teh tanpa batas yang
                      menenangkan jiwa.
                    </p>
                    <p className="text-xs text-zinc-400">
                      Cocok untuk: Sunrise, Fotografi, Santai
                    </p>
                  </div>
                </div>
                {/* Hutan Pinus Rahong */}
                <div className="group relative overflow-hidden rounded-2xl bg-zinc-200">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/destinasi.jpg"
                      alt="Hutan Pinus Rahong"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-emerald-300/90">
                      Rahong, Pangalengan
                    </p>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight sm:text-xl">
                      Hutan Pinus Rahong
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-zinc-200">
                      Jalan setapak di antara pinus, udara segar, dan cahaya
                      keemasan yang tembus dari sela-sela pepohonan.
                    </p>
                    <p className="text-xs text-zinc-400">
                      Cocok untuk: Trekking, Fotografi, Healing
                    </p>
                  </div>
                </div>
                {/* Situ Cileunca - full width baris ketiga */}
                <div className="group relative overflow-hidden rounded-2xl bg-zinc-200 md:col-span-2">
                  <div className="relative aspect-[21/9] w-full">
                    <Image
                      src="/destinasi.jpg"
                      alt="Situ Cileunca"
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6 md:p-8">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-emerald-300/90">
                      Situ Cileunca, Pangalengan
                    </p>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
                      Situ Cileunca
                    </h3>
                    <p className="mb-3 max-w-2xl text-sm leading-relaxed text-zinc-200">
                      Danau alami dikelilingi bukit dan kebun teh. Spot
                      bersantai, memancing, atau sekadar menikmati senja.
                    </p>
                    <p className="text-xs text-zinc-400">
                      Cocok untuk: Wisata Air, Memancing, Keluarga
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          {/* Trust & Metrics */}
          <section className="bg-zinc-900 px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-10">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Trust & Metrics
                </h2>
                <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
                  Angka yang mencerminkan kepercayaan klien terhadap kualitas
                  layanan Pangalengan Trip.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                  <p className="text-4xl font-bold text-emerald-400 md:text-5xl">
                    <LiveRollingCounter />+
                  </p>
                  <p className="mt-2 text-zinc-400">Klien Puas</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                  <p className="text-4xl font-bold text-emerald-400 md:text-5xl">
                    <AnimatedCounter to={120} />+
                  </p>
                  <p className="mt-2 text-zinc-400">Corporate Trip</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                  <p className="text-4xl font-bold text-emerald-400 md:text-5xl">
                    <AnimatedCounter to={4} />.<AnimatedCounter to={9} />
                  </p>
                  <p className="mt-2 text-zinc-400">Rating Bintang</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                  <p className="text-4xl font-bold text-emerald-400 md:text-5xl">
                    <AnimatedCounter to={24} />/7
                  </p>
                  <p className="mt-2 text-zinc-400">Layanan Concierge</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <SectionPaket
            id="petualangan"
            title="Kategori Petualangan"
            subtitle="Aktivitas outdoor pilihan di Pangalengan: dari air, darat, hingga udara."
            items={kategoriPetualangan}
            bgClass="bg-white"
          />
        </FadeIn>

        <FadeIn>
          <SectionPaket
            id="penginapan"
            title="Kategori Penginapan"
            subtitle="Menginap nyaman dengan pemandangan alam dan akses ke destinasi wisata."
            items={kategoriPenginapan}
            bgClass="bg-zinc-50"
          />
        </FadeIn>

        <FadeIn>
          <SectionPaket
            id="corporate"
            title="Kategori Corporate"
            subtitle="Paket outing dan team building untuk perusahaan dengan rundown rapi."
            items={kategoriCorporate}
            bgClass="bg-white"
          />
        </FadeIn>

        <FadeIn>
          {/* Concierge & Delivery Service */}
          <section
            className="bg-emerald-900 px-4 py-20 sm:px-6 lg:px-8"
            id="concierge"
          >
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col items-start gap-8 rounded-3xl bg-emerald-950/50 px-6 py-12 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10 sm:py-14">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Butuh Sesuatu yang Spesifik? Kami Antar ke Pintu Tenda Anda.
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-emerald-100/90 sm:text-base">
                    Dari camilan malam, minuman penghangat, hingga kebutuhan
                    darurat. Layanan Concierge kami siap memenuhi permintaan
                    khusus Anda selama di Pangalengan.
                  </p>
                </div>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-emerald-900 shadow-lg transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
                >
                  <span aria-hidden className="text-lg">
                    🛵
                  </span>
                  Chat Layanan Delivery
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Kenapa Memilih Kami */}
        <section
          id="kenapa-kami"
          className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                Kenapa Memilih Kami?
              </h2>
              <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
                Fokus pada pengalaman yang nyaman, aman, dan rapi dari awal
                hingga selesai.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              <div className="rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  📞
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                  Pelayanan 24 Jam
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                  Customer service selalu siap.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  🛡️
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                  Dilindungi Asuransi
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                  Keamanan kegiatan terjamin.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  ✅
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                  Tim Profesional
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                  Tour guide bersertifikat resmi.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  📄
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                  Kredibilitas Legal
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                  Perusahaan wisata berbadan hukum.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FadeIn>
          {/* Testimonial */}
          <section
            id="testimoni"
            className="bg-white px-4 py-20 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-6xl space-y-12">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                  Kata Mereka
                </h2>
                <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
                  Ulasan singkat dari pelanggan yang sudah merasakan perjalanan
                  bersama kami.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    id: "1",
                    quote:
                      "Rundown rapi, tim responsif, dan aktivitasnya seru. Rafting di Palayangan jadi highlight trip kami.",
                    name: "Dinda K.",
                  },
                  {
                    id: "2",
                    quote:
                      "ATV-nya asik banget! Jalur kebun teh Warnasari cantik, guide jelas, dan safety-nya diperhatikan.",
                    name: "Rangga P.",
                  },
                  {
                    id: "3",
                    quote:
                      "Offroad-nya menantang dan worth it. Land Rover-nya tangguh, rute hutan pinusnya dapet banget feel petualangannya.",
                    name: "Sari W.",
                  },
                ].map((t) => (
                  <article
                    key={t.id}
                    className="rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm backdrop-blur"
                  >
                    <p className="text-sm leading-relaxed text-zinc-700">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm font-semibold text-zinc-900">
                        {t.name}
                      </p>
                      <p
                        className="text-amber-500"
                        aria-label="rating 5 bintang"
                      >
                        ⭐⭐⭐⭐⭐
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA & Footer */}
        <section id="kontak" className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl bg-emerald-900 px-6 py-12 text-white shadow-lg sm:px-10 sm:py-14">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Rencanakan Liburan Anda, Tanya Saja Dulu, Gratis!
                  </h2>
                  <p className="max-w-2xl text-sm text-emerald-50/90 sm:text-base">
                    Ceritakan kebutuhan Anda (tanggal, jumlah orang, aktivitas
                    favorit). Kami bantu rekomendasikan itinerary terbaik.
                  </p>
                </div>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-emerald-950 shadow-md transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900 sm:w-auto sm:text-base"
                >
                  Chat WhatsApp Sekarang
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Fat Footer */}
        <footer className="bg-zinc-900 text-zinc-200">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
              {/* Kolom 1: Brand & About */}
              <div className="space-y-4">
                <p className="text-lg font-bold tracking-tight text-white">
                  Pangalengan Trip
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Partner perjalanan terpercaya Anda untuk menjelajahi keindahan
                  alam, petualangan, dan ketenangan di Pangalengan, Bandung
                  Selatan.
                </p>
              </div>

              {/* Kolom 2: Kontak & Lokasi */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Hubungi Kami
                </h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li>
                    <span className="font-medium text-zinc-300">Alamat:</span>{" "}
                    Jl. Raya Situ Cileunca, Pangalengan, Bandung.
                  </li>
                  <li>
                    <span className="font-medium text-zinc-300">Email:</span>{" "}
                    hello@pangalengantrip.com
                  </li>
                  <li>
                    <span className="font-medium text-zinc-300">WhatsApp:</span>{" "}
                    +62 8XX-XXXX-XXXX
                  </li>
                  <li>
                    <span className="font-medium text-zinc-300">
                      Jam Operasional:
                    </span>{" "}
                    Setiap Hari (07.00 - 20.00 WIB)
                  </li>
                </ul>
              </div>

              {/* Kolom 3: Layanan Utama */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Layanan Utama
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-zinc-400 transition hover:text-emerald-400"
                    >
                      Rafting & Petualangan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-zinc-400 transition hover:text-emerald-400"
                    >
                      Sewa Villa & Glamping
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-zinc-400 transition hover:text-emerald-400"
                    >
                      Corporate Outing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-zinc-400 transition hover:text-emerald-400"
                    >
                      Custom Trip
                    </a>
                  </li>
                </ul>
              </div>

              {/* Kolom 4: Media Sosial */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Ikuti Keseruannya
                </h3>
                <p className="text-sm text-zinc-400">
                  Lihat keseruan trip klien kami di sosial media!
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-700 hover:text-white"
                    aria-label="Instagram"
                  >
                    <span aria-hidden>📷</span>
                    <span>Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-700 hover:text-white"
                    aria-label="TikTok"
                  >
                    <span aria-hidden>🎵</span>
                    <span>TikTok</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-700 hover:text-white"
                    aria-label="YouTube"
                  >
                    <span aria-hidden>▶️</span>
                    <span>YouTube</span>
                  </a>
                </div>
                <p className="text-xs text-zinc-500">@pangalengantrip</p>
              </div>
            </div>

            <div className="mt-16 border-t border-zinc-800 py-10">
              <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="text-sm text-zinc-500">
                  © 2026 Pangalengan Trip. All rights reserved.
                </p>
                <p className="text-xs text-zinc-600">
                  Designed for the ultimate experience.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
