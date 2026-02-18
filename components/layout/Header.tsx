"use client";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src="/hija_trevals_logol.png"
              alt="Hija Travels"
              className="h-16 md:h-24 w-auto"
            />
          </Link>
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+94707009393"
              className="flex items-center space-x-2 px-4 py-2 text-brand-700 hover:text-brand-900 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+94 70 700 9393</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/94707009393?text=Hi! I'm interested in exploring Sri Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </motion.a>
          </div>
          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <motion.a
              whileTap={{ scale: 0.9 }}
              href="tel:+94707009393"
              className="p-2 text-brand-700 hover:text-brand-900 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/94707009393?text=Hi! I'm interested in exploring Sri Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Chat</span>
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
