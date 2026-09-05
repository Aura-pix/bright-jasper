import Link from 'next/link';

function formatDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block py-6 border-b border-ink/10 group"
    >
      <div className="flex items-center gap-2 text-[12px] text-muted mb-2">
        {post.tag && <span>{post.tag}</span>}
        {post.tag && post.date && <span aria-hidden="true">·</span>}
        {post.date && <span>{formatDate(post.date)}</span>}
        {post.readTime && <span aria-hidden="true">·</span>}
        {post.readTime && <span>{post.readTime}</span>}
      </div>
      <h3 className="text-[19px] font-medium text-ink group-hover:text-accent mb-1">
        {post.title}
      </h3>
      {post.excerpt && (
        <p className="text-[14px] text-muted leading-relaxed">{post.excerpt}</p>
      )}
    </Link>
  );
}
