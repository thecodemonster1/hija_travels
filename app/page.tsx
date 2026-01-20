import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Users,
  Star,
  Shield,
  Heart,
  Award,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  // Fetch featured trips
  const { data: trips } = await supabase
    .from("trips")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  // Fetch recent reviews
  const { data: reviews } = await supabase
    .from("reviews")
    .select(
      `
      *,
      profiles:user_id (full_name, email),
      trips:trip_id (title)
    `
    )
    .order("created_at", { ascending: false })
    .limit(6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 to-brand-600/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-3xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover the Magic of{" "}
              <span className="text-blue-200">Sri Lanka</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Experience authentic Sri Lankan culture with a professional local
              guide. Personalized tours crafted for unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/trips"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-brand-900 rounded-lg hover:bg-blue-50 transition-all font-semibold text-lg shadow-lg"
              >
                <span>Explore Trips</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-all font-semibold text-lg"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Hija Travels
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to Hija Travels! I'm a passionate Sri Lankan tour guide
              dedicated to showing visitors the true beauty and culture of my
              homeland. With years of experience guiding individuals and
              families, I create personalized journeys that go beyond the
              typical tourist experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Touch</h3>
              <p className="text-gray-600">
                Small groups and personalized itineraries tailored to your
                interests and pace.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Sri Lankan culture, history, and hidden gems
                off the beaten path.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Memorable Experiences
              </h3>
              <p className="text-gray-600">
                Creating lasting memories through authentic experiences and
                genuine connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trips */}
      {trips && trips.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Trips
              </h2>
              <p className="text-lg text-gray-600">
                Explore our curated selection of unforgettable journeys
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trips.map((trip) => (
                <Link
                  key={trip.id}
                  href={`/trips/${trip.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <Image
                      src={
                        trip.cover_image ||
                        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070"
                      }
                      alt={trip.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2 text-white">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {trip.location}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                      {trip.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {trip.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/trips"
                className="inline-flex items-center space-x-2 px-8 py-4 gradient-brand text-white rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                <span>View All Trips</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Hija Travels?
            </h2>
            <p className="text-lg text-blue-100">
              What makes our tours special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Experienced Guide",
                description: "Years of professional guiding experience",
              },
              {
                icon: Users,
                title: "Small Groups",
                description: "Personal attention to every guest",
              },
              {
                icon: Shield,
                title: "Safe & Reliable",
                description: "Your safety is our top priority",
              },
              {
                icon: Heart,
                title: "Authentic Experiences",
                description: "Real connections with local culture",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {reviews && reviews.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Guests Say
              </h2>
              <p className="text-lg text-gray-600">
                Real experiences from real travelers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-4">
                    "{review.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {(review as any).profiles?.full_name ||
                        (review as any).profiles?.email ||
                        "Guest"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {(review as any).trips?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's plan your perfect Sri Lankan journey together
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 gradient-brand text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
