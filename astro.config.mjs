// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

const { NODE_ENV } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4321,
    allowedHosts: NODE_ENV === "development" ? true : [],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
