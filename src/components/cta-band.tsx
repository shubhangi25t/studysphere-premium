import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { PRICING, formatINR } from "@/data/site";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="surface-sun rounded-3xl px-6 py-12 text-center shadow-lift md:px-12">
        <h2 className="text-2xl font-extrabold text-primary-foreground md:text-3xl">
          Begin with the trial, upgrade whenever you are ready
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/85">
          Starter Trial at {formatINR(PRICING.trial.price)} or the Premium Complete package at{" "}
          {formatINR(PRICING.premium.price)} — the same teachers, the same study material.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="secondary">
            <Link to="/pricing">See both plans</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link to="/contact">Talk to a counsellor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
