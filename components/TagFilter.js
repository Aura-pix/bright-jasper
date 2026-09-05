'use client';

import { useState } from 'react';
import PostCard from './PostCard';

export default function TagFilter({ posts, tags }) {
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All' ? posts : posts.filter((post) => post.tag === activeTag);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {['All', ...tags].map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-[13px] px-3 py-1.5 rounded-full border transition-colors ${
              activeTag === tag
                ? 'bg-accent text-white border-accent'
                : 'border-ink/15 text-muted hover:border-accent hover:text-accent'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-[14px] text-muted">No posts under this tag yet.</p>
      ) : (
        <div>
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
