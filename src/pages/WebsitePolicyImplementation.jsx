import useSeo from "../hooks/useSeo";
import { Container, PageHeader } from "../components/ui/ui";

export default function WebsitePolicyImplementation() {
  useSeo("Website Policy Implementation", "Website Policy Implementation for polutrynext.");
  return (
    <>
      <PageHeader title="8. Website Policy Implementation" crumbs={[{ label: "Home", to: "/" }, { label: "Website Policy Implementation" }]} />
      <Container className="py-10 sm:py-14">
        <article className="prose-article policy-document">
          <h2>Before publishing these policies:</h2>
          <ol>
            <li>Replace every placeholder with verified business details.</li>
            <li>Ensure the Privacy Policy matches the actual data collected by the website.</li>
            <li>Publish each policy on its own accessible website page.</li>
            <li>Link the relevant policies in the website footer and, where applicable, registration and checkout screens.</li>
            <li>Add appropriate consent notices and a privacy contact process.</li>
            <li>If the website introduces direct sales, online payments, delivery, or paid subscriptions, update the relevant policies before launching those features.</li>
            <li>Have the final policies reviewed by an Indian legal professional for the actual business model</li>
          </ol>
        </article>
      </Container>
    </>
  );
}
