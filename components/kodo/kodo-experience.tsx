"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { kodoExperienceKeys, kodoMedia } from "@/lib/content/kodo";

export function KodoExperience() {
  const { dictionary } = useLocale();
  const copy = dictionary.kodoPage.experience;

  return (
    <Section id="kodo-experience">
      <Container>
        <h2 className="text-[clamp(1.55rem,3vw,2.15rem)] font-semibold tracking-[-0.025em] text-foreground">
          {copy.title}
        </h2>

        <ul className="mt-8 flex gap-4 overflow-x-auto pb-2 sm:mt-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {kodoExperienceKeys.map((key) => {
            const item = copy.items[key];
            const image = kodoMedia.experience[key];

            return (
              <li
                key={key}
                className="w-[min(78vw,280px)] shrink-0 sm:w-[260px]"
              >
                <article className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-card">
                  <div className="aspect-[4/5] bg-[linear-gradient(165deg,#edf4ee_0%,#f8faf8_50%,#e4eee6_100%)] p-3">
                    <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-white/80 bg-white shadow-soft">
                      <Image
                        src={image}
                        alt={item.title}
                        fill
                        className="object-cover object-top"
                        sizes="260px"
                      />
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-foreground-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
