"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="text-center px-6">
        <img
          src="/hija_trevals_logol.png"
          alt="Hija Travels"
          className="h-28 sm:h-32 md:h-40 w-auto mx-auto"
        />
        <div className="mt-4 text-sm text-gray-600 motion-safe:animate-pulse">
          Preparing your journey
        </div>
      </div>
    </div>
  );
}
