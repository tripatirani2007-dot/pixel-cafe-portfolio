import { GraduationCap } from "lucide-react";
import { EDUCATION } from "./data";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="scroll-mt-[89px]">
      <div className="mx-auto max-w-6xl px-[21px] py-[55px]">
        <Reveal>
          <h2 id="education-title" className="font-display text-3xl font-semibold sm:text-4xl">
            Education
          </h2>
        </Reveal>

        <ol className="relative mt-[34px] space-y-[21px] border-l border-border pl-[34px]">
          {EDUCATION.map((e, i) => (
            <Reveal as="li" key={e.school} delay={i * 90}>
              <span
                aria-hidden="true"
                className="absolute -left-[9px] grid size-[18px] place-items-center rounded-full border border-border bg-primary"
              />
              <div className="card-warm lift-hover p-[21px]">
                <div className="flex items-start gap-[8px]">
                  <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold">{e.school}</h3>
                    <p className="mt-[4px] text-sm">{e.degree}</p>
                    <p className="mt-[8px] text-sm text-muted-foreground">
                      {e.detail} · {e.place}
                    </p>
                    <p className="mt-[4px] text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {e.period}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
