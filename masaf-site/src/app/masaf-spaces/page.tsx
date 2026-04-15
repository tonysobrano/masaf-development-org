import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { masafSpaces } from "@/content/site";

export const metadata: Metadata = {
  title: "MASAF Spaces",
  description: masafSpaces.hero.subheading,
};

export default function MasafSpacesPage() {
  return (
    <>
      <PageHero
        eyebrow={masafSpaces.hero.eyebrow}
        heading={masafSpaces.hero.heading}
        subheading={masafSpaces.hero.subheading}
      />

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
                <Image
                  src="/images/community/community-2.jpg"
                  alt="The MASAF Spaces hub in Jigjiga"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl font-medium leading-[1.15] tracking-[-0.025em] text-masaf-red">
                {masafSpaces.overview.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-masaf-ink-muted">
                {masafSpaces.overview.body}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-masaf-tan/15">
        <Container size="wide">
          <div className="max-w-2xl">
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              {masafSpaces.whyItMatters.heading}
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { label: "The problem", body: masafSpaces.whyItMatters.problem },
              { label: "Our response", body: masafSpaces.whyItMatters.solution },
              { label: "The impact", body: masafSpaces.whyItMatters.impact },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-2xl bg-white border border-masaf-ink/10 p-8"
              >
                <Eyebrow tone="tan">{card.label}</Eyebrow>
                <p className="mt-4 text-lg leading-relaxed text-masaf-ink">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="max-w-2xl">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              {masafSpaces.services.heading}
            </h2>
          </div>
          <ol className="mt-14 grid gap-px bg-masaf-ink/10 overflow-hidden rounded-2xl md:grid-cols-2">
            {masafSpaces.services.items.map((svc, i) => (
              <li key={svc.title} className="bg-masaf-cream p-8">
                <span className="text-sm font-medium text-masaf-tan">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-medium tracking-tight text-masaf-red">
                  {svc.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-masaf-ink-muted">
                  {svc.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-masaf-tan text-masaf-cream">
        <Container size="wide">
          <div className="max-w-2xl">
            <Eyebrow tone="cream">Model</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em]">
              {masafSpaces.model.heading}
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-masaf-cream/15 p-10">
              <h3 className="text-2xl font-medium tracking-tight">
                {masafSpaces.model.physical.title}
              </h3>
              <p className="mt-4 leading-relaxed text-masaf-cream/85">
                {masafSpaces.model.physical.description}
              </p>
            </div>
            <div className="rounded-2xl border border-masaf-cream/15 p-10 relative">
              <span className="absolute top-6 right-6 text-[0.65rem] uppercase tracking-[0.18em] rounded-full bg-masaf-red px-3 py-1">
                {masafSpaces.model.digital.status}
              </span>
              <h3 className="text-2xl font-medium tracking-tight">
                {masafSpaces.model.digital.title}
              </h3>
              <p className="mt-4 leading-relaxed text-masaf-cream/85">
                {masafSpaces.model.digital.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Eyebrow>Youth Leadership</Eyebrow>
              <h3 className="mt-4 text-3xl md:text-4xl font-medium leading-[1.15] tracking-[-0.025em] text-masaf-red">
                {masafSpaces.youthLeadership.heading}
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-masaf-ink-muted">
                {masafSpaces.youthLeadership.body}
              </p>
            </div>
            <div>
              <Eyebrow>Vision</Eyebrow>
              <h3 className="mt-4 text-3xl md:text-4xl font-medium leading-[1.15] tracking-[-0.025em] text-masaf-red">
                {masafSpaces.vision.heading}
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-masaf-ink-muted">
                {masafSpaces.vision.body}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-masaf-red text-masaf-cream py-16">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-2xl md:text-3xl font-medium tracking-[-0.025em] leading-tight max-w-2xl">
              Open a MASAF Space in your community, or partner on the digital platform.
            </p>
            <Button href="/get-involved" variant="outline-light" size="lg">
              Partner With Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
