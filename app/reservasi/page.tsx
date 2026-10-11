import type { Metadata } from "next";
import { ReservationForm } from "@/components/pages/reservasi/reservation-form";
import { Container } from "@/components/ui/container";
import { LuClock, LuShieldCheck, LuSparkles, LuUsers } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Reservasi Meja Restoran",
  description:
    "Amankan meja favorit Anda di DelishDrop Senopati Jakarta Selatan. Mudah, cepat, tanpa biaya tambahan, dan langsung dikonfirmasi via WhatsApp.",
};

export default function ReservationPage() {
  return (
    <>
      {/* Banner Header */}
      <section className="border-b border-border/80 bg-gradient-to-b from-muted/50 to-background pt-12 pb-10 sm:pt-16 sm:pb-14">
        <Container className="max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
            Momen Spesial Bersama Orang Terdekat
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Reservasi Meja DelishDrop
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Pastikan momen bersantap, kumpul keluarga, maupun pertemuan kerja
            Anda berjalan nyaman dengan meja yang telah disiapkan khusus.
          </p>
        </Container>
      </section>

      {/* Main Form & Policies Grid */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 xl:col-span-8">
              <ReservationForm />
            </div>

            {/* Sidebar Policies Column */}
            <div className="flex flex-col gap-6 lg:col-span-5 xl:col-span-4">
              <div className="rounded-3xl border border-border/80 bg-surface p-6 shadow-xs">
                <h2 className="text-base font-bold text-foreground">
                  Ketentuan Reservasi
                </h2>
                <ul className="mt-4 space-y-4 text-xs text-muted-foreground sm:text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-badge text-primary dark:bg-brand-badge/30 dark:text-emerald-400">
                      <LuClock className="size-4" />
                    </span>
                    <div>
                      <strong className="text-foreground">
                        Toleransi Waktu:
                      </strong>{" "}
                      Meja akan disimpan maksimal 15 menit dari jam reservasi
                      yang dipilih.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-badge text-primary dark:bg-brand-badge/30 dark:text-emerald-400">
                      <LuShieldCheck className="size-4" />
                    </span>
                    <div>
                      <strong className="text-foreground">
                        Tanpa Biaya DP:
                      </strong>{" "}
                      Reservasi reguler (1–6 orang) tidak dikenakan uang muka
                      apapun.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-badge text-primary dark:bg-brand-badge/30 dark:text-emerald-400">
                      <LuUsers className="size-4" />
                    </span>
                    <div>
                      <strong className="text-foreground">
                        Rombongan & VIP:
                      </strong>{" "}
                      Untuk acara lebih dari 10 orang, admin kami akan
                      mendiskusikan opsi set menu spesial.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-badge text-primary dark:bg-brand-badge/30 dark:text-emerald-400">
                      <LuSparkles className="size-4" />
                    </span>
                    <div>
                      <strong className="text-foreground">
                        Fasilitas Lengkap:
                      </strong>{" "}
                      Free Wi-Fi kencang, stopkontak meja, baby chair, musholla
                      bersih, dan parkir mobil aman.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quick Contact Card */}
              <div className="rounded-3xl border border-primary/20 bg-muted/50 p-6 text-foreground">
                <h3 className="text-sm font-bold text-primary dark:text-emerald-400">
                  Butuh Bantuan Mendadak?
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Untuk kedatangan hari ini dalam waktu kurang dari 2 jam,
                  silakan hubungi tim kami via telepon atau WhatsApp langsung.
                </p>
                <div className="mt-4 text-sm font-bold">0812-3456-7890</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
