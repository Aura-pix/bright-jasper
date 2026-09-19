import { getAllBlogPosts } from "@/lib/posts";

const SITE_URL = "https://brightjasper.com";

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function GET() {
  const posts = getAllBlogPosts();

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      ${post.date ? `<pubDate>${new Date(post.date).toUTCString()}</pubDate>` : ""}
      <description>${escapeXml(post.excerpt || "")}</description>
    </item>`,
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Bright Jasper</title>
    <link>${SITE_URL}</link>
    <description>SEO content, articles, explainers, research, product writing, and web3 perspectives from Bright Jasper.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
