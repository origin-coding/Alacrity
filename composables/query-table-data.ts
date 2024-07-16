import type { TableData } from "~/types/table-data";

export default function <T>() {
  const { pluginId } = usePluginId();
  const { locale } = useI18n();
  console.log(locale.value);

  return useAsyncData(async () => {
    const content = await queryContent<TableData<T>>(
      `/${locale.value}/${pluginId.value}`,
    ).findOne();
    return content.body;
  });
}
