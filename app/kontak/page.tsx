import type { Metadata } from "next";
import {
  LuMapPin,
  LuClock,
  LuPhone,
  LuMail,
  LuNavigation,
} from "react-icons/lu";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { whatsappLink } from "@/lib/links";

export const metadata: Metadata = {
  title: "Kontak & Lokasi Restoran",
  description:
    "Hubungi DelishDrop Senopati Jakarta Selatan. Temukan alamat, jam operasional, peta Google Maps, dan tautan langsung chat WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="border-b border-border/80 bg-gradient-to-b from-muted/50 to-background pt-12 pb-10 sm:pt-16 sm:pb-14">
        <Container className="max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
            Kami Siap Melayani Anda
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Kontak & Lokasi Resto
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ada pertanyaan tentang menu, katering acara, reservasi rombongan,
            atau petunjuk arah? Hubungi tim DelishDrop kapan saja.
          </p>
        </Container>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Info Column */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              {/* Alamat & Maps Card */}
              <div className="rounded-3xl border border-border/80 bg-surface-card p-6 shadow-xs sm:p-8">
                <div className="flex items-start gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-badge text-primary dark:bg-brand-badge/30 dark:text-emerald-400">
                    <LuMapPin className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-base font-bold text-foreground">
                      Alamat Restoran
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {site.contact.address.full}
                    </p>
                    <a
                      href={site.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline dark:text-emerald-400"
                    >
                      <LuNavigation className="size-3.5" />
                      <span>Buka di Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Jam Operasional Card */}
              <div className="rounded-3xl border border-border/80 bg-surface-card p-6 shadow-xs sm:p-8">
                <div className="flex items-start gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-badge text-primary dark:bg-brand-badge/30 dark:text-emerald-400">
                    <LuClock className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-base font-bold text-foreground">
                      Jam Buka & Layanan
                    </h2>
                    <div className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                      <p>
                        <strong className="text-foreground">
                          {site.contact.hours[0].days}:
                        </strong>{" "}
                        {site.contact.hours[0].time}
                      </p>
                      <p>
                        <strong className="text-foreground">
                          {site.contact.hours[1].days}:
                        </strong>{" "}
                        {site.contact.hours[1].time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kontak Langsung Card */}
              <div className="rounded-3xl border border-border/80 bg-surface-card p-6 shadow-xs sm:p-8">
                <h2 className="mb-4 text-base font-bold text-foreground">
                  Saluran Komunikasi
                </h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary dark:text-emerald-400">
                      <LuPhone className="size-4" />
                    </span>
                    <div>
                      <span className="block text-xs text-muted-foreground">
                        Telepon
                      </span>
                      <a
                        href={`tel:${site.contact.phone}`}
                        className="font-semibold text-foreground hover:text-primary"
                      >
                        {site.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                      <FaWhatsapp className="size-4" />
                    </span>
                    <div>
                      <span className="block text-xs text-muted-foreground">
                        WhatsApp Resmi
                      </span>
                      <a
                        href={whatsappLink(
                          "Halo DelishDrop, saya ingin menanyakan informasi.",
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
                      >
                        {site.contact.phoneDisplay} (Chat Sekarang)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary dark:text-emerald-400">
                      <LuMail className="size-4" />
                    </span>
                    <div>
                      <span className="block text-xs text-muted-foreground">
                        Email
                      </span>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="font-semibold text-foreground hover:text-primary"
                      >
                        {site.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="text-xs text-muted-foreground">
                    Ikuti kami:
                  </span>
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-8 items-center justify-center rounded-full bg-muted text-foreground hover:text-primary"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="size-4" />
                  </a>
                  <a
                    href={site.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-8 items-center justify-center rounded-full bg-muted text-foreground hover:text-primary"
                    aria-label="TikTok"
                  >
                    <FaTiktok className="size-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Map Embed Column */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <div className="flex h-full min-h-[460px] flex-col overflow-hidden rounded-3xl border border-border/80 bg-surface-card shadow-md">
                <div className="flex items-center justify-between border-b border-border/80 bg-muted/30 p-4">
                  <span className="text-xs font-semibold text-foreground">
                    Google Maps — Lokasi DelishDrop Senopati
                  </span>
                  <a
                    href={site.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:underline dark:text-emerald-400"
                  >
                    Buka Rute Lengkap →
                  </a>
                </div>
                <div className="relative min-h-[400px] w-full flex-1">
                  <iframe
                    title="Peta Lokasi DelishDrop"
                    src={site.contact.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 size-full contrast-125 grayscale dark:hue-rotate-180 dark:invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
