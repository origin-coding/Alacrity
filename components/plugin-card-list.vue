<script setup lang="ts">
import TEmpty from "tdesign-vue-next/esm/empty";

const props = defineProps<{ idList: Array<string> }>();

const { t } = useI18n();
const router = useRouter();
</script>

<template>
  <t-row v-if="props.idList.length !== 0" :gutter="[12, 26]" w-full>
    <t-col
      v-for="(id, index) in props.idList"
      :key="id"
      :xs="12"
      :sm="6"
      :md="4"
      :lg="3"
    >
      <plugin-card
        :id="id"
        :class="index === 0 ? 'alacrity-initial-plugin' : ''"
      ></plugin-card>
    </t-col>
  </t-row>

  <!-- When list is empty, show this prompt -->
  <!-- h-80vh justify-center content-center -->
  <div v-else h-80vh content-center>
    <t-empty :title="t('empty')">
      <template #action>
        <t-button @click="router.push('/')">{{ t("back") }}</t-button>
      </template>
    </t-empty>
  </div>
</template>

<style scoped lang="less">
.result-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;

  &-icon {
    font-size: var(--td-comp-size-xxxxl);
    color: var(--td-text-color-secondary);
  }

  &-title {
    margin-top: var(--td-comp-margin-xxl);
    font: var(--td-font-title-large);
    color: var(--td-text-color-primary);
    text-align: center;
  }
}
</style>

<i18n>
{
  "en": {
    "empty": "No matching plugins found",
    "back": "View all plugins"
  },
  "zhHans": {
    "empty": "没有符合条件的插件",
    "back": "查看全部插件"
  }
}
</i18n>
