<script setup lang="ts">
import { MessagePlugin } from "tdesign-vue-next";
import dayjs from "dayjs";

const { t } = useI18n();

type ConnectHistoryType = "connect" | "disconnect" | "error";

interface ConnectHistory {
  time: string;
  url: string;
  type: ConnectHistoryType;
}

function buildConnectHistory(ws: WebSocket, type: ConnectHistoryType) {
  return {
    time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    url: ws.url,
    type,
  };
}

type MessageHistoryType = "send" | "receive";

interface MessageHistory {
  time: string;
  message: string;
  length: number;
  type: MessageHistoryType;
}

function buildMessageHistory(message: string, type: MessageHistoryType) {
  return {
    time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    message: message,
    length: message.length,
    type,
  };
}

function isMessageHistory(history: History): history is MessageHistory {
  return "message" in history;
}

type History = ConnectHistory | MessageHistory;

const url = ref("");
const { ref: request, paste, clear } = useStringOperations();
const { ref: response, copy } = useStringOperations();
const historyList = ref<History[]>([]);
const reversedHistoryList = computed(() => historyList.value.toReversed());

const { status, open, send, close } = useWebSocket<string | Blob>(url, {
  immediate: false,
  async onError(ws) {
    await MessagePlugin.error(t("notification.error"));
    historyList.value.push(buildConnectHistory(ws, "error"));
  },
  async onConnected(ws) {
    await MessagePlugin.success(t("notification.connected"));
    historyList.value.push(buildConnectHistory(ws, "connect"));
    console.log(historyList.value);
  },
  async onDisconnected(ws, event) {
    if (event.code === 1000) {
      await MessagePlugin.success(t("notification.disconnected"));
      historyList.value.push(buildConnectHistory(ws, "disconnect"));
    }
  },
  async onMessage(_, event) {
    if (typeof event.data === "string") {
      response.value = event.data;
      historyList.value.push(buildMessageHistory(response.value, "receive"));
    } else {
      await MessagePlugin.warning(t("notification.not-supported"));
    }
  },
});

const closed = computed(() => status.value === "CLOSED");

const buttonI18nKey = computed(() => {
  return closed.value ? "open" : "close";
});

function connectOperation() {
  if (closed.value) {
    open();
  } else {
    close();
  }
}

// Send message
function sendMessage() {
  send(request.value);
  historyList.value.push(buildMessageHistory(request.value, "send"));
}

// Received message and history operations
function clearHistory() {
  historyList.value = [];
}

function truncate(message: string) {
  if (message.length <= 80) {
    return message;
  } else {
    return message.substring(0, 80) + "...";
  }
}
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <option-layout>
      <t-form-item :label="t('url')">
        <t-input v-model="url"></t-input>
      </t-form-item>
      <t-button @click="connectOperation">{{ t(buttonI18nKey) }}</t-button>
    </option-layout>
    <t-divider></t-divider>
    <t-space direction="horizontal" w-full>
      <input-output-layout
        :paste="true"
        :clear="true"
        @paste="paste"
        @clear="clear"
      >
        <template #operations>
          <t-button @click="sendMessage">发送</t-button>
        </template>
        <t-textarea
          v-model="request"
          :autosize="{ minRows: 5, maxRows: 5 }"
        ></t-textarea>
      </input-output-layout>
      <input-output-layout
        :copy="true"
        :clear="true"
        @copy="copy"
        @clear="response = ''"
      >
        <t-textarea
          :value="response"
          :readonly="true"
          :autosize="{ minRows: 5, maxRows: 5 }"
        ></t-textarea>
      </input-output-layout>
    </t-space>
    <t-divider></t-divider>
    <input-output-layout :clear="true" @clear="clearHistory">
      <t-list h-25vh>
        <t-list-item v-for="history in reversedHistoryList" :key="history.time">
          <t-row w-full>
            <t-col :span="2"> {{ history.time }}</t-col>
            <t-col :span="1">{{ t(`history.${history.type}`) }}</t-col>
            <t-col :span="8">
              <template v-if="isMessageHistory(history)">
                {{ truncate(history.message) }}
              </template>
              <template v-else>
                {{ truncate(history.url) }}
              </template>
            </t-col>
            <t-col v-if="isMessageHistory(history)">
              {{ `${t("history.length")}${history.length}` }}
            </t-col>
          </t-row>
        </t-list-item>
      </t-list>
    </input-output-layout>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "open": "Connect",
    "close": "Disconnect",
    "url": "Url",
    "notification": {
      "error": "Connect error!",
      "connected": "Connected",
      "disconnected": "Disconnected",
      "not-supported": "Only supports text"
    },
    "history": {
      "error": "Error: ",
      "connect": "Connected: ",
      "disconnect": "Disconnected: ",
      "send": "Sent: ",
      "receive": "Received: ",
      "length": "Length: "
    }
  },
  "zhHans": {
    "open": "打开连接",
    "close": "断开连接",
    "url": "链接",
    "notification": {
      "error": "连接失败！",
      "connected": "成功连接",
      "disconnected": "断开连接",
      "not-supported": "只支持文本"
    },
    "history": {
      "error": "连接异常：",
      "connect": "建立连接：",
      "disconnect": "断开连接：",
      "send": "发送：",
      "receive": "接收：",
      "length": "长度："
    }
  }
}
</i18n>
