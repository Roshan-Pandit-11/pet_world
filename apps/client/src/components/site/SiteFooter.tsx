import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  { title: "Product", links: [["/sitters", "Find a sitter"], ["/how-it-works", "How it works"], ["/about", "About us"]] },
  { title: "Owners", links: [["/owner/dashboard", "My account"], ["/faq", "FAQ"], ["/safety", "Safety promise"]] },
  { title: "Sitters", links: [["/become-a-sitter", "Become a sitter"], ["/auth/register", "Create an account"], ["/faq", "Sitter questions"]] },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo inverted />
          <p className="max-w-xs text-sm text-primary-foreground/70">A loving home, whenever you're away. Trusted people. Comfortable stays. Happier pets.</p>
          <div className="flex gap-3 text-primary-foreground/70">
            <Instagram className="h-5 w-5" /><Facebook className="h-5 w-5" /><Twitter className="h-5 w-5" />
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{c.title}</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80">
              {c.links.map(([to, label]) => (
                <li key={label}><Link to={to} className="hover:text-primary-foreground">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col justify-between gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© 2026 PetCare. Demo product with sample data.</p>
          <p>Privacy · Terms · support@petcare.example</p>
        </div>
      </div>
    </footer>
  );
}
