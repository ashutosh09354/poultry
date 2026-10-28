import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Baby, BookOpen, Bird, ChevronRight, Circle, CircleAlert, CircleCheck, CircleDot, Dna, Drumstick, Egg, Handshake, Info, Megaphone, Search, Sprout, Warehouse } from "lucide-react";
import { Button as ShadcnButton } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Select } from "./select";
import { Textarea } from "./textarea";

// Only icons referenced by name in the data files are bundled. Add new ones here.
const ICONS = { Baby, BookOpen, Bird, Circle, CircleAlert, CircleCheck, CircleDot, Dna, Drumstick, Egg, Handshake, Info, Megaphone, Search, Sprout, Warehouse };

export function Icon({ name, size = 20, className = "", ...rest }) {
  const C = ICONS[name] || Circle;
  return <C size={size} className={className} aria-hidden="true" {...rest} />;
}

export function Container({ className = "", children, as: Tag = "div" }) {
  return <Tag className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</Tag>;
}

const tones = {
  ivory: "bg-ivory",
  white: "bg-white",
  sage: "bg-mist-100",
  forest: "bg-brand-900 text-mist-100",
};
export function Section({ tone = "ivory", className = "", children, id, labelledBy, reveal = true }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = section?.firstElementChild;
    if (!reveal || !section || !content || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    content.classList.add("scroll-reveal-pending");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        content.classList.add("scroll-reveal-visible");
        content.classList.remove("scroll-reveal-pending");
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    observer.observe(section);

    return () => {
      observer.disconnect();
      content.classList.remove("scroll-reveal-pending", "scroll-reveal-visible");
    };
  }, [reveal]);

  return (
    <section ref={sectionRef} id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-9 sm:py-12 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({ id, title, children, action, light = false }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        <h2 id={id} className={`text-3xl sm:text-4xl font-bold ${light ? "!text-white" : ""}`}>{title}</h2>
        {children && <p className={`mt-3 text-base sm:text-lg ${light ? "text-mist-200" : "text-ink-soft"}`}>{children}</p>}
      </div>
      {action}
    </div>
  );
}

export function Button({ to, href, variant = "primary", size = "md", className = "", children, ...rest }) {
  const resolvedVariant = variant === "primary" ? "default" : variant;
  const resolvedSize = size === "md" ? "default" : size;
  if (to) return <ShadcnButton asChild variant={resolvedVariant} size={resolvedSize} className={className}><Link to={to} {...rest}>{children}</Link></ShadcnButton>;
  if (href) return <ShadcnButton asChild variant={resolvedVariant} size={resolvedSize} className={className}><a href={href} {...rest}>{children}</a></ShadcnButton>;
  return <ShadcnButton type="button" variant={resolvedVariant} size={resolvedSize} className={className} {...rest}>{children}</ShadcnButton>;
}

const badgeTone = {
  sage: "bg-mist-100 text-brand-800 border-mist-200",
  forest: "bg-brand-800 text-white border-brand-800",
  ochre: "bg-ochre-100 text-ochre-700 border-[#ead9ae]",
  outline: "bg-white text-ink-soft border-line",
};
export function Badge({ tone = "sage", children, className = "" }) {
  return <span className={`inline-flex items-center gap-1 rounded-[3px] border px-2 py-0.5 text-xs font-semibold ${badgeTone[tone]} ${className}`}>{children}</span>;
}

