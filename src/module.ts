import {
  addImportsDir,
  addPlugin,
  addTemplate,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Makes the `$papa` object available globally.
   * @default false
   * usage:
   * ```ts
   * $papa.parse(csvString, parseOptions);
   */
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

    addPlugin(resolve("./runtime/plugin"));

    addImportsDir(resolve("./runtime/composables"));

    if (options.global) {
      addImportsDir(resolve("./runtime/utils"));
    }

    addTemplate({
      filename: "papaparse.imports.mjs",
      getContents: () => generateImports(),
      write: true,
    });
  },
});

const generateImports = () => `
//Generate by nuxt-papa-parse module
  import * as Papa from "papaparse";

  export default Papa
`;
