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
        // productlisting: resolve(__dirname, "src/product-listing/index.html"),
        // checkout: resolve(__dirname, "src/checkout/index.html"),
        // checkedout: resolve(__dirname, "src/checkout/success.html"),
        // admin: resolve(__dirname, "src/admin/index.html"),
      },
    },
  },
});
