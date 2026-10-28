import { useState } from "react";
import { cn } from "../../lib/utils";

// A lightweight React Bits-style word reveal that keeps heading text selectable and accessible.
export default function SplitText({ text, as: Tag = "span", className = "", delay = 0 }) {
  const [ready] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  return (
    <Tag className={cn("react-bits-split", ready && "is-ready", className)}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <span className="react-bits-split-word inline-block" style={{ transitionDelay: `${delay + index * 65}ms` }}>{word}{index < text.split(" ").length - 1 ? "\u00a0" : ""}</span>
        </span>
      ))}
    </Tag>
  );
}
