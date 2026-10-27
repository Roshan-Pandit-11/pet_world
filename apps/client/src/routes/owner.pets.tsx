import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import cat from "@/assets/cat.jpg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { myPets, type Pet, type PetSize, type PetType } from "@/lib/data";

export const Route = createFileRoute("/owner/pets")({
  head: () => ({
    meta: [
      { title: "My pets — PetCare" },
      { name: "description", content: "Manage your pet profiles, routines and care notes." },
      { property: "og:title", content: "My pets — PetCare" },
      { property: "og:description", content: "Manage your pet profiles and care notes." },
    ],
  }),
  component: Page,
});

function Page() {
  const [pets, setPets] = useState<Pet[]>(myPets);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", type: "Dog" as PetType, breed: "", age: "", size: "Medium" as PetSize, notes: "" });
  const [err, setErr] = useState("");

  const save = () => {
    if (!form.name.trim()) return setErr("Your pet needs a name");
    const age = Number(form.age);
    if (!form.age || isNaN(age) || age < 0 || age > 30) return setErr("Enter an age between 0 and 30");
    setPets([...pets, { id: crypto.randomUUID(), name: form.name.trim(), type: form.type, breed: form.breed || "Mixed", age, size: form.size, photo: cat, notes: form.notes }]);
    toast.success(`${form.name} added`);
    setForm({ name: "", type: "Dog", breed: "", age: "", size: "Medium", notes: "" });
    setErr("");
    setOpen(false);
  };

  const sel = "w-full rounded-md border bg-card px-3 py-2 text-sm";
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-primary-deep">My pets</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button className="rounded-full"><Plus className="h-4 w-4" />Add pet</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle className="font-display text-2xl font-normal">Add a pet</DialogTitle></DialogHeader>
            <div className="grid gap-4">
              <div className="space-y-1.5"><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5"><Label>Type</Label><select className={sel} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as PetType })}><option>Dog</option><option>Cat</option><option>Rabbit</option><option>Bird</option></select></div>
                <div className="space-y-1.5"><Label>Size</Label><select className={sel} value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value as PetSize })}><option>Small</option><option>Medium</option><option>Large</option></select></div>
                <div className="space-y-1.5"><Label>Breed</Label><Input value={form.breed} onChange={(e) => setForm({ ...form, breed: e.target.value })} /></div>
                <div className="space-y-1.5"><Label>Age (years)</Label><Input inputMode="numeric" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} /></div>
              </div>
              <div className="space-y-1.5"><Label>Care notes</Label><Textarea placeholder="Food, medicines, allergies, quirks…" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></div>
              {err && <p className="text-sm text-destructive">{err}</p>}
              <Button onClick={save} className="rounded-full">Save pet</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {pets.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-2xl border bg-card shadow-soft">
            <img src={p.photo} alt={p.name} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h2 className="text-2xl">{p.name}</h2>
              <p className="text-sm text-muted-foreground">{p.type} · {p.breed} · {p.age} yrs · {p.size}</p>
              {p.notes && <p className="mt-3 text-sm">{p.notes}</p>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
