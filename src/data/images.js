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

const shed1 = "https://avinews.com/wp-content/uploads/2026/10/White-Rooster-and-Hen-in-Poultry-Barn.png"
const eggs3 = "https://www.ficsi.in/blog/wp-content/uploads/2024/05/Blog-2-16.jpg"
const chicks5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1moVNPHiX0Nu0o6cOc6RDzqXz_A2UhzkKD3hS-O94BhqfNiHVvW8btSbZ&s=10" 
const freeRange5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RUcH3WWfjwF32C_YW-ZdZyj3U0b9HpNnI2J9Oybc8K5NdkeYwdZvOtFI&s=10"
const chicks6 = "https://almsgroup.in/wp-content/uploads/2026/04/Poultry-Breeder-Farming-in-India-3.png"
const freeRange7 = "https://i.pinimg.com/736x/ed/7f/42/ed7f422ca33d88d12f1549b37602025c.jpg"
const eggs67 = "https://i.pinimg.com/1200x/15/43/c1/1543c112efde3adbcf4640fec7e33044.jpg"
const chicks36 = "https://i.pinimg.com/736x/cc/58/7a/cc587a0008553b5e04416a479ec33531.jpg"
const doba36 = "https://i.pinimg.com/1200x/93/ca/d1/93cad1c8dec2e7a4707bd3127a307ee5.jpg"
const freeRange37 = "https://i.pinimg.com/736x/2b/69/6c/2b696c0fe5b7f587802e6d554d1a3d93.jpg"
const freeRange100 = "https://i.pinimg.com/736x/15/65/ff/1565ffec3cee603f086eececcbe800fc.jpg"
const shed100 = "https://i.pinimg.com/736x/95/53/ee/9553ee585ecd8a5823ba43453f49ca29.jpg"
const eggs58 = "https://i.pinimg.com/1200x/f4/07/28/f40728ec1edb085edcebc3547f56a95d.jpg"
const freeRange57 = "https://i.pinimg.com/736x/df/13/59/df1359cdc4184b0b281ac12e889936b9.jpg"
const flock69 = "https://i.pinimg.com/736x/16/1c/eb/161cebe460d92ac9a755c8818532ec17.jpg"
const chicks39 = "https://i.pinimg.com/736x/d6/d3/ef/d6d3ef0de6cf914c2f816b939a99d508.jpg"
const freeRange23 = "https://i.pinimg.com/736x/5c/62/0a/5c620aa46ec8096e909d6be74b46f08f.jpg"
const freeRange26 = "https://i.pinimg.com/736x/b5/0f/f3/b50ff3f30cfeaf08889700511997c21a.jpg"
const chicks123 = "https://i.pinimg.com/736x/2b/69/6c/2b696c0fe5b7f587802e6d554d1a3d93.jpg"
const flock125 = "https://i.pinimg.com/736x/14/20/a7/1420a75b9f63760387c0ec4f9f7e5fce.jpg"
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


  "rayalaseema-broiler-hub": shed1,
  "krishna-valley-layers": eggs3,
  "karnal-chick-centre": chicks5,
  "hisar-deshi-poultry": freeRange5,
  "tungabhadra-poultry-unit": chicks6,
  "coastal-kudchi-farm": freeRange7,
  "nashik-golden-eggs": eggs67,
  "solapur-hatchery-services": chicks36,
  "majha-broiler-supply": doba36,
  "patiala-farm-fresh-eggs": freeRange37,
  "marwar-country-fowl": freeRange100,
  "hadoti-broiler-growers": shed100,
  "salem-layer-partners": eggs58,
  "erode-native-birds": freeRange57,
  "warangal-poultry-breeders": flock69,
  "karimnagar-chick-hatchery": chicks39,
  "awadh-layer-farm": freeRange23,
  "doab-country-chicken": freeRange26,
  "kanpur-broiler-link": chicks123,
  "agra-hatching-egg-farm": flock125,
};

export function cardPhotoFor(farm) {
  const source = byFarm[farm.slug] || byCategory[farm.category]?.[0];
  return source ? `${source}?auto=format&fit=crop&w=800&q=75` : undefined;
}

export const sectionImages = {
  about: `${flock}?auto=format&fit=crop&w=1100&q=70`,
  onboarding: `${flock}?auto=format&fit=crop&w=1400&q=82`,
};

export const supplyNetworkImages = [
  "https://images.unsplash.com/photo-1708677892304-e00e521d5afb?auto=format&fit=crop&w=1600&q=90",
  `${eggs}?auto=format&fit=crop&w=900&q=80`,
  "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2021/03/25032021-packing-egg-cartons-c-AdobeStock_408658574.jpg",
  "https://www.appledorefarmeggs.co.uk/cdn/shop/files/Commercial-photographer-Devon-becky-craven-2674.jpg?v=1713301983&width=990",
];
