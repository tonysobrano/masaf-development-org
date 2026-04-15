import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { news } from "@/content/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return news.posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = news.posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = news.posts.find((p) => p.slug === slug);
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
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Eyebrow>
          <h1 className="mt-4 text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.1] text-masaf-red">
            {post.title}
          </h1>
          <p className="mt-6 text-xl text-masaf-ink-muted leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-12 border-t border-masaf-ink/10 pt-12">
          {post.body && post.body.length > 0 ? (
            <div className="space-y-6">
              {post.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-masaf-ink">
                  {paragraph}
                </p>
              ))}
            </div>
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
      </Container>
    </article>
  );
}
