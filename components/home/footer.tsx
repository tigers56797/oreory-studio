"use client";

import Link from "next/link";
import { LocaleSwitch } from "@/components/navbar/locale-switch";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { LineIcon, MailIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { siteContact } from "@/lib/contact";

const productLinks = [
  { href: "/moss", key: "moss" as const },
  { href: "/kodo", key: "kodo" as const },
  { href: "/tsumu", key: "tsumu" as const },
];

const otherLinks = [
  { href: "/films", key: "films" as const },
  { href: "/#studio", key: "studio" as const },
  { href: "/contact", key: "contact" as const },
];

export function Footer() {
  const { dictionary } = useLocale();

  return (
    <Section as="footer" reveal={false} className="!py-10 border-t border-border sm:!py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
          <div>
            <Link
              href="/"
              className="text-[11px] font-semibold tracking-[0.2em] text-foreground sm:text-[12px]"
            >
              {dictionary.brand}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground-muted">
              {dictionary.footer.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-foreground-subtle">
                {dictionary.products.title}
              </p>
              <ul className="mt-3 space-y-2">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {dictionary.nav[link.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-foreground-subtle">
                {dictionary.footer.navigate}
              </p>
              <ul className="mt-3 space-y-2">
                {otherLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {dictionary.nav[link.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-foreground-subtle">
                {dictionary.footer.contact}
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <a
                  href={siteContact.mailto}
                  aria-label={`Email ${siteContact.email}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#3B82F6]/25 bg-[#3B82F6]/12 text-[#3B82F6] transition-colors hover:bg-[#3B82F6]/18"
                >
                  <MailIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={siteContact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LINE"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#06C755]/25 bg-[#06C755]/12 text-[#06C755] transition-colors hover:bg-[#06C755]/18"
                >
                  <LineIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
              <div className="mt-4">
                <LocaleSwitch />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-5">
          <p className="text-xs tracking-wide text-foreground-subtle">
            {dictionary.footer.rights}
          </p>
        </div>
      </Container>
    </Section>
  );
}
