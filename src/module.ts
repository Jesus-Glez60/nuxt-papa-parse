import {
  addImportsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
import { fileURLToPath } from "node:url";

// Module options TypeScript interface definition
export interface ModuleOptions {
  global?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-papa-parse",
    configKey: "papaparse",
    compatibility: {
      nuxt: "^3.0.0-rc.9",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    global: false,
  },
  setup(options) {
    const { resolve } = createResolver(import.meta.url);

    addImportsDir(resolve("./runtime/composables"));

    if (options.global) {
      addImportsDir(resolve("./runtime/utils"));
    }
  },
});
