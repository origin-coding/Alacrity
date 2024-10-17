# Changelog

## [2.8.2](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.8.1...alacrity-v2.8.2) (2024-10-17)

### Bug Fixes

- prevent showing introduction guide after first guide ([59d9759](https://github.com/origin-coding/Alacrity/commit/59d9759a0fd2b362ff4a03a46c4aae4d09fa223d))

## [2.8.1](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.8.0...alacrity-v2.8.1) (2024-09-18)

### Bug Fixes

- fix theme error ([fed06b0](https://github.com/origin-coding/Alacrity/commit/fed06b0604be6b00b866855ab979444f488499aa))

## [2.8.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.7.0...alacrity-v2.8.0) (2024-09-11)

### Features

- add auto focus on input element ([b231935](https://github.com/origin-coding/Alacrity/commit/b23193570732847259410cd5eb837ea265eefbe3))
- add configuration for collapsing side menu ([44d9fdb](https://github.com/origin-coding/Alacrity/commit/44d9fdbceb75319984df990898eee6ca6660ecca))
- add default value for locale config ([ed1caec](https://github.com/origin-coding/Alacrity/commit/ed1caec8da9cec4612d4e6c9bb3d5becec960ad3))
- add introduction guide for Alacrity ([b93603f](https://github.com/origin-coding/Alacrity/commit/b93603f25742a6f32c1b69c2feec3d4768e05b5f))
- add shortcut for searching plugins ([d896a55](https://github.com/origin-coding/Alacrity/commit/d896a550fedd86bd5875edbf687ac00e1f10af7d))
- change side menu's layout and function ([28e8ec0](https://github.com/origin-coding/Alacrity/commit/28e8ec093ff55c49d96d56753b469325272b3ae2))
- remove disabled plugin config ([85877cc](https://github.com/origin-coding/Alacrity/commit/85877cc4b46235bc9ce914b467d27f6df1224ef4))

### Bug Fixes

- fix bug with shows empty favorite list ([ce50a3d](https://github.com/origin-coding/Alacrity/commit/ce50a3d1e2b66b315e8154e699f79eec9afc98d2))
- fix incorrect content style ([0c288b7](https://github.com/origin-coding/Alacrity/commit/0c288b7e242a8a5c053b8df3257cb81b1fdc5881))
- fix incorrect TDesign's theme initialization ([81a0862](https://github.com/origin-coding/Alacrity/commit/81a0862c77b60dd29ee1afbcbfbf8cfd6eed14c2))
- fix incorrect theme then config is set to "system" ([2ffeae7](https://github.com/origin-coding/Alacrity/commit/2ffeae736f37276aca4ad274cb5a2203f010a0c0))
- fix repeated guides after skipping or finishing guide ([29c1d33](https://github.com/origin-coding/Alacrity/commit/29c1d33f27aae3495e89d531cf931ed7c4da6b06))
- fix wrong color mode after initial startup ([c4bf98f](https://github.com/origin-coding/Alacrity/commit/c4bf98fe29030ed83483c6df759361f0045b93c0))
- force menu's collapsed width to 64px ([bba1b7f](https://github.com/origin-coding/Alacrity/commit/bba1b7fb39cbdd3ce49664ee4b743329cdf774a1))
- patch for TDesign's bug ([bddf9ab](https://github.com/origin-coding/Alacrity/commit/bddf9ab6f00b81076bd381c3dd5ecc11ef3b937e))

## [2.7.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.6.0...alacrity-v2.7.0) (2024-08-17)

### Features

- add default value for namespace; widen option.namespace's input ([dd0cc9d](https://github.com/origin-coding/Alacrity/commit/dd0cc9d3f81801f84a8ac365bc8233a45933ca3c))
- add new plugin type: converters ([723b18a](https://github.com/origin-coding/Alacrity/commit/723b18a3da79c3cfc5497115c90bbe0045f858f4))
- introduce plugin case-converter ([b7ade06](https://github.com/origin-coding/Alacrity/commit/b7ade061cb824d7366ea4772c4b2e24f64401ff5))
- introduce plugin url-parser ([bb26f44](https://github.com/origin-coding/Alacrity/commit/bb26f44ca1919740e06d877d3f3c4b12c295d85b))

### Bug Fixes

- fix error when trying to fix a previous bug of TDesign's textarea ([c505e4a](https://github.com/origin-coding/Alacrity/commit/c505e4a85547d897c1155c4619135ee0de43fa75))
- fix lagging when generating QR Code ([31426c4](https://github.com/origin-coding/Alacrity/commit/31426c4cbda305e0d6fbc5fffda1caf69edab666))
- fix wrong search result ([4d5b098](https://github.com/origin-coding/Alacrity/commit/4d5b098dfd0ab431a4364924d189319ce838abf0))
- patch for TDesign's bug ([f8f5c9f](https://github.com/origin-coding/Alacrity/commit/f8f5c9f94d2a3c356ca155352a9662783c1335d6))

## [2.6.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.5.2...alacrity-v2.6.0) (2024-08-11)

### Features

- add hint content when there is no plugin found ([1494e8a](https://github.com/origin-coding/Alacrity/commit/1494e8a570891bc31513e359c44b4e538f3a5379))
- add plugin qrcode-generator ([4972800](https://github.com/origin-coding/Alacrity/commit/497280004b16bee5022baf183dffbd1838e6773c))

### Bug Fixes

- fix incorrect language in README_en.md ([c522a1c](https://github.com/origin-coding/Alacrity/commit/c522a1cad0370a88f13ad6472ede4f3d767ab883))
- fix locale error when refreshing page, and users can now refresh in production mode ([4b4bcfc](https://github.com/origin-coding/Alacrity/commit/4b4bcfc6dc28cc75cc6048e7f701c2361142345d))
- fix wrong layout for V3/V5 options ([1f16a85](https://github.com/origin-coding/Alacrity/commit/1f16a853d4d80ee8089f7b2007a9f44cb6c36a71))

## [2.5.2](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.5.1...alacrity-v2.5.2) (2024-07-28)

### Bug Fixes

- add divider between option cards ([73db539](https://github.com/origin-coding/Alacrity/commit/73db5396ffefafeb7883841868af825f2fc430f9))
- add responsive layout to plugin card list ([c9991d3](https://github.com/origin-coding/Alacrity/commit/c9991d3b7a1a93ebe859c2d3db8d7efeab5ab314))
- improve page layout for settings ([baf072f](https://github.com/origin-coding/Alacrity/commit/baf072fb967a8ca2d06d113a7710b2767ba145fe))

## [2.5.1](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.5.0...alacrity-v2.5.1) (2024-07-26)

### Bug Fixes

- fix losing pagination information after building ([3c1fceb](https://github.com/origin-coding/Alacrity/commit/3c1fceb7d7dfea6e436fa87f79060c1c24b3b0f5))

## [2.5.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.4.0...alacrity-v2.5.0) (2024-07-26)

### Features

- add plugin password-strength ([4a9490d](https://github.com/origin-coding/Alacrity/commit/4a9490d9e57916c1a40fd14faee65eb2b3ac07f8))
- add plugin uuid-validator ([43db7d8](https://github.com/origin-coding/Alacrity/commit/43db7d813ca291fbadd07fb044da859096a3e59e))
- add tooltip for plugin card's options ([f99eaf2](https://github.com/origin-coding/Alacrity/commit/f99eaf26908bf6ac66e70b4dea25c98d1b32b77e))

## [2.4.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.3.0...alacrity-v2.4.0) (2024-07-16)

### Features

- add hyphen and uppercase options to uuid-generator; refactor code, move callback to return value ([141b611](https://github.com/origin-coding/Alacrity/commit/141b611944618ed39990ce4d71e5657e2ebbc38e))
- add plugin http-status-code ([bdbcfa0](https://github.com/origin-coding/Alacrity/commit/bdbcfa0320e51702fc3702bc80fc42310d18419b))

## [2.3.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.2.0...alacrity-v2.3.0) (2024-07-13)

### Features

- add new system theme preference ([178e723](https://github.com/origin-coding/Alacrity/commit/178e723fb3e86ae54765874627266b86f2359557))
- add plugin git-cheat-sheet ([794b1ba](https://github.com/origin-coding/Alacrity/commit/794b1ba804836c354e0cea473fc25757565afcdd))
- write new plugin uuid-generator ([38dd7c3](https://github.com/origin-coding/Alacrity/commit/38dd7c3f63cd1caf2c4e9eebf198e02a85f175f2))

### Bug Fixes

- fix 404 Not Found when generating static contents ([e935535](https://github.com/origin-coding/Alacrity/commit/e935535647382b01b711465c064b92c2d0ecc2bc))

## [2.2.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.1.0...alacrity-v2.2.0) (2024-06-24)

### Features

- add i18n message for new group web ([ffb02e1](https://github.com/origin-coding/Alacrity/commit/ffb02e141a8172ba2ec41fd15febd5fe01517d6b))
- implement plugin hash-file ([fd5bd17](https://github.com/origin-coding/Alacrity/commit/fd5bd172c1340d5a44aebbec3ed8fa84ad90627b))
- implement plugin hash-text ([6a7b8f2](https://github.com/origin-coding/Alacrity/commit/6a7b8f2f8459c45a85c8aa029a440cebf4ca5f42))
- implement plugin local-websocket-client ([b95ebc9](https://github.com/origin-coding/Alacrity/commit/b95ebc9a47e5b752782e12c76ffda961d2dea628))
- use icon components to avoid network request ([6b8c16a](https://github.com/origin-coding/Alacrity/commit/6b8c16a79003b7e98c44ce8b3c5865f64f3636c8))

## [2.1.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v2.0.0...alacrity-v2.1.0) (2024-06-03)

### Features

- add components for page layout and plugins ([0f4650e](https://github.com/origin-coding/Alacrity/commit/0f4650e83a25ed9648f4518071b712814c87b3e7))
- add default values to config ([071245e](https://github.com/origin-coding/Alacrity/commit/071245e7619f67d89ee7e84958d1071c22219471))
- add i18n messages for Alacrity's config ([31080a9](https://github.com/origin-coding/Alacrity/commit/31080a9a5fb84e788766727e75d5987d39856bb7))
- add menu item for favorite and disabled plugins ([df6fd86](https://github.com/origin-coding/Alacrity/commit/df6fd8645d4e0410f3b425e898a938fc9eff8a16))
- add page for default, favorite and disabled plugins ([d2e1112](https://github.com/origin-coding/Alacrity/commit/d2e1112c023c61f971e1a30f41ad118dfad3e288))
- add settings page ([78198ea](https://github.com/origin-coding/Alacrity/commit/78198ea5a45d5183dc3dbee00863aa1b2a540d9a))
- add util ([2f11e67](https://github.com/origin-coding/Alacrity/commit/2f11e67ca57ba9631015c857708d5e805f561e61))
- change base64-encode-decode plugin's English name ([2a65af8](https://github.com/origin-coding/Alacrity/commit/2a65af85305c2c77c11c5dee34a34d012758ed88))
- clean up code, re-design Alacrity's config file ([140417c](https://github.com/origin-coding/Alacrity/commit/140417ca467e13fb685ce250f1d2e4a819bf039f))
- hide scrollbar ([36df533](https://github.com/origin-coding/Alacrity/commit/36df5339345cc567535c818f58582481431a6b67))
- implement plugin base64-encode-decode ([2c0cdff](https://github.com/origin-coding/Alacrity/commit/2c0cdffbbf1ad16c212404d0885e34eaa1119d00))
- introduce i18n for TDesign components; init theme on app startup ([39fa2c3](https://github.com/origin-coding/Alacrity/commit/39fa2c3d2348528cf9241367dcf47e9d74712bb0))
- remove redundant fields ([04ec011](https://github.com/origin-coding/Alacrity/commit/04ec0114b4b510a1e6c879e1ad1fa46532e05eca))
- remove redundant fields ([7e7bc2a](https://github.com/origin-coding/Alacrity/commit/7e7bc2affa79066151709f811f6f83e468220941))
- split config files to avoid coupling ([bd5445f](https://github.com/origin-coding/Alacrity/commit/bd5445fa32d64d7ef2c5720a1c3be9d679a040ad))
- **style:** add global stylesheet ([fd5588c](https://github.com/origin-coding/Alacrity/commit/fd5588c43f25d4d3e1833133528c43c2e29682b5))

### Bug Fixes

- fix config file's path ([228c23f](https://github.com/origin-coding/Alacrity/commit/228c23f05e3168c81b2df9a31d04c2082bad784f))
- fix mismatch route url after generating static site ([84357b6](https://github.com/origin-coding/Alacrity/commit/84357b63b5a61502e095f76cb2842d32a9beb90c))
- fix TDesign's i18n messages doesn't change on setup ([3cc6ec0](https://github.com/origin-coding/Alacrity/commit/3cc6ec05e9b8977f8eab356381433d8acc0f9322))
- prevent refreshing in production to avoid TConfigProvider's missing message ([20ef2a7](https://github.com/origin-coding/Alacrity/commit/20ef2a7bbeadae886858dc5460bc3c02234ab077))

## [2.0.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.7.0...alacrity-v2.0.0) (2024-05-15)

### ⚠ BREAKING CHANGES

- **Alacrity:** 3. Introduce Nuxt for routing, plugin and auto-imports.

### Features

- add i18n config ([6f29026](https://github.com/origin-coding/Alacrity/commit/6f29026b01ca2390d197310a8e9f3bed142deb51))
- add i18n messages ([648f3a9](https://github.com/origin-coding/Alacrity/commit/648f3a9e8cb7f5ab08a9cacf6d6e98d766e90263))
- add stores for plugin, config and searching ([3a6248e](https://github.com/origin-coding/Alacrity/commit/3a6248ef77bb7768d1f6b41099a7269354aa0b06))
- add type definitions ([4f70329](https://github.com/origin-coding/Alacrity/commit/4f70329c5d3a28893891f34d1fbc2a9c7382fd3b))
- add util functions ([5932717](https://github.com/origin-coding/Alacrity/commit/59327173739dca922fbe0a0a95efeb2fb53c8d90))
- **Alacrity:** create first plugin and upgrade Alacrity ([95b99fe](https://github.com/origin-coding/Alacrity/commit/95b99fe11f26b99e6ac8911f4eee4d83f5b3f92e))
- implement application layout ([92a3a82](https://github.com/origin-coding/Alacrity/commit/92a3a82f6ff9a7edda0a81593d57afba83519526))
- introduce Element Plus ([905fe89](https://github.com/origin-coding/Alacrity/commit/905fe896c76ff4ee5d6b4d0d8bcb8b2c360db920))
- introduce eslint and prettier ([b215e56](https://github.com/origin-coding/Alacrity/commit/b215e56b4895fc7ba05b832cb4f4a8fc528df299))
- migrate to nuxt ([e056bc4](https://github.com/origin-coding/Alacrity/commit/e056bc4f99e356246f08e81121e5d352985aa88c))
- re-introduce vue-i18n ([3e9c7f6](https://github.com/origin-coding/Alacrity/commit/3e9c7f6c69e62bc170670b1352986d3c2545926c))
- stop using custom theme ([da9a6a5](https://github.com/origin-coding/Alacrity/commit/da9a6a55b33b39294d7abdfba9e891ec2fab2b5d))
- stop using ElementPlus, introduce TDesign ([f3179df](https://github.com/origin-coding/Alacrity/commit/f3179df3a9a57b5951dcfc92ac95bdf0c4f2b8b3))
- upgrade ESLint, introduce UnoCSS ([7c62aae](https://github.com/origin-coding/Alacrity/commit/7c62aae0e245754531a48c0a1c7374ddc5e26bd4))
- use UnoCSS's style ([ca3c2d6](https://github.com/origin-coding/Alacrity/commit/ca3c2d6ce3c1a5185fdb23697c421363efe45fe4))

### Bug Fixes

- fix bugs caused by Tauri and Nuxt, introduce @pinia/nuxt ([3278fb4](https://github.com/origin-coding/Alacrity/commit/3278fb4cb9a76d309f27563379d19799a0bbc65e))

## [1.7.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.6.0...alacrity-v1.7.0) (2024-01-07)

### Features

- **i18n:** user can search plugin with multiple languages ([84d87fb](https://github.com/origin-coding/Alacrity/commit/84d87fb22ef45d943453f7c510746a4031e29395))
- **i18n:** user can search plugin with mutiple languages ([0caa4da](https://github.com/origin-coding/Alacrity/commit/0caa4daf20f1187a487758b7be9531a43b9ffac5))
- **plugin:** add plugin AddLineNumber, for adding line numbers to text ([aabd85b](https://github.com/origin-coding/Alacrity/commit/aabd85b6003ca507e06462d060ca29cd5a71cd6f))
- **plugin:** add plugin IpGenerator, for generating random IP addresses ([63d23ff](https://github.com/origin-coding/Alacrity/commit/63d23ff12f29f9cfddfd605872662eb0a407caf8))
- **plugin:** add plugin RandomNumber, for generating random numbers ([93c2866](https://github.com/origin-coding/Alacrity/commit/93c28669868aed04dc217723d559e3ad94f3bda9))
- **plugin:** add plugin RsaKeyGen, for generating RSA key pairs ([3dfa8a2](https://github.com/origin-coding/Alacrity/commit/3dfa8a2473cca161c6e9d44e8f5cbd77bca06aa6))

### Bug Fixes

- **i18n:** add missing i18n message ([8a20f49](https://github.com/origin-coding/Alacrity/commit/8a20f4960452cd46b91f471ac065b26d6da08e4b))

## [1.6.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.5.0...alacrity-v1.6.0) (2023-12-28)

### Features

- **plugin:** add plugin MacGenerator, for generating random Mac addresses ([5fcabb2](https://github.com/origin-coding/Alacrity/commit/5fcabb2db1c2cca682e4a4057637ea401d064c02))
- **theme:** change theme color using catppuccin ([054790f](https://github.com/origin-coding/Alacrity/commit/054790f179537a0c6bd6d3e9a2cf9a16e9f4d08b))
- **theme:** make side bar and navigation bar rounded ([4f01d1e](https://github.com/origin-coding/Alacrity/commit/4f01d1efdc965d13be149799c79cc548b6503626))

### Bug Fixes

- **display:** fix "With Title" option's display error in English locale ([46482ab](https://github.com/origin-coding/Alacrity/commit/46482ab0c050bd461d791795ba7ea61defa34600))

## [1.5.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.4.0...alacrity-v1.5.0) (2023-12-24)

### Features

- **icon:** customize icon to replace tauri's icon ([c942a52](https://github.com/origin-coding/Alacrity/commit/c942a52f1f5567f7ad61515c4c67f189c45a8a09))

## [1.4.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.3.0...alacrity-v1.4.0) (2023-12-18)

### Features

- **plugin:** add plugin CaseConverter, for converting text cases ([3bbe5d6](https://github.com/origin-coding/Alacrity/commit/3bbe5d68848c28c53f2974243fe2ffddff21009c))

### Bug Fixes

- **i18n:** fix missing/wrong i18n messages ([32e9b20](https://github.com/origin-coding/Alacrity/commit/32e9b20ce645ff8fc311f996443612ee0f3ec114))

## [1.3.0](https://github.com/origin-coding/Alacrity/compare/alacrity-v1.2.0...alacrity-v1.3.0) (2023-12-11)

### Features

- add new build options ([dcb0b38](https://github.com/origin-coding/Alacrity/commit/dcb0b3819080ec7a401a00ff1f2fb6121ef7fec0))
- **i18n:** plugin LoremIpsum's information now supports i18n ([85cd5cf](https://github.com/origin-coding/Alacrity/commit/85cd5cfdf0c2df9af6af9a4dcdd78388630646da))
- initial commit ([fae9230](https://github.com/origin-coding/Alacrity/commit/fae9230f9458cf82a867b97af0c398d0af3bb40b))
- **plugin:** add new plugin CssUnit, listing common used CSS length units ([1fed356](https://github.com/origin-coding/Alacrity/commit/1fed3566b72b6de9459726c244e52933f2c35084))
- **plugin:** add new plugin JsCompress ([cb3e40c](https://github.com/origin-coding/Alacrity/commit/cb3e40c93054396922475ee72dce25a768fe9225))
- **plugin:** add new plugin: LoremIpsum, for generating random text ([9132c63](https://github.com/origin-coding/Alacrity/commit/9132c63b1f8ba2d60c14771b718cc4cf393f0db1))
- update workflow ([6f35a7a](https://github.com/origin-coding/Alacrity/commit/6f35a7ab5b7b7cff1fb89a1b2af70ea5d2984c5a))
- update workflow ([61ad3bd](https://github.com/origin-coding/Alacrity/commit/61ad3bd5b87a75bfc3cc5d2e1872c380763150a2))
- update workflow ([b65091b](https://github.com/origin-coding/Alacrity/commit/b65091bfd992e80e9a4f96c380f860f5d8ea766b))

### Bug Fixes

- fix build options ([3b9b986](https://github.com/origin-coding/Alacrity/commit/3b9b98621ff03ceb209f74f1ee5289fde251ba43))
- fix build options ([bd7569d](https://github.com/origin-coding/Alacrity/commit/bd7569d660ed79799932dc21987d7b455043b0de))
- fix build options ([0f06fc2](https://github.com/origin-coding/Alacrity/commit/0f06fc2b4fd3fcbbd28629ea19bd76079fa36f43))
- fix build options ([bfb0633](https://github.com/origin-coding/Alacrity/commit/bfb06331bc6829c727e3273ba745a9438ab2151c))
- fix build options ([073421f](https://github.com/origin-coding/Alacrity/commit/073421f882f4ea2f46ebc4456a3196c3f90e056e))
- fix GitHub actions workflow ([73dd90a](https://github.com/origin-coding/Alacrity/commit/73dd90af6b58587066bdfff6e55b9671af7388da))
- fix GitHub actions workflow ([85b1207](https://github.com/origin-coding/Alacrity/commit/85b120742de690da7ef7eda4ba03983d1930d6f4))
- fix GitHub actions workflow ([69795dd](https://github.com/origin-coding/Alacrity/commit/69795dd6bc28999ca5521c1c81e7361ff82778ca))
- fix GitHub actions workflow ([09ac4c5](https://github.com/origin-coding/Alacrity/commit/09ac4c5d241f5134a68c5571979e3f744502e9b9))
- fix GitHub actions workflow ([1a2c022](https://github.com/origin-coding/Alacrity/commit/1a2c022c370f45717062f5dbf3445b4cf0567377))
- fix GitHub actions workflow ([d53ef1f](https://github.com/origin-coding/Alacrity/commit/d53ef1f1b8369014e20575dd014aae7139d01080))
- fix GitHub actions workflow ([7439725](https://github.com/origin-coding/Alacrity/commit/7439725c68a4baab6741c4bd5a6daf87a6089529))
- fix GitHub actions workflow ([cd6f63d](https://github.com/origin-coding/Alacrity/commit/cd6f63da8778fef5df40ea1494a34dadd5d1fd81))
- fix GitHub actions workflow ([0fdd49f](https://github.com/origin-coding/Alacrity/commit/0fdd49fc0543eec6712021b9de383a5c34d87d19))
- fix GitHub actions workflow ([d05697a](https://github.com/origin-coding/Alacrity/commit/d05697a04cedd6949e274160948e46dc5a0b74b5))
- fix release-please config error ([db14006](https://github.com/origin-coding/Alacrity/commit/db140064d31ed4063aa8efaa96df4b9aa2e1b2ba))
- **release:** fix release-please config options ([cbe261f](https://github.com/origin-coding/Alacrity/commit/cbe261f674d0bc29aac3f58c3e8341f6db0f0709))
- update GitHub actions workflow ([e13675f](https://github.com/origin-coding/Alacrity/commit/e13675fe71ba8d44cfa50f447a22822fbc59722e))
- update GitHub actions workflow ([1c1bee2](https://github.com/origin-coding/Alacrity/commit/1c1bee2a1c67eed7f7636c2f3835f2cccfed44d5))
- update GitHub actions workflow ([b9477e4](https://github.com/origin-coding/Alacrity/commit/b9477e4e224b70c9e4a90cfc013d1c8aa79aab54))
- update GitHub actions workflow ([f229198](https://github.com/origin-coding/Alacrity/commit/f22919898562898c7791254912cd98b12b218427))
- update GitHub actions workflow ([fc07745](https://github.com/origin-coding/Alacrity/commit/fc077458681f77d14d188bd75b704524f09795f5))
- update GitHub actions workflow ([e181470](https://github.com/origin-coding/Alacrity/commit/e1814706d003b37288385825d98775b71e3a3abf))
- update GitHub actions workflow ([bcfb1f9](https://github.com/origin-coding/Alacrity/commit/bcfb1f9564a609a168e9f73b2e4f6f44885073fa))
- update GitHub actions workflow ([cd36bc8](https://github.com/origin-coding/Alacrity/commit/cd36bc819a28b5b275b1c455fd183ee9e1ad1bc1))

## [1.2.0](https://github.com/origin-coding/Alacrity/compare/v1.1.15...v1.2.0) (2023-11-27)

### Features

- **plugin:** add new plugin CssUnit, listing common used CSS length units ([1fed356](https://github.com/origin-coding/Alacrity/commit/1fed3566b72b6de9459726c244e52933f2c35084))
- **plugin:** add new plugin JsCompress ([cb3e40c](https://github.com/origin-coding/Alacrity/commit/cb3e40c93054396922475ee72dce25a768fe9225))

### Bug Fixes

- fix build options ([3b9b986](https://github.com/origin-coding/Alacrity/commit/3b9b98621ff03ceb209f74f1ee5289fde251ba43))
- fix release-please config error ([db14006](https://github.com/origin-coding/Alacrity/commit/db140064d31ed4063aa8efaa96df4b9aa2e1b2ba))

## [1.1.15](https://github.com/origin-coding/Alacrity/compare/v1.1.14...v1.1.15) (2023-11-22)

### Bug Fixes

- fix build options ([bd7569d](https://github.com/origin-coding/Alacrity/commit/bd7569d660ed79799932dc21987d7b455043b0de))
- fix build options ([0f06fc2](https://github.com/origin-coding/Alacrity/commit/0f06fc2b4fd3fcbbd28629ea19bd76079fa36f43))
- fix build options ([bfb0633](https://github.com/origin-coding/Alacrity/commit/bfb06331bc6829c727e3273ba745a9438ab2151c))
- fix build options ([073421f](https://github.com/origin-coding/Alacrity/commit/073421f882f4ea2f46ebc4456a3196c3f90e056e))

## [1.1.14](https://github.com/origin-coding/Alacrity/compare/v1.1.13...v1.1.14) (2023-11-22)

### Bug Fixes

- fix GitHub actions workflow ([73dd90a](https://github.com/origin-coding/Alacrity/commit/73dd90af6b58587066bdfff6e55b9671af7388da))

## [1.1.13](https://github.com/origin-coding/Alacrity/compare/v1.1.12...v1.1.13) (2023-11-22)

### Bug Fixes

- update GitHub actions workflow ([e13675f](https://github.com/origin-coding/Alacrity/commit/e13675fe71ba8d44cfa50f447a22822fbc59722e))

## [1.1.12](https://github.com/origin-coding/Alacrity/compare/v1.1.11...v1.1.12) (2023-11-21)

### Bug Fixes

- update GitHub actions workflow ([1c1bee2](https://github.com/origin-coding/Alacrity/commit/1c1bee2a1c67eed7f7636c2f3835f2cccfed44d5))

## [1.1.11](https://github.com/origin-coding/Alacrity/compare/v1.1.10...v1.1.11) (2023-11-21)

### Bug Fixes

- update GitHub actions workflow ([b9477e4](https://github.com/origin-coding/Alacrity/commit/b9477e4e224b70c9e4a90cfc013d1c8aa79aab54))

## [1.1.10](https://github.com/origin-coding/Alacrity/compare/v1.1.9...v1.1.10) (2023-11-21)

### Bug Fixes

- fix GitHub actions workflow ([85b1207](https://github.com/origin-coding/Alacrity/commit/85b120742de690da7ef7eda4ba03983d1930d6f4))

## [1.1.9](https://github.com/origin-coding/Alacrity/compare/v1.1.8...v1.1.9) (2023-11-21)

### Bug Fixes

- fix GitHub actions workflow ([69795dd](https://github.com/origin-coding/Alacrity/commit/69795dd6bc28999ca5521c1c81e7361ff82778ca))

## [1.1.8](https://github.com/origin-coding/Alacrity/compare/v1.1.7...v1.1.8) (2023-11-21)

### Bug Fixes

- fix GitHub actions workflow ([09ac4c5](https://github.com/origin-coding/Alacrity/commit/09ac4c5d241f5134a68c5571979e3f744502e9b9))

## [1.1.7](https://github.com/origin-coding/Alacrity/compare/v1.1.6...v1.1.7) (2023-11-21)

### Bug Fixes

- fix GitHub actions workflow ([1a2c022](https://github.com/origin-coding/Alacrity/commit/1a2c022c370f45717062f5dbf3445b4cf0567377))

## [1.1.6](https://github.com/origin-coding/Alacrity/compare/v1.1.5...v1.1.6) (2023-11-21)

### Bug Fixes

- fix GitHub actions workflow ([d53ef1f](https://github.com/origin-coding/Alacrity/commit/d53ef1f1b8369014e20575dd014aae7139d01080))

## [1.1.5](https://github.com/origin-coding/Alacrity/compare/v1.1.4...v1.1.5) (2023-11-21)

### Bug Fixes

- fix GitHub actions workflow ([7439725](https://github.com/origin-coding/Alacrity/commit/7439725c68a4baab6741c4bd5a6daf87a6089529))

## [1.1.4](https://github.com/origin-coding/Alacrity/compare/v1.1.3...v1.1.4) (2023-11-21)

### Bug Fixes

- fix GitHub actions workflow ([cd6f63d](https://github.com/origin-coding/Alacrity/commit/cd6f63da8778fef5df40ea1494a34dadd5d1fd81))

## [1.1.3](https://github.com/origin-coding/Alacrity/compare/v1.1.2...v1.1.3) (2023-11-21)

### Bug Fixes

- update GitHub actions workflow ([f229198](https://github.com/origin-coding/Alacrity/commit/f22919898562898c7791254912cd98b12b218427))

## [1.1.2](https://github.com/origin-coding/Alacrity/compare/v1.1.1...v1.1.2) (2023-11-21)

### Bug Fixes

- fix GitHub actions workflow ([0fdd49f](https://github.com/origin-coding/Alacrity/commit/0fdd49fc0543eec6712021b9de383a5c34d87d19))
- update GitHub actions workflow ([fc07745](https://github.com/origin-coding/Alacrity/commit/fc077458681f77d14d188bd75b704524f09795f5))
- update GitHub actions workflow ([e181470](https://github.com/origin-coding/Alacrity/commit/e1814706d003b37288385825d98775b71e3a3abf))

## [1.1.1](https://github.com/origin-coding/Alacrity/compare/v1.1.0...v1.1.1) (2023-11-21)

### Bug Fixes

- fix GitHub actions workflow ([d05697a](https://github.com/origin-coding/Alacrity/commit/d05697a04cedd6949e274160948e46dc5a0b74b5))
- update GitHub actions workflow ([bcfb1f9](https://github.com/origin-coding/Alacrity/commit/bcfb1f9564a609a168e9f73b2e4f6f44885073fa))
- update GitHub actions workflow ([cd36bc8](https://github.com/origin-coding/Alacrity/commit/cd36bc819a28b5b275b1c455fd183ee9e1ad1bc1))

## [1.1.0](https://github.com/origin-coding/Alacrity/compare/v1.0.0...v1.1.0) (2023-11-21)

### Features

- update workflow ([6f35a7a](https://github.com/origin-coding/Alacrity/commit/6f35a7ab5b7b7cff1fb89a1b2af70ea5d2984c5a))

## 1.0.0 (2023-11-21)

### Features

- add new build options ([dcb0b38](https://github.com/origin-coding/Alacrity/commit/dcb0b3819080ec7a401a00ff1f2fb6121ef7fec0))
- initial commit ([fae9230](https://github.com/origin-coding/Alacrity/commit/fae9230f9458cf82a867b97af0c398d0af3bb40b))
- update workflow ([61ad3bd](https://github.com/origin-coding/Alacrity/commit/61ad3bd5b87a75bfc3cc5d2e1872c380763150a2))
- update workflow ([b65091b](https://github.com/origin-coding/Alacrity/commit/b65091bfd992e80e9a4f96c380f860f5d8ea766b))
