import type { Dictionary, Locale } from "./types";
import { kodoPageEn, kodoPageZh } from "./kodo";
import { mossPageEn, mossPageZh } from "./moss";

const zhTW: Dictionary = {
  brand: "OREORY STUDIO",
  nav: {
    moss: "MOSS",
    kodo: "Kodo",
    films: "影片",
    studio: "關於我們",
    contact: "聯繫我們",
  },
  locale: {
    zh: "中文",
    en: "EN",
  },
  hero: {
    headlineLine1: "打造數位產品，",
    headlineLine2: "創造影像故事。",
    description:
      "Oreory Studio 專注於數位產品設計與影像創作，\n透過設計與故事，創造有價值的體驗。",
    cta: "探索我們的作品 →",
  },
  featured: {
    eyebrow: "FEATURED",
    items: {
      moss: {
        label: "Product",
        title: "MOSS",
        description: "粉絲生活平台",
        cta: "探索 MOSS →",
      },
      kodo: {
        label: "Product",
        title: "Kodo",
        description: "行動導向的工程異常處理產品",
        cta: "探索 Kodo →",
      },
      film: {
        label: "Film",
        title: "影片製作",
        description: "影片剪輯服務 — 把素材整理成完整、有節奏的影片",
        cta: "探索影片製作 →",
      },
    },
  },
  products: {
    title: "產品",
    items: {
      moss: {
        name: "MOSS",
        description: "粉絲生活平台",
        cta: "了解更多",
      },
      kodo: {
        name: "Kodo",
        description: "行動導向的工程異常處理產品",
        cta: "了解更多",
      },
    },
  },
  films: {
    title: "影片",
    headline: "為品牌與創作者，\n剪輯值得被記住的影像。",
    description:
      "你提供原始素材，Oreory Studio 負責剪輯與後製，\n整理成完整、具有節奏與觀看體驗的影片。",
    points: ["長影音剪輯", "活動／演唱會剪輯", "品牌／產品影片", "內容型影片"],
    cta: "了解影片剪輯 →",
  },
  studio: {
    title: "工作室",
    headline: "Independent Creative Studio",
    description:
      "Oreory Studio 是一間長期經營的獨立創意工作室，專注於數位產品與影像創作，以設計與故事作為核心能力，與品牌、官方與合作夥伴一起打造有價值的體驗。",
    points: [
      "Independent Studio",
      "Product Design",
      "Digital Products",
      "Video Production",
    ],
  },
  collaboration: {
    title: "合作",
    headline: "歡迎商業、品牌與官方合作。",
    description:
      "無論你是品牌方、官方 IP、經紀公司，\n或海外合作夥伴，Oreory Studio 都可以一起討論合適的合作方式。",
    points: ["商業合作", "品牌合作", "官方合作", "影片製作", "產品合作"],
    cta: "聯繫我們 →",
  },
  footer: {
    tagline: "專注數位產品與影像創作的獨立工作室。",
    navigate: "導覽",
    contact: "聯繫",
    email: "hello@oreory.studio",
    line: "LINE",
    rights: "© Oreory Studio. All rights reserved.",
  },
  filmsPage: {
    meta: {
      title: "影片剪輯",
      description:
        "Oreory Studio 影片剪輯服務：你提供素材，我們負責剪輯與後製，製作出適合發布的完整影片。",
    },
    hero: {
      eyebrow: "影片剪輯",
      headlineLine1: "用影像說故事，",
      headlineLine2: "創造值得被記住的內容。",
      description:
        "從原始素材到最終成品，\n協助你整理內容、建立節奏，\n製作出適合發布的長影音。",
      primaryCta: "聯繫我們 →",
      secondaryCta: "查看作品 ↓",
    },
    services: {
      title: "專注於影片剪輯，\n讓素材變成完整作品。",
      description: "你提供素材，\n我們負責把它整理成一支完整的影片。",
      items: {
        longform: {
          title: "長影音剪輯",
          description: "YouTube、訪談、Vlog、活動紀錄等長篇內容。",
        },
        content: {
          title: "內容型影片",
          description: "將大量素材整理成清楚、有節奏的完整影片。",
        },
        event: {
          title: "活動／演唱會剪輯",
          description: "整理活動現場素材，保留重要時刻與現場氛圍。",
        },
        brand: {
          title: "品牌／產品影片剪輯",
          description: "將既有素材重新整理，呈現品牌與產品特色。",
        },
        other: {
          title: "其他影片剪輯",
          description: "依照素材與需求提供客製化剪輯。",
        },
      },
    },
    works: {
      title: "精選作品",
      description: "看看素材如何被整理成完整的故事。",
      categories: {
        brand: "品牌形象影片",
        event: "活動紀錄",
        product: "產品影片",
        youtube: "YouTube 長影音",
        concert: "演唱會紀錄",
      },
      items: {
        brandFilm: "品牌形象影片",
        eventRecap: "活動紀錄",
        productFilm: "產品影片",
        youtubeLongform: "YouTube 長影音",
        concertRecap: "演唱會紀錄",
        eventMoments: "活動精華",
      },
    },
    process: {
      title: "從素材，到完整作品。",
      steps: {
        brief: {
          title: "提供需求",
          description: "告訴我們影片用途、成品長度、風格與需求。",
        },
        assets: {
          title: "提供素材",
          description: "提供原始影片、照片、音樂、字幕或其他素材。",
        },
        edit: {
          title: "剪輯製作",
          description: "進行剪輯、節奏調整、字幕、音效、轉場與畫面整理。",
        },
        revise: {
          title: "修改調整",
          description: "依照回饋進行修改，確認最終版本。",
        },
        deliver: {
          title: "交付成品",
          description: "輸出最終影片並交付。",
        },
      },
    },
    pricing: {
      title: "影片剪輯方案",
      description: "依照成品長度計價，實際報價會依素材與需求確認。",
      minuteLabel: "分鐘",
      minutesLabel: "分鐘",
      customLabel: "10 分鐘以上",
      customPrice: "客製報價",
      leftAlt: "影片剪輯方案圖一",
      rightAlt: "影片剪輯方案圖二",
      cta: "開始詢價 →",
    },
    contact: {
      title: "有一支影片想製作？",
      description:
        "把你的素材交給 Oreory Studio，\n一起完成一支值得被記住的影片。",
      line: {
        label: "LINE 官方帳號",
        cta: "加入 LINE →",
      },
      email: {
        label: "電子郵件",
        cta: "寄送 Email →",
      },
    },
  },
  contactPage: {
    meta: {
      title: "聯繫我們",
      description: "透過 LINE 官方帳號或 Email 與 Oreory Studio 聯繫。",
    },
    title: "聯繫我們",
    description: "歡迎透過 LINE 或 Email 詢問影片剪輯與合作事宜。",
  },
  mossPage: mossPageZh,
  kodoPage: kodoPageZh,
};

