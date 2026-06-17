import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  tone = "tan",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "tan" | "cream" | "red" | "ink";
}) {
  const toneClass =
    tone === "cream"
      ? "text-masaf-cream/70"
      : tone === "red"
      ? "text-masaf-red"
      : tone === "ink"
      ? "text-masaf-ink"
      : "text-masaf-tan";
  return (
    <span
      className={cn(
        "inline-block text-[0.7rem] font-medium uppercase tracking-[0.18em]",
        toneClass,
        className,
      )}
    >
      {children}
    </span>
  );
}
