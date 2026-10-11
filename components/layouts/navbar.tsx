"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu, LuX, LuUtensils, LuShoppingBag } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/content/site";
import { buttonStyles } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "@/components/ui/container";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/90 backdrop-blur-md transition-colors">
      <Container className="flex h-18 items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          aria-label={`${site.name} Beranda`}
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform duration-200 group-hover:scale-105">
            <LuUtensils className="size-5" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-tight text-primary dark:text-foreground">
              {site.name}
            </span>
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
              Artisan Kitchen
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Max 5) */}
        <nav
          className="hidden items-center gap-1 md:flex lg:gap-2"
          aria-label="Navigasi Utama"
        >
          {site.nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href) && !item.href.includes("#");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-muted font-semibold text-primary dark:text-foreground"
                    : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Action Buttons */}
        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeToggle labels={site.theme} />

          <a
            href={whatsappLink(
              "Halo DelishDrop, saya ingin menanyakan menu & pemesanan.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({
              variant: "outline",
              size: "sm",
              className:
                "gap-1.5 border-primary/20 text-primary hover:bg-muted",
            })}
            aria-label="Chat WhatsApp DelishDrop"
          >
            <FaWhatsapp className="size-4 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          <Link
            href="/menu"
            className={buttonStyles({
              variant: "primary",
              size: "sm",
              className: "gap-1.5 shadow-sm",
            })}
          >
            <LuShoppingBag className="size-4" />
            <span>Pesan Menu</span>
          </Link>
        </div>

        {/* Mobile Actions: ThemeToggle + Hamburger Menu Button */}
        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle labels={site.theme} />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-background p-2 text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            }
          >
            {mobileMenuOpen ? (
              <LuX className="size-5" />
            ) : (
              <LuMenu className="size-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background/95 px-4 pt-2 pb-6 shadow-lg backdrop-blur-lg md:hidden">
          <Container className="flex flex-col gap-1.5">
            {site.nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href) && !item.href.includes("#");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-muted font-semibold text-primary"
                      : "text-foreground hover:bg-muted/60",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <Link
                href="/menu"
                onClick={handleLinkClick}
                className={buttonStyles({
                  variant: "primary",
                  size: "md",
                  className: "w-full justify-center gap-2",
                })}
              >
                <LuShoppingBag className="size-4" />
                <span>Lihat Menu Lengkap</span>
              </Link>

              <a
                href={whatsappLink(
                  "Halo DelishDrop, saya ingin memesan makanan dari website.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className={buttonStyles({
                  variant: "outline",
                  size: "md",
                  className:
                    "w-full justify-center gap-2 border-border text-emerald-600 dark:text-emerald-400",
                })}
              >
                <FaWhatsapp className="size-5" />
                <span>Chat Langsung via WhatsApp</span>
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
