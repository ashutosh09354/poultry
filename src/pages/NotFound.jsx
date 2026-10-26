import useSeo from "../hooks/useSeo";
import { Button, Container } from "../components/ui/ui";

export default function NotFound({ what = "page" }) {
  useSeo("Page not found", "The page you were looking for could not be found.");
  return (
    <Container className="py-20 sm:py-28">
      <p className="font-display text-7xl font-bold text-mist-300" aria-hidden="true">404</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-5xl">We could not find that {what}</h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">The link may be wrong, or the {what} may have been moved. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/farms">Explore farms</Button>
        <Button to="/categories" variant="outline">Poultry categories</Button>
        <Button to="/resources" variant="outline">Knowledge Hub</Button>
        <Button to="/" variant="outline">Home</Button>
      </div>
    </Container>
  );
}
