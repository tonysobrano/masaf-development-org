import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  mission: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Hero({
  eyebrow,
  headline,
  mission,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="bg-masaf-cream">
      <Container size="wide" className="py-20 md:py-28 lg:py-32">
        {eyebrow && (
          <Eyebrow tone="red" className="mb-4">
            {eyebrow}
          </Eyebrow>
        )}
        <h1 className="text-masaf-ink text-display-xl leading-[1.05] tracking-[-0.03em] font-medium max-w-4xl">
          {headline}
        </h1>
        <p className="text-masaf-ink/80 mt-6 max-w-2xl text-lg md:text-xl leading-relaxed">
          {mission}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          {primaryCta && (
            <Button variant="primary" size="lg" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button variant="secondary" size="lg" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
