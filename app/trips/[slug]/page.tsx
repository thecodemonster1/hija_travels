import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink, Star, Calendar, User } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import ReviewForm from "@/components/reviews/ReviewForm";
import ImageGallery from "@/components/trips/ImageGallery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: trip } = await supabase
    .from("trips")
    .select("title, description")
    .eq("slug", slug)
    .single();

  if (!trip) {
    return {
      title: "Trip Not Found",
    };
  }

  return {
    title: `${trip.title} - Hija Travels`,
    description: trip.description,
  };
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  // Fetch trip details
  const { data: trip } = await supabase
    .from("trips")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!trip) {
    notFound();
  }

  // Fetch reviews with user info
  const { data: reviews } = await supabase
    .from("reviews")
    .select(
      `
      *,
      profiles:user_id (full_name, email, avatar_url)
    `
    )
    .eq("trip_id", trip.id)
    .order("created_at", { ascending: false });

  // Calculate average rating
  const avgRating =
    reviews && reviews.length > 0
      ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
      : 0;

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Parse external links
  const externalLinks = trip.external_links as any;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <Image
          src={
            trip.cover_image ||
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070"
          }
          alt={trip.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center space-x-2 text-white mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-lg font-medium">{trip.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {trip.title}
            </h1>
            {reviews && reviews.length > 0 && (
              <div className="flex items-center space-x-4 text-white">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{avgRating.toFixed(1)}</span>
                </div>
                <span className="text-blue-200">
                  {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About This Trip
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {trip.description}
                </p>
              </div>

              {/* Gallery */}
              {trip.gallery_images && trip.gallery_images.length > 0 && (
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Gallery
                  </h2>
                  <ImageGallery images={trip.gallery_images} />
                </div>
              )}

              {/* YouTube Video */}
              {trip.youtube_url && (
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Video Tour
                  </h2>
                  <div className="aspect-video">
                    <iframe
                      src={trip.youtube_url.replace("watch?v=", "embed/")}
                      title="Trip Video"
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Reviews Section */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Reviews{" "}
                  {reviews && reviews.length > 0 && `(${reviews.length})`}
                </h2>

                {/* Review Form */}
                {user ? (
                  <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">
                      Share Your Experience
                    </h3>
                    <ReviewForm tripId={trip.id} />
                  </div>
                ) : (
                  <div className="mb-8 p-6 bg-blue-50 rounded-lg text-center">
                    <p className="text-gray-700 mb-4">
                      Please sign in to leave a review
                    </p>
                    <Link
                      href="/auth/signin"
                      className="inline-block px-6 py-2 gradient-brand text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      Sign In
                    </Link>
                  </div>
                )}

                {/* Reviews List */}
                {reviews && reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-6 last:border-0"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-brand-700" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">
                                {(review as any).profiles?.full_name ||
                                  (review as any).profiles?.email?.split(
                                    "@"
                                  )[0] ||
                                  "Guest"}
                              </p>
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <Calendar className="w-3 h-3" />
                                <span>
                                  {new Date(
                                    review.created_at
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          {review.comment}
                        </p>
                        {review.images && review.images.length > 0 && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {review.images.map((img: string, idx: number) => (
                              <div
                                key={idx}
                                className="relative h-24 rounded-lg overflow-hidden"
                              >
                                <Image
                                  src={img}
                                  alt={`Review image ${idx + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No reviews yet. Be the first to share your experience!
                  </p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">
                    Interested in this trip?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get in touch to customize this trip or ask questions
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 gradient-brand text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* External Links */}
                {externalLinks &&
                  Array.isArray(externalLinks) &&
                  externalLinks.length > 0 && (
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-semibold mb-4">
                        Useful Links
                      </h3>
                      <div className="space-y-2">
                        {externalLinks.map((link: any, idx: number) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-brand-700 hover:text-brand-900 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm">{link.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
