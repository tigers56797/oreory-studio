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
  heroVisual: "/images/kodo/UI Intro3.png",
  heroDesktop: undefined as string | undefined,
  heroPhone: undefined as string | undefined,
  updateFeatured: "/images/kodo/專注模式.png",
  teamsVisuals: [
    "/images/kodo/UI Intro2.png",
    "/images/kodo/UI Intro5.png",
  ] as const,
  experience: {
    overview: "/images/kodo/專案詳細.png",
    records: "/images/kodo/異常感知.png",
    knowledge: "/images/kodo/專注模式.png",
    collab: "/images/kodo/成長軌跡.png",
  } as const,
  mascots: [
    {
      src: "/images/kodo/新吉祥物1-幼苗.png",
      alt: "Kodo 幼苗",
    },
    {
      src: "/images/kodo/新吉祥物2-葉葉.png",
      alt: "Kodo 葉葉",
    },
    {
      src: "/images/kodo/新吉祥物4-橡果.png",
      alt: "Kodo 橡果",
    },
    {
      src: "/images/kodo/新吉祥物5-白花.png",
      alt: "Kodo 白花",
    },
  ],
} as const;
