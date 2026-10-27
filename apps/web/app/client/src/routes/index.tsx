import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Camera, HeartHandshake, Home, Phone, ReceiptText, ShieldCheck, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import cat from "@/assets/cat.jpg";
import garden from "@/assets/sitter-garden.jpg";
import interior from "@/assets/home-interior.jpg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SearchPanel } from "@/components/site/SearchPanel";
import { SitterCard } from "@/components/sitters/SitterCard";
import { reviews, sitters } from "@/lib/data";
import { faqs } from "@/lib/faqs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PetCare — A loving home, whenever you're away" },
      { name: "description", content: "Find verified home pet sitters near you. Transparent pricing, daily updates and personalised care while you travel." },
      { property: "og:title", content: "PetCare — A loving home, whenever you're away" },
      { property: "og:description", content: "Trusted people. Comfortable stays. Happier pets." },
    ],
  }),
  component: Index,
});

const trust = [
  { icon: ShieldCheck, title: "Verified sitter profiles", text: "Identity, address and home checks shown clearly." },
  { icon: ReceiptText, title: "Transparent pricing", text: "See the full price before you request." },
  { icon: HeartHandshake, title: "Personalised pet care", text: "Your routines, feeding and medicines followed." },
  { icon: Bell, title: "Updates while you're away", text: "Daily photos and notes from your sitter." },
];

const steps = [
  { n: "01", title: "Search nearby homes", text: "Filter by pet type, size, dates and budget to find homes that suit your pet." },
  { n: "02", title: "Meet & request", text: "Read profiles, check verification, message the sitter and request your dates." },
  { n: "03", title: "Relax with updates", text: "Get daily photos and notes, then welcome home a happy, well-rested pet." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-20">
          <div className="fade-up">
            <p className="eyebrow flex items-center gap-2"><ShieldCheck className="h-4 w-4" />Home boarding with verified sitters</p>
            <h1 className="mt-5 text-5xl leading-[1.02] text-primary-deep md:text-7xl">
              A loving home, <em className="text-primary">whenever</em> you're away.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Safe, comfortable stays in real homes, with caregivers who follow your pet's routine and send you updates every day.
            </p>
            <div className="mt-8"><SearchPanel /></div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {sitters.slice(0, 4).map((s) => (
                  <img key={s.id} src={s.avatar} alt="" className="h-10 w-10 rounded-full border-2 border-background object-cover" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="flex items-center gap-1 font-semibold text-foreground"><Star className="h-4 w-4 fill-gold text-gold" />4.9 average rating</span>
                from pet parents across Bengaluru (sample data)
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-24 -top-16 -z-10 h-96 w-96 rounded-full bg-secondary" />
            <img src={hero} alt="A golden retriever relaxing on a sofa with a smiling caregiver" width={1280} height={1536} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift" />
            <div className="absolute -bottom-8 -left-6 hidden w-56 rounded-2xl border bg-card p-3 shadow-lift md:block">
              <img src={cat} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
              <p className="mt-2 px-1 text-xs text-muted-foreground"><span className="font-semibold text-foreground">Day 3 update</span> · Miso found the sunny spot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y bg-card">
        <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="flex gap-4">
              <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="font-semibold">{t.title}</p>
                <p className="text-sm text-muted-foreground">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-4xl text-primary-deep md:text-5xl">Three calm steps to a worry-free trip.</h2>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border-t pt-6">
              <span className="font-display text-5xl text-gold">{s.n}</span>
              <h3 className="mt-4 text-2xl">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured sitters */}
      <section className="bg-secondary/60 py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Featured sitters</p>
              <h2 className="mt-3 text-4xl text-primary-deep md:text-5xl">Homes our pet parents love.</h2>
            </div>
            <Button variant="outline" asChild className="rounded-full"><Link to="/sitters">Browse all sitters</Link></Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sitters.slice(0, 3).map((s) => <SitterCard key={s.id} s={s} />)}
          </div>
        </div>
      </section>

      {/* Why PetCare */}
      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
        <div className="grid grid-cols-5 gap-4">
          <img src={interior} alt="A calm living room with a dog resting in its bed" loading="lazy" className="col-span-3 aspect-[3/4] rounded-3xl object-cover" />
          <img src={garden} alt="A sitter walking two dogs in a garden" loading="lazy" className="col-span-2 mt-16 aspect-[3/5] rounded-3xl object-cover" />
        </div>
        <div>
          <p className="eyebrow">Why PetCare</p>
          <h2 className="mt-3 text-4xl text-primary-deep md:text-5xl">Not a kennel. A second home.</h2>
          <ul className="mt-10 space-y-6">
            {[
              [Home, "A comfortable home environment", "Sofas, gardens and quiet corners instead of cages."],
              [Sparkles, "Care tailored to your pet", "Feeding, walks and medicines that match home."],
              [ShieldCheck, "Transparent caregiver profiles", "Every verification step shown, nothing hidden."],
              [Camera, "Daily photo and activity updates", "Know exactly how their day went."],
              [Phone, "Emergency contacts on file", "Your vet and backup contact, always at hand."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Home;
              return (
                <li key={t as string} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-primary"><I className="h-5 w-5" /></span>
                  <div><p className="font-semibold">{t as string}</p><p className="text-sm text-muted-foreground">{d as string}</p></div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-deep py-24 text-primary-foreground">
        <div className="container-page">
          <p className="eyebrow text-gold">Pet stories</p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">"They came home calmer than when they left."</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-7">
                <div className="flex gap-0.5">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
                <blockquote className="mt-4 leading-relaxed text-primary-foreground/90">{r.text}</blockquote>
                <figcaption className="mt-6 text-sm text-primary-foreground/60">{r.name} · {r.pet}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-xs text-primary-foreground/50">Sample reviews for demonstration.</p>
        </div>
      </section>

      {/* Become a sitter */}
      <section className="container-page py-24">
        <div className="grid overflow-hidden rounded-3xl bg-secondary lg:grid-cols-2">
          <div className="p-10 md:p-14">
            <p className="eyebrow">For pet lovers</p>
            <h2 className="mt-3 text-4xl text-primary-deep md:text-5xl">Share your home. Earn doing what you love.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">Set your own price and availability. We handle verification, payments and support.</p>
            <Button asChild size="lg" className="mt-8 rounded-full"><Link to="/become-a-sitter">Become a sitter</Link></Button>
          </div>
          <img src={garden} alt="" loading="lazy" className="h-full min-h-72 w-full object-cover" />
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page grid gap-12 pb-8 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="eyebrow">Questions</p>
          <h2 className="mt-3 text-4xl text-primary-deep">Everything you'd want to know.</h2>
          <Link to="/faq" className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4">See all FAQs</Link>
        </div>
        <Accordion type="single" collapsible>
          {faqs.slice(0, 5).map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
