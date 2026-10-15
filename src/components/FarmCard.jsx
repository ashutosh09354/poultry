import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import categories from "../data/categories";
import products from "../data/products";
import { photosFor } from "../data/images";
import { Badge, Img } from "./ui/ui";

export default function FarmCard({ farm }) {
  const cat = categories.find((c) => c.id === farm.category);
  const photo = photosFor(farm.category)[0];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[6px] border border-line bg-white focus-within:ring-2 focus-within:ring-ochre-500">
      <Img src={photo?.thumb} alt="" ratio="aspect-[16/10]" icon={cat?.icon} />
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex flex-wrap gap-1.5">
          <Badge tone="forest">{cat?.name}</Badge>
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
    </article>
  );
}
