import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

const aliases = {
  "@constants": "./src/constants",
  "@theme": "./src/theme",

  "@layouts": "./src/layouts",
  "@pages": "./src/pages",

  "@components": "./src/components",
  "@ui": "./src/components/ui",
  "@common": "./src/components/common",
};

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: Object.fromEntries(
      Object.entries(aliases).map(([key, value]) => [
        key,
        path.resolve(__dirname, value),
      ])
    ),
  },
});
