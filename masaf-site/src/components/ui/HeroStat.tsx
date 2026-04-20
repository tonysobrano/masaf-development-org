"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  target: number;
  suffix?: string;
  label: string;
  icon: ReactNode;
  index: number;
};

export function HeroStat({ target, suffix = "", label, icon, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const startDelay = index * 140 + 200;
    const durationMs = 1800;
    let frame = 0;
    let startTime = 0;
    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime - startDelay;
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(1, elapsed / durationMs);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, target, index]);

  const entryDelay = index * 140;

  return (
    <div
      ref={ref}
      className="flex items-start gap-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 700ms ease-out ${entryDelay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${entryDelay}ms`,
      }}
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-masaf-cream/10 text-masaf-cream ring-1 ring-masaf-cream/20"
        style={{
          transform: visible ? "scale(1)" : "scale(0.6)",
          transition: `transform 700ms cubic-bezier(0.34,1.56,0.64,1) ${entryDelay + 100}ms`,
        }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-3xl md:text-4xl font-medium tracking-[-0.03em] text-masaf-cream tabular-nums leading-none">
          {value.toLocaleString()}
          {suffix}
        </div>
        <div className="mt-2 text-sm leading-snug text-masaf-cream/80">
          {label}
        </div>
      </div>
    </div>
  );
}

export function IconUsers() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M17 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconActivity() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="m12 3 2.4 6.4L21 12l-6.6 2.6L12 21l-2.4-6.4L3 12l6.6-2.6Z" />
    </svg>
  );
}

export function IconMapPin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconHandshake() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="m11 17 2 2a1 1 0 0 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 0 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 0 1-1.41 0l-2.62-2.62a1 1 0 0 0-1.41 0L3 10.5" />
      <path d="m7.5 17 2 2a1 1 0 0 0 3-3l-2.5-2.5" />
      <path d="M21 13 14 6l-2 2" />
    </svg>
  );
}

export function IconBuilding() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 7h.01M9 11h.01M15 7h.01M15 11h.01" />
    </svg>
  );
}
