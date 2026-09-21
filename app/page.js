import Link from "next/link";
import Image from "next/image";
import PostCard from "@/components/PostCard";
import HireMeButton from "@/components/HireMeButton";
import { getAllBlogPosts } from "@/lib/posts";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Bright Jasper | SEO, GEO, AEO, content and technical writing",
  description:
    "Bright Jasper does SEO, GEO, AEO, and content writing for brands that want to be found by search engines and AI, plus technical writing for web2 and web3 teams.",
  path: "",
  keywords: [
    "SEO specialist",
    "GEO specialist",
    "AEO specialist",
    "content writer",
    "technical writer",
    "technical SEO",
    "SEO content writing",
    "web3 technical writing",
  ],
});

export default function HomePage() {
  const recentPosts = getAllBlogPosts().slice(0, 3);
  const faqItems = [
    {
      question: "What does Bright Jasper actually do?",
      answer:
        "SEO, AEO, and GEO optimization and content writing for brands, plus technical writing for web2 and web3 teams. Work spans keyword research, on-page and technical SEO fixes, developer documentation, research-backed articles, and editorial content.",
    },
    {
      question: "Does the SEO work include technical fixes, or just content?",
      answer:
        "Both. That includes metadata, schema markup, canonical and redirect issues, Open Graph setup, and backlink strategy, tracked through Ahrefs, Google Search Console, and Google Analytics - not just keyword-targeted writing.",
    },
    {
      question:
        "Can Bright Jasper write about technical or blockchain products?",
      answer:
        "Yes. Work covers software, developer tools, infrastructure, blockchain, and web3 products, backed by a software engineering background and ongoing Computer Science study.",
    },
    {
      question: "Who is the writing for?",
      answer:
        "Developers, technical decision-makers, product users, and broader audiences, depending on the piece. The goal is accuracy without losing the reader.",
    },
    {
      question: "What makes Bright Jasper's process technical?",
      answer:
        "Source verification, version-controlled docs-as-code workflows, and familiarity with the systems being written about. Claims are checked against primary sources before publication.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section
        className="px-6 pt-16 pb-14 text-center"
        style={{
          background: "linear-gradient(160deg, #E6F1FB 0%, #ffffff 75%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-[15px] text-muted mb-2">
            SEO/GEO/AEO specialist • Content Writer • Technical Writer
            <span className="mx-2">•</span>
            Web2 and Web3
          </p>
          <h1 className="text-[28px] sm:text-[32px] font-medium text-ink mb-6 leading-tight">
            I help brands get found by search engines, and AI.
          </h1>

          <Image
            src="/illustrations/book-writer.svg"
            alt="Illustration of a person writing at a desk"
            width={200}
            height={167}
            className="mx-auto mb-6"
            priority
          />

          <p className="text-[16px] text-ink/90 leading-relaxed mb-8 max-w-lg mx-auto">
            I fix the technical groundwork most sites get wrong, then write the
            content that earns visibility once it&apos;s fixable. That means SEO
            audits and on-page fixes, developer docs and protocol explainers,
            research-backed articles, and everything in between - for teams
            building in web2 and web3.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects/seo-geo-case-study"
              className="text-[14px] px-5 py-2.5 rounded-full bg-accent text-white hover:opacity-90"
            >
              See the case study
            </Link>
            <Link
              href="/writing-samples"
              className="text-[14px] px-5 py-2.5 rounded-full border border-ink/15 text-ink hover:border-accent hover:text-accent"
            >
              View writing samples
            </Link>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-[20px] font-medium text-ink mb-6">
          What to expect
        </h2>
        <ul className="grid gap-3 text-[15px] text-ink/90 leading-relaxed sm:grid-cols-2">
          {[
            "Keyword research and content strategy across search, AEO, and GEO",
            "On-page SEO: metadata, headers, internal linking, and content structure",
            "Technical SEO: schema markup, structured data, canonical fixes, redirect audits, and Open Graph setup",
            "Off-page SEO: backlink strategy, outreach, and domain authority building",
            "Analytics and reporting via Google Analytics, Search Console, and Tag Manager",
            "Blog posts, long-form articles, SaaS content, and financial and web3 content",
            "Technical documentation and product copy",
            "Content built for how AI models and answer engines surface information, not just how Google ranks it",
            "Managed in Sanity CMS and built on Git-based workflows",
            "Collaboration with dev and content teams to ship fixes, not just flag them",
          ].map((item) => (
            <li key={item} className="border-l-2 border-accent/40 pl-4">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-[20px] font-medium text-ink mb-4">Skills</h2>
            <p className="text-[15px] text-ink/90 leading-relaxed">
              SEO · GEO · AEO · Keyword Research · On-Page SEO · Off-Page SEO ·
              SEO Content Writing · Content Optimization · Technical Writing
            </p>
          </div>
          <div>
            <h2 className="text-[20px] font-medium text-ink mb-4">Stack</h2>
            <p className="text-[15px] text-ink/90 leading-relaxed">
              Ahrefs · Screamingfrog · Ubersuggest · SEMrush · Google Analytics
              · Google Search Console · Google Tag Manager · Microsoft Clarity ·
              Sanity CMS · Google Docs · Markdown · HTML/CSS/JS
            </p>
          </div>
        </div>

        <p className="mt-8 text-[14px] text-muted">
          Based in UTC+1, open to remote and contract roles.
        </p>
      </section>

      {/* Recent writing */}
      {recentPosts.length > 0 && (
        <section
          className="px-6 py-14"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #F7FAFD 100%)",
          }}
        ></section>
      )}

      {/* Proof of work */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <p className="text-[13px] uppercase tracking-[0.12em] text-muted mb-3">
          Recent proof of work
        </p>
        <p className="text-[18px] text-ink leading-relaxed max-w-2xl">
          I took brightjasper.com from unindexed and 33% Ahrefs health score to
          a 100% Ahrefs health score, then to a Google AI Overview citation - in
          72 hours.
        </p>
        <Link
          href="/projects/seo-geo-case-study"
          className="inline-block mt-4 text-[14px] text-accent hover:underline"
        >
          Read the case study →
        </Link>
      </section>

      {/* If you're building something */}
      <section className="max-w-3xl mx-auto px-6 py-14 text-center">
        <h2 className="text-[20px] font-medium text-ink mb-4">
          Need a site that&apos;s actually found, and writing that makes sense
          once people get there?
        </h2>
        <p className="text-[15px] text-ink/90 leading-relaxed max-w-md mx-auto mb-6">
          I can help with SEO audits and fixes, technical docs, and editorial or
          product writing for web2 and web3 products.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <HireMeButton />
          <Link
            href="/about"
            className="text-[14px] px-5 py-2.5 rounded-full border border-ink/15 text-ink hover:border-accent hover:text-accent"
          >
            See how I work
          </Link>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-[#F7FAFD]">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <h2 className="text-[20px] font-medium text-ink mb-6">
            Common questions
          </h2>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group py-4"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[16px] font-medium text-ink">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-[20px] font-normal text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[15px] text-ink/90 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
