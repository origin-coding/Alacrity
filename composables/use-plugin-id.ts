export default function () {
  const route = useRoute();
  const pluginId = computed(() => route.path.split("/")[2]);

  return { pluginId };
}
