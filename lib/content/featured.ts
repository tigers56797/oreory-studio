import type { FeaturedId } from "@/lib/i18n";

export type FeaturedContentConfig = {
  id: FeaturedId;
  href: string;
  /** Visual tone for the media placeholder until real assets arrive */
  tone: "moss" | "kodo" | "film";
  /** Optional banner image under /public */
  image?: string;
};

export const featuredCatalog: FeaturedContentConfig[] = [
  {
    id: "moss",
    href: "/moss",
    tone: "moss",
    image: "/images/moss/moss-01.png",
  },
  { id: "kodo", href: "/kodo", tone: "kodo" },
  {
    id: "film",
    href: "/films",
    tone: "film",
    image: "/images/video/video-02.png",
  },
];

/**
 * Homepage hero banner slides — currently MOSS + Film.
 */
export const heroBanners: FeaturedContentConfig[] = [
  featuredCatalog[0],
  featuredCatalog[2],
];

/** Kept for FeaturedCard default */
export const featuredContent: FeaturedContentConfig = heroBanners[0];
