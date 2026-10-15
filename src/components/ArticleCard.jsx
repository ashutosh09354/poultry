import { Link } from "react-router-dom";
import { Badge } from "./ui/ui";

export function readingTime(a) {
  const words = a.sections.reduce((n, s) => n + (s.paragraphs || []).join(" ").split(/\s+/).length + (s.bullets || []).join(" ").split(/\s+/).length, 0);
  return Math.max(2, Math.round(words / 200));
}

export default function ArticleCard({ article }) {
  return (
    <article className="relative flex h-full flex-col rounded-[6px] border border-line bg-white p-5 focus-within:ring-2 focus-within:ring-ochre-500">
      <Badge tone="sage" className="self-start">{article.category}</Badge>
      <h3 className="mt-3 text-xl font-bold">
        <Link to={`/resources/${article.slug}`} className="after:absolute after:inset-0 hover:underline focus-visible:outline-none">{article.title}</Link>
      </h3>
      <p className="mt-2 text-sm text-ink-soft">{article.summary}</p>
      <p className="mt-auto pt-4 text-xs font-medium text-ink-soft">{readingTime(article)} min read</p>
    </article>
  );
}
