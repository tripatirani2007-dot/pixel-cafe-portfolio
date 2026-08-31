import { BadgeCheck, FileText, Trophy } from "lucide-react";
import { ACHIEVEMENTS, CERTIFICATES } from "./data";
import { Reveal } from "./Reveal";

export function Certificates() {
  return (
    <section aria-labelledby="certificates-title" className="scroll-mt-[89px]">
      <div className="mx-auto max-w-6xl px-[21px] py-[55px]">
        <Reveal>
          <h2 id="certificates-title" className="font-display text-3xl font-semibold sm:text-4xl">
            Certificates & Achievements
          </h2>
        </Reveal>

        <div className="mt-[34px] grid gap-[34px] lg:grid-cols-[1.618fr_1fr]">
          <ul className="grid gap-[13px] sm:grid-cols-2">
            {CERTIFICATES.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 60}>
                <div className="card-warm lift-hover flex h-full flex-col gap-[8px] p-[21px]">
                  <BadgeCheck className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {c.issuer} · {c.date}
                  </p>
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-[8px] rounded-lg border border-border px-[13px] py-[8px] text-xs font-semibold transition-colors hover:bg-secondary"
                  >
                    <FileText className="size-3.5" aria-hidden="true" />
                    {c.fileLabel}
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="card-warm h-full p-[21px]">
              <div className="flex items-center gap-[8px]">
                <Trophy className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold">Achievements</h3>
              </div>
              <ul className="mt-[13px] space-y-[13px] text-sm">
                {ACHIEVEMENTS.map((a) => (
                  <li key={a} className="flex gap-[8px]">
                    <span aria-hidden="true" className="mt-[7px] size-2 shrink-0 bg-accent" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
