"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LineIcon, MailIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { siteContact } from "@/lib/contact";

type FilmContactProps = {
  title?: string;
  description?: string;
};

export function FilmContact({ title, description }: FilmContactProps) {
  const { dictionary } = useLocale();
  const copy = dictionary.filmsPage.contact;

  return (
    <Section id="film-contact">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.55rem,3vw,2.35rem)] font-semibold tracking-[-0.025em] text-foreground">
            {title ?? copy.title}
          </h2>
          <p className="mx-auto mt-4 whitespace-pre-line text-[0.95rem] leading-7 text-foreground-muted sm:text-base sm:leading-8">
            {description ?? copy.description}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          <article className="card-lift rounded-[1.75rem] border border-border bg-surface px-6 py-7 text-left shadow-soft sm:rounded-[2rem] sm:px-7 sm:py-8">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#06C755]/25 bg-[#06C755]/12 text-[#06C755]">
              <LineIcon className="h-5 w-5" />
            </div>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.16em] text-foreground-subtle">
              {copy.line.label}
            </p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">
              {siteContact.lineId}
            </p>
            <div className="mt-6">
              <Button
                href={siteContact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                {copy.line.cta}
              </Button>
            </div>
          </article>

          <article className="card-lift rounded-[1.75rem] border border-border bg-surface px-6 py-7 text-left shadow-soft sm:rounded-[2rem] sm:px-7 sm:py-8">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#3B82F6]/25 bg-[#3B82F6]/12 text-[#3B82F6]">
              <MailIcon className="h-5 w-5" />
            </div>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.16em] text-foreground-subtle">
              {copy.email.label}
            </p>
            <p className="mt-2 break-all text-xl font-semibold tracking-tight text-foreground">
              {siteContact.email}
            </p>
            <div className="mt-6">
              <Button href={siteContact.mailto} variant="secondary">
                {copy.email.cta}
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
