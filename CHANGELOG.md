# Changelog

## [5.0.0](https://github.com/origin-coding/Alacrity/compare/v4.0.0...v5.0.0) (2023-11-21)


### ⚠ BREAKING CHANGES

* **markdown:** It's not necessary for a toolbox app to have long documentation displayed, so we removed this feature. Anyone who want to add documentation please add it additionally, or through a website.

### Features

* add search functionality ([3fa3b46](https://github.com/origin-coding/Alacrity/commit/3fa3b467cf6e6125550baca747e59df53da291fe))
* **alacrity:** add markdown documentation support ([1decf52](https://github.com/origin-coding/Alacrity/commit/1decf520057c55823ce5ff1f209c1827433f8316))
* **alacrity:** add new plugin: BaseConvert ([2082cf8](https://github.com/origin-coding/Alacrity/commit/2082cf864d0259dc3081aec41202c5257c6cae4e))
* **alacrity:** add plugin: FloatConvert, for converting float numbers ([1eef95f](https://github.com/origin-coding/Alacrity/commit/1eef95f69744797c3689e4870cdf959d7effe560))
* **app:** make Alacrity application single-instance ([c7fb3e0](https://github.com/origin-coding/Alacrity/commit/c7fb3e0b7a508aeb78f903a60dde66d5cd05d35f))
* **configuration:** add configuration option: theme ([b94e220](https://github.com/origin-coding/Alacrity/commit/b94e2201309f80fabc732263695dbbc6764f1199))
* **configuration:** add configuration saving/loading for locale and plugin favorites ([59909d7](https://github.com/origin-coding/Alacrity/commit/59909d708a4f3376faef0b0b8c5eb61e2fc5c980))
* **i18n:** add i18n support for Alacrity's plugin categories ([73251a0](https://github.com/origin-coding/Alacrity/commit/73251a023146782c57574719cb86255fade009e9))
* **i18n:** add i18n support for plugin ASCII's information ([cf0486e](https://github.com/origin-coding/Alacrity/commit/cf0486ec1e694b64396f0d9f7f88c14626f269f0))
* **i18n:** add i18n support for vuetify components ([a2a968a](https://github.com/origin-coding/Alacrity/commit/a2a968a2ccd9aa5c0c44be68628e4ec88bcf8c25))
* **i18n:** add multi-language support for IPCalculator's plugin information ([ecc4dac](https://github.com/origin-coding/Alacrity/commit/ecc4dac9c79938d97416a2eed3b42d2bc67107cb))
* **i18n:** add translation for plugins ([780f77f](https://github.com/origin-coding/Alacrity/commit/780f77f2816d538137a3cf319f7bed717252b339))
* **i18n:** add translation for plugins ([786607b](https://github.com/origin-coding/Alacrity/commit/786607bd7573e7c728b25f3e4535672bf37e8e9c))
* **i18n:** implement i18n support for plugin' name and description ([c95533c](https://github.com/origin-coding/Alacrity/commit/c95533ce5560aa7b2f6b5e59616c85ef30123dec))
* **i18n:** integrate vue-i18n for internationalization ([c05c43f](https://github.com/origin-coding/Alacrity/commit/c05c43fce8066dc26c11aa3f878e8d29983ea71c))
* **markdown:** remove feature: markdown documentation dialog ([0d7f49a](https://github.com/origin-coding/Alacrity/commit/0d7f49aa951a5de93854c522acae7390fa5a04ea))
* **nav:** add button for toggling theme ([5c882d1](https://github.com/origin-coding/Alacrity/commit/5c882d1a02b8213168d250d8d19dd786c2901fcf))
* **nav:** add button for visiting Alacrity's GitHub repository ([0e9f913](https://github.com/origin-coding/Alacrity/commit/0e9f9139284ee441c0f6b6b6cfb4647ac6077a82))
* **navigation:** add icon for navigation drawer's items ([486ecbf](https://github.com/origin-coding/Alacrity/commit/486ecbfb632376465e0a17364b60252a133582ac))
* **plugin:** add new category "Validator" ([267c5e9](https://github.com/origin-coding/Alacrity/commit/267c5e98aeb44222b3b738fbd2d9efaa3c4b0272))
* **plugin:** add new plugin: ASCII ([a87d930](https://github.com/origin-coding/Alacrity/commit/a87d9308c9cbdbb3260ccc015299e2fa04dc18ee))
* **plugin:** add new plugin: DateTimeFormat ([c171e25](https://github.com/origin-coding/Alacrity/commit/c171e25d49ebbce2dbe9f944973368a52c3da275))
* **plugin:** add new plugin: IPCalculator ([6167b2b](https://github.com/origin-coding/Alacrity/commit/6167b2bbe0e6cc98f01c0dfa676bb05b800563f1))
* **plugin:** add new plugin: MIMEType ([c05d477](https://github.com/origin-coding/Alacrity/commit/c05d477104b56b59e3eb8b423471ddd512787526))
* **plugin:** add new plugin: request-headers ([173da0d](https://github.com/origin-coding/Alacrity/commit/173da0d93eb2bb2eecbdec83608a121d0474b688))
* **plugin:** add new plugin: StatusCode ([fcb45c8](https://github.com/origin-coding/Alacrity/commit/fcb45c859e8f090edf0d5c0abc59f5cccadc023e))
* **plugin:** add new plugin: Timestamp ([796dab8](https://github.com/origin-coding/Alacrity/commit/796dab823d257ea2509b5a92c7d6fea10c270b4f))
* **plugin:** add plugin: Faker ([2ac3810](https://github.com/origin-coding/Alacrity/commit/2ac38109e8504a8ee8e2d74a3768275c546970df))
* **plugin:** add plugin: UserAgent ([ffc94af](https://github.com/origin-coding/Alacrity/commit/ffc94af6966447f293d80bb5a8a58d321817d18c))
* **plugin:** implement new plugin: url-parse, for parsing URLs ([1a26ea9](https://github.com/origin-coding/Alacrity/commit/1a26ea9218ff59c89a99380d2ec0ca0544d57cdc))
* **plugins:** add new plugin: UUID, for generating and validating UUIDs ([36ffe4b](https://github.com/origin-coding/Alacrity/commit/36ffe4b83ddb60085ccb0254adfde4de0307d39c))


### Bug Fixes

* **copy:** fix Base64 plugin's copy message ([398477a](https://github.com/origin-coding/Alacrity/commit/398477a4a724e06e6b2a36ca31b69badf87df259))
* **i18n:** fix i18n incorrect content ([5ba4412](https://github.com/origin-coding/Alacrity/commit/5ba44123dca3ab274bb92dfc3b5ac3bc50db2497))
* **i18n:** fix plugin StatusCode's wrong behavior on locale chaning ([01391ec](https://github.com/origin-coding/Alacrity/commit/01391ec2f0f99d6374d7ff035615b8ae974fd9e1))
* **props:** fix incorrect prop type in main view ([a7a74da](https://github.com/origin-coding/Alacrity/commit/a7a74da14a1a05c5e3b1a048af944407f997b2d3))
* **QRCode:** Fix password content. ([c204dae](https://github.com/origin-coding/Alacrity/commit/c204daeaf35c987dcf1cbfcc89bb252110907cb3))
* return to initial page when navigation drawer item is clicked. ([febc53f](https://github.com/origin-coding/Alacrity/commit/febc53f120e2ded266e347a8295d8e95ac30a79c))
* **statuacode:** make variable "allPages" reactive ([cbcb612](https://github.com/origin-coding/Alacrity/commit/cbcb6128c5d514cdf6af8ccc3fbe7f050e77d5b5))
* **style:** fix incorrect display style for plugin cards in main page ([1b6dcd5](https://github.com/origin-coding/Alacrity/commit/1b6dcd5fbec636213a57589ecec46f2b31c44cd5))
* **type:** make CheatSheetDataItem and LocalizedCheatSheetDataItem support for undefined data ([e307767](https://github.com/origin-coding/Alacrity/commit/e30776721a796abbc21b73a4de9f7dce4d26dcf4))
* **ui:** change WiFiForm's encryption method from VCombobox to VSelect ([b8d227a](https://github.com/origin-coding/Alacrity/commit/b8d227a2b023f217d01026c0bf8031bcf4ccf8a2))
* **ui:** remove useless character ([8b770a6](https://github.com/origin-coding/Alacrity/commit/8b770a629da68cf08a4bba3e1a82bac69fafa3d2))
* **v-menu:** make "open-on-hover" property reactive ([b564551](https://github.com/origin-coding/Alacrity/commit/b5645514e87c99f22ceafaad308256def8a36444))
* **warning:** add missing message: $vuetify.input.clear ([7946966](https://github.com/origin-coding/Alacrity/commit/7946966c20bd4ec5653e41b6b90a0776654caf3d))

## [4.0.0](https://github.com/origin-coding/Alacrity/compare/v3.0.0...v4.0.0) (2023-11-21)


### ⚠ BREAKING CHANGES

* **markdown:** It's not necessary for a toolbox app to have long documentation displayed, so we removed this feature. Anyone who want to add documentation please add it additionally, or through a website.

### Features

* add search functionality ([3fa3b46](https://github.com/origin-coding/Alacrity/commit/3fa3b467cf6e6125550baca747e59df53da291fe))
* **alacrity:** add markdown documentation support ([1decf52](https://github.com/origin-coding/Alacrity/commit/1decf520057c55823ce5ff1f209c1827433f8316))
* **alacrity:** add new plugin: BaseConvert ([2082cf8](https://github.com/origin-coding/Alacrity/commit/2082cf864d0259dc3081aec41202c5257c6cae4e))
* **alacrity:** add plugin: FloatConvert, for converting float numbers ([1eef95f](https://github.com/origin-coding/Alacrity/commit/1eef95f69744797c3689e4870cdf959d7effe560))
* **app:** make Alacrity application single-instance ([c7fb3e0](https://github.com/origin-coding/Alacrity/commit/c7fb3e0b7a508aeb78f903a60dde66d5cd05d35f))
* **configuration:** add configuration option: theme ([b94e220](https://github.com/origin-coding/Alacrity/commit/b94e2201309f80fabc732263695dbbc6764f1199))
* **configuration:** add configuration saving/loading for locale and plugin favorites ([59909d7](https://github.com/origin-coding/Alacrity/commit/59909d708a4f3376faef0b0b8c5eb61e2fc5c980))
* **i18n:** add i18n support for Alacrity's plugin categories ([73251a0](https://github.com/origin-coding/Alacrity/commit/73251a023146782c57574719cb86255fade009e9))
* **i18n:** add i18n support for plugin ASCII's information ([cf0486e](https://github.com/origin-coding/Alacrity/commit/cf0486ec1e694b64396f0d9f7f88c14626f269f0))
* **i18n:** add i18n support for vuetify components ([a2a968a](https://github.com/origin-coding/Alacrity/commit/a2a968a2ccd9aa5c0c44be68628e4ec88bcf8c25))
* **i18n:** add multi-language support for IPCalculator's plugin information ([ecc4dac](https://github.com/origin-coding/Alacrity/commit/ecc4dac9c79938d97416a2eed3b42d2bc67107cb))
* **i18n:** add translation for plugins ([780f77f](https://github.com/origin-coding/Alacrity/commit/780f77f2816d538137a3cf319f7bed717252b339))
* **i18n:** add translation for plugins ([786607b](https://github.com/origin-coding/Alacrity/commit/786607bd7573e7c728b25f3e4535672bf37e8e9c))
* **i18n:** implement i18n support for plugin' name and description ([c95533c](https://github.com/origin-coding/Alacrity/commit/c95533ce5560aa7b2f6b5e59616c85ef30123dec))
* **i18n:** integrate vue-i18n for internationalization ([c05c43f](https://github.com/origin-coding/Alacrity/commit/c05c43fce8066dc26c11aa3f878e8d29983ea71c))
* **markdown:** remove feature: markdown documentation dialog ([0d7f49a](https://github.com/origin-coding/Alacrity/commit/0d7f49aa951a5de93854c522acae7390fa5a04ea))
* **nav:** add button for toggling theme ([5c882d1](https://github.com/origin-coding/Alacrity/commit/5c882d1a02b8213168d250d8d19dd786c2901fcf))
* **nav:** add button for visiting Alacrity's GitHub repository ([0e9f913](https://github.com/origin-coding/Alacrity/commit/0e9f9139284ee441c0f6b6b6cfb4647ac6077a82))
* **navigation:** add icon for navigation drawer's items ([486ecbf](https://github.com/origin-coding/Alacrity/commit/486ecbfb632376465e0a17364b60252a133582ac))
* **plugin:** add new category "Validator" ([267c5e9](https://github.com/origin-coding/Alacrity/commit/267c5e98aeb44222b3b738fbd2d9efaa3c4b0272))
* **plugin:** add new plugin: ASCII ([a87d930](https://github.com/origin-coding/Alacrity/commit/a87d9308c9cbdbb3260ccc015299e2fa04dc18ee))
* **plugin:** add new plugin: DateTimeFormat ([c171e25](https://github.com/origin-coding/Alacrity/commit/c171e25d49ebbce2dbe9f944973368a52c3da275))
* **plugin:** add new plugin: IPCalculator ([6167b2b](https://github.com/origin-coding/Alacrity/commit/6167b2bbe0e6cc98f01c0dfa676bb05b800563f1))
* **plugin:** add new plugin: MIMEType ([c05d477](https://github.com/origin-coding/Alacrity/commit/c05d477104b56b59e3eb8b423471ddd512787526))
* **plugin:** add new plugin: request-headers ([173da0d](https://github.com/origin-coding/Alacrity/commit/173da0d93eb2bb2eecbdec83608a121d0474b688))
* **plugin:** add new plugin: StatusCode ([fcb45c8](https://github.com/origin-coding/Alacrity/commit/fcb45c859e8f090edf0d5c0abc59f5cccadc023e))
* **plugin:** add new plugin: Timestamp ([796dab8](https://github.com/origin-coding/Alacrity/commit/796dab823d257ea2509b5a92c7d6fea10c270b4f))
* **plugin:** add plugin: Faker ([2ac3810](https://github.com/origin-coding/Alacrity/commit/2ac38109e8504a8ee8e2d74a3768275c546970df))
* **plugin:** add plugin: UserAgent ([ffc94af](https://github.com/origin-coding/Alacrity/commit/ffc94af6966447f293d80bb5a8a58d321817d18c))
* **plugin:** implement new plugin: url-parse, for parsing URLs ([1a26ea9](https://github.com/origin-coding/Alacrity/commit/1a26ea9218ff59c89a99380d2ec0ca0544d57cdc))
* **plugins:** add new plugin: UUID, for generating and validating UUIDs ([36ffe4b](https://github.com/origin-coding/Alacrity/commit/36ffe4b83ddb60085ccb0254adfde4de0307d39c))


### Bug Fixes

* **copy:** fix Base64 plugin's copy message ([398477a](https://github.com/origin-coding/Alacrity/commit/398477a4a724e06e6b2a36ca31b69badf87df259))
* **i18n:** fix i18n incorrect content ([5ba4412](https://github.com/origin-coding/Alacrity/commit/5ba44123dca3ab274bb92dfc3b5ac3bc50db2497))
* **i18n:** fix plugin StatusCode's wrong behavior on locale chaning ([01391ec](https://github.com/origin-coding/Alacrity/commit/01391ec2f0f99d6374d7ff035615b8ae974fd9e1))
* **props:** fix incorrect prop type in main view ([a7a74da](https://github.com/origin-coding/Alacrity/commit/a7a74da14a1a05c5e3b1a048af944407f997b2d3))
* **QRCode:** Fix password content. ([c204dae](https://github.com/origin-coding/Alacrity/commit/c204daeaf35c987dcf1cbfcc89bb252110907cb3))
* return to initial page when navigation drawer item is clicked. ([febc53f](https://github.com/origin-coding/Alacrity/commit/febc53f120e2ded266e347a8295d8e95ac30a79c))
* **statuacode:** make variable "allPages" reactive ([cbcb612](https://github.com/origin-coding/Alacrity/commit/cbcb6128c5d514cdf6af8ccc3fbe7f050e77d5b5))
* **style:** fix incorrect display style for plugin cards in main page ([1b6dcd5](https://github.com/origin-coding/Alacrity/commit/1b6dcd5fbec636213a57589ecec46f2b31c44cd5))
* **type:** make CheatSheetDataItem and LocalizedCheatSheetDataItem support for undefined data ([e307767](https://github.com/origin-coding/Alacrity/commit/e30776721a796abbc21b73a4de9f7dce4d26dcf4))
* **ui:** change WiFiForm's encryption method from VCombobox to VSelect ([b8d227a](https://github.com/origin-coding/Alacrity/commit/b8d227a2b023f217d01026c0bf8031bcf4ccf8a2))
* **ui:** remove useless character ([8b770a6](https://github.com/origin-coding/Alacrity/commit/8b770a629da68cf08a4bba3e1a82bac69fafa3d2))
* **v-menu:** make "open-on-hover" property reactive ([b564551](https://github.com/origin-coding/Alacrity/commit/b5645514e87c99f22ceafaad308256def8a36444))
* **warning:** add missing message: $vuetify.input.clear ([7946966](https://github.com/origin-coding/Alacrity/commit/7946966c20bd4ec5653e41b6b90a0776654caf3d))

## [3.0.0](https://github.com/origin-coding/Alacrity/compare/v2.0.0...v3.0.0) (2023-11-21)


### ⚠ BREAKING CHANGES

* **markdown:** It's not necessary for a toolbox app to have long documentation displayed, so we removed this feature. Anyone who want to add documentation please add it additionally, or through a website.

### Features

* add search functionality ([3fa3b46](https://github.com/origin-coding/Alacrity/commit/3fa3b467cf6e6125550baca747e59df53da291fe))
* **alacrity:** add markdown documentation support ([1decf52](https://github.com/origin-coding/Alacrity/commit/1decf520057c55823ce5ff1f209c1827433f8316))
* **alacrity:** add new plugin: BaseConvert ([2082cf8](https://github.com/origin-coding/Alacrity/commit/2082cf864d0259dc3081aec41202c5257c6cae4e))
* **alacrity:** add plugin: FloatConvert, for converting float numbers ([1eef95f](https://github.com/origin-coding/Alacrity/commit/1eef95f69744797c3689e4870cdf959d7effe560))
* **app:** make Alacrity application single-instance ([c7fb3e0](https://github.com/origin-coding/Alacrity/commit/c7fb3e0b7a508aeb78f903a60dde66d5cd05d35f))
* **configuration:** add configuration option: theme ([b94e220](https://github.com/origin-coding/Alacrity/commit/b94e2201309f80fabc732263695dbbc6764f1199))
* **configuration:** add configuration saving/loading for locale and plugin favorites ([59909d7](https://github.com/origin-coding/Alacrity/commit/59909d708a4f3376faef0b0b8c5eb61e2fc5c980))
* **i18n:** add i18n support for Alacrity's plugin categories ([73251a0](https://github.com/origin-coding/Alacrity/commit/73251a023146782c57574719cb86255fade009e9))
* **i18n:** add i18n support for plugin ASCII's information ([cf0486e](https://github.com/origin-coding/Alacrity/commit/cf0486ec1e694b64396f0d9f7f88c14626f269f0))
* **i18n:** add i18n support for vuetify components ([a2a968a](https://github.com/origin-coding/Alacrity/commit/a2a968a2ccd9aa5c0c44be68628e4ec88bcf8c25))
* **i18n:** add multi-language support for IPCalculator's plugin information ([ecc4dac](https://github.com/origin-coding/Alacrity/commit/ecc4dac9c79938d97416a2eed3b42d2bc67107cb))
* **i18n:** add translation for plugins ([780f77f](https://github.com/origin-coding/Alacrity/commit/780f77f2816d538137a3cf319f7bed717252b339))
* **i18n:** add translation for plugins ([786607b](https://github.com/origin-coding/Alacrity/commit/786607bd7573e7c728b25f3e4535672bf37e8e9c))
* **i18n:** implement i18n support for plugin' name and description ([c95533c](https://github.com/origin-coding/Alacrity/commit/c95533ce5560aa7b2f6b5e59616c85ef30123dec))
* **i18n:** integrate vue-i18n for internationalization ([c05c43f](https://github.com/origin-coding/Alacrity/commit/c05c43fce8066dc26c11aa3f878e8d29983ea71c))
* **markdown:** remove feature: markdown documentation dialog ([0d7f49a](https://github.com/origin-coding/Alacrity/commit/0d7f49aa951a5de93854c522acae7390fa5a04ea))
* **nav:** add button for toggling theme ([5c882d1](https://github.com/origin-coding/Alacrity/commit/5c882d1a02b8213168d250d8d19dd786c2901fcf))
* **nav:** add button for visiting Alacrity's GitHub repository ([0e9f913](https://github.com/origin-coding/Alacrity/commit/0e9f9139284ee441c0f6b6b6cfb4647ac6077a82))
* **navigation:** add icon for navigation drawer's items ([486ecbf](https://github.com/origin-coding/Alacrity/commit/486ecbfb632376465e0a17364b60252a133582ac))
* **plugin:** add new category "Validator" ([267c5e9](https://github.com/origin-coding/Alacrity/commit/267c5e98aeb44222b3b738fbd2d9efaa3c4b0272))
* **plugin:** add new plugin: ASCII ([a87d930](https://github.com/origin-coding/Alacrity/commit/a87d9308c9cbdbb3260ccc015299e2fa04dc18ee))
* **plugin:** add new plugin: DateTimeFormat ([c171e25](https://github.com/origin-coding/Alacrity/commit/c171e25d49ebbce2dbe9f944973368a52c3da275))
* **plugin:** add new plugin: IPCalculator ([6167b2b](https://github.com/origin-coding/Alacrity/commit/6167b2bbe0e6cc98f01c0dfa676bb05b800563f1))
* **plugin:** add new plugin: MIMEType ([c05d477](https://github.com/origin-coding/Alacrity/commit/c05d477104b56b59e3eb8b423471ddd512787526))
* **plugin:** add new plugin: request-headers ([173da0d](https://github.com/origin-coding/Alacrity/commit/173da0d93eb2bb2eecbdec83608a121d0474b688))
* **plugin:** add new plugin: StatusCode ([fcb45c8](https://github.com/origin-coding/Alacrity/commit/fcb45c859e8f090edf0d5c0abc59f5cccadc023e))
* **plugin:** add new plugin: Timestamp ([796dab8](https://github.com/origin-coding/Alacrity/commit/796dab823d257ea2509b5a92c7d6fea10c270b4f))
* **plugin:** add plugin: Faker ([2ac3810](https://github.com/origin-coding/Alacrity/commit/2ac38109e8504a8ee8e2d74a3768275c546970df))
* **plugin:** add plugin: UserAgent ([ffc94af](https://github.com/origin-coding/Alacrity/commit/ffc94af6966447f293d80bb5a8a58d321817d18c))
* **plugin:** implement new plugin: url-parse, for parsing URLs ([1a26ea9](https://github.com/origin-coding/Alacrity/commit/1a26ea9218ff59c89a99380d2ec0ca0544d57cdc))
* **plugins:** add new plugin: UUID, for generating and validating UUIDs ([36ffe4b](https://github.com/origin-coding/Alacrity/commit/36ffe4b83ddb60085ccb0254adfde4de0307d39c))


### Bug Fixes

* **copy:** fix Base64 plugin's copy message ([398477a](https://github.com/origin-coding/Alacrity/commit/398477a4a724e06e6b2a36ca31b69badf87df259))
* **i18n:** fix i18n incorrect content ([5ba4412](https://github.com/origin-coding/Alacrity/commit/5ba44123dca3ab274bb92dfc3b5ac3bc50db2497))
* **i18n:** fix plugin StatusCode's wrong behavior on locale chaning ([01391ec](https://github.com/origin-coding/Alacrity/commit/01391ec2f0f99d6374d7ff035615b8ae974fd9e1))
* **props:** fix incorrect prop type in main view ([a7a74da](https://github.com/origin-coding/Alacrity/commit/a7a74da14a1a05c5e3b1a048af944407f997b2d3))
* **QRCode:** Fix password content. ([c204dae](https://github.com/origin-coding/Alacrity/commit/c204daeaf35c987dcf1cbfcc89bb252110907cb3))
* return to initial page when navigation drawer item is clicked. ([febc53f](https://github.com/origin-coding/Alacrity/commit/febc53f120e2ded266e347a8295d8e95ac30a79c))
* **statuacode:** make variable "allPages" reactive ([cbcb612](https://github.com/origin-coding/Alacrity/commit/cbcb6128c5d514cdf6af8ccc3fbe7f050e77d5b5))
* **style:** fix incorrect display style for plugin cards in main page ([1b6dcd5](https://github.com/origin-coding/Alacrity/commit/1b6dcd5fbec636213a57589ecec46f2b31c44cd5))
* **type:** make CheatSheetDataItem and LocalizedCheatSheetDataItem support for undefined data ([e307767](https://github.com/origin-coding/Alacrity/commit/e30776721a796abbc21b73a4de9f7dce4d26dcf4))
* **ui:** change WiFiForm's encryption method from VCombobox to VSelect ([b8d227a](https://github.com/origin-coding/Alacrity/commit/b8d227a2b023f217d01026c0bf8031bcf4ccf8a2))
* **ui:** remove useless character ([8b770a6](https://github.com/origin-coding/Alacrity/commit/8b770a629da68cf08a4bba3e1a82bac69fafa3d2))
* **v-menu:** make "open-on-hover" property reactive ([b564551](https://github.com/origin-coding/Alacrity/commit/b5645514e87c99f22ceafaad308256def8a36444))
* **warning:** add missing message: $vuetify.input.clear ([7946966](https://github.com/origin-coding/Alacrity/commit/7946966c20bd4ec5653e41b6b90a0776654caf3d))
