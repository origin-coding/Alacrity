<script setup lang="ts">
import { save } from "@tauri-apps/api/dialog";
import { writeBinaryFile, writeTextFile } from "@tauri-apps/api/fs";
import { useQRCode } from "@vueuse/integrations/useQRCode";
import QRCode from "qrcode";
import { MessagePlugin } from "tdesign-vue-next";

import {
  type GenerateType,
  generateType,
} from "~/composables/use-generate-qrcode";

const { t } = useI18n();
const { bus } = useGenerateQrcode();

const imageTypeList = ["Jpg", "Png", "Svg"] as const;
type ImageType = (typeof imageTypeList)[number];
const imageType = ref<ImageType>("Jpg");

const type = ref<GenerateType>("text");

const DEFAULT_RAW_VALUE = "Hello, world!";
const text = ref(DEFAULT_RAW_VALUE);
const image = useQRCode(text, {
  scale: 30,
  type: "image/webp",
});

// Image props for TImageViewer
const images = computed(() => [{ mainImage: image.value, download: false }]);

async function generate(value: string) {
  text.value = value.length !== 0 ? value : DEFAULT_RAW_VALUE;
}

// Functions for saving QR Code image.

async function saveJpegPng(fileType: Exclude<ImageType, "Svg">) {
  const filepath = await save({
    filters: [{ name: "Image", extensions: [fileType.toLowerCase()] }],
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

async function saveSvg() {
  const filepath = await save({
    filters: [{ name: "Image", extensions: ["svg"] }],
  });

  if (filepath === null) {
    return;
  }

  const content = await QRCode.toString(text.value, { scale: 75, width: 300 });
  await writeTextFile(filepath, content);
}

async function saveImage() {
  if (imageType.value === "Svg") {
    await saveSvg();
  } else {
    await saveJpegPng(imageType.value);
  }
  await MessagePlugin.success(t("option.success"));
}
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>

    <!-- Generation type and the generate button -->
    <option-layout>
      <t-form-item :label="t('option.type')">
        <t-select v-model="type">
          <t-option
            v-for="typeOption in generateType"
            :key="typeOption"
            :label="t(`type.${typeOption}`)"
            :value="typeOption"
          ></t-option>
        </t-select>
      </t-form-item>

      <t-form-item :label="t('option.image')">
        <t-select v-model="imageType">
          <t-option
            v-for="imageTypeOption in imageTypeList"
            :key="imageTypeOption"
            :label="imageTypeOption"
            :value="imageTypeOption"
          >
          </t-option>
        </t-select>
      </t-form-item>

      <t-space direction="horizontal">
        <t-button @click="bus.emit(type)">{{ t("option.generate") }}</t-button>
        <t-button @click="saveImage">{{ t("option.download") }}</t-button>
      </t-space>
    </option-layout>

    <!-- Options for each QR Code type -->
    <t-card>
      <qrcode-text :type @generate="generate"> </qrcode-text>
      <qrcode-email :type @generate="generate"> </qrcode-email>
      <qrcode-url :type @generate="generate"> </qrcode-url>
      <qrcode-wifi :type @generate="generate"> </qrcode-wifi>
      <qrcode-message :type @generate="generate"> </qrcode-message>
    </t-card>

    <t-divider></t-divider>

    <t-card :title="t('image.qrcode')">
      <div class="tdesign-demo-image-viewer__base">
        <t-image-viewer :images>
          <template #trigger="{ open }">
            <div class="tdesign-demo-image-viewer__ui-image">
              <img
                alt="test"
                :src="image"
                class="tdesign-demo-image-viewer__ui-image--img"
              />
              <div
                class="tdesign-demo-image-viewer__ui-image--hover"
                @click="open"
              >
                <span
                  ><BrowseIcon size="1.4em" /> {{ t("image.preview") }}
                </span>
              </div>
            </div>
          </template>
        </t-image-viewer>
      </div>
    </t-card>
  </t-space>
</template>

<style scoped lang="less">
.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

//noinspection CssMissingComma
.tdesign-demo-image-viewer__ui-image:hover
  .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>

<i18n>
{
  "en": {
    "type": {
      "text": "Text",
      "wifi": "WiFi Connection",
      "url": "URL",
      "message": "Send Message",
      "email": "Send Email"
    },
    "option": {
      "type": "QRCode For",
      "image": "Image type",
      "generate": "Generate",
      "download": "Download",
      "success": "Saved successfully"
    },
    "image": {
      "qrcode": "QR Code",
      "preview": "Preview"
    }
  },
  "zhHans": {
    "type": {
      "text": "文本",
      "wifi": "连接WiFi",
      "url": "链接",
      "message": "发送短信",
      "email": "发送邮件"
    },
    "option": {
      "type": "二维码用途",
      "image": "图像类型",
      "generate": "生成",
      "download": "下载图片",
      "success": "成功保存"
    },
    "image": {
      "qrcode": "二维码",
      "preview": "预览"
    }
  }
}
</i18n>
