export const CONTACT = {
  // Nomor WA resmi Go Pangalengan
  WA_NUMBER: "6285717075116", 
  COMPANY_NAME: "Go Pangalengan",
};

// Fungsi untuk membuat link WA dengan pesan dinamis otomatis & sisipan referal
export const generateWALink = (message: string) => {
  let finalMessage = message;

  // Memastikan kode hanya membaca memori jika sedang berjalan di browser (Client-side)
  if (typeof window !== "undefined") {
    // Mengambil kode referal yang tersimpan di memori HP/Laptop pengunjung
    const referralCode = localStorage.getItem("gp_referral");
    
    // Jika ada kodenya, otomatis diselipkan di baris baru pada akhir pesan
    if (referralCode) {
      finalMessage = `${message}\n\n*(Ref: ${referralCode})*`;
    }
  }

  // Mengubah teks menjadi format URL yang dikenali oleh sistem WhatsApp
  return `https://wa.me/${CONTACT.WA_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
};