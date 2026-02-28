import { getPost, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("cs-CZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Simple MDX renderer — renders raw markdown as HTML via a basic parser
// For more complex needs, install @next/mdx and use dynamic imports
function renderMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // Bold/italic
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Blockquote
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    // Unordered list
    .replace(/^\- (.+)$/gm, "<li>$1</li>")
    // Ordered list (simple)
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
    // Wrap consecutive <li> in <ul>
    .replace(/(<li>.*?<\/li>\n?)+/g, "<ul>$&</ul>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    // Paragraphs (double newline)
    .replace(/\n\n(?!<[uh])/g, "</p><p>")
    // Wrap in p tags
    .replace(/^(?!<[hbcuol])(.+)$/gm, "<p>$1</p>")
    // Clean up empty p tags
    .replace(/<p><\/p>/g, "");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const html = renderMarkdown(post.content);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-[#2a5298] mb-8 transition-colors"
      >
        ← Zpět na blog
      </Link>

      <article>
        <header className="mb-8">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] mb-4 leading-tight">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">{post.description}</p>
          )}
          <div className="flex items-center gap-3 text-sm text-slate-400 border-b border-slate-100 pb-6">
            {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
            {post.readingTime && (
              <>
                <span>·</span>
                <span>{post.readingTime} min čtení</span>
              </>
            )}
          </div>
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      {/* CTA kalkulačka */}
      <div className="mt-12 bg-gradient-to-br from-[#1e3a5f] to-[#2a5298] rounded-2xl p-6 text-white text-center">
        <h3 className="text-xl font-bold mb-2">Spočítejte si vlastní výnosy</h3>
        <p className="text-blue-200 text-sm mb-4">
          Použijte naši kalkulačku a zjistěte, kolik vyděláte na terminovaném vkladu.
        </p>
        <Link
          href="/#kalkulator"
          className="inline-block bg-[#f59e0b] text-[#0f1f35] font-bold px-5 py-2 rounded-lg hover:bg-[#fbbf24] transition-colors"
        >
          Otevřít kalkulačku →
        </Link>
      </div>
    </div>
  );
}
