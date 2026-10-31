import useSeo from "../hooks/useSeo";
import { Button, Container, PageHeader } from "../components/ui/ui";

const journeys = [
  { title: "If you are a buyer", cta: ["Explore farms", "/farms"], steps: [
    ["Search the directory", "Use keywords or filters for state, city, category, farm type and product."],
    ["Read the profile", "Check location, category and the products the farm lists. Note what is not shown, such as prices or certifications."],
    ["Send an enquiry", "Ask the farm about supply, quantities, breeds or a visit."],
    ["Check before you order", "Confirm details directly and consider a small first order. Our guide on evaluating a supplier can help."],
  ]},
  { title: "If you are a farmer", cta: ["Contact us", "/contact"], steps: [
    ["Read the guidelines", "Understand what a good, accurate listing includes."],
    ["Gather your details", "Farm name, location, category, products, contact details and optional photos."],
    ["Contact us with your details", "Share your farm name, location, products and contact details."],
    ["Respond to enquiries", "Buyers can contact you through your listing."],
  ]},
];

export default function HowItWorks() {
  useSeo("How it works", "How buyers and poultry farmers use polutrynext: search, read profiles, enquire and prepare a listing.");
  return (
    <>
      <PageHeader title="How it works" intro="A simple path for buyers looking for a supplier and for farmers preparing a listing." crumbs={[{ label: "Home", to: "/" }, { label: "How it works" }]} />
      <Container className="py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          {journeys.map((j) => (
            <section key={j.title} aria-labelledby={j.title.replace(/\s/g, "-")} className="rounded-[6px] border border-line bg-white p-6">
              <h2 id={j.title.replace(/\s/g, "-")} className="text-2xl font-bold">{j.title}</h2>
              <ol className="mt-5 space-y-5">
                {j.steps.map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-800 text-sm font-bold text-white" aria-hidden="true">{i + 1}</span>
                    <div><h3 className="!font-sans text-base font-bold text-brand-900">{t}</h3><p className="mt-0.5 text-sm text-ink-soft">{d}</p></div>
                  </li>
                ))}
              </ol>
              <Button to={j.cta[1]} variant="primary" className="mt-6">{j.cta[0]}</Button>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
