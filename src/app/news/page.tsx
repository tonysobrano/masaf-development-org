import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { news, siteSettings } from "@/content/site";
import { FacebookPageEmbed } from "@/components/ui/FacebookPageEmbed";

import { getReadClient } from "@/sanity/client";
import {
  postsQuery,
  eventsQuery,
  resourcesQuery,
  opportunitiesQuery,
  successStoriesQuery,
} from "@/sanity/queries";
import { sanityImageUrl } from "@/sanity/image";

interface CmsPost {
  title: string;
  slug: { current: string } | string;
  publishedAt: string;
  coverImage?: unknown;
  excerpt?: string;
}

interface CmsEvent {
  title: string;
  slug: { current: string } | string;
  date: string;
  location?: string;
  coverImage?: unknown;
  excerpt?: string;
}

interface CmsOpportunity {
  title: string;
  slug: { current: string } | string;
  type: string;
  location?: string;
  excerpt?: string;
  deadline?: string;
  body?: unknown;
  coverImage?: unknown;
}

interface ResourceFile {
  name: string;
  file?: { asset?: { url?: string } };
  viewUrl?: string;
  downloadUrl?: string;
}

interface CmsResource {
  title: string;
  description?: string;
  status?: string;
  files?: ResourceFile[];
}

interface CmsSuccessStory {
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
}

export const metadata: Metadata = {
  title: "News & Media",
  description: "Stories, events, and media from across the MASAF community.",
};

export const revalidate = 60;

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
  if (!iso) return "Coming soon";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getSlug(slug?: { current: string } | string): string {
  if (!slug) return "";
  return typeof slug === "object" ? slug.current : slug;
}

