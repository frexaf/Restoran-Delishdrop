import Link from "next/link";
import {
  LuMapPin,
  LuClock,
  LuPhone,
  LuNavigation,
  LuCalendarCheck,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { whatsappLink } from "@/lib/links";

export function LocationCta() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-surface-card shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Panel */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-6 xl:col-span-5">
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
                  Kunjungi Restoran Kami
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Suasana Nyaman di Jantung Jakarta Selatan
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Nikmati aroma kopi segar, burger lezat, dan keramahan tim kami
                  secara langsung. Tersedia area parkir aman dan akses mudah.
                </p>

                {/* Info List */}
                <div className="mt-8 flex flex-col gap-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-primary dark:text-emerald-400">
                      <LuMapPin className="size-4.5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground">Alamat</h3>
                      <p className="mt-0.5 text-muted-foreground">
                        {site.contact.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-primary dark:text-emerald-400">
                      <LuClock className="size-4.5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground">
                        Jam Operasional
                      </h3>
                      <p className="mt-0.5 text-muted-foreground">
                        {site.contact.hours[0].days}:{" "}
                        {site.contact.hours[0].time}
                      </p>
                      <p className="text-muted-foreground">
                        {site.contact.hours[1].days}:{" "}
                        {site.contact.hours[1].time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-primary dark:text-emerald-400">
                      <LuPhone className="size-4.5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground">
                        Telepon / WhatsApp
                      </h3>
                      <p className="mt-0.5 text-muted-foreground">
                        {site.contact.phoneDisplay}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border/80 pt-6">
                <Link
                  href="/reservasi"
                  className={buttonStyles({
                    variant: "primary",
                    size: "md",
                    className: "gap-2 shadow-xs",
                  })}
                >
                  <LuCalendarCheck className="size-4" />
                  <span>Reservasi Meja</span>
                </Link>

                <a
                  href={site.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    variant: "outline",
                    size: "md",
                    className: "gap-2",
                  })}
                >
                  <LuNavigation className="size-4" />
                  <span>Petunjuk Arah Maps</span>
                </a>

                <a
                  href={whatsappLink(
                    "Halo DelishDrop, saya ingin menanyakan rute dan parkir.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    variant: "secondary",
                    size: "md",
                    className: "gap-2 text-emerald-600 dark:text-emerald-400",
                  })}
                >
                  <FaWhatsapp className="size-4" />
                  <span>Chat Admin</span>
                </a>
              </div>
            </div>

            {/* Right Map Embed */}
            <div className="relative min-h-[340px] bg-muted lg:col-span-6 xl:col-span-7">
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
      </Container>
    </section>
  );
}
