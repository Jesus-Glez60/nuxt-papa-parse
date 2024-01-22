import { defineNuxtPlugin } from "#app";

import * as Papa from "papaparse";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$Papa = Papa;

  return {
    provide: {
      Papa: Papa,
    },
  };
});
