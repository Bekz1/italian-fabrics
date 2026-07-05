import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ItalianFabrics.uz — Premium Italian Textiles",
    short_name: "ItalianFabrics",
    description: "Premium Italian fabrics imported and distributed in Uzbekistan.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#C9A962",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
