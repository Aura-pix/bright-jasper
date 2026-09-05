# Bright Jasper Blog

A content-driven personal blog and writing portfolio built with Next.js. The site publishes technical deep dives, developer guides, research notes, and short-form threads.

## Features

- MDX-powered blog posts with frontmatter
- Filterable blog archive
- Curated writing samples drawn from blog posts
- Short-form threads that link to posts on X
- RSS feed at `/rss.xml`
- Responsive styling with Tailwind CSS

## Requirements

- Node.js 18.17 or newer
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the local development server |
| `npm run build` | Create a production build          |
| `npm start`     | Serve the production build         |
| `npm run lint`  | Run the project linter             |

## Writing Blog Posts

Add a new `.mdx` file to `content/blog`. The filename becomes the URL slug, so a file named `my-new-post.mdx` is available at `/blog/my-new-post`.

Use frontmatter like this:

```md
---
title: "A clear and specific title"
date: "2026-09-05"
tag: "Dev Guides"
excerpt: "A short description for post listings."
readTime: "5 min read"
sample: true
sampleCategory: "Guides"
---

Your post content goes here.
```

Supported fields:

| Field            | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `title`          | Post title                                           |
| `date`           | Publication date used for sorting                    |
| `tag`            | Archive filter category                              |
| `excerpt`        | Summary shown in listings                            |
| `readTime`       | Reading-time label                                   |
| `canonical`      | Optional canonical URL                               |
| `sample`         | Set to `true` to include the post in writing samples |
| `sampleCategory` | Category shown for a writing sample                  |

Blog posts support standard Markdown and JSX-compatible MDX content.

## Adding a Thread

Add a `.md` file to `content/threads` with the thread hook, external URL, and date:

```md
---
hook: "A short description that introduces the thread."
url: "https://x.com/brightjasp/status/0000000000000000000"
date: "2026-09-05"
---
```

Threads are sorted newest first and displayed at `/threads`.

## Project Structure

```text
app/                  Next.js routes and pages
components/           Shared UI components
content/blog/         Blog posts written in MDX
content/threads/      Thread metadata written in Markdown
lib/                  Content loading utilities
public/                Static assets
```

## Production Build

Build and run the production version locally:

```bash
npm run build
npm start
```

The application can be deployed to a Next.js-compatible hosting provider. No environment variables are required for the content workflow described above.
