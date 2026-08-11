"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PlayIcon } from "@/components/ui/icons";
import {
  mossLinks,
  mossShowcaseKeys,
  mossShowcaseMedia,
} from "@/lib/content/moss";

const showcaseTone: Record<(typeof mossShowcaseKeys)[number], string> = {
  planet: "bg-[linear-gradient(160deg,#2a2148_0%,#171225_100%)] text-white",
  timeline: "bg-white text-foreground",
  ticket: "bg-[linear-gradient(160deg,#f6f1ff_0%,#efe8ff_100%)] text-foreground",
};

export function MossShowcase() {
  const { dictionary } = useLocale();
  const copy = dictionary.mossPage.showcase;

  return (
    <Section id="moss-showcase">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end lg:gap-12">
          <div className="max-w-md">
            <h2 className="text-[clamp(1.55rem,3vw,2.35rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-foreground">
              {copy.title}
            </h2>
            <p className="mt-4 text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
              {copy.description}
            </p>
            <a
              href={mossLinks.video}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-[var(--moss-primary)]">
                <PlayIcon className="h-4 w-4" />
              </span>
              {copy.videoCta}
            </a>
          </div>

          <ul className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {mossShowcaseKeys.map((key) => {
              const item = copy.items[key];
              return (
                <li
                  key={key}
                  className="w-[min(78vw,280px)] shrink-0 sm:w-[260px]"
                >
                  <article
                    className={`overflow-hidden rounded-[1.75rem] border border-border shadow-card ${showcaseTone[key]}`}
                  >
                    <div className="aspect-[4/5] p-5">
                      <div className="flex h-full flex-col justify-between">
                        <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.25rem]">
                          <Image
                            src={mossShowcaseMedia[key]}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="260px"
                          />
                        </div>
                        <div className="mt-4 shrink-0">
                          <h3 className="text-base font-semibold tracking-tight">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed opacity-75">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
