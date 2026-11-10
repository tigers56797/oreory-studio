"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { tsumuMedia } from "@/lib/content/tsumu";

export function TsumuStory() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.story;

  return (
    <Section id="tsumu-story" className="!py-8 sm:!py-12">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-border shadow-soft sm:rounded-[2.5rem]">
          <Image
            src={tsumuMedia.storyWorld}
            alt={copy.worldAlt}
            fill
            className="-z-20 object-cover object-[center_70%]"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(250,247,240,0)_15%,rgba(250,247,240,0.88)_58%,rgba(250,247,240,0.96)_100%)] lg:bg-[linear-gradient(90deg,rgba(250,247,240,0)_20%,rgba(250,247,240,0.82)_52%,rgba(250,247,240,0.94)_100%)]"
          />

          <div className="grid min-h-[420px] items-end gap-4 px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[360px] lg:grid-cols-2 lg:items-center lg:px-14">
            <div className="relative mx-auto aspect-square w-[150px] sm:w-[190px] lg:mx-0 lg:ml-6 lg:w-[220px] lg:self-end">
              <Image
                src={tsumuMedia.mascotCaptain}
                alt={copy.mascotAlt}
                fill
                className="object-contain drop-shadow-[0_18px_28px_rgba(30,60,40,0.22)]"
                sizes="220px"
              />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="whitespace-pre-line text-[clamp(1.45rem,2.8vw,2.1rem)] font-semibold leading-[1.35] tracking-[-0.025em] text-foreground">
                {copy.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-7 text-foreground-muted lg:mx-0">
                {copy.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
