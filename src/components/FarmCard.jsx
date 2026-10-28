import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import categories from "../data/categories";
import products from "../data/products";
import { cardPhotoFor } from "../data/images";
import { Badge, Img } from "./ui/ui";
import SpotlightCard from "./effects/SpotlightCard";

export default function FarmCard({ farm }) {
  const cat = categories.find((c) => c.id === farm.category);
  const photo = cardPhotoFor(farm);
  return (
    <SpotlightCard as="article" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-[0_12px_30px_-18px_rgba(16,42,71,0.45)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_38px_-18px_rgba(16,42,71,0.5)] focus-within:ring-2 focus-within:ring-[#2563EB]">
      <Img src={photo} alt={`Representative view of ${farm.name}`} ratio="aspect-[16/10]" icon={cat?.icon} />
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex flex-wrap gap-1.5">
          <Badge tone="forest">{cat?.name}</Badge>
          <Badge tone="sage">{farm.farmType}</Badge>
        </div>
        <h3 className="text-xl font-bold">
          <Link to={`/farms/${farm.slug}`} className="after:absolute after:inset-0 hover:underline focus-visible:outline-none">{farm.name}</Link>
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-ink-soft"><MapPin size={15} aria-hidden="true" />{farm.city}, {farm.state}</p>
        <p className="mt-3 text-sm text-ink-soft">{farm.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-4" aria-label="Products">
          {farm.products.map((p) => (
            <li key={p}><Badge tone="outline">{products.find((x) => x.id === p)?.name}</Badge></li>
          ))}
        </ul>
      </div>
    </SpotlightCard>
  );
}
