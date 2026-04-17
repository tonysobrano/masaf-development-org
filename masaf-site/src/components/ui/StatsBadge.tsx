"use client";

import { useEffect, useState, useRef } from "react";

export function StatsBadge() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const targetCount = 17000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatNumber = (num: number) => {
    return num.toLocaleString() + "+";
  };

  return (
    <div
      ref={ref}
      className="absolute bottom-6 right-6 z-10 hidden lg:flex items-center gap-3 rounded-2xl bg-masaf-cream/95 backdrop-blur-sm shadow-xl border border-white/20 px-5 py-4"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-masaf-red/10">
        <svg className="h-5 w-5 text-masaf-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <div>
        <p className="text-2xl font-medium tracking-[-0.03em] text-masaf-red">
          {formatNumber(count)}
        </p>
        <p className="text-xs text-masaf-ink-muted">Youth engaged</p>
      </div>
    </div>
  );
}
