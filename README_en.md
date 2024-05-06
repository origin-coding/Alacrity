# Alacrity: developer's toolbox.

[English](./README_en.md) [中文](./README.md)

# Clone & Run

```shell
git clone https://github.com/origin-coding/Alacrity.git
cd Alacrity

yarn install
npm run "tauri dev"
```

# Build from source

```shell
yarn install
npm run "tauri build"
```

# Alacrity's features

Navigation drawer on the left side displays all categories of Alacrity's plugins.
Click them to filter plugins by category.

Some useful utils are listed on top of Alacrity, such as searching plugins, changing locales and themes.

At main part of Alacrity's window are plugins, you can use them by clicking the card.
You can also add them to your favorite list by clicking the star icon on top right.

# Plugins provided

1. Encrypt: provide data encryption/decryption support, including Base64, etc.
2. Hash: provide data hash support, including MD5, etc.
3. CheatSheet: provide cheat sheet for development, including HTTP response code, etc.
4. Format: provide format support, including JavaScript format, etc.
5. Generator: provide generator support, including QR code generator, data generator, etc.
6. Validator: provide validator support, including UUID validator, etc.
7. Converter: provide converter support, including timestamp converter, etc.
8. Parser: provide parser support, including URL parser, User Agent parser, etc.

# To-do

1. [ ] Multi-language support: translate more plugins.
2. [ ] More plugins: provide 20-30 plugins before 2024.03.
3. [ ] Theme support: change Alacrity's theme to [Catppuccino](https://github.com/catppuccin).
4. [ ] Icon support: change icon from Tauri's icon to Alacrity's icon.

# Directory structure

## Alacrity's plugin directory structure

All plugins are located in `src/AlacrityPlugins` folder, each plugin is a folder, and the folder's name is the plugin's
name.

The directory structure of the folder is as follows:

1. plugin.json: plugin's config file, contains plugin's name, description, author, version, category, etc.
2. plugin.vue: plugin's main logic, contains plugin's UI and logic.
3. index.ts: plugin's entry file, make Alacrity discover the plugin.
4. locale.json: plugin's locale file.
5. data.json: for cheat sheet plugins, provide data file for displaying data.

## Alacrity's API

### Predefined components

1. CheatSheet.vue: Used to build cheat-sheet plugins in Alacrity.

### Predefined localized translation

Predefined localized translations are located in `src/locales` folder, with name of `${locale}.json`. Including the
following translations:

1. $vuetify: Vuetify's localized translations.
2. plugin: common used localized translations, including "Clear", "Copy", etc.

### Predefined types

Predefined type support are located in `src/common` folder, including the following types:

1. Cheat Sheet: located in `src/common/cheat-sheet.ts` file, including CheatSheetHeader, etc. For controlling Cheat Sheet
   component's behavior.
2. Monaco Editor: located in `src/common/monato.ts` file, for importing Monaco Editor's type.
3. Plugin and Category: located in `src/common/plugin.ts` and `src/common/category.ts` files, including Plugin,
   PluginCategory, etc. Used for controlling plugins' behavior.
4. Configurations: located in `src/common/config.ts` file, including common used configuration options.
5. PluginSchema.json: Specify plugin information's format.
