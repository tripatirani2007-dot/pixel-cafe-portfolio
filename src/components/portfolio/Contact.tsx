import { useState } from "react";
import { Copy, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "./data";
import { Reveal } from "./Reveal";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} copied to clipboard`);
    } catch {
      toast.error(`Couldn't copy ${label.toLowerCase()}`);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Please write a short message.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSubmitted(false);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitted(true);
    toast.info("Form preview only — no message was sent.");
  };

  const field =
    "w-full rounded-xl border border-input bg-background px-[13px] py-[10px] text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary";

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-[89px]">
      <div className="mx-auto max-w-6xl px-[21px] py-[55px]">
        <Reveal>
          <h2 id="contact-title" className="font-display text-3xl font-semibold sm:text-4xl">
            Contact
          </h2>
          <p className="mt-[8px] text-sm text-muted-foreground">
            Always happy to talk about code, IoT, or a good cup of coffee.
          </p>
        </Reveal>

        <div className="mt-[34px] grid gap-[34px] lg:grid-cols-[1fr_1.618fr]">
          <Reveal>
            <div className="card-warm space-y-[13px] p-[21px]">
              <div className="flex items-center gap-[8px]">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="min-w-0 truncate text-sm hover:underline">
                  {CONTACT.email}
                </a>
                <button
                  type="button"
                  onClick={() => copy("Email", CONTACT.email)}
                  aria-label="Copy email address"
                  className="ml-auto grid size-9 shrink-0 place-items-center rounded-lg border border-border transition-colors hover:bg-secondary"
                >
                  <Copy className="size-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-[8px]">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} className="text-sm hover:underline">
                  {CONTACT.phone}
                </a>
                <button
                  type="button"
                  onClick={() => copy("Phone number", CONTACT.phone)}
                  aria-label="Copy phone number"
                  className="ml-auto grid size-9 shrink-0 place-items-center rounded-lg border border-border transition-colors hover:bg-secondary"
                >
                  <Copy className="size-3.5" />
                </button>
              </div>

              <div className="flex gap-[8px] pt-[8px]">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile of Tripti Rani"
                  className="grid size-11 place-items-center rounded-lg border border-border transition-all hover:-translate-y-0.5 hover:bg-secondary"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile of Tripti Rani"
                  className="grid size-11 place-items-center rounded-lg border border-border transition-all hover:-translate-y-0.5 hover:bg-secondary"
                >
                  <Github className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form onSubmit={onSubmit} noValidate className="card-warm space-y-[13px] p-[21px]">
              <p className="pixel-font text-[9px] uppercase text-muted-foreground">
                form preview only — not connected to a backend
              </p>

              <div>
                <label htmlFor="name" className="mb-[4px] block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={field}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-[4px] text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-[4px] block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={field}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-[4px] text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-[4px] block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={field}
                  placeholder="Write a short message…"
                />
                {errors.message && (
                  <p id="message-error" className="mt-[4px] text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-[8px] rounded-xl bg-primary px-[21px] py-[10px] text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Send className="size-4" /> Validate message
              </button>

              <p aria-live="polite" className="text-xs text-muted-foreground">
                {submitted
                  ? "Looks good! This form is a preview, so nothing was sent — please email or call instead."
                  : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
