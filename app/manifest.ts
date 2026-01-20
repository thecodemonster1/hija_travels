import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hija Travels - Premium Sri Lanka Tours",
    short_name: "Hija Travels",
    description:
      "Experience authentic Sri Lanka with a professional local guide. Personalized tours for individuals and families.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1B468F",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
