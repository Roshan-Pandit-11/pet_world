import { createFileRoute, Link } from "@tanstack/react-router";
import { LayoutGrid, List, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { SitterCard } from "@/components/sitters/SitterCard";
import { sitters, type PetSize, type PetType } from "@/lib/data";
import { inr } from "@/lib/pricing";

type Search = { q?: string; pet?: string; from?: string; to?: string };

export const Route = createFileRoute("/sitters/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    q: typeof s.q === "string" ? s.q : undefined,
    pet: typeof s.pet === "string" ? s.pet : undefined,
    from: typeof s.from === "string" ? s.from : undefined,
    to: typeof s.to === "string" ? s.to : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Find a pet sitter near you — PetCare" },
      { name: "description", content: "Browse verified home pet sitters. Filter by pet type, size, price, rating and verification." },
      { property: "og:title", content: "Find a pet sitter near you — PetCare" },
      { property: "og:description", content: "Browse verified home pet sitters with transparent prices." },
    ],
  }),
  component: SittersPage,
});

const PAGE = 4;

function SittersPage() {
  const search = Route.useSearch();
  const [q, setQ] = useState(search.q ?? "");
  const [pet, setPet] = useState<PetType | "">((search.pet as PetType) ?? "");
  const [size, setSize] = useState<PetSize | "">("");
  const [maxPrice, setMaxPrice] = useState(2000);
  const [minRating, setMinRating] = useState(0);
  const [fullyVerified, setFullyVerified] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [multi, setMulti] = useState(false);
  const [sort, setSort] = useState("recommended");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [shown, setShown] = useState(PAGE);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [q, pet, size, maxPrice, minRating, fullyVerified, outdoor, multi, sort]);

  const results = useMemo(() => {
    const list = sitters.filter((s) => {
      if (q && !`${s.area} ${s.city} ${s.name}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (pet && !s.petTypes.includes(pet)) return false;
      if (size && !s.sizes.includes(size)) return false;
      if (s.pricePerDay > maxPrice) return false;
      if (s.rating < minRating) return false;
      if (fullyVerified && !(s.verification.identity === "verified" && s.verification.address === "verified" && s.verification.home === "verified")) return false;
      if (outdoor && !s.outdoorSpace) return false;
      if (multi && s.maxPets < 2) return false;
      return true;
    });
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sort === "low") list.sort((a, b) => a.pricePerDay - b.pricePerDay);
    if (sort === "high") list.sort((a, b) => b.pricePerDay - a.pricePerDay);
    if (sort === "recommended") list.sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount);
    return list;
  }, [q, pet, size, maxPrice, minRating, fullyVerified, outdoor, multi, sort]);

  const chips = [
    q && { label: `"${q}"`, clear: () => setQ("") },
    pet && { label: pet, clear: () => setPet("") },
    size && { label: `${size} pets`, clear: () => setSize("") },
    maxPrice < 2000 && { label: `Up to ${inr(maxPrice)}`, clear: () => setMaxPrice(2000) },
    minRating > 0 && { label: `${minRating}+ rating`, clear: () => setMinRating(0) },
    fullyVerified && { label: "Fully verified", clear: () => setFullyVerified(false) },
    outdoor && { label: "Outdoor space", clear: () => setOutdoor(false) },
    multi && { label: "2+ pets", clear: () => setMulti(false) },
  ].filter(Boolean) as { label: string; clear: () => void }[];

  const clearAll = () => {
    setQ(""); setPet(""); setSize(""); setMaxPrice(2000); setMinRating(0); setFullyVerified(false); setOutdoor(false); setMulti(false);
  };

  const pill = (active: boolean) => `rounded-full border px-3 py-1.5 text-sm transition ${active ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-foreground/30"}`;

  return (
    <div className="container-page py-12">
      <p className="eyebrow">Find a sitter</p>
      <h1 className="mt-3 text-4xl text-primary-deep md:text-5xl">Homes ready for your pet</h1>
      {search.from && search.to && <p className="mt-2 text-muted-foreground">For {search.from} → {search.to}</p>}

      <div className="mt-8 grid gap-10 lg:grid-cols-[280px_1fr]">
        <aside className={`${showFilters ? "block" : "hidden"} space-y-8 lg:block`}>
          <div>
            <p className="mb-2 text-sm font-semibold">Location</p>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Area or name" className="w-full rounded-xl border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Pet type</p>
            <div className="flex flex-wrap gap-2">
              {(["Dog", "Cat", "Rabbit", "Bird"] as PetType[]).map((p) => <button key={p} className={pill(pet === p)} onClick={() => setPet(pet === p ? "" : p)}>{p}</button>)}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Pet size</p>
            <div className="flex flex-wrap gap-2">
              {(["Small", "Medium", "Large"] as PetSize[]).map((p) => <button key={p} className={pill(size === p)} onClick={() => setSize(size === p ? "" : p)}>{p}</button>)}
            </div>
          </div>
          <div>
            <div className="mb-3 flex justify-between text-sm"><span className="font-semibold">Max price / day</span><span className="text-muted-foreground">{inr(maxPrice)}</span></div>
            <Slider min={800} max={2000} step={50} value={[maxPrice]} onValueChange={(v) => setMaxPrice(v[0])} />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Rating</p>
            <div className="flex gap-2">
              {[0, 4.8, 4.9, 4.95].map((r) => <button key={r} className={pill(minRating === r)} onClick={() => setMinRating(r)}>{r === 0 ? "Any" : `${r}+`}</button>)}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold">Trust & home</p>
            {[
              ["Fully verified (ID, address, home)", fullyVerified, setFullyVerified],
              ["Outdoor space / garden", outdoor, setOutdoor],
              ["Accepts 2 or more pets", multi, setMulti],
            ].map(([l, v, set]) => (
              <label key={l as string} className="flex items-center gap-3 text-sm">
                <Checkbox checked={v as boolean} onCheckedChange={(c) => (set as (b: boolean) => void)(!!c)} />{l as string}
              </label>
            ))}
          </div>
        </aside>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4">
            <p className="text-sm"><span className="font-semibold">{results.length}</span> {results.length === 1 ? "sitter" : "sitters"} found</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}><SlidersHorizontal className="h-4 w-4" />Filters</Button>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border bg-card px-3 py-2 text-sm">
                <option value="recommended">Recommended</option>
                <option value="rating">Highest rated</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
              <div className="flex rounded-lg border bg-card p-0.5">
                <button aria-label="Grid view" onClick={() => setView("grid")} className={`rounded-md p-1.5 ${view === "grid" ? "bg-secondary text-primary" : ""}`}><LayoutGrid className="h-4 w-4" /></button>
                <button aria-label="List view" onClick={() => setView("list")} className={`rounded-md p-1.5 ${view === "list" ? "bg-secondary text-primary" : ""}`}><List className="h-4 w-4" /></button>
              </div>
            </div>
          </div>

          {chips.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {chips.map((c) => (
                <button key={c.label} onClick={c.clear} className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm text-primary">{c.label}<X className="h-3.5 w-3.5" /></button>
              ))}
              <button onClick={clearAll} className="text-sm text-muted-foreground underline underline-offset-4">Clear all</button>
            </div>
          )}

          <div className={`mt-6 grid gap-6 ${view === "grid" ? "md:grid-cols-2" : ""}`}>
            {loading
              ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-96 rounded-2xl" />)
              : results.slice(0, shown).map((s) => <SitterCard key={s.id} s={s} layout={view} />)}
          </div>

          {!loading && results.length === 0 && (
            <div className="rounded-2xl border border-dashed bg-card p-12 text-center">
              <h3 className="text-2xl">No homes match those filters</h3>
              <p className="mt-2 text-muted-foreground">Try widening your budget or removing a filter.</p>
              <Button onClick={clearAll} className="mt-6 rounded-full">Reset filters</Button>
            </div>
          )}

          {!loading && shown < results.length && (
            <div className="mt-10 text-center"><Button variant="outline" className="rounded-full" onClick={() => setShown(shown + PAGE)}>Load more sitters</Button></div>
          )}
          <p className="mt-10 text-center text-xs text-muted-foreground">Can't find the right fit? <Link to="/how-it-works" className="underline">See how PetCare works</Link>.</p>
        </div>
      </div>
    </div>
  );
}
