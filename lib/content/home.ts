/**
 * Homepage V3 content.
 * Leave values `null` / arrays empty until the real asset, URL or data is confirmed.
 */
import type { Locale } from "@/lib/i18n";
import { kodoMedia } from "@/lib/content/kodo";
import { mossMedia } from "@/lib/content/moss";
import { tsumuMedia } from "@/lib/content/tsumu";

export type HomeProductId = "moss" | "kodo" | "tsumu";

export const brandLogos = {
  horizontal: "/images/brand/oreory-logo-horizontal.png",
  symbol: "/images/brand/oreory-logo-symbol.png",
  horizontalRainbow: "/images/brand/oreory-logo-horizontal-rainbow.png",
  symbolRainbow: "/images/brand/oreory-logo-symbol-rainbow.png",
} as const;

export const homeProducts: {
  id: HomeProductId;
  href: string;
  logo: string | null;
  image: string;
  imageFit: "phone" | "illustration";
}[] = [
  {
    id: "moss",
    href: "/moss",
    logo: mossMedia.heroLogo,
    image: mossMedia.heroPhone,
    imageFit: "phone",
  },
  {
    id: "kodo",
    href: "/kodo",
    /** No official Kodo logo asset yet */
    logo: null,
    image: kodoMedia.experience.knowledge,
    imageFit: "phone",
  },
  {
    id: "tsumu",
    href: "/tsumu",
    logo: tsumuMedia.logo,
    image: tsumuMedia.mascotExplorer,
    imageFit: "illustration",
  },
];

/** Homepage hero carousel order */
export const homeHeroSlides: HomeProductId[] = ["moss", "kodo", "tsumu"];

export const homeLinks = {
  products: "#products",
  studio: "#studio",
  articles: "/articles",
  contact: "/contact",
  films: "/films",
  allArticles: "/articles" as string | null,
  /** Official sponsorship platform URL — pending */
  donate: null as string | null,
  /** Terms of use page — pending */
  terms: null as string | null,
  /** Studio privacy policy page — pending */
  privacy: null as string | null,
} as const;

/** Stats render only when `value` is confirmed. */
export type HomeStatId = "products" | "expertise" | "services" | "users" | "updates";

export const homeStats: { id: HomeStatId; value: number | null }[] = [
  { id: "products", value: homeProducts.length },
  /** Studio expertise items: product, experience, development, content */
  { id: "expertise", value: 4 },
  /** Film editing service types listed on /films */
  { id: "services", value: 5 },
  { id: "users", value: null },
  { id: "updates", value: null },
];

export type HomeTestimonial = {
  product: HomeProductId;
  quote: Record<Locale, string>;
  name: string;
  /** Only with the user's permission */
  role?: Record<Locale, string>;
  /** Optional avatar under /public; falls back to the name initial */
  avatar?: string;
};

/**
 * Content from the homepage V3 design reference — replace with verified user reviews.
 * The section stays hidden while empty.
 */
export const homeTestimonials: HomeTestimonial[] = [
  {
    product: "moss",
    quote: {
      "zh-TW": "MOSS 讓我可以更有系統地收藏喜歡的內容，回顧時總是充滿感動！",
      en: "MOSS lets me collect what I love in an organized way — looking back always feels special!",
    },
    name: "琦椿",
    role: { "zh-TW": "偶像應援者", en: "Idol supporter" },
  },
  {
    product: "kodo",
    quote: {
      "zh-TW": "處理異常與追蹤變得更即時、清楚，團隊協作的效率也提升非常多。",
      en: "Handling and tracking issues is faster and clearer, and our team collaborates far more efficiently.",
    },
    name: "宇翔",
    role: { "zh-TW": "工程團隊成員", en: "Engineering team member" },
  },
  {
    product: "tsumu",
    quote: {
      "zh-TW": "介面很直覺，記帳與資產追蹤都很方便，讓我更有動力持續理財。",
      en: "The interface is intuitive and tracking spending and assets is easy — it keeps me motivated to manage money.",
    },
    name: "怡君",
    role: { "zh-TW": "上班族", en: "Office worker" },
  },
];

export type HomeArticle = {
  slug: string;
  title: string;
  category: string;
  /** ISO date, only when published */
  date?: string;
  cover?: string;
  href: string;
};

/** Published articles, newest first. Placeholder cards render while empty. */
export const homeArticles: HomeArticle[] = [];
