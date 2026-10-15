import useSeo from "../hooks/useSeo";
import { sectionImages } from "../data/images";
import { Button, Container, Img, PageHeader, Section } from "../components/ui/ui";

const values = [
  ["Accuracy first", "We would rather show less than show something we cannot support. Ratings, certifications and verification badges only appear when they are real."],
  ["Plain language", "Profiles and guides are written so that a first-time buyer or a small farmer can follow them."],
  ["Fair visibility", "Small and family-run farms get the same profile format as large commercial operations."],
  ["Biosecurity awareness", "Our guides encourage practices that protect flocks, and we ask buyers to respect a farm's visitor rules."],
];

export default function About() {
  useSeo("About us", "Poultry is a poultry farm directory for India that helps buyers find farms and helps poultry businesses be found.");
  return (
    <>
      <PageHeader title="About Poultry" intro="A poultry farm directory for India, built to make it easier for buyers and poultry businesses to find each other." crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-2">
        <div className="prose-article">
          <h2 className="!mt-0">Why the platform exists</h2>
          <p>Poultry supply in India is spread across many farms, hatcheries and breeders, and it is hard for a buyer to know who is where and what they supply. Smaller farms in particular are often invisible outside their own district.</p>
          <p>Poultry is intended to give each business a clear, consistent profile and give buyers a simple way to search and shortlist.</p>
          <h2>Who it is for</h2>
          <ul>
            <li>Buyers such as retailers, restaurants, institutions and households looking for eggs or chicken</li>
            <li>Growers looking for hatcheries and chick suppliers</li>
            <li>Poultry farmers, hatcheries and breeders who want to be found</li>
          </ul>
        </div>
        <Img src={sectionImages.about} alt="Hens in a poultry house" ratio="aspect-[4/3]" className="rounded-[6px]" />
      </Container>
      <Section tone="sage" labelledBy="val">
        <h2 id="val" className="mb-8 text-3xl font-bold">Our approach</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {values.map(([t, d]) => (
            <li key={t} className="rounded-[6px] border border-sage-300 bg-white p-6"><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-ink-soft">{d}</p></li>
          ))}
        </ul>
      </Section>
      <Section tone="white" labelledBy="now">
        <div className="max-w-3xl">
          <h2 id="now" className="text-3xl font-bold">Where things stand</h2>
          <p className="mt-3 text-ink-soft">Poultry helps buyers discover poultry farms, hatcheries and breeders across India.</p>
          <div className="mt-6 flex flex-wrap gap-3"><Button to="/how-it-works">How it works</Button><Button to="/contact" variant="outline">Contact us</Button></div>
        </div>
      </Section>
    </>
  );
}
