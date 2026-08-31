import { ArrowRight, GraduationCap, MapPin, CalendarDays, Award } from "lucide-react";
import pixelWorkspace from "@/assets/pixel-workspace.png";

const go = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const facts = [
  { icon: MapPin, label: "Lovely Professional University, Punjab, India" },
  { icon: GraduationCap, label: "B.Tech in Computer Science and Engineering" },
  { icon: Award, label: "CGPA: 7.46" },
  { icon: CalendarDays, label: "Currently studying since August 2025" },
];

export function Hero() {
  return (
    <section id="introduction" aria-labelledby="hero-title" className="scroll-mt-[89px]">
      <div className="mx-auto grid max-w-6xl items-center gap-[34px] px-[21px] py-[55px] lg:grid-cols-[1.618fr_1fr] lg:py-[89px]">
        <div>
          <p className="pixel-font text-[10px] uppercase text-muted-foreground">
            portfolio · brewed with care
          </p>
          <h1
            id="hero-title"
            className="mt-[13px] font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Tripti Rani
          </h1>
          <p className="mt-[13px] text-base font-medium text-muted-foreground sm:text-lg">
            Computer Science and Engineering Student | Developer | Problem Solver
          </p>
          <p className="mt-[21px] max-w-xl text-base leading-relaxed text-foreground/90">
            I’m Tripti Rani, a Computer Science and Engineering student passionate about
            programming, IoT, problem-solving, and building practical technology projects. I enjoy
            learning through hands-on development, coding practice, hackathons, and creative
            experimentation.
          </p>

          <div className="mt-[34px] flex flex-wrap gap-[13px]">
            <button
              type="button"
              onClick={() => go("projects")}
              className="inline-flex items-center gap-[8px] rounded-xl bg-primary px-[21px] py-[13px] text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
            >
              View Projects <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go("contact")}
              className="inline-flex items-center gap-[8px] rounded-xl border border-primary/60 bg-card px-[21px] py-[13px] text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary active:translate-y-0"
            >
              Contact Me
            </button>
          </div>

          <ul className="mt-[34px] grid gap-[8px] rounded-2xl border border-border bg-card p-[21px] shadow-soft sm:grid-cols-2">
            {facts.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-[8px] text-sm text-card-foreground">
                <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="card-warm pixel-shimmer overflow-hidden p-[21px]">
            <img
              src={pixelWorkspace}
              alt="Pixel art of a café desk with a steaming coffee cup, books, glasses, chocolate and a laptop"
              width={1024}
              height={1024}
              className="h-auto w-full"
            />
            <p className="pixel-font mt-[13px] text-center text-[9px] text-muted-foreground">
              coffee · code · curiosity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
