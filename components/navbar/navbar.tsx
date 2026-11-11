"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { LocaleSwitch } from "@/components/navbar/locale-switch";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { brandLogos, homeLinks } from "@/lib/content/home";
import { kodoLinks } from "@/lib/content/kodo";
import { mossLinks } from "@/lib/content/moss";
import { tsumuLinks } from "@/lib/content/tsumu";

const productLinks = [
  { id: "moss", href: "/moss" },
  { id: "kodo", href: "/kodo" },
  { id: "tsumu", href: "/tsumu" },
] as const;

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

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6.5 9.5l5.5 5.5 5.5-5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={brandLogos.horizontalRainbow}
      alt="oreory studio"
      width={1700}
      height={304}
      priority
      className={`w-auto object-contain ${className}`}
    />
  );
}

const linkBase =
  "rounded-full px-3.5 py-2 text-[13px] transition-[color,background-color,box-shadow] duration-[var(--duration-fast)]";
const linkIdle =
  "text-foreground-muted hover:bg-foreground/[0.04] hover:text-foreground";
const linkActive = "bg-foreground text-white shadow-soft";

export function Navbar() {
  const { dictionary } = useLocale();
  const pathname = usePathname();
  const isMoss = pathname.startsWith("/moss");
  const isKodo = pathname.startsWith("/kodo");
  const isTsumu = pathname.startsWith("/tsumu");
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const panelId = useId();
  const productsMenuId = useId();
  const productsRef = useRef<HTMLLIElement>(null);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setHidden(false);
    setMenuOpen(false);
    setProductsOpen(false);
  }

  useEffect(() => {
    if (!productsOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!productsRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProductsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [productsOpen]);

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
          setProductsOpen(false);
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

  const products = productLinks.map((product) => ({
    ...product,
    label: dictionary.nav[product.id],
    tagline: dictionary.home.products.items[product.id].tagline,
  }));
  const productsActive = products.some((product) =>
    isActivePath(pathname, product.href),
  );

  const links = [
    { href: homeLinks.films, label: dictionary.nav.films },
    { href: homeLinks.articles, label: dictionary.nav.articles },
    { href: `/${homeLinks.studio}`, label: dictionary.nav.about },
    { href: homeLinks.contact, label: dictionary.nav.partner },
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
  ) : isTsumu && tsumuLinks.app ? (
    <Button
      href={tsumuLinks.app}
      target="_blank"
      rel="noopener noreferrer"
      className="!bg-[var(--tsumu-primary)] !px-4 !py-2 !text-[12px] !text-white hover:!bg-[var(--tsumu-primary-hover)]"
    >
      {dictionary.tsumuPage.hero.primaryCta}
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
            className="pointer-events-auto mx-auto grid h-14 max-w-[72rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl border border-border bg-white/80 px-3 shadow-nav backdrop-blur-xl sm:h-16 sm:gap-3 sm:rounded-[1.25rem] sm:px-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
          >
            <div className="flex min-w-0 items-center gap-1.5 justify-self-start sm:gap-3">
              <button
                type="button"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-border-strong lg:hidden"
                aria-expanded={menuOpen}
                aria-controls={panelId}
                aria-label={menuOpen ? dictionary.nav.menuClose : dictionary.nav.menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <MenuIcon open={menuOpen} />
              </button>

              <Link href="/" className="flex min-w-0 items-center" aria-label="oreory studio">
                <BrandLogo className="h-[20px] sm:h-[24px]" />
              </Link>
            </div>

            <ul className="hidden items-center gap-0.5 justify-self-center lg:flex">
              <li
                ref={productsRef}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={productsOpen}
                  aria-controls={productsMenuId}
                  onClick={() => setProductsOpen(true)}
                  className={`${linkBase} inline-flex items-center gap-1 ${
                    productsActive ? linkActive : linkIdle
                  }`}
                >
                  {dictionary.nav.products}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={productsMenuId}
                  className={`absolute top-full left-1/2 z-10 w-64 -translate-x-1/2 pt-3 transition-[opacity,transform] duration-200 ease-[var(--ease-out)] ${
                    productsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <ul className="rounded-2xl border border-border bg-white/95 p-2 shadow-card backdrop-blur-xl">
                    {products.map((product) => {
                      const active = isActivePath(pathname, product.href);
                      return (
                        <li key={product.id}>
                          <Link
                            href={product.href}
                            aria-current={active ? "page" : undefined}
                            className={`block rounded-xl px-3.5 py-2.5 transition-colors ${
                              active ? "bg-foreground/[0.05]" : "hover:bg-foreground/[0.04]"
                            }`}
                          >
                            <span className="block text-[13px] font-semibold text-foreground">
                              {product.label}
                            </span>
                            <span className="mt-0.5 block text-[12px] text-foreground-subtle">
                              {product.tagline}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>

              {links.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${linkBase} ${active ? linkActive : linkIdle}`}
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
          aria-label={dictionary.nav.menuClose}
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
            <BrandLogo className="h-[20px]" />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:border-border-strong"
              aria-label={dictionary.nav.menuClose}
              onClick={() => setMenuOpen(false)}
            >
              <MenuIcon open />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
            <p className="px-3.5 pb-1 text-[11px] font-semibold tracking-[0.16em] text-foreground-subtle">
              {dictionary.nav.products}
            </p>
            <ul className="space-y-1">
              {products.map((product) => {
                const active = isActivePath(pathname, product.href);
                return (
                  <li key={product.id}>
                    <Link
                      href={product.href}
                      className={[
                        "flex flex-col rounded-xl px-3.5 py-2.5 transition-colors",
                        active
                          ? "bg-foreground text-white"
                          : "text-foreground hover:bg-foreground/[0.03]",
                      ].join(" ")}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text-[15px] font-medium">{product.label}</span>
                      <span
                        className={`text-[12px] ${active ? "text-white/70" : "text-foreground-subtle"}`}
                      >
                        {product.tagline}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="mt-4 space-y-1 border-t border-border pt-4">
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
