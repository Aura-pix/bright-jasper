import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Technical SEO, GEO and AEO delivery for agencies | Bright Jasper",
  description:
    "Fixed-scope technical SEO, GEO and AEO audits, implementation and monthly reporting for agencies. White-label, dated and priced up front.",
  path: "/services/agencies",
  keywords: [
    "technical SEO for agencies",
    "white label GEO delivery",
    "white label AEO delivery",
    "AI visibility audit for agencies",
    "agency technical SEO audit",
    "ChatGPT search visibility audit",
    "Perplexity search optimization",
    "Google AI Overview audit",
    "white label SEO contractor",
    "technical SEO white label",
  ],
});

export default function AgencyServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://brightjasper.com/services/agencies#service",
    name: "Technical SEO, GEO and AEO Delivery for Agencies",
    serviceType: "White-Label Technical SEO & AI Search Optimization",
    provider: {
      "@type": "Person",
      name: "Bright Jasper",
      url: "https://brightjasper.com/about",
    },
    description:
      "Fixed-scope technical SEO, GEO and AEO audits, implementation and monthly reporting for agencies. White-label, dated and priced up front.",
    url: "https://brightjasper.com/services/agencies",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Agency SEO & AI Visibility Delivery",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical and AI Visibility Audit",
            description:
              "Full crawl, indexation review, schema fixes written as code, and 15-20 buyer prompts benchmarked across ChatGPT, Perplexity, and Google AI Overviews against two competitors. Delivered unbranded.",
          },
          price: "400",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Audit Plus Implementation",
            description:
              "Full audit plus code fixes shipped or ticket-ready spec with acceptance criteria for your dev team, followed by a re-crawl to verify changes.",
          },
          price: "700",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Monthly Visibility Report",
            description:
              "Rankings, indexing health, and what AI engines answer about your client against two competitors, with what moved and the next three priorities.",
          },
          price: "250",
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
        name: "How does white-label agency delivery work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Audits and reports are delivered unbranded with clean markdown, PDF/notion docs, and screen recordings so you can put your own logo and brand directly on the output before sending to your client.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if a delivery date is missed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All projects run on a fixed scope and a fixed date. If I miss the agreed delivery date, the project price automatically drops 20%.",
        },
      },
      {
        "@type": "Question",
        name: "How are payments structured for agency work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Technical and AI Visibility Audit ($400) is paid up front. Audit plus Implementation ($700) is split 50% up front and 50% on delivery. Monthly visibility reports ($250/mo) are billed monthly in advance.",
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
        name: "For Agencies",
        item: "https://brightjasper.com/services/agencies",
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
            Agency Delivery · White-label
          </span>
          <h1 className="text-[26px] sm:text-[30px] font-medium text-ink mb-4 leading-tight">
            Your clients&apos; AI visibility, delivered on your timeline.
          </h1>
          <p className="text-[15px] text-ink/90 leading-relaxed max-w-2xl">
            Fixed-scope technical SEO, GEO and AEO delivery for agencies with
            more client work than hands. I build sites and I audit them, so the
            fixes don&apos;t stop at a document.
          </p>

          {/* Guarantee banner */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 text-[14px] text-ink">
            <span className="flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
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
              <span className="text-emerald-600 font-bold">✓</span> Who this is for
            </h2>
            <ul className="space-y-2.5 text-[14px] text-ink/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>
                  Agencies adding GEO and AI visibility to their offer without
                  hiring for it.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>
                  Teams with a queue of technical audits and nobody to run them.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>
                  Anyone who needs white-label output they can put their own name
                  on.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-ink/10 bg-[#FAFAFA] p-6">
            <h2 className="text-[16px] font-medium text-ink mb-3 flex items-center gap-2">
              <span className="text-red-500 font-bold">✕</span> Who this isn&apos;t for
            </h2>
            <ul className="space-y-2.5 text-[14px] text-ink/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>Agencies that need someone sitting on live client calls.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>Projects that want unlimited revisions or moving targets.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted mt-0.5">•</span>
                <span>Full CMS or domain migration programmes.</span>
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
              Choose your delivery scope
            </h2>
          </div>

          <div className="space-y-6">
            {/* Package 1 */}
            <div className="rounded-xl border border-ink/10 bg-white p-6 sm:p-7 hover:border-accent transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-[20px] font-medium text-ink">
                  Technical and AI Visibility Audit
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[22px] font-semibold text-ink">$400</span>
                  <span className="text-[13px] text-muted">· 5 business days</span>
                </div>
              </div>

              <p className="text-[13px] text-muted font-medium mb-4">
                Paid up front · Delivered unbranded, so it goes out under your logo.
              </p>

              <div className="space-y-2.5 text-[14px] text-ink/90 leading-relaxed mb-6">
                <p className="font-medium text-ink">You get:</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  <li className="border-l-2 border-accent/40 pl-3">
                    Full crawl and indexation review
                  </li>
                  <li className="border-l-2 border-accent/40 pl-3">
                    Schema review with fixes written as code you can paste
                  </li>
                  <li className="border-l-2 border-accent/40 pl-3">
                    Baseline of 15 to 20 buyer prompts run across ChatGPT,
                    Perplexity, Google AI Mode and AI Overviews
                  </li>
                  <li className="border-l-2 border-accent/40 pl-3">
                    Comparison showing what engines say about your client vs. two
                    named competitors
                  </li>
                  <li className="border-l-2 border-accent/40 pl-3">
                    Actionable fix list ordered by business impact
                  </li>
                  <li className="border-l-2 border-accent/40 pl-3">
                    20-minute screen recording walkthrough + 1 round of written
                    Q&amp;A
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="text-[12px] text-muted">Turnaround: 5 business days</span>
                <a
                  href="mailto:hello@brightjasper.com?subject=Agency%20Technical%20%26%20AI%20Visibility%20Audit"
                  className="text-[13px] px-4 py-2 rounded-full bg-accent text-white hover:opacity-90 font-medium"
                >
                  Book this audit →
                </a>
              </div>
            </div>

            {/* Package 2 */}
            <div className="rounded-xl border-2 border-accent bg-white p-6 sm:p-7 relative shadow-sm">
              <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-0.5 text-[11px] font-medium uppercase tracking-wider text-white">
                Most Complete
              </span>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-[20px] font-medium text-ink">
                  Audit Plus Implementation
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[22px] font-semibold text-ink">$700</span>
                  <span className="text-[13px] text-muted">· 10 business days</span>
                </div>
              </div>

              <p className="text-[13px] text-muted font-medium mb-4">
                50% up front, 50% on delivery · Zero technical debt left behind.
              </p>

              <div className="space-y-3 text-[14px] text-ink/90 leading-relaxed mb-6">
                <p>
                  <strong>Everything in the audit</strong>, plus the fixes shipped directly,
                  or a ticket-ready spec per issue with acceptance criteria for your
                  dev team.
                </p>
                <p>
                  Includes a complete re-crawl afterwards to confirm and document
                  what actually changed.
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="text-[12px] text-muted">Turnaround: 10 business days</span>
                <a
                  href="mailto:hello@brightjasper.com?subject=Agency%20Audit%20Plus%20Implementation"
                  className="text-[13px] px-4 py-2 rounded-full bg-accent text-white hover:opacity-90 font-medium"
                >
                  Book audit + implementation →
                </a>
              </div>
            </div>

            {/* Package 3 */}
            <div className="rounded-xl border border-ink/10 bg-white p-6 sm:p-7 hover:border-accent transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="text-[20px] font-medium text-ink">
                  Monthly Visibility Report
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[22px] font-semibold text-ink">$250</span>
                  <span className="text-[13px] text-muted">/ client / month</span>
                </div>
              </div>

              <p className="text-[13px] text-muted font-medium mb-4">
                Billed monthly in advance · Cancel anytime
              </p>

              <div className="space-y-3 text-[14px] text-ink/90 leading-relaxed mb-6">
                <p>
                  Rankings, indexing health, and what the AI engines answer about
                  your client against two competitors, with what moved since last
                  month and the next three things to do.
                </p>
                <p className="text-muted text-[13px]">
                  Written, formatted analysis ready for client presentation — not an
                  unhelpful dashboard login.
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="text-[12px] text-muted">Delivered monthly</span>
                <a
                  href="mailto:hello@brightjasper.com?subject=Agency%20Monthly%20Visibility%20Reporting"
                  className="text-[13px] px-4 py-2 rounded-full border border-ink/15 text-ink hover:border-accent hover:text-accent font-medium"
                >
                  Start monthly reporting →
                </a>
              </div>
            </div>
          </div>

          {/* Retainers & Custom programs */}
          <div className="mt-8 rounded-xl bg-[#F7FAFD] border border-ink/10 p-6">
            <h3 className="text-[16px] font-medium text-ink mb-2">
              Larger programmes &amp; multi-client retainers
            </h3>
            <p className="text-[14px] text-ink/80 leading-relaxed">
              Ongoing delivery partnerships and multi-client batches are available
              by arrangement. Send over the shape of what you need and I&apos;ll come
              back with a scope, a price, and a date.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-14">
          <p className="text-[13px] uppercase tracking-[0.12em] text-muted mb-2">
            Process
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
                Send URLs &amp; Competitors
              </h3>
              <p className="text-[13px] text-ink/80 leading-relaxed">
                Send your client&apos;s URL and the two competitors you want
                benchmarked.
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
                I confirm the scope, price, and exact delivery date in one single
                email. No drawn-out sales calls.
              </p>
            </div>

            <div className="rounded-lg border border-ink/10 p-5 bg-white">
              <span className="text-[12px] font-bold text-accent mb-2 block">
                STEP 03
              </span>
              <h3 className="text-[15px] font-medium text-ink mb-2">
                Unbranded Delivery
              </h3>
              <p className="text-[13px] text-ink/80 leading-relaxed">
                Deliverables arrive unbranded on or before the agreed date, ready
                to go out under your logo.
              </p>
            </div>
          </div>
        </section>

        {/* Where I sit */}
        <section className="mb-14 rounded-xl border border-ink/10 p-6 sm:p-8 bg-white">
          <p className="text-[13px] uppercase tracking-[0.12em] text-muted mb-2">
            Why this works
          </p>
          <h2 className="text-[20px] font-medium text-ink mb-4">
            Where I sit: A developer who does SEO
          </h2>
          <p className="text-[15px] text-ink/90 leading-relaxed mb-4">
            I&apos;m a developer who does SEO, not a marketer who learned it. I build in
            Next.js, TypeScript, and Prisma, work across WordPress and Elementor,
            and have written and tested Solidity contracts deployed to Ethereum
            mainnet.
          </p>
          <p className="text-[15px] text-ink/90 leading-relaxed mb-4">
            That matters for two reasons:
          </p>
          <ul className="space-y-2 text-[14px] text-ink/90 mb-6 pl-4 border-l-2 border-accent">
            <li>
              <strong>1. Codebase-ready fixes:</strong> I fix issues directly in the
              code instead of just describing them in a slide deck.
            </li>
            <li>
              <strong>2. Tri-audience fluency:</strong> I can write and optimize for
              the three audiences an AI or web3 product has: the user, the developer,
              and the agent parsing the page.
            </li>
          </ul>

          <div className="pt-4 border-t border-ink/10 flex items-center justify-between flex-wrap gap-2">
            <span className="text-[13px] text-muted">
              Want to see real results? Check the 72-hour turnaround:
            </span>
            <Link
              href="/projects/seo-geo-case-study"
              className="text-[13px] text-accent font-medium hover:underline"
            >
              Read Bright Jasper SEO/GEO Case Study →
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center rounded-xl bg-gradient-to-b from-[#F7FAFD] to-white border border-ink/10 p-8 sm:p-10">
          <h2 className="text-[22px] font-medium text-ink mb-3">
            Ready to hand off your next audit?
          </h2>
          <p className="text-[15px] text-ink/80 max-w-md mx-auto mb-6">
            Email <strong className="text-ink">hello@brightjasper.com</strong> with
            your client&apos;s URL and I&apos;ll respond with a scope, price, and date
            within one working day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@brightjasper.com?subject=Agency%20Delivery%20Inquiry"
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
