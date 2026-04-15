import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeaturedPreview } from "@/components/ui/FeaturedPreview";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";
import { home } from "@/content/site";

export const metadata: Metadata = {
  title: "Masaf Development Organization — Empowering Youth, Expanding Opportunity",
  description: home.hero.identity,
  openGraph: {
    title: home.hero.tagline,
    description: home.hero.identity,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <MissionSection />
      <WhyMasafSection />
      <ImpactSection />
      <MasafSpacesCallout />
      <ProgrammaticFocus />
      <PartnerSection />
      <ClosingBanner />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-masaf-red text-masaf-cream">
      <div className="absolute inset-0">
          <Image
            src="/images/banners/hero.svg"
            alt="Young people gathered at a MASAF Spaces event in Jigjiga"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-masaf-tan/60 via-masaf-tan/75 to-masaf-tan" />
      </div>

      <Container size="wide" className="relative py-24 md:py-36 lg:py-44">
        <div className="max-w-4xl">
          <Eyebrow tone="cream">Masaf Development Organization</Eyebrow>
          <h1 className="mt-6 font-medium leading-[1.05] tracking-[-0.03em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {home.hero.tagline}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-masaf-cream/85 leading-relaxed">
            {home.hero.subTaglines[0]}
          </p>
          <p className="mt-6 max-w-2xl text-base text-masaf-cream/75 leading-relaxed">
            {home.hero.identity}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={home.hero.primaryCta.href} size="lg">
              {home.hero.primaryCta.label}
            </Button>
            <Button
              href={home.hero.secondaryCta.href}
              size="lg"
              variant="outline-light"
            >
              {home.hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <FeaturedPreview />
      </Container>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <Eyebrow>{home.whoWeAre.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              {home.whoWeAre.heading}
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-masaf-ink-muted">
              {home.whoWeAre.body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-16 md:py-24 border-y border-masaf-ink/10">
      <Container>
        <div className="text-center">
          <Eyebrow tone="tan">{home.mission.eyebrow}</Eyebrow>
          <p className="mt-6 text-2xl md:text-3xl leading-[1.3] tracking-tight text-masaf-ink font-light">
            &ldquo;{home.mission.statement}&rdquo;
          </p>
        </div>
      </Container>
    </section>
  );
}

function WhyMasafSection() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <div className="max-w-2xl">
          <Eyebrow>{home.whyMasaf.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              {home.whyMasaf.heading}
            </h2>
        </div>
        <ol className="mt-14 grid gap-px bg-masaf-ink/10 overflow-hidden rounded-2xl md:grid-cols-2 lg:grid-cols-5">
          {home.whyMasaf.points.map((point, i) => (
            <li key={point.title} className="bg-masaf-cream p-8 flex flex-col">
              <span className="text-sm font-medium text-masaf-tan">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-masaf-red">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-masaf-ink-muted">
                {point.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="py-20 md:py-28 bg-masaf-tan/15">
      <Container size="wide">
        <div className="max-w-2xl">
          <Eyebrow>{home.impact.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              {home.impact.heading}
            </h2>
        </div>
        <dl className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {home.impact.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-5xl md:text-6xl font-medium tracking-[-0.03em] text-masaf-red">
                {stat.value}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-masaf-ink">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function MasafSpacesCallout() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <div className="grid gap-10 md:grid-cols-12 md:items-stretch overflow-hidden rounded-3xl bg-masaf-tan text-masaf-cream">
          <YouTubePlayer
            videoId="hwl3WM6fOI0"
            className="md:col-span-5 min-h-72 md:min-h-[28rem]"
          />
          <div className="md:col-span-7 p-8 md:p-14 flex flex-col justify-center">
            <Eyebrow tone="cream">{home.masafSpacesCallout.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-[-0.025em] leading-[1.1]">
              {home.masafSpacesCallout.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-masaf-cream/85">
              {home.masafSpacesCallout.body}
            </p>
            <div className="mt-8">
              <Button
                href={home.masafSpacesCallout.cta.href}
                variant="outline-light"
              >
                {home.masafSpacesCallout.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProgrammaticFocus() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <div className="flex flex-wrap items-end justify-between gap-6 max-w-5xl">
          <div>
            <Eyebrow>{home.programmaticFocus.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              {home.programmaticFocus.heading}
            </h2>
          </div>
          <Button
            href={home.programmaticFocus.cta.href}
            variant="ghost"
            size="sm"
          >
            {home.programmaticFocus.cta.label}
          </Button>
        </div>
        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {home.programmaticFocus.areas.map((area, i) => (
            <li
              key={area}
              className="group flex items-start gap-4 rounded-2xl border border-masaf-ink/10 bg-masaf-cream/50 p-6 transition-colors hover:border-masaf-red/40 hover:bg-white"
            >
              <span className="text-sm font-medium text-masaf-tan mt-1">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <span className="text-lg leading-snug tracking-tight text-masaf-ink">
                {area}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function PartnerSection() {
  return (
    <section className="py-20 md:py-28 bg-masaf-cream border-t border-masaf-ink/10">
      <Container size="wide">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <Eyebrow tone="tan">{home.partnerSection.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.025em] text-masaf-red">
              {home.partnerSection.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-masaf-ink-muted">
              {home.partnerSection.body}
            </p>
            <div className="mt-8">
              <Button href={home.partnerSection.cta.href} size="lg">
                {home.partnerSection.cta.label}
              </Button>
            </div>
          </div>
          <ul className="md:col-span-6 md:col-start-7 space-y-3">
            {home.partnerSection.partnershipTypes.map((t) => (
              <li
                key={t}
                className="flex items-center gap-4 rounded-full bg-white px-6 py-4 text-masaf-ink border border-masaf-ink/10"
              >
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 rounded-full bg-masaf-tan shrink-0"
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function ClosingBanner() {
  return (
    <section className="bg-masaf-red text-masaf-cream py-16">
      <Container>
        <p className="text-center text-3xl md:text-4xl font-medium tracking-[-0.025em] leading-tight">
          {home.closing.line}
        </p>
      </Container>
    </section>
  );
}
