import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { Award, Check, Clock, Heart, Star } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { VerificationList, VerifiedBadge } from "@/components/sitters/Verification";
import { getSitter, myPets, reviews } from "@/lib/data";
import { useFavorites } from "@/lib/favorites";
import { inr, nightsBetween, priceBreakdown } from "@/lib/pricing";

export const Route = createFileRoute("/sitters/$id")({
  loader: ({ params }) => {
    const sitter = getSitter(params.id);
    if (!sitter) throw notFound();
    return { sitter };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.sitter.name} — Pet sitter in ${loaderData.sitter.area} | PetCare` },
          { name: "description", content: loaderData.sitter.headline },
          { property: "og:title", content: `${loaderData.sitter.name} on PetCare` },
          { property: "og:description", content: loaderData.sitter.headline },
        ]
      : [{ title: "Sitter not found — PetCare" }, { name: "robots", content: "noindex" }],
  }),
  component: SitterProfile,
});

function SitterProfile() {
  const { sitter: s } = Route.useLoaderData();
  const navigate = useNavigate();
  const fav = useFavorites();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [pets, setPets] = useState<string[]>([myPets[0].id]);
  const [notes, setNotes] = useState("");
  const nights = nightsBetween(checkIn ? new Date(checkIn) : undefined, checkOut ? new Date(checkOut) : undefined);
  const price = priceBreakdown(s.pricePerDay, nights, pets.length);
  const unavailable = s.unavailable.map((d) => new Date(d + "T00:00"));
  const eligiblePets = myPets.filter((p) => s.petTypes.includes(p.type));

  const request = () => {
    if (!nights) return toast.error("Choose check-in and check-out dates");
    if (!pets.length) return toast.error("Select at least one pet");
    if (pets.length > s.maxPets) return toast.error(`${s.name.split(" ")[0]} can host up to ${s.maxPets} pet(s)`);
    toast.success(`Request sent to ${s.name}`, { description: `${nights} nights · ${inr(price.total)} · You'll hear back ${s.responseTime}.` });
    navigate({ to: "/owner/bookings" });
  };

  return (
    <div className="container-page py-10">
      <Link to="/sitters" className="text-sm text-muted-foreground hover:text-foreground">← All sitters</Link>

      <div className="mt-5 grid h-[420px] gap-3 overflow-hidden rounded-3xl md:grid-cols-[2fr_1fr]">
        <img src={s.gallery[0]} alt={`${s.name}'s home`} className="h-full w-full object-cover" />
        <div className="hidden grid-rows-2 gap-3 md:grid">
          <img src={s.gallery[1]} alt="" loading="lazy" className="h-full w-full object-cover" />
          <img src={s.gallery[2]} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]">
        <div className="space-y-12">
          <header className="flex flex-wrap items-start gap-5">
            <Avatar className="h-20 w-20">
              <AvatarImage src={s.avatar} alt={s.name} />
              <AvatarFallback>{s.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-4xl text-primary-deep md:text-5xl">{s.name}</h1>
              <p className="mt-1 text-muted-foreground">{s.area}, {s.city} · {s.years} years experience</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <span className="flex items-center gap-1 font-medium"><Star className="h-4 w-4 fill-gold text-gold" />{s.rating.toFixed(2)} ({s.reviewCount} reviews)</span>
                <VerifiedBadge v={s.verification} />
                <span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-4 w-4" />Replies {s.responseTime}</span>
              </div>
            </div>
            <Button variant="outline" className="rounded-full" onClick={() => toast(fav.toggle(s.id) ? "Saved to favourites" : "Removed from favourites")}>
              <Heart className={`h-4 w-4 ${fav.has(s.id) ? "fill-destructive text-destructive" : ""}`} />Save
            </Button>
          </header>

          <section>
            <h2 className="text-2xl">{s.headline}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.qualifications.map((q) => <span key={q} className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm text-primary"><Award className="h-3.5 w-3.5" />{q}</span>)}
            </div>
          </section>

          <section className="grid gap-6 rounded-2xl border bg-card p-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl">Verification</h3>
              <VerificationList v={s.verification} />
            </div>
            <div className="space-y-2 text-sm">
              <h3 className="mb-4 text-xl">Accepts</h3>
              <p><span className="text-muted-foreground">Pets:</span> {s.petTypes.join(", ")}</p>
              <p><span className="text-muted-foreground">Sizes:</span> {s.sizes.join(", ")}</p>
              <p><span className="text-muted-foreground">Max at once:</span> {s.maxPets}</p>
              <p><span className="text-muted-foreground">Outdoor space:</span> {s.outdoorSpace ? "Yes" : "No"}</p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl">The home</h3>
            <p className="mt-3 text-muted-foreground">{s.homeDescription}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.amenities.map((a) => <li key={a} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{a}</li>)}
            </ul>
          </section>

          <section>
            <h3 className="text-2xl">A typical day</h3>
            <ol className="mt-5 space-y-3 border-l pl-6">
              {s.routine.map((r) => <li key={r} className="relative text-sm before:absolute before:-left-[29px] before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-gold">{r}</li>)}
            </ol>
          </section>

          <section className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl">Availability</h3>
              <p className="mt-1 text-sm text-muted-foreground">Crossed-out dates are already booked.</p>
              <Calendar mode="multiple" selected={[]} disabled={[...unavailable, { before: new Date() }]} className="mt-4 rounded-2xl border bg-card" />
            </div>
            <div>
              <h3 className="text-2xl">House rules</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">{s.rules.map((r) => <li key={r}>• {r}</li>)}</ul>
              <h3 className="mt-8 text-2xl">Cancellation</h3>
              <p className="mt-3 text-sm text-muted-foreground">Free cancellation up to 48 hours before check-in. 50% refund after that.</p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl">Reviews</h3>
            <p className="text-xs text-muted-foreground">Demo content</p>
            <div className="mt-5 space-y-5">
              {reviews.map((r) => (
                <div key={r.name} className="border-b pb-5">
                  <div className="flex justify-between text-sm"><span className="font-semibold">{r.name} · <span className="font-normal text-muted-foreground">{r.pet}</span></span><span className="text-muted-foreground">{r.date}</span></div>
                  <p className="mt-2 text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-card p-6 shadow-lift">
            <p><span className="font-display text-3xl text-primary-deep">{inr(s.pricePerDay)}</span> <span className="text-muted-foreground">/ day</span></p>
            <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border">
              <label className="border-r p-3">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Check-in</span>
                <input type="date" min={format(new Date(), "yyyy-MM-dd")} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full bg-transparent text-sm outline-none" />
              </label>
              <label className="p-3">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Check-out</span>
                <input type="date" min={checkIn} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full bg-transparent text-sm outline-none" />
              </label>
            </div>
            <div className="mt-5">
              <p className="mb-2 text-sm font-semibold">Which pets?</p>
              {eligiblePets.length === 0 && <p className="text-sm text-muted-foreground">None of your pets match this sitter.</p>}
              {eligiblePets.map((p) => (
                <label key={p.id} className="flex items-center gap-3 py-1.5 text-sm">
                  <Checkbox checked={pets.includes(p.id)} onCheckedChange={(c) => setPets(c ? [...pets, p.id] : pets.filter((x) => x !== p.id))} />
                  <img src={p.photo} alt="" className="h-7 w-7 rounded-full object-cover" />{p.name} <span className="text-muted-foreground">· {p.breed}</span>
                </label>
              ))}
            </div>
            <Textarea placeholder="Special instructions (feeding, meds, quirks)…" value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-4" />
            {nights > 0 && (
              <dl className="mt-5 space-y-2 border-t pt-4 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">{inr(price.perNight)} × {nights} nights</dt><dd>{inr(price.subtotal)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Service fee (8%)</dt><dd>{inr(price.serviceFee)}</dd></div>
                <div className="flex justify-between border-t pt-2 font-semibold"><dt>Total</dt><dd>{inr(price.total)}</dd></div>
                {pets.length > 1 && <p className="text-xs text-muted-foreground">Additional pets are 20% off.</p>}
              </dl>
            )}
            <Button size="lg" className="mt-5 w-full rounded-full" onClick={request}>Request booking</Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">You won't be charged until {s.name.split(" ")[0]} confirms.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
