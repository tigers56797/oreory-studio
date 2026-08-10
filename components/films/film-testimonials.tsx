"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const avatarTones = [
  "bg-[#efe4d4] text-[#7a5c3c]",
  "bg-[#e7ebe4] text-[#4f5f52]",
  "bg-[#e8e4ef] text-[#5a5268]",
  "bg-[#f0e6e1] text-[#7a5346]",
  "bg-[#e6ebe8] text-[#456056]",
  "bg-[#efe8dc] text-[#6b5740]",
  "bg-[#e9e6e1] text-[#5c574e]",
  "bg-[#ebe4dc] text-[#6a5340]",
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mt-2.5 flex items-center gap-0.5" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5"
          aria-hidden
        >
          <path
            d="M10 1.8l2.35 4.76 5.25.76-3.8 3.7.9 5.22L10 13.9l-4.7 2.34.9-5.22-3.8-3.7 5.25-.76L10 1.8z"
            fill={index < rating ? "#F5A623" : "rgba(23,23,23,0.12)"}
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  quote,
  rating,
  initials,
  tone,
}: {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
  tone: string;
}) {
  return (
    <article className="w-[min(86vw,22rem)] shrink-0 rounded-[1.5rem] border border-border bg-white px-5 py-5 shadow-soft sm:w-[24rem] sm:rounded-[1.75rem] sm:px-6 sm:py-6">
      <div className="flex items-start gap-3">
        <span
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${tone}`}
          aria-hidden
        >
          {initials}
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <p className="text-[0.95rem] font-semibold tracking-tight text-foreground">
              {name}
            </p>
            <p className="text-[12px] text-foreground-muted">{role}</p>
          </div>
          <Stars rating={rating} />
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{quote}</p>
    </article>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Array<{
    name: string;
    role: string;
    quote: string;
    rating: number;
    initials: string;
  }>;
  direction: "ltr" | "rtl";
}) {
  const loop = [...items, ...items];

  return (
    <div className="film-marquee-mask overflow-hidden">
      <div
        className={[
          "film-marquee-track flex w-max gap-4 sm:gap-5",
          direction === "ltr" ? "film-marquee-ltr" : "film-marquee-rtl",
        ].join(" ")}
      >
        {loop.map((item, index) => (
          <TestimonialCard
            key={`${item.name}-${index}`}
            {...item}
            tone={avatarTones[index % avatarTones.length]}
          />
        ))}
      </div>
    </div>
  );
}

export function FilmTestimonials() {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.testimonials;
  const midpoint = Math.ceil(copy.items.length / 2);
  const topRow = copy.items.slice(0, midpoint);
  const bottomRow = copy.items.slice(midpoint);

  return (
    <Section id="film-testimonials" reveal={false} className="!pb-0">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.55rem,3vw,2.35rem)] font-semibold tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
            {copy.description}
          </p>
        </Reveal>
      </Container>

      <Reveal className="film-testimonials-band relative mt-10 sm:mt-12" delay={100}>
        <div aria-hidden className="film-testimonials-wave">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="block h-10 w-full sm:h-14"
          >
            <path
              d="M0,48 C180,8 320,72 480,40 C640,8 780,64 960,36 C1120,12 1280,56 1440,28 L1440,80 L0,80 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="space-y-4 bg-[#dbe8cf] py-8 sm:space-y-5 sm:py-10 lg:py-12">
          <MarqueeRow items={topRow} direction="ltr" />
          <MarqueeRow items={bottomRow} direction="rtl" />
        </div>
      </Reveal>
    </Section>
  );
}
