import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title:
    "Documentation engineering for AI, web3 and developer tools | Bright Jasper",
  description:
    "Developer docs, user guides and API references written by someone who builds. Markdown, Git, OpenAPI, structured so users and AI assistants both get it right.",
  path: "/services/documentation",
  keywords: [
    "documentation engineering",
    "web3 developer documentation",
    "API reference documentation writer",
    "OpenAPI spec documentation",
    "developer documentation writer",
    "technical documentation service",
    "docs as code contractor",
    "AI documentation writer",
    "user guide technical writer",
    "information architecture documentation",
  ],
});

export default function DocumentationServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://brightjasper.com/services/documentation#service",
    name: "Documentation Engineering for AI, Web3 and Developer Tools",
    serviceType: "Technical Documentation and API Writing",
    provider: {
      "@type": "Person",
      name: "Bright Jasper",
      url: "https://brightjasper.com/about",
    },
    description:
      "Developer docs, user guides and API references written by someone who builds. Markdown, Git, OpenAPI, structured so users and AI assistants both get it right.",
    url: "https://brightjasper.com/services/documentation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Documentation Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Documentation and IA Review",
            description:
              "Comprehensive review of where docs break, missing guides, and IA friction, plus three worst pages rewritten to set the standard.",
          },
          price: "400",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Docs Sprint",
            description:
              "User guides, developer guides, tutorials, and API walkthroughs written in Markdown and version-controlled.",
          },
          price: "300",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API Reference from an OpenAPI Spec",
            description:
              "Built from your spec and tested against real responses with working code examples committed directly to your repository.",
          },
          price: "800",
          priceCurrency: "USD",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you deliver technical documentation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I work directly in your repository and your branch via Git and pull requests, not in a disconnected Google Doc. Documentation is formatted in Markdown or MDX with version control.",
        },
      },
      {
        "@type": "Question",
        name: "What is the fixed-date guarantee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All projects run on a fixed scope and fixed delivery date. If I miss the agreed date, the price automatically drops 20%.",
        },
      },
      {
        "@type": "Question",
        name: "How are API references verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "API endpoints are tested against live responses, validating authentication, error codes, edge cases, and rate limits rather than relying solely on automated scrapers.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://brightjasper.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://brightjasper.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Documentation",
        item: "https://brightjasper.com/services/documentation",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Breadcrumb back link */}
        <div className="mb-6">
          <Link
            href="/services"
            className="text-[13px] text-muted hover:text-accent flex items-center gap-1 transition-colors"
          >
            ← All services
          </Link>
        </div>

        {/* Hero */}
        <header className="mb-12">
          <span className="inline-block text-[12px] font-medium uppercase tracking-[0.12em] text-accent mb-3">
            Documentation Engineering · Docs-as-Code
          </span>
          <h1 className="text-[26px] sm:text-[30px] font-medium text-ink mb-4 leading-tight">
            Documentation your users finish and your engineers respect.
          </h1>
          <p className="text-[15px] text-ink/90 leading-relaxed max-w-2xl">
            Developer docs, user guides and API references for AI, web3 and
            developer tools. Written in Markdown, kept in Git, and structured so
            both the reader and the model summarising it for them get it right.
          </p>

          {/* Guarantee banner */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 text-[14px] text-ink">
            <span
              className="flex h-2 w-2 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span>
              <strong>Fixed scope, fixed date:</strong> If I miss the delivery
              date, the price drops 20%.
            </span>
          </div>
        </header>

        {/* Who this is for / Who this isn't for */}
        <section className="mb-14 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-ink/10 bg-white p-6">
            <h2 className="text-[16px] font-medium text-ink mb-3 flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> Who this is
              for
            </h2>
            <ul className="space-y-2.5 text-[14px] text-ink/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>
                  Solo founders and lean teams where nobody owns documentation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>
                  Web3 and AI products where the docs are part of the core
                  product.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>
                  Teams whose support inbox keeps answering the same recurring
                  questions the docs should already solve.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-ink/10 bg-[#FAFAFA] p-6">
            <h2 className="text-[16px] font-medium text-ink mb-3 flex items-center gap-2">
              <span className="text-red-500 font-bold">✕</span> Who this
              isn&apos;t for
            </h2>
            <ul className="space-y-2.5 text-[14px] text-ink/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>
                  Anyone wanting thirty generic SEO blog posts a month.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>
                  Marketing copy dressed up as technical documentation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>
                  Teams unwilling to give repository or staging access.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* The 3 Core Offerings */}
        <section className="mb-14">
          <div className="mb-8">
            <p className="text-[13px] uppercase tracking-[0.12em] text-muted mb-1">
              Fixed-Scope Offerings
            </p>
            <h2 className="text-[22px] font-medium text-ink">
              Choose your documentation package
            </h2>
          </div>

          <div className="space-y-6">
            {/* Package 1 */}
            <div className="rounded-xl border border-ink/10 bg-white p-6 sm:p-7 hover:border-accent transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-[20px] font-medium text-ink">
                  Documentation &amp; IA Review
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[22px] font-semibold text-ink">
                    $400
                  </span>
                  <span className="text-[13px] text-muted">
                    · 5 business days
                  </span>
                </div>
              </div>

              <p className="text-[13px] text-muted font-medium mb-4">
                Paid up front · Actionable roadmap with live rewritten pages.
              </p>

              <div className="space-y-3 text-[14px] text-ink/90 leading-relaxed mb-6">
                <p>
                  A complete diagnostic of where the docs break, what a user
                  can&apos;t find, what&apos;s out of date, and what&apos;s
                  missing entirely.
                </p>
                <p>
                  Prioritized by onboarding friction, with the{" "}
                  <strong>three worst pages rewritten</strong> so you can see
                  the standard instead of just reading critique.
                </p>
                <p className="text-[13px] text-muted">
                  See how an audit works in practice:{" "}
                  <Link
                    href="/projects/startup-documentation-audit"
                    className="text-accent underline font-medium"
                  >
                    Nexus 9 Documentation Audit Sample →
                  </Link>
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="text-[12px] text-muted">
                  Turnaround: 5 business days
                </span>
                <a
                  href="mailto:hello@brightjasper.com?subject=Documentation%20%26%20IA%20Review"
                  className="text-[13px] px-4 py-2 rounded-full bg-accent text-white hover:opacity-90 font-medium"
                >
                  Book IA review →
                </a>
              </div>
            </div>

            {/* Package 2 */}
            <div className="rounded-xl border border-ink/10 bg-white p-6 sm:p-7 hover:border-accent transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-[20px] font-medium text-ink">
                  Docs Sprint
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[22px] font-semibold text-ink">
                    $300 / piece{" "}
                    <span className="text-[15px] font-normal text-muted">
                      (3 for $750)
                    </span>
                  </span>
                </div>
              </div>

              <p className="text-[13px] text-muted font-medium mb-4">
                Single pieces paid on order · 3-pack split 50% up front and 50%
                on last delivery
              </p>

              <div className="space-y-3 text-[14px] text-ink/90 leading-relaxed mb-6">
                <p>
                  User guides, developer guides, tutorials, and API
                  walkthroughs.
                </p>
                <p>
                  Markdown, version-controlled in your repo. Structure chosen so
                  a page is as easy to quote as it is to read, with tested code
                  examples and clear callouts.
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="text-[12px] text-muted">
                  3 business days per piece
                </span>
                <a
                  href="mailto:hello@brightjasper.com?subject=Docs%20Sprint%20Inquiry"
                  className="text-[13px] px-4 py-2 rounded-full bg-accent text-white hover:opacity-90 font-medium"
                >
                  Start a docs sprint →
                </a>
              </div>
            </div>

            {/* Package 3 */}
            <div className="rounded-xl border-2 border-accent bg-white p-6 sm:p-7 relative shadow-sm">
              <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-0.5 text-[11px] font-medium uppercase tracking-wider text-white">
                Engineering-Grade
              </span>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-[20px] font-medium text-ink">
                  API Reference from an OpenAPI Spec
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[22px] font-semibold text-ink">
                    $800
                  </span>
                  <span className="text-[13px] text-muted">
                    · 10 business days
                  </span>
                </div>
              </div>

              <p className="text-[13px] text-muted font-medium mb-4">
                50% up front, 50% on delivery · Committed directly to your repo
              </p>

              <div className="space-y-3 text-[14px] text-ink/90 leading-relaxed mb-6">
                <p>
                  Built from your spec and{" "}
                  <strong>tested against real responses</strong>, not just
                  generated and shipped without running.
                </p>
                <p>
                  Auth mechanisms, error schemas, rate limits, and working
                  copy-pasteable examples in the languages your users actually
                  write in (JS/TS, Python, cURL).
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="text-[12px] text-muted">
                  Turnaround: 10 business days
                </span>
                <a
                  href="mailto:hello@brightjasper.com?subject=OpenAPI%20Reference%20Project"
                  className="text-[13px] px-4 py-2 rounded-full bg-accent text-white hover:opacity-90 font-medium"
                >
                  Book API reference →
                </a>
              </div>
            </div>
          </div>

          {/* Ongoing programs */}
          <div className="mt-8 rounded-xl bg-[#F7FAFD] border border-ink/10 p-6">
            <h3 className="text-[16px] font-medium text-ink mb-2">
              Larger documentation programmes &amp; guides maintenance
            </h3>
            <p className="text-[14px] text-ink/80 leading-relaxed">
              Full developer hub buildouts, protocol documentation overhauls,
              and ongoing guides maintenance are available by arrangement. Send
              over the shape of what you need and I&apos;ll come back with a
              scope, a price, and a date.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-14">
          <p className="text-[13px] uppercase tracking-[0.12em] text-muted mb-2">
            Workflow
          </p>
          <h2 className="text-[22px] font-medium text-ink mb-6">
            How it works
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-lg border border-ink/10 p-5 bg-white">
              <span className="text-[12px] font-bold text-accent mb-2 block">
                STEP 01
              </span>
              <h3 className="text-[15px] font-medium text-ink mb-2">
                Send Docs or Spec
              </h3>
              <p className="text-[13px] text-ink/80 leading-relaxed">
                Send your current docs URL, or the repo and OpenAPI spec if
                it&apos;s an API project.
              </p>
            </div>

            <div className="rounded-lg border border-ink/10 p-5 bg-white">
              <span className="text-[12px] font-bold text-accent mb-2 block">
                STEP 02
              </span>
              <h3 className="text-[15px] font-medium text-ink mb-2">
                One-Email Confirmation
              </h3>
              <p className="text-[13px] text-ink/80 leading-relaxed">
                I confirm the scope, price, and delivery date in one email. No
                endless scope alignment meetings.
              </p>
            </div>

            <div className="rounded-lg border border-ink/10 p-5 bg-white">
              <span className="text-[12px] font-bold text-accent mb-2 block">
                STEP 03
              </span>
              <h3 className="text-[15px] font-medium text-ink mb-2">
                Git-Native Delivery
              </h3>
              <p className="text-[13px] text-ink/80 leading-relaxed">
                I work directly in your repository and your branch, opening
                clean pull requests — not tossing over Google Docs.
              </p>
            </div>
          </div>
        </section>

        {/* Why me on docs specifically */}
        <section className="mb-14 rounded-xl border border-ink/10 p-6 sm:p-8 bg-white">
          <p className="text-[13px] uppercase tracking-[0.12em] text-muted mb-2">
            Domain Fluency
          </p>
          <h2 className="text-[20px] font-medium text-ink mb-4">
            Why me on docs specifically
          </h2>

          <div className="space-y-4 text-[15px] text-ink/90 leading-relaxed">
            <p>
              <strong>DeFi user for five years:</strong> I write user docs from
              inside the real user experience and mental model, not from a
              detached product brief.
            </p>
            <p>
              <strong>Solidity developer:</strong> I have tested and deployed
              smart contracts to sepolia testnet (pending Arbitrum deployment),
              so I can read contract logic, events, and error revert strings
              before documenting them.
            </p>
            <p>
              <strong>Built &amp; documented Roomly end to end:</strong> Created
              the entire platform architecture, its API spec, developer guides,
              and student/caretaker journeys (
              <Link
                href="/projects/roomly-student-housing-platform"
                className="text-accent underline font-medium"
              >
                see Roomly project
              </Link>
              ).
            </p>
            <p>
              <strong>Tri-reader documentation design:</strong> Every page is
              crafted for the three readers that actually exist today: the human
              user solving a problem, the engineer integrating an endpoint, and
              the AI model summarizing and retrieving answers.
            </p>
          </div>

          <div className="pt-5 mt-5 border-t border-ink/10 flex items-center justify-between flex-wrap gap-2">
            <span className="text-[13px] text-muted">
              Explore documented developer and technical samples:
            </span>
            <Link
              href="/writing-samples/technical"
              className="text-[13px] text-accent font-medium hover:underline"
            >
              Browse technical writing samples →
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center rounded-xl bg-gradient-to-b from-[#F7FAFD] to-white border border-ink/10 p-8 sm:p-10">
          <h2 className="text-[22px] font-medium text-ink mb-3">
            Have docs that need an engineer&apos;s eye?
          </h2>
          <p className="text-[15px] text-ink/80 max-w-md mx-auto mb-6">
            Email <strong className="text-ink">hello@brightjasper.com</strong>{" "}
            with your docs URL or OpenAPI spec and I&apos;ll respond with a
            scope, price, and date within one working day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@brightjasper.com?subject=Documentation%20Engineering%20Inquiry"
              className="text-[14px] px-6 py-3 rounded-full bg-accent text-white hover:opacity-90 font-medium"
            >
              Email hello@brightjasper.com
            </a>
            <Link
              href="/contact"
              className="text-[14px] px-6 py-3 rounded-full border border-ink/15 text-ink hover:border-accent hover:text-accent font-medium"
            >
              Contact form
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
