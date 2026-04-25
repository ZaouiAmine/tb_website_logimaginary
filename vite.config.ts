// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Cloudflare worker build targets Workers; the prerender preview server runs in Node
  // and can 500 if the CF adapter is active. Disable for static deploys (Taubyte).
  cloudflare: false,
  tanstackStart: {
    // Static hosts need `index.html`; SPA shell prerenders `/` once for client routing.
    spa: {
      enabled: true,
      maskPath: "/",
    },
  },
});
