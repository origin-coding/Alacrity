import CryptoJs, { lib } from "crypto-js";

function uint8ArrayToWordArray(uint8Array: Uint8Array): lib.WordArray {
  const words: number[] = [];
  for (let i = 0; i < uint8Array.length; i += 4) {
    const word =
      (uint8Array[i] << 24) |
      (uint8Array[i + 1] << 16) |
      (uint8Array[i + 2] << 8) |
      uint8Array[i + 3];
    words.push(word);
  }
  return lib.WordArray.create(words, uint8Array.length);
}

function base64Encode(src: string | Uint8Array): string {
  let wordArray: CryptoJs.lib.WordArray;
  if (src instanceof Uint8Array) {
    wordArray = uint8ArrayToWordArray(src);
  } else {
    wordArray = CryptoJs.enc.Utf8.parse(src);
  }

  return CryptoJs.enc.Base64.stringify(wordArray);
}

// Only supports decode to string.
function base64Decode(src: string): string {
  return CryptoJs.enc.Base64.parse(src).toString(CryptoJs.enc.Utf8);
}

export { base64Decode, base64Encode };
