import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthShell } from "@/components/site/AuthShell";

export const Route = createFileRoute("/auth/register")({
  head: () => ({
    meta: [
      { title: "Create an account — PetCare" },
      { name: "description", content: "Join PetCare as a pet owner or a pet sitter." },
      { property: "og:title", content: "Join PetCare" },
      { property: "og:description", content: "Join as a pet owner or a pet sitter." },
    ],
  }),
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  const [role, setRole] = useState<"owner" | "sitter">("owner");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  return (
    <AuthShell title="Create your account" text="Tell us how you'd like to use PetCare.">
      <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
        {(["owner", "sitter"] as const).map((r) => (
          <button key={r} onClick={() => setRole(r)} className={`rounded-lg py-2.5 text-sm font-medium ${role === r ? "bg-card shadow-soft" : "text-muted-foreground"}`}>
            {r === "owner" ? "I'm a pet owner" : "I'm a pet sitter"}
          </button>
        ))}
      </div>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (name.trim().length < 2) return setErr("Enter your full name");
          if (!/^\S+@\S+\.\S+$/.test(email)) return setErr("Enter a valid email address");
          if (pw.length < 8) return setErr("Password must be at least 8 characters");
          toast.success(role === "owner" ? "Account created — add your first pet" : "Application started — we'll guide you through verification");
          navigate({ to: role === "owner" ? "/owner/pets" : "/become-a-sitter" });
        }}
      >
        <div className="space-y-1.5"><Label htmlFor="name">Full name</Label><Input id="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
        <div className="space-y-1.5"><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        <div className="space-y-1.5"><Label htmlFor="pw">Password</Label><Input id="pw" type="password" value={pw} onChange={(e) => setPw(e.target.value)} /></div>
        {err && <p className="text-sm text-destructive">{err}</p>}
        <Button type="submit" size="lg" className="w-full rounded-full">Create account</Button>
        <p className="text-center text-sm text-muted-foreground">Already a member? <Link to="/auth/login" className="font-medium text-primary underline">Log in</Link></p>
      </form>
    </AuthShell>
  );
}
