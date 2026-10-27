import { createFileRoute } from "@tanstack/react-router";
import { FileHeart, Home, IdCard, LifeBuoy, MapPin, Siren } from "lucide-react";
import garden from "@/assets/sitter-garden.jpg";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Our safety promise — PetCare" },
      { name: "description", content: "How PetCare verifies sitters, protects pets and supports owners during every stay." },
      { property: "og:title", content: "Our safety promise — PetCare" },
      { property: "og:description", content: "Identity, address and home checks plus 24/7 support during every stay." },
    ],
  }),
  component: Page,
});

const items = [
  [IdCard, "Identity verification", "Government ID matched to a live selfie before any booking."],
  [MapPin, "Address verification", "Proof of address reviewed by our trust team."],
  [Home, "Home check", "Photos reviewed for hazards, secure doors, balconies and fencing."],
  [FileHeart, "Medical info on file", "Vaccinations, allergies and vet contacts shared on confirmation."],
  [Siren, "Emergency protocol", "Sitters follow a clear plan: your vet, you, then our team."],
  [LifeBuoy, "24/7 stay support", "A real person on call for the length of every booking."],
] as const;

function Page() {
  return (
    <>
      <PageHero eyebrow="Our safety promise" title="Trust you can see, not just a badge." text="Each sitter's verification is shown step by step, so you always know exactly what's been checked." image={garden} />
      <section className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map(([Icon, t, d]) => (
          <div key={t} className="rounded-2xl border bg-card p-7 shadow-soft">
            <Icon className="h-6 w-6 text-gold" />
            <h3 className="mt-5 text-2xl">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
