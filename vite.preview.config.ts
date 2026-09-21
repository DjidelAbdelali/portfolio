import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Preview-only build: inlines all dynamically-imported demo chunks into a
// single bundle so the whole app can be flattened into one standalone HTML
// file for chat preview. Not used for the real deployment build.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
