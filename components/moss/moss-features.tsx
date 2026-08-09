"use client";

import type { ComponentType, SVGProps } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { mossFeatureKeys, mossLinks } from "@/lib/content/moss";

type IconProps = SVGProps<SVGSVGElement>;

const featureMeta: Record<
  (typeof mossFeatureKeys)[number],
  { icon: ComponentType<IconProps>; tone: string }
> = {
  tickets: {
    icon: TicketIcon,
    tone: "bg-[#efe9ff] text-[#7b61ff]",
  },
  bottle: {
    icon: BottleIcon,
    tone: "bg-[#ffe8f1] text-[#e85a9b]",
  },
  anniversary: {
    icon: BellIcon,
    tone: "bg-[#e7f1ff] text-[#4d8dff]",
  },
  ip: {
    icon: StarIcon,
    tone: "bg-[#e8f8ef] text-[#2f9e63]",
  },
  ai: {
    icon: SparkIcon,
    tone: "bg-[#fff4df] text-[#d0891d]",
  },
};

export function MossFeatures() {
  const { dictionary } = useLocale();
  const copy = dictionary.mossPage.features;

  return (
    <Section id="moss-features">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.55rem,3vw,2.25rem)] font-semibold tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {mossFeatureKeys.map((key) => {
            const item = copy.items[key];
            const meta = featureMeta[key];
            const Icon = meta.icon;

            return (
              <li key={key}>
                <article className="flex h-full flex-col rounded-[1.5rem] border border-border bg-surface px-5 py-6 shadow-soft sm:rounded-[1.75rem]">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${meta.tone}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[0.95rem] font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex justify-end sm:mt-10">
          <a
            href={mossLinks.features}
            className="text-sm font-medium text-foreground transition-opacity hover:opacity-70"
          >
            {copy.explore}
          </a>
        </div>
      </Container>
    </Section>
  );
}

function TicketIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4.5 9.5V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 0 0 3V16a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-1.5a1.5 1.5 0 0 0 0-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 8v8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

function BottleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M10 3.5h4M10.5 3.5v2.2c0 .6-.2 1.1-.6 1.5L8.5 9.2A4.5 4.5 0 0 0 7.5 12v5.5A3 3 0 0 0 10.5 20.5h3A3 3 0 0 0 16.5 17.5V12c0-1-.3-1.9-.9-2.7l-1.5-2c-.4-.4-.6-.9-.6-1.5V3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BellIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 4.5a5 5 0 0 1 5 5v2.2c0 .8.2 1.5.7 2.1l.8 1.1H5.5l.8-1.1c.5-.6.7-1.3.7-2.1V9.5a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M10 18a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 4.5 13.4 9.4 18.5 12 13.4 14.6 12 19.5 10.6 14.6 5.5 12l5.1-2.6L12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
