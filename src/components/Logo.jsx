import { Link } from "react-router-dom";

export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" onClick={onClick} className="inline-flex items-center" aria-label="Poultry home">
      <span className={`font-display text-2xl font-bold tracking-tight ${light ? "text-white" : "text-forest-900"}`}>Poultry</span>
    </Link>
  );
}
