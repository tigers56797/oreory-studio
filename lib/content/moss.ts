/**
 * MOSS product content — media paths are optional until assets arrive.
 * Place screenshots under /public/images/moss/
 */
export const mossLinks = {
  start: "https://moss-omega.vercel.app/",
  features: "#moss-features",
  video: "#moss-showcase",
  updates: "#moss-updates",
  partnership: "#moss-partnership",
  appStore: "https://moss-omega.vercel.app/",
  playStore: "https://moss-omega.vercel.app/",
} as const;

export const mossFeatureKeys = [
  "tickets",
  "bottle",
  "anniversary",
  "ip",
  "ai",
] as const;

export const mossShowcaseKeys = [
  "planet",
  "timeline",
  "ticket",
] as const;

export const mossShowcaseMedia: Record<
  (typeof mossShowcaseKeys)[number],
  string
> = {
  planet: "/images/moss/moss-b.png",
  timeline: "/images/moss/moss-a.png",
  ticket: "/images/moss/ticket.png",
};

export const mossPartnerKeys = [
  "official",
  "brand",
  "merchant",
  "custom",
] as const;

export const mossUpdateIds = ["v2", "v19", "v18", "v17"] as const;

export const mossMedia = {
  heroPhone: "/images/moss/app-home.png",
  heroLogo: "/images/moss/去背logo圖.png",
  updatesPhone: "/images/moss/app-tickets.png",
  ctaCharacter: undefined as string | undefined,
} as const;
