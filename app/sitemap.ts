import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zwel.vercel.app",
      lastModified: new Date(),
    },
  ];
}
