export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

// Accepts Indian mobile numbers with optional +91 / 0 prefix and spaces or dashes.
export function isIndianMobile(v) {
  let d = v.replace(/[\s\-()]/g, "");
  d = d.replace(/^(\+91|91|0)/, "");
  return /^[6-9]\d{9}$/.test(d);
}

// Moves keyboard focus to the first field with an error so screen-reader and keyboard users land on it.
export function focusFirstError(errors, order) {
  const id = order.find((k) => errors[k]);
  if (id) requestAnimationFrame(() => document.getElementById(id)?.focus());
}
