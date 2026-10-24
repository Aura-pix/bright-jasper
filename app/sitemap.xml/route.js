import { getSitemapIndex, renderSitemapIndex, xmlResponse } from "@/lib/sitemaps";

export const dynamic = "force-static";

export async function GET() {
  const sitemaps = getSitemapIndex();
  const xml = renderSitemapIndex(sitemaps);
  return xmlResponse(xml);
}
