# Alacrity：开发者工具箱

![GitHub package.json version](https://img.shields.io/github/package-json/v/origin-coding/Alacrity)
![GitHub Release Date](https://img.shields.io/github/release-date/origin-coding/Alacrity)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/origin-coding/Alacrity/total)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/origin-coding/Alacrity/create-release.yml)
![GitHub License](https://img.shields.io/github/license/origin-coding/alacrity)

[中文](./README.md)

# Introduction

My personal project, used to implement some common used development tools, also used to learn relevant technologies.

## Features

1. Plugins suitable for lots of situations, such as Base64, UUID, WebSocket, etc。
2. Switching between Chinese and English, and change themes between light and dark.

## Download & install

You can download installer for Alacrity from [GitHub Release](https://github.com/origin-coding/Alacrity/releases/latest)
page.
After installation, double click the shortcut on desktop to use Alacrity.

# Local development

## Required environments

1. Node.js, and a package manager, yarn is recommended.
2. Rust development environment, maybe need to configure a source.

## Development process

1. Clone repository: `git clone https://github.com/origin-coding/Alacrity.git`
2. Run `yarn install` to install dependencies.
3. Manually delete directory: **node_modules/micromark/node_modules** . This directory uses **Common JS module
   specification**, which causes crash during development, but does not influence the build process, so it's free to
   delete.
4. Run `yarn run tauri dev` to run Alacrity for development. Note: Alacrity is configured as a singleton application,
   which means there is only one application instance at the same time, so you need to close other Alacrity windows
   during development.
5. Run `yarn run tauri build` to build Alacrity.

# Powered by

- [Tauri](https://tauri.app) : Frontend cross-platform development framework.
- [Vue](https://vuejs.org) and [Nuxt](https://nuxt.com) : Frontend framework, and uses Nuxt for features like content
  rendering, auto routing, etc.
- [TDesign](https://tdesign.tencent.com/) : Component library from Tencent.
- [GitHub Actions](https://docs.github.com/en/actions) : Provides CI/CD features like auto building and auto releasing.
