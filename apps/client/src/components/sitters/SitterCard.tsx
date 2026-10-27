import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Sitter } from "@/lib/data";
import { useFavorites } from "@/lib/favorites";
import { inr } from "@/lib/pricing";
import { VerifiedBadge } from "./Verification";

export function SitterCard({ s, layout = "grid" }: { s: Sitter; layout?: "grid" | "list" }) {
  const fav = useFavorites();
  const liked = fav.has(s.id);
  const available = s.unavailable.length < 4;
  return (
    <article className={`group relative overflow-hidden rounded-2xl border bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift ${layout === "list" ? "sm:grid sm:grid-cols-[280px_1fr]" : ""}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted sm:aspect-auto sm:min-h-full">
        <img src={s.cover} alt={`${s.name}'s home`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <button
          onClick={() => toast(fav.toggle(s.id) ? `${s.name} saved to favourites` : "Removed from favourites")}
          aria-label={liked ? "Remove from favourites" : "Save to favourites"}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-card/90 backdrop-blur transition hover:scale-105"
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-destructive text-destructive" : "text-foreground"}`} />
        </button>
        <span className={`absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-xs font-medium backdrop-blur ${available ? "text-success" : "text-warning"}`}>
          ● {available ? "Available this week" : "Limited availability"}
        </span>
      </div>
      <div className="relative p-5">
        <Avatar className="absolute -top-7 left-5 h-14 w-14 border-4 border-card">
          <AvatarImage src={s.avatar} alt={s.name} />
          <AvatarFallback className="bg-secondary text-primary">{s.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
        </Avatar>
        <div className="mt-6 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl leading-tight">
              <Link to="/sitters/$id" params={{ id: s.id }} className="after:absolute after:inset-0">{s.name}</Link>
            </h3>
            <p className="text-sm text-muted-foreground">{s.area}, {s.city}</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium"><Star className="h-4 w-4 fill-gold text-gold" />{s.rating.toFixed(2)} <span className="font-normal text-muted-foreground">({s.reviewCount})</span></span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{s.headline}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <VerifiedBadge v={s.verification} />
          <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">{s.years} yrs experience</span>
          <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">{s.petTypes.join(" · ")}</span>
        </div>
        <div className="mt-5 flex items-baseline justify-between border-t pt-4">
          <p><span className="font-display text-2xl text-primary-deep">{inr(s.pricePerDay)}</span> <span className="text-sm text-muted-foreground">/ day</span></p>
          <span className="text-sm font-medium text-primary">View profile →</span>
        </div>
      </div>
    </article>
  );
}
