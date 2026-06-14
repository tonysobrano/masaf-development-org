"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  baseAlpha: number;
  phase: number; phaseSpeed: number;
  colorIndex: number;
  isHub: boolean;
};

// Warm brand-palette colours
const COLORS = [
  "254,254,254",  // cream
  "220,200,170",  // warm cream-tan
  "168,127,95",   // tan
];
const HUB_COLOR = "254,230,190"; // golden warm for hub/leader nodes

const LINK_DIST = 145;
const LINK_DIST2 = LINK_DIST * LINK_DIST;
const HUB_COUNT = 6;

function buildParticles(w: number, h: number): Particle[] {
  const count = Math.max(60, Math.min(95, Math.floor((w * h) / 7000)));
  return Array.from({ length: count }, (_, i) => {
    const isHub = i < HUB_COUNT;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * (isHub ? 0.10 : 0.24),
      vy: isHub
        ? -(Math.random() * 0.05 + 0.02)
        : -(Math.random() * 0.14 + 0.04),
      r: isHub ? Math.random() * 4 + 5 : Math.random() * 3 + 1.5,
      baseAlpha: isHub ? 0.92 : Math.random() * 0.50 + 0.42,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: Math.random() * 0.016 + 0.004,
      colorIndex: Math.floor(Math.random() * COLORS.length),
      isHub,
    };
  });
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let particles: Particle[] = [];

    const init = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width || canvas.offsetWidth;
      canvas.height = height || canvas.offsetHeight;
      particles = buildParticles(canvas.width, canvas.height);
    };

    init();

    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.phaseSpeed;
        if (p.y < -12) p.y = h + 12;
        if (p.x < -12) p.x = w + 12;
        else if (p.x > w + 12) p.x = -12;
      }

      // Connections drawn beneath particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < LINK_DIST2) {
            const t = 1 - Math.sqrt(dist2) / LINK_DIST;
            const lineAlpha = t * (a.isHub || b.isHub ? 0.55 : 0.38);
            ctx.lineWidth = a.isHub || b.isHub ? 1.6 : 1.0;
            ctx.strokeStyle = `rgba(254,235,200,${lineAlpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Particles with two-layer glow
      for (const p of particles) {
        const alpha = p.baseAlpha * (0.78 + 0.22 * Math.sin(p.phase));
        const color = p.isHub ? HUB_COLOR : COLORS[p.colorIndex];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${(alpha * 0.10).toFixed(3)})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${(alpha * 0.28).toFixed(3)})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${alpha.toFixed(3)})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(init);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      {/* CSS ambient orbs – visible the instant the page loads */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
      {/* Canvas particle-network constellation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}
