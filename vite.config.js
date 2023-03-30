import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        fightingstyle: resolve(__dirname, "src/fightstyle-section/index.html"),
        haki: resolve(__dirname, "src/haki-section/index.html"),
        level: resolve(__dirname, "src/level-section/index.html"),
        akumanomi: resolve(__dirname, "src/akuma-section/index.html"),
        buildchar: resolve(__dirname, "src/buildchar/index.html"),
        // admin: resolve(__dirname, "src/admin/index.html"),
      },
    },
  },
});
