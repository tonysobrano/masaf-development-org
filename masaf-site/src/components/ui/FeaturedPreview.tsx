"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type FeaturedPreviewItem = {
  _id: string;
  _type: "post" | "event";
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  date?: string;
  category?: string;
};

type SanityEvent = {
  _id: string;
  _type: "event";
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  gallery?: { asset?: { url?: string } }[];
};

type SanityPost = {
  _id: string;
  _type: "post";
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  category?: string;
  coverImage?: { asset?: { url?: string } };
};

const ROTATE_INTERVAL = 6000;

const DEMO_ITEMS: FeaturedPreviewItem[] = [
  {
    _id: "preview-1",
    _type: "event",
    title: "Year-End Event 2024 with Mama Asli Abade",
    slug: "year-end-event-2024",
    excerpt: "MASAF hosted Mama Asli Abade, the first female pilot in Africa, for a community evening.",
    image: "/images/events/event-1.jpg",
    date: "Dec 31, 2024",
    category: "Event",
  },
  {
    _id: "preview-2",
    _type: "post",
    title: "Summer Internship Program 2025",
    slug: "summer-internship-program-2025",
    excerpt: "A voluntary 3-month internship across Admin, Programs, and Communications in Jigjiga.",
    image: "/images/community/community-2.jpg",
    date: "Jun 1, 2025",
    category: "News",
  },
  {
    _id: "preview-3",
    _type: "post",
    title: "Masaf Spaces Launches in Somalia",
    slug: "masaf-launches-somalia-operations",
    excerpt: "First regional scale-up outside Ethiopia, deepening ties with Somali communities.",
    image: "/images/events/event-2.jpg",
    date: "Mar 15, 2025",
    category: "News",
  },
];

export function FeaturedPreview() {
  const [items, setItems] = useState<FeaturedPreviewItem[]>(DEMO_ITEMS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/api/featured-items");
        const data: { events?: SanityEvent[]; posts?: SanityPost[] } = await res.json();
        const allItems: FeaturedPreviewItem[] = [
          ...(data.events || []).map((e) => ({
            _id: e._id,
            _type: "event" as const,
            title: e.title,
            slug: e.slug,
            excerpt: e.excerpt,
            date: e.date,
            category: "Event",
            image: e.gallery?.[0]?.asset?.url || "/images/events/event-1.jpg",
          })),
          ...(data.posts || []).map((p) => ({
            _id: p._id,
            _type: "post" as const,
            title: p.title,
            slug: p.slug,
            excerpt: p.excerpt,
            date: p.publishedAt,
            category: p.category === "story" ? "Story" : "News",
            image: p.coverImage?.asset?.url || "/images/community/community-1.jpg",
          })),
        ];
        if (allItems.length > 0) {
          setItems(allItems);
        }
      } catch {
        // Keep demo items
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    if (items.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [items.length, isHovered]);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];
  const href = currentItem._type === "event" ? `/news#events` : `/news/${currentItem.slug}`;

  return (
    <div
      className="absolute bottom-6 right-6 z-10 hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-80 overflow-hidden rounded-2xl bg-masaf-cream/95 backdrop-blur-sm shadow-2xl border border-white/20">
        <Link href={href} className="block group">
          <div className="relative h-44 overflow-hidden">
            {items.map((item, index) => (
              <div
                key={item._id}
                className={cn(
                  "absolute inset-0 transition-all duration-700",
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                )}
              >
                <Image
                  src={item.image || "/images/community/community-1.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-masaf-ink/60 via-transparent to-transparent" />
              </div>
            ))}
            
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center rounded-full bg-masaf-red/90 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-white">
                {currentItem.category}
              </span>
            </div>
          </div>

          <div className="p-4">
            {currentItem.date && (
              <time className="text-xs text-masaf-ink-muted uppercase tracking-wider">
                {new Date(currentItem.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            )}
            <h3 className="mt-1.5 text-base font-medium leading-snug text-masaf-ink line-clamp-2 group-hover:text-masaf-red transition-colors">
              {currentItem.title}
            </h3>
            {currentItem.excerpt && (
              <p className="mt-2 text-sm text-masaf-ink-muted line-clamp-2 leading-relaxed">
                {currentItem.excerpt}
              </p>
            )}
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-masaf-red">
              Read more
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>

        {items.length > 1 && (
          <div className="px-4 pb-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDotClick(index);
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-5 bg-masaf-red"
                      : "w-1.5 bg-masaf-ink/20 hover:bg-masaf-ink/40"
                  )}
                  aria-label={`View item ${index + 1}`}
                />
              ))}
            </div>
            <span className="text-xs text-masaf-ink-muted">
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
