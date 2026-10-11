# Brief — Agen Properti & Perumahan (Template 1)

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

Agen properti, developer perumahan, atau penjual rumah/ruko/tanah. Keputusan lewat foto, spesifikasi, lokasi, dan kepercayaan pada agen. CTA: **jadwalkan survey via WhatsApp**.

## Halaman & section khas

**Halaman wajib:** `/`, `/properti`, `/properti/[slug]` — harus dibuat sebagai route nyata, bukan hanya section di homepage. Semua kartu/tombol yang mengarah ke detail harus punya halaman tujuan yang benar-benar dibuat.

- `/` — hero (properti unggulan + pencarian cepat), listing pilihan, keunggulan (legalitas, pengalaman, jumlah unit terjual), tentang agen/developer, testimoni pembeli, FAQ, CTA.
- `/properti` — grid listing + filter (jenis: rumah/ruko/tanah, lokasi, rentang harga).
- `/properti/[slug]` — galeri foto, spesifikasi (LT/LB, kamar, kamar mandi, carport), legalitas (SHM/HGB), lokasi + Maps, harga, tombol "Jadwalkan Survey" via WA.
- `/tentang` — profil agen/developer + legalitas (opsional; boleh section bila konten pendek).

## Fitur interaktif

- Filter listing (jenis, lokasi, rentang harga) tanpa library berat.
- WA prefilled menyebut nama properti ("Halo, saya ingin survey [nama properti].").
- Badge status (Tersedia/Terjual) di setiap kartu listing.

## Data di `content/`

- Properti: `{ slug, nama, jenis, lokasi, harga, luasTanah, luasBangunan, kamar, kamarMandi, legalitas, status, foto[] }`.
- Agen: `{ nama, pengalaman, areaLayanan }`.

## SEO & JSON-LD

- `RealEstateAgent` (+ `Product`/`Offer` bila relevan); FAQ (KPR, booking fee, legalitas, survey).

## Catatan tambahan

- Foto properti konsisten (eksterior dulu, lalu ruang utama); jangan pakai foto stok yang tidak mirip unitnya.
- Harga dan status harus akurat; jangan mengarang angka atau legalitas.
- Tampilkan jarak ke fasilitas penting (sekolah, tol, pusat kota) — sering jadi penentu.
