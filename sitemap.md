# Bright Jasper Sitemaps

This site uses a **Sitemap Index** architecture that splits URLs by page type for granular indexing coverage in Google Search Console, Bing Webmaster Tools, and other search engines.

---

## Live Sitemap URLs (Submit to Google Search Console)

### 1. Master Sitemap Index
- **Index URL**: `https://brightjasper.com/sitemap.xml`
- **Relative Path**: `/sitemap.xml`
- **Type**: `sitemapindex`

### 2. Per-Page-Type Sitemaps
- **Pages (Core & Landing Pages)**:  
  `https://brightjasper.com/sitemap-pages.xml`  
  *(Path: `/sitemap-pages.xml`)*

- **Articles (Blog Posts & Tutorials)**:  
  `https://brightjasper.com/sitemap-articles.xml`  
  *(Path: `/sitemap-articles.xml`)*

- **Projects (Case Studies & Portfolio)**:  
  `https://brightjasper.com/sitemap-projects.xml`  
  *(Path: `/sitemap-projects.xml`)*

---

## Sub-Sitemap Content Breakdown

### `sitemap-pages.xml`
Contains all static marketing, service, category, and core informational pages:
- `https://brightjasper.com` (Homepage)
- `https://brightjasper.com/blog` (Blog Index)
- `https://brightjasper.com/writing-samples`
- `https://brightjasper.com/writing-samples/technical`
- `https://brightjasper.com/writing-samples/seo-growth`
- `https://brightjasper.com/writing-samples/thought-leadership`
- `https://brightjasper.com/about`
- `https://brightjasper.com/projects` (Projects Index)
- `https://brightjasper.com/credentials`
- `https://brightjasper.com/contact`
- `https://brightjasper.com/subscribe`

### `sitemap-articles.xml`
Contains all 22+ published articles and technical guides under `/blog/[slug]`.

### `sitemap-projects.xml`
Contains all published case studies under `/projects/[slug]`.

---

## Project Source Files

| Resource | Route Endpoint | Source Code File |
| :--- | :--- | :--- |
| **Sitemap Index** | `/sitemap.xml` | [`app/sitemap.xml/route.js`](file:///c:/Users/HOME%20PC/Desktop/bright-jasper-blog/app/sitemap.xml/route.js) |
| **Pages Sitemap** | `/sitemap-pages.xml` | [`app/sitemap-pages.xml/route.js`](file:///c:/Users/HOME%20PC/Desktop/bright-jasper-blog/app/sitemap-pages.xml/route.js) |
| **Articles Sitemap** | `/sitemap-articles.xml` | [`app/sitemap-articles.xml/route.js`](file:///c:/Users/HOME%20PC/Desktop/bright-jasper-blog/app/sitemap-articles.xml/route.js) |
| **Projects Sitemap** | `/sitemap-projects.xml` | [`app/sitemap-projects.xml/route.js`](file:///c:/Users/HOME%20PC/Desktop/bright-jasper-blog/app/sitemap-projects.xml/route.js) |
| **Generator Logic** | Shared Utility | [`lib/sitemaps.js`](file:///c:/Users/HOME%20PC/Desktop/bright-jasper-blog/lib/sitemaps.js) |
| **Robots Directives** | `/robots.txt` | [`app/robots.txt/route.js`](file:///c:/Users/HOME%20PC/Desktop/bright-jasper-blog/app/robots.txt/route.js) |
| **Rewrites & Aliases** | Config | [`next.config.js`](file:///c:/Users/HOME%20PC/Desktop/bright-jasper-blog/next.config.js) |
