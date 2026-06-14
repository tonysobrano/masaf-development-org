"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseAlpha: number;
  phase: number;
  phaseSpeed: number;
  colorIndex: number;
};

// Brand-palette colours (RGB for fast string building)
const COLORS = [
  "254,254,254", // cream
  "168,127,95",  // tan
  "220,190,155", // warm cream-tan
];

const LINK_DIST = 115;

function buildParticles(w: number, h: number): Particle[] {
  const count = Math.max(35, Math.min(65, Math.floor((w * h) / 9000)));
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.22,
    vy: -(Math.random() * 0.12 + 0.04), // gentle upward drift – youth rising
    r: Math.random() * 1.8 + 0.5,
    baseAlpha: Math.random() * 0.45 + 0.12,
    phase: Math.random() * Math.PI * 2,
    phaseSpeed: Math.random() * 0.018 + 0.004,
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
        if (p.y < -4) p.y = h + 4;
        if (p.x < -4) p.x = w + 4;
        else if (p.x > w + 4) p.x = -4;
      }

      // Connections beneath particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(dist2) / LINK_DIST) * 0.14;
            ctx.strokeStyle = `rgba(254,254,254,${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Particles
      for (const p of particles) {
        const alpha = p.baseAlpha * (0.65 + 0.35 * Math.sin(p.phase));
        ctx.fillStyle = `rgba(${COLORS[p.colorIndex]},${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
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
      {/* CSS ambient orbs – render immediately, no JS dependency */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
      {/* Canvas particle network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}
