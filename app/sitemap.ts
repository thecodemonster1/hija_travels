import { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient();

  // Fetch all trips for dynamic routes
  const { data: trips } = await supabase
    .from("trips")
    .select("slug, updated_at");

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hija-travels.vercel.app";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/trips`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Dynamic trip pages
  const tripPages =
    trips?.map((trip) => ({
      url: `${baseUrl}/trips/${trip.slug}`,
      lastModified: new Date(trip.updated_at),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })) || [];

  return [...staticPages, ...tripPages];
}
