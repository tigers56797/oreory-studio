"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SectionHeading } from "@/components/home/section-heading";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { brandLogos, homeArticles, homeLinks, type HomeArticle } from "@/lib/content/home";

const coverTones = [
  "bg-[linear-gradient(140deg,#efe9ff_0%,#ffe9da_100%)]",
  "bg-[linear-gradient(140deg,#fff3e3_0%,#fde3d3_100%)]",
  "bg-[linear-gradient(140deg,#e7f5ec_0%,#e3f0fb_100%)]",
];

function Cover({ article, index, sizes }: { article: HomeArticle | null; index: number; sizes: string }) {
  if (article?.cover) {
    return (
      <Image
        src={article.cover}
        alt=""
        fill
        className="object-cover transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.03]"
        sizes={sizes}
      />
    );
  }

  return (
    <div className={`absolute inset-0 flex items-center justify-center ${coverTones[index % coverTones.length]}`}>
      <Image
        src={brandLogos.symbol}
        alt=""
        width={380}
        height={235}
        className="h-auto w-[34%] max-w-[140px] opacity-[0.12]"
      />
    </div>
  );
}

function CardShell({
  article,
  className,
  children,
}: {
  article: HomeArticle | null;
  className: string;
  children: ReactNode;
}) {
  if (!article) return <div className={className}>{children}</div>;
  return (
    <Link href={article.href} className={`group ${className}`}>
      {children}
    </Link>
  );
}

function ArticleMeta({ article, large = false }: { article: HomeArticle | null; large?: boolean }) {
  const { dictionary } = useLocale();
  const copy = dictionary.home.articles;

  return (
    <div className="min-w-0">
      <span className="inline-flex rounded-full bg-foreground/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-foreground-muted">
        {article?.category ?? copy.pendingCategory}
      </span>
      <h3
        className={`mt-2 font-semibold leading-snug tracking-tight text-foreground ${
          large ? "text-lg sm:text-xl" : "text-[0.95rem]"
        }`}
      >
        {article?.title ?? copy.pendingTitle}
      </h3>
      {article?.date ? (
        <time dateTime={article.date} className="mt-1.5 block text-[12px] text-foreground-subtle">
          {article.date.replaceAll("-", ".")}
        </time>
      ) : null}
      {article ? <span className="sr-only">{copy.read}</span> : null}
    </div>
  );
}

function Arrow({ muted }: { muted: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-white text-foreground shadow-soft transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1 ${
        muted ? "opacity-40" : ""
      }`}
    >
      →
    </span>
  );
}

export function Articles() {
  const { dictionary } = useLocale();
  const copy = dictionary.home.articles;
  const slots: (HomeArticle | null)[] = [0, 1, 2].map((i) => homeArticles[i] ?? null);
  const [featured, ...rest] = slots;

  return (
    <Section id="articles">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.26fr)_minmax(0,0.74fr)] lg:gap-10">
          <div>
            <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-muted">
              {copy.description}
            </p>
            {homeLinks.allArticles ? (
              <Link
                href={homeLinks.allArticles}
                className="mt-6 inline-flex text-sm font-medium text-foreground transition-opacity hover:opacity-70"
              >
                {copy.viewAll}
              </Link>
            ) : (
              <p className="mt-6 text-sm text-foreground-subtle">{copy.viewAllPending}</p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <CardShell
              article={featured}
              className="relative flex min-h-[17rem] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-border shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <Cover article={featured} index={0} sizes="(max-width: 768px) 92vw, 460px" />
              <div className="relative m-4 flex items-end justify-between gap-4 rounded-[1.25rem] bg-white/85 p-4 backdrop-blur-md">
                <ArticleMeta article={featured} large />
                <Arrow muted={!featured} />
              </div>
            </CardShell>

            <div className="grid gap-4">
              {rest.map((article, index) => (
                <CardShell
                  key={article?.slug ?? `pending-${index}`}
                  article={article}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-border bg-surface p-3 pr-4 shadow-soft transition-shadow duration-300 hover:shadow-card"
                >
                  <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-[1rem] sm:w-32">
                    <Cover article={article} index={index + 1} sizes="128px" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <ArticleMeta article={article} />
                  </div>
                  <Arrow muted={!article} />
                </CardShell>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
