import Link from "next/link";
import HireMeButton from "@/components/HireMeButton";
import { getAllSamples } from "@/lib/posts";

export const metadata = {
  title: "Technical writing samples | Bright Jasper",
  description:
    "Developer docs, API references, protocol explainers, and technical writing samples for product teams.",
  alternates: {
    canonical: "https://brightjasper.com/writing-samples/technical",
  },
};

const CATEGORIES = [
  "Technical Documentations",
  "User Guides",
  "Technical Explainers",
  "Tutorials",
  "Web3",
  "Company Breakdowns",
];

export default function TechnicalWritingSamplesPage() {
  const samples = getAllSamples().filter((s) => s.track === "technical");

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-3">
        Technical writing samples
      </h1>
      <p className="text-[15px] text-muted mb-10 max-w-lg">
        Documentation, developer guides, API references, protocol explainers,
        and research pieces written for engineers who need accuracy.
      </p>

      {samples.length === 0 ? (
        <p className="text-[14px] text-muted">
          No technical samples yet. Check the{" "}
          <Link href="/blog" className="text-accent hover:underline">
            blog
          </Link>{" "}
          or come back soon.
        </p>
      ) : (
        CATEGORIES.map((category) => {
          const items = samples.filter((s) => s.sampleCategory === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-10">
              <h2 className="text-[16px] font-medium text-ink mb-4">
                {category}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((sample) => (
                  <Link
                    key={sample.slug}
                    href={`/blog/${sample.slug}`}
                    className="block p-4 rounded-lg border border-ink/10 hover:border-accent"
                  >
                    <p className="text-[15px] font-medium text-ink mb-1">
                      {sample.title}
                    </p>
                    {sample.excerpt && (
                      <p className="text-[13px] text-muted leading-relaxed">
                        {sample.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          );
        })
      )}

      <div className="mt-14 text-center">
        <p className="mb-4 text-[15px] text-ink/90">
          Need docs, guides, API explanations, or a clearer developer story for
          your product? Let&apos;s talk.
        </p>
        <HireMeButton />
      </div>
    </div>
  );
}
