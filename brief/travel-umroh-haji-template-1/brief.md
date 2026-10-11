# Brief — Travel Umroh & Haji (Template 1)

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

Travel umroh dan haji resmi (PPIU/PIHK). Keputusan pembelian besar dan penuh pertimbangan — kepercayaan lewat legalitas, kejelasan harga, jadwal keberangkatan, dan pembimbing. CTA: **konsultasi / daftar via WhatsApp**.

## Halaman & section khas

**Halaman wajib:** `/`, `/paket`, `/paket/[slug]`, `/pendaftaran` — harus dibuat sebagai route nyata, bukan hanya section di homepage. Semua kartu/tombol yang mengarah ke detail harus punya halaman tujuan yang benar-benar dibuat.

- `/` — hero (foto suasana masjid/Kabah + CTA konsultasi), paket unggulan, keunggulan (legalitas, pembimbing, maskapai, hotel), jadwal keberangkatan terdekat, alur pendaftaran, testimoni jamaah, FAQ, CTA.
- `/paket` — daftar paket umroh/haji + durasi + harga mulai + jadwal.
- `/paket/[slug]` — detail: itinerary per hari, include/exclude, hotel & maskapai, harga per tipe kamar (double/triple/quad), jadwal, tombol "Konsultasi via WA".
- `/pendaftaran` — form: nama, paket, jadwal, jumlah jamaah → WA; daftar dokumen yang perlu disiapkan.
- `/kontak` — alamat kantor, Maps, jam, WA (opsional; boleh section bila konten pendek).

## Fitur interaktif

- Jadwal keberangkatan per paket yang mudah dipindai.
- WA prefilled menyebut paket + jadwal ("Halo, saya ingin info paket [nama] keberangkatan [tanggal].").
- Daftar dokumen & alur pendaftaran sebagai langkah bernomor.

## Data di `content/`

- Paket: `{ slug, nama, durasi, harga, jadwal[], include[], exclude[] }`.
- Alur pendaftaran: daftar langkah.
- Dokumen: daftar berkas yang dibutuhkan.

## SEO & JSON-LD

- `TravelAgency`; FAQ (dokumen, vaksin meningitis, cicilan, pembatalan).

## Catatan tambahan

- Tonjolkan legalitas (nomor izin PPIU/PIHK) — ini penentu kepercayaan, bukan sekadar pelengkap.
- Harga transparan: sebutkan apa yang termasuk dan tidak termasuk; hindari harga "mulai dari" yang menyesatkan.
- Jangan menjanjikan hal yang tidak bisa dipastikan (visa, kuota, tanggal pasti) — gunakan bahasa "konfirmasi ketersediaan".
- Foto Kabah/masjid boleh, tetapi jangan menyesatkan soal hotel/tenda yang didapat sesuai paket.
