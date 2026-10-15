import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, pages, onChange }) {
  if (pages <= 1) return null;
  const item = "inline-flex h-10 min-w-10 items-center justify-center rounded-[4px] border px-3 text-sm font-semibold";
  return (
    <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      <button type="button" className={`${item} border-line bg-white disabled:opacity-40`} disabled={page === 1} onClick={() => onChange(page - 1)} aria-label="Previous page">
        <ChevronLeft size={18} aria-hidden="true" />
      </button>
      {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          aria-label={`Page ${p}`}
          aria-current={p === page ? "page" : undefined}
          className={`${item} ${p === page ? "border-forest-800 bg-forest-800 text-white" : "border-line bg-white text-forest-900 hover:bg-sage-100"}`}
        >
          {p}
        </button>
      ))}
      <button type="button" className={`${item} border-line bg-white disabled:opacity-40`} disabled={page === pages} onClick={() => onChange(page + 1)} aria-label="Next page">
        <ChevronRight size={18} aria-hidden="true" />
      </button>
    </nav>
  );
}
