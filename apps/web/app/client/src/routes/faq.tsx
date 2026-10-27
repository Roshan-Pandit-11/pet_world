import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/faqs";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — PetCare" },
      { name: "description", content: "Answers about sitter verification, payments, cancellations, medical info, updates and emergencies." },
      { property: "og:title", content: "PetCare FAQ" },
      { property: "og:description", content: "Everything you'd want to know before booking a stay." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="container-page max-w-3xl py-16">
      <p className="eyebrow">Help centre</p>
      <h1 className="mt-4 text-5xl text-primary-deep">Frequently asked questions</h1>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
