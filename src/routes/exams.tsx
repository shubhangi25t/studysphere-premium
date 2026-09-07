import { createFileRoute, Link } from "@tanstack/react-router";
import { Stethoscope, Cog, CalendarDays } from "lucide-react";

import examsImage from "@/assets/exams.jpg";
import { CtaBand } from "@/components/cta-band";
import { PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/exams")({
  head: () => ({
    meta: [
      { title: "NEET & JEE Preparation | Study Sessions" },
      {
        name: "description",
        content:
          "Two-year, one-year and dropper tracks for NEET and JEE with concept modules, previous-year papers and weekly rank-compared mock tests.",
      },
      { property: "og:title", content: "NEET & JEE Preparation" },
      {
        property: "og:description",
        content: "Structured tracks, previous-year papers and weekly mock tests.",
      },
    ],
  }),
  component: Exams,
});

const tracks = [
  {
    icon: Stethoscope,
    name: "NEET",
    subjects: "Physics · Chemistry · Botany · Zoology",
    points: [
      "NCERT line-by-line coverage for Biology",
      "Numerical practice sets for Physics",
      "Weekly 180-question mock in exam format",
    ],
  },
  {
    icon: Cog,
    name: "JEE Main & Advanced",
    subjects: "Physics · Chemistry · Mathematics",
    points: [
      "Concept modules followed by advanced problem sets",
      "Separate Main and Advanced level test papers",
      "Previous-year papers from the last 15 years, solved",
    ],
  },
];

function Exams() {
  return (
    <>
      <PageHero
        eyebrow="Entrance exams"
        title="NEET and JEE preparation that follows a real timetable"
        description="Pick a two-year track from Class 11, a one-year track from Class 12, or the dropper batch. Each one ends with a full revision phase and a mock test marathon."
      >
        <Button asChild size="lg">
          <Link to="/test-series">View the test series</Link>
        </Button>
      </PageHero>

      <Section title="Two exam tracks">
        <div className="grid gap-6 lg:grid-cols-2">
          {tracks.map((t) => (
            <Card key={t.name} className="shadow-soft">
              <CardHeader>
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <t.icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="mt-3">{t.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{t.subjects}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {t.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">The preparation calendar</h2>
            <ol className="mt-6 space-y-5">
              {[
                { p: "Phase 1 — Concepts", d: "Chapter teaching with the matching sheet and a short test." },
                { p: "Phase 2 — Practice", d: "Question bank drills sorted by difficulty and by topic weight." },
                { p: "Phase 3 — Revision", d: "Rapid revision modules, formula sheets and error notebooks." },
                { p: "Phase 4 — Mocks", d: "Full-length papers in exam timing, with rank and analysis." },
              ].map((s) => (
                <li key={s.p} className="flex gap-4">
                  <CalendarDays className="mt-1 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold">{s.p}</h3>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <img
            src={examsImage}
            alt="A medical aspirant and an engineering student holding their books"
            width={1280}
            height={864}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lift"
          />
        </div>
      </Section>

      <Section title="Common questions">
        <Accordion type="single" collapsible className="max-w-3xl">
          {[
            {
              q: "Can I prepare for boards and NEET or JEE at the same time?",
              a: "Yes. The Class 11 and 12 timetables include board-pattern practice alongside entrance-level problems, so you are not studying the same chapter twice.",
            },
            {
              q: "Are the classes live or recorded?",
              a: "Teaching modules are recorded so you can watch them at your pace. Doubt sessions are live twice a week and recorded afterwards.",
            },
            {
              q: "What if I join in the middle of the year?",
              a: "You get access to every module released so far, and a catch-up plan that fits the remaining months.",
            },
            {
              q: "Is the test series included in the price?",
              a: "Yes. Both the Starter Trial and Premium Complete plans include the test series with no extra charge.",
            },
          ].map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <CtaBand />
    </>
  );
}
