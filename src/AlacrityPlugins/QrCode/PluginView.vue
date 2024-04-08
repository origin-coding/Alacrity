<script setup lang="ts">
import { save } from "@tauri-apps/api/dialog";
import { writeBinaryFile, writeTextFile } from "@tauri-apps/api/fs";
import { useQRCode } from "@vueuse/integrations/useQRCode";
import QRCode from "qrcode";
import { DefineComponent, Ref, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import EmailForm from "./components/EmailForm.vue";
import MessageForm from "./components/MessageForm.vue";
import TextForm from "./components/TextForm.vue";
import UrlForm from "./components/UrlForm.vue";
import VCardForm from "./components/VCardForm.vue";
import WiFiForm from "./components/WiFiForm.vue";
// I18n
import messages from "./locale.json";

const { t, locale } = useI18n({ messages });

const text = ref("Hello, world!");

const qrcode = useQRCode(text, {
  scale: 75,
  type: "image/webp",
});

/* eslint-disable */
const forms: Ref<
  Array<{
    name: string;
    title: string;
    component: DefineComponent<{}, {}, any>;
  }>
> = ref([
  { name: "text-form", title: t("tab.text"), component: TextForm },
  { name: "url-form", title: t("tab.link"), component: UrlForm },
  { name: "wifi-form", title: "WiFi", component: WiFiForm },
  { name: "message-form", title: t("tab.message"), component: MessageForm },
  { name: "email-form", title: t("tab.email"), component: EmailForm },
  { name: "vcard-form", title: t("tab.contact"), component: VCardForm },
]);

watch(locale, () => {
  for (const [index, key] of [
    "text",
    "link",
    "wifi",
    "message",
    "email",
    "contact",
  ].entries()) {
    forms.value[index].title = t(`tab.${key}`);
  }
});

const currentForm = ref("text-form");

async function saveJpegPng(fileType: "jpeg" | "png") {
  const filepath = await save({
    filters: [{ name: "Image", extensions: [fileType] }],
  });

  if (filepath === null) {
    return;
  }

  const element = await QRCode.toCanvas(text.value, { scale: 75, width: 300 });
  element.toBlob(async (binaryContent) => {
    const buffer = await binaryContent!.arrayBuffer();
    await writeBinaryFile(filepath, buffer);
  }, `image/${fileType}`);
}

async function sageSvg() {
  const filepath = await save({
    filters: [{ name: "Image", extensions: ["svg"] }],
  });

  if (filepath === null) {
    return;
  }

  const content = await QRCode.toString(text.value, { scale: 75, width: 300 });
  await writeTextFile(filepath, content);
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <v-container>
          <v-tabs v-model="currentForm" density="compact">
            <v-tab v-for="form in forms" :key="form.name" :value="form.name">
              {{ form.title }}
            </v-tab>
          </v-tabs>
          <v-card-text>
            <v-window v-model="currentForm">
              <v-window-item
                v-for="form in forms"
                :key="form.name"
                :value="form.name"
              >
                <component
                  :is="form.component"
                  @generate="(value: string) => (text = value)"
                ></component>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-container>
      </v-col>
      <v-col cols="4">
        <v-container class="d-flex justify-center">
          <v-img
            :src="qrcode"
            alt="Generated QR Code."
            height="300"
            width="300"
          >
          </v-img>
        </v-container>
        <v-container class="d-flex justify-center align-center">
          <div class="mr-2">{{ t("plugin.download") }}</div>
          <v-btn-group variant="outlined" :divided="true">
            <v-btn @click="saveJpegPng('jpeg')">Jpg</v-btn>
            <v-btn @click="saveJpegPng('png')">Png</v-btn>
            <v-btn @click="sageSvg">Svg</v-btn>
          </v-btn-group>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
