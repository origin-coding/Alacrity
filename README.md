# Alacrity：开发者工具箱

![GitHub package.json version](https://img.shields.io/github/package-json/v/origin-coding/Alacrity)
![GitHub Release Date](https://img.shields.io/github/release-date/origin-coding/Alacrity)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/origin-coding/Alacrity/total)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/origin-coding/Alacrity/create-release.yml)
![GitHub License](https://img.shields.io/github/license/origin-coding/alacrity)

[English](./README_en.md)

# 介绍

我的个人项目，用来实现一些常用的开发工具，同时也用来学习相关的技术。

## 功能特性

1. 适用于各种场景的多种插件，包括Base64、UUID、WebSocket等。
2. 汉语和英语双语言，以及亮色/暗色主题切换；在切换主题设置为系统默认时，可能需要手动刷新来使页面生效。

## 安装下载

可以在[GitHub Release](https://github.com/origin-coding/Alacrity/releases/latest)页面下载Alacrity的安装包。
安装后双击桌面快捷方式运行应用。

# 本地开发

## 所需环境

1. Node.js，以及一个包管理器，这里推荐使用yarn。
2. Rust开发环境，可能需要额外配置软件源。

## 开发流程

1. 将项目克隆到本地：`git clone https://github.com/origin-coding/Alacrity.git`
2. 执行命令`yarn install`安装开发依赖
3. 执行命令`yarn run tauri dev`进行启动本地开发版本。注意：因为Alacrity被配置为单例应用，即同一时间只能有一个Alacrity示例运行，因此在开发时要关闭其他的Alacrity窗口。
4. 执行命令`yarn run tauri build`构建应用。

# 技术支持

- [Tauri](https://tauri.app) ：前端跨平台应用开发框架。
- [Vue](https://vuejs.org) & [Nuxt](https://nuxt.com) ：前端框架，并使用Nuxt提供内容渲染，自动路由等相关支持。
- [TDesign](https://tdesign.tencent.com/) ：腾讯开发的Vue组件库。
- [GitHub Actions](https://docs.github.com/en/actions) ：提供自动构建，自动发布等CI/CD特性。
