"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LocaleSwitch } from "@/components/navbar/locale-switch";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/ui/icons";
import { kodoLinks } from "@/lib/content/kodo";
import { mossLinks } from "@/lib/content/moss";

const navHrefs = {
  moss: "/moss",
  kodo: "/kodo",
  films: "/films",
  contact: "/contact",
} as const;

function getScrollY() {
  return window.scrollY || document.documentElement.scrollTop || 0;
}

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const { dictionary } = useLocale();
  const pathname = usePathname();
  const isMoss = pathname.startsWith("/moss");
  const isKodo = pathname.startsWith("/kodo");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    let lastY = getScrollY();
    let frame = 0;

    const onScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const y = getScrollY();
        const delta = y - lastY;

        if (y <= 48) {
          setHidden(false);
        } else if (delta > 5) {
          setHidden(true);
        } else if (delta < -5) {
          setHidden(false);
        }

        lastY = y;
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const links = [
    { href: navHrefs.moss, label: dictionary.nav.moss },
    { href: navHrefs.kodo, label: dictionary.nav.kodo },
    { href: navHrefs.films, label: dictionary.nav.films },
    { href: navHrefs.contact, label: dictionary.nav.contact },
  ];

  const productCta = isMoss ? (
    <Button
      href={mossLinks.start}
      target="_blank"
      rel="noopener noreferrer"
      className="!bg-[var(--moss-primary)] !px-4 !py-2 !text-[12px] !text-white hover:!bg-[var(--moss-primary-hover)]"
    >
      {dictionary.mossPage.navCta}
    </Button>
  ) : isKodo ? (
    <Button
      href={kodoLinks.start}
      target="_blank"
      rel="noopener noreferrer"
      className="!bg-[var(--kodo-primary)] !px-4 !py-2 !text-[12px] !text-white hover:!bg-[var(--kodo-primary-hover)]"
    >
      {dictionary.kodoPage.navCta}
    </Button>
  ) : null;

  return (
    <header
      className={`site-header pointer-events-none fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4 ${
        hidden ? "is-hidden" : ""
      }`}
    >
      <Container>
        <nav
          aria-label="Primary"
          className="pointer-events-auto mx-auto grid h-14 max-w-[72rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl border border-border bg-white/75 px-3 shadow-nav backdrop-blur-xl sm:h-16 sm:gap-3 sm:rounded-[1.25rem] sm:px-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
        >
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 justify-self-start text-foreground sm:gap-3"
          >
            <BrandMark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" title="Oreory Studio" />
            <span className="truncate text-[11px] font-semibold tracking-[0.16em] sm:text-[12px] sm:tracking-[0.2em]">
              {dictionary.brand}
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 justify-self-center lg:flex">
            {links.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "rounded-lg px-3 py-2 text-[13px] transition-colors duration-[var(--duration-fast)]",
                      active
                        ? "text-foreground"
                        : "text-foreground-muted hover:text-foreground",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center justify-self-end gap-2 sm:gap-3 lg:col-start-3">
            <LocaleSwitch className="shrink-0" />
            {productCta ? (
              <div className="hidden sm:block">{productCta}</div>
            ) : null}
          </div>
        </nav>

        <nav
          aria-label="Sections"
          className="pointer-events-auto mt-2 flex justify-center lg:hidden"
        >
          <ul className="inline-flex max-w-full items-center gap-0.5 overflow-x-auto rounded-2xl border border-border bg-white/75 px-1.5 py-1.5 shadow-soft backdrop-blur-xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {links.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className={[
                      "block rounded-lg px-2.5 py-1 text-[12px] transition-colors sm:px-3",
                      active
                        ? "bg-foreground/[0.05] text-foreground"
                        : "text-foreground-muted hover:text-foreground",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
