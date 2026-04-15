import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHero({
  eyebrow,
  heading,
  subheading,
  body,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  body?: string;
}) {
  return (
    <section className="bg-masaf-red text-masaf-cream">
      <Container size="wide" className="py-20 md:py-28">
        {eyebrow && <Eyebrow tone="cream">{eyebrow}</Eyebrow>}
        <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] max-w-4xl">
          {heading}
        </h1>
        {subheading && (
          <p className="mt-6 max-w-2xl text-xl text-masaf-cream/85 leading-relaxed">
            {subheading}
          </p>
        )}
        {body && (
          <p className="mt-6 max-w-2xl text-base text-masaf-cream/75 leading-relaxed">
            {body}
          </p>
        )}
      </Container>
    </section>
  );
}
