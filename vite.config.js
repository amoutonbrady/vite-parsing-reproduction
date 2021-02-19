import { defineConfig } from "vite";
import Solid from "vite-plugin-solid";

export default defineConfig({
  resolve: {
    conditions: ["solid"],
  },
  plugin: [Solid],
});
