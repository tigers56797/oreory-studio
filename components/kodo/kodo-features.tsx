"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { kodoFeatureKeys, kodoMedia } from "@/lib/content/kodo";

export function KodoFeatures() {
  const { dictionary } = useLocale();
  const copy = dictionary.kodoPage.features;

  return (
    <Section id="kodo-features">
      <Container>
        <h2 className="text-[clamp(1.55rem,3vw,2.15rem)] font-semibold tracking-[-0.025em] text-foreground">
          {copy.title}
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {kodoFeatureKeys.map((key, index) => {
            const item = copy.items[key];
            const mascot = kodoMedia.mascots[index % kodoMedia.mascots.length];
            if (!item || !mascot) return null;

            return (
              <li key={key} className="min-w-0">
                <article className="card-lift flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-soft sm:rounded-[1.75rem]">
                  <div className="relative aspect-[5/4] overflow-hidden bg-[linear-gradient(160deg,#eef5ef_0%,#f7f8f6_55%,#e6efe8_100%)] p-4">
                    <div className="relative h-full w-full">
                      <Image
                        src={mascot.src}
                        alt={mascot.alt}
                        fill
                        className="object-contain object-center drop-shadow-[0_14px_24px_rgba(30,50,35,0.12)]"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 260px"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-5">
                    <h3 className="text-[0.95rem] font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
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
