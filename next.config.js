/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path+/(index)",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
      },
      {
        source: "/sitemap-posts.xml",
        destination: "/sitemap-articles.xml",
      },
      {
        source: "/sitemaps/pages.xml",
        destination: "/sitemap-pages.xml",
      },
      {
        source: "/sitemaps/articles.xml",
        destination: "/sitemap-articles.xml",
      },
      {
        source: "/sitemaps/projects.xml",
        destination: "/sitemap-projects.xml",
      },
    ];
  },
};

module.exports = nextConfig;
