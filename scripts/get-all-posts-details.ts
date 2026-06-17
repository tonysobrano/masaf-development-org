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

async function main() {
  console.log("Fetching detailed posts...");
  const posts = await client.fetch(`
    *[_type == "post"] {
      _id,
      title,
      slug,
      coverImage,
      featured,
      _rev
    }
  `);
  console.log(JSON.stringify(posts, null, 2));
}

main().catch(console.error);
