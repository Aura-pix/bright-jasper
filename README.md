# Bright Jasper — blog

## Setup
npm install
npm run dev

## Adding a new post
Drop a new .mdx file into content/blog/ with frontmatter like:

---
title: "Post title"
date: "2026-09-10"
tag: "Web3"          # Web3 / Dev Guides / Reflections / Research Thesis
excerpt: "One-line summary shown on cards."
readTime: "4 min read"
sample: true          # optional - true if it should also appear on /writing-samples
sampleCategory: "Documentation"   # Documentation / Research & Explainers / Guides
canonical: "https://medium.com/..."  # optional - set if also posted to Medium
---

Body content in Markdown below the frontmatter.

The filename becomes the URL slug automatically. No other code changes needed.

## Notes
- Upwork link in components/Footer.js is a placeholder ("#") - update with the real profile URL.
- Update SITE_URL in app/rss.xml/route.js and the canonical alternate in app/blog/[slug]/page.js once a custom domain is live (currently set to the .vercel.app placeholder).
- Illustrations in public/illustrations are simple placeholder line art - swap the files (same filenames) if custom/unDraw illustrations replace them later.
