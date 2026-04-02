// src/config/contact.ts

export const CONTACT = {
    // Nomor WA resmi Pangalengan Trip
    WA_NUMBER: "6285717075116", 
    COMPANY_NAME: "Pangalengan Trip",
  };
  
  // Fungsi untuk membuat link WA dengan pesan dinamis otomatis
  export const generateWALink = (message: string) => {
    return `https://wa.me/${CONTACT.WA_NUMBER}?text=${encodeURIComponent(message)}`;
  };