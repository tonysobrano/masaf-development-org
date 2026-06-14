import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { news, resources, siteSettings } from "@/content/site";
import { FacebookPageEmbed } from "@/components/ui/FacebookPageEmbed";

export const metadata: Metadata = {
  title: "News & Media",
  description: "Stories, events, and media from across the MASAF community.",
};

const galleryImages = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
  "/images/gallery/gallery-7.jpg",
  "/images/gallery/gallery-8.jpg",
  "/images/gallery/gallery-9.jpg",
  "/images/gallery/gallery-10.jpg",
  "/images/gallery/gallery-11.jpg",
  "/images/gallery/gallery-12.jpg",
  "/images/gallery/gallery-16.jpg",
  "/images/gallery/gallery-17.jpg",
  "/images/gallery/gallery-18.jpg",
  "/images/gallery/gallery-19.jpg",
  "/images/gallery/gallery-20.jpg",
  "/images/gallery/gallery-21.jpg",
  "/images/gallery/gallery-22.jpg",
  "/images/gallery/gallery-23.jpg",
  "/images/gallery/gallery-24.jpg",
];

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow={news.hero.eyebrow} heading={news.hero.heading} />

      <nav className="sticky top-[73px] z-30 border-b border-masaf-ink/10 bg-masaf-cream/90 backdrop-blur">
        <Container size="wide" className="flex gap-6 overflow-x-auto py-4 text-sm">
          {news.sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap text-masaf-ink-muted hover:text-masaf-red"
            >
              {s.label}
            </a>
          ))}
        </Container>
      </nav>

      {/* 1. News & Updates */}
      <section id="news" className="py-20 md:py-24">
        <Container size="wide">
          <Eyebrow>News & Updates</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.025em] text-masaf-red">
            Latest from MASAF
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {news.posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-masaf-ink/10 bg-white p-8 flex flex-col"
              >
                <time className="text-xs uppercase tracking-[0.18em] text-masaf-ink-muted">
                  {formatDate(post.publishedAt)}
                </time>
                <h3 className="mt-3 text-xl md:text-2xl font-medium tracking-tight text-masaf-red leading-snug">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-masaf-ink-muted flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href={`/news/${post.slug}`}
                  className="mt-6 text-sm font-medium uppercase tracking-[0.08em] text-masaf-red hover:text-masaf-red-dark self-start"
                >
                  Read story →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Facebook Embed */}
      <section id="facebook" className="py-20 md:py-24 bg-masaf-tan/15">
        <Container size="wide">
          <Eyebrow>Live on Facebook</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.025em] text-masaf-red">
            Upcoming events &amp; latest updates
          </h2>
          <p className="mt-3 text-sm text-masaf-ink-muted">
            Browse our events directly from Facebook — no need to leave this page.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-masaf-ink/10 bg-white min-h-[520px] flex items-start justify-center">
            <FacebookPageEmbed
              href={siteSettings.socials.facebook}
              tabs="events,timeline"
              height={500}
            />
          </div>
        </Container>
      </section>

      {/* 3. Events */}
      <section id="events" className="py-20 md:py-24">
        <Container size="wide">
          <Eyebrow>Events</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.025em] text-masaf-red">
            Gatherings and convenings
          </h2>
          <div className="mt-10 grid gap-6">
            {news.events.map((ev) => (
              <article
                key={ev.slug}
                className="rounded-2xl border border-masaf-ink/10 bg-white p-8 md:flex md:items-start md:gap-8"
              >
                <div className="md:w-48 shrink-0">
                  <time className="text-xs uppercase tracking-[0.18em] text-masaf-ink">
                    {formatDate(ev.date)}
                  </time>
                  <p className="mt-2 text-sm text-masaf-ink-muted">
                    {ev.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-masaf-red leading-snug">
                    {ev.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-masaf-ink-muted">
                    {ev.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Resources */}
      <section id="resources" className="py-20 md:py-24 bg-masaf-tan/15">
        <Container size="wide">
          <Eyebrow>Resources</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.025em] text-masaf-red">
            Documents, reports, and guides
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-masaf-ink-muted leading-relaxed">
            We share what we learn so practitioners, partners, and policymakers can move faster. New resources are added as programs produce them.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {resources.categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-masaf-ink/10 bg-white p-8 flex flex-col"
              >
                <h3 className="text-xl font-medium tracking-tight text-masaf-red">
                  {cat.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-masaf-ink-muted">
                  {cat.description}
                </p>
                {"files" in cat && cat.files && cat.files.length > 0 ? (
                  <ul className="mt-6 flex flex-col gap-3">
                    {cat.files.map((file) => (
                      <li key={file.name} className="flex flex-col gap-1.5">
                        <span className="text-sm font-medium text-masaf-ink">
                          {file.name}
                        </span>
                        <div className="flex gap-3">
                          <a
                            href={file.viewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-masaf-red px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-white hover:bg-masaf-red/90 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" aria-hidden="true">
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                              <path fillRule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.38 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
                            </svg>
                            View PDF
                          </a>
                          <a
                            href={file.downloadUrl}
                            download
                            className="inline-flex items-center gap-1.5 rounded-full border border-masaf-ink/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-masaf-ink hover:border-masaf-red hover:text-masaf-red transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" aria-hidden="true">
                              <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                              <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                            </svg>
                            Download
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 inline-block self-start rounded-full bg-masaf-tan/20 px-4 py-2 text-xs uppercase tracking-[0.12em] text-masaf-ink-muted">
                    {"status" in cat ? cat.status : "In preparation."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Opportunities */}
      <section id="opportunities" className="py-20 md:py-24">
        <Container size="wide">
          <Eyebrow>Opportunities</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.025em] text-masaf-red">
            Jobs, internships, and program calls
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-masaf-ink-muted leading-relaxed">
            Open positions, internships, youth opportunities, and calls for
            program participants are listed here as they are published.
          </p>
          {news.opportunities.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {news.opportunities.map((opp) => (
                <article
                  key={opp.slug}
                  className="rounded-2xl border border-masaf-ink/10 bg-white p-8 flex flex-col"
                >
                  <span className="inline-flex self-start items-center rounded-full bg-masaf-red/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-masaf-red">
                    {opp.type}
                  </span>
                  <h3 className="mt-3 text-xl font-medium tracking-tight text-masaf-red leading-snug">
                    {opp.title}
                  </h3>
                  {opp.location && (
                    <p className="mt-2 text-sm text-masaf-ink-muted">
                      {opp.location}
                    </p>
                  )}
                  {opp.excerpt && (
                    <p className="mt-4 text-sm leading-relaxed text-masaf-ink-muted flex-1">
                      {opp.excerpt}
                    </p>
                  )}
                  {opp.deadline && (
                    <p className="mt-4 text-xs uppercase tracking-[0.12em] text-masaf-ink-muted">
                      Deadline: {formatDate(opp.deadline)}
                    </p>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm uppercase tracking-[0.12em] text-masaf-ink-muted">
              No open opportunities right now. Check back soon.
            </p>
          )}
        </Container>
      </section>

      {/* 6. Media Gallery */}
      <section id="gallery" className="py-20 md:py-24 bg-masaf-tan text-masaf-cream">
        <Container size="wide">
          <Eyebrow tone="cream">Media Gallery</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.025em]">
            Moments from MASAF Spaces
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`MASAF community image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Success Stories */}
      <section id="stories" className="py-20 md:py-24">
        <Container>
          <Eyebrow>Success Stories</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.025em] text-masaf-red">
            In the words of our community
          </h2>
          <p className="mt-6 text-lg text-masaf-ink-muted leading-relaxed">
            We&rsquo;re gathering stories from program alumni, mentors, and
            partners. Check back soon — or{" "}
            <Link className="text-masaf-red hover:underline" href="/get-involved#contact-form">
              share yours
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-masaf-tan/15 border-t border-masaf-ink/10">
        <Container>
          <div className="flex flex-col items-center text-center gap-6">
            <Eyebrow tone="tan">Looking for something specific?</Eyebrow>
            <p className="text-2xl md:text-3xl font-medium tracking-[-0.025em] leading-tight max-w-2xl text-masaf-red">
              Press, research, and partner inquiries receive priority access to
              documents in progress.
            </p>
            <Button href="/get-involved#contact-form">Request a document</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