export default async function NewsPage() {
  const sanityClient = getReadClient();
  let fetchedPosts: CmsPost[] = [];
  let fetchedEvents: CmsEvent[] = [];
  let fetchedResources: CmsResource[] = [];
  let fetchedOpportunities: CmsOpportunity[] = [];
  let fetchedStories: CmsSuccessStory[] = [];

  if (sanityClient) {
    try {
      [
        fetchedPosts,
        fetchedEvents,
        fetchedResources,
        fetchedOpportunities,
        fetchedStories,
      ] = await Promise.all([
        sanityClient.fetch(postsQuery),
        sanityClient.fetch(eventsQuery),
        sanityClient.fetch(resourcesQuery),
        sanityClient.fetch(opportunitiesQuery),
        sanityClient.fetch(successStoriesQuery),
      ]);
    } catch (err) {
      console.error("Failed to fetch sanity data for news page", err);
    }
  }

  const activePosts = (fetchedPosts.length > 0 ? fetchedPosts : news.posts) as CmsPost[];
  const activeEvents = (fetchedEvents.length > 0 ? fetchedEvents : news.events) as CmsEvent[];
  const activeOpportunities = (fetchedOpportunities.length > 0 ? fetchedOpportunities : news.opportunities) as CmsOpportunity[];

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
          {activePosts.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {activePosts.map((post) => (
                <article
                  key={getSlug(post.slug)}
                  className="rounded-2xl border border-masaf-ink/10 bg-white p-8 flex flex-col"
                >
                  {!!post.coverImage && (() => {
                    const imageUrl = sanityImageUrl(post.coverImage, 600);
                    return (
                      <div className="relative mb-6 w-full h-48 md:h-56 rounded-xl overflow-hidden bg-masaf-tan/10">
                        <Image
                          src={imageUrl}
                          alt=""
                          fill
                          className="object-cover blur-md scale-105 opacity-40 pointer-events-none select-none"
                        />
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          fill
                          className="object-contain"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                    );
                  })()}
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
                    href={`/news/${getSlug(post.slug)}`}
                    className="mt-6 text-sm font-medium uppercase tracking-[0.08em] text-masaf-red hover:text-masaf-red-dark self-start"
                  >
                    Read story →
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm text-masaf-ink-muted">No news posts published yet.</p>
          )}
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
          {activeEvents.length > 0 ? (
            <div className="mt-10 grid gap-6">
              {activeEvents.map((ev) => (
                <article
                  key={getSlug(ev.slug)}
                  className="rounded-2xl border border-masaf-ink/10 bg-white p-8 md:flex md:items-start md:gap-8"
                >
                  {!!ev.coverImage && (() => {
                    const imageUrl = sanityImageUrl(ev.coverImage, 400);
                    return (
                      <div className="relative mb-6 md:mb-0 w-full md:w-48 h-48 rounded-xl overflow-hidden bg-masaf-tan/10 shrink-0">
                        <Image
                          src={imageUrl}
                          alt=""
                          fill
                          className="object-cover blur-md scale-105 opacity-40 pointer-events-none select-none"
                        />
                        <Image
                          src={imageUrl}
                          alt={ev.title}
                          fill
                          className="object-contain"
                          sizes="(min-width: 768px) 20vw, 100vw"
                        />
                      </div>
                    );
                  })()}
                  <div className="flex-1 md:flex md:items-start md:gap-8">
                    <div className="md:w-48 shrink-0">
                      <time className="text-xs uppercase tracking-[0.18em] text-masaf-ink font-semibold">
                        {formatDate(ev.date)}
                      </time>
                      <p className="mt-2 text-sm text-masaf-ink-muted">
                        {ev.location}
                      </p>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0">
                      <h3 className="text-xl md:text-2xl font-medium tracking-tight text-masaf-red leading-snug">
                        {ev.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-masaf-ink-muted">
                        {ev.excerpt}
                      </p>
                      <Link
                        href={`/news/${getSlug(ev.slug)}`}
                        className="mt-6 inline-block text-sm font-medium uppercase tracking-[0.08em] text-masaf-red hover:text-masaf-red-dark"
                      >
                        Event Details →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm text-masaf-ink-muted">No upcoming events listed.</p>
          )}
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
          {fetchedResources.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {fetchedResources.map((res, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-masaf-ink/10 bg-white p-8 flex flex-col"
                >
                  <h3 className="text-xl font-medium tracking-tight text-masaf-red">
                    {res.title}
                  </h3>
                  {res.description && (
                    <p className="mt-3 text-sm leading-relaxed text-masaf-ink-muted">
                      {res.description}
                    </p>
                  )}
                  {res.status ? (
                    <div className="mt-6">
                      <span className="inline-flex items-center rounded-full bg-masaf-tan px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-masaf-ink-muted">
                        {res.status}
                      </span>
                    </div>
                  ) : res.files && res.files.length > 0 ? (
                    <div className="mt-6 flex flex-col gap-4">
                      {res.files.map((file: ResourceFile, index: number) => {
                        const fileUrl = file.file?.asset?.url || file.viewUrl;
                        const dlUrl = file.file?.asset?.url ? `${file.file.asset.url}?dl=` : file.downloadUrl;
                        return (
                          <div key={index}>
                            <h4 className="text-sm font-semibold text-masaf-ink">{file.name}</h4>
                            <div className="mt-2 flex gap-3">
                              {fileUrl && (
                                <a
                                  href={fileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 rounded-full bg-masaf-red px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-white hover:bg-masaf-red/90 transition-colors"
                                >
                                  View PDF
                                </a>
                              )}
                              {dlUrl && (
                                <a
                                  href={dlUrl}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-masaf-ink/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-masaf-ink hover:bg-masaf-tan/20 transition-colors"
                                >
                                  Download
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm uppercase tracking-[0.12em] text-masaf-ink-muted">
              Resources are currently being updated.
            </p>
          )}
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
          {activeOpportunities.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {activeOpportunities.map((opp) => (
                <article
                  key={getSlug(opp.slug)}
                  className="rounded-2xl border border-masaf-ink/10 bg-white p-8 flex flex-col"
                >
                  {!!opp.coverImage && (() => {
                    const imageUrl = sanityImageUrl(opp.coverImage, 600);
                    return (
                      <div className="relative mb-6 w-full h-48 md:h-56 rounded-xl overflow-hidden bg-masaf-tan/10">
                        <Image
                          src={imageUrl}
                          alt=""
                          fill
                          className="object-cover blur-md scale-105 opacity-40 pointer-events-none select-none"
                        />
                        <Image
                          src={imageUrl}
                          alt={opp.title}
                          fill
                          className="object-contain"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                    );
                  })()}
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
                  {Array.isArray(opp.body) && opp.body.length > 0 && (
                    <Link
                      href={`/news/${getSlug(opp.slug)}`}
                      className="mt-6 text-sm font-medium uppercase tracking-[0.08em] text-masaf-red hover:text-masaf-red-dark self-start"
                    >
                      View details →
                    </Link>
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
          {fetchedStories.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {fetchedStories.map((story) => (
                <article
                  key={story.slug?.current}
                  className="rounded-2xl border border-masaf-ink/10 bg-white p-8 flex flex-col"
                >
                  <time className="text-xs uppercase tracking-[0.18em] text-masaf-ink-muted">
                    {formatDate(story.publishedAt)}
                  </time>
                  <h3 className="mt-3 text-xl md:text-2xl font-medium tracking-tight text-masaf-red leading-snug">
                    {story.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-masaf-ink-muted flex-1">
                    {story.excerpt}
                  </p>
                  <Link
                    href={`/news/${story.slug?.current}`}
                    className="mt-6 text-sm font-medium uppercase tracking-[0.08em] text-masaf-red hover:text-masaf-red-dark self-start"
                  >
                    Read story →
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-lg text-masaf-ink-muted leading-relaxed">
              We&rsquo;re gathering stories from program alumni, mentors, and
              partners. Check back soon — or{" "}
              <Link className="text-masaf-red hover:underline" href="/get-involved#contact-form">
                share yours
              </Link>
              .
            </p>
          )}
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
