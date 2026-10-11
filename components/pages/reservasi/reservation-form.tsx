"use client";

import { useState } from "react";
import { LuCheck } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { reservationWhatsappLink } from "@/lib/links";

export function ReservationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("18.30 WIB");
  const [seatingArea, setSeatingArea] = useState("Indoor AC (Non-Smoking)");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = "Nama lengkap wajib diisi.";
    }
    if (!phone.trim()) {
      newErrors.phone = "Nomor WhatsApp wajib diisi.";
    } else if (phone.length < 9) {
      newErrors.phone = "Nomor WhatsApp minimal 9 digit.";
    }
    if (!date) {
      newErrors.date = "Pilih tanggal reservasi.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    const waUrl = reservationWhatsappLink({
      name,
      phone,
      guests,
      date,
      time,
      seatingArea,
      notes: notes.trim() || undefined,
    });

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-border/80 bg-surface-card p-6 shadow-xl sm:p-10">
      {isSubmitted ? (
        <div className="flex flex-col items-center py-8 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
            <LuCheck className="size-8" />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            Reservasi Sedang Diteruskan ke WhatsApp!
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Terima kasih, <strong>{name}</strong>. Pesan reservasi untuk tanggal{" "}
            <strong>{date}</strong> pukul <strong>{time}</strong> telah
            disiapkan. Tim admin kami akan segera mengkonfirmasi ketersediaan
            meja Anda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsSubmitted(false)}
            >
              Ubah Data Reservasi
            </Button>
            <a
              href={reservationWhatsappLink({
                name,
                phone,
                guests,
                date,
                time,
                seatingArea,
                notes: notes.trim() || undefined,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              <FaWhatsapp className="size-4" />
              <span>Buka WhatsApp Lagi</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Nama Lengkap */}
            <Field
              id="res-name"
              label="Nama Lengkap *"
              hint="Sesuai nama kontak yang bisa dihubungi"
              error={errors.name}
            >
              <Input
                id="res-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Muhammad Fajar"
                required
              />
            </Field>

            {/* Nomor WhatsApp */}
            <Field
              id="res-phone"
              label="Nomor WhatsApp *"
              hint="Untuk konfirmasi status reservasi meja"
              error={errors.phone}
            >
              <Input
                id="res-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contoh: 081234567890"
                required
              />
            </Field>

            {/* Tanggal Reservasi */}
            <Field
              id="res-date"
              label="Tanggal Reservasi *"
              error={errors.date}
            >
              <Input
                id="res-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Field>

            {/* Jam Kedatangan */}
            <Field id="res-time" label="Jam Kedatangan">
              <Select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="11.00 WIB">11.00 WIB (Makan Siang)</option>
                <option value="12.00 WIB">12.00 WIB (Makan Siang)</option>
                <option value="13.00 WIB">13.00 WIB (Makan Siang)</option>
                <option value="14.00 WIB">14.00 WIB</option>
                <option value="16.00 WIB">16.00 WIB (Sore / Tea Time)</option>
                <option value="17.00 WIB">17.00 WIB</option>
                <option value="18.30 WIB">18.30 WIB (Makan Malam)</option>
                <option value="19.30 WIB">19.30 WIB (Makan Malam)</option>
                <option value="20.30 WIB">20.30 WIB (Makan Malam)</option>
              </Select>
            </Field>

            {/* Jumlah Tamu */}
            <Field id="res-guests" label="Jumlah Tamu">
              <Select
                id="res-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
                <option value="3">3 Orang</option>
                <option value="4">4 Orang</option>
                <option value="5-6">5 – 6 Orang</option>
                <option value="7-10">7 – 10 Orang (Meja Panjang)</option>
                <option value="10+">Lebih dari 10 Orang (Rombongan)</option>
              </Select>
            </Field>

            {/* Pilihan Area Meja */}
            <Field id="res-area" label="Pilihan Area Meja">
              <Select
                id="res-area"
                value={seatingArea}
                onChange={(e) => setSeatingArea(e.target.value)}
              >
                <option value="Indoor AC (Non-Smoking)">
                  Indoor AC (Nyaman & Bebas Asap)
                </option>
                <option value="Outdoor Garden (Smoking Friendly)">
                  Outdoor Garden (Asri & Santai)
                </option>
                <option value="VIP Private Room (Min. 6 Orang)">
                  VIP Private Room (Privasi Eksklusif)
                </option>
              </Select>
            </Field>
          </div>

          {/* Catatan Tambahan */}
          <Field
            id="res-notes"
            label="Catatan Khusus / Permintaan (Opsional)"
            hint="Misal: Perlu baby chair, perayaan ulang tahun, atau permohonan meja pojok tenang."
          >
            <Textarea
              id="res-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tuliskan jika ada kebutuhan khusus..."
            />
          </Field>

          {/* Submit CTA */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full cursor-pointer justify-center gap-2 text-base font-bold shadow-md"
            >
              <FaWhatsapp className="size-5" />
              <span>Kirim & Konfirmasi Reservasi via WhatsApp</span>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Konfirmasi meja langsung ditangani oleh staf DelishDrop dalam
              hitungan menit. Tanpa biaya uang muka (DP) untuk pemesanan
              reguler.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
