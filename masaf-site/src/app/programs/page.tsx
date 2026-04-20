import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { programs } from "@/content/site";

export const metadata: Metadata = {
  title: "Programs",
  description: programs.hero.body,
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow={programs.hero.eyebrow}
        heading={programs.hero.heading}
        body={programs.hero.body}
      />

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5 relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/gallery/gallery-3.jpg"
                alt="MASAF program participants in training"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
                {programs.overview.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-masaf-ink-muted">
                {programs.overview.body}
              </p>
              <p className="mt-4 text-base leading-relaxed text-masaf-ink-muted">
                {programs.hero.bodyExtended}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-masaf-tan/15">
        <Container size="wide">
          <div className="max-w-3xl">
            <Eyebrow>Thematic Focus Areas</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              Nine integrated programs addressing the real barriers facing youth
              and communities.
            </h2>
          </div>
          <ol className="mt-14 space-y-6">
            {programs.items.map((p) => (
              <li
                key={p.number}
                className="rounded-2xl border border-masaf-ink/10 bg-white p-8 md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <span className="text-sm font-medium text-masaf-tan">
                      {p.number}
                    </span>
                    <h3 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight text-masaf-red leading-snug">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-8 space-y-5">
                    <p className="text-base leading-relaxed text-masaf-ink">
                      {p.description}
                    </p>
                    <div className="rounded-xl bg-masaf-tan/10 border border-masaf-tan/30 p-5">
                      <p className="text-xs uppercase tracking-[0.14em] text-masaf-tan font-medium">
                        Why we do this
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-masaf-ink-muted">
                        {p.why}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-masaf-ink-muted font-medium">
                        Objectives
                      </p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {p.objectives.map((o) => (
                          <li
                            key={o}
                            className="flex items-start gap-3 text-sm text-masaf-ink"
                          >
                            <span
                              aria-hidden
                              className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-masaf-tan shrink-0"
                            />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="max-w-3xl">
            <Eyebrow>Delivery</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              {programs.deliveryModel.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-masaf-ink-muted">
              {programs.deliveryModel.body}
            </p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {programs.deliveryModel.channels.map((c, i) => (
              <li
                key={c.title}
                className="rounded-2xl border border-masaf-ink/10 bg-white p-8"
              >
                <span className="text-sm font-medium text-masaf-tan">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-medium tracking-tight text-masaf-red">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-masaf-ink-muted">
                  {c.description}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-masaf-ink-muted">
            {programs.deliveryModel.note}
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-masaf-tan/15 border-t border-masaf-ink/10">
        <Container>
          <div className="flex flex-col items-center text-center gap-6">
            <Eyebrow tone="tan">Video Testimonials</Eyebrow>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-masaf-ink-muted">
              Video testimonials from participants, beneficiaries, and
              collaborators will appear here as they come in.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-masaf-cream border-t border-masaf-ink/10">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <Eyebrow tone="tan">Partner</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
                {programs.partner.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-masaf-ink-muted">
                {programs.partner.body}
              </p>
              <p className="mt-6 text-base font-medium text-masaf-ink">
                {programs.partner.intro}
              </p>
              <div className="mt-8">
                <Button href={programs.partner.cta.href} size="lg">
                  {programs.partner.cta.label}
                </Button>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-masaf-ink-muted">
                {programs.partner.note}
              </p>
            </div>
            <ul className="md:col-span-6 md:col-start-7 space-y-3">
              {programs.partner.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-4 rounded-full bg-white px-6 py-4 text-masaf-ink border border-masaf-ink/10"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-2 w-2 rounded-full bg-masaf-tan shrink-0"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-masaf-red text-masaf-cream py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="cream">Join</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-medium tracking-[-0.025em] leading-[1.1]">
              {programs.join.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-masaf-cream/85">
              {programs.join.body}
            </p>
            <div className="mt-10">
              <Button
                href={programs.join.cta.href}
                variant="outline-light"
                size="lg"
              >
                {programs.join.cta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
