// Pure CSS/SVG animated background — no canvas, no hydration flash.
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated gradient blobs — large, high-opacity, clearly visible */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      <div className="hero-blob hero-blob-4" />

      {/* Bold diagonal shape — creates compositional depth */}
      <div className="hero-diagonal" />

      {/* Expanding ring pulse — focal point bottom-right */}
      <div className="hero-rings-origin">
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-ring hero-ring-3" />
        <div className="hero-focal-dot" />
      </div>
    </div>
  );
}
