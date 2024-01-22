# Nuxt module for Papa Parse

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module to use Papa parse as a composable.

## Features

This module provides an easy way to use Papa parser on your Nuxt app and transform CSV documents to JSON and back

## Quick Setup

1. Add `nuxt-papa-parse` dependency to your project

```bash
# Using pnpm
pnpm add nuxt-papa-parse

# Using yarn
yarn add nuxt-papa-parse

# Using npm
npm install nuxt-papa-parse
```

2. Add `nuxt-papa-parse` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-papa-parse"],
});
```

That's it! You can now use My Module in your Nuxt app ✨

## Example

```vue
<script setup lang="ts">
const papa = usePapaParse();

const csvData = ref<string | null>(null);
const handleFileChange = (event: Event) => {
  const file: File | null =
    (event.target as HTMLInputElement).files?.[0] || null;
  if (file) {
    readCsv(file);
  }
};

const readCsv = (file: File) => {
  const reader = new FileReader();
  reader.onload = (event: ProgressEvent<FileReader>) => {
    if (!event.target) {
      return;
    }
    const csv = event.target.result;

    transformCsvToJson(csv as string);
  };
  reader.readAsText(file);
};

const transformCsvToJson = (csv: string) => {
  papa.parse(csv, {
    headers: true,
    complete: (result) => {
      csvData.value = JSON.stringify(result.data, null, 2);
      console.log(result);
    },
  });
};
</script>

<template>
  <main>
    <input type="file" aria-label="Upload CSV" @change="handleFileChange" />
  </main>
</template>
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-papa-parse/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-papa-parse
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-papa-parse.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-papa-parse
[license-src]: https://img.shields.io/npm/l/nuxt-papa-parse.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-papa-parse
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
