import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Search, Filter, ClipboardList, Mail, Eye, Users } from "lucide-react";
import useSeo from "../hooks/useSeo";
import farms from "../data/farms";
import categories from "../data/categories";
import products from "../data/products";
import articles from "../data/articles";
import statesData from "../data/states";
import { heroImage, sectionImages } from "../data/images";
import { Button, Container, Section, SectionHeading, Icon, Img } from "../components/ui/ui";
import FarmCard from "../components/FarmCard";
import ArticleCard from "../components/ArticleCard";

const selectCls = "w-full rounded-[4px] border border-[#b8c4b5] bg-white px-3 py-2.5 text-[0.95rem] text-ink";

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
    <form onSubmit={submit} role="search" aria-label="Search poultry farms" className="mt-6 grid gap-3 rounded-[6px] bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_auto] lg:items-end">
      <div>
        <label htmlFor="hq" className="mb-1.5 block text-sm font-semibold text-forest-900">Farm name, town or product</label>
        <input id="hq" value={q} onChange={(e) => setQ(e.target.value)} placeholder="For example: eggs, Namakkal" className={selectCls} />
      </div>
      <div>
        <label htmlFor="hs" className="mb-1.5 block text-sm font-semibold text-forest-900">State</label>
        <select id="hs" value={state} onChange={(e) => setState(e.target.value)} className={selectCls}>
          <option value="">All states</option>
          {statesData.map((s) => <option key={s.state}>{s.state}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="hc" className="mb-1.5 block text-sm font-semibold text-forest-900">Category</label>
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
  const featured = ["deccan-broiler-works", "namakkal-egg-collective", "sahyadri-hatchery"].map((s) => farms.find((f) => f.slug === s));
  const insights = articles.filter((a) => a.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-forest-950 text-white" aria-labelledby="hero-title">
        <img src={heroImage.src} alt="" width="1800" height="1200" fetchPriority="high" onError={(e) => { e.currentTarget.style.display = "none"; }} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/72 to-forest-950/32" aria-hidden="true" />
        <Container className="py-10 sm:py-14">
          <h1 id="hero-title" className="max-w-3xl text-4xl font-bold !text-white sm:text-6xl">Find poultry farms, hatcheries and breeders across India</h1>
          <p className="mt-3 max-w-xl text-lg text-sage-200">Search by location, farm category and product, read a farm's profile, then reach out to the farm directly.</p>
          <HeroSearch />
        </Container>
      </section>

      {/* Categories */}
      <Section tone="ivory" labelledBy="cat-title">
        <SectionHeading id="cat-title" title="Browse by poultry category" action={<Button to="/categories" variant="outline" size="sm">About the categories</Button>}>
          Each category covers a different part of the poultry business, from meat birds and eggs to chicks and breeding stock.
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c) => (
            <li key={c.id} className="relative rounded-[6px] border border-line bg-white p-4 focus-within:ring-2 focus-within:ring-ochre-500">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-forest-700"><Icon name={c.icon} size={22} /></span>
              <h3 className="mt-3 text-xl font-bold"><Link to={`/farms?category=${c.id}`} className="after:absolute after:inset-0 hover:underline focus-visible:outline-none">{c.name}</Link></h3>
              <p className="mt-1.5 text-sm text-ink-soft">{c.short}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Featured farms */}
      <Section tone="white" labelledBy="feat-title">
        <SectionHeading id="feat-title" title="Featured farms" action={<Button to="/farms" variant="outline" size="sm">See all farms</Button>}>
          Discover poultry farms across India and explore their products and locations.
        </SectionHeading>
        <ul className="grid gap-5 md:grid-cols-3">
          {featured.map((f) => <li key={f.slug}><FarmCard farm={f} /></li>)}
        </ul>
      </Section>

      {/* Capabilities */}
      <Section tone="sage" labelledBy="cap-title">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 id="cap-title" className="text-3xl font-bold sm:text-4xl">What you can do on Poultry</h2>
            <p className="mt-3 text-ink-soft">Poultry is a discovery tool. It helps you find a farm and start a conversation; the rest happens between you and the farm.</p>
            <Button to="/how-it-works" variant="outline" className="mt-4">How it works</Button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              [Filter, "Narrow the search", "Filter by state, city, farm type, category and product, and sort the results."],
              [Eye, "Read clear profiles", "Each profile shows location, farm type and the products a farm says it supplies."],
              [Mail, "Send an enquiry", "Use the enquiry form to ask a farm about supply, breeds or visits."],
              [Users, "Be found as a farmer", "Prepare a listing so buyers and other poultry businesses can discover your farm."],
            ].map(([Ic, t, d]) => (
              <li key={t} className="rounded-[6px] border border-sage-300 bg-white p-4">
                <Ic size={22} className="text-forest-700" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold">{t}</h3>
                <p className="mt-1 text-sm text-ink-soft">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Products */}
      <Section tone="ivory" labelledBy="prod-title">
        <SectionHeading id="prod-title" title="Poultry products farms can list" action={<Button to="/products" variant="outline" size="sm">Product guide</Button>}>
          Product pages explain what each product is and what to ask a farm. There is no live stock or online ordering.
        </SectionHeading>
        <ul className="grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.id} className="flex items-start gap-3 bg-white p-4">
              <span className="mt-0.5 text-forest-700"><Icon name={p.icon} size={24} /></span>
              <div>
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{p.info}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Farmer onboarding */}
      <section className="relative isolate overflow-hidden bg-forest-900 text-white" aria-labelledby="farmer-title">
        <div aria-hidden="true" className="absolute -left-24 bottom-[-7rem] -z-10 h-80 w-80 rounded-full border-[38px] border-white/5" />
        <div aria-hidden="true" className="absolute right-[36%] top-0 -z-10 h-24 w-px bg-white/15" />
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#f4b942]"><ClipboardList size={17} aria-hidden="true" />For poultry businesses</p>
            <h2 id="farmer-title" className="mt-4 text-4xl font-bold !text-white sm:text-5xl">Give your farm a place to be found.</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-sage-200 sm:text-lg">Prepare a clear listing that helps the right buyers understand what you supply and how to get in touch.</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Farm name and location", "Farm category", "Products you supply", "Contact details", "Photos (optional)"].map((i) => (
                <li key={i} className="flex items-center gap-2.5 rounded-[4px] border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-sage-100"><CheckCircle2 size={17} aria-hidden="true" className="shrink-0 text-[#f4b942]" />{i}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/list-your-farm" variant="cta">List your farm <ArrowUpRight size={18} aria-hidden="true" /></Button>
              <Button to="/listing-guidelines" variant="ghostLight">Read the guidelines</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[10px] border border-white/15" />
            <Img src={sectionImages.onboarding} alt="Free-range chickens at a poultry farm" ratio="aspect-[5/4]" priority className="rounded-[6px] shadow-2xl" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/95 via-forest-950/50 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#f4b942]">Make a clear first impression</p>
              <p className="mt-1 max-w-sm font-display text-2xl font-bold leading-tight text-white">Your profile starts with the details buyers look for.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Insights */}
      <Section tone="white" labelledBy="ins-title">
        <SectionHeading id="ins-title" title="From the Knowledge Hub" action={<Button to="/resources" variant="outline" size="sm">All guides</Button>}>
          General guides on running and buying from poultry farms. They are educational, not veterinary advice.
        </SectionHeading>
        <ul className="grid gap-5 md:grid-cols-3">
          {insights.map((a) => <li key={a.slug}><ArticleCard article={a} /></li>)}
        </ul>
      </Section>
    </>
  );
}
