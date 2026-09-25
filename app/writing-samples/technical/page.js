import Link from "next/link";
import HireMeButton from "@/components/HireMeButton";
import { getAllSamples } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Technical writing samples | Bright Jasper",
  description:
    "Developer docs, API references, protocol explainers, and technical writing samples by Bright Jasper for product teams.",
  path: "/writing-samples/technical",
  keywords: [
    "technical writing samples",
    "developer documentation writer",
    "API documentation",
    "technical documentation",
    "protocol explainers",
    "web3 technical writer",
  ],
});

const CATEGORIES = [
  "Technical Documentations",
  "User Guides",
  "Technical Explainers",
  "Tutorials",
  "Web3",
];

export default function TechnicalWritingSamplesPage() {
  const samples = getAllSamples().filter((s) => s.track === "technical");
  const projects = getAllProjects().filter((project) =>
    project.tracks.includes("technical"),
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-3">
        Technical writing samples
      </h1>
      <p className="text-[15px] text-muted mb-10 max-w-lg">
        Clear, objective documentation for products and systems: API references,
        developer and user guides, tutorials, and explainers.
      </p>

      <section aria-labelledby="articles-heading">
        <h2
          id="articles-heading"
          className="text-[20px] font-medium text-ink mb-4"
        >
          Articles and guides
        </h2>
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
                      <p className="text-[12px] text-accent mt-3">Read the article</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>

      {projects.length > 0 && (
        <section aria-labelledby="projects-heading" className="mt-10">
          <h2
            id="projects-heading"
            className="text-[20px] font-medium text-ink mb-4"
          >
            Projects and case studies
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block p-4 rounded-lg border border-ink/10 hover:border-accent"
              >
                <p className="text-[15px] font-medium text-ink mb-1">
                  {project.title}
                </p>
                <p className="text-[13px] text-muted leading-relaxed">
                  {project.excerpt}
                </p>
                <p className="text-[12px] text-accent mt-3">
                  Read the case study
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-14 text-center">
        <p className="mb-4 text-[15px] text-ink/90">
          Need docs, guides, API explanations, or a clearer developer story for
          your product? Let&apos;s talk.
        </p>
        <HireMeButton />
      </div>

      <div className="mt-8 flex justify-center gap-4 text-[14px]">
        <Link href="/writing-samples" className="text-accent hover:underline">
          All writing samples
        </Link>
        <Link href="/blog" className="text-accent hover:underline">
          Browse all writing
        </Link>
      </div>
    </div>
  );
}
