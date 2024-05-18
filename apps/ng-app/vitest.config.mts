import angular from "@analogjs/vite-plugin-angular";

import { defineConfig } from "vitest/config";

export default defineConfig(() => {
  return {
    plugins: [angular()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["test/Framework/testSetup.ts"],
      include: ["test/**/*.spec.ts"],
      passWithNoTests: true,
    },
  };
});
