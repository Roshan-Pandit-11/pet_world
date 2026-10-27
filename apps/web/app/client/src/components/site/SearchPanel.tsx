import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const field = "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground";

export function SearchPanel() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [pet, setPet] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate({ to: "/sitters", search: { q: q || undefined, pet: pet || undefined, from: from || undefined, to: to || undefined } });
      }}
      className="grid gap-1 rounded-2xl border bg-card p-2 shadow-lift sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_auto]"
    >
      <label className="rounded-xl px-4 py-2.5 hover:bg-muted">
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Location</span>
        <input className={field} placeholder="Indiranagar, HSR…" value={q} onChange={(e) => setQ(e.target.value)} />
      </label>
      <label className="rounded-xl px-4 py-2.5 hover:bg-muted">
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Pet</span>
        <select className={field} value={pet} onChange={(e) => setPet(e.target.value)}>
          <option value="">Any pet</option>
          <option>Dog</option><option>Cat</option><option>Rabbit</option><option>Bird</option>
        </select>
      </label>
      <label className="rounded-xl px-4 py-2.5 hover:bg-muted">
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Check-in</span>
        <input type="date" className={field} value={from} onChange={(e) => setFrom(e.target.value)} />
      </label>
      <label className="rounded-xl px-4 py-2.5 hover:bg-muted">
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Check-out</span>
        <input type="date" className={field} min={from} value={to} onChange={(e) => setTo(e.target.value)} />
      </label>
      <Button type="submit" size="lg" className="h-auto min-h-12 rounded-xl px-6 sm:col-span-2 lg:col-span-1">
        <Search className="h-4 w-4" /> Search
      </Button>
    </form>
  );
}
