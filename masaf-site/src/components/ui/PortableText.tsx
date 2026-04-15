import { PortableText as PT } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-10 text-3xl font-medium tracking-[-0.025em] leading-[1.15] text-masaf-red">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-8 text-2xl font-medium tracking-tight text-masaf-red">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mt-6 text-xl font-medium tracking-tight text-masaf-red">
        {children}
      </h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mt-4 text-lg leading-relaxed text-masaf-ink">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="mt-6 border-l-4 border-masaf-red pl-6 italic text-masaf-ink-muted">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mt-4 space-y-2 list-disc pl-6 text-masaf-ink">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mt-4 space-y-2 list-decimal pl-6 text-masaf-ink">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-masaf-red">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em>{children}</em>
    ),
    link: ({
      children,
      value,
    }: {
      children?: React.ReactNode;
      value?: { href?: string };
    }) => (
      <a
        href={value?.href}
        className="text-masaf-red underline hover:text-masaf-red-dark transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export function PortableText({ value }: { value: PortableTextBlock[] }) {
  if (!value) return null;
  return (
    <div className="max-w-none">
      <PT value={value} components={components} />
    </div>
  );
}
