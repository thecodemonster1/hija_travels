"use client";
import { motion } from "framer-motion";

export default function ImageSkeleton() {
  return (
    <motion.div
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
    />
  );
}

