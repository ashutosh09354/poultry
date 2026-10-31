import useSeo from "../hooks/useSeo";
import { Container, PageHeader } from "../components/ui/ui";

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export default function PrivacyPolicy() {
  useSeo("Privacy Policy", "Privacy Policy for Poultry.");

  return (
    <>
      <PageHeader
        title="2. Privacy Policy"
        crumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
      />
      <Container className="py-10 sm:py-14">
        <article className="prose-article policy-document">
          <p>Effective Date: October 30, 2026</p>

          <Section title="1. Introduction">
            <p>Poultry respects the privacy of visitors, users, and businesses listed on the platform.</p>
            <p>This Privacy Policy explains what information we may collect, how we use it, when we may share it, and the choices available to users.</p>
          </Section>

          <Section title="2. Information We May Collect">
            <p>Depending on the features you use, we may collect:</p>
            <p>Personal information</p>
            <ul><li>Name</li><li>Phone number</li><li>Email address</li><li>Information submitted through contact or enquiry forms</li></ul>
            <p>Business information</p>
            <ul><li>Poultry farm or business name</li><li>Business address and location</li><li>Business contact details</li><li>Business description, photographs, and listing information</li></ul>
            <p>Technical information</p>
            <ul><li>IP address</li><li>Browser and device information</li><li>Website usage and diagnostic information</li><li>Cookie and analytics information, where enabled</li></ul>
            <p>We aim to collect only information reasonably necessary for the relevant purpose.</p>
          </Section>

          <Section title="3. How We Use Information">
            <p>Information may be used to:</p>
            <ul>
              <li>Display and maintain poultry business listings.</li><li>Respond to enquiries and support requests.</li><li>Help users contact listed businesses.</li><li>Review, verify, or moderate submitted listings.</li><li>Improve website performance and user experience.</li><li>Detect spam, fraud, security incidents, and misuse.</li><li>Meet legal and regulatory obligations.</li><li>Send updates or marketing communications where permitted.</li>
            </ul>
          </Section>

          <Section title="4. Sharing of Information">
            <p>We may share relevant information with:</p>
            <ul>
              <li>The public, where information is intentionally published in a business listing.</li><li>Hosting, analytics, communication, and other service providers supporting the website.</li><li>Authorities or other parties where required or permitted by applicable law.</li><li>Relevant parties where necessary to protect our rights, users, or platform security.</li>
            </ul>
            <p>We do not intend to sell personal information to third parties as a standalone data product.</p>
            <p>If a user submits an enquiry to a listed business, the information necessary to respond may be shared with that business, where the feature is offered and the sharing is appropriately disclosed.</p>
          </Section>

          <Section title="5. Cookies and Analytics">
            <p>The website may use cookies or similar technologies to maintain functionality, understand website usage, and improve performance.</p>
            <p>Where applicable, users can manage cookies through their browser settings or available website controls. Disabling certain cookies may affect website functionality.</p>
          </Section>

          <Section title="6. Data Security">
            <p>We use reasonable technical and organizational safeguards to protect information against unauthorized access, alteration, disclosure, or loss.</p>
            <p>No internet-based system can be guaranteed completely secure.</p>
          </Section>

          <Section title="7. Data Retention">
            <p>We retain personal and business information for as long as reasonably necessary for the purposes described in this Policy, subject to applicable legal, security, and recordkeeping requirements.</p>
            <p>Information may be deleted, anonymized, or retained where legally necessary.</p>
          </Section>

          <Section title="8. User Rights and Requests">
            <p>Subject to applicable law, users may request access to relevant information, correction of inaccurate details, deletion where applicable, or withdrawal of consent where processing relies on consent.</p>
            <p>Requests may be submitted to [Insert Privacy Contact Email].</p>
            <p>We may need to verify the identity of the requester before acting on a request.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>The website is not specifically designed to collect personal information from children.</p>
            <p>Anyone submitting another person's information must have the necessary authority and comply with applicable law.</p>
          </Section>

          <Section title="10. Third-Party Websites">
            <p>Our website may contain links to third-party websites or business pages. Those websites operate under their own privacy policies and practices.</p>
            <p>We are not responsible for the privacy practices of independent third parties.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy when our practices, services, or legal obligations change. The latest version will be published on this page.</p>
          </Section>

          <Section title="12. Contact">
            <p>Privacy enquiries: [Insert Privacy Contact Email]<br />Business Name: [Insert Registered Business Name]<br />Address: [Insert Registered Address]</p>
          </Section>
        </article>
      </Container>
    </>
  );
}
