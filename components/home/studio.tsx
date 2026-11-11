"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { brandLogos } from "@/lib/content/home";

const expertiseIcons: Record<
  "product" | "experience" | "development" | "content",
  ReactNode
> = {
  product: (
    <>
      <rect x="3.5" y="4.5" width="17" height="11.5" rx="2" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
  experience: (
    <>
      <path d="M12 3.5l8.5 4.25L12 12 3.5 7.75 12 3.5z" />
      <path d="M3.5 12L12 16.25 20.5 12M3.5 16.25L12 20.5l8.5-4.25" />
    </>
  ),
  development: <path d="M9 7l-5 5 5 5M15 7l5 5-5 5M13.5 5l-3 14" />,
  content: (
    <>
      <path d="M14.5 5.5l4 4L9 19H5v-4l9.5-9.5z" />
      <path d="M12.5 7.5l4 4" />
    </>
  ),
};

export function Studio() {
  const { dictionary } = useLocale();
  const copy = dictionary.home.studio;

  return (
    <Section id="studio">
      <Container className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-0 hidden w-[34%] max-w-[420px] -translate-y-1/2 opacity-[0.07] md:block"
        >
          <Image
            src={brandLogos.symbol}
            alt=""
            width={380}
            height={235}
            className="h-auto w-full"
          />
        </div>

        <div className="relative grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.9fr)_minmax(0,0.48fr)]">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 whitespace-pre-line text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.28] tracking-[-0.03em] text-foreground">
              {copy.headline}
            </h2>
            <svg
              aria-hidden
              viewBox="0 0 160 14"
              className="mt-2 h-3 w-36 text-[#f2b061]"
              fill="none"
            >
              <path
                d="M2 9c26-6 52-7 78-4s52 4 78-2"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="border-t border-border pt-6 md:border-t-0 md:border-l md:pt-1 md:pl-8 lg:pl-10">
            <p className="max-w-xl text-[0.95rem] leading-8 text-foreground-muted">
              {copy.description}
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
              {(Object.keys(expertiseIcons) as (keyof typeof expertiseIcons)[]).map((key) => (
                <li key={key} className="flex flex-col items-start gap-2.5 sm:items-center sm:text-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-foreground"
                    aria-hidden
                  >
                    {expertiseIcons[key]}
                  </svg>
                  <span className="text-[13px] font-medium text-foreground-muted">
                    {copy.expertise[key]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
