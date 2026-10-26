import { useEffect, useState } from "react";

export const FONT_THEMES = [
  {
    id: "dm-sans-roboto-slab",
    number: "01",
    recommended: true,
    name: "DM Sans + Roboto Slab",
    headingFont: "Roboto Slab",
    bodyFont: "DM Sans",
    heroFont: "Inter",
    description: "Use Inter for the hero section, Roboto Slab for content headings, and DM Sans for navigation, buttons, forms, and body text.",
    tagline: "Clean, modern, highly readable",
  },
  {
    id: "inter",
    number: "02",
    recommended: false,
    name: "Inter + Inter",
    headingFont: "Inter",
    bodyFont: "Inter",
    heroFont: "Inter",
    description: "Minimal and professional. Best if you want a consistent, modern interface with excellent readability for farm listings, filters, and product information.",
    tagline: "Minimal and professional",
  },
  {
    id: "manrope-lora",
    number: "03",
    recommended: false,
    name: "Manrope + Lora",
    headingFont: "Lora",
    bodyFont: "Manrope",
    heroFont: "Inter",
    description: "Distinctive and contemporary. A more editorial style, with expressive headings, clean supporting text, and modern Inter hero.",
    tagline: "Distinctive and contemporary",
  },
];

const STORAGE_KEY = "poultry_font_theme";
const DEFAULT_THEME = "dm-sans-roboto-slab";

export function getActiveFontTheme() {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function setActiveFontTheme(themeId) {
  try {
    localStorage.setItem(STORAGE_KEY, themeId);
    document.documentElement.setAttribute("data-font-theme", themeId);
    window.dispatchEvent(new CustomEvent("poultry-font-theme-change", { detail: themeId }));
  } catch (err) {
    console.error("Failed to save font theme:", err);
  }
}

export function useFontTheme() {
  const [theme, setTheme] = useState(getActiveFontTheme);

  useEffect(() => {
    const current = getActiveFontTheme();
    document.documentElement.setAttribute("data-font-theme", current);

    const onThemeChange = (e) => {
      setTheme(e.detail);
    };

    window.addEventListener("poultry-font-theme-change", onThemeChange);
    return () => window.removeEventListener("poultry-font-theme-change", onThemeChange);
  }, []);

  const changeTheme = (newTheme) => {
    setActiveFontTheme(newTheme);
    setTheme(newTheme);
  };

  const currentConfig = FONT_THEMES.find((t) => t.id === theme) || FONT_THEMES[0];

  return { theme, setTheme: changeTheme, currentConfig, themes: FONT_THEMES };
}

