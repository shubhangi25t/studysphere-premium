import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import materialsImage from "@/assets/materials-flatlay.jpg";
import { CtaBand } from "@/components/cta-band";
import { PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses for Class 8 to 12 | Study Sessions" },
      {
        name: "description",
        content:
          "Class-wise courses from Class 8 to Class 12 covering Maths, Science, Physics, Chemistry and Biology with modules, sheets and tests.",
      },
      { property: "og:title", content: "Courses for Class 8 to 12" },
      {
        property: "og:description",
        content: "Chapter-wise teaching, weekly tests and printable revision sheets.",
      },
    ],
  }),
  component: Courses,
});

const classes = [
  {
    grade: "Class 8",
    subjects: ["Maths", "Science", "English", "Social Science"],
    focus: "Building basics: fractions, forces, cells and reading comprehension.",
    hours: "5 hours a week",
  },
  {
    grade: "Class 9",
    subjects: ["Maths", "Science", "English", "Social Science"],
    focus: "Foundation for board patterns, with an early NEET/JEE basics track.",
    hours: "6 hours a week",
  },
  {
    grade: "Class 10",
    subjects: ["Maths", "Science", "English", "Social Science"],
    focus: "Full board preparation, sample paper drills and viva-style revision.",
    hours: "8 hours a week",
  },
  {
    grade: "Class 11",
    subjects: ["Physics", "Chemistry", "Maths", "Biology"],
    focus: "NCERT plus competitive depth, taught in the order exams follow.",
    hours: "10 hours a week",
  },
  {
    grade: "Class 12",
    subjects: ["Physics", "Chemistry", "Maths", "Biology"],
    focus: "Boards and entrance preparation running side by side.",
    hours: "12 hours a week",
  },
  {
    grade: "Dropper Batch",
    subjects: ["Physics", "Chemistry", "Maths", "Biology"],
    focus: "Full syllabus restart in nine months with daily accountability.",
    hours: "18 hours a week",
  },
];

function Courses() {
  return (
    <>
      <PageHero
        eyebrow="School programme"
        title="Class-wise courses from Class 8 to Class 12"
        description="Every class has its own timetable, its own teacher panel and its own set of sheets and tests. You pick the class, we handle the plan."
      >
        <Button asChild size="lg">
          <Link to="/pricing">Compare plans</Link>
        </Button>
      </PageHero>

      <Section title="Choose your class">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <Card key={c.grade} className="flex h-full flex-col shadow-soft">
              <CardHeader>
                <CardTitle>{c.grade}</CardTitle>
                <p className="text-sm text-muted-foreground">{c.focus}</p>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2">
                  {c.subjects.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm font-medium">{c.hours}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={materialsImage}
            alt="Study books, module booklets and practice sheets on a yellow desk"
            width={1280}
            height={853}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">What comes with every class</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Chapter-wise recorded lectures, released with a fixed weekly schedule",
                "Live doubt sessions twice a week, recorded for anyone who misses them",
                "Printable notes and formula sheets for the whole syllabus",
                "Chapter tests, half-yearly tests and full syllabus tests",
                "A monthly progress report sent to the student and the parent",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link to="/study-material">See the study material</Link>
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
