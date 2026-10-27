import { createFileRoute } from "@tanstack/react-router";
import cat from "@/assets/cat.jpg";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PetCare — Why we started" },
      { name: "description", content: "PetCare connects pet owners with trusted home sitters so every pet gets a loving home while their family travels." },
      { property: "og:title", content: "About PetCare" },
      { property: "og:description", content: "Trusted people. Comfortable stays. Happier pets." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About us" title="Every pet deserves a home, even when you're away." text="We started PetCare after one too many anxious trips spent wondering whether our dog was okay in a kennel. Today we help families find caring, verified people with real homes." image={cat} />
      <section className="container-page grid gap-10 border-t pt-14 md:grid-cols-3">
        {[["2,400+", "stays hosted (sample)"], ["350", "verified sitters (sample)"], ["4.9", "average rating (sample)"]].map(([n, l]) => (
          <div key={l}><p className="font-display text-6xl text-primary-deep">{n}</p><p className="mt-2 text-muted-foreground">{l}</p></div>
        ))}
      </section>
    </>
  );
}
