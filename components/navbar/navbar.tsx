"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden
    >
      {open ? (
        <path
          d="M6.5 6.5l11 11M17.5 6.5l-11 11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M5 8h14M5 12h14M5 16h14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function Navbar() {
  const { dictionary } = useLocale();
  const pathname = usePathname();
  const isMoss = pathname.startsWith("/moss");
  const isKodo = pathname.startsWith("/kodo");
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setHidden(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    let lastY = getScrollY();
    let frame = 0;

    const onScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        if (menuOpen) {
          setHidden(false);
          frame = 0;
          return;
        }

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
  }, [menuOpen]);

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
    <>
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
            <div className="flex min-w-0 items-center gap-1.5 justify-self-start sm:gap-3">
              <button
                type="button"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-border-strong lg:hidden"
                aria-expanded={menuOpen}
                aria-controls={panelId}
                aria-label={menuOpen ? "關閉選單" : "開啟選單"}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <MenuIcon open={menuOpen} />
              </button>

              <Link
                href="/"
                className="flex min-w-0 items-center gap-2.5 text-foreground sm:gap-3"
              >
                <BrandMark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" title="Oreory Studio" />
                <span className="truncate text-[11px] font-semibold tracking-[0.16em] sm:text-[12px] sm:tracking-[0.2em]">
                  {dictionary.brand}
                </span>
              </Link>
            </div>

            <ul className="hidden items-center gap-0.5 justify-self-center lg:flex">
              {links.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        "rounded-full px-3.5 py-2 text-[13px] transition-[color,background-color,box-shadow] duration-[var(--duration-fast)]",
                        active
                          ? "bg-foreground text-white shadow-soft"
                          : "text-foreground-muted hover:bg-foreground/[0.04] hover:text-foreground",
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
        </Container>
      </header>

      {/* Mobile left sidebar */}
      <div
        className={[
          "fixed inset-0 z-[60] lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={[
            "absolute inset-0 bg-foreground/25 backdrop-blur-[2px] transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-label="關閉選單"
          onClick={() => setMenuOpen(false)}
        />

        <aside
          id={panelId}
          className={[
            "absolute inset-y-0 left-0 flex w-[min(82vw,18.5rem)] flex-col border-r border-border bg-white/95 shadow-nav backdrop-blur-xl transition-transform duration-300 ease-[var(--ease-out)]",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-4">
            <div className="flex min-w-0 items-center gap-2.5">
              <BrandMark className="h-7 w-7 shrink-0" title="Oreory Studio" />
              <span className="truncate text-[11px] font-semibold tracking-[0.16em]">
                {dictionary.brand}
              </span>
            </div>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:border-border-strong"
              aria-label="關閉選單"
              onClick={() => setMenuOpen(false)}
            >
              <MenuIcon open />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 px-3 py-4">
            <ul className="space-y-1">
              {links.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        "flex items-center rounded-xl px-3.5 py-3 text-[15px] font-medium transition-colors",
                        active
                          ? "bg-foreground text-white"
                          : "text-foreground-muted hover:bg-foreground/[0.03] hover:text-foreground",
                      ].join(" ")}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {productCta ? (
            <div className="border-t border-border px-4 py-4">{productCta}</div>
          ) : null}
        </aside>
      </div>
    </>
  );
}
