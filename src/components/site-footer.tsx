import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="label-eyebrow text-background/60">(Let's build)</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]">
              Have a project in mind?<br />
              <span className="italic text-background/70">Let's begin a conversation.</span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center mt-10 text-base border border-background/40 px-6 py-3 rounded-full hover:bg-background hover:text-foreground transition-colors"
            >
              Start a project →
            </Link>
          </div>
          <div className="md:col-span-3 md:col-start-8">
            <p className="label-eyebrow text-background/60">(Studios)</p>
            <ul className="mt-4 space-y-2 text-background/85">
              <li>Hong Kong</li>
              <li>Singapore</li>
              <li>Macao</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="label-eyebrow text-background/60">(Connect)</p>
            <ul className="mt-4 space-y-2 text-background/85">
              <li><a href="mailto:hello@studiom.co" className="link-underline">hello@studiom.co</a></li>
              <li><a href="#" className="link-underline">Instagram</a></li>
              <li><a href="#" className="link-underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-background/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/55">
          <span>© {new Date().getFullYear()} Studio M Interiors Limited.</span>
          <span>Designing for performance across Asia-Pacific.</span>
        </div>
      </div>
    </footer>
  );
}