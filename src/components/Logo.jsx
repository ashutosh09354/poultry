import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5" aria-label="Poultry home">
      <img
        src={logo}
        alt=""
        width="40"
        height="40"
        className="h-10 w-10 rounded-full bg-white object-cover object-[45%_50%] ring-1 ring-line"
      />
      <span className={`font-display text-2xl font-bold tracking-tight ${light ? "text-white" : "text-forest-900"}`}>Poultry</span>
    </Link>
  );
}
