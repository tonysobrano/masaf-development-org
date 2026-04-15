"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type FeaturedItem = {
  _id: string;
  _type: "post" | "event";
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  publishedAt?: string;
  category?: string;
  location?: string;
};

type FeaturedData = {
  posts: FeaturedItem[];
  events: FeaturedItem[];
};

const STORAGE_KEY = "masaf-banner-dismissed";
const ROTATE_INTERVAL = 5000;

const DEMO_ITEMS: FeaturedItem[] = [
  {
    _id: "demo-1",
    _type: "event",
    title: "Year-End Event 2024 with Mama Asli Abade",
    slug: "year-end-event-2024",
    date: "2024-12-31",
    location: "Masaf Spaces, Jigjiga",
  },
  {
    _id: "demo-2",
    _type: "post",
    title: "Masaf Spaces Summer Internship Program 2025",
    slug: "summer-internship-program-2025",
    category: "news",
    publishedAt: "2025-06-01",
  },
  {
    _id: "demo-3",
    _type: "post",
    title: "Masaf Spaces Launches Operations in Somalia",
    slug: "masaf-launches-somalia-operations",
    category: "news",
    publishedAt: "2025-03-15",
  },
];

export function AnnouncementBanner() {
  const [items, setItems] = useState<FeaturedItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setIsDismissed(false);
    }
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/api/featured-items");
        const data: FeaturedData = await res.json();
        const allItems = [...(data.events || []), ...(data.posts || [])];
        if (allItems.length > 0) {
          setItems(allItems);
        } else {
          setItems(DEMO_ITEMS);
        }
      } catch {
        setItems(DEMO_ITEMS);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    if (items.length <= 1 || isDismissed) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [items.length, isDismissed]);

  const handleDismiss = useCallback(() => {
    setIsDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  if (isLoading || isDismissed || items.length === 0) return null;

  return (
    <div className="relative z-50 bg-masaf-red text-masaf-cream">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => {
            const itemHref = item._type === "event" 
              ? `/news#events` 
              : `/news/${item.slug}`;
            
            return (
              <div
                key={item._id}
                className="min-w-full flex items-center justify-center px-4 py-3 md:px-8"
              >
                <Link
                  href={itemHref}
                  className="flex items-center gap-2 md:gap-4 text-center hover:opacity-90 transition-opacity"
                >
                  <span className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-xs uppercase tracking-wider">
                    {item._type === "event" ? "Event" : item.category || "News"}
                  </span>
                  <span className="font-medium text-sm md:text-base line-clamp-1">
                    {item.title}
                  </span>
                  <span className="hidden md:inline text-cream/70 text-sm">
                    →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleDismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Dismiss announcement"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {items.length > 1 && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5 pb-1">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === currentIndex
                  ? "w-4 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
