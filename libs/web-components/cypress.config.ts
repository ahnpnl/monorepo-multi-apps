import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: ["tests/TestCases/**/*.spec.ts"],
    supportFile: 'tests/Framework/Extensions/Commands/component.ts',
    indexHtmlFile: 'tests/Framework/Extensions/Commands/component-index.html',
  },
});
