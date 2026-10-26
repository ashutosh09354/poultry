import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Flag, MapPin, Mail } from "lucide-react";
import useSeo from "../hooks/useSeo";
import farms from "../data/farms";
import categories from "../data/categories";
import products from "../data/products";
import { cardPhotoFor } from "../data/images";
import { Badge, Button, Container, Img, Notice, PageHeader, Section, Icon } from "../components/ui/ui";
import FarmCard from "../components/FarmCard";
import NotFound from "./NotFound";

function Gallery({ photos, name, icon }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <Img src={photos[i]?.src} alt={photos.length ? `${name}: illustrative photo ${i + 1}` : `No photo for ${name}`} ratio="aspect-[16/10]" icon={icon} label="No photo available" className="rounded-[6px]" priority />
      {photos.length > 1 && (
        <ul className="mt-3 flex gap-3" aria-label="Photo gallery">
          {photos.map((p, idx) => (
            <li key={p.src}>
              <button type="button" onClick={() => setI(idx)} aria-label={`Show photo ${idx + 1}`} aria-pressed={idx === i} className={`block w-24 overflow-hidden rounded-[4px] border-2 ${idx === i ? "border-brand-700" : "border-transparent"}`}>
                <Img src={p.thumb} alt="" ratio="aspect-[4/3]" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function FarmDetail() {
  const { slug } = useParams();
  const farm = farms.find((f) => f.slug === slug);
  useSeo(farm ? farm.name : "Farm not found", farm ? farm.summary : undefined);
  if (!farm) return <NotFound what="farm" />;

  const cat = categories.find((c) => c.id === farm.category);
  const farmProducts = farm.products.map((id) => products.find((p) => p.id === id));
  const related = farms.filter((f) => f.slug !== farm.slug && (f.category === farm.category || f.state === farm.state)).slice(0, 3);
  const cardPhoto = cardPhotoFor(farm);
  const galleryPhotos = cardPhoto ? [{ src: cardPhoto, thumb: cardPhoto }] : [];

  return (
    <>
      <PageHeader title={farm.name} crumbs={[{ label: "Home", to: "/" }, { label: "Explore Farms", to: "/farms" }, { label: farm.name }]}>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge tone="sage">{cat.name}</Badge>
          <Badge tone="outline">{farm.farmType} farm</Badge>
        </div>
      </PageHeader>

      <Container className="grid gap-10 py-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-10">
          <Gallery photos={galleryPhotos} name={farm.name} icon={cat.icon} />

          <section aria-labelledby="ov">
            <h2 id="ov" className="text-2xl font-bold">Overview</h2>
            <p className="mt-3 max-w-prose text-ink-soft">{farm.description}</p>
          </section>

          <section aria-labelledby="prods">
            <h2 id="prods" className="text-2xl font-bold">Available products</h2>
            <p className="mt-1 text-sm text-ink-soft">Products this listing says the farm supplies. Availability and prices are not shown; ask the farm.</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {farmProducts.map((p) => (
                <li key={p.id} className="flex items-start gap-3 rounded-[6px] border border-line bg-white p-4">
                  <Icon name={p.icon} size={22} className="mt-0.5 text-brand-700" />
                  <div><h3 className="text-lg font-bold">{p.name}</h3><p className="text-sm text-ink-soft">{p.askAbout.join(", ")}</p></div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="facts">
            <h2 id="facts" className="text-2xl font-bold">Capacity and certifications</h2>
            <p className="mt-3 max-w-prose text-ink-soft">This listing does not include production capacity or certification details, and none has been checked. Ask the farm for any figures or documents you need before ordering.</p>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[6px] border border-line bg-white p-5">
            <h2 className="text-xl font-bold">Farm details</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div><dt className="font-semibold text-brand-900">Location</dt><dd className="mt-0.5 flex items-start gap-1.5 text-ink-soft"><MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0" />{farm.area}, {farm.city}, {farm.state}</dd></div>
              <div><dt className="font-semibold text-brand-900">Category</dt><dd className="text-ink-soft">{cat.name}</dd></div>
              <div><dt className="font-semibold text-brand-900">Farm type</dt><dd className="text-ink-soft">{farm.farmType}</dd></div>
            </dl>
          </div>

          <div className="rounded-[6px] border border-line bg-white p-5">
            <h2 className="text-xl font-bold">Contact this farm</h2>
            <Button to={`/contact?topic=farm-enquiry&farm=${farm.slug}`} className="mt-4 w-full"><Mail size={18} aria-hidden="true" />Send an enquiry</Button>
          </div>

          <Notice tone="info">
            <Link to={`/report-listing?farm=${farm.slug}`} className="inline-flex items-center gap-1.5 font-semibold underline"><Flag size={15} aria-hidden="true" />Report this listing</Link>
            <span className="mt-1 block">Tell us if something here is incorrect or misleading.</span>
          </Notice>
        </aside>
      </Container>

      {related.length > 0 && (
        <Section tone="white" labelledBy="rel">
          <h2 id="rel" className="mb-6 text-3xl font-bold">Related farms</h2>
          <ul className="grid gap-5 md:grid-cols-3">{related.map((f) => <li key={f.slug}><FarmCard farm={f} /></li>)}</ul>
        </Section>
      )}
    </>
  );
}
