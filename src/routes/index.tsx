import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ClipboardList, FileStack, Trophy, Users, Clock } from "lucide-react";

import heroImage from "@/assets/hero-students.jpg";
import examsImage from "@/assets/exams.jpg";
import professionalsImage from "@/assets/professionals.jpg";
import { CtaBand } from "@/components/cta-band";
import { Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PACKAGE_ITEMS, PRICING, formatINR } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Study Sessions | Learn for Class 8-12, NEET, JEE & Work" },
      {
        name: "description",
        content:
          "Modules, sheets, question banks and test series for Class 8 to 12, NEET and JEE aspirants, and working professionals. Trial at Rs 4,000, premium at Rs 10,000.",
      },
      { property: "og:title", content: "Study Sessions" },
      {
        property: "og:description",
        content: "One complete package: modules, sheets, question bank and test series.",
      },
    ],
  }),
  component: Home,
});

const icons = [BookOpen, FileStack, ClipboardList, Trophy];

const stats = [
  { value: "2.4 lakh+", label: "Learners enrolled" },
  { value: "40,000+", label: "Solved questions" },
  { value: "600+", label: "Mock tests" },
  { value: "94%", label: "Would recommend" },
];

function Home() {
  return (
    <>
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
              Class 8–12 · NEET · JEE · Professionals
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] md:text-6xl">
              Learn it once. <span className="underline-marker">Understand it properly.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Study Sessions gives you one clear study plan — recorded modules, printed-style sheets,
              a sorted question bank and a full test series — built for school students, exam
              aspirants and people who study around a job.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/pricing">Start trial at {formatINR(PRICING.trial.price)}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/courses">Browse courses</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium Complete: {formatINR(PRICING.premium.price)} for a full year.
            </p>
          </div>

          <img
            src={heroImage}
            alt="Students studying together with laptops and notebooks"
            width={1536}
            height={1024}
            className="w-full rounded-3xl object-cover shadow-lift"
          />
        </div>
      </section>

      <div className="border-b border-border bg-background">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-extrabold md:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Section
        title="Everything is in one package"
        lead="No separate purchases. Both plans open the same four parts of the course."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGE_ITEMS.map((item, i) => {
            const Icon = icons[i] ?? BookOpen;
            return (
              <Card key={item.title} className="h-full shadow-soft">
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

      <Section title="Made for three kinds of learners">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="overflow-hidden p-0 shadow-soft">
            <img
              src={examsImage}
              alt="A medical aspirant and an engineering student with their books"
              width={1280}
              height={864}
              loading="lazy"
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold">School students, Class 8 to 12</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Board syllabus taught chapter by chapter, with homework help and monthly progress
                reports for parents.
              </p>
              <Link to="/courses" className="mt-4 inline-block text-sm font-semibold underline">
                See class-wise courses
              </Link>
            </div>
          </Card>

          <Card className="overflow-hidden p-0 shadow-soft">
            <img
              src={heroImage}
              alt="Group of aspirants preparing together"
              width={1536}
              height={1024}
              loading="lazy"
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold">NEET & JEE aspirants</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Two-year and one-year tracks, previous-year paper walkthroughs and rank-compared
                mock tests every weekend.
              </p>
              <Link to="/exams" className="mt-4 inline-block text-sm font-semibold underline">
                See exam preparation
              </Link>
            </div>
          </Card>

          <Card className="overflow-hidden p-0 shadow-soft">
            <img
              src={professionalsImage}
              alt="Working professionals attending an online class in an office"
              width={1280}
              height={853}
              loading="lazy"
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold">Working professionals & teams</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Evening and weekend batches, plus corporate plans where a company can enrol a whole
                team and track completion.
              </p>
              <Link to="/professionals" className="mt-4 inline-block text-sm font-semibold underline">
                See professional plans
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="How a week of study looks">
        <ol className="grid gap-5 md:grid-cols-4">
          {[
            { t: "Monday to Thursday", d: "Watch two short modules a day and finish the matching sheet." },
            { t: "Friday", d: "Live doubt class with the subject teacher, questions sent in advance." },
            { t: "Saturday", d: "Question bank practice, sorted from easy to previous-year level." },
            { t: "Sunday", d: "Weekly test, followed by an automatic mistake report." },
          ].map((step, i) => (
            <li key={step.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="grid size-9 place-items-center rounded-full bg-primary font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 font-bold">{step.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="What learners say">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              q: "The sheets are the best part. I revise a whole chapter in twenty minutes before a test.",
              n: "Ananya R., Class 11",
            },
            {
              q: "Weekend mocks with the rank comparison told me exactly which chapters were pulling me down.",
              n: "Vikram S., NEET aspirant",
            },
            {
              q: "I study after 9 PM. The short modules and the recorded doubt classes make that possible.",
              n: "Deepak M., software engineer",
            },
          ].map((t) => (
            <figure key={t.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <blockquote className="text-sm leading-relaxed">“{t.q}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-2 text-sm font-semibold">
                <Users className="size-4 text-muted-foreground" aria-hidden="true" />
                {t.n}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="size-4" aria-hidden="true" /> Sample testimonials — replace with real
          learner feedback before publishing.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
