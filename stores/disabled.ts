import type { ComputedRef, Ref } from "vue";
import type { AlacrityConfig } from "~/types/alacrity-config";
import useTauriStore from "~/stores/tauri-store";
import { Keys } from "~/types/alacrity-config";

const useDisabledStore = defineStore("disabled", () => {
  const disabled: Ref<AlacrityConfig["disabled"]> = ref(new Set<string>());

  const tauriStore = useTauriStore();

  onMounted(async () => {
    // JSON cannot represent a Set, so we store it as an array.
    const disabledConfig = await tauriStore.store.get<Array<string>>(Keys.disabled);
    disabled.value =
      disabledConfig !== null ? new Set(disabledConfig) : new Set<string>();
  });

  type isDisabledType = (id: string) => boolean;
  const isDisabled: ComputedRef<isDisabledType> = computed(
    () => (id: string) => disabled.value.has(id),
  );

  async function toggleDisabled(id: string) {
    if (disabled.value.has(id)) {
      disabled.value.delete(id);
    } else {
      disabled.value.add(id);
    }

    // Save after update, we don't use a watch(Effect) because it clears disabled plugin set on setup.
    await tauriStore.store.set(Keys.disabled, Array.from(disabled.value));
    await tauriStore.store.save();
  }

  return { isDisabled, toggleDisabled };
});

export default useDisabledStore;
