# Brief — Mebel & Furnitur (Template 1)

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
- Catatan tambahan di bagian bawah bersifat tips — jika bertentangan dengan referensi, ikuti referensi.

## Profil

Produsen atau toko mebel dan furnitur: kursi, meja, lemari, tempat tidur, hingga custom sesuai ukuran. Keputusan lewat foto produk, bahan, dan kepercayaan pada proses produksi. CTA: **order / konsultasi via WhatsApp**.

## Halaman & section khas

**Halaman wajib:** `/`, `/katalog`, `/katalog/[slug]` — harus dibuat sebagai route nyata, bukan hanya section di homepage. Semua kartu/tombol yang mengarah ke detail harus punya halaman tujuan yang benar-benar dibuat.

- `/` — hero (produk unggulan + workshop), kategori produk, best seller, custom order, proses produksi, galeri, testimoni, FAQ, CTA.
- `/katalog` — grid produk + filter kategori (kursi, meja, lemari, tempat tidur) dan bahan (kayu jati, mahoni, besi, rotan).
- `/katalog/[slug]` — galeri foto (beberapa sudut), bahan, dimensi, opsi finishing, harga bila tersedia, tombol order WA.
- `/kontak` — alamat workshop/showroom, jam buka, Maps, WA (opsional; boleh section bila konten pendek).

## Fitur interaktif

- Filter katalog (kategori + bahan) tanpa library berat.
- Form custom order: jenis produk, ukuran, bahan, finishing → WA.
- WA prefilled menyebut produk + varian yang dipilih.

## Data di `content/`

- Produk: `{ slug, nama, kategori, bahan, dimensi?, harga?, varian[], foto[] }`.
- Custom order field: `{ jenis, ukuran, bahan, finishing }`.

## SEO & JSON-LD

- `FurnitureStore` + daftar `Product`; FAQ (pengiriman, garansi, custom, perakitan).

## Catatan tambahan

- Tampilkan dua gaya foto: produk latar bersih + foto produk terpasang di ruang nyata (in-context).
- Tonjolkan bahan dan proses (foto workshop) — ini pembeda dari toko biasa.
- Jangan mengarang harga untuk produk custom; gunakan "mulai dari" atau arahkan konsultasi.
