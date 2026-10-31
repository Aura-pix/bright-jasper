import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import HireMeButton from "@/components/HireMeButton";

export const metadata = createPageMetadata({
  title: "Services | Bright Jasper",
  description:
    "Fixed-scope technical SEO, GEO and AEO delivery for agencies, and engineering-grade developer documentation for Web3, AI, and developer tools.",
  path: "/services",
  keywords: [
    "technical SEO services",
    "white label SEO for agencies",
    "GEO delivery agency",
    "AEO audit agency",
    "developer documentation services",
    "API documentation writer",
    "web3 technical writer",
    "software documentation services",
    "white label AI visibility",
  ],
});

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://brightjasper.com/services#service",
    name: "Technical SEO, GEO, AEO & Documentation Engineering",
    serviceType: "Technical SEO & Developer Documentation Services",
    provider: {
      "@type": "Person",
      name: "Bright Jasper",
      url: "https://brightjasper.com/about",
    },
    description:
      "Fixed-scope technical SEO, GEO and AEO delivery for agencies, and engineering-grade developer documentation for Web3, AI, and developer tools. White-label, dated, and priced up front.",
    url: "https://brightjasper.com/services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core Service Offerings",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO, GEO & AEO Delivery for Agencies",
            description:
              "Fixed-scope technical SEO, GEO and AEO audits, implementation, and monthly reporting delivered unbranded on your timeline.",
            url: "https://brightjasper.com/services/agencies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Documentation Engineering for AI, Web3 & Developer Tools",
            description:
              "Developer docs, user guides, and OpenAPI references written by a developer in Markdown and Git.",
            url: "https://brightjasper.com/services/documentation",
          },
        },
      ],
    },
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services | Bright Jasper",
    description:
      "Fixed-scope technical SEO, GEO and AEO delivery for agencies, and engineering-grade developer documentation for Web3, AI, and developer tools.",
    url: "https://brightjasper.com/services",
    hasPart: [
      {
        "@type": "Service",
        name: "Technical SEO, GEO and AEO Delivery for Agencies",
        url: "https://brightjasper.com/services/agencies",
        description:
          "Fixed-scope technical SEO, GEO and AEO audits, implementation, and monthly reporting delivered unbranded on your timeline.",
      },
      {
        "@type": "Service",
        name: "Documentation Engineering for AI, Web3 & Developer Tools",
        url: "https://brightjasper.com/services/documentation",
        description:
          "Developer docs, user guides, and OpenAPI references written by a developer in Markdown and Git.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12">
          <p className="text-[13px] uppercase tracking-[0.12em] text-muted mb-2">
            What I deliver
          </p>
          <h1 className="text-[26px] sm:text-[30px] font-medium text-ink mb-4 leading-tight">
            Developer-led delivery across SEO, AI search, and technical docs.
          </h1>
          <p className="text-[15px] text-ink/90 leading-relaxed max-w-xl">
            I don&apos;t sell open-ended hours or vague retainers. Every
            offering is priced up front with a fixed delivery date, backed by a
            simple commitment: if I miss the date, the price drops 20%.
          </p>
        </header>

        {/* Services Showcase */}
        <div className="grid gap-8">
          {/* Card 1: Agency Delivery */}
          <section className="rounded-xl border border-ink/10 p-6 sm:p-8 hover:border-accent transition-colors bg-white">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-[12px] font-medium uppercase tracking-wider text-accent">
                For Agencies &amp; Growth Teams
              </span>
              <span className="text-[12px] text-muted bg-[#F7FAFD] px-2.5 py-1 rounded-full border border-ink/5">
                White-label · Fixed date
              </span>
            </div>

            <h2 className="text-[22px] font-medium text-ink mb-2">
              <Link href="/services/agencies" className="hover:text-accent">
                Technical SEO, GEO &amp; AEO Delivery
              </Link>
            </h2>

            <p className="text-[15px] text-ink/90 leading-relaxed mb-6">
              Fixed-scope technical SEO, GEO, and AEO delivery for agencies with
              more client work than hands. Delivered unbranded so it goes out
              directly under your logo.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-6 text-[13px]">
              <div className="rounded-lg border border-ink/5 bg-[#F7FAFD] p-3">
                <p className="text-muted text-[11px] uppercase tracking-wider mb-1">
                  Audit
                </p>
                <p className="font-medium text-ink">From $400</p>
                <p className="text-muted text-[12px] mt-1">
                  5 days for up to 100 URLs; larger sites are quoted after a
                  crawl.
                </p>
              </div>

              <div className="rounded-lg border border-ink/5 bg-[#F7FAFD] p-3">
                <p className="text-muted text-[11px] uppercase tracking-wider mb-1">
                  Implementation
                </p>
                <p className="font-medium text-ink">$700 · 10 days</p>
                <p className="text-muted text-[12px] mt-1">
                  Full audit plus code fixes shipped or ticket specs.
                </p>
              </div>

              <div className="rounded-lg border border-ink/5 bg-[#F7FAFD] p-3">
                <p className="text-muted text-[11px] uppercase tracking-wider mb-1">
                  Monthly Report
                </p>
                <p className="font-medium text-ink">$250 / client / mo</p>
                <p className="text-muted text-[12px] mt-1">
                  Written rankings &amp; AI answer tracking vs competitors.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ink/10">
              <p className="text-[13px] text-muted">
                Best for agencies adding GEO/AI visibility without hiring
                in-house.
              </p>
              <Link
                href="/services/agencies"
                className="text-[14px] font-medium text-accent hover:underline flex items-center gap-1"
              >
                View agency offerings &amp; pricing →
              </Link>
            </div>
          </section>

          {/* Card 2: Documentation Engineering */}
          <section className="rounded-xl border border-ink/10 p-6 sm:p-8 hover:border-accent transition-colors bg-white">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-[12px] font-medium uppercase tracking-wider text-accent">
                For Founders &amp; Engineering Teams
              </span>
              <span className="text-[12px] text-muted bg-[#F7FAFD] px-2.5 py-1 rounded-full border border-ink/5">
                Markdown &amp; Git · Docs-as-code
              </span>
            </div>

            <h2 className="text-[22px] font-medium text-ink mb-2">
              <Link
                href="/services/documentation"
                className="hover:text-accent"
              >
                Documentation Engineering for AI, Web3 &amp; Dev Tools
              </Link>
            </h2>

            <p className="text-[15px] text-ink/90 leading-relaxed mb-6">
              Developer docs, user guides, and API references written by someone
              who actually builds. Written in Markdown, kept in Git, and
              structured so both users and AI agents get it right.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-6 text-[13px]">
              <div className="rounded-lg border border-ink/5 bg-[#F7FAFD] p-3">
                <p className="text-muted text-[11px] uppercase tracking-wider mb-1">
                  IA &amp; Docs Review
                </p>
                <p className="font-medium text-ink">$400 · 5 days</p>
                <p className="text-muted text-[12px] mt-1">
                  Full friction audit + 3 rewritten pages to set standard.
                </p>
              </div>

              <div className="rounded-lg border border-ink/5 bg-[#F7FAFD] p-3">
                <p className="text-muted text-[11px] uppercase tracking-wider mb-1">
                  Docs Sprint
                </p>
                <p className="font-medium text-ink">
                  $300 / piece (3 for $750)
                </p>
                <p className="text-muted text-[12px] mt-1">
                  User guides, developer guides, and tutorials.
                </p>
              </div>

              <div className="rounded-lg border border-ink/5 bg-[#F7FAFD] p-3">
                <p className="text-muted text-[11px] uppercase tracking-wider mb-1">
                  OpenAPI Reference
                </p>
                <p className="font-medium text-ink">$800 · 10 days</p>
                <p className="text-muted text-[12px] mt-1">
                  Tested against live endpoints with working code samples.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ink/10">
              <p className="text-[13px] text-muted">
                Best for products where documentation is part of the product
                experience.
              </p>
              <Link
                href="/services/documentation"
                className="text-[14px] font-medium text-accent hover:underline flex items-center gap-1"
              >
                View documentation services &amp; pricing →
              </Link>
            </div>
          </section>
        </div>

        {/* Why this model */}
        <section className="mt-14 rounded-xl bg-[#F7FAFD] border border-ink/10 p-6 sm:p-8">
          <h2 className="text-[18px] font-medium text-ink mb-3">
            Why work with a developer who writes?
          </h2>
          <p className="text-[15px] text-ink/90 leading-relaxed mb-4">
            Most SEO audits stop at a spreadsheet, and most technical docs are
            drafted by marketers who can&apos;t run the code. I build in
            Next.js, TypeScript, and Prisma, work across WordPress, and have
            tested and deployed Solidity smart contracts to Sepolia testnet.
          </p>
          <p className="text-[15px] text-ink/90 leading-relaxed">
            That means audit fixes are shipped directly to your codebase, API
            endpoints are verified against live responses, and content is
            structured for the three audiences that actually matter: the user,
            the developer, and the AI engine summarizing the page.
          </p>
        </section>

        {/* Direct CTA */}
        <div className="mt-14 text-center">
          <p className="text-[15px] text-ink/90 mb-4 max-w-md mx-auto">
            Have a project in mind or need white-label delivery this month? Send
            over the scope and I&apos;ll respond with a fixed price and date.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <HireMeButton />
            <Link
              href="/contact"
              className="text-[14px] px-5 py-2.5 rounded-full border border-ink/15 text-ink hover:border-accent hover:text-accent"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
