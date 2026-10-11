"use client";

import { useState, useMemo, useTransition } from "react";
import Image from "next/image";
import { LuSearch, LuStar, LuCheck, LuSlidersHorizontal } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { menuCategories, menuItems } from "@/content/menu";
import { Container } from "@/components/ui/container";
import { menuOrderWhatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";

type MenuCatalogProps = {
  initialCategory?: string;
};

export function MenuCatalog({ initialCategory }: MenuCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory &&
      menuCategories.includes(
        initialCategory as (typeof menuCategories)[number],
      )
      ? initialCategory
      : "Semua",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [, startTransition] = useTransition();

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-10 sm:py-16">
      <Container>
        {/* Controls Bar: Category Pills + Search */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex scrollbar-none items-center gap-2 overflow-x-auto pb-2">
            {menuCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    startTransition(() => {
                      setSelectedCategory(category);
                    });
                  }}
                  className={cn(
                    "inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:text-sm",
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border/80 bg-surface-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  {isSelected && <LuCheck className="size-3.5" />}
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <label htmlFor="menu-search-input" className="sr-only">
              Cari Menu
            </label>
            <LuSearch className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="menu-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari burger, pizza, kopi..."
              className="w-full rounded-full border border-border bg-background py-2 pr-4 pl-10 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring focus:outline-none sm:text-sm"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between border-b border-border/60 pb-3 text-xs text-muted-foreground">
          <span>
            Menampilkan{" "}
            <strong className="text-foreground">{filteredItems.length}</strong>{" "}
            menu{" "}
            {selectedCategory !== "Semua" && `kategori "${selectedCategory}"`}
          </span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="cursor-pointer font-medium text-primary hover:underline dark:text-emerald-400"
            >
              Reset Pencarian
            </button>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border p-8 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <LuSlidersHorizontal className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">
              Menu tidak ditemukan
            </h3>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              Tidak ada menu yang cocok dengan kata kunci &ldquo;{searchQuery}
              &rdquo;. Coba kata kunci lain atau pilih kategori Semua.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Semua");
                setSearchQuery("");
              }}
              className="mt-5 cursor-pointer rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Lihat Semua Menu
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-surface-card p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                {/* Photo & Badges */}
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-bold text-foreground shadow-sm backdrop-blur-md">
                    <LuStar className="size-3.5 fill-amber-400 text-amber-500" />
                    <span>{item.rating.toFixed(1)}</span>
                  </div>

                  {/* Best seller / badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-bold text-primary-foreground shadow-sm backdrop-blur-md">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mt-4 flex flex-1 flex-col">
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-foreground transition-colors group-hover:text-primary dark:group-hover:text-emerald-400">
                    {item.name}
                  </h3>
                  <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Price & Order CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5">
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
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground shadow-xs transition-transform hover:scale-105 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-label={`Pesan ${item.name} seharga ${item.priceFormatted} via WhatsApp`}
                  >
                    <FaWhatsapp className="size-3.5" />
                    <span>Pesan via WA</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
