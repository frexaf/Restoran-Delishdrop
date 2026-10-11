"use client";

import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { home } from "@/content/home";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const { faq } = home;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-surface py-16 transition-colors sm:py-24">
      <Container className="max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
            {faq.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {faq.description}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-border/80 bg-surface-card transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-5 text-left font-bold text-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:text-base"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="pr-4">{item.question}</span>
                  <LuChevronDown
                    className={cn(
                      "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180 text-primary dark:text-emerald-400",
                    )}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="border-t border-border/40 px-5 pt-2 pb-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
