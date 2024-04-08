<script setup lang="ts">
import { Address4 } from "ip-address";
import { computed, reactive, ref, UnwrapNestedRefs, watch } from "vue";
import { useI18n } from "vue-i18n";

import messages from "./locale.json";

const { t, locale } = useI18n({ messages });

const input: UnwrapNestedRefs<{
  addresses: Array<number>;
  mask: number;
}> = reactive({
  addresses: [0, 0, 0, 0],
  mask: 0,
});

const ipAddress = ref(new Address4("0.0.0.0/0"));

const availableAddress = computed(() => {
  const addr = ipAddress.value;
  /* eslint-disable no-underscore-dangle */
  return addr._endAddress() - addr._startAddress() - 1;
});

function calculate() {
  const address = input.addresses.join(".");
  ipAddress.value = new Address4(`${address}/${input.mask}`);
}

function clear() {
  input.addresses = [0, 0, 0, 0];
  input.mask = 0;
  calculate();
}

const labels = ref([t("gateway"), t("first"), t("last"), t("broadcast")]);

watch(locale, () => {
  for (const [index, key] of [
    "gateway",
    "first",
    "last",
    "broadcast",
  ].entries()) {
    labels.value[index] = t(key);
  }
});

const labelsAndAddrs = computed(() => {
  return [
    { label: labels.value[0], address: ipAddress.value.startAddress() },
    {
      label: labels.value[1],
      address: ipAddress.value.startAddressExclusive(),
    },
    { label: labels.value[2], address: ipAddress.value.endAddressExclusive() },
    { label: labels.value[3], address: ipAddress.value.endAddress() },
  ];
});

function rule(input: string, type: "ip" | "mask"): boolean | string {
  const num = Number(input);
  const min = 0;
  const max = type === "ip" ? 255 : 32;
  return (num >= min && num <= max) || t("invalid");
}

function ipRule(input: string): boolean | string {
  return rule(input, "ip");
}

function maskRule(input: string): boolean | string {
  return rule(input, "mask");
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="text-h6"> {{ t("input") }} </v-col>
    </v-row>
    <v-row>
      <!--suppress JSUnusedLocalSymbols -->
      <v-col v-for="(_, index) in input.addresses" :key="index" cols="2">
        <v-text-field
          v-model="input.addresses[index]"
          :clearable="false"
          type="number"
          :rules="[ipRule]"
        >
        </v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="input.mask"
          :clearable="false"
          :rules="[maskRule]"
        >
          <template #prepend> / </template>
          <template #append>
            <v-btn class="mr-2" @click="calculate">{{ t("calculate") }}</v-btn>
            <v-btn @click="clear">{{ t("clear") }}</v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-6"></v-divider>

    <v-row>
      <v-col class="text-h6">{{ t("results") }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="v-input v-input--horizontal v-input--center-affix">
        <div class="v-input__prepend">{{ t("count") }}</div>
      </v-col>
      <v-col cols="2">
        <v-text-field
          :model-value="availableAddress"
          :readonly="true"
          :clearable="false"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row v-for="item in labelsAndAddrs" :key="item.label">
      <v-col cols="2" class="v-input v-input--horizontal v-input--center-affix">
        <div class="v-input__prepend">{{ item.label }}</div>
      </v-col>
      <v-col cols="2">
        <v-text-field
          :model-value="item.address.address"
          :readonly="true"
          :clearable="false"
        >
        </v-text-field>
      </v-col>
      <v-col v-for="addr in item.address.toArray()" :key="addr" cols="1">
        <v-text-field :model-value="addr" :readonly="true" :clearable="false">
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
