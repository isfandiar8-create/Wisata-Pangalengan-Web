export default function GoogleMaps() {
    return (
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid gap-12 md:grid-cols-3 md:items-center">
            
            {/* Teks Penjelasan */}
            <div className="md:col-span-1 space-y-6">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full">
                Lokasi Strategis
              </span>
              <h2 className="text-3xl font-black text-stone-900 leading-tight">
                Pusat Operasional <br /> <span className="text-emerald-600">Go Pangalengan</span>
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed">
                Kantor kami terletak di jantung wisata Pangalengan. Memudahkan koordinasi untuk seluruh kegiatan petualangan Anda di Situ Cileunca dan sekitarnya.
              </p>
              <div className="pt-4">
                <a 
                  href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.8078186487863!2d107.5546903!3d-7.1879434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e689143386830cf%3A0xb2daa8146a071f96!2sGo%20Pangalengan%20-%20Paket%20Wisata%20%26%20Rafting%20Situ%20Cileunca!5e0!3m2!1sid!2sid!4v1777244658863!5m2!1sid!2sid" // GANTI dengan link share Gmaps Anda
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-stone-900 font-bold border-b-2 border-emerald-500 pb-1 hover:text-emerald-600 transition-all"
                >
                  Buka di Google Maps ↗
                </a>
              </div>
            </div>
  
            {/* Frame Peta dengan Styling Rounded */}
            <div className="md:col-span-2 h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-stone-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.8078186487863!2d107.5546903!3d-7.1879434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e689143386830cf%3A0xb2daa8146a071f96!2sGo%20Pangalengan%20-%20Paket%20Wisata%20%26%20Rafting%20Situ%20Cileunca!5e0!3m2!1sid!2sid!4v1777244658863!5m2!1sid!2sid" // GANTI bagian src ini dengan hasil Copy HTML dari Gmaps
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
  
          </div>
        </div>
      </section>
    );
  }