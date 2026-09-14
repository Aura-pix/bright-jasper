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
            Technical writer and content strategist — web2 and web3
          </p>
          <h1 className="text-[28px] sm:text-[32px] font-medium text-ink mb-6 leading-tight">
            Bright Jasper
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
            I write documentation, guides, and explainers for people building
            things — mostly around JavaScript/TypeScript, Python, and Solidity.
            I also help teams figure out what content they actually need and how
            it should be structured. I research before I write, so what you get
            is accurate as well as readable.
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
        <h2 className="text-[20px] font-medium text-ink mb-6">What I write</h2>
        <ul className="space-y-3 text-[15px] text-ink/90">
          <li>
            Protocol and technical deep dives — breaking down how a system
            actually works, for readers who need real understanding
          </li>
          <li>
            Developer docs and how-to guides (JS/TS, Node, Python, Solidity), so
            your engineers spend more time shipping and the volume of your
            support ticket reduces
          </li>
          <li>
            Web3 content — explainers, product writing, onboarding flows,
            written for non-specialists without losing accuracy
          </li>
          <li>
            Research pieces, verified against primary sources and flagged when a
            claim needs further checking
          </li>
        </ul>
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
          If you're building something
        </h2>
        <p className="text-[15px] text-ink/90 leading-relaxed max-w-md mx-auto mb-6">
          Need docs written for your product, a guide for your users, or content
          that explains what you built? That's what I do. Reach out and let's
          talk about what you need.
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
