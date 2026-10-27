import type { ReactNode } from "react";
import hero from "@/assets/hero.jpg";

export function AuthShell({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <div className="container-page grid min-h-[80vh] items-center gap-12 py-12 lg:grid-cols-2">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-4xl text-primary-deep">{title}</h1>
        <p className="mt-2 text-muted-foreground">{text}</p>
        <div className="mt-8">{children}</div>
        <p className="mt-6 text-xs text-muted-foreground">Demo: accounts aren't saved yet.</p>
      </div>
      <img src={hero} alt="" className="hidden aspect-[4/5] w-full rounded-3xl object-cover lg:block" />
    </div>
  );
}
