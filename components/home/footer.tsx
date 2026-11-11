"use client";

import Image from "next/image";
import Link from "next/link";
import { LocaleSwitch } from "@/components/navbar/locale-switch";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/ui/container";
import { LineIcon, MailIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { siteContact } from "@/lib/contact";
import { brandLogos, homeLinks } from "@/lib/content/home";

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

function FooterLinkList({
  links,
  pendingLabel,
}: {
  links: { label: string; href: string | null; external?: boolean }[];
  pendingLabel: string;
}) {
  return (
    <ul className="mt-4 space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          {link.href ? (
            link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                {link.label}
              </Link>
            )
          ) : (
            <span className="text-sm text-white/35" title={pendingLabel}>
              {link.label}
              <span className="ml-1.5 text-[11px]">· {pendingLabel}</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function DarkFooter() {
  const { dictionary } = useLocale();
  const copy = dictionary.home.footer;

  const columns = [
    {
      title: copy.products,
      links: [
        { label: dictionary.nav.moss, href: "/moss" },
        { label: dictionary.nav.kodo, href: "/kodo" },
        { label: dictionary.nav.tsumu, href: "/tsumu" },
      ],
    },
    {
      title: copy.studio,
      links: [
        { label: copy.about, href: `/${homeLinks.studio}` },
        { label: dictionary.nav.films, href: homeLinks.films },
        { label: copy.articles, href: homeLinks.articles },
        { label: copy.contact, href: homeLinks.contact },
      ],
    },
    {
      title: copy.support,
      links: [
        { label: copy.terms, href: homeLinks.terms },
        { label: copy.privacy, href: homeLinks.privacy },
        { label: copy.donate, href: homeLinks.donate, external: true },
      ],
    },
  ];

  return (
    <footer className="relative isolate mt-6 overflow-hidden rounded-t-[2rem] bg-[#202a36] text-white sm:rounded-t-[2.5rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-20 -z-10 w-[60%] max-w-[520px] opacity-[0.06]"
      >
        <Image
          src={brandLogos.symbol}
          alt=""
          width={380}
          height={235}
          className="h-auto w-full brightness-0 invert"
        />
      </div>

      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] lg:gap-12">
          <div>
            <Link href="/" aria-label="oreory studio" className="inline-flex">
              <Image
                src={brandLogos.horizontal}
                alt="oreory studio"
                width={829}
                height={151}
                className="h-7 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{copy.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[12px] font-semibold tracking-[0.12em] text-white">{column.title}</p>
                <FooterLinkList links={column.links} pendingLabel={copy.pending} />
              </div>
            ))}

            <div>
              <p className="text-[12px] font-semibold tracking-[0.12em] text-white">{copy.social}</p>
              <div className="mt-4 flex items-center gap-2.5">
                <a
                  href={siteContact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LINE"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-white/40 hover:text-white"
                >
                  <LineIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={siteContact.mailto}
                  aria-label={`Email ${siteContact.email}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-white/40 hover:text-white"
                >
                  <MailIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs tracking-wide text-white/45">{copy.rights}</p>
          <LocaleSwitch className="[&_button]:text-white/55 [&_button[aria-pressed=true]]:text-white" />
        </div>
      </Container>
    </footer>
  );
}

export function Footer({ variant = "light" }: { variant?: "light" | "dark" }) {
  if (variant === "dark") return <DarkFooter />;
  return <LightFooter />;
}

function LightFooter() {
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
