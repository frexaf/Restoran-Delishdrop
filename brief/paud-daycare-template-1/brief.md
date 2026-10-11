# Brief — PAUD, Daycare & Taman Bermain (Template 1)

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

Pendidikan anak usia dini dan penitipan anak: PAUD, TK/KB, daycare, playgroup, taman bermain. Orang tua butuh rasa aman dan informasi yang jelas. CTA: **jadwalkan kunjungan / daftar via WhatsApp**.

## Halaman & section khas

**Halaman wajib:** `/`, `/program`, `/pendaftaran` — harus dibuat sebagai route nyata, bukan hanya section di homepage. Semua kartu/tombol yang mengarah ke detail harus punya halaman tujuan yang benar-benar dibuat.

- `/` — hero (foto kegiatan + sambutan), tentang (visi, kurikulum, pendekatan), program, fasilitas & keamanan, galeri kegiatan, testimoni orang tua, FAQ, CTA.
- `/program` — PAUD/KB, TK A/B, daycare, playgroup: usia, jadwal, biaya/SPP, rasio guru–anak.
- `/pendaftaran` — form: nama anak, usia, program, jadwal kunjungan/trial → WA.
- `/kontak` — alamat, Maps, jam operasional, WA (opsional; boleh section bila konten pendek).

## Fitur interaktif

- Pendaftaran / jadwal kunjungan via WA prefilled.
- Jadwal program per jenjang yang mudah dipindai.
- Galeri kegiatan sebagai grid (hindari slider autoplay).

## Data di `content/`

- Program: `{ nama, usia, jadwal, biaya }`.
- Fasilitas: daftar (CCTV, rasio guru, area bermain, antar-jemput bila ada).

## SEO & JSON-LD

- `Preschool` / `ChildCare`; FAQ (usia minimum, trial, SPP, antar-jemput).

## Catatan tambahan

- Nada hangat dan menenangkan — orang tua mencari rasa aman, bukan sekadar fasilitas.
- Tampilkan unsur keamanan dengan jelas (CCTV, rasio guru–anak, prosedur penjemputan).
- Foto kegiatan asli lebih dipercaya; hindari stok anak yang terlihat tidak kontekstual.
