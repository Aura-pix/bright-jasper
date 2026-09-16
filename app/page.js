import Link from "next/link";
import Image from "next/image";
import PostCard from "@/components/PostCard";
import HireMeButton from "@/components/HireMeButton";
import { getAllBlogPosts } from "@/lib/posts";

export default function HomePage() {
  const recentPosts = getAllBlogPosts().slice(0, 3);

  return (
    <div>
      {/* Hero - soft gradient background, restrained illustration */}
      <section
        className="px-6 pt-16 pb-14 text-center"
        style={{
          background: "linear-gradient(160deg, #E6F1FB 0%, #ffffff 75%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-[15px] text-muted mb-2">
            Technical writer • content writer • SEO writer • product copywriter
            <span className="mx-2">•</span>
            web2 and web3
          </p>
          <h1 className="text-[28px] sm:text-[32px] font-medium text-ink mb-6 leading-tight">
            I turn complex products into clear language for users, developers,
            and search.
          </h1>

          <Image
            src="/illustrations/book-writer.svg"
            alt="Illustration of a person writing at a desk"
            width={200}
            height={167}
            className="mx-auto mb-6"
            priority
          />

          <p className="text-[16px] text-ink/90 leading-relaxed mb-8 max-w-lg mx-auto">
            I write technical docs, explainers, content, SEO articles, and
            product copy for teams building in web2 and web3. From developer
            documentation and protocol explainers to landing pages and
            conversion copy, I turn complexity into clarity without losing
            accuracy.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="text-[14px] px-5 py-2.5 rounded-full bg-accent text-white hover:opacity-90"
            >
              Read the latest
            </Link>
            <Link
              href="/writing-samples"
              className="text-[14px] px-5 py-2.5 rounded-full border border-ink/15 text-ink hover:border-accent hover:text-accent"
            >
              View writing samples
            </Link>
          </div>
        </div>
      </section>

      {/* What I write */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-[20px] font-medium text-ink mb-6">What I do</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-ink/10 p-5">
            <h3 className="text-[16px] font-medium text-ink mb-2">
              Technical writing
            </h3>
            <p className="text-[15px] text-ink/90 leading-relaxed">
              Developer docs, API references, onboarding guides, how-to guides,
              protocol explainers, and deep dives for technical audiences.
            </p>
          </div>

          <div className="rounded-lg border border-ink/10 p-5">
            <h3 className="text-[16px] font-medium text-ink mb-2">
              Content writing
            </h3>
            <p className="text-[15px] text-ink/90 leading-relaxed">
              Research-backed articles, explainers, editorial content, and
              thought leadership for teams that need clarity without fluff.
            </p>
          </div>

          <div className="rounded-lg border border-ink/10 p-5">
            <h3 className="text-[16px] font-medium text-ink mb-2">
              SEO writing
            </h3>
            <p className="text-[15px] text-ink/90 leading-relaxed">
              Search-focused articles and content built around intent,
              structure, readability, and ranking potential for web2 and web3
              topics.
            </p>
          </div>

          <div className="rounded-lg border border-ink/10 p-5">
            <h3 className="text-[16px] font-medium text-ink mb-2">
              Product copy
            </h3>
            <p className="text-[15px] text-ink/90 leading-relaxed">
              Landing pages, product messaging, user onboarding, feature copy,
              and conversion-focused writing that helps people understand the
              value.
            </p>
          </div>
        </div>
      </section>

      {/* Recent writing */}
      {recentPosts.length > 0 && (
        <section
          className="px-6 py-14"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #F7FAFD 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[20px] font-medium text-ink mb-6">
              Recent writing
            </h2>
            <div>
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <Link
              href="/blog"
              className="inline-block mt-6 text-[14px] text-accent hover:underline"
            >
              See all writing
            </Link>
          </div>
        </section>
      )}

      {/* If you're building something */}
      <section className="max-w-3xl mx-auto px-6 py-14 text-center">
        <h2 className="text-[20px] font-medium text-ink mb-4">
          Need clear writing for a web2 or web3 product?
        </h2>
        <p className="text-[15px] text-ink/90 leading-relaxed max-w-md mx-auto mb-6">
          I can help with technical docs, product messaging, SEO content, and
          editorial writing that makes complex ideas readable and useful for the
          people who need them most.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <HireMeButton />
          <Link
            href="/about"
            className="text-[14px] px-5 py-2.5 rounded-full border border-ink/15 text-ink hover:border-accent hover:text-accent"
          >
            See how I work
          </Link>
        </div>
      </section>
    </div>
  );
}
