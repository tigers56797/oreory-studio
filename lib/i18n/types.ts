export type Locale = "zh-TW" | "en";

export type FeaturedId = "moss" | "kodo" | "film";

export type FilmWorkTitleKey =
  | "brandFilm"
  | "eventRecap"
  | "productFilm"
  | "youtubeLongform"
  | "concertRecap"
  | "eventMoments";

export type FilmWorkCategoryKey =
  | "brand"
  | "event"
  | "product"
  | "youtube"
  | "concert";

type HomeProductCopy = {
  name: string;
  tagline: string;
  description: string;
};

export type HomeCopy = {
  hero: {
    eyebrow: string;
    headline: string;
    highlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    prev: string;
    next: string;
    visit: string;
  };
  products: {
    eyebrow: string;
    title: string;
    items: Record<"moss" | "kodo" | "tsumu", HomeProductCopy>;
  };
  studio: {
    eyebrow: string;
    headline: string;
    description: string;
    expertise: Record<"product" | "experience" | "development" | "content", string>;
  };
  stats: {
    eyebrow: string;
    headline: string;
    items: Record<
      "products" | "expertise" | "services" | "users" | "updates",
      { label: string; unit: string; detail?: string }
    >;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    prev: string;
    next: string;
  };
  articles: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    viewAllPending: string;
    read: string;
    pendingCategory: string;
    pendingTitle: string;
    pageEmptyTitle: string;
    pageEmptyDescription: string;
    backHome: string;
  };
  collaboration: {
    eyebrow: string;
    headline: string;
    description: string;
    contactCta: string;
    donateCta: string;
    donatePending: string;
  };
  footer: {
    tagline: string;
    products: string;
    studio: string;
    support: string;
    social: string;
    about: string;
    articles: string;
    contact: string;
    terms: string;
    privacy: string;
    donate: string;
    pending: string;
    rights: string;
  };
};

