import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://671432.github.io/GW2gameLinkCombiner",
  server: {
    open: true,
  },
});
