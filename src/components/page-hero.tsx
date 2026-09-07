import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function Section({
  title,
  lead,
  children,
}: {
  title?: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      {title ? <h2 className="text-2xl font-extrabold md:text-3xl">{title}</h2> : null}
      {lead ? <p className="mt-3 max-w-2xl text-muted-foreground">{lead}</p> : null}
      <div className={title || lead ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
