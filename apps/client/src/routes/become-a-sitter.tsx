import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { PageHero } from "@/components/site/PageHero";
import { inr } from "@/lib/pricing";

export const Route = createFileRoute("/become-a-sitter")({
  head: () => ({
    meta: [
      { title: "Become a pet sitter — Earn from home with PetCare" },
      { name: "description", content: "Host pets in your home, set your own price and schedule, and get verified with PetCare." },
      { property: "og:title", content: "Become a PetCare sitter" },
      { property: "og:description", content: "Share your home. Earn doing what you love." },
    ],
  }),
  component: Page,
});

function Page() {
  const [price, setPrice] = useState(1200);
  const [nights, setNights] = useState(10);
  const earnings = Math.round(price * nights * 0.85);
  return (
    <>
      <PageHero eyebrow="Become a sitter" title="Share your home. Earn doing what you love." text="Set your own price and dates. We handle verification, payments and around-the-clock support." image={hero}>
        <Button asChild size="lg" className="mt-8 rounded-full"><Link to="/auth/register">Start your application</Link></Button>
      </PageHero>
      <section className="container-page grid gap-10 rounded-3xl bg-secondary p-10 md:p-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Earnings estimate</p>
          <h2 className="mt-3 text-4xl text-primary-deep">What could you earn each month?</h2>
          <p className="mt-3 text-muted-foreground">Estimate after PetCare's 15% host fee. Illustrative only.</p>
        </div>
        <div className="space-y-8 rounded-2xl bg-card p-8">
          <div>
            <div className="mb-3 flex justify-between text-sm"><span>Price per day</span><b>{inr(price)}</b></div>
            <Slider min={600} max={2500} step={50} value={[price]} onValueChange={(v) => setPrice(v[0])} />
          </div>
          <div>
            <div className="mb-3 flex justify-between text-sm"><span>Nights hosted per month</span><b>{nights}</b></div>
            <Slider min={1} max={30} value={[nights]} onValueChange={(v) => setNights(v[0])} />
          </div>
          <p className="border-t pt-6"><span className="font-display text-5xl text-primary-deep">{inr(earnings)}</span> <span className="text-muted-foreground">/ month</span></p>
        </div>
      </section>
    </>
  );
}
