# Brief — Komunitas & Yayasan (Template 1)

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

Komunitas, yayasan sosial, atau organisasi nirlaba. Keputusan lewat kepercayaan dan bukti kegiatan nyata. CTA: **bergabung / donasi via WhatsApp**.

## Halaman & section khas

**Halaman wajib:** `/`, `/kegiatan`, `/kegiatan/[slug]`, `/donasi` — harus dibuat sebagai route nyata, bukan hanya section di homepage. Semua kartu/tombol yang mengarah ke detail harus punya halaman tujuan yang benar-benar dibuat.

- `/` — hero (misi + foto kegiatan), tentang singkat (legalitas: akta/SK), program, kegiatan terbaru, dampak (statistik), galeri, testimoni relawan/penerima manfaat, FAQ, CTA donasi.
- `/kegiatan` dan `/kegiatan/[slug]` — daftar kegiatan + detail (tanggal, lokasi, ringkasan, foto).
- `/donasi` — informasi donasi (rekening/QRIS, konfirmasi via WA), pilihan program yang bisa didukung, laporan penyaluran singkat.
- `/kontak` — alamat sekretariat, Maps, WA, jam (opsional; boleh section bila konten pendek).

## Fitur interaktif

- Konfirmasi donasi via WA prefilled (nama program + nominal opsional).
- Form pendaftaran relawan/anggota.
- Filter kegiatan (kategori/tahun) bila jumlah banyak.

## Data di `content/`

- Program: `{ nama, deskripsi, target? }`.
- Kegiatan: `{ slug, judul, tanggal, lokasi, ringkasan, isi, foto[] }`.
- Dampak: `{ label, angka }` (mis. penerima manfaat, kegiatan terlaksana).

## SEO & JSON-LD

- `NGO` / `Organization`; FAQ (cara donasi, laporan, relawan).

## Catatan tambahan

- Transparansi itu daya tarik utama: tampilkan ke mana donasi disalurkan (angka/persentase).
- Gunakan foto kegiatan asli; jika memakai stok, jangan menyesatkan tentang program nyata.
- Hindari foto yang eksploitatif — tampilkan penerima manfaat dengan bermartabat.
