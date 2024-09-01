import UnoCSS from "@unocss/eslint-config/flat";
import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import withNuxt from "./.nuxt/eslint.config.mjs";

// noinspection JSUnusedGlobalSymbols
export default withNuxt(
  UnoCSS,
  // Prettier.
  configPrettier,
  pluginPrettier,
  {
    // Global ignores.
    ignores: [
      "src-tauri/**/*.js",
      "dist/**/*.js",
      ".husky/**/*.*",
      "node_modules/**/*.*",
      ".nuxt/**/*.*",
      "public/**/*.*",
      ".output/**/*.*",
      "yarn.lock",
      "package.json",
    ],
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
      },
    },
    rules: {
      // Typescript ban ts comment.
      "@typescript-eslint/ban-ts-comment": "off",

      // Simple import sort.
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

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
    },
  },
);
