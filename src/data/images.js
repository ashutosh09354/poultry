// Central image registry. Replace these representative photos with approved photos
// supplied by each farm when they become available.
const shed = "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7";
const flock = "https://images.unsplash.com/photo-1612170153139-6f881ff067e0";
const freeRange = "https://img.hobbyfarms.com/types-of-poultry-scaled.jpeg";
const chicks = "https://5.imimg.com/data5/ANDROID/Default/2026/4/598243456/AD/XJ/EP/253989734/product-jpeg-500x500.jpg";
const eggs = "https://images.unsplash.com/photo-1506976785307-8732e854ad03";
const doba = "https://cdn.britannica.com/56/155656-050-EF76EB04/chickens-poultry-farm.jpg?w=300"
const eggs1 = "https://www.pashudhanpraharee.com/wp-content/uploads/2020/08/FB_IMG_1596419797595.jpg"
const chicks1 ="https://img.magnific.com/free-photo/hens-factory-chicken-cages_335224-1406.jpg?semt=ais_hybrid&w=740&q=80"
const freeRange1 = "https://content.jdmagicbox.com/comp/temp/a8/0484px484.x484.230308191909.r2a8/catalogue/-3u57cw2gbl.jpg"
const chicks3 = "https://t3.ftcdn.net/jpg/20/63/94/16/360_F_2063941699_LHb3hwmJWMwyjhdEfG4Fk6Xt7EKT2AcD.jpg"
const freeRange2 = "https://agricultureguruji.com/wp-content/uploads/2018/03/Poultry-Farming-at-backyard.jpg"
const flock1 = "https://content.jdmagicbox.com/comp/aurangabad-maharashtra/h5/9999px240.x240.231019200739.m9h5/catalogue/uea7hjh3k71ww68-9pfytufro2.jpg"
export const heroImage = { src: `${shed}?auto=format&fit=crop&w=1800&q=75`, alt: "Chickens inside a poultry house" };

const byCategory = {
  broiler: [shed],
  layer: [eggs, flock],
  "country-chicken": [freeRange],
  hatchery: [chicks],
  breeding: [flock],
};

export function photosFor(categoryId) {
  return (byCategory[categoryId] || []).map((u) => ({
    src: `${u}?auto=format&fit=crop&w=1000&q=70`,
    thumb: `${u}?auto=format&fit=crop&w=500&q=60`,
  }));
}

// Give each listing a photo so cards do not all repeat the same category image.
// The category gallery above remains the fallback for listings added later.
const byFarm = {
  "deccan-broiler-works": shed,
  "godavari-layer-farm": eggs1,
  "namakkal-egg-collective": flock1,
  "malwa-country-birds": freeRange1,
  "sahyadri-hatchery": chicks3,
  "terai-breeder-farm": flock,
  "malnad-broiler-farm": chicks1,
  "kathiawar-country-chicken": freeRange,
  "aravali-layer-unit": eggs,
  "kaveri-day-old-chicks": chicks,
  "doaba-broiler-farm": doba,
  "vidarbha-country-fowl": freeRange2,
};

export function cardPhotoFor(farm) {
  const source = byFarm[farm.slug] || byCategory[farm.category]?.[0];
  return source ? `${source}?auto=format&fit=crop&w=800&q=75` : undefined;
}

export const sectionImages = {
  about: `${flock}?auto=format&fit=crop&w=1100&q=70`,
  onboarding: `${shed}?auto=format&fit=crop&w=1100&q=70`,
};
