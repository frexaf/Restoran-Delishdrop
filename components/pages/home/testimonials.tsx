import Image from "next/image";
import { LuStar } from "react-icons/lu";
import { home } from "@/content/home";
import { Container } from "@/components/ui/container";

export function Testimonials() {
  const { testimonials } = home;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
            {testimonials.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            {testimonials.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {testimonials.description}
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-3xl border border-border/80 bg-surface-card p-6 shadow-xs transition-shadow duration-300 hover:shadow-md"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <LuStar
                      key={i}
                      className="size-4 fill-amber-400 text-amber-500"
                    />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/90 italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* User info */}
              <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="relative size-11 overflow-hidden rounded-full border border-border">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">
                    {item.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
