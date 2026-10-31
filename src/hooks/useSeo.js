import { useEffect } from "react";

const BASE = "polutrynext";

export default function useSeo(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Poultry farm directory for India`;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
