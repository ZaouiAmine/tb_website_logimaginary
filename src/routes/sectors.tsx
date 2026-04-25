import { createFileRoute } from "@tanstack/react-router";
import projectRetail from "@/assets/project-retail.jpg";
import projectWorkplace from "@/assets/project-workplace.jpg";
import projectOval from "@/assets/project-oval.jpg";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Sectors — Retail, Workplace, Hospitality | Studio M" },
      {
        name: "description",
        content:
          "Studio M designs across retail, workplace and food & beverage sectors — each with its own commercial logic and spatial language.",
      },
      { property: "og:title", content: "Sectors — Retail, Workplace, Hospitality" },
      {
        property: "og:description",
        content: "Three sectors. One discipline: design that performs.",
      },
    ],
  }),
  component: Sectors,
});

const sectors = [
  {
    n: "01",
    title: "Retail",
    img: projectRetail,
    body:
      "Flagships, boutiques, mall stores and rollouts. We design retail environments that drive footfall, conversion and dwell — engineered around the customer journey and the operational realities of the brand.",
    bullets: ["Brand flagships", "Concept stores", "Multi-site rollouts", "Pop-ups & activations"],
  },
  {
    n: "02",
    title: "Workplace",
    img: projectWorkplace,
    body:
      "Headquarters, hubs, lounges and client-facing floors. We shape workplaces that signal culture, attract talent and support the way teams actually work today.",
    bullets: ["Headquarters", "Innovation hubs", "Client lounges", "Hybrid floors"],
  },
  {
    n: "03",
    title: "Food & Beverage",
    img: projectOval,
    body:
      "Restaurants, cafés, bars and hotel F&B. We design hospitality interiors that create a sense of occasion, support service flow, and protect operating margins.",
    bullets: ["Fine dining", "Bistros & cafés", "Bars & lounges", "Hotel F&B"],
  },
];

function Sectors() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="container-x">
        <p className="label-eyebrow">(Sectors)</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[1.02] tracking-tight max-w-5xl">
          Three sectors.<br />
          <span className="italic">One discipline.</span>
        </h1>
      </section>

      <div className="mt-20 md:mt-28">
        {sectors.map((s, i) => (
          <section
            key={s.title}
            className={`container-x py-20 md:py-28 ${i > 0 ? "border-t border-border" : ""}`}
          >
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={s.img}
                    alt={`${s.title} interior by Studio M`}
                    width={1400}
                    height={1050}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-5">
                <p className="label-eyebrow">({s.n})</p>
                <h2 className="font-display text-4xl md:text-6xl mt-3">{s.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80">{s.body}</p>
                <ul className="mt-8 grid grid-cols-2 gap-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm border-t border-border pt-3 text-foreground/70">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}