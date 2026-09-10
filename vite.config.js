import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative asset URLs make the build work reliably on GitHub Pages
  // under the /Salon/ project path.
  base: "./",
});
