import { defineNuxtPlugin } from "#app";
import Papa from "#build/papaparse.imports.mjs";

declare module "#app" {
  interface NuxtApp {
    $papa: typeof Papa;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $papa: typeof Papa;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $papa: typeof Papa;
  }
}

export default defineNuxtPlugin(async (nuxtApp) =>
  nuxtApp.provide("papa", Papa)
);
