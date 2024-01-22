import { useNuxtApp } from "#imports";
import * as Papa from "papaparse";

export default function usePapaParse() {
  const nuxtApp = useNuxtApp();

  const papa = nuxtApp.vueApp.config.globalProperties.$Papa || Papa;

  return papa;
}
