import TagFilter from "@/components/TagFilter";
import { getAllBlogPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Bright Jasper",
  description:
    "Deep dives, developer guides, and web3 explainers on technical systems, product narratives, and research-backed writing.",
  alternates: {
    canonical: "https://brightjasper.com/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  const knownTags = [
    "Web3",
    "User Guides",
    "Dev Guides",
    "Reflections",
    "Research Thesis",
    "Technical Explainers",
    "Product",
    "Tutorials",
  ];
  const tagsPresent = knownTags.filter((tag) =>
    posts.some((post) => post.tag === tag),
  );

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    description:
      "Deep dives, developer guides, and research-driven writing from Bright Jasper.",
    url: "https://brightjasper.com/blog",
    hasPart: posts.slice(0, 10).map((post) => ({
      "@type": "TechArticle",
      name: post.title,
      url: `https://brightjasper.com/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-[26px] font-medium text-ink mb-3">Blog</h1>
        <p className="text-[15px] text-muted mb-8 max-w-lg">
          I write about technical systems, product narratives, and the ideas
          people need explained clearly. This blog includes developer docs,
          protocol explainers, research-backed writing, SEO content, and
          product-facing material for web2 and web3 teams.
        </p>

        <TagFilter posts={posts} tags={tagsPresent} />
      </div>
    </>
  );
}
