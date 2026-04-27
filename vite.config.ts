import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Standard Vite setup — plugin handles JSX transform for React
export default defineConfig({
  plugins: [react()],
});
