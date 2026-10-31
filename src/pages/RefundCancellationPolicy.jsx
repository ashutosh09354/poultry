import useSeo from "../hooks/useSeo";
import { Container, PageHeader } from "../components/ui/ui";

const Section = ({ title, children }) => <section><h2>{title}</h2>{children}</section>;

export default function RefundCancellationPolicy() {
  useSeo("Refund and Cancellation Policy", "Refund and Cancellation Policy for polutrynext.");
  return (
    <>
      <PageHeader title="6. Refund and Cancellation Policy" crumbs={[{ label: "Home", to: "/" }, { label: "Refund and Cancellation Policy" }]} />
      <Container className="py-10 sm:py-14">
        <article className="prose-article policy-document">
          <p>Effective Date: October 30, 2026</p>
          <Section title="1. Scope">
            <p>polutrynext operates as a business directory under the assumed operating model. It does not itself sell poultry products or accept payment for third-party poultry orders through the directory.</p>
            <p>Accordingly, this Policy does not govern transactions conducted independently between customers and listed businesses. Those transactions are subject to the terms agreed between the relevant parties and applicable law.</p>
          </Section>
          <Section title="2. Paid Platform Services">
            <p>If polutrynext offers paid listing subscriptions, advertising, promotional placements, or other paid platform services, the refund and cancellation conditions applicable to each service will be disclosed before purchase.</p>
            <p>The applicable terms will specify:</p>
            <ul><li>Whether cancellation is permitted.</li><li>Any applicable cancellation charges.</li><li>Whether a partial or full refund is available.</li><li>The process for requesting a refund.</li><li>The expected processing period.</li></ul>
          </Section>
          <Section title="3. Duplicate or Failed Payments">
            <p>If a user is charged more than once for the same platform service, or a payment is debited without the corresponding service being activated, the user may contact our support team for investigation.</p>
            <p>Verified refunds will be processed through the appropriate payment channel, subject to applicable payment-provider procedures and law.</p>
          </Section>
          <Section title="4. Third-Party Product Orders">
            <p>For poultry products purchased directly from a listed business, customers must contact the relevant seller regarding cancellation, returns, replacement, or refund.</p>
            <p>This provision does not remove any rights or obligations imposed by applicable consumer protection law.</p>
          </Section>
          <Section title="5. Contact"><p>Refund and billing enquiries: [Insert Official Email Address]</p></Section>
        </article>
      </Container>
    </>
  );
}
