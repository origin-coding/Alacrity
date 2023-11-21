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

![Features](./assets/features.png)
Navigation drawer on the left side displays all categories of Alacrity's plugins.
Click them to filter plugins by category.

Some useful utils are listed on top of Alacrity, such as searching plugins, changing locales and themes.

At main part of Alacrity's window are plugins, you can use them by clicking the card.
You can also add them to your favorite list by clicking the star icon on top right.

# Plugins provided

1. Base64：Encrypt/decrypt text or binary data with Base64 algorithm.
2. BaseConvert：Cast number's base, supported bases are: binary, octal, decimal and hexadecimal.
3. FloatConvert：Cast IEEE 754 float number to binary or hexadecimal form, also supports single-precision float number.
4. HashUtils：Use common hash algorithms to hash text or binary data.
5. QRCode：Generate common-used QR codes and save them to an image.
6. RequestHeaders：View HTTP response's headers.
7. StatusCode：HTTP response's status codes.
8. URLParse：Parse a URL and display its parts. 
9. UUID：Generate random UUIDs and validate a UUID.

# To-do

1. [ ] Multi-language support: translate more plugins.
2. [ ] More plugins: provide 20-30 plugins before 2024.03.
