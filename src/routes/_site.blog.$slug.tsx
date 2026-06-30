import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPostBySlug, posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/_site/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Artikel nicht gefunden – Zeitwerk" }] };
    return {
      meta: [
        { title: `${post.title} – Zeitwerk Blog` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: post.author },
        { property: "article:section", content: post.category },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold">Artikel nicht gefunden</h1>
      <p className="mt-3 text-muted-foreground">Der gewünschte Beitrag existiert nicht oder wurde verschoben.</p>
      <Link to="/blog" className="mt-6 inline-block text-primary">← Zurück zum Blog</Link>
    </div>
  ),
  component: Article,
});

function Article() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">← Alle Artikel</Link>
      <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="bg-secondary px-2 py-0.5 rounded">{post.category}</span>
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">{post.title}</h1>
      <p className="mt-5 text-lg text-muted-foreground">{post.description}</p>

      <div className="mt-8 flex items-center gap-3 pb-8 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary grid place-items-center font-semibold text-sm">
          {post.author.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
        </div>
        <div className="text-sm">
          <div className="font-medium">{post.author}</div>
          <div className="text-muted-foreground">Zeitwerk Redaktion</div>
        </div>
      </div>

      <div className="mt-10 space-y-6 text-foreground leading-relaxed">
        {post.body.map((p: string, i: number) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-border">
        <h2 className="text-xl font-semibold mb-6">Weitere Artikel</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {others.map((o) => (
            <Link key={o.slug} to="/blog/$slug" params={{ slug: o.slug }} className="border border-border rounded-md p-4 hover:border-primary text-sm">
              <div className="text-xs text-muted-foreground mb-1">{o.category}</div>
              <div className="font-medium leading-snug">{o.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}