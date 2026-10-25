import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";
import { SOCIAL_PROFILES } from "@/lib/socialProfiles";

const SITE_URL = "https://brightjasper.com";
const CANONICAL_HOST = "https://brightjasper.com";
const GTM_ID = "GTM-PC35ZCMN";

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bright Jasper",
  url: SITE_URL,
  inLanguage: "en",
  description:
    "Bright Jasper does SEO, GEO, AEO, and content writing for brands that want to be found by search engines and AI, plus technical writing for web2 and web3 teams.",
  publisher: {
    "@type": "Person",
    name: "Bright Jasper",
    sameAs: SOCIAL_PROFILES,
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bright Jasper",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-512x512.png`,
  image: `${SITE_URL}/brightjasper.jpg`,
  description:
    "Specialized Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and technical documentation writing for Web3 and tech platforms.",
  priceRange: "$$$",
  knowsAbout: [
    "Generative Engine Optimization (GEO)",
    "Answer Engine Optimization (AEO)",
    "Web3 Developer Documentation",
    "Technical SEO Audits",
    "LLM Prompt Tracking & Search Indexation",
    "Structured Data & JSON-LD Schema",
    "IndexNow & Google Indexing API",
    "AI Overview Optimization",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "GEO & Technical Content Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical SEO & GEO Audit",
          description:
            "Comprehensive audit evaluating site architecture, crawlability, and LLM entity visibility.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Developer Documentation & API Writing",
          description:
            "End-to-end technical documentation creation tailored for developer adoption and search accuracy.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web3 & Blockchain Technical Writing",
          description:
            "Protocol explainers, whitepapers, and developer docs for web3 projects.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content Strategy for AI Search",
          description:
            "GEO-focused content built for how AI models surface answers (Perplexity, ChatGPT, Claude, Google AI Overviews).",
        },
      },
    ],
  },
  sameAs: SOCIAL_PROFILES,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bright Jasper",
  url: SITE_URL,
  sameAs: SOCIAL_PROFILES,
  jobTitle: "Technical Writer & GEO Specialist",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Computer Science Degree Program",
  },
  knowsAbout: [
    "Computer Science",
    "Software Architecture",
    "Search Engine Optimization",
    "Generative AI Content Strategy",
    "Technical Writing",
    "Developer Documentation",
    "Web3 & Blockchain",
    "Structured Data (JSON-LD)",
    "IndexNow Protocol",
    "Google Indexing API",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "AEO Fundamentals",
      recognizedBy: {
        "@type": "Organization",
        name: "HubSpot Academy",
      },
      credentialCategory: "Certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Ahrefs Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Ahrefs Academy",
      },
      credentialCategory: "Certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Google Analytics 4 Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Google",
      },
      credentialCategory: "Certification",
    },
  ],
  workPerformed: [
    {
      "@type": "CreativeWork",
      "@id": "https://brightjasper.com/blog/how-to-rank-new-domain-7-days",
      name: "How to Rank a New Domain in 7 Days: A Programmatic GEO & AEO Framework",
    },
    {
      "@type": "CreativeWork",
      "@id": "https://brightjasper.com/blog/automated-indexing-frameworks-nextjs",
      name: "Automated Indexing Frameworks for Modern Next.js Apps",
    },
    {
      "@type": "CreativeWork",
      "@id": "https://brightjasper.com/blog/how-i-fixed-ahrefs-308-redirect",
      name: "How I Fixed Ahrefs 3xx Redirects in Sitemap",
    },
    {
      "@type": "CreativeWork",
      "@id": "https://brightjasper.com/projects/seo-geo-case-study",
      name: "SEO/GEO Case Study: 33% to 100% Health in 72 Hours",
    },
  ],
};

export const metadata = {
  metadataBase: new URL(CANONICAL_HOST),
  title: "Bright Jasper | SEO, GEO, AEO, content, and technical writer",
  description:
    "I'm Bright Jasper — an SEO/GEO/AEO specialist, content writer, and technical writer. I help brands get found by search engines and AI through technical SEO fixes, developer docs, and content built for how AI models surface answers.",
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    other: {
      "msvalidate.01": "DDA1FF5AFF1ED2FED485B8AAFB1AC876",
    },
  },
  alternates: {
    canonical: CANONICAL_HOST,
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    title: "Bright Jasper",
    description:
      "Bright Jasper does SEO, GEO, AEO, and content writing for brands, plus technical writing for web2 and web3 teams.",
    url: SITE_URL,
    siteName: "Bright Jasper",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/brightjasper.jpg`,
        width: 1280,
        height: 853,
        alt: "Bright Jasper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Jasper",
    description:
      "Bright Jasper does SEO audits, content writing, technical fixes, developer docs, and protocol explainers for brands and web2/web3 teams.",
    images: [`${SITE_URL}/brightjasper.jpg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {GTM_ID && (
          <Script id="google-tag-manager">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NQ2P6Y51RT"
        />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="bSwjnnoQtUFx4W8McgxHnQ"
          async
        />
        <Script id="google-tag">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NQ2P6Y51RT');`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
