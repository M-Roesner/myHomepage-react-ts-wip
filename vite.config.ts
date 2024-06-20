import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test-react-app", // Basispfad, falls erforderlich
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg", "**/*.ttf"], // Konfiguriere hier die Dateitypen, die als Assets behandelt werden sollen
});
