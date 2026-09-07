import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText, Library, Video } from "lucide-react";

import materialsImage from "@/assets/materials-flatlay.jpg";
import studyImage from "@/assets/study-material.jpg";
import { CtaBand } from "@/components/cta-band";
import { PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PACKAGE_ITEMS } from "@/data/site";

export const Route = createFileRoute("/study-material")({
  head: () => ({
    meta: [
      { title: "Modules, Sheets & Question Bank | Study Sessions" },
      {
        name: "description",
        content:
          "Recorded video modules, printable revision sheets and a 40,000-question bank with step-by-step solutions for Class 8-12, NEET and JEE.",
      },
      { property: "og:title", content: "Modules, Sheets & Question Bank" },
      {
        property: "og:description",
        content: "The complete study material included with every Study Sessions plan.",
      },
    ],
  }),
  component: StudyMaterial;
});

const icons = [Video, FileText, Library, Download];

const bank = [
  { label: "Class 8–10 practice", count: "12,000 questions" },
  { label: "Class 11–12 practice", count: "15,500 questions" },
  { label: "NEET previous years", count: "6,200 questions" },
  { label: "JEE previous years", count: "7,400 questions" },
];

function StudyMaterial() {
  return (
    <>
      <PageHero
        eyebrow="Study material"
        title="Modules, sheets and a question bank you will actually use"
        description="All the material is written by the same teachers who take the classes, so the wording in a lecture matches the wording on the sheet."
      >
        <Button asChild size="lg">
          <Link to="/pricing">Get full access</Link>
        </Button>
      </PageHero>

      <Section title="Four parts, one package">
        <div className="grid gap-5 md:grid-cols-2">
          {PACKAGE_ITEMS.map((item, i) => {
            const Icon = icons[i] ?? Video;
            return (
              <Card key={item.title} className="shadow-soft">
                <CardHeader>
                  <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="mt-3">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={studyImage}
            alt="A student working through printed practice sheets at a desk"
            width={1280}
            height={853}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">Inside the question bank</h2>
            <p className="mt-3 text-muted-foreground">
              Every question carries a difficulty tag, a topic tag and a full solution. Filter by
              chapter, by exam or by the mistakes you made last week.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {bank.map((b) => (
                <div key={b.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <dt className="text-sm text-muted-foreground">{b.label}</dt>
                  <dd className="mt-1 text-xl font-extrabold">{b.count}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section title="Sheets you can print and carry">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>• One-page formula sheets for Physics, Chemistry and Maths</li>
            <li>• NCERT summary sheets for Biology, line by line</li>
            <li>• Diagram sheets for labelling practice</li>
            <li>• Mistake-tracker sheets to fill in after every test</li>
            <li>• Daily plan sheets for the final 60 days before an exam</li>
          </ul>
          <img
            src={materialsImage}
            alt="Printed sheets, booklets and a tablet showing a mock test"
            width={1280}
            height={853}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lift"
          />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
