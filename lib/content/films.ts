import type { FilmWorkCategoryKey, FilmWorkTitleKey } from "@/lib/i18n/types";

export type FilmWork = {
  id: string;
  /** i18n key under filmsPage.works.items */
  titleKey: FilmWorkTitleKey;
  category: FilmWorkCategoryKey;
  duration: string;
  /** Optional cover under /public — leave empty for placeholder */
  image?: string;
  /** Optional video under /public/videos/ */
  video?: string;
};

export type FilmPricingPlan = {
  id: string;
  /** Minutes label key, or "custom" for 10+ */
  minutes: number | "custom";
  /** Price in TWD; null means custom quote */
  price: number | null;
};

/**
 * Featured film works — media paths are optional until assets arrive.
 * Place covers in /public and videos in /public/videos/.
 */
export const filmWorks: FilmWork[] = [
  {
    id: "brand-01",
    titleKey: "brandFilm",
    category: "brand",
    duration: "02:40",
  },
  {
    id: "event-01",
    titleKey: "eventRecap",
    category: "event",
    duration: "04:15",
  },
  {
    id: "product-01",
    titleKey: "productFilm",
    category: "product",
    duration: "01:50",
  },
  {
    id: "youtube-01",
    titleKey: "youtubeLongform",
    category: "youtube",
    duration: "12:20",
  },
  {
    id: "concert-01",
    titleKey: "concertRecap",
    category: "concert",
    duration: "06:05",
  },
  {
    id: "event-02",
    titleKey: "eventMoments",
    category: "event",
    duration: "03:30",
  },
];

export const filmPricingPlans: FilmPricingPlan[] = [
  { id: "1m", minutes: 1, price: 950 },
  { id: "2m", minutes: 2, price: 1800 },
  { id: "3m", minutes: 3, price: 2700 },
  { id: "4m", minutes: 4, price: 3800 },
  { id: "5m", minutes: 5, price: 5000 },
  { id: "6m", minutes: 6, price: 6000 },
  { id: "7m", minutes: 7, price: 7000 },
  { id: "8m", minutes: 8, price: 8000 },
  { id: "9m", minutes: 9, price: 9000 },
  { id: "10m", minutes: "custom", price: null },
];

/**
 * Pricing section visuals — drop files here when ready:
 * - public/images/films/pricing-left.jpg
 * - public/images/films/pricing-right.jpg
 * Then set `src` below to those paths.
 */
export const filmPricingImages = {
  left: {
    src: undefined as string | undefined,
    // Example: "/images/films/pricing-left.jpg",
  },
  right: {
    src: undefined as string | undefined,
    // Example: "/images/films/pricing-right.jpg",
  },
} as const;

export function formatTwd(amount: number, locale: "zh-TW" | "en") {
  const formatted = new Intl.NumberFormat(
    locale === "zh-TW" ? "zh-TW" : "en-US",
  ).format(amount);
  return locale === "zh-TW" ? `NT$${formatted}` : `NT$${formatted}`;
}
