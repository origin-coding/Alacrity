import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetTypography from "@unocss/preset-typography";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import { defineConfig } from "unocss";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({}),
    presetAttributify({}),
    presetTypography(),
    presetWebFonts({}),
  ],
});
