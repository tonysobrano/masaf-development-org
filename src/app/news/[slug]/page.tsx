import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PortableText } from "@portabletext/react";
import { getReadClient } from "@/sanity/client";
import { postBySlugQuery, allPostSlugsQuery } from "@/sanity/queries";
import { sanityImageUrl, getImageDimensions } from "@/sanity/image";
import { news } from "@/content/site";

type Params = { slug: string };

interface MockPost {
  _type: string;
  title: string;
  slug: string;
  excerpt?: string;
  body?: unknown;
  publishedAt?: string;
  date?: string;
  location?: string;
  coverImage?: unknown;
  gallery?: unknown[];
  images?: unknown[];
}

// Helper to fetch details from CMS or fall back to static mock data
async function getPostData(slug: string) {
  const client = getReadClient();
  let post = client ? await client.fetch(postBySlugQuery, { slug }) : null;

  if (!post) {
    const allMockItems = [
      ...news.posts.map((p) => ({ ...p, _type: "post" })),
      ...news.events.map((e) => ({ ...e, _type: "event" })),
      ...news.opportunities.map((o) => ({ ...o, _type: "opportunities" })),
    ];
    const mockPost = allMockItems.find((p) => p.slug === slug) as MockPost | undefined;
    if (mockPost) {
      post = {
        _type: mockPost._type,
        title: mockPost.title,
        slug: { current: mockPost.slug },
        excerpt: mockPost.excerpt,
        body: mockPost.body || null,
        publishedAt: mockPost.publishedAt || null,
        date: mockPost.date || null,
        location: mockPost.location || null,
        coverImage: mockPost.coverImage || null,
        gallery: mockPost.gallery || null,
        images: mockPost.images || null,
      };
    }
  }
  return post;
}

export async function generateStaticParams(): Promise<Params[]> {
  const client = getReadClient();
  const cmsSlugs = client ? await client.fetch(allPostSlugsQuery) : [];
  
  const mockSlugs = [
    ...news.posts.map((p) => p.slug),
    ...news.events.map((e) => e.slug),
    ...news.opportunities.map((o) => o.slug),
  ];

  const allSlugs = Array.from(new Set([...cmsSlugs, ...mockSlugs]));
  return allSlugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export const revalidate = 60;

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);
  
  if (!post) notFound();

  return (
    <article className="py-20 md:py-28">
      <Container size="narrow">
        <Link
          href="/news"
          className="text-sm uppercase tracking-[0.18em] text-masaf-red hover:text-masaf-red-dark"
        >
          ← Back to News
        </Link>

        <div className="mt-8">
          <Eyebrow>
            {post._type === "opportunities"
              ? `Opportunity • ${post.type}`
              : post._type === "event"
                ? `Event • ${
                    post.date
                      ? new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Upcoming"
                  }`
                : post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "News Update"}
          </Eyebrow>
          <h1 className="mt-4 text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.1] text-masaf-red">
            {post.title}
          </h1>
          {post._type === "opportunities" && (
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-masaf-ink-muted">
              {post.location && (
                <div>
                  <span className="font-semibold text-masaf-ink">Location:</span> {post.location}
                </div>
              )}
              {post.deadline && (
                <div>
                  <span className="font-semibold text-masaf-ink">Deadline:</span>{" "}
                  {new Date(post.deadline).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              )}
            </div>
          )}
          {post._type === "event" && (
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-masaf-ink-muted">
              {post.location && (
                <div>
                  <span className="font-semibold text-masaf-ink">Location:</span> {post.location}
                </div>
              )}
              {post.date && (
                <div>
                  <span className="font-semibold text-masaf-ink">Date:</span>{" "}
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              )}
            </div>
          )}
          <p className="mt-6 text-xl text-masaf-ink-muted leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {!!post.coverImage && (() => {
          const dims = getImageDimensions(post.coverImage);
          const aspect = dims ? dims.aspect : 16 / 9;
          return (
            <div
              className="mt-10 relative w-full rounded-2xl overflow-hidden bg-masaf-tan/20"
              style={{ aspectRatio: aspect, maxHeight: "500px" }}
            >
              <Image
                src={sanityImageUrl(post.coverImage, 1200)}
                alt=""
                fill
                className="object-cover blur-md scale-105 opacity-40 pointer-events-none select-none"
                priority
              />
              <Image
                src={sanityImageUrl(post.coverImage, 1200)}
                alt={post.title}
                fill
                className="object-contain"
                priority
                sizes="(min-width: 768px) 100vw, 100vw"
              />
            </div>
          );
        })()}

        <div className="mt-12 border-t border-masaf-ink/10 pt-12">
          {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
            typeof post.body[0] === "string" ? (
              <div className="prose prose-lg prose-masaf max-w-none text-masaf-ink space-y-6">
                {(post.body as string[]).map((paragraph, idx) => (
                  <p key={idx} className="text-lg leading-relaxed text-masaf-ink">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <div className="prose prose-lg prose-masaf max-w-none text-masaf-ink">
                <PortableText value={post.body} />
              </div>
            )
          ) : (
            <p className="text-lg leading-relaxed text-masaf-ink">
              Full article content will be added here once our editorial team
              migrates the archive to the CMS. In the meantime, read the summary
              above or{" "}
              <Link href="/get-involved#contact-form" className="text-masaf-red hover:underline">
                get in touch
              </Link>{" "}
              if you&rsquo;d like to speak with the team about this story.
            </p>
          )}
        </div>

        {(() => {
          const galleryItems = post.images || post.gallery;
          if (!galleryItems || galleryItems.length === 0) return null;
          return (
            <div className="mt-16 pt-12 border-t border-masaf-ink/10">
              <h2 className="text-2xl font-medium tracking-tight text-masaf-red mb-8">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {galleryItems.map((img: unknown, idx: number) => {
                  const url = typeof img === "string" ? img : sanityImageUrl(img, 800, 600);
                  if (!url) return null;
                  return (
                    <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-masaf-tan/20">
                      <Image
                        src={url}
                        alt={`${post.title} gallery image ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </Container>
    </article>
  );
}
