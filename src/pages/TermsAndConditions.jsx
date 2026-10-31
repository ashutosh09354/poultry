import useSeo from "../hooks/useSeo";
import { Container, PageHeader } from "../components/ui/ui";

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export default function TermsAndConditions() {
  useSeo("Terms & Conditions", "Terms and conditions for using Poultry.");

  return (
    <>
      <PageHeader
        title="1. Terms & Conditions"
        crumbs={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]}
      />
      <Container className="py-10 sm:py-14">
        <article className="prose-article policy-document">
          <p>Effective Date: October 30, 2026</p>

          <Section title="1. Introduction">
            <p>Welcome to Poultry, an online platform designed to help users discover poultry farms and related businesses.</p>
            <p>These Terms &amp; Conditions govern your access to and use of the website at _____and its related services.</p>
            <p>By accessing or using the website, you agree to these Terms. If you do not agree, please discontinue using the website.</p>
            <p>Website Name: Poultry<br />Legal Entity:<br />Registered Address:<br />Email:</p>
          </Section>

          <Section title="2. Nature of the Platform">
            <p>Poultry operates as a directory platform that helps users find poultry farms and related businesses.</p>
            <p>The platform may display business names, addresses, contact information, descriptions, photographs, and other listing details.</p>
            <p>Unless expressly stated otherwise, Poultry is not the owner, operator, manufacturer, or seller of the products or services offered by listed businesses. The platform does not guarantee any transaction between users and listed businesses.</p>
          </Section>

          <Section title="3. User Eligibility">
            <p>Users must provide accurate information when using services that require registration or submitting information. Users must have the legal capacity to enter into applicable agreements.</p>
          </Section>

          <Section title="4. Business Listings">
            <p>Business information may be submitted by business owners, representatives, or other permitted sources.</p>
            <p>We aim to maintain accurate information but do not guarantee that every listing is complete, current, verified, or available at all times.</p>
            <p>Poultry may review, edit, suspend, or remove listings that appear inaccurate, misleading, unlawful, fraudulent, or inconsistent with these Terms.</p>
          </Section>

          <Section title="5. User Responsibilities">
            <p>Users agree not to:</p>
            <ul>
              <li>Submit false, misleading, or fraudulent information.</li>
              <li>Use the platform for unlawful activities.</li>
              <li>Harass, threaten, or mislead other users or businesses.</li>
              <li>Upload content that infringes another person's rights.</li>
              <li>Attempt unauthorized access to the website or its systems.</li>
              <li>Use automated methods to collect website data without authorization.</li>
              <li>Misuse contact details obtained from business listings.</li>
            </ul>
          </Section>

          <Section title="6. Independent Business Transactions">
            <p>Any purchase, sale, quotation, negotiation, farm visit, delivery arrangement, or other transaction between a user and a listed business is undertaken independently by those parties.</p>
            <p>Users should verify the business identity, product quality, pricing, licences where applicable, payment instructions, and delivery terms before proceeding.</p>
            <p>Poultry is not responsible for the independent actions or representations of listed businesses, subject to applicable law.</p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>The website's original branding, design, text, and other proprietary materials are protected by applicable intellectual property laws.</p>
            <p>Users may not reproduce, distribute, modify, or commercially exploit protected website content without appropriate authorization.</p>
            <p>Business owners remain responsible for ensuring that they have permission to submit photographs, logos, and other materials.</p>
          </Section>

          <Section title="8. Website Availability">
            <p>We may modify, suspend, or discontinue any part of the website for maintenance, security, operational, or business reasons.</p>
            <p>We will make reasonable efforts to maintain access but do not guarantee uninterrupted availability.</p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>To the extent permitted by applicable law, Poultry shall not be liable for indirect losses arising from independent dealings between users and listed businesses, inaccurate third-party information, or temporary website interruptions.</p>
            <p>Nothing in these Terms excludes liability that cannot legally be excluded or limits any non-waivable consumer rights.</p>
          </Section>

          <Section title="10. Suspension and Termination">
            <p>We may restrict access or remove content where reasonably necessary to protect users, maintain platform integrity, address suspected misuse, or comply with applicable law.</p>
          </Section>

          <Section title="11. Governing Law and Disputes">
            <p>These Terms are governed by the laws of India. Disputes shall be handled by the competent courts having jurisdiction under applicable law.</p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>We may update these Terms from time to time. The revised version will be published on this page with an updated effective date.</p>
          </Section>

          <Section title="13. Contact">
            <p>For questions about these Terms, contact:</p>
            <p>Email: [Insert Official Email Address]<br />Phone: [Insert Official Contact Number]<br />Address: [Insert Registered Address]</p>
          </Section>
        </article>
      </Container>
    </>
  );
}
