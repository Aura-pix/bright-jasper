import { getStaticPages, renderUrlset, xmlResponse } from "@/lib/sitemaps";

export const dynamic = "force-static";

export async function GET() {
  const pages = getStaticPages();
  const xml = renderUrlset(pages);
  return xmlResponse(xml);
}
