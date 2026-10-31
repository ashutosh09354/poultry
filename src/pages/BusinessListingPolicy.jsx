import useSeo from "../hooks/useSeo";
import { Container, PageHeader } from "../components/ui/ui";

const Section = ({ title, children }) => <section><h2>{title}</h2>{children}</section>;

export default function BusinessListingPolicy() {
  useSeo("Business Listing and Content Policy", "Business Listing and Content Policy for polutrynext.");
  return (
    <>
      <PageHeader title="5. Business Listing and Content Policy" crumbs={[{ label: "Home", to: "/" }, { label: "Business Listing and Content Policy" }]} />
      <Container className="py-10 sm:py-14">
        <article className="prose-article policy-document">
          <p>Effective Date: October 30, 2026</p>
          <Section title="Purpose"><p>This Policy sets out the rules for submitting and maintaining poultry farm and related business listings on polutrynext.</p></Section>
          <Section title="Listing Information"><p>Business owners or authorized representatives must provide accurate information, including the business name, address, contact details, description, and supporting materials requested by the platform.</p></Section>
          <Section title="Accuracy and Verification">
            <p>A listing must not contain false claims, misleading contact information, fabricated certifications, or deceptive photographs.</p>
            <p>Unless the website expressly identifies a particular verification process, publication of a listing must not be interpreted as verification or certification by polutrynext.</p>
          </Section>
          <Section title="Prohibited Content">
            <p>The following may be rejected or removed:</p>
            <ul><li>Fraudulent or misleading business details.</li><li>Impersonation of another business.</li><li>Unauthorized logos, images, or copyrighted content.</li><li>Spam, abusive material, or unlawful content.</li><li>False claims about licences, certifications, or product quality.</li><li>Content prohibited by applicable law.</li></ul>
          </Section>
          <Section title="Review and Removal">
            <p>polutrynext may request supporting information, correct obvious errors, suspend a listing, or remove content where reasonably necessary.</p>
            <p>Where appropriate, the business owner may be given an opportunity to correct the information or respond to a complaint.</p>
          </Section>
          <Section title="Reporting a Listing"><p>Users can report an inaccurate, suspicious, or misleading listing by contacting [Insert Official Email Address] with the listing URL and relevant details.</p></Section>
          <Section title="Listing Fees"><p>If paid listing, advertising, subscription, or promotional services are introduced, their applicable charges, duration, renewal rules, and cancellation terms must be disclosed before payment.</p></Section>
          <Section title="Contact"><p>Listing support: [Insert Official Email Address]</p></Section>
        </article>
      </Container>
    </>
  );
}
