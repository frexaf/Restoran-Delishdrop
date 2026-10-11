import Image from "next/image";
import Link from "next/link";
import {
  LuArrowRight,
  LuTruck,
  LuLeaf,
  LuShieldCheck,
  LuSparkles,
} from "react-icons/lu";
import { home } from "@/content/home";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const { hero } = home;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/60 via-background to-background pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20">
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Eyebrow Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-brand-badge/60 px-3.5 py-1 text-xs font-semibold tracking-wider text-primary dark:bg-brand-badge/20 dark:text-emerald-400">
              <span className="inline-block size-2 animate-pulse rounded-full bg-emerald-500" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-5xl lg:leading-[1.15] xl:text-6xl">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={hero.ctaPrimary.href}
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                  className: "gap-2 shadow-md transition-all hover:shadow-lg",
                })}
              >
                <span>{hero.ctaPrimary.label}</span>
                <LuArrowRight className="size-4" />
              </Link>

              <Link
                href={hero.ctaSecondary.href}
                className={buttonStyles({
                  variant: "outline",
                  size: "lg",
                  className: "gap-2 border-border/80 hover:bg-muted",
                })}
              >
                <span>{hero.ctaSecondary.label}</span>
              </Link>
            </div>

            {/* Trust feature points */}
            <div className="mt-10 grid w-full grid-cols-1 gap-3 border-t border-border/80 pt-6 sm:grid-cols-3 sm:gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground sm:text-sm">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-primary dark:text-emerald-400">
                  <LuTruck className="size-4" />
                </span>
                <span>{hero.features[0]?.label}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-foreground sm:text-sm">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-primary dark:text-emerald-400">
                  <LuLeaf className="size-4" />
                </span>
                <span>{hero.features[1]?.label}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-foreground sm:text-sm">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-primary dark:text-emerald-400">
                  <LuShieldCheck className="size-4" />
                </span>
                <span>{hero.features[2]?.label}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with floating badges */}
          <div className="relative flex items-center justify-center lg:col-span-5">
            {/* Background Decorative Blob */}
            <div
              className="absolute -inset-4 rounded-full bg-gradient-to-tr from-emerald-500/10 via-primary/5 to-amber-500/10 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative aspect-square w-full max-w-[440px] sm:max-w-[480px]">
              {/* Main Food Photo */}
              <div className="relative size-full overflow-hidden rounded-3xl border border-border/60 bg-surface-card shadow-2xl">
                <Image
                  src={hero.image}
                  alt="Classic artisan burger DelishDrop dengan melted cheese dan daging empuk"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Badge 1: Top Right "Good Food, Good Mood" */}
              <div className="absolute -top-4 -right-2 rounded-2xl border border-border/80 bg-background/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-right-4">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                    <LuSparkles className="size-3.5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">
                      {hero.stickers.mood}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      Segar setiap hari
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right Price Tag */}
              <div className="absolute -bottom-4 -left-2 flex items-center gap-2 rounded-2xl border border-primary/20 bg-primary px-4 py-2.5 text-primary-foreground shadow-xl sm:-left-4 dark:border-emerald-500/30">
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-medium tracking-wider text-primary-foreground/80 uppercase">
                    Harga Terjangkau
                  </span>
                  <span className="text-base font-extrabold sm:text-lg">
                    {hero.stickers.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
