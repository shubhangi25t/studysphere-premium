import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, Phone } from "lucide-react";

import { NAV_LINKS, SITE_NAME } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="surface-ink mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl surface-sun text-primary-foreground">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-extrabold">{SITE_NAME}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm opacity-80">
            Structured learning for Class 8–12 students, NEET and JEE aspirants, and working
            professionals who want to keep learning after office hours.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-70">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="opacity-80 transition-opacity hover:opacity-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-70">Talk to us</h3>
          <ul className="mt-4 space-y-3 text-sm opacity-85">
            <li className="flex items-center gap-2">
              <Mail className="size-4" aria-hidden="true" /> hello@studysessions.in
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4" aria-hidden="true" /> +91 90000 00000
            </li>
            <li className="opacity-70">Support hours: 9 AM – 9 PM IST, all days</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs opacity-60">
          © {new Date().getFullYear()} {SITE_NAME}. Sample contact details — replace them with your
          real ones before going live.
        </p>
      </div>
    </footer>
  );
}
