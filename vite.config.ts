import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/GW2gameLinkCombiner/",
  server: {
    open: true,
  },
});
