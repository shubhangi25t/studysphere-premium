import { createFileRoute, Link } from "@tanstack/react-router";
import { Timer, BarChart3, Target, RefreshCw } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/test-series")({
  head: () => ({
    meta: [
      { title: "Test Series & Mock Papers | Study Sessions" },
      {
        name: "description",
        content:
          "Weekly chapter tests, monthly full syllabus tests and exam-pattern mock papers with rank comparison and a detailed mistake report.",
      },
      { property: "og:title", content: "Test Series & Mock Papers" },
      {
        property: "og:description",
        content: "Chapter tests, full syllabus tests and rank-compared mocks.",
      },
    ],
  }),
  component: TestSeries,
});

const schedule = [
  { name: "Chapter test", when: "Every week", detail: "30 questions, 45 minutes, on the chapter just taught." },
  { name: "Unit test", when: "Every 3 weeks", detail: "60 questions across the chapters of one unit." },
  { name: "Full syllabus test", when: "Monthly", detail: "Exam-length paper covering everything studied so far." },
  { name: "Grand mock", when: "Final 8 weeks", detail: "Real exam timing, real pattern, national rank comparison." },
];

const features = [
  { icon: Timer, t: "Exam timing", d: "Tests run with an on-screen timer and the same question navigation as the real exam." },
  { icon: BarChart3, t: "Rank comparison", d: "See where you stand against everyone who attempted the same paper." },
  { icon: Target, t: "Accuracy report", d: "Speed, accuracy and negative marking broken down by subject and chapter." },
  { icon: RefreshCw, t: "Retake window", d: "Reattempt any test after two weeks to check whether the weak topic is fixed." },
];

function TestSeries() {
  return (
    <>
      <PageHero
        eyebrow="Test series"
        title="Practice under exam conditions, every single week"
        description="Tests are the part most students skip. Ours are scheduled for you, marked automatically and followed by a report that tells you exactly what to revise next."
      >
        <Button asChild size="lg">
          <Link to="/pricing">Included in both plans</Link>
        </Button>
      </PageHero>

      <Section title="The test calendar">
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">Test</th>
                <th scope="col" className="px-5 py-3 font-semibold">Frequency</th>
                <th scope="col" className="px-5 py-3 font-semibold">What it covers</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((s) => (
                <tr key={s.name} className="border-t border-border bg-card">
                  <td className="px-5 py-4 font-medium">{s.name}</td>
                  <td className="px-5 py-4 text-muted-foreground">{s.when}</td>
                  <td className="px-5 py-4 text-muted-foreground">{s.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="What you get after every test">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.t} className="h-full shadow-soft">
              <CardHeader>
                <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <f.icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="mt-3 text-base">{f.t}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.d}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
