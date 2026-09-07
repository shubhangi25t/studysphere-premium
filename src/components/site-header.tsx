import { Link } from "@tanstack/react-router";
import { Menu, GraduationCap } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE_NAME } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-xl surface-sun text-primary-foreground">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">{SITE_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/pricing">Start trial</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      <div className={cn("border-t border-border bg-background lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto grid max-w-6xl gap-1 px-4 py-3" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
