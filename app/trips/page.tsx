import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Our Trips - Hija Travels",
  description: "Browse all available tours and trips in Sri Lanka",
};

export default async function TripsPage() {
  const supabase = await createClient();

  const { data: trips } = await supabase
    .from("trips")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-br from-brand-900 to-brand-600">
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Trips</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover amazing destinations and create unforgettable memories
          </p>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {trips && trips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trips.map((trip) => (
                <Link
                  key={trip.id}
                  href={`/trips/${trip.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                    <Image
                      src={
                        trip.cover_image ||
                        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070"
                      }
                      alt={trip.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="flex items-center space-x-2 text-white mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {trip.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {trip.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {trip.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      Added {new Date(trip.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">
                No trips available at the moment.
              </p>
              <p className="text-gray-500">
                Check back soon for exciting new destinations!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
