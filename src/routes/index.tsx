import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certificates } from "@/components/portfolio/Certificates";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { SECTIONS } from "@/components/portfolio/data";
import { useScrollSpy } from "@/components/portfolio/useScrollSpy";

const title = "Tripti Rani — CSE Student, Developer & Problem Solver";
const description =
  "Portfolio of Tripti Rani, a Computer Science and Engineering student at LPU working with C++, Python, IoT and web development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SECTION_IDS = SECTIONS.map((s) => s.id);

function Index() {
  const active = useScrollSpy(SECTION_IDS);

  return (
    <div className="min-h-screen bg-background">
      <Navbar active={active} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border py-[34px] text-center text-xs text-muted-foreground">
        <p className="pixel-font text-[9px]">© 2026 Tripti Rani</p>
      </footer>
      <Toaster />
    </div>
  );
}
