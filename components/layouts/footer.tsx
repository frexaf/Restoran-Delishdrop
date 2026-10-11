import Link from "next/link";
import { LuUtensils, LuClock, LuMapPin, LuPhone } from "react-icons/lu";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { whatsappLink } from "@/lib/links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface text-foreground transition-colors">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold tracking-tight text-foreground transition-opacity hover:opacity-90"
              aria-label={`${site.name} Beranda`}
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <LuUtensils className="size-4" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight text-primary dark:text-foreground">
                  {site.name}
                </span>
                <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                  Artisan Kitchen & Eatery
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram DelishDrop"
                className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FaInstagram className="size-4" />
              </a>
              <a
                href={site.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok DelishDrop"
                className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FaTiktok className="size-4" />
              </a>
              <a
                href={whatsappLink(
                  "Halo DelishDrop, saya ingin menanyakan menu.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp DelishDrop"
                className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-emerald-500 hover:text-emerald-500"
              >
                <FaWhatsapp className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Tautan Cepat
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="transition-colors hover:text-primary"
                >
                  Daftar Menu & Rasa
                </Link>
              </li>
              <li>
                <Link
                  href="/reservasi"
                  className="transition-colors hover:text-primary"
                >
                  Reservasi Meja
                </Link>
              </li>
              <li>
                <Link
                  href="/#tentang"
                  className="transition-colors hover:text-primary"
                >
                  Tentang DelishDrop
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="transition-colors hover:text-primary"
                >
                  Kontak & Lokasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Jam Operasional */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Jam Operasional
            </h3>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <LuClock className="mt-0.5 size-4 shrink-0 text-primary dark:text-emerald-400" />
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">
                    Senin – Jumat
                  </span>
                  <span>10.00 – 22.00 WIB</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <LuClock className="mt-0.5 size-4 shrink-0 text-primary dark:text-emerald-400" />
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">
                    Sabtu – Minggu
                  </span>
                  <span>08.00 – 23.00 WIB</span>
                </div>
              </div>
              <span className="mt-1 text-xs text-muted-foreground/80">
                *Dapur menerima order terakhir 30 menit sebelum tutup.
              </span>
            </div>
          </div>

          {/* Column 4: Lokasi & Kontak */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Lokasi & Kontak
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <LuMapPin className="mt-0.5 size-4 shrink-0 text-primary dark:text-emerald-400" />
                <span>{site.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <LuPhone className="size-4 shrink-0 text-primary dark:text-emerald-400" />
                <a
                  href={`tel:${site.contact.phone}`}
                  className="transition-colors hover:text-primary"
                >
                  {site.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-600 transition-colors hover:underline dark:text-emerald-400"
                >
                  Chat WhatsApp Kami
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {currentYear} {site.legalName}. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/kontak"
              className="transition-colors hover:text-foreground"
            >
              Hubungi Kami
            </Link>
            <span>•</span>
            <Link
              href="/design-system"
              className="text-muted-foreground/70 transition-colors hover:text-primary"
            >
              Design System
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
