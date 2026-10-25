import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Certifications & Achievements | Bright Jasper",
  description:
    "SEO, AEO, and analytics certifications alongside measurable search and site performance achievements from Bright Jasper.",
  path: "/credentials",
  keywords: [
    "AEO certification",
    "SEO certification",
    "Ahrefs certification",
    "SEO achievements",
    "technical SEO results",
    "GA4 certification",
  ],
});

const faqs = [
  {
    question: "What certifications does Bright Jasper hold?",
    answer:
      "AEO Fundamentals (HubSpot Academy), Ahrefs Certification (Ahrefs Academy), and Google Analytics 4 Certification (Google). All credentials are verifiable via the links on this page.",
  },
  {
    question: "How can I verify Bright Jasper's certifications?",
    answer:
      "Each certification on this page includes a direct link to the issuing platform (HubSpot, Ahrefs, Google Skillshop) where you can verify the credential independently.",
  },
  {
    question: "Does Bright Jasper offer certification training for teams?",
    answer:
      "Not directly. The focus is on delivering technical SEO, GEO, and documentation services. However, audit engagements include knowledge transfer so your team learns the methodology.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const certifications = [
  {
    title: "AEO Fundamentals",
    issuer: "HubSpot Academy",
    note: "A foundation in answer engine optimization and helping content earn visibility in AI-powered search.",
    status: "Earned",
    credentialUrl:
      "https://app-eu1.hubspot.com/academy/achievements/vny5xwl4/en/1/bright-jasper/aeo-fundamentals",
    credentialId: null,
    earnedOn: null,
  },
  {
    title: "Ahrefs certification",
    issuer: "Ahrefs Academy",
    note: "Formal SEO learning from Ahrefs, alongside hands-on site audits and technical SEO work.",
    status: "Earned",
    credentialUrl:
      "https://ahrefs.com/academy/certificate/d4d60167113e4796aab1b7ab6cd99aad",
    credentialId: null,
    earnedOn: null,
  },
  {
    title: "Google Analytics 4 certification",
    issuer: "Google",
    note: "Training in measurement and analytics with Google Analytics 4.",
    status: "Earned",
    credentialUrl:
      "https://skillshop.credential.net/e6ae695d-872f-4436-8198-4a2689a232be",
    credentialId: "e6ae695d-872f-4436-8198-4a2689a232be",
    earnedOn: null,
  },
];

export default function CredentialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12 max-w-2xl">
        <p className="text-[12px] uppercase tracking-[0.12em] text-accent mb-3">
          Proof of practice
        </p>
        <h1 className="text-[26px] font-medium text-ink mb-4">
          Certifications &amp; achievements
        </h1>
        <p className="text-[15px] text-muted leading-relaxed">
          A record of what I have studied and what I have put into practice,
          with links and evidence wherever available.
        </p>
      </header>

      <section aria-labelledby="certifications-heading" className="mb-14">
        <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3 mb-5">
          <h2
            id="certifications-heading"
            className="text-[19px] font-medium text-ink"
          >
            Certifications
          </h2>
          <span className="text-[12px] text-muted">
            Learning &amp; credentials
          </span>
        </div>

        <div className="divide-y divide-ink/10">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className="py-5 first:pt-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                <h3 className="text-[16px] font-medium text-ink">
                  {certification.title}
                </h3>
                <span
                  className={`text-[12px] ${
                    certification.status === "In progress"
                      ? "text-muted"
                      : "text-accent"
                  }`}
                >
                  {certification.status}
                </span>
              </div>
              <p className="text-[13px] text-muted mb-2">
                {certification.issuer}
                {certification.earnedOn ? ` · ${certification.earnedOn}` : ""}
              </p>
              <p className="text-[14px] text-ink/90 leading-relaxed">
                {certification.note}
              </p>
              {certification.credentialId && (
                <p className="text-[12px] text-muted mt-2">
                  Credential ID: {certification.credentialId}
                </p>
              )}
              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-[13px] text-accent hover:underline"
                >
                  View credential <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="achievements-heading">
        <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3 mb-5">
          <h2
            id="achievements-heading"
            className="text-[19px] font-medium text-ink"
          >
            Selected achievement
          </h2>
          <span className="text-[12px] text-muted">Measured in practice</span>
        </div>

        <article className="overflow-hidden rounded-lg border border-ink/10">
          <Image
            src="/ahrefs-100-site-overview.png"
            alt="Ahrefs Site Audit showing a 100 health score and zero errors"
            width={1920}
            height={946}
            className="block w-full h-auto border-b border-ink/10"
          />
          <div className="p-5 sm:p-6">
            <p className="text-[12px] text-muted mb-2">
              Technical SEO · September 2026
            </p>
            <h3 className="text-[17px] font-medium text-ink mb-2">
              Took a site audit from 33% health to 100%
            </h3>
            <p className="text-[14px] text-ink/90 leading-relaxed mb-4">
              Fixed canonical, sitemap, and crawl issues on brightjasper.com,
              reducing 55 crawl errors to zero in 72 hours. The site was also
              surfaced in a Google AI Overview during the same work.
            </p>
            <Link
              href="https://brightjasper.com/projects/seo-geo-case-study"
              className="text-[13px] text-accent hover:underline"
            >
              Read the case study <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      </section>
      </div>
    </>
  );
}
