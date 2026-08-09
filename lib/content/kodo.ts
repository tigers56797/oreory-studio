/**
 * Kodo product content — media paths optional until assets arrive.
 * Place screenshots under /public/images/kodo/
 */
export const kodoLinks = {
  start: "https://kodo-phi.vercel.app/",
  features: "#kodo-features",
  experience: "#kodo-experience",
  teams: "#kodo-teams",
  updates: "#kodo-updates",
  contact: "/contact",
} as const;

export const kodoProblemKeys = [
  "discover",
  "understand",
  "stuck",
  "delay",
  "solve",
] as const;

export const kodoFeatureKeys = [
  "status",
  "action",
  "focus",
  "growth",
] as const;

export const kodoExperienceKeys = [
  "overview",
  "records",
  "knowledge",
  "collab",
] as const;

export const kodoAudienceKeys = [
  "semiconductor",
  "manufacturing",
  "devops",
  "engineering",
  "enterprise",
] as const;

export const kodoEnterpriseKeys = [
  "enterprise",
  "integration",
  "partnership",
] as const;

export const kodoUpdateIds = ["focus", "v13", "v12", "v11"] as const;

export const kodoRoadmapKeys = ["ai", "workflow", "knowledge"] as const;

export const kodoMedia = {
  heroDesktop: undefined as string | undefined,
  heroPhone: undefined as string | undefined,
  updateFeatured: undefined as string | undefined,
} as const;
