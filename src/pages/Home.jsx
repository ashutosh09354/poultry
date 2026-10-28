import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Search, ClipboardList, MapPin, Sparkles } from "lucide-react";
import useSeo from "../hooks/useSeo";
import farms from "../data/farms";
import categories from "../data/categories";
import products from "../data/products";
import articles from "../data/articles";
import statesData from "../data/states";
import { heroImage, sectionImages, photosFor } from "../data/images";
import { Button, Container, Section, SectionHeading, Icon, Img } from "../components/ui/ui";
import FarmCard from "../components/FarmCard";
import ArticleCard from "../components/ArticleCard";
import SplitText from "../components/effects/SplitText";

const selectCls = "w-full rounded-[4px] border border-[#b5c3d4] bg-white px-3 py-2.5 text-[0.95rem] text-ink";

function HeroSearch() {
  const nav = useNavigate();
  const [q, setQ] = useState("");
  const [state, setState] = useState("");
  const [category, setCategory] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (q.trim()) p.set("q", q.trim());
    if (state) p.set("state", state);
    if (category) p.set("category", category);
    nav(`/farms${p.toString() ? `?${p}` : ""}`);
  };
  return (
    <form onSubmit={submit} role="search" aria-label="Search poultry farms" className="mt-7 grid gap-3 rounded-2xl border border-white/40 bg-white/95 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_auto] lg:items-end">
      <div>
        <label htmlFor="hq" className="mb-1.5 block text-sm font-semibold text-brand-900">Farm name, town or product</label>
        <input id="hq" value={q} onChange={(e) => setQ(e.target.value)} placeholder="For example: eggs, Namakkal" className={selectCls} />
      </div>
      <div>
        <label htmlFor="hs" className="mb-1.5 block text-sm font-semibold text-brand-900">State</label>
        <select id="hs" value={state} onChange={(e) => setState(e.target.value)} className={selectCls}>
          <option value="">All states</option>
          {statesData.map((s) => <option key={s.state}>{s.state}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="hc" className="mb-1.5 block text-sm font-semibold text-brand-900">Category</label>
        <select id="hc" value={category} onChange={(e) => setCategory(e.target.value)} className={selectCls}>
          <option value="">All categories</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>
      <Button type="submit" size="lg" className="sm:col-span-2 lg:col-span-1"><Search size={18} aria-hidden="true" />Search farms</Button>
    </form>
  );
}

export default function Home() {
  useSeo("Poultry farm directory for India", "Browse broiler, layer and country chicken farms, hatcheries and breeders. Filter by location, category and product.");
  const featured = ["deccan-broiler-works", "namakkal-egg-collective", "sahyadri-hatchery", "malwa-country-birds", "terai-breeder-farm", "godavari-layer-farm"].map((s) => farms.find((f) => f.slug === s)).filter(Boolean);
  const insights = articles.filter((a) => a.featured);

  // Every number below is computed from the listings, so it can never drift from what the site really holds.
  const stateCount = statesData.length;
  const cityCount = new Set(farms.map((f) => f.city)).size;
  const stats = [
    [farms.length, "farm listings"],
    [stateCount, "states covered"],
    [cityCount, "towns and cities"],
    [categories.length, "farm categories"],
  ];
  const byState = statesData.map(({ state }) => [state, farms.filter((f) => f.state === state).length]);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate scroll-mt-16 overflow-hidden bg-brand-950 text-white hero-section font-inter" aria-labelledby="hero-title">
        <img src={heroImage.src} alt="" width="1800" height="1200" fetchPriority="high" onError={(e) => { e.currentTarget.style.display = "none"; }} className="hero-image-motion absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/72 via-brand-950/48 to-brand-950/16" aria-hidden="true" />
        <Container className="pb-8 pt-24 sm:pb-10 sm:pt-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/90 backdrop-blur">India's poultry community, connected</p>
          <h1 id="hero-title" className="max-w-3xl font-hero hero-heading !font-inter text-4xl font-bold tracking-tight !text-white sm:text-6xl"><SplitText text="Find poultry farms, hatcheries and breeders across India" /></h1>
          <p className="mt-3 max-w-xl text-lg text-mist-200">Search by location, category or product, then contact the farm directly.</p>
          <HeroSearch />
        </Container>
      </section>

      {/* Numbers */}
      <section className="border-b border-line bg-white" aria-label="Directory at a glance">
        <Container>
          <dl className="grid grid-cols-2 divide-x divide-line md:grid-cols-4">
            {stats.map(([n, label]) => (
              <div key={label} className="px-4 py-5 text-center">
                <dt className="sr-only">{label}</dt>
                <dd><span className="block font-display text-3xl font-bold text-brand-900 sm:text-4xl">{n}</span><span className="text-sm text-ink-soft">{label}</span></dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Categories */}
      <Section tone="ivory" labelledBy="cat-title">
        <SectionHeading id="cat-title" title="Browse by poultry category" action={<Button to="/categories" variant="outline" size="sm">About the categories</Button>}>
          From meat birds and eggs to chicks and breeding stock.
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c) => {
            const n = farms.filter((f) => f.category === c.id).length;
            return (
              <li key={c.id} className="group relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_28px_-20px_rgba(16,42,71,0.45)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_36px_-18px_rgba(16,42,71,0.45)] focus-within:ring-2 focus-within:ring-ochre-500">
                <Img src={photosFor(c.id)[0]?.thumb} alt="" ratio="aspect-[4/3]" icon={c.icon} />
                <div className="p-4">
                  <h3 className="text-xl font-bold"><Link to={`/farms?category=${c.id}`} className="after:absolute after:inset-0 hover:underline focus-visible:outline-none">{c.name}</Link></h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{c.short}</p>
                  <p className="mt-3 text-sm font-semibold text-brand-800">{n} {n === 1 ? "farm" : "farms"}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Featured farms */}
      <Section tone="white" labelledBy="feat-title">
        <SectionHeading id="feat-title" title="Featured farms" action={<Button to="/farms" variant="outline" size="sm">See all {farms.length} farms</Button>}>
          A selection of listings from across the directory.
        </SectionHeading>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f) => <li key={f.slug}><FarmCard farm={f} /></li>)}
        </ul>
      </Section>

      {/* By state */}
      <Section tone="sage" labelledBy="state-title">
        <SectionHeading id="state-title" title="Browse by state">Pick a state to see the farms listed there.</SectionHeading>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {byState.map(([st, n]) => (
            <li key={st}>
              <Link to={`/farms?state=${encodeURIComponent(st)}`} className="flex items-center justify-between rounded-xl border border-mist-300 bg-white px-4 py-3.5 font-semibold text-brand-900 shadow-[0_8px_22px_-18px_rgba(16,42,71,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-mist-50 hover:shadow-md">
                <span className="flex items-center gap-2"><MapPin size={18} className="text-brand-700" aria-hidden="true" />{st}</span>
                <span className="text-sm font-medium text-ink-soft">{n} {n === 1 ? "farm" : "farms"}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section tone="ivory" labelledBy="cap-title">
        <SectionHeading id="cap-title" title="How it works" action={<Button to="/how-it-works" variant="outline" size="sm">Learn more</Button>}>
          From search to supplier in three steps.
        </SectionHeading>
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["Search", "Filter by state, city, farm type, category and product."],
            ["Read the profile", "See location, farm type and the products the farm supplies."],
            ["Send an enquiry", "Ask about supply, breeds or visits, and agree terms with the farm."],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_12px_28px_-20px_rgba(16,42,71,0.4)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-800 font-display text-xl font-bold text-white" aria-hidden="true">{i + 1}</span>
              <div><h3 className="text-lg font-bold">{t}</h3><p className="mt-1 text-sm text-ink-soft">{d}</p></div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Products */}
      <Section tone="white" labelledBy="prod-title">
        <SectionHeading id="prod-title" title="What farms supply" action={<Button to="/products" variant="outline" size="sm">Product guide</Button>}>
          Eggs, birds, chicks and more.
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.id} className="group flex items-start gap-4 rounded-2xl border border-mist-200 bg-white p-5 shadow-[0_12px_30px_-18px_rgba(16,42,71,0.4)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_38px_-18px_rgba(16,42,71,0.45)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors group-hover:bg-[#2563EB] group-hover:text-white"><Icon name={p.icon} size={24} /></span>
              <div>
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{p.info}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Farmer onboarding */}
      <section className="relative isolate overflow-hidden bg-brand-900 text-white" aria-labelledby="farmer-title">
        <div aria-hidden="true" className="absolute -left-24 bottom-[-7rem] -z-10 h-80 w-80 rounded-full border-[38px] border-white/5" />
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#f4b942]"><ClipboardList size={17} aria-hidden="true" />For poultry businesses</p>
            <h2 id="farmer-title" className="mt-4 text-4xl font-bold !text-white sm:text-5xl">Give your farm a place to be found.</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-mist-200 sm:text-lg">Contact us to discuss how your farm can be discovered by buyers across the directory.</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Farm name and location", "Farm category", "Products you supply", "Contact details", "Photos (optional)"].map((i) => (
                <li key={i} className="flex items-center gap-2.5 rounded-[4px] border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-mist-100"><CheckCircle2 size={17} aria-hidden="true" className="shrink-0 text-[#f4b942]" />{i}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/contact" variant="cta">Contact us <ArrowUpRight size={18} aria-hidden="true" /></Button>
              <Button to="/listing-guidelines" variant="ghostLight">Read the guidelines</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[10px] border border-white/15" />
            <Img src={sectionImages.onboarding} alt="Free-range chickens at a poultry farm" ratio="aspect-[5/4]" priority className="rounded-2xl shadow-2xl" />
          </div>
        </Container>
      </section>

      {/* Insights */}
      <Section tone="white" labelledBy="ins-title">
        <SectionHeading id="ins-title" title="From the Knowledge Hub" action={<Button to="/resources" variant="outline" size="sm">All guides</Button>}>
          Practical guides on running and buying from poultry farms.
        </SectionHeading>
        <ul className="grid gap-5 md:grid-cols-3">
          {insights.map((a) => <li key={a.slug}><ArticleCard article={a} /></li>)}
        </ul>
      </Section>
    </>
  );
}
