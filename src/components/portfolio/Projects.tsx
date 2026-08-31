import { useState } from "react";
import { ChevronDown, Droplets, Github, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const TAGS = ["ESP32", "Arduino IDE", "MQTT", "Wi-Fi", "Supabase", "Lovable"];

const FEATURES = [
  "Monitored TDS, pH, turbidity, temperature, water flow, and tank level.",
  "Used Wi-Fi and MQTT for real-time cloud data transmission.",
  "Built a monitoring dashboard using Lovable and Supabase.",
  "Added anomaly alerts for unusual readings.",
];

export function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-[89px]">
      <div className="mx-auto max-w-6xl px-[21px] py-[55px]">
        <Reveal>
          <h2 id="projects-title" className="font-display text-3xl font-semibold sm:text-4xl">
            Projects
          </h2>
          <p className="mt-[8px] text-sm text-muted-foreground">
            Hands-on work built during my studies.
          </p>
        </Reveal>

        <Reveal className="mt-[34px]">
          <article className="card-warm overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.618fr_1fr]">
              <div className="relative flex min-h-56 items-center justify-center border-b border-border bg-secondary/60 p-[34px] lg:border-b-0 lg:border-r">
                <div className="text-center">
                  <Droplets className="mx-auto size-10 text-primary" aria-hidden="true" />
                  <p className="pixel-font mt-[13px] text-[10px] text-muted-foreground">
                    dashboard preview coming soon
                  </p>
                  <p className="mt-[8px] text-xs text-muted-foreground">
                    Placeholder for a project screenshot.
                  </p>
                </div>
              </div>

              <div className="p-[21px] sm:p-[34px]">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  December 2025
                </p>
                <h3 className="mt-[8px] font-display text-2xl font-semibold">
                  IoT-Based Water Monitoring System
                </h3>
                <p className="mt-[13px] text-sm leading-relaxed text-foreground/90">
                  Developed a real-time IoT-based water monitoring system using ESP32 and multiple
                  sensors.
                </p>

                <ul className="mt-[21px] flex flex-wrap gap-[8px]">
                  {TAGS.map((t, i) => (
                    <li
                      key={t}
                      style={{ transitionDelay: `${i * 40}ms` }}
                      className="rounded-full border border-border bg-background px-[13px] py-[4px] text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-secondary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-[21px] flex flex-wrap gap-[8px]">
                  <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="project-details"
                    className="inline-flex items-center gap-[8px] rounded-xl bg-primary px-[21px] py-[8px] text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    View Details
                    <ChevronDown
                      className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <button
                    type="button"
                    disabled
                    title="No live demo link available yet"
                    className="inline-flex cursor-not-allowed items-center gap-[8px] rounded-xl border border-border px-[21px] py-[8px] text-sm font-medium text-muted-foreground opacity-70"
                  >
                    <ExternalLink className="size-4" /> Live Demo
                  </button>
                  <button
                    type="button"
                    disabled
                    title="Repository link not provided yet"
                    className="inline-flex cursor-not-allowed items-center gap-[8px] rounded-xl border border-border px-[21px] py-[8px] text-sm font-medium text-muted-foreground opacity-70"
                  >
                    <Github className="size-4" /> GitHub
                  </button>
                </div>

                <div
                  id="project-details"
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="mt-[21px] space-y-[8px] border-t border-border pt-[21px] text-sm">
                    {FEATURES.map((f) => (
                      <li key={f} className="flex gap-[8px]">
                        <span aria-hidden="true" className="mt-[7px] size-2 shrink-0 bg-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
