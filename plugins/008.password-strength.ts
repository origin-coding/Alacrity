// noinspection JSUnusedGlobalSymbols

import { type OptionsType, zxcvbnOptions } from "@zxcvbn-ts/core";
import * as zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
import * as zxcvbnEnPackage from "@zxcvbn-ts/language-en";
import { matcherPwnedFactory } from "@zxcvbn-ts/matcher-pwned";

import usePluginsStore from "~/stores/plugins";
import { AlacrityPluginType } from "~/types/alacrity-plugin";

export default defineNuxtPlugin({
  name: "Password Strength",
  parallel: false,
  setup() {
    const { addPlugin } = usePluginsStore();

    addPlugin({
      id: "password-strength",
      type: AlacrityPluginType.encode,
    });

    // Init options for zxcvbn
    const matcherPwned = matcherPwnedFactory(fetch, zxcvbnOptions);
    zxcvbnOptions.addMatcher("pwned", matcherPwned);

    const options: OptionsType = {
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnEnPackage.dictionary,
      },
      graphs: zxcvbnCommonPackage.adjacencyGraphs,
      useLevenshteinDistance: true,
    };

    zxcvbnOptions.setOptions(options);
  },
});
