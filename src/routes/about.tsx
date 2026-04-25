import { createFileRoute } from "@tanstack/react-router";
import aboutStudio from "@/assets/about-studio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — About Studio M" },
      {
        name: "description",
        content:
          "A senior-led interior design practice based in Hong Kong, Singapore and Macao, working across retail, workplace and hospitality.",
      },
      { property: "og:title", content: "Studio — About Studio M" },
      {
        property: "og:description",
        content:
          "Deliberately agnostic in style. We develop solutions that respond precisely to the brief, business model, and market context.",
      },
      { property: "og:image", content: aboutStudio },
      { name: "twitter:image", content: aboutStudio },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="container-x">
        <p className="label-eyebrow">(Studio)</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[1.02] tracking-tight max-w-5xl">
          A senior-led practice designing for{" "}
          <span className="italic text-accent">performance</span>.
        </h1>
      </section>

      <section className="container-x mt-20 md:mt-28">
        <div className="aspect-[16/9] overflow-hidden rounded-sm">
          <img
            src={aboutStudio}
            alt="Studio M team in their material library"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-x py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="label-eyebrow">(Approach)</p>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/85">
            <p>
              We design environments where experience and performance are inseparable. Every decision is
              shaped by how a space will be used, perceived, and ultimately how it performs commercially.
            </p>
            <p>
              Our work spans retail, workplace, hospitality and mixed-use environments across
              Asia-Pacific. In each case, we operate as a senior-led extension of our clients' teams —
              aligning brand, spatial strategy, and delivery realities from the outset.
            </p>
            <p>
              We are deliberately agnostic in style. There is no Studio M look to impose. Instead, we
              develop innovative solutions that respond precisely to the brief, the business model, and
              the market context — whether the objective is sales growth, talent attraction, operational
              efficiency, or asset value.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 border-t border-border">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            ["Hong Kong", "G/F, 88 Hollywood Road,\nCentral, Hong Kong"],
            ["Singapore", "12 Keong Saik Road,\nSingapore 089119"],
            ["Macao", "Av. da Praia Grande,\nNAPE, Macao SAR"],
          ].map(([city, addr]) => (
            <div key={city}>
              <p className="label-eyebrow">(Studio)</p>
              <h3 className="font-display text-3xl mt-2">{city}</h3>
              <p className="mt-4 whitespace-pre-line text-foreground/70">{addr}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20 md:py-28 border-t border-border">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="label-eyebrow">(Numbers)</p>
          </div>
          <div className="md:col-span-10 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              ["18", "Years in practice"],
              ["240+", "Projects completed"],
              ["3", "Studios in APAC"],
              ["1M", "Sq ft delivered"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-5xl md:text-7xl">{n}</p>
                <p className="mt-3 text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}