const en: Dictionary = {
  brand: "OREORY STUDIO",
  nav: {
    moss: "MOSS",
    kodo: "Kodo",
    films: "Films",
    studio: "About",
    contact: "Contact",
  },
  locale: {
    zh: "中文",
    en: "EN",
  },
  hero: {
    headlineLine1: "Building digital products,",
    headlineLine2: "crafting visual stories.",
    description:
      "Oreory Studio focuses on digital product design and visual storytelling, creating experiences of lasting value through design and narrative.",
    cta: "Explore our work →",
  },
  featured: {
    eyebrow: "FEATURED",
    items: {
      moss: {
        label: "Product",
        title: "MOSS",
        description: "A lifestyle platform for fans",
        cta: "Explore MOSS →",
      },
      kodo: {
        label: "Product",
        title: "Kodo",
        description: "An action-oriented engineering exception platform",
        cta: "Explore Kodo →",
      },
      film: {
        label: "Film",
        title: "Film Production",
        description: "Film editing — turning raw footage into complete, paced films",
        cta: "Explore film production →",
      },
    },
  },
  products: {
    title: "Products",
    items: {
      moss: {
        name: "MOSS",
        description: "A lifestyle platform for fans",
        cta: "Learn more",
      },
      kodo: {
        name: "Kodo",
        description: "An action-oriented engineering exception platform",
        cta: "Learn more",
      },
    },
  },
  films: {
    title: "Films",
    headline: "Film editing for brands\nand creators worth remembering.",
    description:
      "You provide the footage. Oreory Studio handles editing and finishing — shaping complete films with rhythm and viewing experience.",
    points: [
      "Long-form editing",
      "Event / concert editing",
      "Brand / product films",
      "Content-driven films",
    ],
    cta: "Explore film editing →",
  },
  studio: {
    title: "Studio",
    headline: "Independent Creative Studio",
    description:
      "Oreory Studio is an independent creative studio built for the long term. We specialize in digital products and visual storytelling, partnering with brands, official IPs, and collaborators to create meaningful experiences.",
    points: [
      "Independent Studio",
      "Product Design",
      "Digital Products",
      "Video Production",
    ],
  },
  collaboration: {
    title: "Collaboration",
    headline: "Open to commercial, brand, and official partnerships.",
    description:
      "Whether you represent a brand, official IP, agency, or international partner, Oreory Studio is ready to explore the right way to work together.",
    points: [
      "Commercial partnerships",
      "Brand collaborations",
      "Official partnerships",
      "Film production",
      "Product collaborations",
    ],
    cta: "Get in touch →",
  },
  footer: {
    tagline: "An independent studio for digital products and visual storytelling.",
    navigate: "Navigate",
    contact: "Contact",
    email: "hello@oreory.studio",
    line: "LINE",
    rights: "© Oreory Studio. All rights reserved.",
  },
  filmsPage: {
    meta: {
      title: "Film Editing",
      description:
        "Oreory Studio film editing: you provide the footage, we edit and finish complete films ready to publish.",
    },
    hero: {
      eyebrow: "Film Editing",
      headlineLine1: "Tell stories through film,",
      headlineLine2: "create work worth remembering.",
      description:
        "From raw footage to final delivery,\nwe help organize content, build rhythm,\nand craft long-form videos ready to publish.",
      primaryCta: "Contact us →",
      secondaryCta: "View work ↓",
    },
    services: {
      title: "Focused on film editing —\nturning footage into finished work.",
      description: "You provide the assets.\nWe shape them into a complete film.",
      items: {
        longform: {
          title: "Long-form editing",
          description: "YouTube, interviews, vlogs, event documentation, and more.",
        },
        content: {
          title: "Content-driven films",
          description: "Organizing large volumes of footage into clear, paced films.",
        },
        event: {
          title: "Event / concert editing",
          description: "Shaping live footage while preserving key moments and atmosphere.",
        },
        brand: {
          title: "Brand / product editing",
          description: "Reorganizing existing assets to present brand and product clearly.",
        },
        other: {
          title: "Custom film editing",
          description: "Tailored editing based on your footage and needs.",
        },
      },
    },
    works: {
      title: "Selected work",
      description: "See how footage becomes a complete story.",
      categories: {
        brand: "Brand film",
        event: "Event recap",
        product: "Product film",
        youtube: "YouTube long-form",
        concert: "Concert recap",
      },
      items: {
        brandFilm: "Brand film",
        eventRecap: "Event recap",
        productFilm: "Product film",
        youtubeLongform: "YouTube long-form",
        concertRecap: "Concert recap",
        eventMoments: "Event highlights",
      },
    },
    process: {
      title: "From footage to finished film.",
      steps: {
        brief: {
          title: "Share your needs",
          description: "Tell us the purpose, length, style, and requirements.",
        },
        assets: {
          title: "Provide assets",
          description: "Share raw video, photos, music, captions, or other materials.",
        },
        edit: {
          title: "Edit & finish",
          description: "Editing, pacing, captions, sound, transitions, and visual cleanup.",
        },
        revise: {
          title: "Revisions",
          description: "We refine based on feedback and lock the final cut.",
        },
        deliver: {
          title: "Delivery",
          description: "Export and deliver the finished film.",
        },
      },
    },
    pricing: {
      title: "Film editing plans",
      description:
        "Pricing is based on finished length. Final quotes depend on footage and requirements.",
      minuteLabel: "min",
      minutesLabel: "min",
      customLabel: "10+ minutes",
      customPrice: "Custom quote",
      leftAlt: "Film editing plan image 1",
      rightAlt: "Film editing plan image 2",
      cta: "Request a quote →",
    },
    contact: {
      title: "Have a film in mind?",
      description:
        "Share your footage with Oreory Studio —\nlet’s finish a film worth remembering.",
      line: {
        label: "LINE Official Account",
        cta: "Add on LINE →",
      },
      email: {
        label: "Email",
        cta: "Send email →",
      },
    },
  },
  contactPage: {
    meta: {
      title: "Contact",
      description: "Reach Oreory Studio via LINE Official Account or email.",
    },
    title: "Contact",
    description: "Reach out via LINE or email for film editing and collaborations.",
  },
  mossPage: mossPageEn,
  kodoPage: kodoPageEn,
};

export const dictionaries: Record<Locale, Dictionary> = {
  "zh-TW": zhTW,
  en,
};

export const defaultLocale: Locale = "zh-TW";
