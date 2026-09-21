import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Get in Touch | Bright Jasper",
  description:
    "Get in touch with Bright Jasper for SEO strategy, technical writing, or content writing across tech, finance, and web3. Replies within 24 hours.",
  path: "/contact",
  keywords: [
    "hire SEO strategist",
    "hire technical writer",
    "hire content writer web3",
    "contact Bright Jasper",
    "SEO strategist Nigeria",
    "SEO and technical writing services",
  ],
});


const socials = [
  {
    label: "Email",
    href: "mailto:brghtjasper@gmail.com",
  },
  {
    label: "X",
    href: "https://x.com/brightjasp",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3",
  },
  {
    label: "Telegram",
    href: "https://t.me/Jasper074",
  },
];

const faqs = [
  {
    question: "What happens after I reach out?",
    answer:
      "We start with your brand goals, then scope and deliverables, then move to an agreement before work begins.",
  },
  {
    question: "Do you work with clients outside Nigeria?",
    answer: "Yes. I accept USD, GBP, EUR, NGN, or crypto (USDT/USDC).",
  },
  {
    question: "Do you do calls?",
    answer:
      "Yes \u2014 happy to walk through goals, scope, and deliverables over a call.",
  },
  {
    question: "Can I get an audit without committing to a full project?",
    answer:
      "Not for free, but a paid site or documentation audit is something we can scope on a call or over email.",
  },
  {
    question: "Do you do copywriting or social media management?",
    answer:
      "I don't manage social media accounts. Everything else \u2014 blogs, long-form articles, explainers, user and dev guides, product and website copy \u2014 is fair game.",
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

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1 className="text-[26px] font-medium text-ink mb-3">Get in touch</h1>

      <p className="text-[15px] text-ink/90 mb-4 max-w-lg leading-relaxed">
        Need an SEO strategy for your brand, technical writing, or content
        writing across the tech, finance, and web3 space? I reply within 24
        hours.
      </p>

      <p className="text-[15px] text-muted mb-10 max-w-lg leading-relaxed">
        I&apos;m open to freelance, contract, and part-time remote work.
        Based in UTC+1 \u2014 happy to schedule calls that work for your time
        zone.
      </p>

      <div className="flex flex-wrap gap-3 mb-16">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.label === "Email" ? undefined : "_blank"}
            rel={social.label === "Email" ? undefined : "noopener noreferrer"}
            className="rounded-full border border-ink/15 px-6 py-3 text-[15px] text-ink hover:border-accent hover:text-accent transition-colors"
          >
            {social.label}
          </a>
        ))}
      </div>

      <div>
        <h2 className="text-[18px] font-medium text-ink mb-4">FAQ</h2>
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group py-5 border-b border-ink/10"
          >
            <summary className="flex items-center justify-between cursor-pointer text-[15px] text-ink list-none">
              {faq.question}
              <span className="text-ink/40 group-open:rotate-45 transition-transform ml-4 shrink-0">
                +
              </span>
            </summary>
            <p className="text-[14px] text-muted mt-3 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
    }
    
