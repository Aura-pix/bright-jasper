import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Writing samples | Bright Jasper",
  description:
    "Writing samples from Bright Jasper for technical documentation, SEO and growth, and research-driven thought leadership.",
  path: "/writing-samples",
  keywords: [
    "SEO writing samples",
    "technical writing samples",
    "SEO and growth writing samples",
    "thought leadership writing samples",
    "developer documentation samples",
  ],
});

export default function WritingSamplesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Writing samples",
    description:
      "Writing samples from Bright Jasper for technical documentation, SEO and growth, and research-driven thought leadership.",
    url: "https://brightjasper.com/writing-samples",
    hasPart: [
      {
        "@type": "CollectionPage",
        name: "Technical writing samples",
        url: "https://brightjasper.com/writing-samples/technical",
      },
      {
        "@type": "CollectionPage",
        name: "SEO & Growth writing samples",
        url: "https://brightjasper.com/writing-samples/seo-growth",
      },
      {
        "@type": "CollectionPage",
        name: "Thought Leadership writing samples",
        url: "https://brightjasper.com/writing-samples/thought-leadership",
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
          Looking for a writer who can make complex ideas clear, help the right
          people find your work, or shape a stronger point of view? Browse
          examples by the kind of writing you need.
        </p>

        <div className="grid gap-6">
          <Link
            href="/writing-samples/technical"
            className="block p-6 rounded-lg border border-ink/10 hover:border-accent transition-colors"
          >
            <h2 className="text-[18px] font-medium text-ink mb-2">
              Technical Writing
            </h2>
            <p className="text-[14px] text-muted leading-relaxed">
              See how I document APIs, software architecture, developer
              workflows, and technical products for engineers and users.
            </p>
          </Link>

          <Link
            href="/writing-samples/seo-growth"
            className="block p-6 rounded-lg border border-ink/10 hover:border-accent transition-colors"
          >
            <h2 className="text-[18px] font-medium text-ink mb-2">
              SEO &amp; Growth
            </h2>
            <p className="text-[14px] text-muted leading-relaxed">
              Review SEO articles, technical audits, ranking experiments, and
              case studies focused on organic growth.
            </p>
          </Link>

          <Link
            href="/writing-samples/thought-leadership"
            className="block p-6 rounded-lg border border-ink/10 hover:border-accent transition-colors"
          >
            <h2 className="text-[18px] font-medium text-ink mb-2">
              Thought Leadership
            </h2>
            <p className="text-[14px] text-muted leading-relaxed">
              Read research-driven deep dives on macroeconomics, Web3 protocols,
              AI infrastructure, and computer science frameworks.
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
