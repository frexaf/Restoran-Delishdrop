import Image from "next/image";
import Link from "next/link";
import { LuCheck, LuArrowRight } from "react-icons/lu";
import { home } from "@/content/home";
import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";

export function AboutFeatures() {
  const { about } = home;

  return (
    <section id="tentang" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image with overlay accent */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-border/80 bg-surface-card shadow-xl">
              <Image
                src="/images/kitchen-chef.jpg"
                alt="Chef DelishDrop sedang meracik hidangan segar"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Experience Floating Badge */}
            <div className="absolute -right-4 -bottom-6 rounded-2xl border border-border/80 bg-background/95 p-5 shadow-xl backdrop-blur-md sm:right-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-primary dark:text-emerald-400">
                  100%
                </span>
                <div className="flex flex-col text-xs leading-tight">
                  <span className="font-bold text-foreground">
                    Bahan Segar Alami
                  </span>
                  <span className="text-muted-foreground">
                    Tanpa Pengawet Buatan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 4 Keunggulan */}
          <div className="flex flex-col items-start lg:col-span-7">
            <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
              {about.eyebrow}
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              {about.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {about.description}
            </p>

            {/* 4 Keunggulan Grid */}
            <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              {about.highlights.map((point) => (
                <div key={point.title} className="flex items-start gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground dark:bg-emerald-500">
                    <LuCheck className="size-3.5" />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-foreground sm:text-base">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/reservasi"
                className={buttonStyles({
                  variant: "primary",
                  size: "md",
                  className: "gap-2 shadow-xs",
                })}
              >
                <span>Reservasi Meja Anda</span>
                <LuArrowRight className="size-4" />
              </Link>
              <Link
                href="/kontak"
                className={buttonStyles({
                  variant: "outline",
                  size: "md",
                })}
              >
                <span>Lihat Lokasi & Jam Buka</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
