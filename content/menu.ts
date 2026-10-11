export type MenuItem = {
  id: string;
  name: string;
  category:
    | "Burger & Wrap"
    | "Artisan Pizza"
    | "Rice Bowl & Crispy"
    | "Salad & Sides"
    | "Minuman & Kopi";
  description: string;
  price: number;
  priceFormatted: string;
  image: string;
  rating: number;
  badge?: string;
  isBestSeller?: boolean;
  isTopPick?: boolean;
};

export type CategoryCard = {
  name: string;
  categoryKey: string;
  itemCount: string;
  image: string;
};

export const menuCategories = [
  "Semua",
  "Burger & Wrap",
  "Artisan Pizza",
  "Rice Bowl & Crispy",
  "Salad & Sides",
  "Minuman & Kopi",
] as const;

export const popularCategories: CategoryCard[] = [
  {
    name: "Burgers & Toast",
    categoryKey: "Burger & Wrap",
    itemCount: "6+ Menu",
    image: "/images/hero-burger.jpg",
  },
  {
    name: "Artisan Pizza",
    categoryKey: "Artisan Pizza",
    itemCount: "4+ Menu",
    image: "/images/pizza-margherita.jpg",
  },
  {
    name: "Sandwiches & Wrap",
    categoryKey: "Burger & Wrap",
    itemCount: "5+ Menu",
    image: "/images/sandwich-wrap.jpg",
  },
  {
    name: "Fried & Crispy",
    categoryKey: "Rice Bowl & Crispy",
    itemCount: "6+ Menu",
    image: "/images/crispy-chicken.jpg",
  },
  {
    name: "Fresh Salads",
    categoryKey: "Salad & Sides",
    itemCount: "4+ Menu",
    image: "/images/fresh-salad.jpg",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "classic-beef-burger",
    name: "Classic Beef Burger",
    category: "Burger & Wrap",
    description:
      "Daging sapi Australia 120g empuk juicy, lelehan keju cheddar, bawang karamel manis, selada segar, dan saus racikan khas Delish.",
    price: 48000,
    priceFormatted: "Rp 48.000",
    image: "/images/hero-burger.jpg",
    rating: 4.9,
    badge: "Best Seller",
    isBestSeller: true,
    isTopPick: true,
  },
  {
    id: "margherita-pizza",
    name: 'Margherita Pizza (12")',
    category: "Artisan Pizza",
    description:
      "Adonan fermentasi alami 48 jam dengan saus tomat San Marzano otentik, mozzarella fior di latte meleleh, dan daun basil wangi.",
    price: 68000,
    priceFormatted: "Rp 68.000",
    image: "/images/pizza-margherita.jpg",
    rating: 4.8,
    badge: "Favorit Chef",
    isTopPick: true,
  },
  {
    id: "chicken-wrap",
    name: "Grilled Chicken Sandwich",
    category: "Burger & Wrap",
    description:
      "Dada ayam panggang herb-marinated dengan lapisan keju mozarella leleh, tomat segar, selada renyah di atas brioche bun lembut.",
    price: 42000,
    priceFormatted: "Rp 42.000",
    image: "/images/sandwich-wrap.jpg",
    rating: 4.8,
    isTopPick: true,
  },
  {
    id: "fresh-garden-salad",
    name: "Fresh Garden Salad Bowl",
    category: "Salad & Sides",
    description:
      "Kombinasi selada hidroponik, tomat ceri manis, potongan alpukat mentega, dan saus honey lemon mustard yang menyegarkan.",
    price: 38000,
    priceFormatted: "Rp 38.000",
    image: "/images/fresh-salad.jpg",
    rating: 4.8,
    badge: "Healthy Choice",
    isTopPick: true,
  },
  {
    id: "crispy-chicken-sambal-matah",
    name: "Crispy Chicken Sambal Matah",
    category: "Rice Bowl & Crispy",
    description:
      "Fillet paha ayam garing keemasan dengan siraman sambal matah Bali segar, disajikan bersama nasi pulen wangi dan telur setengah matang.",
    price: 45000,
    priceFormatted: "Rp 45.000",
    image: "/images/crispy-chicken.jpg",
    rating: 4.9,
    badge: "Favorit",
    isBestSeller: true,
  },
  {
    id: "signature-gyudon-bowl",
    name: "Signature Gyudon Rice Bowl",
    category: "Rice Bowl & Crispy",
    description:
      "Irisan daging US beef lembut dimasak lambat dengan bawang bombay dan saus manis gurih khas, onsen egg, dan taburan nori.",
    price: 52000,
    priceFormatted: "Rp 52.000",
    image: "/images/rice-bowl.jpg",
    rating: 4.9,
    badge: "Best Seller",
    isBestSeller: true,
  },
  {
    id: "truffle-parmesan-fries",
    name: "Truffle Parmesan Fries",
    category: "Salad & Sides",
    description:
      "Kentang goreng garing potongan tebal berbalut minyak white truffle wangi, taburan parmesan gurih, dan saus cocolan garlic mayo.",
    price: 32000,
    priceFormatted: "Rp 32.000",
    image: "/images/truffle-fries.jpg",
    rating: 4.8,
  },
  {
    id: "artisan-kopi-susu-aren",
    name: "Artisan Kopi Susu Aren",
    category: "Minuman & Kopi",
    description:
      "Espresso blend biji Arabika pilihan dipadukan susu segar creamy dan gula aren murni organik lokal. Manis pas dan aromatik.",
    price: 24000,
    priceFormatted: "Rp 24.000",
    image: "/images/iced-coffee.jpg",
    rating: 4.9,
    badge: "Favorit Minuman",
    isBestSeller: true,
  },
  {
    id: "berry-citrus-mocktail",
    name: "Berry Citrus Sparkler",
    category: "Minuman & Kopi",
    description:
      "Sodaan menyegarkan dengan puree beri hitam liar, irisan jeruk lemon, daun mint aromatik, dan es batu kristal.",
    price: 28000,
    priceFormatted: "Rp 28.000",
    image: "/images/fruit-mocktail.jpg",
    rating: 4.8,
  },
];
