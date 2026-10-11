import type { Metadata } from "next";
import { Hero } from "@/components/pages/home/hero";
import { PopularCategories } from "@/components/pages/home/popular-categories";
import { PromoBanners } from "@/components/pages/home/promo-banners";
import { TopPicks } from "@/components/pages/home/top-picks";
import { TrustBand } from "@/components/pages/home/trust-band";
import { AboutFeatures } from "@/components/pages/home/about-features";
import { Gallery } from "@/components/pages/home/gallery";
import { Testimonials } from "@/components/pages/home/testimonials";
import { FaqSection } from "@/components/pages/home/faq";
import { LocationCta } from "@/components/pages/home/location-cta";
import { getRestaurantJsonLd, getFaqJsonLd } from "@/lib/seo";
import { home } from "@/content/home";

export const metadata: Metadata = {
  title: "Beranda — DelishDrop Artisan Kitchen & Eatery",
  description:
    "Nikmati kelezatan burger artisan, pizza otentik, rice bowl nikmat, dan racikan kopi berkualitas dengan bahan segar harian di DelishDrop Jakarta Selatan.",
};

export default function HomePage() {
  const restaurantJsonLd = getRestaurantJsonLd();
  const faqJsonLd = getFaqJsonLd(home.faq.items);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero />
      <PopularCategories />
      <PromoBanners />
      <TopPicks />
      <TrustBand />
      <AboutFeatures />
      <Gallery />
      <Testimonials />
      <FaqSection />
      <LocationCta />
    </>
  );
}
