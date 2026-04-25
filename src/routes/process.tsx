import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — How Studio M works" },
      {
        name: "description",
        content:
          "From pre-concept to post-completion review. A clear, structured process that lets creativity sit alongside commercial and technical rigour.",
      },
      { property: "og:title", content: "Process — How Studio M works" },
      {
        property: "og:description",
        content: "Nine stages, one continuous conversation about performance.",
      },
    ],
  }),
  component: Process,
});

const stages: Array<[string, string, string]> = [
  ["01", "Pre-Concept", "We clarify project objectives and commercial drivers, establishing a briefing framework that aligns ambition with operational reality."],
  ["02", "Concept Design", "We translate strategy into a clear spatial concept — testing ideas against brand, experience, and feasibility."],
  ["03", "Schematic Design", "We develop the concept into coordinated layouts and systems, fixing the key decisions to control time and cost."],
  ["04", "Detail Design", "We resolve design intent into a coordinated, buildable detail pack — interfaces, materials and methods before construction begins."],
  ["05", "Tender Documentation", "Clear, coordinated tender information so contractors can price accurately and project risk is reduced."],
  ["06", "Tender Management", "We support the tender process, review submissions, and advise on contractor selection to protect quality and programme."],
  ["07", "Construction Support", "Shop drawing review and site attendance to ensure design intent is delivered accurately through construction."],
  ["08", "Guideline Package", "Clear design guidelines to support future rollout, design consistency, and long-term brand control across locations."],
  ["09", "Post-Completion Review", "We remain involved after handover to review workmanship, address defects, and support the defects liability period."],
];

function Process() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="container-x">
        <p className="label-eyebrow">(Process)</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[1.02] tracking-tight max-w-5xl">
          Creativity, with<br />
          <span className="italic">commercial rigour.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
          Our work follows a clear, structured process. Each stage has a defined output, a defined
          decision, and a defined commercial impact — so projects move forward with confidence.
        </p>
      </section>

      <section className="container-x py-20 md:py-32">
        <div className="border-t border-border">
          {stages.map(([n, t, d]) => (
            <div
              key={n}
              className="group grid md:grid-cols-12 gap-6 py-10 md:py-12 border-b border-border items-baseline"
            >
              <p className="md:col-span-1 label-eyebrow">{n}</p>
              <h2 className="md:col-span-4 font-display text-3xl md:text-4xl">{t}</h2>
              <p className="md:col-span-6 md:col-start-7 text-foreground/75 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}