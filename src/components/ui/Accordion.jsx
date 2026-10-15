import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  const base = useId();
  return (
    <div className="divide-y divide-line border-y border-line bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        const btnId = `${base}-b${i}`;
        const panelId = `${base}-p${i}`;
        return (
          <div key={it.q}>
            <h3 className="!font-sans !text-base">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-semibold text-forest-900 hover:bg-sage-50"
              >
                <span>{it.q}</span>
                <ChevronDown size={20} aria-hidden="true" className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen} className="px-4 pb-5 text-ink-soft">
              <p className="max-w-3xl">{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
