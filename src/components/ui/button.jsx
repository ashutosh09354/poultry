import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] border font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "border-brand-800 bg-brand-800 text-white hover:bg-brand-900",
        cta: "border-[#f4b942] bg-[#f4b942] text-brand-950 shadow-sm hover:border-[#e3a52e] hover:bg-[#e3a52e]",
        outline: "border-brand-800 bg-transparent text-brand-800 hover:bg-brand-800 hover:text-white",
        light: "border-white bg-white text-brand-900 hover:bg-mist-100",
        ghostLight: "border-white/70 bg-transparent text-white hover:bg-white/10",
      },
      size: {
        default: "px-5 py-2.5 text-[0.95rem]",
        sm: "px-3.5 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
