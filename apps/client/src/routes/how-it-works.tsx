import { createFileRoute, Link } from "@tanstack/react-router";
import interior from "@/assets/home-interior.jpg";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How PetCare works — Book a home stay in minutes" },
      { name: "description", content: "Search, meet, book and get daily updates. See how PetCare home boarding works for owners and sitters." },
      { property: "og:title", content: "How PetCare works" },
      { property: "og:description", content: "Search, meet, book and get daily updates." },
    ],
  }),
  component: Page,
});

const steps = [
  ["Tell us about your pet", "Create a pet profile with routines, food, medicines and vet details."],
  ["Search verified homes", "Filter by dates, pet type, size, price and verification level."],
  ["Message and request", "Ask questions, then request dates. You're only charged once the sitter confirms."],
  ["Hand-over day", "Drop off your pet with their bed, food and favourite toy. Sitter confirms check-in."],
  ["Daily updates", "Photos and notes on meals, walks and mood land in your account every day."],
  ["Welcome home & review", "Pick up a happy pet and leave a review to help other families."],
];

function Page() {
  return (
    <>
      <PageHero eyebrow="How it works" title="From search to safe return, every step is clear." text="PetCare keeps booking simple and keeps you close to your pet while you're away." image={interior} />
      <section className="container-page">
        <ol className="grid gap-px overflow-hidden rounded-3xl border bg-border md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <li key={t} className="bg-card p-8">
              <span className="font-display text-4xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 text-center"><Button asChild size="lg" className="rounded-full"><Link to="/sitters">Find a sitter</Link></Button></div>
      </section>
    </>
  );
}
