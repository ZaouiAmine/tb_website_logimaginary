import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Index" },
  { to: "/projects", label: "Projects" },
  { to: "/sectors", label: "Sectors" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl md:text-2xl tracking-tight text-foreground">
          Studio M<span className="text-accent">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center text-sm border border-foreground/30 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
        >
          Start a project
        </Link>
        <Link to="/contact" className="md:hidden text-sm underline underline-offset-4">
          Menu
        </Link>
      </div>
    </header>
  );
}