import TagFilter from "@/components/TagFilter";
import { getAllBlogPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Bright Jasper",
  description:
    "Deep dives, dev guides, and reflections. Researched before they are written.",
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  const knownTags = [
    "Web3",
    "User Guides",
    "Dev Guides",
    "Reflections",
    "Research Thesis",
    "Product",
  ];
  const tagsPresent = knownTags.filter((tag) =>
    posts.some((post) => post.tag === tag),
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-[26px] font-medium text-ink mb-3">Blog</h1>
      <p className="text-[15px] text-muted mb-8 max-w-lg">
        Everything I've written, roughly in the order I wrote it. Deep dives,
        dev guides, and some reflections when an idea I ran into turned out more
        interesting than expected.
      </p>

      <TagFilter posts={posts} tags={tagsPresent} />
    </div>
  );
}
