import type { MetadataRoute } from "next"

const BASE_URL = "https://moneyventureresearch.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep transactional/utility routes out of the index — they add no
        // search value and can dilute crawl budget.
        disallow: ["/payment"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
