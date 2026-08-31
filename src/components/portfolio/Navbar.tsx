import { useEffect, useState } from "react";
import { Coffee, Menu, X, Moon, Sun } from "lucide-react";
import { SECTIONS } from "./data";

export function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("tr-theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("tr-theme", next ? "dark" : "light");
  };

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-[21px] px-[21px] py-[13px] md:flex md:justify-between"
      >
        <a
          href="#introduction"
          onClick={(e) => {
            e.preventDefault();
            go("introduction");
          }}
          className="flex min-w-0 items-center gap-[13px] rounded-lg"
        >
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-secondary text-secondary-foreground shadow-soft"
          >
            <Coffee className="size-4" />
          </span>
          <span className="truncate font-display text-lg font-semibold tracking-tight">
            Tripti Rani
          </span>
        </a>

        <ul className="hidden items-center gap-[8px] md:flex">
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    go(s.id);
                  }}
                  className={`relative rounded-lg px-[13px] py-[8px] text-sm font-medium transition-colors hover:bg-secondary/60 active:bg-secondary ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-[13px] -bottom-[3px] h-[2px] origin-left rounded-full bg-primary transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-[8px]">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light coffee theme" : "Switch to dark roast theme"}
            className="grid size-11 place-items-center rounded-lg border border-border bg-card text-card-foreground transition-colors hover:bg-secondary focus-visible:bg-secondary"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-lg border border-border bg-card text-card-foreground transition-colors hover:bg-secondary md:hidden"
          >
            <span className="relative block size-4">
              <Menu
                className={`absolute inset-0 size-4 transition-all duration-300 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
              />
              <X
                className={`absolute inset-0 size-4 transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-[8px] px-[21px] py-[13px]">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(s.id);
                }}
                className={`block rounded-lg px-[13px] py-[13px] text-sm font-medium transition-colors hover:bg-secondary ${
                  active === s.id ? "bg-secondary text-secondary-foreground" : "text-foreground"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
