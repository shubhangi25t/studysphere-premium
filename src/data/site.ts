export const SITE_NAME = "Study Sessions";

export const PRICING = {
  trial: {
    name: "Starter Trial",
    price: 4000,
    period: "3 months access",
    tagline: "Try the full teaching system before you commit.",
  },
  premium: {
    name: "Premium Complete",
    price: 10000,
    period: "Full year access",
    tagline: "Everything — modules, sheets, question bank and test series.",
  },
} as const;

export const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/exams", label: "NEET & JEE" },
  { to: "/professionals", label: "Professionals" },
  { to: "/study-material", label: "Study Material" },
  { to: "/test-series", label: "Test Series" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export const PACKAGE_ITEMS = [
  {
    title: "Video Modules",
    detail:
      "Chapter-wise recorded lectures plus live doubt sessions, split into short 20–30 minute topics you can finish after school or after work.",
  },
  {
    title: "Printable Sheets",
    detail:
      "One-page formula sheets, revision notes and short summaries for every chapter — designed to be read the night before a test.",
  },
  {
    title: "Question Bank",
    detail:
      "Over 40,000 sorted questions with step-by-step solutions, tagged by difficulty and by previous-year appearance.",
  },
  {
    title: "Test Series",
    detail:
      "Weekly chapter tests, monthly full syllabus tests and exam-pattern mock papers with rank comparison and a mistake report.",
  },
] as const;
