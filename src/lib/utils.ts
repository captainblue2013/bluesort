import { NumberArray } from "./type";

export const swap = (arr: NumberArray, a: number, b: number) => {
  if (arr[a] !== arr[b]) {
    arr[a] = arr[a] ^ arr[b];
    arr[b] = arr[a] ^ arr[b];
    arr[a] = arr[a] ^ arr[b];
  }
};