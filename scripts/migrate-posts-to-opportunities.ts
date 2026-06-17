import { createClient } from "next-sanity";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

async function runMigration() {
  const slugsToMigrate = [
    "launch-your-career-of-impact-with-cap-program",
    "june-career-development-series-mastercard-foundation-scholars"
  ];

  console.log("Starting migration of posts to opportunities...");

  for (const slug of slugsToMigrate) {
    console.log(`\nProcessing slug: ${slug}`);
    
    // Fetch the post from Sanity
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        excerpt,
        coverImage,
        featured,
        body
      }`,
      { slug }
    );

    if (!post) {
      console.log(`No post document found with slug "${slug}". It might already be migrated or deleted.`);
      continue;
    }

    console.log(`Found post: "${post.title}" (ID: ${post._id})`);

    // Prepare opportunity document
    const opportunityId = `opportunity-${slug}`;
    const opportunityDoc = {
      _id: opportunityId,
      _type: "opportunities",
      title: post.title,
      slug: post.slug,
      type: "Program Call",
      location: "Ethiopia", // Default appropriate location based on context
      excerpt: post.excerpt,
      coverImage: post.coverImage,
      body: post.body,
      featured: post.featured ?? false,
    };

    console.log(`Creating/replacing opportunity document: ${opportunityId}`);
    await client.createOrReplace(opportunityDoc);
    console.log(`Successfully created opportunity document: ${opportunityId}`);

    // Delete the original post document
    console.log(`Deleting original post: ${post._id}`);
    await client.delete(post._id);
    console.log(`Successfully deleted post: ${post._id}`);
  }

  console.log("\nMigration completed successfully!");
}

runMigration().catch((error) => {
  console.error("Migration failed:", error);
});
