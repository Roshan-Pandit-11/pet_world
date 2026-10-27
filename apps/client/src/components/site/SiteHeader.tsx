import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const nav = [
  { to: "/sitters", label: "Find a sitter" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/safety", label: "Our safety promise" },
  { to: "/become-a-sitter", label: "Become a sitter" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-primary-deep text-primary-foreground">
        <p className="container-page py-2 text-center text-xs tracking-wide">
          Every sitter is identity-checked before their first booking · <Link to="/safety" className="underline underline-offset-4">Learn more</Link>
        </p>
      </div>
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-6">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-medium" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="ghost" asChild><Link to="/owner/dashboard">My account</Link></Button>
            <Button variant="ghost" asChild><Link to="/auth/login">Log in</Link></Button>
            <Button asChild className="rounded-full px-5"><Link to="/sitters">Find a stay</Link></Button>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t bg-background lg:hidden">
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 hover:bg-muted">{n.label}</Link>
              ))}
              <Link to="/owner/dashboard" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 hover:bg-muted">My account</Link>
              <Link to="/auth/login" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 hover:bg-muted">Log in</Link>
              <Button asChild className="mt-2 rounded-full"><Link to="/sitters" onClick={() => setOpen(false)}>Find a stay</Link></Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
