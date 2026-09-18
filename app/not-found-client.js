"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

// Levenshtein distance algorithm
function getLevenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          )
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

export default function NotFoundClient({ availableRoutes }) {
  const pathname = usePathname();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!pathname || !availableRoutes) return;
    
    // Clean up the pathname for comparison (take the last meaningful segment)
    const segments = pathname.split('/').filter(Boolean);
    const searchTarget = segments.length > 0 
      ? segments[segments.length - 1].toLowerCase().replace(/-/g, ' ') 
      : pathname.toLowerCase();
    
    const withScores = availableRoutes.map(route => {
      const slugMatch = getLevenshteinDistance(
        searchTarget, 
        route.slug ? route.slug.toLowerCase().replace(/-/g, ' ') : ''
      );
      
      const titleMatch = getLevenshteinDistance(
        searchTarget, 
        route.title.toLowerCase()
      );
      
      return {
        ...route,
        // use the better match score
        score: Math.min(slugMatch, titleMatch)
      };
    });
    
    // Sort by score ascending (lower distance = better match)
    withScores.sort((a, b) => a.score - b.score);
    
    // Take top 3
    setSuggestions(withScores.slice(0, 3));
  }, [pathname, availableRoutes]);

  return (
    <section className="px-6 py-20 text-center max-w-2xl mx-auto min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-[32px] sm:text-[40px] font-medium text-ink mb-4">404: Page not found</h1>
      <p className="text-[16px] text-ink/80 mb-10">
        We couldn't find the page at <code className="bg-ink/5 px-1 py-0.5 rounded text-ink">{pathname}</code>.
      </p>
      
      {suggestions.length > 0 && (
        <div className="text-left bg-white border border-ink/10 rounded-lg p-6 sm:p-8 shadow-sm">
          <h2 className="text-[18px] font-medium text-ink mb-4">Were you looking for one of these?</h2>
          <div className="space-y-4">
            {suggestions.map((route, idx) => (
              <Link 
                key={idx} 
                href={route.url}
                className="block group p-4 rounded-md border border-ink/5 hover:border-accent/30 hover:bg-accent/5 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-medium text-ink group-hover:text-accent transition-colors">{route.title}</h3>
                  {route.type && (
                    <span className="text-[12px] font-medium uppercase tracking-wider text-muted group-hover:text-accent/70">
                      {route.type}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-10">
        <Link 
          href="/" 
          className="text-[15px] font-medium text-accent hover:underline"
        >
          &larr; Return to home
        </Link>
      </div>
    </section>
  );
}
