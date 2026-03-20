import type { MetadataRoute } from "next";

// Not that crawlers are being used ethically for this to work, but nice to have in place for when they are
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      disallow: ["/api"],
      userAgent: "*",
    },
    sitemap: [process.env.NEXT_PUBLIC_SITE_URL!, "sitemap.xml"].join("/"),
  };
}
