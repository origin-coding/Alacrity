import { lib } from "crypto-js";

export default function (uint8Array: Uint8Array): lib.WordArray {
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
