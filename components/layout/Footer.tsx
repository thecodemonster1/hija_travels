import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hija Travels</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              Your trusted Sri Lankan tour guide offering personalized,
              authentic travel experiences. We speak your language, know all the hidden gems,
              and treat every guest like family!
            </p>
            <p className="text-blue-100 text-sm">
              🌟 10+ Years Experience<br />
              🚗 3 Vehicle Options<br />
              🌍 Multilingual Guides<br />
              ✨ 100% Safe & Insured
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/94707009393?text=Hi! I'm interested in exploring Sri Lanka with Hija Travels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors text-sm font-medium"
                >
                  WhatsApp: +94 70 700 9393<br />
                  <span className="text-xs text-green-300">✓ Fastest way to reach us!</span>
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+94707009393"
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  +94 70 700 9393
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@hijatravels.com"
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  info@hijatravels.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm">
                  Colombo, Sri Lanka
                </span>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Our Adventures</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-blue-100 mb-3">
                Ready to explore Sri Lanka? Let's chat!
              </p>
              <a
                href="https://wa.me/94707009393?text=Hi! I want to plan my Sri Lanka adventure"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Planning</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-blue-100 text-sm flex items-center justify-center gap-2">
            © {currentYear} Hija Travels. Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> in Sri Lanka 🇱🇰
          </p>
          <p className="text-blue-200 text-xs mt-2">
            Your gateway to unforgettable Sri Lankan adventures! ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
