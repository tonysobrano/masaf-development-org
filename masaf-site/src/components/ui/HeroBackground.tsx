"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  baseAlpha: number;
  phase: number; phaseSpeed: number;
  colorIndex: number;
};

const COLORS = [
  "254,254,254",  // cream
  "220,200,170",  // warm cream-tan
  "168,127,95",   // tan
];

const LINK_DIST = 130;
const LINK_DIST2 = LINK_DIST * LINK_DIST;

function buildParticles(w: number, h: number): Particle[] {
  const count = Math.max(22, Math.min(38, Math.floor((w * h) / 22000)));
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.20,
    vy: -(Math.random() * 0.10 + 0.03),
    r: Math.random() * 1.2 + 0.8,
    baseAlpha: Math.random() * 0.30 + 0.35,
    phase: Math.random() * Math.PI * 2,
    phaseSpeed: Math.random() * 0.014 + 0.004,
    colorIndex: Math.floor(Math.random() * COLORS.length),
  }));
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

      // Connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < LINK_DIST2) {
            const t = 1 - Math.sqrt(dist2) / LINK_DIST;
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = `rgba(254,235,200,${(t * 0.30).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Clean dots — no glow
      for (const p of particles) {
        const alpha = p.baseAlpha * (0.80 + 0.20 * Math.sin(p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLORS[p.colorIndex]},${alpha.toFixed(3)})`;
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}
