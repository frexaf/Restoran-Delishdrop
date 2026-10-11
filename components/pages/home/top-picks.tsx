import Image from "next/image";
import Link from "next/link";
import { LuStar, LuPlus, LuArrowRight } from "react-icons/lu";
import { menuItems } from "@/content/menu";
import { Container } from "@/components/ui/container";
import { menuOrderWhatsappLink } from "@/lib/links";

export function TopPicks() {
  const topPicks = menuItems.filter((item) => item.isTopPick).slice(0, 4);

  return (
    <section className="py-12 sm:py-16">
      <Container>
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Menu Pilihan Terbaik
            </h2>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Rekomendasi chef dengan rating tertinggi dan paling dicintai
              pelanggan.
            </p>
          </div>
          <Link
            href="/menu"
            className="group hidden items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80 sm:flex dark:text-emerald-400"
          >
            <span>Lihat Semua</span>
            <LuArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topPicks.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-surface-card p-4 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg"
            >
              {/* Photo & Rating Badge */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Rating badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-bold text-foreground shadow-sm backdrop-blur-md">
                  <LuStar className="size-3.5 fill-amber-400 text-amber-500" />
                  <span>{item.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="mt-4 flex flex-1 flex-col">
                <span className="text-xs font-medium text-muted-foreground">
                  {item.category}
                </span>
                <h3 className="mt-1 text-base font-bold text-foreground transition-colors group-hover:text-primary dark:group-hover:text-emerald-400">
                  {item.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Price & Action */}
              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
                    Harga
                  </span>
                  <span className="text-base font-extrabold text-foreground">
                    {item.priceFormatted}
                  </span>
                </div>

                <a
                  href={menuOrderWhatsappLink(item.name, item.priceFormatted)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs transition-transform duration-200 hover:scale-110 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  aria-label={`Pesan ${item.name} via WhatsApp`}
                  title={`Pesan ${item.name} via WhatsApp`}
                >
                  <LuPlus className="size-5 transition-transform group-hover/btn:rotate-90" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-emerald-400"
          >
            <span>Jelajahi Menu Lengkap Kami</span>
            <LuArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
