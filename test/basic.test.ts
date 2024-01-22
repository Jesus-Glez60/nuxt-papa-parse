import { $fetch, setup } from "@nuxt/test-utils/e2e";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const rootDir = fileURLToPath(new URL("./fixtures/basic", import.meta.url));

await setup({ rootDir });

describe("ssr", async () => {
  it("renders the index page", async () => {
    const html = await $fetch("/");

    expect(html).toContain("papa parser");
  });
});
