"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tsumuMedia } from "@/lib/content/tsumu";

export function TsumuCompanions() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.companions;

  return (
    <Section id="tsumu-companions" className="!py-8 sm:!py-12">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
            {copy.eyebrow}
          </p>
          <h2 className="mt-2 text-[clamp(1.35rem,2.6vw,1.85rem)] font-semibold tracking-[-0.025em] text-foreground">
            {copy.title}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-foreground-muted">
            {copy.description}
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8">
          {tsumuMedia.companions.map((companion, index) => (
            <li
              key={companion.id}
              className="group relative overflow-hidden rounded-[1.35rem] border border-border bg-[linear-gradient(165deg,#fffaf2_0%,#f4f8ef_100%)] shadow-soft"
            >
              <div className="relative aspect-square p-3 sm:p-4">
                <Image
                  src={companion.src}
                  alt=""
                  fill
                  className="object-contain p-2 transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.06] sm:p-3"
                  sizes="(max-width: 640px) 42vw, (max-width: 1024px) 22vw, 120px"
                  priority={index < 3}
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
