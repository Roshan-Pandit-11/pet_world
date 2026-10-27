import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { CalendarDays, Heart, LayoutDashboard, PawPrint } from "lucide-react";

export const Route = createFileRoute("/owner")({
  component: OwnerLayout,
});

const items = [
  { to: "/owner/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/owner/pets", label: "My pets", icon: PawPrint },
  { to: "/owner/bookings", label: "Bookings", icon: CalendarDays },
  { to: "/owner/favorites", label: "Favourites", icon: Heart },
] as const;

function OwnerLayout() {
  return (
    <div className="container-page grid gap-10 py-10 lg:grid-cols-[220px_1fr]">
      <nav className="flex gap-1 overflow-x-auto lg:flex-col">
        {items.map((i) => (
          <Link key={i.to} to={i.to} className="flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted" activeProps={{ className: "bg-secondary text-primary font-medium" }}>
            <i.icon className="h-4 w-4" />{i.label}
          </Link>
        ))}
      </nav>
      <div className="min-w-0"><Outlet /></div>
    </div>
  );
}
