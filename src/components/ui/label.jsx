import { cn } from "../../lib/utils";

export function Label({ className, ...props }) {
  return <label className={cn("mb-1.5 block text-sm font-semibold text-brand-900", className)} {...props} />;
}
