import { NextResponse } from "next/server";
import { getReadClient } from "@/sanity/client";
import { featuredItemsQuery } from "@/sanity/queries";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET() {
  const client = getReadClient();
  if (!client) {
    return NextResponse.json({ posts: [], events: [] });
  }

  try {
    const result = await client.fetch(featuredItemsQuery);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to fetch featured items:", error);
    return NextResponse.json({ posts: [], events: [] });
  }
}
