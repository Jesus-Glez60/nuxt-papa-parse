export default defineNuxtConfig({
  modules: ["../src/module"],
  papaparse: {
    global: true,
  },
  devtools: { enabled: true },
});
