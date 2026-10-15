import useSeo from "../hooks/useSeo";
import site from "../data/site";
import { Container, Notice, PageHeader } from "../components/ui/ui";

const pages = {
  privacy: {
    title: "Privacy policy",
    description: "How GreenHarvest handles information when you use the website.",
    intro: "This policy explains how GreenHarvest handles information collected through the website.",
    sections: [
      ["What the site collects", ["GreenHarvest may collect the information you provide through contact, listing and report forms to operate and improve the directory.", "Search terms and filters may be kept in the page address so that links and search results work correctly."]],
      ["Cookies and tracking", ["The site itself does not set cookies and does not include analytics or advertising tools."]],
      ["Third-party content", ["Images may be loaded from third-party services. Those services may receive standard request information such as your IP address and browser type."]],
      ["Files you choose in the listing form", ["Only upload photos that you have the right to share."]],
      ["Contacting us", [`For privacy questions, email ${site.email}.`]],
    ],
  },
  terms: {
    title: "Terms of use",
    description: "Terms for using the GreenHarvest website.",
    intro: "By using this website you agree to these terms.",
    sections: [
      ["About the site", ["GreenHarvest is a poultry farm directory intended to help buyers find farms."]],
      ["No transactions", ["The site does not sell products, process payments or arrange delivery. Any dealings with a farm are solely between you and that farm."]],
      ["Accuracy of information", ["Listings are not verified. Do not rely on the site to confirm that a farm exists, holds any licence or certification, or can supply a product. Check details with the farm directly."]],
      ["Educational content", ["Guides in the Knowledge Hub are general information. They are not veterinary, legal or food-safety advice."]],
      ["Acceptable use", ["Do not submit false or misleading information, impersonate another business, or use the site to harass others or interfere with its operation."]],
      ["Changes", ["These terms may change as the site develops. The version on this page is the current one."]],
      ["Governing law", ["No governing law or jurisdiction has been established for the site yet. This will be stated before the site operates commercially."]],
    ],
  },
  guidelines: {
    title: "Listing guidelines",
    description: "Standards for submitting accurate poultry farm listings to GreenHarvest.",
    intro: "A listing is only useful if buyers can trust it. These are the standards we expect of every listing.",
    sections: [
      ["Be accurate", ["State only facts about your own business that you can support. Keep information up to date."]],
      ["Choose the right category", ["Pick the category that best describes your main activity: broiler farm, layer farm, country chicken, hatchery or poultry breeding. Then select every product you actually supply."]],
      ["Certifications and verification", ["Do not claim organic status, licences, certifications or approvals unless you hold them and can provide proof if asked. The site does not currently verify any listing."]],
      ["Avoid unsupported claims", ["Do not publish invented reviews, ratings, customer numbers, awards or production figures. Do not publish prices or stock that you cannot honour."]],
      ["Photos", ["Use photographs of your own farm that you have the right to publish. Do not use other businesses' pictures or misleading stock images."]],
      ["Contact details", ["Provide a contact person who can answer enquiries. Contact details appear on a listing only if you choose to share them."]],
      ["Biosecurity", ["Explain any visitor rules clearly. Buyers should be asked to follow them."]],
      ["Review and removal", ["No review process is operating yet. Once one exists, listings that are inaccurate or misleading may be corrected or removed, and anyone can use the report page to flag a problem."]],
    ],
  },
};

export default function Legal({ page }) {
  const p = pages[page];
  useSeo(p.title, p.description);
  return (
    <>
      <PageHeader title={p.title} intro={p.intro} crumbs={[{ label: "Home", to: "/" }, { label: p.title }]} />
      <Container className="py-10 sm:py-14">
        <Notice tone="info" className="mb-8 max-w-prose">This page is provided for general information and is not legal advice.</Notice>
        <div className="prose-article">
          {p.sections.map(([h, paras]) => (
            <section key={h}><h2>{h}</h2>{paras.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}</section>
          ))}
        </div>
      </Container>
    </>
  );
}
