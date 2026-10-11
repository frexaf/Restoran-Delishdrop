import type { Metadata } from "next";
import { MenuCatalog } from "@/components/pages/menu/menu-catalog";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Daftar Menu & Rasa Lengkap",
  description:
    "Jelajahi aneka hidangan artisan DelishDrop: Burger & Sandwiches, Pizza Otentik, Rice Bowls Krispi, Salad Segar, dan Kopi Susu Aren dengan harga transparan.",
};

type MenuPageProps = {
  searchParams: Promise<{
    kategori?: string;
  }>;
};

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const resolvedParams = await searchParams;
  const initialCategory = resolvedParams?.kategori;

  return (
    <>
      {/* Menu Header Banner */}
      <section className="border-b border-border/80 bg-gradient-to-b from-muted/50 to-background pt-12 pb-10 sm:pt-16 sm:pb-14">
        <Container className="max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
            Kelezatan Berkualitas Setiap Hari
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Menu & Kreasi Rasa Kami
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Semua hidangan diolah dari bahan segar pilihan harian. Klik
            &ldquo;Pesan via WA&rdquo; pada menu favorit Anda untuk pengantaran
            cepat ke rumah atau kantor.
          </p>
        </Container>
      </section>

      {/* Interactive Catalog */}
      <MenuCatalog initialCategory={initialCategory} />
    </>
  );
}
