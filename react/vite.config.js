import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Builds one self-contained IIFE bundle (React included) into ../assets/work.js
// so the static site can load it with a plain <script defer> and no module plumbing.
export default defineConfig({
  plugins: [react()],
  // Library mode does not substitute this automatically, and without it
  // React ships its full development build (dev warnings, ~4x the size).
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  build: {
    lib: {
      entry: "src/main.jsx",
      name: "PortfolioWork",
      formats: ["iife"],
      fileName: () => "work.js",
    },
    outDir: "../assets",
    emptyOutDir: false,
    cssCodeSplit: false,
    target: "es2019",
  },
});
