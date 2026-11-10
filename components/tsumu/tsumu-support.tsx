"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { ChatIcon, ShieldIcon } from "@/components/tsumu/tsumu-icons";
import { Container } from "@/components/ui/container";
import { MailIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { siteContact } from "@/lib/contact";
import { tsumuLinks } from "@/lib/content/tsumu";

const linkClass =
  "mt-4 inline-flex text-sm font-medium text-[var(--tsumu-primary)] transition-opacity hover:opacity-70";

function SupportCard({
  icon,
  title,
  description,
  children,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <li className="min-w-0">
      <article className="flex h-full gap-4 rounded-[1.5rem] border border-border bg-surface p-5 shadow-soft sm:p-6">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--tsumu-primary-soft)] text-[var(--tsumu-primary)]">
          {icon}
        </span>
        <div className="min-w-0">
          <h3 className="text-[0.95rem] font-semibold text-foreground">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
            {description}
          </p>
          {children}
        </div>
      </article>
    </li>
  );
}

export function TsumuSupport() {
  const { dictionary } = useLocale();
  const copy = dictionary.tsumuPage.support;

  return (
    <Section id="tsumu-support" className="!pt-4 sm:!pt-6">
      <Container>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {copy.title}
          </h2>
          <p className="text-sm text-foreground-muted">{copy.description}</p>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <SupportCard
            icon={<ChatIcon className="h-5 w-5" />}
            title={copy.feedback.title}
            description={copy.feedback.description}
          >
            <Link href={tsumuLinks.support} className={linkClass}>
              {copy.feedback.cta}
            </Link>
          </SupportCard>

          <SupportCard
            icon={<MailIcon className="h-5 w-5" title="" aria-hidden />}
            title={copy.email.title}
            description={copy.email.description}
          >
            <a href={siteContact.mailto} className={`${linkClass} break-all`}>
              {siteContact.email}
            </a>
          </SupportCard>

          <SupportCard
            icon={<ShieldIcon className="h-5 w-5" />}
            title={copy.privacy.title}
            description={copy.privacy.description}
          >
            {tsumuLinks.privacy ? (
              <a
                href={tsumuLinks.privacy}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {copy.privacy.cta}
              </a>
            ) : (
              <p className="mt-4 text-sm text-foreground-subtle">
                {copy.privacy.pending}
              </p>
            )}
          </SupportCard>
        </ul>
      </Container>
    </Section>
  );
}
