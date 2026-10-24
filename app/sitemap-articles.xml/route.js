import { getArticlesPages, renderUrlset, xmlResponse } from "@/lib/sitemaps";

export const dynamic = "force-static";

export async function GET() {
  const articles = getArticlesPages();
  const xml = renderUrlset(articles);
  return xmlResponse(xml);
}
