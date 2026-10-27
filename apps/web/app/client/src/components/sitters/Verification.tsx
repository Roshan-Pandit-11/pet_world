import { BadgeCheck, Clock, Home, IdCard, MapPin } from "lucide-react";
import type { Sitter, VerifyStatus } from "@/lib/data";

const label: Record<VerifyStatus, string> = { verified: "Verified", pending: "Pending", not_submitted: "Not submitted" };

export function VerificationList({ v }: { v: Sitter["verification"] }) {
  const rows = [
    { icon: IdCard, name: "Identity", s: v.identity },
    { icon: MapPin, name: "Address", s: v.address },
    { icon: Home, name: "Home check", s: v.home },
  ];
  return (
    <ul className="space-y-3">
      {rows.map((r) => (
        <li key={r.name} className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2.5"><r.icon className="h-4 w-4 text-muted-foreground" />{r.name}</span>
          <span className={r.s === "verified" ? "font-medium text-success" : r.s === "pending" ? "text-warning" : "text-muted-foreground"}>{label[r.s]}</span>
        </li>
      ))}
    </ul>
  );
}

export function VerifiedBadge({ v }: { v: Sitter["verification"] }) {
  const count = [v.identity, v.address, v.home].filter((s) => s === "verified").length;
  if (count === 3)
    return <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-primary"><BadgeCheck className="h-3.5 w-3.5" />Fully verified</span>;
  if (count > 0)
    return <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"><BadgeCheck className="h-3.5 w-3.5" />{count}/3 verified</span>;
  return <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" />Verification pending</span>;
}
