import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "../data/site";
import Logo from "./Logo";
import { Container } from "./ui/ui";

const linkBase = "rounded-[4px] px-2.5 py-2 text-[0.92rem] font-medium text-brand-900 hover:bg-mist-100";

function DesktopDropdown({ item, open, onToggle, onClose }) {
  const { pathname } = useLocation();
  const active = pathname === item.to || pathname.startsWith(item.to + "/");
  return (
    <li className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={onToggle}
        className={`${linkBase} flex items-center gap-1 ${active ? "bg-mist-100" : ""}`}
      >
        {item.label}
        <ChevronDown size={15} aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="absolute left-0 top-full z-50 mt-1 w-64 rounded-[4px] border border-line bg-white p-1.5 shadow-[0_8px_24px_rgba(16,42,71,0.12)]">
          {item.children.map((c) => (
            <li key={c.to + c.label}>
              <Link to={c.to} onClick={onClose} className="block rounded-[3px] px-3 py-2 hover:bg-mist-100">
                <span className="block text-sm font-semibold text-brand-900">{c.label}</span>
                {c.hint && <span className="block text-xs text-ink-soft">{c.hint}</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [openIdx, setOpenIdx] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const navRef = useRef(null);
  const { pathname, search } = useLocation();

  // Close menus after navigation (adjusting state during render, per React guidance)
  const locKey = pathname + search;
  const [prevKey, setPrevKey] = useState(locKey);
  if (prevKey !== locKey) { setPrevKey(locKey); setOpenIdx(null); setMobile(false); setMobileSub(null); }

  useEffect(() => {
    const onDown = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenIdx(null); };
    const onKey = (e) => { if (e.key === "Escape") { setOpenIdx(null); setMobile(false); } };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, []);

  const cta = "rounded-[4px] bg-[#2563EB] px-4 py-2.5 text-[0.92rem] font-bold text-white shadow-sm hover:bg-[#1D4ED8]";

  return (
    <header ref={navRef} className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item, i) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} onClose={() => setOpenIdx(null)} />
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === "/"} className={({ isActive }) => `${linkBase} block ${isActive ? "bg-mist-100" : ""}`}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/list-your-farm" className={`${cta} hidden sm:inline-block`}>List Your Farm</Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-line bg-white text-brand-900 xl:hidden"
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            aria-label={mobile ? "Close menu" : "Open menu"}
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {mobile && (
        <nav id="mobile-menu" aria-label="Mobile" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-white xl:hidden">
          <Container className="py-3">
            <ul className="divide-y divide-line">
              {mainNav.map((item, i) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button type="button" aria-expanded={mobileSub === i} onClick={() => setMobileSub(mobileSub === i ? null : i)} className="flex w-full items-center justify-between py-3 text-left font-semibold text-brand-900">
                        {item.label}
                        <ChevronDown size={18} aria-hidden="true" className={`transition-transform ${mobileSub === i ? "rotate-180" : ""}`} />
                      </button>
                      {mobileSub === i && (
                        <ul className="mb-2 ml-3 border-l-2 border-mist-200 pl-3">
                          {item.children.map((c) => (
                            <li key={c.to + c.label}><Link to={c.to} className="block py-2 text-ink-soft hover:text-brand-900">{c.label}</Link></li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink to={item.to} end={item.to === "/"} className={({ isActive }) => `block py-3 font-semibold ${isActive ? "text-brand-600" : "text-brand-900"}`}>{item.label}</NavLink>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/list-your-farm" className={`${cta} mt-4 block text-center`}>List Your Farm</Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
