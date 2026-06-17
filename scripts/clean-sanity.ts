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

async function clean() {
  console.log("Deleting all migrated document types to remove duplicates...");
  const types = ["post", "event", "opportunities", "resource", "successStories"];
  
  for (const type of types) {
    console.log(`Deleting all documents of type: ${type}`);
    await client.delete({ query: `*[_type == "${type}"]` });
  }
  
  console.log("Cleanup complete!");
}

clean().catch(console.error);
