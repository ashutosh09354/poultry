import { Link } from "react-router-dom";
import site from "../data/site";
import Logo from "./Logo";
import { Container } from "./ui/ui";

const col = (title, links) => (
  <div>
    <h2 className="!font-sans text-sm font-bold !text-white">{title}</h2>
    <ul className="mt-3 space-y-2 text-sm">
      {links.map(([label, to]) => (
        <li key={label}><Link to={to} className="text-mist-200 hover:text-white hover:underline">{label}</Link></li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-mist-200">
      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            A directory that helps buyers find poultry farms, hatcheries and breeders in India, and helps poultry businesses be found.
          </p>
        </div>
        {col("Explore", [["Explore farms", "/farms"], ["Poultry categories", "/categories"], ["Products", "/products"], ["Services", "/services"]])}
        {col("Learn", [["Knowledge Hub", "/resources"], ["How it works", "/how-it-works"], ["FAQ", "/faq"]])}
        {col("Company", [["About", "/about"], ["Contact", "/contact"], ["Report a listing", "/report-listing"]])}
        <div>
          <h2 className="!font-sans text-sm font-bold !text-white">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`mailto:${site.email}`} className="hover:text-white hover:underline">{site.email}</a></li>
            {site.phone && <li><a href={site.phoneHref} className="hover:text-white hover:underline">{site.phone}</a></li>}
            <li><Link to="/contact" className="hover:text-white hover:underline">Send us a message</Link></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-brand-800">
        <Container className="flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Poultry.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li><Link to="/privacy-center" className="hover:text-white hover:underline">Privacy Center</Link></li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
