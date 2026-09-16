import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SITE_URL = "https://brightjasper.vercel.app";

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bright Jasper",
  url: SITE_URL,
  inLanguage: "en",
  description:
    "Technical writing, research, product copy and developer-facing content for web2 and web3 teams.",
  publisher: {
    "@type": "Person",
    name: "Bright Jasper",
    sameAs: [
      "https://x.com/brightjasp",
      "https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3",
      "https://medium.com/@brghtjasper",
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bright Jasper",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  sameAs: [
    "https://x.com/brightjasp",
    "https://www.linkedin.com/in/bright-olorunfunmilola-20a8223b3",
    "https://medium.com/@brghtjasper",
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
    "https://github.com/Aura-pix/bright-jasper",
  ],
  jobTitle:
    "Technical Writer, Content Writer, SEO Writer, and Product Copywriter",
  knowsAbout: [
    "Technical writing",
    "Content writing",
    "SEO writing",
    "Product copy",
    "Developer documentation",
    "Web3 content",
    "Technical explainers",
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Bright Jasper — Technical writer, content writer, SEO writer, and product copywriter",
  description:
    "Technical writing, content writing, SEO writing, and product copy for web2 and web3. Developer docs, explainers, landing pages, and research-backed content that turns complexity into clarity.",
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    title: "Bright Jasper",
    description:
      "Technical writing, content writing, SEO writing, and product copy for web2 and web3 teams.",
    url: SITE_URL,
    siteName: "Bright Jasper",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Jasper",
    description:
      "Technical writing, content writing, SEO writing, and product copy for web2 and web3. Developer docs, explainers, landing pages, and research-backed content that turns complexity into clarity.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
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
