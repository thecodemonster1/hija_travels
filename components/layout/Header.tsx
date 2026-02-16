"use client";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/hija_trevals_logol.png"
              alt="Hija Travels"
              className="h-16 md:h-24 w-auto"
            />
          </Link>
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+94707009393"
              className="flex items-center space-x-2 px-4 py-2 text-brand-700 hover:text-brand-900 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+94 70 700 9393</span>
            </a>
            <a
              href="https://wa.me/94707009393?text=Hi! I'm interested in exploring Sri Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="tel:+94707009393"
              className="p-2 text-brand-700 hover:text-brand-900 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/94707009393?text=Hi! I'm interested in exploring Sri Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Chat</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
