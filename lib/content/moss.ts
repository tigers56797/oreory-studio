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

export const mossPartnerKeys = [
  "official",
  "brand",
  "merchant",
  "custom",
] as const;

export const mossUpdateIds = ["v2", "v19", "v18", "v17"] as const;

export const mossMedia = {
  heroPhone: undefined as string | undefined,
  // "/images/moss/hero-phone.png",
  updatesPhone: undefined as string | undefined,
  ctaCharacter: undefined as string | undefined,
} as const;
