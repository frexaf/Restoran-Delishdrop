import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { home } from "@/content/home";
import { Container } from "@/components/ui/container";

export function PromoBanners() {
  const { banner1, banner2 } = home.promos;

  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Banner 1: Deep Forest Green */}
          <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-lg sm:min-h-[300px] sm:p-8">
            <div className="relative z-10 max-w-[62%] sm:max-w-[60%]">
              <span className="text-[11px] font-bold tracking-widest uppercase opacity-80">
                {banner1.eyebrow}
              </span>
              <h3 className="mt-2 text-xl leading-snug font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
                {banner1.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs text-primary-foreground/80 sm:text-sm">
                {banner1.description}
              </p>
              <div className="mt-6">
                <Link
                  href={banner1.cta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-xs font-bold text-foreground shadow-sm transition-transform hover:scale-105 sm:text-sm"
                >
                  <span>{banner1.cta.label}</span>
                  <LuArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Food Photo */}
            <div className="absolute -right-6 -bottom-6 size-48 sm:size-56 md:size-64 lg:size-72">
              <div className="relative size-full overflow-hidden rounded-full border-4 border-background/20 shadow-xl">
                <Image
                  src={banner1.image}
                  alt={banner1.title}
                  fill
                  sizes="(max-width: 768px) 192px, 288px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Banner 2: Warm Amber / Orange */}
          <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-6 text-white shadow-lg sm:min-h-[300px] sm:p-8">
            {/* Top Discount Badge */}
            <div className="absolute top-4 right-4 z-20 flex size-16 flex-col items-center justify-center rounded-full bg-red-600/90 text-center leading-tight text-white shadow-lg ring-4 ring-white/20 sm:top-6 sm:right-6 sm:size-20">
              <span className="text-[9px] font-medium tracking-tight uppercase sm:text-[10px]">
                Hemat
              </span>
              <span className="text-sm font-extrabold sm:text-base">30%</span>
            </div>

            <div className="relative z-10 max-w-[62%] sm:max-w-[60%]">
              <span className="text-[11px] font-bold tracking-widest uppercase opacity-90">
                {banner2.eyebrow}
              </span>
              <h3 className="mt-2 text-xl leading-snug font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
                {banner2.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs text-white/90 sm:text-sm">
                {banner2.description}
              </p>
              <div className="mt-6">
                <Link
                  href={banner2.cta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-gray-900 shadow-sm transition-transform hover:scale-105 sm:text-sm"
                >
                  <span>{banner2.cta.label}</span>
                  <LuArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Burger Photo */}
            <div className="absolute -right-6 -bottom-6 size-48 sm:size-56 md:size-64 lg:size-72">
              <div className="relative size-full overflow-hidden rounded-full border-4 border-white/20 shadow-xl">
                <Image
                  src={banner2.image}
                  alt={banner2.title}
                  fill
                  sizes="(max-width: 768px) 192px, 288px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
