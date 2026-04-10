"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black text-white"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/hero.jpg"
        alt="Go Pangalengan"
        fill
        className="object-cover z-0"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 z-10 bg-black/60" />

      <FadeIn>
        <div className="relative z-20 flex w-full max-w-[100vw] flex-col items-center overflow-hidden px-4 text-center sm:px-6">
          <h1
            id="hero-heading"
            className="break-words text-balance text-4xl font-bold tracking-widest text-white sm:text-5xl md:text-7xl"
          >
            Go Pangalengan
          </h1>
          <p className="mt-4 text-balance text-lg text-emerald-400 sm:text-xl md:text-2xl">
            Glamping, Rafting, Outing, dan Custom Trip
          </p>
          <p className="mx-auto mt-6 max-w-2xl px-2 text-balance text-sm leading-relaxed text-zinc-200 sm:text-base md:text-lg">
            Kami merancang pengalaman wisata alam
            yang autentik, nyaman, dan tak terlupakan untuk Anda dan orang
            tersayang.
          </p>

          <Link
            href="https://wa.me/6285717075116?text=Halo%20Pangalengan%20Trip%2C%20Saya%20berencana%20untuk%20berlibur%20ke%20Pangalengan.%20Tolong%20beri%20tahu%20paket%20wisata%20sekaligus%20paket%20custom%20trip"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
          >
            Tanya via WhatsApp
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
