import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { SitterCard } from "@/components/sitters/SitterCard";
import { getSitter, myBookings, myPets, sitters, stayUpdates } from "@/lib/data";

export const Route = createFileRoute("/owner/dashboard")({
  head: () => ({
    meta: [
      { title: "Your dashboard — PetCare" },
      { name: "description", content: "Upcoming stays, pet profiles and the latest updates from your sitters." },
      { property: "og:title", content: "Your PetCare dashboard" },
      { property: "og:description", content: "Upcoming stays and updates from your sitters." },
    ],
  }),
  component: Page,
});

function Page() {
  const next = myBookings.find((b) => b.status === "Confirmed");
  const nextSitter = next && getSitter(next.sitterId);
  return (
    <div className="space-y-12">
      <div>
        <p className="eyebrow">Good morning</p>
        <h1 className="mt-2 text-4xl text-primary-deep">Hello, Riya</h1>
      </div>

      {next && nextSitter && (
        <section className="grid overflow-hidden rounded-3xl bg-primary-deep text-primary-foreground md:grid-cols-[1fr_280px]">
          <div className="p-8">
            <p className="eyebrow text-gold">Next stay</p>
            <h2 className="mt-3 text-3xl">Bruno with {nextSitter.name}</h2>
            <p className="mt-2 text-primary-foreground/70">{format(new Date(next.checkIn), "EEE d MMM")} → {format(new Date(next.checkOut), "EEE d MMM")} · {nextSitter.area}</p>
            <Button asChild variant="secondary" className="mt-6 rounded-full"><Link to="/owner/bookings">View booking</Link></Button>
          </div>
          <img src={nextSitter.cover} alt="" className="h-full min-h-48 w-full object-cover" />
        </section>
      )}

      <section>
        <div className="flex items-center justify-between"><h2 className="text-2xl">Your pets</h2><Link to="/owner/pets" className="text-sm text-primary underline">Manage</Link></div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {myPets.map((p) => (
            <div key={p.id} className="flex items-center gap-4 rounded-2xl border bg-card p-4">
              <img src={p.photo} alt={p.name} className="h-16 w-16 rounded-xl object-cover" />
              <div><p className="font-semibold">{p.name}</p><p className="text-sm text-muted-foreground">{p.breed} · {p.age} yrs</p></div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl">Recent stay updates</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {stayUpdates.map((u) => (
            <article key={u.id} className="overflow-hidden rounded-2xl border bg-card">
              <img src={u.photo} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <div className="p-5">
                <p className="text-xs text-muted-foreground">{u.time} · from {getSitter(u.sitterId)?.name}</p>
                <p className="mt-2">{u.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl">Suggested for Bruno</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {sitters.filter((s) => s.sizes.includes("Large")).slice(0, 2).map((s) => <SitterCard key={s.id} s={s} />)}
        </div>
      </section>
    </div>
  );
}
