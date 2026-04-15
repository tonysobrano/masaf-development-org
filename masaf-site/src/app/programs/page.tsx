import type { Metadata } from "next";
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
          <div className="max-w-2xl">
            <Eyebrow>Focus Areas</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              {programs.thematicAreas.heading}
            </h2>
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
