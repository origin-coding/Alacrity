<script setup lang="ts">
const slots = useSlots();

/* eslint-disable */
function transformSlot(slot: any, index: number) {
  if (typeof slot.type === "symbol") {
    return slot.children?.map(transformSlot);
  }

  return {
    label: slot.props?.filename || slot.props?.label || `${index}`,
    component: slot,
  };
}

const tabs = computed(() => {
  return slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [];
});
</script>

<template>
  <div my-4>
    <t-tabs :default-value="1" w-full>
      <t-tab-panel
        v-for="(tab, index) in tabs"
        :key="index"
        :value="index + 1"
        :label="tab.label"
      >
        <component :is="tab.component"></component>
      </t-tab-panel>
    </t-tabs>
  </div>
</template>

<style scoped lang="less"></style>
