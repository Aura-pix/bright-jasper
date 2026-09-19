import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Subscribe | Bright Jasper",
  description:
    "Get Bright Jasper's weekly thoughts, useful links, and a random fact or quiz every Tuesday.",
  path: "/subscribe",
});

export default function SubscribeLayout({ children }) {
  return children;
}
