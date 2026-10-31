import useSeo from "../hooks/useSeo";
import { Container, PageHeader } from "../components/ui/ui";

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export default function Disclaimer() {
  useSeo("Disclaimer", "Disclaimer for Poultry.");

  return (
    <>
      <PageHeader
        title="3. Disclaimer"
        crumbs={[{ label: "Home", to: "/" }, { label: "Disclaimer" }]}
      />
      <Container className="py-10 sm:py-14">
        <article className="prose-article policy-document">
          <p>Effective Date: October 30, 2026</p>

          <Section title="General Information">
            <p>Poultry provides a directory to help users discover poultry farms and related businesses.</p>
            <p>Information published on the website is intended for general informational purposes.</p>
          </Section>

          <Section title="Third-Party Business Information">
            <p>Business details, descriptions, contact information, photographs, prices, and other listing information may be supplied by third parties.</p>
            <p>We make reasonable efforts to address reported inaccuracies but do not guarantee the accuracy, completeness, legality, or current availability of every listing.</p>
          </Section>

          <Section title="No Endorsement">
            <p>The inclusion of a business in the directory does not automatically constitute an endorsement, certification, guarantee, or recommendation by Poultry.</p>
            <p>Users should independently verify any business before entering into a transaction.</p>
          </Section>

          <Section title="Independent Transactions">
            <p>Poultry is not a party to transactions conducted directly between users and listed businesses unless expressly stated otherwise for a specific service.</p>
            <p>Users and businesses are responsible for their own negotiations, payments, agreements, product quality, delivery arrangements, and applicable legal obligations.</p>
          </Section>

          <Section title="No Professional Advice">
            <p>Information on the website should not be treated as veterinary, medical, legal, financial, or professional agricultural advice.</p>
          </Section>

          <Section title="External Links">
            <p>Links to external websites are provided for convenience. We do not control all third-party websites and are not responsible for their content or practices.</p>
          </Section>

          <Section title="Limitation">
            <p>Nothing in this Disclaimer excludes liability or consumer rights that cannot be excluded under applicable law.</p>
          </Section>

          <Section title="Contact">
            <p>For reporting incorrect or misleading information, contact [Insert Official Email Address].</p>
          </Section>
        </article>
      </Container>
    </>
  );
}
