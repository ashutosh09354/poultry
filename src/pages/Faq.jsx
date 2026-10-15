import useSeo from "../hooks/useSeo";
import faqGroups from "../data/faqs";
import Accordion from "../components/ui/Accordion";
import { Button, Container, PageHeader } from "../components/ui/ui";

export default function Faq() {
  useSeo("Frequently asked questions", "Answers for buyers and poultry farmers about listings, verification and how GreenHarvest works.");
  return (
    <>
      <PageHeader title="Frequently asked questions" intro="Straight answers about what GreenHarvest does today." crumbs={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "FAQ" }]} />
      <Container className="py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[14rem_1fr]">
          <nav aria-label="FAQ sections" className="lg:sticky lg:top-24 lg:self-start">
            <ul className="space-y-2 text-sm">{faqGroups.map((g) => <li key={g.id}><a href={`#${g.id}`} className="font-medium text-forest-800 hover:underline">{g.title}</a></li>)}</ul>
          </nav>
          <div className="space-y-12">
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-24">
                <h2 id={`${g.id}-h`} className="mb-4 text-2xl font-bold sm:text-3xl">{g.title}</h2>
                <Accordion items={g.items} />
              </section>
            ))}
            <div className="rounded-[6px] border border-line bg-white p-6">
              <h2 className="text-xl font-bold">Did not find your answer?</h2>
              <Button to="/contact" className="mt-4">Contact us</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
