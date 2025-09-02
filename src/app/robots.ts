import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/*",
          "/_next/*",
          "/*.json$",
          "/cdn-cgi/*",
          "/.env*",
          "/.git*",
        ]
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/*",
          "/_next/*",
        ]
      },
    ],
    sitemap: "https://www.patrickyu.work/sitemap.xml",
    host: "https://www.patrickyu.work",
  };
}
