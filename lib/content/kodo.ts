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
  heroVisual: "/images/kodo/ui-intro-3.png",
  heroDesktop: undefined as string | undefined,
  heroPhone: undefined as string | undefined,
  updateFeatured: "/images/kodo/focus-mode.png",
  teamsVisuals: [
    "/images/kodo/ui-intro-2.png",
    "/images/kodo/ui-intro-5.png",
  ] as const,
  experience: {
    overview: "/images/kodo/project-detail.png",
    records: "/images/kodo/anomaly-sense.png",
    knowledge: "/images/kodo/focus-mode.png",
    collab: "/images/kodo/growth-trail.png",
  } as const,
  mascots: [
    {
      src: "/images/kodo/mascot-1.png",
      alt: "Kodo 幼苗",
    },
    {
      src: "/images/kodo/mascot-2.png",
      alt: "Kodo 葉葉",
    },
    {
      src: "/images/kodo/mascot-4.png",
      alt: "Kodo 橡果",
    },
    {
      src: "/images/kodo/mascot-5.png",
      alt: "Kodo 白花",
    },
  ],
} as const;
