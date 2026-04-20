"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  suffix?: string;
  label: string;
  index: number;
};

function Digit({
  value,
  active,
  delay,
}: {
  value: number;
  active: boolean;
  delay: number;
}) {
  return (
    <span className="relative inline-block h-[1em] overflow-hidden align-bottom leading-none">
      <span
        className="flex flex-col"
        style={{
          transform: active ? `translateY(-${value}em)` : "translateY(0)",
          transition: `transform 1900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="block h-[1em] leading-none">
            {i}
          </span>
        ))}
      </span>
    </span>
  );
}

export function HeroStat({ target, suffix = "", label, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  const digits = target.toString().split("").map(Number);
  const entryDelay = index * 130;

  return (
    <div
      ref={ref}
      className="tabular-nums"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 700ms ease-out ${entryDelay}ms, transform 700ms ease-out ${entryDelay}ms`,
      }}
    >
      <div className="flex items-end text-4xl md:text-5xl font-medium tracking-[-0.03em] text-masaf-cream leading-none">
        {digits.map((d, i) => (
          <Digit
            key={`${i}-${target}`}
            value={d}
            active={visible}
            delay={entryDelay + 250 + i * 90}
          />
        ))}
        {suffix && <span>{suffix}</span>}
      </div>
      <div
        className="mt-3 h-px w-full bg-masaf-cream/40 origin-left"
        style={{
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transition: `transform 1500ms cubic-bezier(0.16,1,0.3,1) ${entryDelay + 350}ms`,
        }}
      />
      <div
        className="mt-3 text-sm leading-relaxed text-masaf-cream/80"
        style={{
          opacity: visible ? 1 : 0,
          transition: `opacity 600ms ease-out ${entryDelay + 650}ms`,
        }}
      >
        {label}
      </div>
    </div>
  );
}
