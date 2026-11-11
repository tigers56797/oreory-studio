"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/home/section-heading";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { homeProducts, type HomeProductId } from "@/lib/content/home";

const tones: Record<HomeProductId, { card: string; accent: string; badge: string }> = {
  moss: {
    card: "border-[#e7e0ff] bg-[linear-gradient(150deg,#f6f3ff_0%,#ece6ff_100%)]",
    accent: "text-[#7b61ff]",
    badge: "bg-[#7b61ff]",
  },
  kodo: {
    card: "border-[#ffe3cc] bg-[linear-gradient(150deg,#fff7ef_0%,#ffe8d4_100%)]",
    accent: "text-[#e07a2e]",
    badge: "bg-[#f29a4a]",
  },
  tsumu: {
    card: "border-[#d6eedd] bg-[linear-gradient(150deg,#f1faf3_0%,#e0f2e6_100%)]",
    accent: "text-[#2f6b4f]",
    badge: "bg-[#2f6b4f]",
  },
};

export function Products() {
  const { dictionary } = useLocale();
  const copy = dictionary.home.products;

  return (
    <Section id="products">
      <Container>
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />

        <ul className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 md:grid-cols-3 md:gap-5">
          {homeProducts.map((product) => {
            const item = copy.items[product.id];
            const tone = tones[product.id];
            return (
              <li key={product.id} className="min-w-0">
                <Link
                  href={product.href}
                  className={`group relative flex h-full min-h-[17rem] flex-col overflow-hidden rounded-[1.75rem] border p-6 shadow-soft transition-[transform,box-shadow] duration-300 ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-card sm:min-h-[18.5rem] ${tone.card}`}
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
                      {product.logo ? (
                        <Image
                          src={product.logo}
                          alt=""
                          width={30}
                          height={30}
                          className="h-7 w-7 object-contain"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[13px] text-white ${tone.badge}`}
                        >
                          ✦
                        </span>
                      )}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {item.name}
                      </h3>
                      <p className={`text-[12px] font-medium ${tone.accent}`}>{item.tagline}</p>
                    </div>
                  </div>

                  <p className="relative z-10 mt-4 max-w-[58%] text-[13px] leading-relaxed text-foreground-muted sm:text-sm">
                    {item.description}
                  </p>

                  <span
                    aria-hidden
                    className="relative z-10 mt-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-white text-foreground shadow-soft transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1"
                  >
                    →
                  </span>

                  {product.imageFit === "phone" ? (
                    <div className="absolute right-5 -bottom-10 w-[38%] max-w-[150px] rotate-[5deg] overflow-hidden rounded-[1.4rem] border-[5px] border-white bg-white shadow-card transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.04]">
                      <div className="relative aspect-[9/19]">
                        <Image
                          src={product.image}
                          alt=""
                          fill
                          className="object-cover object-top"
                          sizes="150px"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute -right-2 -bottom-3 aspect-square w-[54%] max-w-[210px] transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.04]">
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        className="object-contain drop-shadow-[0_16px_24px_rgba(40,60,40,0.16)]"
                        sizes="210px"
                      />
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
