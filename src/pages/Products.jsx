import useSeo from "../hooks/useSeo";
import products from "../data/products";
import categories from "../data/categories";
import { Badge, Button, Container, Icon, Notice, PageHeader } from "../components/ui/ui";

export default function Products() {
  useSeo("Poultry products", "Learn about eggs, broiler chicken, country chicken, day-old chicks and other products poultry farms list, and what to ask a farm.");
  return (
    <>
      <PageHeader title="Poultry products" intro="The products farms can list on polutrynext, what each one means and what to ask a farm before you buy." crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]} />
      <Container className="py-10 sm:py-14">
        <Notice tone="info" title="Discovery only" className="mb-10">
          polutrynext does not sell products, hold stock or take payments. There is no cart or checkout. Availability and prices are set by each farm, so use the enquiry link to ask.
        </Notice>
        <ul className="grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <li key={p.id} className="flex flex-col rounded-[6px] border border-line bg-white p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mist-100 text-brand-700"><Icon name={p.icon} size={24} /></span>
                <Badge tone="outline">Availability: ask the farm</Badge>
              </div>
              <h2 className="mt-4 text-2xl font-bold">{p.name}</h2>
              <p className="mt-2 text-ink-soft">{p.info}</p>
              <h3 className="mt-4 !font-sans text-sm font-bold">Questions to ask</h3>
              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-ink-soft">{p.askAbout.map((a) => <li key={a}>{a}</li>)}</ul>
              <p className="mt-4 text-sm text-ink-soft">Usually listed by: {p.categories.map((c) => categories.find((x) => x.id === c).name).join(", ")}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-5">
                <Button to={`/farms?product=${p.id}`} size="sm">Find farms listing this</Button>
                <Button to={`/contact?topic=product-enquiry&product=${p.id}`} variant="outline" size="sm">Send an enquiry</Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
