"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { brandLogos, homeStats } from "@/lib/content/home";
import { tsumuMedia } from "@/lib/content/tsumu";

const COUNT_DURATION = 1400;

function CountUp({ value, delay = 0, className }: { value: number; delay?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer = 0;
    el.textContent = "0";

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / COUNT_DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(eased * value));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(run, delay);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      el.textContent = String(value);
    };
  }, [value, delay]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

export function Stats() {
  const { dictionary } = useLocale();
  const copy = dictionary.home.stats;
  const stats = homeStats.filter((stat) => stat.value);

  if (!stats.length) return null;

  return (
    <Section id="stats" className="!py-6 sm:!py-10">
      <Container>
        <div className="relative isolate overflow-clip rounded-[2rem] border border-[#f1e6d2] bg-[linear-gradient(120deg,#fffaf0_0%,#fdf3e3_55%,#fbefe6_100%)] px-6 py-8 sm:rounded-[2.25rem] sm:px-10 sm:py-10 lg:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -bottom-16 -z-10 w-[46%] max-w-[460px] opacity-[0.06]"
          >
            <Image src={brandLogos.symbol} alt="" width={380} height={235} className="h-auto w-full" />
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
            <div className="flex items-center gap-4">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
                  {copy.eyebrow}
                </p>
                <h2 className="mt-2 whitespace-pre-line text-[clamp(1.35rem,2.4vw,1.8rem)] font-semibold leading-[1.35] tracking-[-0.025em] text-foreground">
                  {copy.headline}
                </h2>
              </div>
              <div aria-hidden className="relative -my-6 ml-auto hidden aspect-square w-28 shrink-0 sm:block lg:w-36">
                <Image
                  src={tsumuMedia.mascotCaptain}
                  alt=""
                  fill
                  className="object-contain drop-shadow-[0_10px_18px_rgba(40,60,40,0.14)]"
                  sizes="144px"
                />
              </div>
            </div>

            <dl className="grid grid-cols-1 divide-y divide-foreground/10 sm:grid-flow-col sm:auto-cols-fr sm:divide-x sm:divide-y-0">
              {stats.map((stat, index) => {
                const item = copy.items[stat.id];
                return (
                  <div
                    key={stat.id}
                    className="flex min-w-0 flex-col gap-1.5 py-4 first:pt-0 last:pb-0 sm:px-5 sm:py-0 sm:first:pl-0 sm:last:pr-0 lg:px-6"
                  >
                    <dt className="order-2 text-sm font-medium text-foreground">{item.label}</dt>
                    <dd className="order-1 flex items-baseline gap-1">
                      <CountUp
                        value={stat.value ?? 0}
                        delay={index * 140}
                        className="text-[clamp(2.2rem,4vw,3rem)] font-semibold leading-none tracking-[-0.03em] text-foreground tabular-nums"
                      />
                      {item.unit ? (
                        <span className="text-sm font-medium text-foreground-muted">{item.unit}</span>
                      ) : null}
                    </dd>
                    {item.detail ? (
                      <dd className="order-3 text-[12px] leading-relaxed text-foreground-subtle">
                        {item.detail}
                      </dd>
                    ) : null}
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
