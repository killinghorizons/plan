import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Sans",
      cssVariable: "--font-plex-sans",
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Mono",
      cssVariable: "--font-plex-mono",
    },
  ],

  integrations: [mdx()],
});
