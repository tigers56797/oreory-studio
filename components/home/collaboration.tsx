"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { brandLogos, homeLinks } from "@/lib/content/home";
import { tsumuMedia } from "@/lib/content/tsumu";

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 19.5s-7-4.35-7-9.6A3.9 3.9 0 0 1 12 7.6a3.9 3.9 0 0 1 7 2.3c0 5.25-7 9.6-7 9.6z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const pillBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,box-shadow,background-color] duration-200 ease-[var(--ease-out)]";

export function Collaboration() {
  const { dictionary } = useLocale();
  const copy = dictionary.home.collaboration;

  return (
    <Section id="collaboration">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-[#f5e4d6] bg-[linear-gradient(115deg,#fffaf3_0%,#fff3ea_55%,#ffeee6_100%)] px-6 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:px-14">
          <div
            aria-hidden
            className="collab-drift pointer-events-none absolute -top-14 -right-16 -z-10 w-[55%] max-w-[560px] opacity-[0.06]"
          >
            <Image src={brandLogos.symbol} alt="" width={380} height={235} className="h-auto w-full" />
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#e07a2e]">
                {copy.eyebrow}
              </p>
              <h2 className="mt-3 whitespace-pre-line text-[clamp(1.7rem,3.4vw,2.5rem)] font-semibold leading-[1.25] tracking-[-0.03em] text-foreground">
                {copy.headline}
              </h2>
            </div>

            <div aria-hidden className="relative mx-auto hidden aspect-square w-40 sm:block lg:w-48">
              <div className="soft-float absolute inset-0">
                <Image
                  src={tsumuMedia.mascotExplorer}
                  alt=""
                  fill
                  className="object-contain drop-shadow-[0_18px_28px_rgba(120,80,40,0.16)]"
                  sizes="192px"
                />
              </div>
            </div>

            <div>
              <p className="max-w-md text-[0.95rem] leading-7 text-foreground-muted">
                {copy.description}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={homeLinks.contact}
                  className={`${pillBase} bg-foreground text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#2a2a2a] hover:shadow-card`}
                >
                  {copy.contactCta}
                </Link>
                {homeLinks.donate ? (
                  <a
                    href={homeLinks.donate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${pillBase} border border-[#f2b27a] bg-white text-[#d4702a] hover:-translate-y-0.5 hover:shadow-card`}
                  >
                    <HeartIcon className="h-4 w-4" />
                    {copy.donateCta}
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    title={copy.donatePending}
                    className={`${pillBase} cursor-not-allowed border border-[#f2b27a] bg-white text-[#d4702a] opacity-60`}
                  >
                    <HeartIcon className="h-4 w-4" />
                    {copy.donateCta}
                  </button>
                )}
              </div>
              {!homeLinks.donate ? (
                <p className="mt-2 text-[12px] text-foreground-subtle">{copy.donatePending}</p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
