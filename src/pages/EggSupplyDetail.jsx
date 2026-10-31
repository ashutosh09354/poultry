import { useParams } from "react-router-dom";
import { CheckCircle2, Egg, MapPin, PackageCheck, Truck } from "lucide-react";
import useSeo from "../hooks/useSeo";
import eggSupplyLocations from "../data/eggSupplyNetwork";
import { Button, Container, Img, PageHeader } from "../components/ui/ui";
import NotFound from "./NotFound";

const orderDetails = [
  [Egg, "Egg requirement", "Discuss table eggs, hatching eggs, grade, and the quantity you need."],
  [PackageCheck, "Packing and quantity", "Confirm tray or carton pack sizes, bulk quantity, and the handling required."],
  [Truck, "Delivery or pickup", "Confirm whether delivery is available for your destination or arrange a pickup point directly with the supplier."],
];

export default function EggSupplyDetail() {
  const { slug } = useParams();
  const location = eggSupplyLocations.find((item) => item.slug === slug);
  useSeo(location ? `${location.city} Egg Supply` : "Egg supply not found", location ? `Explore egg-supply enquiries for ${location.city}, ${location.state}.` : undefined);
  if (!location) return <NotFound what="egg supply location" />;

  return (
    <>
      <PageHeader title={`${location.city} Egg Supply`} intro={`Explore layer-farm and egg-supply enquiries for ${location.city}, ${location.state}.`} crumbs={[{ label: "Home", to: "/" }, { label: "Our Egg Supply Network", to: "/#supply-network-title" }, { label: location.city }]} />
      <Container className="grid gap-9 py-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <Img src={location.image} alt={`Egg packing and supply for ${location.city}`} ratio="aspect-[16/10]" priority className="rounded-[6px] border border-line shadow-[0_16px_34px_-24px_rgba(16,42,71,0.55)]" />
          <section className="mt-8 rounded-[6px] border border-line bg-white p-6 sm:p-7" aria-labelledby="before-enquiry-title">
            <h2 id="before-enquiry-title" className="text-2xl font-bold">Before you enquire</h2>
            <p className="mt-3 text-ink-soft">Share your destination, required egg type, quantity, preferred date, and whether you need delivery or can collect the order. Availability, prices, and fulfilment arrangements must be confirmed directly with the listed business.</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Egg type and grade", "Quantity in trays or cartons", "Delivery location or pickup point", "Required date and supply frequency"].map((item) => <li key={item} className="flex items-center gap-2 text-sm font-semibold text-brand-900"><CheckCircle2 size={18} className="text-ochre-700" aria-hidden="true" />{item}</li>)}
            </ul>
          </section>
        </div>

        <aside className="rounded-[6px] border border-line bg-mist-50 p-6 sm:p-7">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-ochre-700"><MapPin size={18} aria-hidden="true" />{location.state}</p>
          <h2 className="mt-3 text-3xl font-bold">Egg supply for {location.city}</h2>
          <p className="mt-3 text-ink-soft">Use this location page to begin your search for egg suppliers and layer farms in the {location.city} area.</p>
          <div className="mt-7 space-y-4">
            {orderDetails.map(([DetailIcon, title, text]) => (
              <div key={title} className="flex gap-3 rounded-[4px] border border-mist-200 bg-white p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ochre-100 text-ochre-700"><DetailIcon size={19} aria-hidden="true" /></span>
                <div><h3 className="font-bold text-brand-900">{title}</h3><p className="mt-1 text-sm leading-6 text-ink-soft">{text}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3"><Button to={`/farms?state=${encodeURIComponent(location.state)}&category=layer`}>Explore layer farms</Button><Button to="/contact" variant="outline">Contact us</Button></div>
        </aside>
      </Container>
    </>
  );
}
