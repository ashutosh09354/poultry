import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import { Container, PageHeader } from "../components/ui/ui";

const legalPolicies = [
  ["1. Terms & Conditions", "/terms", "Rules governing access to and use of Poultry."],
  ["2. Privacy Policy", "/privacy-policy", "How information may be collected, used, and shared."],
  ["3. Disclaimer", "/disclaimer", "Important information about listings, external links, and independent transactions."],
  ["4. Cookie Policy", "/cookie-policy", "How cookies and similar technologies may be used."],
  ["5. Business Listing and Content Policy", "/business-listing-policy", "Rules for submitting and maintaining business listings."],
  ["6. Refund and Cancellation Policy", "/refund-cancellation-policy", "Information about paid platform services and refund requests."],
  ["7. Contact Us and Grievance Redressal Policy", "/contact-grievance-policy", "How to get assistance or submit a platform-related complaint."],
  ["8. Website Policy Implementation", "/website-policy-implementation", "Steps for implementing and maintaining the website policies."],
];

export default function PrivacyCenter() {
  useSeo("Privacy Center", "Learn how Poultry handles information, what choices you have, and how to contact us about privacy.");

  return (
    <>
      <PageHeader
        title="Privacy Center"
        intro="Access Poultry's legal policies in one place."
        crumbs={[{ label: "Home", to: "/" }, { label: "Privacy Center" }]}
      />
      <Container className="py-10 sm:py-14">
        <section aria-labelledby="legal-policies-heading">
          <h2 id="legal-policies-heading" className="text-2xl font-bold sm:text-3xl">Legal policies</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">Read the policies that apply to using Poultry and its platform services.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {legalPolicies.map(([title, to, description]) => (
              <Link key={to} to={to} className="group rounded-[6px] border border-line bg-white p-5 transition-colors hover:border-brand-600 hover:bg-mist-50">
                <h3 className="text-lg font-bold text-brand-800 group-hover:underline">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-700">Read policy</span>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
