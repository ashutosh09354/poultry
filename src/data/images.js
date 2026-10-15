// Central image registry. These two photos were already used in the original project.
// Swap in your own farm photography here (or put files in /public/images and reference "/images/...").
// Categories with no photo fall back to a neutral placeholder panel, never a mismatched image.
const shed = "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7";
const flock = "https://images.unsplash.com/photo-1612170153139-6f881ff067e0";

export const heroImage = { src: `${shed}?auto=format&fit=crop&w=1800&q=75`, alt: "Chickens inside a poultry house" };

const byCategory = {
  broiler: [shed],
  layer: [flock, shed],
  "country-chicken": [],
  hatchery: [flock],
  breeding: [shed],
};

export function photosFor(categoryId) {
  return (byCategory[categoryId] || []).map((u) => ({
    src: `${u}?auto=format&fit=crop&w=1000&q=70`,
    thumb: `${u}?auto=format&fit=crop&w=500&q=60`,
  }));
}

export const sectionImages = {
  about: `${flock}?auto=format&fit=crop&w=1100&q=70`,
  onboarding: `${shed}?auto=format&fit=crop&w=1100&q=70`,
};
