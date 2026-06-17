import { createClient } from "next-sanity";
import { news, resources } from "../src/content/site";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

async function seed() {
  console.log("Seeding Sanity database...");

  // Seed Posts
  for (const post of news.posts) {
    console.log(`Creating/Updating post: ${post.title}`);
    await client.createOrReplace({
      _id: `post-${post.slug}`,
      _type: "post",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      category: "News",
      featured: post.slug === "masaf-launches-somalia-operations" || post.slug === "summer-internship-program-2025",
    });
  }

  // Seed Events
  for (const ev of news.events) {
    console.log(`Creating/Updating event: ${ev.title}`);
    try {
      await client.createOrReplace({
        _id: `event-${ev.slug}`,
        _type: "event",
        title: ev.title,
        slug: { _type: "slug", current: ev.slug },
        date: new Date(ev.date).toISOString(),
        location: ev.location,
        excerpt: ev.excerpt,
        featured: ev.slug === "year-end-event-2024",
      });
    } catch (e) {
      console.error(`Failed to create event ${ev.title}:`, e);
    }
  }

  // Seed Opportunities
  for (const opp of news.opportunities) {
    console.log(`Creating/Updating opportunity: ${opp.title}`);
    try {
      await client.createOrReplace({
        _id: `opportunity-${opp.slug}`,
        _type: "opportunities",
        title: opp.title,
        slug: { _type: "slug", current: opp.slug },
        type: opp.type,
        location: opp.location,
        excerpt: opp.excerpt,
        deadline: opp.deadline ? new Date(opp.deadline).toISOString() : undefined,
      });
    } catch (e) {
      console.error(`Failed to create opportunity ${opp.title}:`, e);
    }
  }

  // Seed Resources
  let resIndex = 0;
  for (const cat of resources.categories) {
    console.log(`Creating/Updating resource category: ${cat.title}`);
    resIndex++;
    
    const sanityFiles = "files" in cat && cat.files ? cat.files.map((f: { name: string; viewUrl?: string; downloadUrl?: string }, i: number) => ({
      _key: `file-${i}`,
      name: f.name,
      viewUrl: f.viewUrl,
      downloadUrl: f.downloadUrl
    })) : undefined;

    await client.createOrReplace({
      _id: `resource-${resIndex}`,
      _type: "resource",
      title: cat.title,
      description: cat.description,
      status: "status" in cat ? cat.status : undefined,
      files: sanityFiles,
      featured: false,
    });
  }

  // Create a placeholder Success Story
  console.log("Creating/Updating success story placeholder");
  await client.createOrReplace({
    _id: "success-story-placeholder",
    _type: "successStories",
    title: "From Trainee to Program Facilitator",
    slug: { _type: "slug", current: "from-trainee-to-facilitator" },
    excerpt: "Stories from program alumni who turned skills cohorts into livelihoods and leadership.",
    publishedAt: new Date().toISOString(),
    featured: true,
  });

  console.log("Seeding complete!");
}

seed().catch((err) => {
  console.error("Error seeding sanity:", err);
});
