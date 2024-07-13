import { kebabCase } from "scule";

export default function () {
  const { pluginId } = usePluginId();
  const { locale } = useI18n();

  // Nuxt doesn't support uppercase in URLs, so we turn locale to kebab case.
  const contentRoute = computed(() => {
    return `/${kebabCase(locale.value)}/${pluginId.value}`;
  });

  return { contentRoute };
}
