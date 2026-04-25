import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Studio M" },
      {
        name: "description",
        content:
          "Start a conversation with Studio M. Studios in Hong Kong, Singapore and Macao.",
      },
      { property: "og:title", content: "Contact — Studio M" },
      { property: "og:description", content: "Tell us about your project. We'll be in touch within two working days." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24 md:pt-32">
      <section className="container-x">
        <p className="label-eyebrow">(Contact)</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[1.02] tracking-tight max-w-5xl">
          Tell us about<br />
          <span className="italic">your project.</span>
        </h1>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-10">
            <div>
              <p className="label-eyebrow">(General)</p>
              <a href="mailto:hello@studiom.co" className="font-display text-2xl mt-2 block link-underline">
                hello@studiom.co
              </a>
            </div>
            <div>
              <p className="label-eyebrow">(New business)</p>
              <a href="mailto:projects@studiom.co" className="font-display text-2xl mt-2 block link-underline">
                projects@studiom.co
              </a>
            </div>
            <div>
              <p className="label-eyebrow">(Press)</p>
              <a href="mailto:press@studiom.co" className="font-display text-2xl mt-2 block link-underline">
                press@studiom.co
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="md:col-span-8 space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone (optional)" name="phone" />
            </div>

            <div>
              <p className="label-eyebrow block mb-3">Sector</p>
              <div className="flex flex-wrap gap-2">
                {["Retail", "Workplace", "Hospitality", "Mixed-use", "Other"].map((s) => (
                  <label
                    key={s}
                    className="cursor-pointer text-sm border border-border px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
                  >
                    <input type="radio" name="sector" value={s} className="sr-only" />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="label-eyebrow block mb-2" htmlFor="msg">
                Tell us a little about the project
              </label>
              <textarea
                id="msg"
                name="message"
                rows={6}
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg resize-none"
                placeholder="Location, scope, timeline, ambitions…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center text-base bg-foreground text-background px-8 py-4 rounded-full hover:bg-accent transition-colors"
            >
              {submitted ? "Thank you — we'll be in touch." : "Send enquiry →"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="label-eyebrow block mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg"
      />
    </div>
  );
}