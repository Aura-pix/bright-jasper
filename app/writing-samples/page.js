import Link from "next/link";

export const metadata = {
  title: "Writing samples — Bright Jasper",
  description:
    "Technical writing, SEO writing, persuasive writing, and product copy samples from Bright Jasper.",
  alternates: {
    canonical: "https://brightjasper.com/writing-samples",
  },
};

export default function WritingSamplesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Writing samples",
    description:
      "Technical writing and persuasive writing samples from Bright Jasper.",
    url: "https://brightjasper.com/writing-samples",
    hasPart: [
      {
        "@type": "CollectionPage",
        name: "Technical writing samples",
        url: "https://brightjasper.com/writing-samples/technical",
      },
      {
        "@type": "CollectionPage",
        name: "Persuasive writing samples",
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
          I write for technical audiences and non-technical audiences. The work
          changes with the goal, but the standard stays the same: clear,
          accurate, useful writing.
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
              Persuasive Writing
            </h2>
            <p className="text-[14px] text-muted leading-relaxed">
              Landing pages, product messaging, SEO articles, and
              conversion-focused copy that explains value and moves people to
              action.
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
