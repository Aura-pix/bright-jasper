const SITE_URL = "https://brightjasper.com";

export const dynamic = "force-static";

export async function GET() {
  const robotsTxt = `User-Agent: *
Allow: /

Content-Signal: ai-train=no, search=yes, ai-input=yes

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-pages.xml
Sitemap: ${SITE_URL}/sitemap-articles.xml
Sitemap: ${SITE_URL}/sitemap-projects.xml
Host: ${SITE_URL}
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
