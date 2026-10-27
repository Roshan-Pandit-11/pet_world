import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { getSitter, myBookings, myPets, type BookingStatus } from "@/lib/data";
import { inr } from "@/lib/pricing";

export const Route = createFileRoute("/owner/bookings")({
  head: () => ({
    meta: [
      { title: "My bookings — PetCare" },
      { name: "description", content: "Upcoming and past pet stays with your PetCare sitters." },
      { property: "og:title", content: "My bookings — PetCare" },
      { property: "og:description", content: "Upcoming and past pet stays." },
    ],
  }),
  component: Page,
});

const tone: Record<BookingStatus, string> = {
  Requested: "bg-muted text-warning",
  Confirmed: "bg-secondary text-primary",
  "In progress": "bg-secondary text-primary",
  Completed: "bg-muted text-muted-foreground",
  Cancelled: "bg-muted text-destructive",
};

function Page() {
  return (
    <div>
      <h1 className="text-4xl text-primary-deep">Bookings</h1>
      <div className="mt-8 space-y-4">
        {myBookings.map((b) => {
          const s = getSitter(b.sitterId)!;
          const pets = myPets.filter((p) => b.petIds.includes(p.id)).map((p) => p.name).join(", ");
          return (
            <article key={b.id} className="flex flex-col gap-4 rounded-2xl border bg-card p-4 sm:flex-row sm:items-center">
              <img src={s.cover} alt="" className="h-24 w-full rounded-xl object-cover sm:w-36" />
              <div className="flex-1">
                <div className="flex items-center gap-2"><span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tone[b.status]}`}>{b.status}</span><span className="text-xs text-muted-foreground">{b.id}</span></div>
                <h2 className="mt-1 text-xl"><Link to="/sitters/$id" params={{ id: s.id }} className="hover:underline">{s.name}</Link></h2>
                <p className="text-sm text-muted-foreground">{pets} · {format(new Date(b.checkIn), "d MMM")} → {format(new Date(b.checkOut), "d MMM yyyy")}</p>
              </div>
              <p className="font-display text-2xl text-primary-deep">{inr(b.total)}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
