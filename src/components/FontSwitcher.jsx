import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Sparkles, Type } from "lucide-react";
import { useFontTheme } from "../hooks/useFontTheme";

export function FontSwitcherDropdown() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, currentConfig, themes } = useFontTheme();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="dialog"
        title="Change site font pairing"
        className="inline-flex items-center gap-1.5 rounded-[4px] border border-mist-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-brand-900 shadow-sm transition hover:border-brand-700 hover:bg-mist-50 sm:text-sm"
      >
        <Type size={15} className="text-brand-700" aria-hidden="true" />
        <span className="hidden md:inline text-ink-soft">Font:</span>
        <span className="max-w-[120px] truncate sm:max-w-none">{currentConfig.name}</span>
        <ChevronDown size={14} className={`text-ink-soft transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Select typography pairing"
          className="absolute right-0 top-full z-50 mt-2 w-80 max-w-[90vw] rounded-lg border border-line bg-white p-3 shadow-xl sm:w-96"
        >
          <div className="mb-2 flex items-center justify-between border-b border-line pb-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-800">Typography Options</p>
              <p className="text-xs text-ink-soft">Preview the site with different font pairings</p>
            </div>
            <span className="rounded bg-mist-100 px-2 py-0.5 text-[11px] font-semibold text-brand-900">
              Live Switcher
            </span>
          </div>

          <div className="space-y-2">
            {themes.map((t) => {
              const isSelected = t.id === theme;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left rounded-md border p-2.5 transition ${
                    isSelected
                      ? "border-brand-800 bg-mist-50 ring-1 ring-brand-800"
                      : "border-mist-200 bg-white hover:border-brand-600 hover:bg-mist-50/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      {t.recommended && (
                        <span className="inline-flex items-center gap-1 rounded bg-[#f4b942]/20 px-1.5 py-0.5 text-[10px] font-bold text-ochre-700">
                          <Sparkles size={11} aria-hidden="true" /> Recommended
                        </span>
                      )}
                      <span className="text-xs font-bold text-ink-soft">{t.number}</span>
                      <h4 className="text-sm font-bold text-brand-900">{t.name}</h4>
                    </div>
                    {isSelected && <Check size={16} className="text-brand-800 shrink-0 mt-0.5" />}
                  </div>

                  <p className="mt-1 text-xs text-ink-soft leading-snug">{t.description}</p>

                  <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="rounded border border-mist-200 bg-white px-1.5 py-0.5 text-ink">
                      Hero: <strong className="font-semibold">{t.heroFont || "Inter"}</strong>
                    </span>
                    <span className="rounded border border-mist-200 bg-white px-1.5 py-0.5 text-ink">
                      Headings: <strong className="font-semibold">{t.headingFont}</strong>
                    </span>
                    <span className="rounded border border-mist-200 bg-white px-1.5 py-0.5 text-ink">
                      Body & UI: <strong className="font-semibold">{t.bodyFont}</strong>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function FooterFontSelector() {
  const { theme, setTheme, themes } = useFontTheme();

  return (
    <div className="rounded-lg border border-brand-800/80 bg-brand-900/60 p-4">
      <div className="flex items-center gap-2 mb-2">
        <Type size={16} className="text-[#f4b942]" aria-hidden="true" />
        <h3 className="!font-sans text-xs font-bold uppercase tracking-wider text-white">Active Font Pairing</h3>
      </div>
      <p className="text-xs text-mist-200 mb-3">
        Switch typography pairings to test different aesthetics across all listings, forms, and headings:
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {themes.map((t) => {
          const isSelected = t.id === theme;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTheme(t.id)}
              className={`rounded border px-2.5 py-2 text-left text-xs transition ${
                isSelected
                  ? "border-[#f4b942] bg-[#f4b942]/10 text-white font-semibold"
                  : "border-brand-700 bg-brand-950/40 text-mist-200 hover:border-brand-600 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{t.name}</span>
                {isSelected && <Check size={13} className="text-[#f4b942]" />}
              </div>
              <div className="text-[10px] text-mist-300 mt-0.5">
                {t.recommended ? "★ Recommended" : t.tagline}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

