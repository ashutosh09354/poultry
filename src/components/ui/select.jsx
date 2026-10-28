import { cn } from "../../lib/utils";

export function Select({ className, ...props }) {
  return <select className={cn("flex h-11 w-full rounded-[4px] border border-[#b5c3d4] bg-white px-3 py-2 text-[0.95rem] text-ink outline-none focus-visible:border-brand-700 focus-visible:ring-2 focus-visible:ring-ochre-500 disabled:cursor-not-allowed disabled:opacity-60", className)} {...props} />;
}
