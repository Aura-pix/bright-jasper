import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

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
    sameAs: [
      "https://x.com/brightjasp",
      "https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3",
      "https://medium.com/@brghtjasper",
      "https://www.facebook.com/brightjasp",
      "https://www.youtube.com/@brightjasp",
      "https://www.upwork.com/freelancers/~018d2a2818ff617a2b",
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bright Jasper",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-512x512.png`,
  sameAs: [
    "https://x.com/brightjasp",
    "https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3",
    "https://medium.com/@brghtjasper",
    "https://www.facebook.com/brightjasp",
    "https://www.youtube.com/@brightjasp",
    "https://github.com/Aura-pix/bright-jasper",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bright Jasper",
  url: SITE_URL,
  sameAs: [
    "https://x.com/brightjasp",
    "https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3",
    "https://medium.com/@brghtjasper",
    "https://www.facebook.com/brightjasp",
    "https://www.youtube.com/@brightjasp",
    "https://github.com/Aura-pix/bright-jasper",
  ],
  jobTitle: "SEO/GEO/AEO Specialist, Content Writer, and Technical Writer",
  knowsAbout: [
    "Technical writing",
    "Content writing",
    "SEO writing",
    "SEO optimization",
    "SEO,AEO,GEO",
    "Product copy",
    "Developer documentation",
    "Web3 content writing",
    "Blockchain",
    "Technical explainers",
    "Software engineering",
    "Agile software development",
    "Documentation systems",
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
        url: `${SITE_URL}/og-image.jpg`,
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
    images: [`${SITE_URL}/og-image.jpg`],
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
            __html: JSON.stringify(organizationSchema),
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
