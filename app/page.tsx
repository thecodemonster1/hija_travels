import Image from "next/image";
import {
  ArrowRight,
  Users,
  Star,
  Shield,
  Heart,
  Award,
  Car,
  Palmtree,
  Mountain,
  Waves,
  Coffee,
  Languages,
  Lock,
  Gift,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function Home() {
  // Mock data for vehicles
  const vehicles = [
    {
      id: 1,
      name: "Luxury Sedan",
      type: "Perfect for couples & small families",
      capacity: "Up to 3 passengers",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070",
      features: ["Air Conditioned", "Comfortable Seats", "Music System", "WiFi Available"],
      description: "Travel in style and comfort with our premium sedans. Perfect for romantic getaways!",
    },
    {
      id: 2,
      name: "Spacious SUV",
      type: "Ideal for families & groups",
      capacity: "Up to 6 passengers",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071",
      features: ["Extra Luggage Space", "Premium Comfort", "Child Seats Available", "Panoramic Views"],
      description: "Room for everyone! Our SUVs make family adventures a breeze (and yes, the kids will finally agree on something).",
    },
    {
      id: 3,
      name: "Luxury Mini Van",
      type: "Best for large groups",
      capacity: "Up to 12 passengers",
      image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070",
      features: ["Maximum Space", "Group Travel", "Entertainment System", "Reclining Seats"],
      description: "Bring the whole gang! Because memories are better when shared with more people who'll remind you of that embarrassing moment.",
    },
  ];

  // Mock testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      rating: 5,
      comment: "Best decision ever! Our guide knew every hidden spot and spoke perfect English. We felt like VIPs exploring a friend's paradise!",
      trip: "7-Day Cultural & Beach Tour",
    },
    {
      id: 2,
      name: "Hans Mueller",
      country: "Germany",
      rating: 5,
      comment: "Unglaublich! The guide spoke German fluently and made us feel at home. Sri Lanka through his eyes was magical. 10/10 würde wieder buchen!",
      trip: "Wildlife & Tea Country Adventure",
    },
    {
      id: 3,
      name: "Yuki Tanaka",
      country: "Japan",
      rating: 5,
      comment: "素晴らしい! Safety was never a concern. The driver was so professional and the itinerary was perfectly organized. Arigato gozaimasu!",
      trip: "Ancient Cities & Temples Tour",
    },
    {
      id: 4,
      name: "Marie Dubois",
      country: "France",
      rating: 5,
      comment: "Magnifique! We got to see the REAL Sri Lanka, not just tourist traps. The guide's humor kept us laughing all week!",
      trip: "Complete Island Experience",
    },
    {
      id: 5,
      name: "Carlos Rodriguez",
      country: "Spain",
      rating: 5,
      comment: "¡Increíble! From the planning to the last goodbye, everything was perfect. Worth every penny and then some!",
      trip: "Beach & Adventure Package",
    },
    {
      id: 6,
      name: "Emma Wilson",
      country: "Australia",
      rating: 5,
      comment: "Absolutely brilliant! The free extras (surprise stops, local snacks) made it feel less like a tour and more like traveling with a mate!",
      trip: "Highlights of Sri Lanka",
    },
  ];

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
              Experience authentic Sri Lankan culture with a friendly local guide who speaks YOUR language!
              Personalized tours crafted for unforgettable memories (and Instagram-worthy moments 📸).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/94707009393?text=Hi! I'm interested in exploring Sri Lanka with Hija Travels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold text-lg shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="#vehicles"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-all font-semibold text-lg"
              >
                <span>See Our Vehicles</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Hija Travels? (Besides Our Winning Smile 😊)
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're not just another tour company. We're your Sri Lankan friend who happens to know ALL the best spots,
              speaks multiple languages (seriously, try us!), and treats your safety like it's our grandmother's china collection.
              Oh, and we throw in some freebies because we're just nice like that!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multilingual Magic</h3>
              <p className="text-gray-600">
                English? Check. German? Ja! Spanish? ¡Sí! Japanese? はい! Plus French, Italian, and more.
                We probably speak your language (and if not, we'll learn it before you arrive!).
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-gray-600">
                Licensed, insured, and more trustworthy than your GPS. Your safety is our obsession.
                We're talking professional drivers, well-maintained vehicles, and zero sketchy shortcuts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Super Friendly Service</h3>
              <p className="text-gray-600">
                We don't just drive you around - we become your Sri Lankan BFF! Expect dad jokes, local legends,
                and enough friendliness to make your cheeks hurt from smiling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">FREE Surprises!</h3>
              <p className="text-gray-600">
                Complimentary water bottles, surprise stops at hidden gems, insider tips, and occasional treats.
                Because who doesn't love free stuff? (We're still working on free elephants though 🐘).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sri Lanka Highlights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sri Lanka: The Wonder of Asia 🌴
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Imagine a place where ancient temples touch the clouds, elephants roam free,
              tea plantations carpet mountains, and beaches rival the Maldives.
              Now stop imagining - that's just a regular Tuesday in Sri Lanka!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
                  alt="Ancient Temples"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2 text-white">
                  <Palmtree className="w-4 h-4" />
                  <span className="text-sm font-medium">Cultural Heritage</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  8 UNESCO World Heritage Sites
                </h3>
                <p className="text-gray-600">
                  Ancient cities, sacred temples, and colonial forts that'll make your history teacher jealous.
                  Sigiriya Rock Fortress? That's basically an ancient skyscraper with better views!
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070"
                  alt="Wildlife Safari"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2 text-white">
                  <Mountain className="w-4 h-4" />
                  <span className="text-sm font-medium">Wildlife Paradise</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Elephants, Leopards & More!
                </h3>
                <p className="text-gray-600">
                  Home to the highest density of leopards in the world! Yala National Park is like
                  a real-life Lion King, except with more elephants and zero singing warthogs.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2070"
                  alt="Beautiful Beaches"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2 text-white">
                  <Waves className="w-4 h-4" />
                  <span className="text-sm font-medium">Pristine Beaches</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  1,340 km of Coastline
                </h3>
                <p className="text-gray-600">
                  Golden sands, turquoise waters, and palm trees that actually exist (not just in Corona commercials).
                  Perfect for surfing, swimming, or just pretending you're in a music video.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070"
                  alt="Tea Plantations"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2 text-white">
                  <Coffee className="w-4 h-4" />
                  <span className="text-sm font-medium">Hill Country</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  World's Best Tea
                </h3>
                <p className="text-gray-600">
                  Rolling green hills covered in tea plantations. Nuwara Eliya is like Scotland
                  but warmer, with better tea, and yes, you CAN visit a tea factory!
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070"
                  alt="Local Cuisine"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2 text-white">
                  <Coffee className="w-4 h-4" />
                  <span className="text-sm font-medium">Amazing Food</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cuisine That Packs Flavor!
                </h3>
                <p className="text-gray-600">
                  Rice & curry that'll make you question every meal you've had before.
                  Spicy? Yes. Worth it? Absolutely. Will you ask for seconds? Guaranteed!
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1580134788427-beb610c3e8e0?q=80&w=2073"
                  alt="Warm People"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2 text-white">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Warm Hospitality</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  The Friendliest People
                </h3>
                <p className="text-gray-600">
                  Sri Lankans smile at strangers, help tourists, and treat guests like family.
                  Warning: You might leave with 47 new Facebook friends and invitations to three weddings!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              🌟 Fun Fact: Sri Lanka has more than 26 national parks, 100+ waterfalls,
              and enough curry varieties to try a different one every day for a year!
            </p>
          </div>
        </div>
      </section>

      {/* Our Vehicles Section */}
      <section id="vehicles" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Ride, Your Choice 🚗
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're a couple seeking romance, a family on vacation, or bringing the whole squad,
              we've got wheels that'll make your journey as comfortable as your own couch (but with better views!).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Available Now
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {vehicle.name}
                    </h3>
                    <Car className="w-6 h-6 text-brand-600" />
                  </div>
                  <p className="text-brand-600 font-medium mb-2">
                    {vehicle.type}
                  </p>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {vehicle.capacity}
                  </p>
                  <p className="text-gray-700 mb-4">{vehicle.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {vehicle.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/94707009393?text=Hi! I'd like to know more about your vehicles and pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold text-lg shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book Your Vehicle on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Hija Travels Difference
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We're not bragging, but... okay, maybe a little. Here's what makes us the best choice for your Sri Lankan adventure!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "10+ Years Experience",
                description: "We've been doing this longer than TikTok has existed. Trust the pros!",
              },
              {
                icon: Shield,
                title: "100% Safe & Insured",
                description: "Licensed drivers, maintained vehicles, and insurance. Your grandma would approve!",
              },
              {
                icon: Languages,
                title: "Speak Your Language",
                description: "English, German, Spanish, Japanese, French, Italian... We're basically walking Google Translate!",
              },
              {
                icon: Gift,
                title: "Free Extras Included",
                description: "Water, WiFi, surprise stops, local treats, and our famous dad jokes. All FREE!",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/20 transition-all">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">🎁 Special Perks You'll Love</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Itinerary</h4>
                    <p className="text-blue-100 text-sm">Want to stay longer at a spot? No problem! This is YOUR trip.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📸</span>
                  <div>
                    <h4 className="font-semibold mb-1">Free Photography</h4>
                    <p className="text-blue-100 text-sm">We'll take your photos so you're not stuck with selfies!</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🗺️</span>
                  <div>
                    <h4 className="font-semibold mb-1">Local Insider Tips</h4>
                    <p className="text-blue-100 text-sm">Best restaurants, shops, and spots tourists never find.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💝</span>
                  <div>
                    <h4 className="font-semibold mb-1">24/7 Support</h4>
                    <p className="text-blue-100 text-sm">Questions at 2 AM? We got you! (But maybe wait till morning 😊)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Don't Just Take Our Word For It! 💬
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from real travelers who actually had fun with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    {testimonial.country}
                  </p>
                  <p className="text-sm text-brand-600 font-medium">
                    {testimonial.trip}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-2">
              ⭐⭐⭐⭐⭐ <span className="font-bold">5.0 Average Rating</span> from 200+ Happy Travelers!
            </p>
            <p className="text-gray-600">
              Still not convinced? That's okay, we'll win you over with our charm (and excellent driving skills)!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
                    alt="Sri Lanka Landscape"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ready for the Adventure of a Lifetime? 🌟
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Let's plan your perfect Sri Lankan journey together! Drop us a message on WhatsApp
                    and let's turn your travel dreams into reality (with some laughs along the way!).
                  </p>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/94707009393?text=Hi Hija Travels! I'm interested in exploring Sri Lanka. Can you help me plan my trip?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold text-lg shadow-lg"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href="tel:+94707009393"
                      className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-all font-semibold text-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Us: +94 70 700 9393</span>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    📱 We reply faster than you can say "Sri Lanka"! Usually within minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
