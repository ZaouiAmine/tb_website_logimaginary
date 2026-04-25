import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectWorkplace from "@/assets/project-workplace.jpg";
import projectTea from "@/assets/project-tea.jpg";
import projectCapital from "@/assets/project-capital.jpg";
import projectNoodle from "@/assets/project-noodle.jpg";
import projectHouseware from "@/assets/project-houseware.jpg";
import projectOval from "@/assets/project-oval.jpg";
import aboutStudio from "@/assets/about-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio M — Interiors for retail, workplace & hospitality" },
      {
        name: "description",
        content:
          "We design innovative interiors for high-performance retail, workplace and food & beverage businesses across Asia-Pacific.",
      },
      { property: "og:title", content: "Studio M — Editorial interior design for performance brands" },
      {
        property: "og:description",
        content:
          "Senior-led interior design studio working with brands, landlords and developers across Hong Kong, Singapore and Macao.",
      },
      { property: "og:image", content: heroRestaurant },
      { name: "twitter:image", content: heroRestaurant },
    ],
  }),
  component: Index,
});

const featured = [
  { name: "Oval Restaurant & Verandah", loc: "SG", img: projectOval, slug: "oval" },
  { name: "ThreeSixty Group", loc: "HK", img: projectWorkplace, slug: "threesixty" },
  { name: "Tea Chateau Store", loc: "HK", img: projectTea, slug: "tea-chateau" },
  { name: "Lee Yuen Housewares", loc: "HK", img: projectHouseware, slug: "lee-yuen" },
  { name: "Silvercrest", loc: "SG", img: projectRetail, slug: "silvercrest" },
  { name: "Private Capital", loc: "HK", img: projectCapital, slug: "private-capital" },
  { name: "Mian Cart Noodle Bar", loc: "MO", img: projectNoodle, slug: "mian-cart" },
];

const clients = [
  "Vita Green", "Tokyo Lifestyle", "Shangri-La", "Piaget", "Melco",
  "Lululemon", "L'Occitane", "Lei Garden", "Aesop", "Sennheiser",
];

function Index() {
  return (
    <div className="pt-16 md:pt-20">
      {/* HERO */}
      <section className="container-x pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-2">
            <p className="label-eyebrow">(001 / Index)</p>
          </div>
          <h1 className="md:col-span-10 font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
            We design innovative interiors for high-performance{" "}
            <Link to="/sectors" className="italic underline decoration-1 underline-offset-[6px] decoration-foreground/40 hover:decoration-accent">retail</Link>,{" "}
            <Link to="/sectors" className="italic underline decoration-1 underline-offset-[6px] decoration-foreground/40 hover:decoration-accent">workplace</Link>, and{" "}
            <Link to="/sectors" className="italic underline decoration-1 underline-offset-[6px] decoration-foreground/40 hover:decoration-accent">food &amp; beverage</Link>{" "}
            businesses.
          </h1>
        </div>
        <div className="mt-12 md:mt-20 aspect-[16/9] overflow-hidden rounded-sm bg-muted">
          <img
            src={heroRestaurant}
            alt="Refined modern restaurant interior with marble counter and warm wood paneling"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-x py-20 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="label-eyebrow">(About)</p>
          </div>
          <div className="md:col-span-10">
            <p className="font-display text-2xl md:text-4xl leading-snug">
              We deliver physical environments that shape customer experience and directly improve the
              performance of our clients' businesses.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-10 mt-16">
          <div className="md:col-span-6 md:col-start-3 aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={aboutStudio}
              alt="Studio M designers reviewing material samples in their workshop"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:col-span-3 self-end space-y-6 text-base leading-relaxed text-foreground/80">
            <p>
              We work as a senior-led extension of our clients' teams — aligning brand, spatial strategy,
              and delivery realities from the outset.
            </p>
            <p>
              Based in Hong Kong, Singapore and Macao. From 1,000 to 1,000,000 sq ft, for brands,
              landlords and developers across Asia-Pacific.
            </p>
            <Link to="/about" className="inline-block link-underline text-foreground">
              Learn more about the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-x py-20 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-12 gap-10 mb-12 md:mb-20">
          <div className="md:col-span-2">
            <p className="label-eyebrow">(Featured)</p>
          </div>
          <h2 className="md:col-span-10 font-display text-3xl md:text-5xl tracking-tight">
            Selected works.
            <span className="italic text-muted-foreground"> A cross-section of recent projects across the region.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-x-6 gap-y-20">
          {featured.map((p, i) => {
            const layouts = [
              "md:col-span-7",
              "md:col-span-5 md:mt-32",
              "md:col-span-5",
              "md:col-span-7 md:mt-24",
              "md:col-span-6",
              "md:col-span-6 md:mt-16",
              "md:col-span-8 md:col-start-3",
            ];
            return (
              <article key={p.slug} className={`${layouts[i] ?? "md:col-span-6"} group`}>
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <img
                    src={p.img}
                    alt={`${p.name} interior by Studio M`}
                    width={1400}
                    height={1050}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-baseline justify-between mt-4">
                  <h3 className="font-display text-xl md:text-2xl">{p.name}</h3>
                  <span className="label-eyebrow">({p.loc})</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm border border-foreground/30 px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* PROCESS PEEK */}
      <section className="container-x py-20 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="label-eyebrow">(Process)</p>
          </div>
          <h2 className="md:col-span-10 font-display text-3xl md:text-5xl tracking-tight">
            Our work follows a clear, structured process — allowing creativity to sit alongside
            commercial and technical rigour.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px mt-16 bg-border">
          {[
            ["01", "Pre-Concept", "Clarify objectives, constraints, and commercial drivers."],
            ["02", "Concept Design", "Translate strategy into a clear spatial proposition."],
            ["03", "Detail & Delivery", "Coordinate, build, and protect the design intent."],
          ].map(([n, t, d]) => (
            <div key={n} className="bg-background p-8 md:p-10">
              <p className="label-eyebrow">{n}</p>
              <h3 className="font-display text-2xl mt-4">{t}</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/process" className="link-underline text-foreground">
            See the full process →
          </Link>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="py-20 md:py-28 border-t border-border overflow-hidden">
        <div className="container-x mb-10">
          <p className="label-eyebrow">(Trusted by)</p>
        </div>
        <div className="marquee">
          <div className="marquee-track font-display text-3xl md:text-5xl text-foreground/70 whitespace-nowrap">
            {clients.map((c) => (
              <span key={c}>{c}<span className="text-accent">.</span></span>
            ))}
          </div>
          <div className="marquee-track font-display text-3xl md:text-5xl text-foreground/70 whitespace-nowrap" aria-hidden>
            {clients.map((c) => (
              <span key={c + "2"}>{c}<span className="text-accent">.</span></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
