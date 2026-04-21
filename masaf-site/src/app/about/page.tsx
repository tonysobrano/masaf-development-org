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

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/gallery-21.jpg"
                  alt="Community gathering at MASAF"
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

      <section className="py-16 md:py-24 bg-masaf-tan text-masaf-cream">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="cream">What We Do</Eyebrow>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-masaf-cream/90">
              {about.whatWeDo.body}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 border-y border-masaf-ink/10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="tan">Mission Statement</Eyebrow>
            <p className="mt-6 text-2xl md:text-3xl leading-[1.3] tracking-tight text-masaf-ink font-light">
              &ldquo;{about.mission.statement}&rdquo;
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-masaf-ink-muted">
              {about.mission.extended}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5 md:sticky md:top-24 md:self-start">
              <Eyebrow>Strategy</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
                {about.objectives.heading}
              </h2>
            </div>
            <ol className="md:col-span-6 md:col-start-7 grid gap-6 md:grid-cols-1">
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
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-masaf-tan/15">
        <Container size="wide">
          <div className="grid gap-6 md:grid-cols-3 mb-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery/gallery-1.jpg"
                alt="MASAF community engagement"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery/gallery-19.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery/gallery-20.jpg"
                alt="Youth programs"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
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

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5 relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/gallery/gallery-22.jpg"
                alt="MASAF community outreach in action"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Eyebrow>Approach</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
                {about.approach.heading}
              </h2>
              <ul className="mt-8 space-y-3">
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
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-t border-masaf-ink/10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Governance</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              {about.governance.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-masaf-ink-muted">
              {about.governance.body}
            </p>
          </div>
        </Container>
      </section>

      <TeamSection
        eyebrow="Executive Team"
        heading={about.executiveTeam.heading}
        body={about.executiveTeam.body}
        members={about.executiveTeam.members}
      />

      <TeamSection
        eyebrow="Board of Directors"
        heading={about.boardOfDirectors.heading}
        body={about.boardOfDirectors.body}
        members={about.boardOfDirectors.members}
        tone="alt"
      />
    </>
  );
}

type TeamMember = {
  name: string;
  role: string;
  image?: string;
  bio?: string;
};

function TeamSection({
  eyebrow,
  heading,
  body,
  members,
  tone,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  members: TeamMember[];
  tone?: "alt";
}) {
  const toneClass = tone === "alt" ? "bg-masaf-tan/15" : "";
  return (
    <section className={`py-20 md:py-28 border-t border-masaf-ink/10 ${toneClass}`}>
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
            {heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-masaf-ink-muted">
            {body}
          </p>
        </div>
        {members.length > 0 ? (
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {members.map((member) => (
              <li
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <div className="relative aspect-[4/5] w-full max-w-[180px] overflow-hidden rounded-2xl bg-masaf-tan/20">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="180px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-masaf-ink-muted text-xs uppercase tracking-[0.12em]">
                      Photo coming soon
                    </div>
                  )}
                </div>
                <p className="mt-4 text-base font-medium text-masaf-red">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-masaf-ink-muted">
                  {member.role}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-center text-sm uppercase tracking-[0.12em] text-masaf-ink-muted">
            Details coming soon
          </p>
        )}
      </Container>
    </section>
  );
}
