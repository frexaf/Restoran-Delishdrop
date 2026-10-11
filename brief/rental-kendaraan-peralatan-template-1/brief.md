# Brief — Rental Kendaraan & Peralatan (Template 1)

Brief ini adalah panduan kerja untuk kategori ini. Bangun dengan **Tokigo starter** (Next.js 16 App Router + Tailwind v4 + TypeScript strict). Baca dan patuhi **`AGENTS.md`**; brief ini melengkapi aturan tersebut.

## Yang wajib ada (semua kategori)

- Navbar (logo, menu maks 5, tombol CTA + WhatsApp) · Hero · Tentang + keunggulan (min 3 poin) · Produk/Layanan (gambar, deskripsi, harga bila relevan) · Galeri/Portfolio · Testimoni · FAQ · Kontak & lokasi (alamat, WA, jam, Maps) · CTA WhatsApp · Footer.
- Responsive 375–1600px+ tanpa horizontal overflow; **light & dark mode** wajib (pakai `ThemeToggle` bawaan starter).
- Semua tombol, navigasi, dan kartu berfungsi — tidak ada link mati, `href="#"`, atau kartu tanpa halaman tujuan.
- Konten contoh relevan kategori (bukan Lorem Ipsum); harga format `Rp 25.000`; jangan mengarang alamat/harga/data klien yang belum diberikan.
- SEO: metadata tiap halaman, heading berurutan, alt text gambar; favicon + identitas brand.
- Gambar dari Unsplash/Pexels/Pixabay — unduh ke `public/` (jangan hotlink), render dengan `next/image`.
- Selesai hanya jika `pnpm typecheck && pnpm lint && pnpm format:check && pnpm build` lolos.
- Pengecekan visual & browser console (tidak ada error, tidak ada gambar gagal muat) dilakukan oleh developer sebelum menyerahkan hasil — agent dilarang memverifikasi via browser.

## Arah visual

- Referensi desain utama: gambar referensi ada langsung di folder ini (root folder — mis. `original-*.webp`). Ikuti nuansa, tipografi, palet, dan komposisinya.
- Jangan menyalin aset atau teks mentah dari referensi, dan jangan hotlink gambar — foto tetap diunduh (Unsplash/Pexels/Pixabay) ke `public/`.
- Jika gambar referensi belum tersedia: ajukan design brief singkat (hero, tipografi, palet, ritme, signature detail) dan tunggu konfirmasi sebelum menulis kode.
- Aturan tampilan tetap mengikuti `AGENTS.md`: anti AI-slop, maks 2 font family, gradient/glass seperlunya, motion satu bahasa gerak, wajib light & dark mode.
- Hasil antar template di kategori yang sama harus terlihat berbeda; gambar referensi adalah pembedanya.
- Catatan tambahan di bagian bawah bersifat tips — jika bertentangan dengan referensi, ikuti referensi.

## Profil

Penyewaan unit: kendaraan, alat camping, alat pesta, peralatan proyek — disesuaikan saat prompting. Pelanggan butuh: **apa yang tersedia, tarif per hari, tersedia tanggal berapa, di mana ambil, cara bayar**.

## Halaman & section khas

**Halaman wajib:** `/`, `/katalog`, `/katalog/[slug]`, `/booking`, `/checkout`, `/lokasi-pickup` — harus dibuat sebagai route nyata, bukan hanya section di homepage. Semua kartu/tombol yang mengarah ke detail harus punya halaman tujuan yang benar-benar dibuat.

- `/` — hero, unit unggulan, alur sewa (pilih unit → tanggal → bayar → pickup), syarat singkat, testimoni, lokasi pickup.
- `/katalog` dan `/katalog/[slug]` — foto, spesifikasi, tarif per hari, status (Tersedia/Disewa), tombol "Sewa".
- `/booking` — pilih tanggal mulai–selesai, ringkasan biaya (jumlah hari × tarif + deposit).
- `/checkout` — halaman pembayaran **dummy**: ringkasan pesanan, QRIS contoh, instruksi, tombol "Konfirmasi via WhatsApp".
- `/lokasi-pickup` — alamat, jam, Maps, opsi antar-jemput.
- `/syarat-ketentuan` — deposit, keterlambatan, kerusakan, pembatalan.
- `/kontak` — WA.

## Fitur interaktif

- **Date range picker** untuk tanggal sewa: utamakan dua `input type="date"` native + validasi (plain). Jika desain menuntut kalender range, usulkan library kecil (mis. `react-day-picker`) dan konfirmasi ke manusia — aturan dependency di `AGENTS.md` section 15.
- Cek ketersediaan sederhana dari data statis di `content/`; tanpa database.
- **Pembayaran QRIS dummy**: tanpa integrasi nyata — tampilkan QR contoh dari `public/` dengan label jelas "contoh/demo", status "Menunggu konfirmasi", dan konfirmasi akhir lewat WA.

## Data di `content/`

- Unit: `{ nama, kategori, hargaPerHari, spesifikasi[], foto[], status }`.
- Syarat: `{ deposit, dendaTerlambat, kebijakanPembatalan }`.

## SEO & JSON-LD

- `LocalBusiness` + daftar `Product`; FAQ (deposit, pembatalan, syarat, antar-jemput).

## Catatan tambahan

- Status ketersediaan harus sangat terlihat (badge token, bukan warna acak).
- Gaya menyesuaikan unit: teknis-rapi untuk kendaraan/peralatan proyek, playful untuk alat camping.
- Halaman checkout harus terasa jelas dan aman meski dummy — langkah dan status tidak ambigu.
