import { getProjectsPages, renderUrlset, xmlResponse } from "@/lib/sitemaps";

export const dynamic = "force-static";

export async function GET() {
  const projects = getProjectsPages();
  const xml = renderUrlset(projects);
  return xmlResponse(xml);
}
