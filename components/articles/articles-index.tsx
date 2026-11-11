"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { brandLogos, homeArticles } from "@/lib/content/home";

export function ArticlesIndex() {
  const { dictionary } = useLocale();
  const copy = dictionary.home.articles;

  return (
    <section className="pt-32 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.2em] text-foreground-subtle">
          {copy.eyebrow}
        </p>
        <h1 className="mt-2 text-[clamp(1.9rem,4vw,2.6rem)] font-semibold tracking-[-0.03em] text-foreground">
          {copy.title}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          {copy.description}
        </p>

        {homeArticles.length ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={article.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-soft transition-shadow duration-300 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[linear-gradient(140deg,#efe9ff_0%,#ffe9da_100%)]">
                    {article.cover ? (
                      <Image
                        src={article.cover}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 360px"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="inline-flex w-fit rounded-full bg-foreground/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-foreground-muted">
                      {article.category}
                    </span>
                    <h2 className="mt-2 font-semibold leading-snug tracking-tight text-foreground">
                      {article.title}
                    </h2>
                    {article.date ? (
                      <time dateTime={article.date} className="mt-auto pt-3 text-[12px] text-foreground-subtle">
                        {article.date.replaceAll("-", ".")}
                      </time>
                    ) : null}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="relative mt-10 overflow-clip rounded-[2rem] border border-border bg-[linear-gradient(140deg,#f6f2ff_0%,#fff4ea_100%)] px-6 py-16 text-center sm:px-10 sm:py-20">
            <Image
              src={brandLogos.symbol}
              alt=""
              width={380}
              height={235}
              className="mx-auto h-auto w-24 opacity-[0.14]"
            />
            <h2 className="mt-6 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {copy.pageEmptyTitle}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-foreground-muted">
              {copy.pageEmptyDescription}
            </p>
            <Link
              href="/"
              className="mt-7 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-opacity hover:opacity-85"
            >
              {copy.backHome}
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
