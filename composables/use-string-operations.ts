import { readText, writeText } from "@tauri-apps/api/clipboard";
import type { MaybeRef } from "vue";

export default function (initialValue: MaybeRef<string> = "") {
  const ref = toRef(initialValue);

  async function copy() {
    await writeText(ref.value);
  }

  async function paste() {
    ref.value = (await readText()) || "";
  }

  function clear() {
    ref.value = "";
  }

  return { ref, copy, paste, clear };
}
