import { Link, useParams } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import articles from "../data/articles";
import { Badge, Breadcrumbs, Container, Notice, Section } from "../components/ui/ui";
import ArticleCard, { readingTime } from "../components/ArticleCard";
import NotFound from "./NotFound";

export default function ArticleDetail() {
  const { slug } = useParams();
  const a = articles.find((x) => x.slug === slug);
  useSeo(a ? a.title : "Guide not found", a?.summary);
  if (!a) return <NotFound what="guide" />;

  const related = [...articles.filter((x) => x.slug !== a.slug && x.category === a.category), ...articles.filter((x) => x.slug !== a.slug && x.category !== a.category)].slice(0, 3);
  const showToc = a.sections.length >= 4;

  return (
    <>
      <header className="border-b border-line bg-white">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: a.title }]} />
          <Badge tone="sage">{a.category}</Badge>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">{a.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{a.summary}</p>
          <p className="mt-4 text-sm font-medium text-ink-soft">{readingTime(a)} min read</p>
        </Container>
      </header>

      <Container className="grid gap-10 py-10 lg:grid-cols-[16rem_1fr]">
        {showToc && (
          <nav aria-label="Table of contents" className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="!font-sans text-sm font-bold">In this guide</h2>
            <ol className="mt-3 space-y-2 border-l-2 border-mist-200 pl-4 text-sm">
              {a.sections.map((s) => <li key={s.id}><a href={`#${s.id}`} className="text-ink-soft hover:text-brand-900 hover:underline">{s.heading}</a></li>)}
            </ol>
          </nav>
        )}
        <article className={`prose-article ${showToc ? "" : "lg:col-span-2"}`}>
          {a.sections.map((s) => (
            <section key={s.id}>
              <h2 id={s.id}>{s.heading}</h2>
              {s.paragraphs?.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
              {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            </section>
          ))}
          <Notice tone="info" className="mt-10 !text-sm">
            This guide is general education only. It is not veterinary, legal or food-safety advice. For bird health, speak to a qualified poultry veterinarian.
          </Notice>
        </article>
      </Container>

      <Section tone="white" labelledBy="rel">
        <h2 id="rel" className="mb-6 text-3xl font-bold">Related guides</h2>
        <ul className="grid gap-5 md:grid-cols-3">{related.map((r) => <li key={r.slug}><ArticleCard article={r} /></li>)}</ul>
        <p className="mt-6 text-sm"><Link to="/resources" className="font-semibold text-brand-700 underline">Back to the Knowledge Hub</Link></p>
      </Section>
    </>
  );
}
