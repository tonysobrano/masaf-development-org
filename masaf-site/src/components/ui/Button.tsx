import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type AsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
  };

type ButtonProps = AsLink | AsButton;

const base =
  "inline-flex items-center justify-center rounded-full font-medium uppercase tracking-[0.08em] transition-colors duration-150 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-masaf-red text-masaf-cream hover:bg-masaf-red-dark focus-visible:outline-masaf-red",
  secondary:
    "bg-masaf-tan text-masaf-cream hover:bg-masaf-tan/80 focus-visible:outline-masaf-ink",
  ghost:
    "bg-transparent text-masaf-ink hover:bg-masaf-ink/10 border border-masaf-ink/20",
  "outline-light":
    "bg-transparent text-masaf-cream border border-masaf-cream/40 hover:bg-masaf-cream/10",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[0.7rem]",
  md: "px-6 py-3 text-[0.75rem]",
  lg: "px-8 py-4 text-[0.8rem]",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } = props as AsButton & { href?: string };
  void _v; void _s; void _c; void _ch; void _h;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
