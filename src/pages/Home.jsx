import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Filter, ClipboardList, Mail, Eye, Users } from "lucide-react";
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
    <form onSubmit={submit} role="search" aria-label="Search poultry farms" className="mt-10 grid gap-3 rounded-[6px] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_auto] lg:items-end">
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
        <Container className="py-16 sm:py-24">
          <h1 id="hero-title" className="max-w-3xl text-4xl font-bold !text-white sm:text-6xl">Find poultry farms, hatcheries and breeders across India</h1>
          <p className="mt-5 max-w-xl text-lg text-sage-200">Search by location, farm category and product, read a farm's profile, then reach out to the farm directly.</p>
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
            <li key={c.id} className="relative rounded-[6px] border border-line bg-white p-5 focus-within:ring-2 focus-within:ring-ochre-500">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-forest-700"><Icon name={c.icon} size={22} /></span>
              <h3 className="mt-4 text-xl font-bold"><Link to={`/farms?category=${c.id}`} className="after:absolute after:inset-0 hover:underline focus-visible:outline-none">{c.name}</Link></h3>
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
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 id="cap-title" className="text-3xl font-bold sm:text-4xl">What you can do on Poultry</h2>
            <p className="mt-3 text-ink-soft">Poultry is a discovery tool. It helps you find a farm and start a conversation; the rest happens between you and the farm.</p>
            <Button to="/how-it-works" variant="outline" className="mt-6">How it works</Button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              [Filter, "Narrow the search", "Filter by state, city, farm type, category and product, and sort the results."],
              [Eye, "Read clear profiles", "Each profile shows location, farm type and the products a farm says it supplies."],
              [Mail, "Send an enquiry", "Use the enquiry form to ask a farm about supply, breeds or visits."],
              [Users, "Be found as a farmer", "Prepare a listing so buyers and other poultry businesses can discover your farm."],
            ].map(([Ic, t, d]) => (
              <li key={t} className="rounded-[6px] border border-sage-300 bg-white p-5">
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
            <li key={p.id} className="flex items-start gap-3 bg-white p-5">
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
      <section className="bg-forest-900 text-white" aria-labelledby="farmer-title">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-2">
          <div>
            <h2 id="farmer-title" className="text-3xl font-bold !text-white sm:text-4xl">Run a poultry business? Prepare your listing.</h2>
            <p className="mt-4 max-w-lg text-sage-200">You will need a few basic details. Share only what is accurate; the listing guidelines explain what makes a good profile.</p>
            <ul className="mt-6 grid gap-2 text-sage-100 sm:grid-cols-2">
              {["Farm name and location", "Farm category", "Products you supply", "Contact details", "Photos (optional)"].map((i) => (
                <li key={i} className="flex items-center gap-2"><ClipboardList size={16} aria-hidden="true" className="text-ochre-500" />{i}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/list-your-farm" variant="cta">List your farm</Button>
              <Button to="/listing-guidelines" variant="ghostLight">Read the guidelines</Button>
            </div>
          </div>
          <Img src={sectionImages.onboarding} alt="Chickens in a poultry house" ratio="aspect-[4/3]" className="rounded-[6px]" />
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
