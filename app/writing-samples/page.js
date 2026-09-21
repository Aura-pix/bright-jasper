import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Writing samples | Bright Jasper",
  description:
    "SEO content, articles, product copy, research, and technical writing samples from Bright Jasper for clear communication across audiences.",
  path: "/writing-samples",
  keywords: [
    "SEO writing samples",
    "technical writing samples",
    "content writing portfolio",
    "product copywriting samples",
    "developer documentation samples",
    "web3 writing samples",
  ],
});

export default function WritingSamplesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Writing samples",
    description:
      "SEO content, product copy, research, and technical writing samples from Bright Jasper.",
    url: "https://brightjasper.com/writing-samples",
    hasPart: [
      {
        "@type": "CollectionPage",
        name: "Technical writing samples",
        url: "https://brightjasper.com/writing-samples/technical",
      },
      {
        "@type": "CollectionPage",
        name: "SEO writing & process",
        url: "https://brightjasper.com/writing-samples/persuasive",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-[26px] font-medium text-ink mb-3">
          Writing samples
        </h1>
        <p className="text-[15px] text-muted mb-10 max-w-lg">
          SEO content, product copy, research, and technical writing for
          technical and non-technical audiences. Here are some examples of my
          work, organized by type of writing.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <Link
            href="/writing-samples/technical"
            className="block p-6 rounded-lg border border-ink/10 hover:border-accent transition-colors"
          >
            <h2 className="text-[18px] font-medium text-ink mb-2">
              Technical Writing
            </h2>
            <p className="text-[14px] text-muted leading-relaxed">
              Developer docs, API references, protocol explainers, tutorials,
              and research-backed technical content for engineers and technical
              decision-makers.
            </p>
          </Link>

          <Link
            href="/writing-samples/persuasive"
            className="block p-6 rounded-lg border border-ink/10 hover:border-accent transition-colors"
          >
            <h2 className="text-[18px] font-medium text-ink mb-2">
              SEO Writing
            </h2>
            <p className="text-[14px] text-muted leading-relaxed">
              SEO articles, audits broken down, and practical how-tos on fixing
              what is actually wrong with a site.
            </p>
          </Link>
        </div>

        <p className="mt-8 text-[14px] text-muted">
          Or browse everything chronologically in the{" "}
          <Link href="/blog" className="text-accent hover:underline">
            full blog
          </Link>
          .
        </p>
      </div>
    </>
  );
}
