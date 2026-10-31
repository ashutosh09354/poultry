import useSeo from "../hooks/useSeo";
import { Button, Container, Icon, PageHeader, Section } from "../components/ui/ui";

const services = [
  { icon: "Search", title: "Farm discovery", body: "A searchable directory with filters for location, farm type, category and product, so buyers can shortlist farms quickly.", to: "/farms", cta: "Explore farms" },
  { icon: "Megaphone", title: "Farmer visibility", body: "Poultry businesses can contact us to discuss a profile that describes their farm, location and products.", to: "/contact", cta: "Contact us" },
  { icon: "Handshake", title: "Buyer and farmer connections", body: "An enquiry form lets a buyer ask a farm about supply, breeds or visits. Business enquiries, including from hatcheries, can be sent through the contact page.", to: "/contact?topic=business-enquiry", cta: "Send a business enquiry" },
  { icon: "BookOpen", title: "Knowledge Hub", body: "General guides on farm operations, biosecurity, hygiene and egg handling for farmers, and on checking a supplier for buyers.", to: "/resources", cta: "Read the guides" },
];
const not = ["Selling or delivering poultry products", "Payments, escrow or order tracking", "Veterinary advice, diagnosis or treatment", "Inspecting or certifying farms", "Feed, equipment or financing"];

export default function Services() {
  useSeo("Services", "What polutrynext provides: farm discovery, farmer visibility, buyer and farmer connections and a poultry Knowledge Hub.");
  return (
    <>
      <PageHeader title="Services" intro="What polutrynext offers today, and what it does not." crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]} />
      <Container className="py-10 sm:py-14">
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.title} className="flex flex-col rounded-[6px] border border-line bg-white p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mist-100 text-brand-700"><Icon name={s.icon} size={24} /></span>
              <h2 className="mt-4 text-2xl font-bold">{s.title}</h2>
              <p className="mt-2 text-ink-soft">{s.body}</p>
              <Button to={s.to} variant="outline" size="sm" className="mt-auto self-start">{s.cta}</Button>
            </li>
          ))}
        </ul>
      </Container>
      <Section tone="sage" labelledBy="not-title">
        <h2 id="not-title" className="text-3xl font-bold">What polutrynext does not provide</h2>
        <p className="mt-2 max-w-2xl text-ink-soft">To avoid confusion, these things are outside what the platform does.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {not.map((n) => <li key={n} className="rounded-[4px] border border-mist-300 bg-white px-4 py-3 text-sm font-medium">{n}</li>)}
        </ul>
      </Section>
    </>
  );
}