export type Dictionary = {
  brand: string;
  nav: {
    moss: string;
    kodo: string;
    tsumu: string;
    films: string;
    studio: string;
    contact: string;
    products: string;
    articles: string;
    about: string;
    partner: string;
    menuOpen: string;
    menuClose: string;
  };
  home: HomeCopy;
  locale: {
    zh: string;
    en: string;
  };
  hero: {
    primaryCta: string;
    secondaryCta: string;
    slides: Record<
      FeaturedId,
      {
        eyebrow: string;
        headlineLine1: string;
        headlineLine2: string;
        emphasis: string[];
        description: string;
        primaryCta: string;
        primaryHref: string;
      }
    >;
    floatLabels: {
      ip: { label: string; value: string };
      planet: { label: string; value: string };
      anniversary: { label: string; value: string };
      bottle: { label: string; value: string };
    };
    kodoLabels: {
      focus: { label: string; value: string };
      status: { label: string; value: string };
      actions: { label: string; value: string };
    };
  };
  featured: {
    eyebrow: string;
    items: Record<
      FeaturedId,
      {
        label: string;
        title: string;
        description: string;
        cta: string;
      }
    >;
  };
  products: {
    title: string;
    items: {
      moss: {
        name: string;
        description: string;
        cta: string;
      };
      kodo: {
        name: string;
        description: string;
        cta: string;
      };
    };
  };
  films: {
    title: string;
    headline: string;
    description: string;
    points: string[];
    cta: string;
  };
  studio: {
    title: string;
    headline: string;
    description: string;
    points: string[];
  };
  collaboration: {
    title: string;
    headline: string;
    description: string;
    points: string[];
    cta: string;
  };
  footer: {
    tagline: string;
    navigate: string;
    contact: string;
    email: string;
    line: string;
    rights: string;
  };
  filmsPage: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      eyebrow: string;
      headlineLine1: string;
      headlineLine2: string;
      emphasis: string[];
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
    services: {
      title: string;
      description: string;
      items: {
        longform: { title: string; description: string };
        content: { title: string; description: string };
        event: { title: string; description: string };
        brand: { title: string; description: string };
        other: { title: string; description: string };
      };
    };
    works: {
      title: string;
      description: string;
      cta: string;
      categories: Record<FilmWorkCategoryKey, string>;
      items: Record<FilmWorkTitleKey, string>;
    };
    process: {
      title: string;
      steps: {
        brief: { title: string; description: string };
        assets: { title: string; description: string };
        edit: { title: string; description: string };
        revise: { title: string; description: string };
        deliver: { title: string; description: string };
      };
    };
    pricing: {
      title: string;
      description: string;
      minuteLabel: string;
      minutesLabel: string;
      customLabel: string;
      customPrice: string;
      leftAlt: string;
      rightAlt: string;
      cta: string;
    };
    testimonials: {
      title: string;
      description: string;
      items: Array<{
        name: string;
        role: string;
        quote: string;
        rating: number;
        initials: string;
      }>;
    };
    contact: {
      title: string;
      description: string;
      line: {
        label: string;
        cta: string;
      };
      email: {
        label: string;
        cta: string;
      };
    };
  };
  contactPage: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    description: string;
    profile: {
      name: string;
      role: string;
      statement: string;
      bio: string;
      brandLine: string;
      photoAlt: string;
      skills: {
        insight: string;
        business: string;
        systems: string;
        product: string;
        learning: string;
        execution: string;
      };
    };
  };
  mossPage: {
    meta: {
      title: string;
      description: string;
    };
    navCta: string;
    breadcrumb: {
      home: string;
      products: string;
      current: string;
    };
    hero: {
      badge: string;
      headline: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      platforms: {
        ios: string;
        android: string;
        web: string;
      };
    };
    announcement: {
      label: string;
      text: string;
      cta: string;
    };
    features: {
      title: string;
      explore: string;
      items: {
        tickets: { title: string; description: string };
        bottle: { title: string; description: string };
        anniversary: { title: string; description: string };
        ip: { title: string; description: string };
        ai: { title: string; description: string };
      };
    };
    showcase: {
      title: string;
      description: string;
      videoCta: string;
      items: {
        planet: { title: string; description: string };
        timeline: { title: string; description: string };
        ticket: { title: string; description: string };
      };
    };
    updates: {
      title: string;
      viewAll: string;
      items: {
        v2: {
          version: string;
          date: string;
          summary: string;
          points: string[];
        };
        v19: { version: string; date: string; summary: string };
        v18: { version: string; date: string; summary: string };
        v17: { version: string; date: string; summary: string };
      };
    };
    partnership: {
      title: string;
      description: string;
      consultCta: string;
      businessCta: string;
      items: {
        official: { title: string; description: string };
        brand: { title: string; description: string };
        merchant: { title: string; description: string };
        custom: { title: string; description: string };
      };
    };
    cta: {
      title: string;
      primary: string;
      secondary: string;
    };
  };
  kodoPage: {
    meta: {
      title: string;
      description: string;
    };
    navCta: string;
    hero: {
      badge: string;
      name: string;
      headline: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      platforms: string;
    };
    problem: {
      title: string;
      steps: {
        discover: { title: string; description: string };
        understand: { title: string; description: string };
        stuck: { title: string; description: string };
        delay: { title: string; description: string };
        solve: { title: string; description: string };
      };
    };
    features: {
      title: string;
      items: {
        status: { title: string; description: string };
        action: { title: string; description: string };
        focus: { title: string; description: string };
        growth: { title: string; description: string };
      };
    };
    experience: {
      title: string;
      items: {
        overview: { title: string; description: string };
        records: { title: string; description: string };
        knowledge: { title: string; description: string };
        collab: { title: string; description: string };
      };
    };
    teams: {
      title: string;
      description: string;
      consultCta: string;
      contactCta: string;
      audiences: {
        semiconductor: string;
        manufacturing: string;
        devops: string;
        engineering: string;
        enterprise: string;
      };
      enterprise: {
        enterprise: { title: string; description: string };
        integration: { title: string; description: string };
        partnership: { title: string; description: string };
      };
    };
    updates: {
      title: string;
      roadmapTitle: string;
      viewAll: string;
      items: {
        focus: { version: string; date: string; summary: string };
        v13: { version: string; date: string; summary: string };
        v12: { version: string; date: string; summary: string };
        v11: { version: string; date: string; summary: string };
      };
      roadmap: {
        ai: { quarter: string; title: string; description: string };
        workflow: { quarter: string; title: string; description: string };
        knowledge: { quarter: string; title: string; description: string };
      };
    };
    cta: {
      title: string;
      primary: string;
      secondary: string;
    };
  };
  tsumuPage: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      name: string;
      headline: string;
      description: string;
      primaryCta: string;
      primaryPending: string;
      secondaryCta: string;
      highlights: string[];
      worldAlt: string;
      mascotAlt: string;
      screenPending: string;
    };
    problem: {
      title: string;
      description: string;
      items: Record<
        "scattered" | "growth" | "risk",
        { title: string; description: string }
      >;
    };
    features: {
      title: string;
      items: Record<
        "netWorth" | "growth" | "compass" | "companion",
        { title: string; description: string }
      >;
    };
    showcase: {
      title: string;
      description: string;
      prev: string;
      next: string;
      pending: string;
      items: Record<
        "overview" | "growth" | "compass" | "island" | "companion",
        { title: string; description: string }
      >;
    };
    story: {
      headline: string;
      description: string;
      worldAlt: string;
      mascotAlt: string;
    };
    updates: {
      title: string;
      viewAll: string;
      collapse: string;
      latest: string;
      empty: string;
      labels: {
        added: string;
        improved: string;
        fixed: string;
      };
    };
    testimonials: {
      title: string;
      ratingLabel: string;
      totalLabel: string;
      viewAll: string;
      collapse: string;
      emptyTitle: string;
      emptyDescription: string;
      shareCta: string;
      shareSubject: string;
      feedbackCta: string;
    };
    faq: {
      title: string;
      items: Record<
        "what" | "mobile" | "free" | "manage" | "privacy",
        { question: string; answer: string }
      >;
    };
    support: {
      title: string;
      description: string;
      feedback: { title: string; description: string; cta: string };
      email: { title: string; description: string };
      privacy: { title: string; description: string; cta: string; pending: string };
    };
  };
};
