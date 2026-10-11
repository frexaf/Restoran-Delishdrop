import Image from "next/image";
import { home } from "@/content/home";
import { Container } from "@/components/ui/container";

export function Gallery() {
  const { gallery } = home;

  return (
    <section className="bg-surface py-16 transition-colors sm:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
            {gallery.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            {gallery.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {gallery.description}
          </p>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {gallery.items.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-4/5 overflow-hidden rounded-3xl border border-border/80 bg-muted shadow-xs"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="text-[10px] font-semibold tracking-wider text-emerald-300 uppercase">
                  {item.category}
                </span>
                <h3 className="mt-1 text-sm font-bold sm:text-base">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
