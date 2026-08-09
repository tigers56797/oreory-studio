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

export type Dictionary = {
  brand: string;
  nav: {
    moss: string;
    kodo: string;
    films: string;
    studio: string;
    contact: string;
  };
  locale: {
    zh: string;
    en: string;
  };
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    cta: string;
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
};
