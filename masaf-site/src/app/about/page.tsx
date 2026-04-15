import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/sections/PageHero";
import { about } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: about.hero.body,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        heading={about.hero.heading}
        body={about.hero.body}
      />

      {/* Founding */}
      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/images/community/community-3.jpg"
                  alt="A MASAF Spaces workshop in Jigjiga"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
                {about.founding.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-masaf-ink-muted">
                {about.founding.body}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-masaf-tan text-masaf-cream">
        <Container>
          <div className="text-center">
            <Eyebrow tone="cream">Mission</Eyebrow>
            <p className="mt-6 text-2xl md:text-3xl leading-[1.3] tracking-tight font-light">
              &ldquo;{about.mission.statement}&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* Objectives */}
      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="max-w-2xl">
            <Eyebrow>Strategy</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
                {about.objectives.heading}
              </h2>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {about.objectives.items.map((item, i) => (
              <li
                key={item.title}
                className="rounded-2xl border border-masaf-ink/10 bg-white p-8"
              >
                <span className="text-sm font-medium text-masaf-tan">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-masaf-red">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-masaf-ink-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-masaf-tan/15">
        <Container size="wide">
          <div className="max-w-2xl">
            <Eyebrow>What We Believe</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
                {about.values.heading}
              </h2>
          </div>
          <dl className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {about.values.items.map((value) => (
              <div key={value.title}>
                <dt className="text-xl font-medium tracking-tight text-masaf-red">
                  {value.title}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-masaf-ink-muted">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <Eyebrow>Approach</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
                {about.approach.heading}
              </h2>
            </div>
            <ul className="md:col-span-6 md:col-start-7 space-y-3">
              {about.approach.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-full bg-white border border-masaf-ink/10 px-6 py-4"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-2 w-2 rounded-full bg-masaf-tan shrink-0"
                  />
                  <span className="text-masaf-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 border-t border-masaf-ink/10">
        <Container>
          <div className="text-center">
            <Eyebrow>Team</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
                {about.team.heading}
              </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-masaf-ink-muted">
              {about.team.body}
            </p>
          </div>
          {about.team.members.length > 0 && (
            <div className="mt-14 flex flex-wrap justify-center gap-8">
              {about.team.members.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-masaf-ink/10 bg-white p-8 w-56"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-masaf-tan text-masaf-cream text-lg font-medium">
                    {member.initials}
                  </div>
                  <p className="text-base font-medium text-masaf-red text-center">
                    {member.name}
                  </p>
                  <p className="text-sm text-masaf-ink-muted text-center">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
