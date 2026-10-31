import useSeo from "../hooks/useSeo";
import { Container, PageHeader } from "../components/ui/ui";

const Section = ({ title, children }) => <section><h2>{title}</h2>{children}</section>;

export default function CookiePolicy() {
  useSeo("Cookie Policy", "Cookie Policy for Poultry.");
  return (
    <>
      <PageHeader title="4. Cookie Policy" crumbs={[{ label: "Home", to: "/" }, { label: "Cookie Policy" }]} />
      <Container className="py-10 sm:py-14">
        <article className="prose-article policy-document">
          <p>Effective Date: October 30, 2026</p>
          <Section title="What Are Cookies?"><p>Cookies are small files stored on your device by websites. Similar technologies may be used to remember preferences, support website functions, or understand website usage.</p></Section>
          <Section title="Types of Cookies">
            <p>Depending on the technologies actually implemented, Poultry may use:</p>
            <p>Essential cookies: Required for security, navigation, or core website functions.</p>
            <p>Preference cookies: Used to remember settings or preferences.</p>
            <p>Analytics cookies: Used to understand traffic, page visits, and website performance.</p>
            <p>Marketing cookies: Used for advertising measurement or personalization, if such tools are implemented.</p>
          </Section>
          <Section title="Managing Cookies">
            <p>Users may manage or disable cookies through browser settings and any cookie controls provided on the website. Essential functionality may not work correctly if certain cookies are disabled.</p>
            <p>Where consent is required, relevant cookies or tracking technologies should be activated only in accordance with applicable consent requirements.</p>
          </Section>
          <Section title="Third-Party Technologies"><p>Third-party hosting, analytics, maps, or other embedded services may use their own technologies and policies. The website should disclose the services actually integrated.</p></Section>
          <Section title="Updates and Contact">
            <p>This Policy may be updated when the website's technology changes.</p>
            <p>For questions, contact [Insert Official Email Address].</p>
          </Section>
        </article>
      </Container>
    </>
  );
}
