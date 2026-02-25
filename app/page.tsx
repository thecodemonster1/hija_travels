"use client";
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
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import PhotoGallery from "@/components/gallery/PhotoGallery";

export default function Home() {

    const vehicles = [
    {
      id: 1,
      name: "Toyota KDH Van",
      type: "Perfect for groups & families",
      capacity: "Up to 10 passengers",
      image: "/gallery/Vehicle/vehicle-16.jpeg",
      features: ["Air Conditioned", "Comfortable Seats", "Music System", "WiFi Available"],
      description: "Travel in style and comfort with our reliable Toyota KDH van. Perfect for group tours and family adventures!",
    },
    {
      id: 2,
      name: "Honda Vezel",
      type: "Ideal for couples & small families",
      capacity: "Up to 4 passengers",
      image: "/gallery/Vehicle/vehicle-21.jpg",
      features: ["Air Conditioned", "Comfortable Seats", "Music System", "USB Charging"],
      description: "Sleek, stylish and surprisingly spacious — the Honda Vezel is perfect for couples and small families who want a smooth, premium ride.",
    },
    {
      id: 3,
      name: "Suzuki Every",
      type: "Great for small groups & city tours",
      capacity: "Up to 7 passengers",
      image: "/gallery/Vehicle/vehicle-20.jpeg",
      features: ["Air Conditioned", "Compact & Agile", "Easy Parking", "Fuel Efficient"],
      description: "Nimble, practical and full of character — the Suzuki Every is ideal for navigating Sri Lanka's winding roads and tight city streets with ease.",
    },
    {
      id: 4,
      name: "Toyota Alphard",
      type: "Ultimate luxury for VIP travelers",
      capacity: "Up to 7 passengers",
      image: "/gallery/Vehicle/vehicle-1.jpeg",
      features: ["Premium Leather Seats", "Executive Comfort", "Entertainment System", "WiFi Available"],
      description: "The pinnacle of luxury travel. The Toyota Alphard offers first-class comfort, whisper-quiet rides, and executive-level space — because you deserve the best.",
    },
    ];

  // Real testimonials from Hija Travels guests
  const testimonials = [
    {
      id: 1,
      name: "Bhargavi",
      country: "Group Adventure",
      rating: 5,
      comment: "Thanks a ton for your patience and skill—you made our trip so safe and fun! You're the best driver ever, bro. We miss you already! ❤️",
      trip: "Group Adventure Tour",
    },
    {
      id: 2,
      name: "Bhargavi",
      country: "Heartfelt Farewell",
      rating: 5,
      comment: "We all miss you so much! Your caring ways meant the world to us. Take care, and thanks for everything. 🙏",
      trip: "Island Explorer Package",
    },
    {
      id: 3,
      name: "Naresh",
      country: "Family Journey",
      rating: 5,
      comment: "You're an awesome guy—thanks for the great short trip! We loved every moment.",
      trip: "Family Day Tour",
    },
    {
      id: 4,
      name: "Anonymous Traveler",
      country: "Casual Meetup",
      rating: 5,
      comment: "Had a blast hanging out! You're a top-notch driver and friend. Cheers! 😊",
      trip: "City & Highlights Tour",
    },
    {
      id: 5,
      name: "Anonymous Travelers",
      country: "International Fun · Jan 2026",
      rating: 5,
      comment: "Best driver hands down! Thank you for making our adventure unforgettable. 👍",
      trip: "Sri Lanka Adventure",
    },
    {
      id: 6,
      name: "Bhargavi",
      country: "Safe Arrival Note",
      rating: 5,
      comment: "We got home safe—thanks to you! You're the absolute best. Miss you! 😍",
      trip: "Complete Island Experience",
    },
    {
      id: 7,
      name: "Priya & Family",
      country: "India",
      rating: 5,
      comment: "From the airport pickup to the final drop-off, every detail was taken care of. Felt like travelling with family, not a stranger. Will 100% book again! 🌟",
      trip: "7-Day Family Discovery Tour",
    },
    {
      id: 8,
      name: "Rahul Mehta",
      country: "India",
      rating: 5,
      comment: "Honest, reliable and always on time. The hidden spots he took us to were absolutely breathtaking — no tourist guide would ever know them. Highly recommend!",
      trip: "Scenic Wonders Package",
    },
  ];

  // All real trip photos from /gallery/Trip/
  const galleryImages = [
    { id: 1,  src: "/gallery/Trip/trip-1.jpeg",  alt: "Amazing adventure with Hija Travels", caption: "Creating unforgettable memories! 🌟" },
    { id: 2,  src: "/gallery/Trip/trip-2.jpeg",  alt: "Happy travelers exploring Sri Lanka", caption: "Adventure mode: ON! 🚀" },
    { id: 3,  src: "/gallery/Trip/trip-3.jpeg",  alt: "Beautiful moments on tour", caption: "Living our best lives in paradise 🌴" },
    { id: 4,  src: "/gallery/Trip/trip-4.jpeg",  alt: "Hija Travels tour group", caption: "Squad goals! New friends = family ❤️" },
    { id: 5,  src: "/gallery/Trip/trip-5.jpeg",  alt: "Exploring Sri Lankan culture", caption: "Worth every single step! 💪" },
    { id: 6,  src: "/gallery/Trip/trip-6.jpeg",  alt: "Scenic views with Hija Travels", caption: "Paradise found! 🏖️" },
    { id: 7,  src: "/gallery/Trip/trip-7.jpeg",  alt: "Fun moments with tour group", caption: "Memories that last a lifetime 📸" },
    { id: 8,  src: "/gallery/Trip/trip-8.jpeg",  alt: "Adventure seekers with Hija Travels", caption: "So glad we chose Hija Travels! ✨" },
    { id: 9,  src: "/gallery/Trip/trip-9.jpeg",  alt: "Magical moments in Sri Lanka", caption: "Best tour ever! 🌟" },
    { id: 10, src: "/gallery/Trip/trip-10.jpeg", alt: "Beautiful Sri Lankan landscapes", caption: "Nature at its finest! 🤯" },
    { id: 11, src: "/gallery/Trip/trip-11.jpeg", alt: "Travelers enjoying the journey", caption: "Every corner is Instagram-worthy! 📷" },
    { id: 12, src: "/gallery/Trip/trip-12.jpeg", alt: "Group adventure with Hija Travels", caption: "Can't wait to come back! 💛" },
    { id: 13, src: "/gallery/Trip/trip-25.jpeg", alt: "Scenic Sri Lanka tour", caption: "Stunning views everywhere! 😍" },
    { id: 14, src: "/gallery/Trip/trip-26.jpeg", alt: "Hija Travels adventure", caption: "This is what dreams are made of 🌊" },
    { id: 15, src: "/gallery/Trip/trip-27.jpeg", alt: "Happy travelers in Sri Lanka", caption: "Pure joy on every face! 😄" },
    { id: 16, src: "/gallery/Trip/trip-28.jpeg", alt: "Cultural experiences tour", caption: "Discovering hidden gems! 💎" },
    { id: 17, src: "/gallery/Trip/trip-29.jpeg", alt: "Breathtaking Sri Lanka", caption: "Words can't describe this beauty! 🏔️" },
    { id: 18, src: "/gallery/Trip/trip-30.jpeg", alt: "Group tour Sri Lanka", caption: "Together we explore! 🤝" },
    { id: 19, src: "/gallery/Trip/trip-31.jpeg", alt: "Travel memories Hija Travels", caption: "Making moments matter 💫" },
    { id: 20, src: "/gallery/Trip/trip-32.jpeg", alt: "Sri Lanka adventure tour", caption: "Adventure awaits around every corner! 🗺️" },
    { id: 21, src: "/gallery/Trip/trip-33.jpeg", alt: "Amazing Sri Lanka views", caption: "Absolutely breathtaking! 🌅" },
    { id: 22, src: "/gallery/Trip/trip-34.jpeg", alt: "Fun trip with Hija Travels", caption: "Best decision we ever made! 🎉" },
    { id: 23, src: "/gallery/Trip/trip-35.jpeg", alt: "Exploring Sri Lanka together", caption: "The journey is the destination 🛤️" },
    { id: 24, src: "/gallery/Trip/trip-36.jpeg", alt: "Happy explorers Sri Lanka", caption: "Smiles all around! 😊" },
    { id: 25, src: "/gallery/Trip/trip-37.jpeg", alt: "Hija Travels group photo", caption: "Friends made for life! 👫" },
    { id: 26, src: "/gallery/Trip/trip-38.jpeg", alt: "Sri Lanka tour highlights", caption: "Highlight of our trip! ⭐" },
    { id: 27, src: "/gallery/Trip/trip-39.jpeg", alt: "Beautiful beach Sri Lanka", caption: "Paradise on Earth 🏝️" },
    { id: 28, src: "/gallery/Trip/trip-40.jpeg", alt: "Cultural tour Sri Lanka", caption: "Rich culture, warm people 🙏" },
    { id: 29, src: "/gallery/Trip/trip-41.jpeg", alt: "Traveler adventures", caption: "Every moment is precious! 💖" },
    { id: 30, src: "/gallery/Trip/trip-42.jpeg", alt: "Group smiles Sri Lanka", caption: "Happy hearts, happy travels! 💕" },
    { id: 31, src: "/gallery/Trip/trip-43.jpeg", alt: "Hija Travels scenic tour", caption: "Scenery beyond imagination! 🌄" },
    { id: 32, src: "/gallery/Trip/trip-44.jpeg", alt: "Sri Lanka hidden gems", caption: "Off the beaten path! 🥾" },
    { id: 33, src: "/gallery/Trip/trip-45.jpeg", alt: "Tour memories Sri Lanka", caption: "Grateful for every moment! 🙌" },
    { id: 34, src: "/gallery/Trip/trip-46.jpeg", alt: "Travelers enjoying Sri Lanka", caption: "Pure Sri Lankan magic! ✨" },
    { id: 35, src: "/gallery/Trip/trip-47.jpeg", alt: "Adventure tour moments", caption: "Adventures worth sharing! 📲" },
    { id: 36, src: "/gallery/Trip/trip-48.jpeg", alt: "Happy group trip", caption: "Laughing our way through paradise! 😂" },
    { id: 37, src: "/gallery/Trip/trip-49.jpeg", alt: "Sri Lanka wonders", caption: "Wonders never cease here! 🌺" },
    { id: 38, src: "/gallery/Trip/trip-50.jpeg", alt: "Hija Travels journey", caption: "Journey of a lifetime! 🌍" },
    { id: 39, src: "/gallery/Trip/trip-51.jpeg", alt: "Beautiful tour moments", caption: "Capturing every smile! 😁" },
    { id: 40, src: "/gallery/Trip/trip-52.jpeg", alt: "Sri Lanka travel photos", caption: "More memories, more smiles! 🎊" },
    { id: 41, src: "/gallery/Trip/trip-53.jpeg", alt: "Amazing tour experiences", caption: "Experiences money can't buy! 💰" },
    { id: 42, src: "/gallery/Trip/trip-54.jpeg", alt: "Group adventure photos", caption: "Together is the best place to be! 🤗" },
    { id: 43, src: "/gallery/Trip/trip-55.jpeg", alt: "Sri Lanka tour photos", caption: "Sri Lanka stole our hearts! ❤️" },
    { id: 44, src: "/gallery/Trip/trip-56.jpeg", alt: "Hija Travels adventures", caption: "Adding to our bucket list daily! ✅" },
    { id: 45, src: "/gallery/Trip/trip-57.jpeg", alt: "Travel group moments", caption: "The best kind of tired! 😪" },
    { id: 46, src: "/gallery/Trip/trip-58.jpeg", alt: "Beautiful Sri Lanka", caption: "Beauty in every direction! 👀" },
    { id: 47, src: "/gallery/Trip/trip-59.jpeg", alt: "Tour group fun", caption: "Fun times, great memories! 🎈" },
    { id: 48, src: "/gallery/Trip/trip-60.jpeg", alt: "Sri Lanka exploration", caption: "Exploring every inch of paradise! 🗺️" },
    { id: 49, src: "/gallery/Trip/trip-61.jpeg", alt: "Travel adventures", caption: "Not all who wander are lost! 🧭" },
    { id: 50, src: "/gallery/Trip/trip-62.jpeg", alt: "Hija Travels memories", caption: "Forever in our hearts! 💝" },
    { id: 51, src: "/gallery/Trip/trip-63.jpeg", alt: "Sri Lanka group tours", caption: "Best group, best memories! 🏆" },
    { id: 52, src: "/gallery/Trip/trip-64.jpeg", alt: "Amazing trip photos", caption: "Trip goals achieved! 🎯" },
    { id: 53, src: "/gallery/Trip/trip-65.jpeg", alt: "Beautiful moments", caption: "Moments we treasure forever! 🌟" },
    { id: 54, src: "/gallery/Trip/trip-66.jpeg", alt: "Travel stories Sri Lanka", caption: "Stories worth telling! 📖" },
    { id: 55, src: "/gallery/Trip/trip-67.jpeg", alt: "Hija Travels tour", caption: "Come for the views, stay for the vibes! 🌈" },
    { id: 56, src: "/gallery/Trip/trip-68.jpeg", alt: "Sri Lanka discovery", caption: "Discovery mode: always on! 🔍" },
    { id: 57, src: "/gallery/Trip/trip-69.jpeg", alt: "Group travel moments", caption: "Shared adventures, lifelong bonds! 🤝" },
    { id: 58, src: "/gallery/Trip/trip-70.jpeg", alt: "Beautiful trip photos", caption: "Beauty is everywhere here! 💐" },
    { id: 59, src: "/gallery/Trip/trip-71.jpeg", alt: "Hija Travels experience", caption: "Experience over everything! 🌠" },
    { id: 60, src: "/gallery/Trip/trip-72.jpeg", alt: "Sri Lanka tour group", caption: "Every trip is a new story! 📚" },
    { id: 61, src: "/gallery/Trip/trip-73.jpeg", alt: "Travel memories made", caption: "Making memories that matter! 💫" },
    { id: 62, src: "/gallery/Trip/trip-74.jpeg", alt: "Amazing Sri Lanka trip", caption: "Already planning our return! ✈️" },
    { id: 63, src: "/gallery/Trip/trip-75.jpeg", alt: "Hija Travels group fun", caption: "Good vibes only! ☀️" },
    { id: 64, src: "/gallery/Trip/trip-76.jpeg", alt: "Sri Lanka adventures", caption: "Adventure is calling! 📣" },
    { id: 65, src: "/gallery/Trip/trip-77.jpeg", alt: "Beautiful trip moments", caption: "Bliss looks like this! 🕊️" },
    { id: 66, src: "/gallery/Trip/trip-78.jpeg", alt: "Group trip Sri Lanka", caption: "Together we make it better! 🌟" },
    { id: 67, src: "/gallery/Trip/trip-79.jpeg", alt: "Final trip memories", caption: "Until we meet again, Sri Lanka! 🫶" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-brand-900/90 to-brand-600/80 z-10"
        />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Discover the Magic of{" "}
              <span className="text-blue-200">Sri Lanka</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Experience authentic Sri Lankan culture with a friendly local guide who speaks YOUR language!
              Personalized tours crafted for unforgettable memories (and Instagram-worthy moments 📸).
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/94707009393?text=Hi! I'm interested in exploring Sri Lanka with Hija Travels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold text-lg shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#vehicles"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-all font-semibold text-lg"
              >
                <span>See Our Vehicles</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="slide-up" className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Hija Travels? (Besides Our Winning Smile 😊)
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're not just another tour company. We're your Sri Lankan friend who happens to know ALL the best spots,
              speaks multiple languages (seriously, try us!), and treats your safety like it's our grandmother's china collection.
              Oh, and we throw in some freebies because we're just nice like that!
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm h-full"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4"
                >
                  <Languages className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">Multilingual Magic</h3>
                <p className="text-gray-600">
                  English? Check. German? Ja! Spanish? ¡Sí! Japanese? はい! Plus French, Italian, and more.
                  We probably speak your language (and if not, we'll learn it before you arrive!).
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm h-full"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4"
                >
                  <Lock className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
                <p className="text-gray-600">
                  Licensed, insured, and more trustworthy than your GPS. Your safety is our obsession.
                  We're talking professional drivers, well-maintained vehicles, and zero sketchy shortcuts.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm h-full"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4"
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">Super Friendly Service</h3>
                <p className="text-gray-600">
                  We don't just drive you around - we become your Sri Lankan BFF! Expect dad jokes, local legends,
                  and enough friendliness to make your cheeks hurt from smiling.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm h-full"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4"
                >
                  <Gift className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">FREE Surprises!</h3>
                <p className="text-gray-600">
                  Complimentary water bottles, surprise stops at hidden gems, insider tips, and occasional treats.
                  Because who doesn't love free stuff? (We're still working on free elephants though 🐘).
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>



      {/* Our Vehicles Section */}
      <section id="vehicles" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Ride, Your Choice 🚗
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're a couple seeking romance, a family on vacation, or bringing the whole squad,
              we've got wheels that'll make your journey as comfortable as your own couch (but with better views!).
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle, index) => (
              <StaggerItem key={vehicle.id}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(0,0,0,0.2)" }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm h-full flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    {/*<motion.div*/}
                    {/*  initial={{ scale: 0, rotate: -180 }}*/}
                    {/*  whileInView={{ scale: 1, rotate: 0 }}*/}
                    {/*  transition={{ duration: 0.5, delay: index * 0.1 }}*/}
                    {/*  viewport={{ once: true }}*/}
                    {/*  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"*/}
                    {/*>*/}
                    {/*  Available Now*/}
                    {/*</motion.div>*/}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {vehicle.name}
                      </h3>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Car className="w-6 h-6 text-brand-600" />
                      </motion.div>
                    </div>
                    <p className="text-brand-600 font-medium mb-2">
                      {vehicle.type}
                    </p>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {vehicle.capacity}
                    </p>
                    <p className="text-gray-700 mb-4 flex-1">{vehicle.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Features:
                      </h4>
                      <ul className="space-y-1">
                        {vehicle.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection animation="scale" delay={0.3} className="text-center mt-12">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/94707009393?text=Hi! I'd like to know more about your vehicles and pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold text-lg shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book Your Vehicle on WhatsApp</span>
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-900 to-brand-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Hija Travels Difference
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We're not bragging, but... okay, maybe a little. Here's what makes us the best choice for your Sri Lankan adventure!
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <StaggerItem key={index}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(255,255,255,0.2)" }}
                    className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 transition-all"
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection animation="scale" delay={0.4} className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">🎁 Special Perks You'll Love</h3>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {[
                  {
                    emoji: "✨",
                    title: "Flexible Itinerary",
                    description: "Want to stay longer at a spot? No problem! This is YOUR trip.",
                  },
                  {
                    emoji: "📸",
                    title: "Free Photography",
                    description: "We'll take your photos so you're not stuck with selfies!",
                  },
                  {
                    emoji: "🗺️",
                    title: "Local Insider Tips",
                    description: "Best restaurants, shops, and spots tourists never find.",
                  },
                  {
                    emoji: "💝",
                    title: "24/7 Support",
                    description: "Questions at 2 AM? We got you! (But maybe wait till morning 😊)",
                  },
                ].map((perk, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-3"
                    >
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 + index }}
                        className="text-2xl"
                      >
                        {perk.emoji}
                      </motion.span>
                      <div>
                        <h4 className="font-semibold mb-1">{perk.title}</h4>
                        <p className="text-blue-100 text-sm">{perk.description}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Don't Just Take Our Word For It! 💬
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from real travelers who actually had fun with us
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={testimonial.id}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic flex-1">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 mb-1">
                      {testimonial.country}
                    </p>
                    {/*<p className="text-sm text-brand-600 font-medium">*/}
                    {/*  {testimonial.trip}*/}
                    {/*</p>*/}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/*<AnimatedSection animation="bounce" delay={0.3} className="mt-12 text-center bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">*/}
          {/*  <p className="text-lg text-gray-700 mb-2">*/}
          {/*    ⭐⭐⭐⭐⭐ <span className="font-bold">5.0 Average Rating</span> from 200+ Happy Travelers!*/}
          {/*  </p>*/}
          {/*  <p className="text-gray-600">*/}
          {/*    Still not convinced? That's okay, we'll win you over with our charm (and excellent driving skills)!*/}
          {/*  </p>*/}
          {/*</AnimatedSection>*/}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoGallery images={galleryImages} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="scale" className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/gallery/Vehicle/vehicle-1.jpeg"
                      alt="Toyota Alphard Luxury Vehicle"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  >
                    Ready for the Adventure of a Lifetime? 🌟
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-600 mb-6"
                  >
                    Let's plan your perfect Sri Lankan journey together! Drop us a message on WhatsApp
                    and let's turn your travel dreams into reality (with some laughs along the way!).
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      href="https://wa.me/94707009393?text=Hi Hija Travels! I'm interested in exploring Sri Lanka. Can you help me plan my trip?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold text-lg shadow-lg"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span>Chat on WhatsApp</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="tel:+94707009393"
                      className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-all font-semibold text-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Us: +94 70 700 9393</span>
                    </motion.a>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-500 mt-4 text-center"
                  >
                    📱 We reply faster than you can say "Sri Lanka"! Usually within minutes.
                  </motion.p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
