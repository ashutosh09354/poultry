import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import useSeo from "../hooks/useSeo";
import articles, { articleCategories } from "../data/articles";
import { Container, Notice, PageHeader } from "../components/ui/ui";
import ArticleCard from "../components/ArticleCard";

export default function Resources() {
  useSeo("Poultry Knowledge Hub", "General guides on poultry farm management, broiler and layer basics, biosecurity, hygiene and egg handling.");
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    return articles.filter((a) => (cat === "All" || a.category === cat) && (!t || [a.title, a.summary, a.category, ...a.sections.map((s) => s.heading)].join(" ").toLowerCase().includes(t)));
  }, [q, cat]);
  const filtering = q.trim() || cat !== "All";
  const featured = articles.filter((a) => a.featured);

  const chip = (active) => `rounded-[4px] border px-3 py-1.5 text-sm font-semibold ${active ? "border-brand-800 bg-brand-800 text-white" : "border-line bg-white text-brand-900 hover:bg-mist-100"}`;

  return (
    <>
      <PageHeader title="Poultry Knowledge Hub" intro="Practical guides on running a poultry farm and on buying from one." crumbs={[{ label: "Home", to: "/" }, { label: "Resources" }]} />
      <Container className="py-10 sm:py-12">
        <Notice tone="info" className="mb-8">These guides are general education, not veterinary or legal advice. Follow your breed supplier's management guide and speak to a qualified poultry veterinarian about bird health.</Notice>

        {!filtering && (
          <section aria-labelledby="fg" className="mb-12">
            <h2 id="fg" className="mb-5 text-2xl font-bold sm:text-3xl">Featured guides</h2>
            <ul className="grid gap-5 md:grid-cols-3">{featured.map((a) => <li key={a.slug}><ArticleCard article={a} /></li>)}</ul>
          </section>
        )}

        <section aria-labelledby="all">
          <h2 id="all" className="mb-5 text-2xl font-bold sm:text-3xl">{filtering ? "Search results" : "All guides"}</h2>
          <div className="mb-6 space-y-4">
            <div className="relative max-w-md">
              <label htmlFor="rq" className="sr-only">Search guides</label>
              <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft" />
              <input id="rq" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search guides" className="block w-full rounded-[4px] border border-[#b5c3d4] bg-white py-2.5 pl-10 pr-3" />
            </div>
            <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
              {["All", ...articleCategories].map((c) => (
                <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={chip(cat === c)}>{c}</button>
              ))}
            </div>
          </div>
          <p className="mb-4 text-sm text-ink-soft" aria-live="polite">{list.length} {list.length === 1 ? "guide" : "guides"}</p>
          {list.length ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((a) => <li key={a.slug}><ArticleCard article={a} /></li>)}</ul>
          ) : (
            <div className="rounded-[6px] border border-dashed border-mist-300 bg-white p-10 text-center">
              <h3 className="text-2xl font-bold">No guides match your search</h3>
              <p className="mt-2 text-ink-soft">Try a shorter keyword or choose a different category.</p>
              <button type="button" onClick={() => { setQ(""); setCat("All"); }} className="mt-4 rounded-[4px] bg-brand-800 px-5 py-2.5 font-semibold text-white">Clear search</button>
            </div>
          )}
        </section>
      </Container>
    </>
  );
}
