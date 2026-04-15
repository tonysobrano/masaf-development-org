"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { nav, siteSettings } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // In studio, hide marketing chrome
  if (pathname?.startsWith("/studio")) return null;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled
          ? "border-masaf-ink/10 bg-masaf-cream/90 backdrop-blur"
          : "border-transparent bg-masaf-cream",
      )}
    >
      <Container size="wide" className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteSettings.name} — home`}
        >
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="text-base font-medium tracking-tight text-masaf-red">
              MASAF
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-masaf-ink-muted">
              Development Organization
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  active
                    ? "text-masaf-ink"
                    : "text-masaf-ink hover:text-masaf-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/get-involved" size="sm">
            Partner With Us
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2 text-masaf-ink"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-masaf-ink/10 bg-masaf-cream">
          <Container size="wide" className="py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg text-masaf-ink hover:text-masaf-ink"
              >
                {item.label}
              </Link>
            ))}
<Button href="/get-involved" className="w-full mt-2">
                Partner With Us
              </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
