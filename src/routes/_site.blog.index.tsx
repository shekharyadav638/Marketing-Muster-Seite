import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/_site/blog/")({
  head: () => ({
    meta: [
      { title: "Blog – Zeitwerk" },
      { name: "description", content: "Artikel zu Arbeitszeitgesetz, Projektsteuerung, Lohnbuchhaltung und New Work für mittelständische Unternehmen." },
      { property: "og:title", content: "Blog – Zeitwerk" },
      { property: "og:description", content: "Aktuelle Artikel rund um Zeiterfassung und Projektmanagement." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-4 text-muted-foreground">Artikel und Leitfäden zu Arbeitszeit, Projektsteuerung und Personalprozessen.</p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {posts.map((p)=>(
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="border border-border rounded-lg bg-card p-6 hover:border-primary transition-colors">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="bg-secondary px-2 py-0.5 rounded">{p.category}</span>
              <span>{p.date}</span>
            </div>
            <h3 className="mt-3 font-semibold text-lg leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-4 text-sm text-primary font-medium">Weiterlesen →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}