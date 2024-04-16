import eslint from "@eslint/js";
import UnoCSS from "@unocss/eslint-config/flat";
import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";
import pluginVueScopedCss from "eslint-plugin-vue-scoped-css";
import tslint from "typescript-eslint";
import vueESLintParser from "vue-eslint-parser";

// noinspection JSUnusedGlobalSymbols
export default [
  UnoCSS,
  // Vue and typescript.
  eslint.configs.recommended,
  ...pluginVueScopedCss.configs["flat/recommended"],
  ...pluginVue.configs["flat/recommended"],
  ...tslint.configs.recommended,
  // Prettier.
  configPrettier,
  pluginPrettier,
  {
    // Global ignores.
    ignores: ["src-tauri/**/*.js", "dist/**/*.js"],
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: vueESLintParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
      },
    },
    rules: {
      // No unused vars for js and ts.
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      // Typescript ban ts comment.
      "@typescript-eslint/ban-ts-comment": "off",

      // Simple import sort.
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
];
