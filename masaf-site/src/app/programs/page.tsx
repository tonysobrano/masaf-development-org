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
              <Eyebrow>Focus Areas</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
                {programs.thematicAreas.heading}
              </h2>
            </div>
          </div>
          <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {programs.thematicAreas.items.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-5 rounded-2xl border border-masaf-ink/10 bg-white p-6"
              >
                <span className="text-sm font-medium text-masaf-tan mt-1">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-lg leading-snug tracking-tight text-masaf-ink">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-masaf-tan/15">
        <Container size="wide">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery/gallery-11.jpg"
                alt="Skills training workshop"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery/gallery-17.jpg"
                alt="Community gathering"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery/gallery-5.jpg"
                alt="Youth engagement"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-masaf-tan/15 border-t border-masaf-ink/10">
        <Container>
          <div className="flex flex-col items-center text-center gap-6">
            <p className="text-2xl md:text-3xl font-medium tracking-[-0.025em] leading-tight max-w-3xl text-masaf-red">
              Program detail pages are in progress. Reach out if you&rsquo;d like
              to fund, co-design, or collaborate on a specific program.
            </p>
            <Button href="/get-involved#contact-form">Talk to the team</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
