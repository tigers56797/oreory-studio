import type { FeaturedId } from "@/lib/i18n";

export type FeaturedContentConfig = {
  id: FeaturedId;
  href: string;
  /** Visual tone for the media placeholder until real assets arrive */
  tone: "moss" | "kodo" | "film";
  /** Optional banner / composition image under /public */
  image?: string;
};

export const featuredCatalog: FeaturedContentConfig[] = [
  {
    id: "film",
    href: "/films",
    tone: "film",
    image: "/images/video/hero-film.png",
  },
  {
    id: "moss",
    href: "/moss",
    tone: "moss",
    image: "/images/moss/moss-01.png",
  },
  {
    id: "kodo",
    href: "/kodo",
    tone: "kodo",
    image: "/images/kodo/maincover2.png",
  },
];

/**
 * Homepage hero carousel slides — architecture for MOSS / Kodo / Film.
 * Currently all three are wired; composition visuals differ by tone.
 */
export const heroBanners: FeaturedContentConfig[] = [
  featuredCatalog[0],
  featuredCatalog[1],
  featuredCatalog[2],
];

/** Kept for FeaturedCard default */
export const featuredContent: FeaturedContentConfig = heroBanners[0];
