import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Moon, LineChart, ShieldCheck } from "lucide-react";

import professionalsImage from "@/assets/professionals.jpg";
import { CtaBand } from "@/components/cta-band";
import { PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/professionals")({
  head: () => ({
    meta: [
      { title: "For Working Professionals & Teams | Study Sessions" },
      {
        name: "description",
        content:
          "Evening and weekend learning tracks for working professionals, plus corporate plans where companies enrol teams and track completion.",
      },
      { property: "og:title", content: "For Working Professionals & Teams" },
      {
        property: "og:description",
        content: "Short modules, weekend batches and corporate team plans.",
      },
    ],
  }),
  component: Professionals,
});

const benefits = [
  {
    icon: Moon,
    title: "Study after work",
    text: "Modules are 20–30 minutes long, so a chapter fits into an evening. Everything is downloadable for offline viewing.",
  },
  {
    icon: LineChart,
    title: "Track real progress",
    text: "A simple weekly dashboard shows hours studied, tests attempted and the topics you keep getting wrong.",
  },
  {
    icon: Building2,
    title: "Corporate enrolment",
    text: "Companies can enrol 10 or more employees on one invoice, with a manager view of completion and test scores.",
  },
  {
    icon: ShieldCheck,
    title: "Certificate on completion",
    text: "Finish a track and its assessments to receive a completion certificate you can share on your profile.",
  },
];

const tracks = [
  { name: "Quantitative Aptitude & Reasoning", weeks: "8 weeks", who: "Placement, banking and government exams" },
  { name: "Business Communication", weeks: "6 weeks", who: "Client-facing and team-lead roles" },
  { name: "Data Basics with Excel & SQL", weeks: "10 weeks", who: "Analysts, operations and finance teams" },
  { name: "Foundations of Mathematics", weeks: "12 weeks", who: "Professionals returning to technical study" },
  { name: "Science Refresher (PCB)", weeks: "10 weeks", who: "Healthcare and lab staff" },
  { name: "Teach-Back Trainer Track", weeks: "6 weeks", who: "Internal trainers and mentors" },
];

function Professionals() {
  return (
    <>
      <PageHero
        eyebrow="Professionals & corporate teams"
        title="Learning that fits around a full working day"
        description="Short modules, weekend live sessions and the same sheets and test series our exam students use — built for people who study between 9 PM and midnight."
      >
        <Button asChild size="lg">
          <Link to="/contact">Request a corporate quote</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={professionalsImage}
            alt="Working professionals attending a training session in an office"
            width={1280}
            height={853}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b) => (
              <Card key={b.title} className="shadow-soft">
                <CardHeader>
                  <b.icon className="size-5 text-muted-foreground" aria-hidden="true" />
                  <CardTitle className="mt-2 text-base">{b.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{b.text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Professional tracks" lead="Each track includes modules, sheets, a question bank and end-of-track assessments.">
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">Track</th>
                <th scope="col" className="px-5 py-3 font-semibold">Duration</th>
                <th scope="col" className="px-5 py-3 font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((t) => (
                <tr key={t.name} className="border-t border-border bg-card">
                  <td className="px-5 py-4 font-medium">{t.name}</td>
                  <td className="px-5 py-4 text-muted-foreground">{t.weeks}</td>
                  <td className="px-5 py-4 text-muted-foreground">{t.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
