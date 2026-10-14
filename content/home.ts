export const home = {
  hero: {
    eyebrow: "FRESH • FAST • DELICIOUS",
    title: "Hidangan Lezat & Segar, Siap Disajikan Hangat",
    description:
      "Lapar dan rindu makanan lezat berkualitas? Kami menyajikan hidangan artisan bercita rasa istimewa dengan bahan baku segar pilihan setiap hari. Nikmati santap hangat di kafe atau pesan kilat ke rumah Anda.",
    stickers: {
      mood: "Good Food, Good Mood ✨",
      price: "Mulai Rp 24.000",
    },
    features: [
      { label: "Pengantaran Cepat & Hangat" },
      { label: "Bahan Segar Berkualitas" },
      { label: "100% Halal & Higienis" },
    ],
    ctaPrimary: {
      label: "Lihat Semua Menu",
      href: "/menu",
    },
    ctaSecondary: {
      label: "Reservasi Meja",
      href: "/reservasi",
    },
    image: "/images/hero-image.jpg",
  },

  promos: {
    banner1: {
      eyebrow: "RESEP PILIHAN CHEF",
      title: "Kelezatan Istimewa Dibuat Segar & Disajikan Hangat",
      description:
        "Porsi melimpah dengan racikan bumbu khas DelishDrop untuk makan siang maupun santap malam keluarga.",
      cta: {
        label: "Pesan Sekarang",
        href: "/menu",
      },
      image: "/images/promo-bowl.jpg",
    },
    banner2: {
      discountBadge: "Hemat Hingga 30%",
      eyebrow: "LOADED ARTISAN COMBOS",
      title: "Paket Double Burger & Minuman Segar",
      description:
        "Nikmati paket hemat burger daging sapi Australia lengkap dengan kentang goreng renyah dan es teh buah.",
      cta: {
        label: "Pesan Promo",
        href: "/menu",
      },
      image: "/images/promo-burger.jpg",
    },
  },

  trustBand: [
    {
      title: "Cita Rasa Autentik",
      description:
        "Diracik menggunakan bahan segar harian pilihan tanpa pengawet oleh chef berpengalaman.",
    },
    {
      title: "Pengantaran Kilat",
      description:
        "Kemasan food-grade bersegel khusus menjaga suhu hangat dan kebersihan hidangan sampai di tangan Anda.",
    },
    {
      title: "10.000+ Pelanggan Puas",
      description:
        "Dipercaya ribuan penikmat kuliner di Jakarta dengan rating 4.9/5 di Google Maps dan ulasan pelanggan.",
    },
  ],

  about: {
    eyebrow: "Tentang DelishDrop",
    title: "Kelezatan Artisan dari Dapur Terbuka yang Jujur & Higienis",
    description:
      "DelishDrop berdiri dengan misi sederhana: menyajikan hidangan berkualitas restoran bintang lima dengan keramahan hangat kafe lokal. Setiap hari kami memanggang roti brioche segar, mencampur saus buatan sendiri, dan memilih sayuran hidroponik langsung dari petani rekanan.",
    highlights: [
      {
        title: "Bahan 100% Segar Harian",
        description:
          "Daging sapi pilihan dan sayuran organik dipasok segar setiap pagi tanpa stok beku lama.",
      },
      {
        title: "Bebas Pengawet & MSG Buatan",
        description:
          "Semua kaldu dan racikan bumbu dibuat manual untuk cita rasa gurih alami yang nyaman di perut.",
      },
      {
        title: "Dapur Terbuka Higienis",
        description:
          "Standar sanitasi ketat dengan konsep open-kitchen yang dapat dilihat langsung oleh tamu.",
      },
      {
        title: "Suasana Hangat & Nyaman",
        description:
          "Area indoor ber-AC yang tenang serta area outdoor asri untuk kumpul bersama sahabat dan keluarga.",
      },
    ],
  },

  gallery: {
    eyebrow: "Galeri & Suasana",
    title: "Momen Manis di Sudut Resto DelishDrop",
    description:
      "Dari gemuruh panggangan dapur hingga sudut meja yang nyaman, nikmati setiap detik bersantap bersama kami.",
    items: [
      {
        title: "Ruang Bersantap Nyaman",
        category: "Interior Kafe",
        image: "/images/resto-ambiance-1.jpg",
      },
      {
        title: "Area Outdoor Garden",
        category: "Suasana Santai",
        image: "/images/resto-ambiance-2.jpg",
      },
      {
        title: "Chef Saat Menyiapkan Hidangan",
        category: "Dapur Artisan",
        image: "/images/kitchen-chef.jpg",
      },
      {
        title: "Plating Rice Bowl Spesial",
        category: "Kreasi Dapur",
        image: "/images/rice-bowl.jpg",
      },
    ],
  },

  testimonials: {
    eyebrow: "Ulasan Pelanggan",
    title: "Cerita Rasa dari Mereka yang Sudah Mencoba",
    description:
      "Kebahagiaan dan senyum pelanggan setelah menikmati suapan pertama adalah alasan kami terus berkreasi.",
    items: [
      {
        name: "Clarissa Wijaya",
        role: "Creative Director & Foodie",
        avatar: "/images/avatar-1.jpg",
        rating: 5,
        review:
          "Burger terbaik di kawasan Senopati! Dagingnya juicy banget, caramelized onion-nya manis pas, dan bun-nya lembut empuk. Pengiriman takeaway-nya juga super rapi dan tetap hangat.",
      },
      {
        name: "Dimas Prasetyo",
        role: "Arsitek & Pelanggan Setia",
        avatar: "/images/avatar-2.jpg",
        rating: 5,
        review:
          "Margherita Pizza-nya juara! Crust tipis renyah khas Neapolitan dengan aroma daun basil yang harum. Tempatnya juga sangat nyaman untuk meeting santai sambil ngopi susu aren.",
      },
      {
        name: "Nadia Amanda",
        role: "Lifestyle Content Creator",
        avatar: "/images/avatar-3.jpg",
        rating: 5,
        review:
          "Salad bowlnnya segar luar biasa dan dressing-nya seimbang. Waktu bikin acara syukuran kecil keluarga di sini, pelayanannya sangat tanggap dan ramah. Highly recommended!",
      },
    ],
  },

  faq: {
    eyebrow: "Tanya Jawab",
    title: "Pertanyaan yang Sering Diajukan",
    description:
      "Temukan jawaban cepat seputar menu, layanan pemesanan, reservasi, dan fasilitas di DelishDrop.",
    items: [
      {
        question: "Apakah seluruh sajian di DelishDrop halal?",
        answer:
          "Ya, 100% menu kami dipersiapkan menggunakan bahan baku bersertifikat halal, tidak mengandung alkohol maupun turunan non-halal, dan diolah dengan standar higienis tinggi.",
      },
      {
        question:
          "Bagaimana cara memesan makanan untuk delivery ke rumah/kantor?",
        answer:
          "Anda bisa langsung membuka halaman Menu di website ini, memilih hidangan yang diinginkan, lalu menekan tombol 'Pesan via WhatsApp'. Format pesanan akan terisi otomatis dan admin kami segera mengkonfirmasi alamat serta pengiriman kurir.",
      },
      {
        question: "Apakah perlu reservasi meja sebelum datang ke resto?",
        answer:
          "Untuk hari biasa (weekday), walk-in dipersilakan. Namun untuk akhir pekan (weekend) atau rombongan lebih dari 4 orang, kami sangat menyarankan reservasi terlebih dahulu lewat halaman Reservasi untuk memastikan ketersediaan meja terbaik.",
      },
      {
        question: "Berapa jam operasional DelishDrop?",
        answer:
          "Kami melayani Anda setiap hari: Senin sampai Jumat pukul 10.00 – 22.00 WIB, dan Sabtu sampai Minggu pukul 08.00 – 23.00 WIB.",
      },
      {
        question: "Metode pembayaran apa saja yang tersedia?",
        answer:
          "Kami menerima pembayaran digital via QRIS (GoPay, OVO, Dana, ShopeePay), transfer bank BCA/Mandiri, kartu debit/kredit, serta pembayaran tunai di kasir.",
      },
    ],
  },
};
