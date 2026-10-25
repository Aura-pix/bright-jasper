import { getAllBlogPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";

export const SITE_URL = "https://brightjasper.com";

/**
 * Returns static core marketing and informational pages.
 */
export function getStaticPages() {
  return [
    {
      url: `${SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/services/agencies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${SITE_URL}/services/documentation`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${SITE_URL}/writing-samples`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/writing-samples/technical`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${SITE_URL}/writing-samples/seo-growth`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${SITE_URL}/writing-samples/thought-leadership`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/credentials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}

/**
 * Returns articles/blog post pages.
 */
export function getArticlesPages() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}

/**
 * Returns project and case study pages.
 */
export function getProjectsPages() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: project.date ? new Date(project.date) : new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));
}

/**
 * Returns the list of sub-sitemaps for the sitemap index.
 */
export function getSitemapIndex() {
  const articles = getArticlesPages();
  const projects = getProjectsPages();

  const latestArticleDate =
    articles.length > 0 && articles[0].lastModified
      ? articles[0].lastModified
      : new Date();

  const latestProjectDate =
    projects.length > 0 && projects[0].lastModified
      ? projects[0].lastModified
      : new Date();

  return [
    {
      url: `${SITE_URL}/sitemap-pages.xml`,
      lastModified: latestArticleDate,
    },
    {
      url: `${SITE_URL}/sitemap-articles.xml`,
      lastModified: latestArticleDate,
    },
    {
      url: `${SITE_URL}/sitemap-projects.xml`,
      lastModified: latestProjectDate,
    },
  ];
}

/**
 * Renders an XML string conforming to sitemaps.org urlset schema.
 */
export function renderUrlset(entries) {
  const items = entries
    .map((entry) => {
      const parts = [`    <loc>${entry.url}</loc>`];
      if (entry.lastModified) {
        const iso =
          entry.lastModified instanceof Date
            ? entry.lastModified.toISOString()
            : new Date(entry.lastModified).toISOString();
        parts.push(`    <lastmod>${iso}</lastmod>`);
      }
      if (entry.changeFrequency) {
        parts.push(`    <changefreq>${entry.changeFrequency}</changefreq>`);
      }
      if (entry.priority !== undefined && entry.priority !== null) {
        parts.push(`    <priority>${entry.priority}</priority>`);
      }
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

/**
 * Renders an XML string conforming to sitemaps.org sitemapindex schema.
 */
export function renderSitemapIndex(sitemaps) {
  const items = sitemaps
    .map((sitemap) => {
      const parts = [`    <loc>${sitemap.url}</loc>`];
      if (sitemap.lastModified) {
        const iso =
          sitemap.lastModified instanceof Date
            ? sitemap.lastModified.toISOString()
            : new Date(sitemap.lastModified).toISOString();
        parts.push(`    <lastmod>${iso}</lastmod>`);
      }
      return `  <sitemap>\n${parts.join("\n")}\n  </sitemap>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

/**
 * Reusable HTTP Response helper for XML payloads.
 */
export function xmlResponse(xmlContent) {
  return new Response(xmlContent, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
