import { createFileRoute, Link } from "@tanstack/react-router";
import projectRetail from "@/assets/project-retail.jpg";
import projectWorkplace from "@/assets/project-workplace.jpg";
import projectTea from "@/assets/project-tea.jpg";
import projectCapital from "@/assets/project-capital.jpg";
import projectNoodle from "@/assets/project-noodle.jpg";
import projectHouseware from "@/assets/project-houseware.jpg";
import projectOval from "@/assets/project-oval.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Studio M" },
      {
        name: "description",
        content:
          "Selected interior design projects from Studio M across retail, workplace and food & beverage in Asia-Pacific.",
      },
      { property: "og:title", content: "Projects — Studio M" },
      {
        property: "og:description",
        content: "A cross-section of recent retail, workplace and hospitality work.",
      },
      { property: "og:image", content: projectOval },
      { name: "twitter:image", content: projectOval },
    ],
  }),
  component: Projects,
});

const all = [
  { name: "Oval Restaurant & Verandah", loc: "SG", year: "2024", sector: "Hospitality", img: projectOval },
  { name: "ThreeSixty Group HQ", loc: "HK", year: "2024", sector: "Workplace", img: projectWorkplace },
  { name: "Tea Chateau Flagship", loc: "HK", year: "2024", sector: "Retail", img: projectTea },
  { name: "Lee Yuen Housewares", loc: "HK", year: "2023", sector: "Retail", img: projectHouseware },
  { name: "Silvercrest Boutique", loc: "SG", year: "2023", sector: "Retail", img: projectRetail },
  { name: "Private Capital Lounge", loc: "HK", year: "2023", sector: "Workplace", img: projectCapital },
  { name: "Mian Cart Noodle Bar", loc: "MO", year: "2022", sector: "Hospitality", img: projectNoodle },
];

function Projects() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="container-x">
        <p className="label-eyebrow">(Projects)</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[1.02] tracking-tight max-w-5xl">
          Selected works,<br />
          <span className="italic">across Asia-Pacific.</span>
        </h1>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-24">
          {all.map((p, i) => (
            <Link
              key={p.name}
              to="/projects"
              className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                <img
                  src={p.img}
                  alt={`${p.name} interior by Studio M`}
                  width={1400}
                  height={1050}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 grid grid-cols-12 gap-3 items-baseline">
                <h2 className="col-span-7 font-display text-2xl md:text-3xl">{p.name}</h2>
                <p className="col-span-3 text-sm text-muted-foreground">{p.sector}</p>
                <p className="col-span-2 text-right label-eyebrow">({p.loc} · {p.year})</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}