export function Breadcrumbs({ items, light = false }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${light ? "text-mist-200" : "text-ink-soft"}`}>
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
            {it.to && i < items.length - 1 ? (
              <Link to={it.to} className="underline-offset-2 hover:underline">{it.label}</Link>
            ) : (
              <span aria-current={i === items.length - 1 ? "page" : undefined} className="font-medium">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({ title, intro, crumbs, children }) {
  return (
    <header className="scroll-mt-16 bg-brand-900 text-white hero-section">
      <Container className="pb-8 pt-24 sm:pb-10 sm:pt-28">
        {crumbs && <Breadcrumbs items={crumbs} light />}
        <h1 className="max-w-3xl font-hero hero-heading !font-inter text-3xl font-bold tracking-tight !text-white sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl font-sans text-base text-mist-200 sm:text-lg">{intro}</p>}
        {children}
      </Container>
    </header>
  );
}

const noticeStyle = {
  info: ["bg-mist-100 border-mist-300 text-brand-900", "Info"],
  success: ["bg-[#e3f1e5] border-[#9cc7a3] text-brand-900", "CircleCheck"],
  error: ["bg-[#f8e4e0] border-[#e0a79e] text-[#6b2217]", "CircleAlert"],
};
export function Notice({ tone = "info", title, children, className = "" }) {
  const [cls, icon] = noticeStyle[tone];
  return (
    <div role={tone === "error" ? "alert" : "status"} className={`flex gap-3 rounded-[4px] border p-4 text-sm ${cls} ${className}`}>
      <Icon name={icon === "Info" ? "Info" : icon} size={20} className="mt-0.5 shrink-0" />
      <div>
        {title && <p className="font-semibold">{title}</p>}
        <div className={title ? "mt-1" : ""}>{children}</div>
      </div>
    </div>
  );
}

/* Forms */
export function Field({ id, label, error, hint, required, plain, children }) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}{!plain && required && <span className="text-danger" aria-hidden="true"> *</span>}
        {!plain && !required && <span className="ml-1 font-normal text-ink-soft">(optional)</span>}
      </Label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1 text-xs text-ink-soft">{hint}</p>}
      {error && <p id={`${id}-err`} className="mt-1 text-sm font-medium text-danger">{error}</p>}
    </div>
  );
}
const aria = (id, error, hint) => ({
  id, name: id, "aria-invalid": error ? true : undefined,
  "aria-describedby": error ? `${id}-err` : hint ? `${id}-hint` : undefined,
});

export function TextInput({ id, label, error, hint, required, ...rest }) {
  return (
    <Field id={id} label={label} error={error} hint={hint} required={required}>
      <Input className={error ? "border-danger focus-visible:border-danger" : ""} {...aria(id, error, hint)} {...rest} />
    </Field>
  );
}
export function TextArea({ id, label, error, hint, required, rows = 5, ...rest }) {
  return (
    <Field id={id} label={label} error={error} hint={hint} required={required}>
      <Textarea rows={rows} className={error ? "border-danger focus-visible:border-danger" : ""} {...aria(id, error, hint)} {...rest} />
    </Field>
  );
}
export function SelectInput({ id, label, error, hint, required, plain, options, placeholder, ...rest }) {
  return (
    <Field id={id} label={label} error={error} hint={hint} required={required} plain={plain}>
      <Select className={error ? "border-danger focus-visible:border-danger" : ""} {...aria(id, error, hint)} {...rest}>
        {placeholder !== undefined && <option value="">{placeholder}</option>}
        {options.map((o) => {
          const v = typeof o === "string" ? o : o.value;
          const l = typeof o === "string" ? o : o.label;
          return <option key={v} value={v}>{l}</option>;
        })}
      </Select>
    </Field>
  );
}

/* Image with fixed aspect ratio (prevents layout shift) and a neutral fallback */
export function Img({ src, alt, ratio = "aspect-[4/3]", className = "", icon = "Bird", priority = false, label = "Photo to be added" }) {
  const [failed, setFailed] = useState(false);
  const showFallback = !src || failed;
  return (
    <div className={`relative overflow-hidden bg-mist-200 ${ratio} ${className}`}>
      {showFallback ? (
        <div role="img" aria-label={alt} className="flex h-full w-full flex-col items-center justify-center gap-2 bg-mist-100 text-mist-500">
          <Icon name={icon} size={36} />
          <span className="text-xs font-medium">{label}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
