import TagFilter from "@/components/TagFilter";
import { getAllBlogPosts } from "@/lib/posts";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog | Bright Jasper",
  description:
    "SEO content, articles, explainers, research, product writing, and web3 perspectives from Bright Jasper across tech, finance, and beyond.",
  path: "/blog",
  keywords: [
    "SEO blog",
    "GEO and AEO",
    "technical writing blog",
    "technical explainers",
    "developer documentation",
    "web3 writing",
    "research-backed content",
    "product writing",
  ],
});

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
      "SEO content, articles, explainers, research, product writing, and web3 perspectives from Bright Jasper.",
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
          I write about the ideas, products, and systems people need explained
          clearly. This blog includes SEO content, articles, research-backed
          explainers, product writing, finance, tech, and web3 perspectives.
        </p>

        <TagFilter posts={posts} tags={tagsPresent} />
      </div>
    </>
  );
}
