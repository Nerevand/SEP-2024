import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

const aliases = {
  "@theme": "./src/theme",
  "@pages": "./src/pages",
  "@components": "./src/components",
  "@constants": "./src/constants",
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
