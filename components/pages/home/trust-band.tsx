import { LuUtensils, LuTruck, LuSmile } from "react-icons/lu";
import { home } from "@/content/home";
import { Container } from "@/components/ui/container";

export function TrustBand() {
  const { trustBand } = home;
  const icons = [LuUtensils, LuTruck, LuSmile];

  return (
    <section className="border-y border-border/80 bg-muted/40 py-10 transition-colors">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {trustBand.map((item, index) => {
            const Icon = icons[index] || LuUtensils;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-badge text-primary shadow-xs dark:bg-brand-badge/30 dark:text-emerald-400">
                  <Icon className="size-6" />
                </span>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
