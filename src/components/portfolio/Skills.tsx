import { useState } from "react";
import { Sparkles } from "lucide-react";
import { SKILLS, SKILL_CATEGORIES, type SkillCategory } from "./data";
import { Reveal } from "./Reveal";

type Filter = "All" | SkillCategory;
const FILTERS: Filter[] = ["All", ...SKILL_CATEGORIES];

export function Skills() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = SKILLS.filter((s) => filter === "All" || s.category === filter);

  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-[89px]">
      <div className="mx-auto max-w-6xl px-[21px] py-[55px]">
        <Reveal>
          <h2 id="skills-title" className="font-display text-3xl font-semibold sm:text-4xl">
            Skills
          </h2>
          <p className="mt-[8px] text-sm text-muted-foreground">
            Filter by category to see what I work with.
          </p>
        </Reveal>

        <div role="tablist" aria-label="Skill categories" className="mt-[21px] flex flex-wrap gap-[8px]">
          {FILTERS.map((f) => {
            const selected = filter === f;
            return (
              <button
                key={f}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-[13px] py-[8px] text-sm font-medium transition-all hover:-translate-y-0.5 ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground shadow-soft"
                    : "border-border bg-card text-foreground hover:bg-secondary"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <ul className="mt-[34px] grid grid-cols-2 gap-[13px] sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 30}>
              <div className="card-warm lift-hover flex h-full flex-col justify-between gap-[13px] p-[21px]">
                <div className="flex items-start justify-between gap-[8px]">
                  <span className="font-medium">{s.name}</span>
                  <Sparkles className="size-4 shrink-0 text-primary" aria-hidden="true" />
                </div>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                  {s.category}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
