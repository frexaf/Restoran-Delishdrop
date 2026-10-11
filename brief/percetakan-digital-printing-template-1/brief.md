# Brief — Percetakan & Digital Printing (Template 1)

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

Percetakan dan digital printing: banner/spanduk, kartu nama, undangan, stiker, kaos/sablon, nota, dan cetak custom. Keputusan lewat katalog produk, satuan harga yang jelas, dan contoh hasil cetak. CTA: **order / kirim file via WhatsApp**.

## Halaman & section khas

**Halaman wajib:** `/`, `/katalog`, `/katalog/[slug]`, `/estimasi` — harus dibuat sebagai route nyata, bukan hanya section di homepage. Semua kartu/tombol yang mengarah ke detail harus punya halaman tujuan yang benar-benar dibuat.

- `/` — hero (contoh hasil cetak), kategori produk, produk terlaris, keunggulan (cepat, bahan berkualitas, antar), proses order, galeri hasil, testimoni, FAQ, CTA.
- `/katalog` — grid produk + filter kategori (banner, kartu nama, undangan, stiker, kaos, nota).
- `/katalog/[slug]` — bahan pilihan, satuan (per m²/pcs), harga mulai, contoh hasil, tombol order/kirim file via WA.
- `/estimasi` — kalkulator sederhana: pilih produk, ukuran, jumlah → estimasi biaya + tombol konfirmasi via WA.
- `/kontak` — alamat, jam buka, Maps, WA (opsional; boleh section bila konten pendek).

## Fitur interaktif

- Kalkulator estimasi (produk × ukuran × jumlah) — hasil ditandai **estimasi**, dikonfirmasi via WA.
- WA prefilled menyebut produk + ukuran + jumlah.
- Alur order bernomor: kirim file → konfirmasi → cetak → ambil/kirim.

## Data di `content/`

- Produk: `{ slug, nama, kategori, satuan, hargaMulai, bahan[], foto[] }`.
- Alur order: daftar langkah.

## SEO & JSON-LD

- `LocalBusiness` (+ `Service`); FAQ (format file, lama pengerjaan, pengiriman, revisi desain).

## Catatan tambahan

- Tampilkan contoh hasil cetak nyata per produk — ini yang meyakinkan, bukan deskripsi panjang.
- Satuan harga harus jelas (per m², per pcs, per rim); jangan menampilkan harga final untuk custom.
- Info format file (PDF/CDR/AI, resolusi) dan estimasi pengerjaan sangat membantu pelanggan.
