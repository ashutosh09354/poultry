import useSeo from "../hooks/useSeo";
import { Container, PageHeader } from "../components/ui/ui";

const Section = ({ title, children }) => <section><h2>{title}</h2>{children}</section>;

export default function ContactGrievancePolicy() {
  useSeo("Contact Us and Grievance Redressal Policy", "Contact Us and Grievance Redressal Policy for polutrynext.");
  return (
    <>
      <PageHeader title="7. Contact Us and Grievance Redressal Policy" crumbs={[{ label: "Home", to: "/" }, { label: "Contact Us and Grievance Redressal Policy" }]} />
      <Container className="py-10 sm:py-14">
        <article className="prose-article policy-document">
          <p>Effective Date: October 30, 2026</p>
          <Section title="Contact Information">
            <p>For website assistance, listing corrections, privacy requests, complaints, or other concerns, contact:</p>
            <p>Website: polutrynext<br />Legal Business Name: [Insert Registered Business Name]<br />Registered Address: [Insert Complete Registered Address]<br />Customer Support Email: [Insert Official Email Address]</p>
          </Section>
          <Section title="Grievance Redressal">
            <p>Users may submit a complaint concerning website functionality, inaccurate listings, suspected misuse, privacy concerns, or other platform-related issues.</p>
            <p>Please include your name, contact information, the relevant listing or page URL, a description of the issue, and any supporting information.</p>
            <p>We will acknowledge and address complaints within the timelines required by applicable law.</p>
            <p>Where the Consumer Protection (E-Commerce) Rules, 2020 apply, the platform should appoint and publish the details of the required grievance officer and comply with the applicable acknowledgement and resolution timelines.</p>
            <p>Email: [Insert Grievance Email Address]<br />Address: [Insert Business Address]</p>
            <p>Complaints will be reviewed fairly and handled in accordance with applicable law and the nature of the issue.</p>
          </Section>
        </article>
      </Container>
    </>
  );
}
