import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, text, image, children }: { eyebrow: string; title: string; text: string; image?: string; children?: ReactNode }) {
  return (
    <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-2">
      <div className="fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-5xl leading-[1.05] text-primary-deep md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-lg text-lg text-muted-foreground">{text}</p>
        {children}
      </div>
      {image && <img src={image} alt="" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />}
    </section>
  );
}
