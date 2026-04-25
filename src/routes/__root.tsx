import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen flex items-center justify-center container-x pt-32">
        <div className="max-w-xl text-center">
          <p className="label-eyebrow">(404)</p>
          <h1 className="font-display text-6xl md:text-8xl mt-4">Lost in the floorplan.</h1>
          <p className="mt-6 text-muted-foreground">
            The page you're looking for has been moved, retired, or never existed.
          </p>
          <Link
            to="/"
            className="inline-flex mt-10 items-center text-sm border border-foreground/30 px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            Return home →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Studio M — Interiors for high-performance brands" },
      {
        name: "description",
        content:
          "Studio M designs innovative interiors for retail, workplace and hospitality businesses across Asia-Pacific.",
      },
      { name: "author", content: "Studio M" },
      { property: "og:title", content: "Studio M — Interiors for high-performance brands" },
      {
        property: "og:description",
        content:
          "We design environments where experience and performance are inseparable.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
