import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { popularCategories } from "@/content/menu";
import { Container } from "@/components/ui/container";

export function PopularCategories() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Kategori Populer
            </h2>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Pilihan hidangan favorit yang paling sering dinikmati pelanggan.
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

        {/* Categories Grid (5 columns on desktop) */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5 lg:gap-6">
          {popularCategories.map((cat) => (
            <Link
              key={cat.name}
              href={`/menu?kategori=${encodeURIComponent(cat.categoryKey)}`}
              className="group flex flex-col items-center rounded-2xl border border-border/80 bg-surface-card p-4 text-center shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              {/* Category Image */}
              <div className="relative mb-3.5 size-24 overflow-hidden rounded-full border-2 border-border/60 bg-muted sm:size-28">
                <Image
                  src={cat.image}
                  alt={`Kategori ${cat.name}`}
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title & Count */}
              <h3 className="text-sm font-bold text-foreground transition-colors group-hover:text-primary sm:text-base dark:group-hover:text-emerald-400">
                {cat.name}
              </h3>
              <span className="mt-1 text-xs font-medium text-muted-foreground">
                {cat.itemCount}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-emerald-400"
          >
            <span>Lihat Semua Kategori Menu</span>
            <LuArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
