const SITE_URL = "https://brightjasper.com";

export async function GET() {
  const robotsTxt = `User-Agent: *
Allow: /

Content-Signal: ai-train=no, search=yes, ai-input=yes

Sitemap: ${SITE_URL}/sitemap.xml
Host: ${SITE_URL}
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
