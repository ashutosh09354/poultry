import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import categories from "../data/categories";
import farms from "../data/farms";
import { Button, Container, Icon, PageHeader } from "../components/ui/ui";

export default function Categories() {
  useSeo("Poultry categories", "Understand broiler farms, layer farms, country chicken, hatcheries and poultry breeding, and browse the listings in each.");
  return (
    <>
      <PageHeader title="Poultry categories" intro="Poultry businesses do very different things. These categories help you find the right kind of farm." crumbs={[{ label: "Home", to: "/" }, { label: "Poultry Categories" }]} />
      <Container className="py-7 sm:py-9">
        <ul className="space-y-4">
          {categories.map((c) => {
            const n = farms.filter((f) => f.category === c.id).length;
            return (
              <li key={c.id} id={c.id} className="grid gap-4 rounded-[6px] border border-line bg-white p-4 md:grid-cols-[auto_1.6fr_1fr] md:items-start">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-mist-100 text-brand-700"><Icon name={c.icon} size={28} /></span>
                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl">{c.name}</h2>
                  <p className="mt-2 max-w-prose text-ink-soft">{c.purpose}</p>
                  <Button to={`/farms?category=${c.id}`} className="mt-3">Browse {c.name.toLowerCase()} ({n} {n === 1 ? "listing" : "listings"})</Button>
                </div>
                <div>
                  <h3 className="!font-sans text-sm font-bold">What to look for</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-soft">{c.lookFor.map((l) => <li key={l}>{l}</li>)}</ul>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-sm text-ink-soft">Not sure which category fits your farm? <Link to="/listing-guidelines" className="font-semibold text-brand-700 underline">Read the listing guidelines</Link>.</p>
      </Container>
    </>
  );
}
