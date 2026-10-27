import { Link } from "@tanstack/react-router";
import { PawPrint } from "lucide-react";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="PetCare home">
      <span className={`grid h-8 w-8 place-items-center rounded-full ${inverted ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"}`}>
        <PawPrint className="h-4 w-4" />
      </span>
      <span className={`font-display text-2xl ${inverted ? "text-primary-foreground" : "text-primary-deep"}`}>PetCare</span>
    </Link>
  );
}
