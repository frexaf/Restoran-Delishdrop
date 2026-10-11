# Brief — Gym & Studio Fitness / Yoga (Template 1)

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

Gym, studio fitness, yoga, dan pilates. Berbasis membership dan kelas terjadwal; keputusan lewat suasana, pelatih, dan harga paket yang jelas. CTA: **coba kelas gratis / daftar member via WhatsApp**.

## Halaman & section khas

**Halaman wajib:** `/`, `/kelas`, `/membership` — harus dibuat sebagai route nyata, bukan hanya section di homepage. Semua kartu/tombol yang mengarah ke detail harus punya halaman tujuan yang benar-benar dibuat.

- `/` — hero (energi studio + CTA coba gratis), kelas unggulan, membership ringkas, pelatih, fasilitas, galeri, testimoni member, FAQ, CTA.
- `/kelas` — jenis kelas (yoga, zumba, HIIT, angkat beban, dll) + jadwal per hari + level.
- `/membership` — paket harian/bulanan/tahunan + personal trainer, benefit tiap paket.
- `/booking` — form booking kelas trial: kelas, tanggal, nama → WA (opsional; boleh section bila konten pendek).
- `/kontak` — alamat, Maps, jam buka, WA (opsional; boleh section bila konten pendek).

## Fitur interaktif

- Jadwal kelas per hari dengan tab/filter.
- Booking kelas trial via WA prefilled (kelas + tanggal).
- Harga paket dan benefit tampil jelas di kartu membership.

## Data di `content/`

- Kelas: `{ nama, level, durasi, jadwal[] }`.
- Paket: `{ nama, harga, benefit[] }`.
- Pelatih: `{ nama, spesialisasi, foto? }`.

## SEO & JSON-LD

- `ExerciseGym`; FAQ (kontrak, pembatalan, jam buka, kelas pemula).

## Catatan tambahan

- Foto orang bergerak (kelas berjalan) lebih menjual daripada ruangan kosong.
- Tonjolkan komunitas dan pelatih — dua alasan orang bertahan berlangganan.
- Jangan pakai foto stok gym gelap yang generik; utamakan suasana studio yang sesungguhnya.
