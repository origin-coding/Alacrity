import { AlacrityPluginType } from "~/types/alacrity-plugin";

const useSideMenuGroups = defineStore("side-menu-groups", () => {
  const groups = ref<Array<keyof typeof AlacrityPluginType>>([]);

  onMounted(() => {
    let type: keyof typeof AlacrityPluginType;
    for (type in AlacrityPluginType) {
      groups.value.push(AlacrityPluginType[type]);
    }
  });

  return { groups };
});

export default useSideMenuGroups;
