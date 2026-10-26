// Single place for business details. Values below came from the original project
// and have NOT been confirmed: replace them with real details before launch.
const site = {
  name: "Poultry",
  tagline: "Find poultry farms, hatcheries and breeders across India",
  email: "info@poultry.com",
  phone: "", // add the real number, e.g. "+91 98765 43210"; the phone link is hidden while this is empty
  get phoneHref() { return this.phone ? `tel:${this.phone.replace(/[^\d+]/g, "")}` : ""; },
  // Set to true once the details above are confirmed; this controls the "unconfirmed" note on the Contact page.
  contactConfirmed: false,
};

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "Explore Farms", to: "/farms" },
  {
    label: "Poultry Categories",
    to: "/categories",
    children: [
      { label: "All categories", to: "/categories", hint: "How each farm type works" },
      { label: "Broiler farms", to: "/farms?category=broiler" },
      { label: "Layer farms", to: "/farms?category=layer" },
      { label: "Country chicken", to: "/farms?category=country-chicken" },
      { label: "Hatcheries", to: "/farms?category=hatchery" },
      { label: "Poultry breeding", to: "/farms?category=breeding" },
    ],
  },
  { label: "Products", to: "/products" },
  {
    label: "Resources",
    to: "/resources",
    children: [
      { label: "Knowledge Hub", to: "/resources", hint: "Guides on farm management" },
      { label: "How it works", to: "/how-it-works" },
      { label: "FAQ", to: "/faq" },
      { label: "Listing guidelines", to: "/listing-guidelines" },
    ],
  },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "About Poultry", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Report a listing", to: "/report-listing" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export default site;
