import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";

import { PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PRICING, formatINR } from "@/data/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Trial ₹4,000 & Premium ₹10,000 | Study Sessions" },
      {
        name: "description",
        content:
          "Two simple plans: the Starter Trial at ₹4,000 for three months and Premium Complete at ₹10,000 for a full year, both with modules, sheets and test series.",
      },
      { property: "og:title", content: "Study Sessions Pricing" },
      {
        property: "og:description",
        content: "Starter Trial ₹4,000 · Premium Complete ₹10,000. Everything included.",
      },
    ],
  }),
  component: Pricing,
});

const rows = [
  { feature: "Recorded video modules", trial: "Selected chapters", premium: "Full syllabus" },
  { feature: "Printable sheets & notes", trial: true, premium: true },
  { feature: "Question bank access", trial: "10,000 questions", premium: "40,000+ questions" },
  { feature: "Weekly chapter tests", trial: true, premium: true },
  { feature: "Full syllabus mock tests", trial: false, premium: true },
  { feature: "Live doubt sessions", trial: "Once a week", premium: "Twice a week" },
  { feature: "Rank comparison & analysis", trial: false, premium: true },
  { feature: "Mentor call & study plan", trial: false, premium: true },
  { feature: "Completion certificate", trial: false, premium: true },
  { feature: "Access period", trial: "3 months", premium: "12 months" },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="size-5 text-success" aria-label="Included" />;
  if (value === false) return <Minus className="size-5 text-muted-foreground" aria-label="Not included" />;
  return <span className="text-sm">{value}</span>;
}

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Two plans. No hidden add-ons."
        description="Start with the trial to see how we teach, or take the premium package for the full year. Both plans include modules, sheets, the question bank and the test series."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="text-xl font-extrabold">{PRICING.trial.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{PRICING.trial.tagline}</p>
            <p className="mt-6 text-4xl font-extrabold">{formatINR(PRICING.trial.price)}</p>
            <p className="mt-1 text-sm text-muted-foreground">{PRICING.trial.period}</p>
            <Button asChild variant="outline" size="lg" className="mt-7 w-full">
              <Link to="/contact">Start the trial</Link>
            </Button>
          </div>

          <div className="relative rounded-3xl border-2 border-primary bg-card p-8 shadow-lift">
            <Badge className="absolute -top-3 left-8">Most popular</Badge>
            <h2 className="text-xl font-extrabold">{PRICING.premium.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{PRICING.premium.tagline}</p>
            <p className="mt-6 text-4xl font-extrabold">{formatINR(PRICING.premium.price)}</p>
            <p className="mt-1 text-sm text-muted-foreground">{PRICING.premium.period}</p>
            <Button asChild size="lg" className="mt-7 w-full">
              <Link to="/contact">Enrol in premium</Link>
            </Button>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Prices are per learner and include taxes. Corporate plans for 10 or more employees are
          quoted separately.
        </p>
      </Section>

      <Section title="Plan comparison">
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-secondary">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">Included</th>
                <th scope="col" className="px-5 py-3 font-semibold">
                  Starter Trial · {formatINR(PRICING.trial.price)}
                </th>
                <th scope="col" className="px-5 py-3 font-semibold">
                  Premium · {formatINR(PRICING.premium.price)}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-t border-border bg-card">
                  <td className="px-5 py-4 font-medium">{r.feature}</td>
                  <td className="px-5 py-4">
                    <Cell value={r.trial} />
                  </td>
                  <td className="px-5 py-4">
                    <Cell value={r.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Payment questions">
        <Accordion type="single" collapsible className="max-w-3xl">
          {[
            {
              q: "Can I upgrade from the trial to premium later?",
              a: "Yes. The trial amount is adjusted against the premium price if you upgrade within the three-month trial period.",
            },
            {
              q: "Is there an instalment option?",
              a: "The premium plan can be paid in two instalments of ₹5,000, taken one month apart.",
            },
            {
              q: "Do you offer refunds?",
              a: "A full refund is available within seven days of purchase if you have watched fewer than five modules.",
            },
            {
              q: "Does one payment cover all subjects?",
              a: "Yes. There is no per-subject charge — one plan covers the whole class or exam track you choose.",
            },
          ].map((f, i) => (
            <AccordionItem key={f.q} value={`p-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
