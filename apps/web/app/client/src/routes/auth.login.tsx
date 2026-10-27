import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthShell } from "@/components/site/AuthShell";

export const Route = createFileRoute("/auth/login")({
  head: () => ({
    meta: [
      { title: "Log in — PetCare" },
      { name: "description", content: "Log in to manage your pets, bookings and stay updates." },
      { property: "og:title", content: "Log in to PetCare" },
      { property: "og:description", content: "Manage your pets, bookings and stay updates." },
    ],
  }),
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  return (
    <AuthShell title="Welcome back" text="Log in to see your pets, bookings and updates.">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (!/^\S+@\S+\.\S+$/.test(email)) return setErr("Enter a valid email address");
          if (pw.length < 8) return setErr("Password must be at least 8 characters");
          toast.success("Welcome back, Riya");
          navigate({ to: "/owner/dashboard" });
        }}
      >
        <div className="space-y-1.5"><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        <div className="space-y-1.5"><Label htmlFor="pw">Password</Label><Input id="pw" type="password" value={pw} onChange={(e) => setPw(e.target.value)} /></div>
        {err && <p className="text-sm text-destructive">{err}</p>}
        <Button type="submit" size="lg" className="w-full rounded-full">Log in</Button>
        <p className="text-center text-sm text-muted-foreground">New to PetCare? <Link to="/auth/register" className="font-medium text-primary underline">Create an account</Link></p>
      </form>
    </AuthShell>
  );
}
