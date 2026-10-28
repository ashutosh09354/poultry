import { useRef } from "react";
import { cn } from "../../lib/utils";

// Local React Bits Spotlight Card adaptation: a restrained pointer-following glow.
export default function SpotlightCard({ as: Tag = "div", className, children, ...props }) {
  const ref = useRef(null);

  const move = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    ref.current?.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    ref.current?.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
    ref.current?.style.setProperty("--spotlight-opacity", "1");
  };

  const leave = () => ref.current?.style.setProperty("--spotlight-opacity", "0");

  return (
    <Tag
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={cn("react-bits-spotlight relative isolate", className)}
      {...props}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-[var(--spotlight-opacity,0)] transition-opacity duration-300 [background:radial-gradient(15rem_circle_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),rgba(37,99,235,0.16),transparent_45%)]" />
      {children}
    </Tag>
  );
}
