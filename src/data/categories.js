const categories = [
  {
    id: "broiler",
    name: "Broiler farms",
    short: "Meat birds raised for market in a few weeks.",
    icon: "Drumstick",
    purpose:
      "Broiler farms raise fast-growing meat chickens in batches. Buyers such as retailers, restaurants and processors look here for live or dressed birds, and new farmers look here to see how established operations describe their work.",
    lookFor: ["Batch size and placement cycle", "Live or dressed supply", "Whether the farm sells locally or to traders"],
  },
  {
    id: "layer",
    name: "Layer farms",
    short: "Hens kept for egg production.",
    icon: "Egg",
    purpose:
      "Layer farms keep hens for table eggs. Wholesalers, retailers, bakeries and institutions use this category to find egg suppliers close to them, while farmers use it to get visibility with regular buyers.",
    lookFor: ["Egg grading and packing", "Supply frequency", "Distance to your delivery location"],
  },
  {
    id: "country-chicken",
    name: "Country chicken",
    short: "Native and slower-growing breeds.",
    icon: "Bird",
    purpose:
      "Country chicken (often called desi or native chicken) covers slower-growing local and cross breeds, usually sold at a premium. This category helps buyers find farms that raise such birds, and helps small and family-run farms reach them.",
    lookFor: ["Breed or cross raised", "Age at sale", "Live bird or meat supply"],
  },
  {
    id: "hatchery",
    name: "Hatcheries",
    short: "Day-old chicks and hatching eggs.",
    icon: "Warehouse",
    purpose:
      "Hatcheries incubate eggs and supply day-old chicks to growers. Farmers starting or restocking a flock can use this category to compare hatcheries in their region and ask about breeds and supply schedules.",
    lookFor: ["Breeds and strains supplied", "Minimum order size", "Delivery area and timing"],
  },
  {
    id: "breeding",
    name: "Poultry breeding",
    short: "Parent stock and breeder flocks.",
    icon: "Dna",
    purpose:
      "Breeding farms maintain parent or breeder flocks that produce hatching eggs. It is a specialist category, listed so that hatcheries and serious growers can find breeding operations and start a conversation.",
    lookFor: ["Strain or line maintained", "Hatching egg supply", "Contact for trade enquiries only"],
  },
];

export default categories;
