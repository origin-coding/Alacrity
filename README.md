# Alacrity：开发者工具箱

[English](./README_en.md) [中文](./README.md)

# 运行

```shell
git clone https://github.com/origin-coding/Alacrity.git
cd Alacrity

yarn install
npm run "tauri dev"
```

# 从源码构建

```shell
yarn install
npm run "tauri build"
```

# Alacrity功能详解

应用左侧的导航栏显示了Alacrity所有的应用类别，可以通过点击他们对应用进行筛选。

应用上方的导航栏列出了常用的工具，比如搜索插件、切换语言、主题等功能。

下方的应用主题部分则是插件的列表，可以通过点击卡片使用插件，也可以点击右上角的星号将插件添加到收藏夹中。

# 已有的插件

1. Encrypt：提供数据加密/解密支持，包括Base64等。
2. Hash：提供数据哈希支持，包括MD5等。
3. CheatSheet：开发中常用的备忘单，包括HTTP响应代码等。
4. Format：格式化工具，包括JavaScript格式化等。
5. Generator：生成工具，包括二维码生成工具，数据生成工具等。
6. Validator：验证工具，包括UUID验证工具等。
7. Converter：转换工具，包括时间戳转换工具等。
8. Parser：解析工具，包括URL解析工具，User Agent解析工具等。

# 开发计划

1. [ ] 多语言支持：翻译更多的插件。
2. [ ] 插件支持：预计在2024.03之前，开发20-30个插件。
3. [ ] 主题支持：将Alacrity主题更改为[Catppuccin](https://github.com/catppuccin)。
4. [ ] 图标支持：将图标从Tauri图标更改为Alacrity的图标。

# 目录结构

## Alacrity插件目录结构

所有插件都位于`src/AlacrityPlugins`文件夹中，每个插件都是一个文件夹，文件夹的名称即为插件的名称。

文件夹的目录结构如下：

1. plugin.json：插件的配置文件，包含插件的名称、描述、作者、版本、类别等信息。
2. plugin.vue：插件的主要逻辑，包含插件的界面和逻辑。
3. index.ts：插件的入口文件，便于让Alacrity发现插件。
4. locale.json：插件的多语言文件。
5. data.json：对于备忘单类的插件，需要提供数据文件，用于显示数据。

## Alacrity提供的API

### 预定义组件

预定义的组件放在`src/components`文件夹中。包含的组件如下：

1. CheatSheet.vue：用于构建备忘单类型的插件。

### 预定义本地化翻译

预定义的本地化翻译放在`src/locales`文件夹中，名称为`${locale}.json`。包含的翻译如下：

1. $vuetify：Vuetify的本地化翻译。
2. plugin：插件常用的的本地化翻译，包括"清空"、"复制"等。

### 预定义类型

预定义的类型支持放在了`src/common`文件夹中，包含的类型如下：

1. 备忘单相关：位于`src/common/cheat-sheet.ts`中，包括CheatSheetHeader等，用于自定义备忘单的行为。
2. Monaco Editor：位于`src/common/monaco.ts`中，用于导入Monaco Editor的类型。
3. 插件和插件类别相关：位于`src/common/plugin.ts`和`src/common/category.ts`中，包括Plugin、PluginCategory等，用于自定义插件的行为。
4. 配置相关：位于`src/common/config.ts`中，包含常用的配置项。
5. PluginSchema.json：指定插件配置文件的格式。
