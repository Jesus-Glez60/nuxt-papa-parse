<template>
  <main>
    <h1>Use a csv file to test papa parser</h1>

    <input
      type="file"
      aria-label="Upload CSV"
      @change="handleFileChange"
    >

    <div v-if="csvData">
      <pre>{{ csvData }}</pre>
    </div>
  </main>
</template>

<script setup lang="ts">
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
  $papa.parse(csv, {
    headers: true,
    complete: (result) => {
      csvData.value = JSON.stringify(result.data, null, 2);
      console.log(result);
    },
  });
};
</script>
