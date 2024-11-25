import { AliasOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const aliases: AliasOptions = {
  "@layouts": path.resolve(__dirname, "src/layouts"),
  "@pages": path.resolve(__dirname, "src/pages"),
  "@components": path.resolve(__dirname, "src/components"),
  "@types": path.resolve(__dirname, "src/types/index"),
  "@hooks": path.resolve(__dirname, "src/hooks"),
  "@constants": path.resolve(__dirname, "src/constants"),
  "@store": path.resolve(__dirname, "src/app/store"),
  "@features": path.resolve(__dirname, "src/features"),
};

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
