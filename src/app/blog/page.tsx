import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — terminované vklady, spoření, finance",
  description: "Průvodce světem terminovaných vkladů. Jak vybrat banku, jak fungují úroky a jak vydělat více na spoření.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-[#1e3a5f] mb-2">Blog</h1>
        <p className="text-slate-600">Průvodce světem terminovaných vkladů, spoření a finančního plánování.</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <div className="text-5xl mb-4">📝</div>
          <p>Zatím žádné články. Brzy přidáme první obsah!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
                {post.readingTime && (
                  <span>{post.readingTime} min čtení</span>
                )}
              </div>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#2a5298] transition-colors">
                  {post.title}
                </Link>
              </h2>
              {post.description && (
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{post.description}</p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-semibold text-[#2a5298] hover:text-[#1e3a5f] transition-colors"
              >
                Číst článek →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
