import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";

// for alliasing paths in tsconfig.json
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@services": path.resolve(__dirname, "src/services"),
      "@store": path.resolve(__dirname, "src/store"),
      "@customTypes": path.resolve(__dirname, "src/types"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@eCommerce": path.resolve(__dirname, "src/components/eCommerce"),
      "@common": path.resolve(__dirname, "src/components/common"),
    },
  },
});
