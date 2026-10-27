import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SitterCard } from "@/components/sitters/SitterCard";
import { sitters } from "@/lib/data";
import { useFavorites } from "@/lib/favorites";

export const Route = createFileRoute("/owner/favorites")({
  head: () => ({
    meta: [
      { title: "Favourite sitters — PetCare" },
      { name: "description", content: "Sitters you've saved for future stays." },
      { property: "og:title", content: "Favourite sitters — PetCare" },
      { property: "og:description", content: "Sitters you've saved for future stays." },
    ],
  }),
  component: Page,
});

function Page() {
  const { ids } = useFavorites();
  const list = sitters.filter((s) => ids.includes(s.id));
  return (
    <div>
      <h1 className="text-4xl text-primary-deep">Favourites</h1>
      {list.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed bg-card p-12 text-center">
          <p className="text-muted-foreground">Tap the heart on any sitter to save them here.</p>
          <Button asChild className="mt-6 rounded-full"><Link to="/sitters">Browse sitters</Link></Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">{list.map((s) => <SitterCard key={s.id} s={s} />)}</div>
      )}
    </div>
  );
}
