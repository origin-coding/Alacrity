// noinspection JSUnusedGlobalSymbols

export const generateType = [
  "text",
  "wifi",
  "url",
  "message",
  "email",
] as const;

export type GenerateType = (typeof generateType)[number];

export default function () {
  const bus = useEventBus<GenerateType, unknown>("qrcode-bus");

  return { bus };
}
