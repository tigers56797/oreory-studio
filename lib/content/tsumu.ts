/**
 * TSUMU product content.
 * Brand assets live under /public/images/tsumu/ (copied from the TSUMU app repo).
 * Leave a value as `null` until the official asset / URL is confirmed.
 */
export const tsumuLinks = {
  app: "https://tsumu-dusky.vercel.app/" as string | null,
  /** TSUMU privacy policy page — pending */
  privacy: null as string | null,
  features: "#tsumu-features",
  updates: "#tsumu-updates",
  support: "/contact",
} as const;

export const tsumuProblemKeys = ["scattered", "growth", "risk"] as const;

export const tsumuFeatureKeys = [
  "netWorth",
  "growth",
  "compass",
  "companion",
] as const;

export const tsumuShowcaseKeys = [
  "overview",
  "growth",
  "compass",
  "island",
  "companion",
] as const;

export const tsumuFaqKeys = [
  "what",
  "mobile",
  "free",
  "manage",
  "privacy",
] as const;

export type TsumuShowcaseKey = (typeof tsumuShowcaseKeys)[number];

export const tsumuMedia = {
  logo: "/images/tsumu/logo.png",
  heroWorld: "/images/tsumu/world.png",
  storyWorld: "/images/tsumu/world-clean.png",
  mascotExplorer: "/images/tsumu/mascot-explorer.webp",
  mascotCaptain: "/images/tsumu/mascot-captain.webp",
  heroScreen: "/images/tsumu/tsumua.png" as string | null,
  /** Real app screenshots per showcase item; `null` renders the pending placeholder */
  showcase: {
    overview: "/images/tsumu/tsumub.png",
    growth: "/images/tsumu/tsumuc.png",
    compass: "/images/tsumu/tsumud.png",
    island: "/images/tsumu/tsumua.png",
    /** Companion screen — pending */
    companion: null,
  } as Record<TsumuShowcaseKey, string | null>,
} as const;

export type TsumuRelease = {
  /** Only set when an official version number exists */
  version?: string;
  date: string;
  title: string;
  added?: string[];
  improved?: string[];
  fixed?: string[];
  /** Fallback when the note is not split into categories */
  summary?: string;
};

/**
 * Official release notes, newest first.
 * Source: TSUMU app `data/release-notes.json`.
 */
export const tsumuReleases: TsumuRelease[] = [
  {
    date: "2026-11-04",
    title: "資產管理與 3D 小島體驗升級",
    added: [
      "新增台美股 15 分鐘自動估值、股票持倉合併與加權平均成本、投資績效卡片及損益分析。",
    ],
    improved: [
      "優化淨資產總覽與資產成長日記，調整高曝險夕燒天空與藍色海洋。",
    ],
  },
  {
    date: "2026-11-03",
    title: "3D 小島與冬季景觀更新",
    added: ["新增 11 月起的冬季飄雪、積雪及融雪效果。"],
    improved: ["首頁統一使用 3D 小島，優化月光夜海、遠山燈火與島嶼日夜高度。"],
  },
  {
    date: "2026-11-02",
    title: "TSUMU PWA 與 3D 小島升級",
    added: ["新增 PWA 手機安裝、版本更新通知中心。"],
    improved: ["改善 3D 小島效能與動態場景。"],
  },
  {
    version: "1.0",
    date: "2026-10-08",
    title: "版本 1.0 更新",
    summary: "新增畫面優化效能。",
  },
];

export type TsumuTestimonial = {
  name: string;
  quote: string;
  rating?: number;
  date?: string;
  /** Optional avatar under /public; falls back to the name initial */
  avatar?: string;
};

/**
 * Review content taken from the TSUMU page design reference.
 * Replace with verified user reviews before launch.
 */
export const tsumuReviewSummary: { rating: number; total: number } | null = {
  rating: 4.8,
  total: 327,
};

export const tsumuTestimonials: TsumuTestimonial[] = [
  {
    name: "小安",
    rating: 5,
    quote: "介面很漂亮，財務總覽一目了然，還有小島和旅伴超療癒！",
  },
  {
    name: "阿哲",
    rating: 5,
    quote: "功能很完整，投資與資產管理都整合得很好，已經成為每天會打開的 App。",
  },
  {
    name: "Emily",
    rating: 5,
    quote: "比傳統記帳 App 更有動力，理財變得不再枯燥，會一直想把小島經營得更好！",
  },
];
