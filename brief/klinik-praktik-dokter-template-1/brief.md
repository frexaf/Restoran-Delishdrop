# Brief — Klinik & Praktik Dokter (Template 1)

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

Layanan kesehatan dan kecantikan: klinik umum, dokter gigi, klinik kecantikan, praktik dokter. Keputusan lewat kepercayaan, kredibilitas dokter, dan kemudahan booking. CTA: **booking / tanya via WhatsApp**.

## Halaman & section khas

**Halaman wajib:** `/`, `/layanan`, `/dokter`, `/booking` — harus dibuat sebagai route nyata, bukan hanya section di homepage. Semua kartu/tombol yang mengarah ke detail harus punya halaman tujuan yang benar-benar dibuat.

- `/` — hero (kredibilitas + foto klinik), layanan unggulan, keunggulan (dokter, fasilitas, jam praktik), testimoni pasien, FAQ, lokasi, CTA.
- `/layanan` — daftar layanan + deskripsi + kisaran harga bila ada.
- `/dokter` — profil dokter: spesialisasi, jadwal praktik, foto.
- `/booking` — form: pilih layanan, dokter, tanggal, jam → WA.
- `/kontak` — alamat, Maps, jam praktik, WA (opsional; boleh section bila konten pendek).

## Fitur interaktif

- Booking WA prefilled (layanan + dokter + tanggal).
- Jadwal praktik per dokter yang mudah dipindai.

## Data di `content/`

- Layanan: `{ nama, deskripsi, harga? }`.
- Dokter: `{ nama, spesialisasi, jadwal[] }`.

## SEO & JSON-LD

- `MedicalClinic` / `Physician` / `LocalBusiness`; FAQ (jam praktik, booking, asuransi/BPJS bila relevan).

## Catatan tambahan

- Jangan mengklaim berlebihan ("terbaik se-Indonesia"); cukup fakta (jumlah pasien, tahun pengalaman, fasilitas).
- Foto fasilitas/klinik asli lebih meyakinkan daripada stok; jika belum ada aset, pilih stok yang bersih dan terang.
- Harga/kisaran tampil transparan bila klien mengizinkan.
