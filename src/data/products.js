// These are the product types a farm can select when it creates a listing.
const products = [
  { id: "eggs", name: "Table eggs", icon: "Egg", categories: ["layer"],
    info: "Eggs for eating, sold by layer farms. Ask about grading, tray or crate packing and how often supply is available.",
    askAbout: ["Egg size or grade", "Packing (trays, crates)", "Regular or one-off supply"] },
  { id: "broiler-chicken", name: "Broiler chicken", icon: "Drumstick", categories: ["broiler"],
    info: "Live birds or dressed chicken from broiler farms. Ask whether the farm sells live weight, dressed weight, or both.",
    askAbout: ["Live or dressed", "Average bird weight", "Batch timing"] },
  { id: "country-chicken", name: "Country chicken", icon: "Bird", categories: ["country-chicken"],
    info: "Native and slower-growing birds. Age at sale varies widely, so confirm it with the farm.",
    askAbout: ["Breed or cross", "Age at sale", "Live or meat"] },
  { id: "day-old-chicks", name: "Day-old chicks", icon: "Baby", categories: ["hatchery"],
    info: "Chicks supplied by hatcheries to growers. Breed, minimum order size and delivery arrangements differ by hatchery.",
    askAbout: ["Breed or strain", "Minimum order", "Delivery and timing"] },
  { id: "hatching-eggs", name: "Hatching eggs", icon: "CircleDot", categories: ["breeding", "hatchery"],
    info: "Fertile eggs from breeder flocks, mainly traded between breeding farms and hatcheries.",
    askAbout: ["Strain or line", "Supply schedule", "Trade-only or open to individuals"] },
  { id: "poultry-manure", name: "Poultry manure", icon: "Sprout", categories: ["layer", "broiler", "country-chicken"],
    info: "A by-product some farms sell to crop growers. Availability depends on the farm and the season.",
    askAbout: ["Quantity available", "Collection or delivery", "Pricing basis"] },
];

export default products;
