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
    eyebrow: "獨立創意工作室",
    headlineLine1: "打造數位產品，",
    headlineLine2: "創造影像故事。",
    description:
      "Oreory Studio 專注於數位產品設計與影片剪輯，\n透過設計與內容，創造有價值的體驗。",
    primaryCta: "探索作品 →",
    secondaryCta: "了解工作室 →",
    floatLabels: {
      ip: { label: "收藏的 IP", value: "18 個" },
      planet: { label: "回憶星球", value: "32 顆" },
      anniversary: { label: "紀念日", value: "12 個" },
      bottle: { label: "漂流瓶", value: "8 個" },
    },
    kodoLabels: {
      focus: { label: "Focus 計時", value: "25:00" },
      status: { label: "異常狀態", value: "即時" },
      actions: { label: "待處理", value: "3 項" },
    },
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
    email: "oreorystudioo@gmail.com",
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
      description: "點擊下方連結，查看更多影片剪輯作品。",
      cta: "查看我的作品 →",
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
    testimonials: {
      title: "來自合作對象的好評回饋",
      description:
        "每一段回饋，都是我們持續把影片做得更好的動力。感謝願意把素材與故事交給 Oreory Studio 的你們。",
      items: [
        {
          name: "Anya",
          role: "YouTube 創作者",
          quote:
            "素材很多又雜亂，剪完之後節奏變得很清楚，發布後觀看表現也明顯比較穩。",
          rating: 5,
          initials: "A",
        },
        {
          name: "Ken",
          role: "活動紀錄委託",
          quote:
            "演唱會素材量很大，還是整理得很有層次，重要時刻都有被好好保留下來。",
          rating: 5,
          initials: "K",
        },
        {
          name: "Mina",
          role: "品牌行銷",
          quote:
            "溝通很順，從初剪到修改都很有效率，成品也符合我們想要的品牌調性。",
          rating: 5,
          initials: "M",
        },
        {
          name: "Leo",
          role: "產品介紹影片",
          quote:
            "把原本平淡的錄影素材剪得更有重點，客戶提案時反應都很好。",
          rating: 5,
          initials: "L",
        },
        {
          name: "Yuki",
          role: "婚禮紀念影片",
          quote:
            "情緒與節奏拿捏得很好，家人看完都很感動，之後還會再找你們。",
          rating: 5,
          initials: "Y",
        },
        {
          name: "Owen",
          role: "訪談長影音",
          quote:
            "長影音最怕拖沓，這次剪輯很乾淨，重點清楚，觀眾也比較容易看完。",
          rating: 5,
          initials: "O",
        },
        {
          name: "Sara",
          role: "品牌形象影片",
          quote:
            "細節處理得很用心，字幕與轉場都剛剛好，整體質感比預期更好。",
          rating: 5,
          initials: "S",
        },
        {
          name: "Jay",
          role: "活動精華剪輯",
          quote:
            "交期準、修改也很快，幫忙把一整天的活動濃縮成好分享的短片。",
          rating: 5,
          initials: "J",
        },
      ],
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
    eyebrow: "Independent creative studio",
    headlineLine1: "Building digital products,",
    headlineLine2: "crafting visual stories.",
    description:
      "Oreory Studio focuses on digital product design and film editing,\ncreating meaningful experiences through design and content.",
    primaryCta: "Explore work →",
    secondaryCta: "About the studio →",
    floatLabels: {
      ip: { label: "Collected IP", value: "18" },
      planet: { label: "Memory planets", value: "32" },
      anniversary: { label: "Anniversaries", value: "12" },
      bottle: { label: "Drift bottles", value: "8" },
    },
    kodoLabels: {
      focus: { label: "Focus timer", value: "25:00" },
      status: { label: "Exception status", value: "Live" },
      actions: { label: "Open actions", value: "3" },
    },
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
    email: "oreorystudioo@gmail.com",
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
      description: "Follow the link below to view more film editing work.",
      cta: "View my work →",
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
    testimonials: {
      title: "Kind words from collaborators",
      description:
        "Every note of feedback helps us keep refining the craft. Thank you for trusting Oreory Studio with your footage and stories.",
      items: [
        {
          name: "Anya",
          role: "YouTube creator",
          quote:
            "My footage was messy — after the edit the pacing felt clear, and the published video performed more steadily.",
          rating: 5,
          initials: "A",
        },
        {
          name: "Ken",
          role: "Event documentation",
          quote:
            "Huge concert footage, still layered beautifully. The key moments were preserved with care.",
          rating: 5,
          initials: "K",
        },
        {
          name: "Mina",
          role: "Brand marketing",
          quote:
            "Smooth communication from first cut to revisions. The final piece matched our brand tone perfectly.",
          rating: 5,
          initials: "M",
        },
        {
          name: "Leo",
          role: "Product film",
          quote:
            "Turned plain recordings into a focused film. Clients responded really well in presentations.",
          rating: 5,
          initials: "L",
        },
        {
          name: "Yuki",
          role: "Wedding film",
          quote:
            "Emotion and pacing were handled beautifully. Family was moved — we’ll definitely come back.",
          rating: 5,
          initials: "Y",
        },
        {
          name: "Owen",
          role: "Interview longform",
          quote:
            "Longform can drag easily. This edit stayed clean and clear — much easier for viewers to finish.",
          rating: 5,
          initials: "O",
        },
        {
          name: "Sara",
          role: "Brand film",
          quote:
            "Careful with details. Subtitles and transitions felt just right — better polish than expected.",
          rating: 5,
          initials: "S",
        },
        {
          name: "Jay",
          role: "Event highlight",
          quote:
            "On time, quick revisions, and condensed a full-day event into a shareable highlight film.",
          rating: 5,
          initials: "J",
        },
      ],
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
