import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import useSeo from "../hooks/useSeo";
import farms, { farmTypes } from "../data/farms";
import categories from "../data/categories";
import products from "../data/products";
import statesData from "../data/states";
import { Button, Container, PageHeader, SelectInput } from "../components/ui/ui";
import FarmCard from "../components/FarmCard";
import Pagination from "../components/ui/Pagination";

const PAGE_SIZE = 6;
const sorters = {
  "name-asc": (a, b) => a.name.localeCompare(b.name),
  "name-desc": (a, b) => b.name.localeCompare(a.name),
  location: (a, b) => a.state.localeCompare(b.state) || a.city.localeCompare(b.city),
};

export default function Farms() {
  useSeo("Explore poultry farms", "Search and filter poultry farms by state, city, farm type, category and product.");
  const [sp, setSp] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const q = sp.get("q") || "";
  const state = sp.get("state") || "";
  const city = sp.get("city") || "";
  const type = sp.get("type") || "";
  const category = sp.get("category") || "";
  const product = sp.get("product") || "";
  const sort = sorters[sp.get("sort")] ? sp.get("sort") : "name-asc";
  const page = Math.max(1, parseInt(sp.get("page") || "1", 10) || 1);

  const set = (patch) => {
    const next = new URLSearchParams(sp);
    Object.entries({ page: "", ...patch }).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
    setSp(next, { replace: true });
  };

  const cities = statesData.find((s) => s.state === state)?.cities || [];

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    return farms
      .filter((f) => {
        if (state && f.state !== state) return false;
        if (city && f.city !== city) return false;
        if (type && f.farmType !== type) return false;
        if (category && f.category !== category) return false;
        if (product && !f.products.includes(product)) return false;
        if (t) {
          const hay = [f.name, f.city, f.state, f.summary, categories.find((c) => c.id === f.category)?.name, ...f.products.map((p) => products.find((x) => x.id === p)?.name)].join(" ").toLowerCase();
          return t.split(/\s+/).every((w) => hay.includes(w));
        }
        return true;
      })
      .sort(sorters[sort]);
  }, [q, state, city, type, category, product, sort]);

  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const visible = results.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const activeCount = [q, state, city, type, category, product].filter(Boolean).length;
  const clear = () => setSp({}, { replace: true });

  const filters = (
    <div className="space-y-4">
      <SelectInput id="state" label="State" plain value={state} onChange={(e) => set({ state: e.target.value, city: "" })} placeholder="All states" options={statesData.map((s) => s.state)} />
      <SelectInput id="city" label="City" plain value={city} disabled={!state} hint={state ? undefined : "Choose a state first"} onChange={(e) => set({ city: e.target.value })} placeholder="All cities" options={cities} />
      <SelectInput id="category" label="Poultry category" plain value={category} onChange={(e) => set({ category: e.target.value })} placeholder="All categories" options={categories.map((c) => ({ value: c.id, label: c.name }))} />
      <SelectInput id="type" label="Farm type" plain value={type} onChange={(e) => set({ type: e.target.value })} placeholder="All farm types" options={farmTypes} />
      <SelectInput id="product" label="Available product" plain value={product} onChange={(e) => set({ product: e.target.value })} placeholder="All products" options={products.map((p) => ({ value: p.id, label: p.name }))} />
      <Button variant="outline" size="sm" className="w-full" onClick={clear} disabled={!activeCount}><X size={16} aria-hidden="true" />Clear filters</Button>
    </div>
  );

  return (
    <>
      <PageHeader title="Explore poultry farms" intro="Search the directory and narrow results by location, category, farm type and product." crumbs={[{ label: "Home", to: "/" }, { label: "Explore Farms" }]} />
      <Container className="py-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[17rem_1fr]">
          <aside aria-label="Filters" className="lg:sticky lg:top-24 lg:self-start">
            <button type="button" className="flex w-full items-center justify-between rounded-[4px] border border-line bg-white px-4 py-3 font-semibold text-brand-900 lg:hidden" aria-expanded={showFilters} aria-controls="filters-panel" onClick={() => setShowFilters(!showFilters)}>
              <span className="flex items-center gap-2"><SlidersHorizontal size={18} aria-hidden="true" />Filters{activeCount ? ` (${activeCount})` : ""}</span>
            </button>
            <div id="filters-panel" className={`${showFilters ? "block" : "hidden"} mt-3 rounded-[6px] border border-line bg-white p-4 lg:mt-0 lg:block`}>
              <h2 className="mb-4 hidden !font-sans text-base font-bold lg:block">Filters</h2>
              {filters}
            </div>
          </aside>

          <div>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="flex-1">
                <label htmlFor="farm-q" className="mb-1.5 block text-sm font-semibold text-brand-900">Search farms</label>
                <div className="relative">
                  <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft" />
                  <input id="farm-q" type="search" value={q} onChange={(e) => set({ q: e.target.value })} placeholder="Name, town, product" className="block w-full rounded-[4px] border border-[#b5c3d4] bg-white py-2.5 pl-10 pr-3" />
                </div>
              </div>
              <div className="sm:w-52">
                <SelectInput id="sort" label="Sort by" plain value={sort} onChange={(e) => set({ sort: e.target.value === "name-asc" ? "" : e.target.value })} options={[{ value: "name-asc", label: "Name, A to Z" }, { value: "name-desc", label: "Name, Z to A" }, { value: "location", label: "Location" }]} />
              </div>
            </div>

            {visible.length ? (
              <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visible.map((f) => <li key={f.slug}><FarmCard farm={f} /></li>)}
              </ul>
            ) : (
              <div className="rounded-[6px] border border-dashed border-mist-300 bg-white p-10 text-center">
                <h2 className="text-2xl font-bold">No farms match these filters</h2>
                <p className="mx-auto mt-2 max-w-md text-ink-soft">Try removing a filter or searching a different town or product.</p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <Button onClick={clear}>Clear filters</Button>
                  <Button to="/contact" variant="cta">Contact us</Button>
                </div>
              </div>
            )}
            <Pagination page={current} pages={pages} onChange={(p) => { set({ page: p === 1 ? "" : String(p) }); window.scrollTo({ top: 0 }); }} />
            <p className="mt-8 text-sm text-ink-soft">See something wrong with a listing? <Link to="/report-listing" className="font-semibold text-brand-700 underline">Report it</Link>.</p>
          </div>
        </div>
      </Container>
    </>
  );
}
