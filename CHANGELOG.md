# Changelog

## [2.2.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.1.0...alacrity-v2.2.0) (2024-06-24)


### Features

* add i18n message for new group web ([ffb02e1](https://github.com/origin-coding/Alacrity/commit/ffb02e141a8172ba2ec41fd15febd5fe01517d6b))
* implement plugin hash-file ([fd5bd17](https://github.com/origin-coding/Alacrity/commit/fd5bd172c1340d5a44aebbec3ed8fa84ad90627b))
* implement plugin hash-text ([6a7b8f2](https://github.com/origin-coding/Alacrity/commit/6a7b8f2f8459c45a85c8aa029a440cebf4ca5f42))
* implement plugin local-websocket-client ([b95ebc9](https://github.com/origin-coding/Alacrity/commit/b95ebc9a47e5b752782e12c76ffda961d2dea628))
* use icon components to avoid network request ([6b8c16a](https://github.com/origin-coding/Alacrity/commit/6b8c16a79003b7e98c44ce8b3c5865f64f3636c8))

## [2.1.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.0.0...alacrity-v2.1.0) (2024-06-03)


### Features

* add components for page layout and plugins ([0f4650e](https://github.com/origin-coding/Alacrity/commit/0f4650e83a25ed9648f4518071b712814c87b3e7))
* add default values to config ([071245e](https://github.com/origin-coding/Alacrity/commit/071245e7619f67d89ee7e84958d1071c22219471))
* add i18n messages for Alacrity's config ([31080a9](https://github.com/origin-coding/Alacrity/commit/31080a9a5fb84e788766727e75d5987d39856bb7))
* add menu item for favorite and disabled plugins ([df6fd86](https://github.com/origin-coding/Alacrity/commit/df6fd8645d4e0410f3b425e898a938fc9eff8a16))
* add page for default, favorite and disabled plugins ([d2e1112](https://github.com/origin-coding/Alacrity/commit/d2e1112c023c61f971e1a30f41ad118dfad3e288))
* add settings page ([78198ea](https://github.com/origin-coding/Alacrity/commit/78198ea5a45d5183dc3dbee00863aa1b2a540d9a))
* add util ([2f11e67](https://github.com/origin-coding/Alacrity/commit/2f11e67ca57ba9631015c857708d5e805f561e61))
* change base64-encode-decode plugin's English name ([2a65af8](https://github.com/origin-coding/Alacrity/commit/2a65af85305c2c77c11c5dee34a34d012758ed88))
* clean up code, re-design Alacrity's config file ([140417c](https://github.com/origin-coding/Alacrity/commit/140417ca467e13fb685ce250f1d2e4a819bf039f))
* hide scrollbar ([36df533](https://github.com/origin-coding/Alacrity/commit/36df5339345cc567535c818f58582481431a6b67))
* implement plugin base64-encode-decode ([2c0cdff](https://github.com/origin-coding/Alacrity/commit/2c0cdffbbf1ad16c212404d0885e34eaa1119d00))
* introduce i18n for TDesign components; init theme on app startup ([39fa2c3](https://github.com/origin-coding/Alacrity/commit/39fa2c3d2348528cf9241367dcf47e9d74712bb0))
* remove redundant fields ([04ec011](https://github.com/origin-coding/Alacrity/commit/04ec0114b4b510a1e6c879e1ad1fa46532e05eca))
* remove redundant fields ([7e7bc2a](https://github.com/origin-coding/Alacrity/commit/7e7bc2affa79066151709f811f6f83e468220941))
* split config files to avoid coupling ([bd5445f](https://github.com/origin-coding/Alacrity/commit/bd5445fa32d64d7ef2c5720a1c3be9d679a040ad))
* **style:** add global stylesheet ([fd5588c](https://github.com/origin-coding/Alacrity/commit/fd5588c43f25d4d3e1833133528c43c2e29682b5))


### Bug Fixes

* fix config file's path ([228c23f](https://github.com/origin-coding/Alacrity/commit/228c23f05e3168c81b2df9a31d04c2082bad784f))
* fix mismatch route url after generating static site ([84357b6](https://github.com/origin-coding/Alacrity/commit/84357b63b5a61502e095f76cb2842d32a9beb90c))
* fix TDesign's i18n messages doesn't change on setup ([3cc6ec0](https://github.com/origin-coding/Alacrity/commit/3cc6ec05e9b8977f8eab356381433d8acc0f9322))
* prevent refreshing in production to avoid TConfigProvider's missing message ([20ef2a7](https://github.com/origin-coding/Alacrity/commit/20ef2a7bbeadae886858dc5460bc3c02234ab077))

## [2.0.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.7.0...alacrity-v2.0.0) (2024-05-15)


### ⚠ BREAKING CHANGES

* **Alacrity:** 3. Introduce Nuxt for routing, plugin and auto-imports.

### Features

* add i18n config ([6f29026](https://github.com/origin-coding/Alacrity/commit/6f29026b01ca2390d197310a8e9f3bed142deb51))
* add i18n messages ([648f3a9](https://github.com/origin-coding/Alacrity/commit/648f3a9e8cb7f5ab08a9cacf6d6e98d766e90263))
* add stores for plugin, config and searching ([3a6248e](https://github.com/origin-coding/Alacrity/commit/3a6248ef77bb7768d1f6b41099a7269354aa0b06))
* add type definitions ([4f70329](https://github.com/origin-coding/Alacrity/commit/4f70329c5d3a28893891f34d1fbc2a9c7382fd3b))
* add util functions ([5932717](https://github.com/origin-coding/Alacrity/commit/59327173739dca922fbe0a0a95efeb2fb53c8d90))
* **Alacrity:** create first plugin and upgrade Alacrity ([95b99fe](https://github.com/origin-coding/Alacrity/commit/95b99fe11f26b99e6ac8911f4eee4d83f5b3f92e))
* implement application layout ([92a3a82](https://github.com/origin-coding/Alacrity/commit/92a3a82f6ff9a7edda0a81593d57afba83519526))
* introduce Element Plus ([905fe89](https://github.com/origin-coding/Alacrity/commit/905fe896c76ff4ee5d6b4d0d8bcb8b2c360db920))
* introduce eslint and prettier ([b215e56](https://github.com/origin-coding/Alacrity/commit/b215e56b4895fc7ba05b832cb4f4a8fc528df299))
* migrate to nuxt ([e056bc4](https://github.com/origin-coding/Alacrity/commit/e056bc4f99e356246f08e81121e5d352985aa88c))
* re-introduce vue-i18n ([3e9c7f6](https://github.com/origin-coding/Alacrity/commit/3e9c7f6c69e62bc170670b1352986d3c2545926c))
* stop using custom theme ([da9a6a5](https://github.com/origin-coding/Alacrity/commit/da9a6a55b33b39294d7abdfba9e891ec2fab2b5d))
* stop using ElementPlus, introduce TDesign ([f3179df](https://github.com/origin-coding/Alacrity/commit/f3179df3a9a57b5951dcfc92ac95bdf0c4f2b8b3))
* upgrade ESLint, introduce UnoCSS ([7c62aae](https://github.com/origin-coding/Alacrity/commit/7c62aae0e245754531a48c0a1c7374ddc5e26bd4))
* use UnoCSS's style ([ca3c2d6](https://github.com/origin-coding/Alacrity/commit/ca3c2d6ce3c1a5185fdb23697c421363efe45fe4))


### Bug Fixes

* fix bugs caused by Tauri and Nuxt, introduce @pinia/nuxt ([3278fb4](https://github.com/origin-coding/Alacrity/commit/3278fb4cb9a76d309f27563379d19799a0bbc65e))

## [1.7.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.6.0...alacrity-v1.7.0) (2024-01-07)


### Features

* **i18n:** user can search plugin with multiple languages ([84d87fb](https://github.com/origin-coding/Alacrity/commit/84d87fb22ef45d943453f7c510746a4031e29395))
* **i18n:** user can search plugin with mutiple languages ([0caa4da](https://github.com/origin-coding/Alacrity/commit/0caa4daf20f1187a487758b7be9531a43b9ffac5))
* **plugin:** add plugin AddLineNumber, for adding line numbers to text ([aabd85b](https://github.com/origin-coding/Alacrity/commit/aabd85b6003ca507e06462d060ca29cd5a71cd6f))
* **plugin:** add plugin IpGenerator, for generating random IP addresses ([63d23ff](https://github.com/origin-coding/Alacrity/commit/63d23ff12f29f9cfddfd605872662eb0a407caf8))
* **plugin:** add plugin RandomNumber, for generating random numbers ([93c2866](https://github.com/origin-coding/Alacrity/commit/93c28669868aed04dc217723d559e3ad94f3bda9))
* **plugin:** add plugin RsaKeyGen, for generating RSA key pairs ([3dfa8a2](https://github.com/origin-coding/Alacrity/commit/3dfa8a2473cca161c6e9d44e8f5cbd77bca06aa6))


### Bug Fixes

* **i18n:** add missing i18n message ([8a20f49](https://github.com/origin-coding/Alacrity/commit/8a20f4960452cd46b91f471ac065b26d6da08e4b))

## [1.6.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.5.0...alacrity-v1.6.0) (2023-12-28)


### Features

* **plugin:** add plugin MacGenerator, for generating random Mac addresses ([5fcabb2](https://github.com/origin-coding/Alacrity/commit/5fcabb2db1c2cca682e4a4057637ea401d064c02))
* **theme:** change theme color using catppuccin ([054790f](https://github.com/origin-coding/Alacrity/commit/054790f179537a0c6bd6d3e9a2cf9a16e9f4d08b))
* **theme:** make side bar and navigation bar rounded ([4f01d1e](https://github.com/origin-coding/Alacrity/commit/4f01d1efdc965d13be149799c79cc548b6503626))


### Bug Fixes

* **display:** fix "With Title" option's display error in English locale ([46482ab](https://github.com/origin-coding/Alacrity/commit/46482ab0c050bd461d791795ba7ea61defa34600))

## [1.5.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.4.0...alacrity-v1.5.0) (2023-12-24)


### Features

* **icon:** customize icon to replace tauri's icon ([c942a52](https://github.com/origin-coding/Alacrity/commit/c942a52f1f5567f7ad61515c4c67f189c45a8a09))

## [1.4.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.3.0...alacrity-v1.4.0) (2023-12-18)


### Features

* **plugin:** add plugin CaseConverter, for converting text cases ([3bbe5d6](https://github.com/origin-coding/Alacrity/commit/3bbe5d68848c28c53f2974243fe2ffddff21009c))


### Bug Fixes

* **i18n:** fix missing/wrong i18n messages ([32e9b20](https://github.com/origin-coding/Alacrity/commit/32e9b20ce645ff8fc311f996443612ee0f3ec114))

## [1.3.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.2.0...alacrity-v1.3.0) (2023-12-11)


### Features

* add new build options ([dcb0b38](https://github.com/origin-coding/Alacrity/commit/dcb0b3819080ec7a401a00ff1f2fb6121ef7fec0))
* **i18n:** plugin LoremIpsum's information now supports i18n ([85cd5cf](https://github.com/origin-coding/Alacrity/commit/85cd5cfdf0c2df9af6af9a4dcdd78388630646da))
* initial commit ([fae9230](https://github.com/origin-coding/Alacrity/commit/fae9230f9458cf82a867b97af0c398d0af3bb40b))
* **plugin:** add new plugin CssUnit, listing common used CSS length units ([1fed356](https://github.com/origin-coding/Alacrity/commit/1fed3566b72b6de9459726c244e52933f2c35084))
* **plugin:** add new plugin JsCompress ([cb3e40c](https://github.com/origin-coding/Alacrity/commit/cb3e40c93054396922475ee72dce25a768fe9225))
* **plugin:** add new plugin: LoremIpsum, for generating random text ([9132c63](https://github.com/origin-coding/Alacrity/commit/9132c63b1f8ba2d60c14771b718cc4cf393f0db1))
* update workflow ([6f35a7a](https://github.com/origin-coding/Alacrity/commit/6f35a7ab5b7b7cff1fb89a1b2af70ea5d2984c5a))
* update workflow ([61ad3bd](https://github.com/origin-coding/Alacrity/commit/61ad3bd5b87a75bfc3cc5d2e1872c380763150a2))
* update workflow ([b65091b](https://github.com/origin-coding/Alacrity/commit/b65091bfd992e80e9a4f96c380f860f5d8ea766b))


### Bug Fixes

* fix build options ([3b9b986](https://github.com/origin-coding/Alacrity/commit/3b9b98621ff03ceb209f74f1ee5289fde251ba43))
* fix build options ([bd7569d](https://github.com/origin-coding/Alacrity/commit/bd7569d660ed79799932dc21987d7b455043b0de))
* fix build options ([0f06fc2](https://github.com/origin-coding/Alacrity/commit/0f06fc2b4fd3fcbbd28629ea19bd76079fa36f43))
* fix build options ([bfb0633](https://github.com/origin-coding/Alacrity/commit/bfb06331bc6829c727e3273ba745a9438ab2151c))
* fix build options ([073421f](https://github.com/origin-coding/Alacrity/commit/073421f882f4ea2f46ebc4456a3196c3f90e056e))
* fix GitHub actions workflow ([73dd90a](https://github.com/origin-coding/Alacrity/commit/73dd90af6b58587066bdfff6e55b9671af7388da))
* fix GitHub actions workflow ([85b1207](https://github.com/origin-coding/Alacrity/commit/85b120742de690da7ef7eda4ba03983d1930d6f4))
* fix GitHub actions workflow ([69795dd](https://github.com/origin-coding/Alacrity/commit/69795dd6bc28999ca5521c1c81e7361ff82778ca))
* fix GitHub actions workflow ([09ac4c5](https://github.com/origin-coding/Alacrity/commit/09ac4c5d241f5134a68c5571979e3f744502e9b9))
* fix GitHub actions workflow ([1a2c022](https://github.com/origin-coding/Alacrity/commit/1a2c022c370f45717062f5dbf3445b4cf0567377))
* fix GitHub actions workflow ([d53ef1f](https://github.com/origin-coding/Alacrity/commit/d53ef1f1b8369014e20575dd014aae7139d01080))
* fix GitHub actions workflow ([7439725](https://github.com/origin-coding/Alacrity/commit/7439725c68a4baab6741c4bd5a6daf87a6089529))
* fix GitHub actions workflow ([cd6f63d](https://github.com/origin-coding/Alacrity/commit/cd6f63da8778fef5df40ea1494a34dadd5d1fd81))
* fix GitHub actions workflow ([0fdd49f](https://github.com/origin-coding/Alacrity/commit/0fdd49fc0543eec6712021b9de383a5c34d87d19))
* fix GitHub actions workflow ([d05697a](https://github.com/origin-coding/Alacrity/commit/d05697a04cedd6949e274160948e46dc5a0b74b5))
* fix release-please config error ([db14006](https://github.com/origin-coding/Alacrity/commit/db140064d31ed4063aa8efaa96df4b9aa2e1b2ba))
* **release:** fix release-please config options ([cbe261f](https://github.com/origin-coding/Alacrity/commit/cbe261f674d0bc29aac3f58c3e8341f6db0f0709))
* update GitHub actions workflow ([e13675f](https://github.com/origin-coding/Alacrity/commit/e13675fe71ba8d44cfa50f447a22822fbc59722e))
* update GitHub actions workflow ([1c1bee2](https://github.com/origin-coding/Alacrity/commit/1c1bee2a1c67eed7f7636c2f3835f2cccfed44d5))
* update GitHub actions workflow ([b9477e4](https://github.com/origin-coding/Alacrity/commit/b9477e4e224b70c9e4a90cfc013d1c8aa79aab54))
* update GitHub actions workflow ([f229198](https://github.com/origin-coding/Alacrity/commit/f22919898562898c7791254912cd98b12b218427))
* update GitHub actions workflow ([fc07745](https://github.com/origin-coding/Alacrity/commit/fc077458681f77d14d188bd75b704524f09795f5))
* update GitHub actions workflow ([e181470](https://github.com/origin-coding/Alacrity/commit/e1814706d003b37288385825d98775b71e3a3abf))
* update GitHub actions workflow ([bcfb1f9](https://github.com/origin-coding/Alacrity/commit/bcfb1f9564a609a168e9f73b2e4f6f44885073fa))
* update GitHub actions workflow ([cd36bc8](https://github.com/origin-coding/Alacrity/commit/cd36bc819a28b5b275b1c455fd183ee9e1ad1bc1))

## [1.2.0](https://github.com/origin-coding/Alacrity/compare/v1.1.15...v1.2.0) (2023-11-27)


### Features

* **plugin:** add new plugin CssUnit, listing common used CSS length units ([1fed356](https://github.com/origin-coding/Alacrity/commit/1fed3566b72b6de9459726c244e52933f2c35084))
* **plugin:** add new plugin JsCompress ([cb3e40c](https://github.com/origin-coding/Alacrity/commit/cb3e40c93054396922475ee72dce25a768fe9225))


### Bug Fixes

* fix build options ([3b9b986](https://github.com/origin-coding/Alacrity/commit/3b9b98621ff03ceb209f74f1ee5289fde251ba43))
* fix release-please config error ([db14006](https://github.com/origin-coding/Alacrity/commit/db140064d31ed4063aa8efaa96df4b9aa2e1b2ba))

## [1.1.15](https://github.com/origin-coding/Alacrity/compare/v1.1.14...v1.1.15) (2023-11-22)


### Bug Fixes

* fix build options ([bd7569d](https://github.com/origin-coding/Alacrity/commit/bd7569d660ed79799932dc21987d7b455043b0de))
* fix build options ([0f06fc2](https://github.com/origin-coding/Alacrity/commit/0f06fc2b4fd3fcbbd28629ea19bd76079fa36f43))
* fix build options ([bfb0633](https://github.com/origin-coding/Alacrity/commit/bfb06331bc6829c727e3273ba745a9438ab2151c))
* fix build options ([073421f](https://github.com/origin-coding/Alacrity/commit/073421f882f4ea2f46ebc4456a3196c3f90e056e))

## [1.1.14](https://github.com/origin-coding/Alacrity/compare/v1.1.13...v1.1.14) (2023-11-22)


### Bug Fixes

* fix GitHub actions workflow ([73dd90a](https://github.com/origin-coding/Alacrity/commit/73dd90af6b58587066bdfff6e55b9671af7388da))

## [1.1.13](https://github.com/origin-coding/Alacrity/compare/v1.1.12...v1.1.13) (2023-11-22)


### Bug Fixes

* update GitHub actions workflow ([e13675f](https://github.com/origin-coding/Alacrity/commit/e13675fe71ba8d44cfa50f447a22822fbc59722e))

## [1.1.12](https://github.com/origin-coding/Alacrity/compare/v1.1.11...v1.1.12) (2023-11-21)


### Bug Fixes

* update GitHub actions workflow ([1c1bee2](https://github.com/origin-coding/Alacrity/commit/1c1bee2a1c67eed7f7636c2f3835f2cccfed44d5))

## [1.1.11](https://github.com/origin-coding/Alacrity/compare/v1.1.10...v1.1.11) (2023-11-21)


### Bug Fixes

* update GitHub actions workflow ([b9477e4](https://github.com/origin-coding/Alacrity/commit/b9477e4e224b70c9e4a90cfc013d1c8aa79aab54))

## [1.1.10](https://github.com/origin-coding/Alacrity/compare/v1.1.9...v1.1.10) (2023-11-21)


### Bug Fixes

* fix GitHub actions workflow ([85b1207](https://github.com/origin-coding/Alacrity/commit/85b120742de690da7ef7eda4ba03983d1930d6f4))

## [1.1.9](https://github.com/origin-coding/Alacrity/compare/v1.1.8...v1.1.9) (2023-11-21)


### Bug Fixes

* fix GitHub actions workflow ([69795dd](https://github.com/origin-coding/Alacrity/commit/69795dd6bc28999ca5521c1c81e7361ff82778ca))

## [1.1.8](https://github.com/origin-coding/Alacrity/compare/v1.1.7...v1.1.8) (2023-11-21)


### Bug Fixes

* fix GitHub actions workflow ([09ac4c5](https://github.com/origin-coding/Alacrity/commit/09ac4c5d241f5134a68c5571979e3f744502e9b9))

## [1.1.7](https://github.com/origin-coding/Alacrity/compare/v1.1.6...v1.1.7) (2023-11-21)


### Bug Fixes

* fix GitHub actions workflow ([1a2c022](https://github.com/origin-coding/Alacrity/commit/1a2c022c370f45717062f5dbf3445b4cf0567377))

## [1.1.6](https://github.com/origin-coding/Alacrity/compare/v1.1.5...v1.1.6) (2023-11-21)


### Bug Fixes

* fix GitHub actions workflow ([d53ef1f](https://github.com/origin-coding/Alacrity/commit/d53ef1f1b8369014e20575dd014aae7139d01080))

## [1.1.5](https://github.com/origin-coding/Alacrity/compare/v1.1.4...v1.1.5) (2023-11-21)


### Bug Fixes

* fix GitHub actions workflow ([7439725](https://github.com/origin-coding/Alacrity/commit/7439725c68a4baab6741c4bd5a6daf87a6089529))

## [1.1.4](https://github.com/origin-coding/Alacrity/compare/v1.1.3...v1.1.4) (2023-11-21)


### Bug Fixes

* fix GitHub actions workflow ([cd6f63d](https://github.com/origin-coding/Alacrity/commit/cd6f63da8778fef5df40ea1494a34dadd5d1fd81))

## [1.1.3](https://github.com/origin-coding/Alacrity/compare/v1.1.2...v1.1.3) (2023-11-21)


### Bug Fixes

* update GitHub actions workflow ([f229198](https://github.com/origin-coding/Alacrity/commit/f22919898562898c7791254912cd98b12b218427))

## [1.1.2](https://github.com/origin-coding/Alacrity/compare/v1.1.1...v1.1.2) (2023-11-21)


### Bug Fixes

* fix GitHub actions workflow ([0fdd49f](https://github.com/origin-coding/Alacrity/commit/0fdd49fc0543eec6712021b9de383a5c34d87d19))
* update GitHub actions workflow ([fc07745](https://github.com/origin-coding/Alacrity/commit/fc077458681f77d14d188bd75b704524f09795f5))
* update GitHub actions workflow ([e181470](https://github.com/origin-coding/Alacrity/commit/e1814706d003b37288385825d98775b71e3a3abf))

## [1.1.1](https://github.com/origin-coding/Alacrity/compare/v1.1.0...v1.1.1) (2023-11-21)


### Bug Fixes

* fix GitHub actions workflow ([d05697a](https://github.com/origin-coding/Alacrity/commit/d05697a04cedd6949e274160948e46dc5a0b74b5))
* update GitHub actions workflow ([bcfb1f9](https://github.com/origin-coding/Alacrity/commit/bcfb1f9564a609a168e9f73b2e4f6f44885073fa))
* update GitHub actions workflow ([cd36bc8](https://github.com/origin-coding/Alacrity/commit/cd36bc819a28b5b275b1c455fd183ee9e1ad1bc1))

## [1.1.0](https://github.com/origin-coding/Alacrity/compare/v1.0.0...v1.1.0) (2023-11-21)


### Features

* update workflow ([6f35a7a](https://github.com/origin-coding/Alacrity/commit/6f35a7ab5b7b7cff1fb89a1b2af70ea5d2984c5a))

## 1.0.0 (2023-11-21)


### Features

* add new build options ([dcb0b38](https://github.com/origin-coding/Alacrity/commit/dcb0b3819080ec7a401a00ff1f2fb6121ef7fec0))
* initial commit ([fae9230](https://github.com/origin-coding/Alacrity/commit/fae9230f9458cf82a867b97af0c398d0af3bb40b))
* update workflow ([61ad3bd](https://github.com/origin-coding/Alacrity/commit/61ad3bd5b87a75bfc3cc5d2e1872c380763150a2))
* update workflow ([b65091b](https://github.com/origin-coding/Alacrity/commit/b65091bfd992e80e9a4f96c380f860f5d8ea766b))
