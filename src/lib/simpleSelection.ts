import { NumberArray } from './type';


const swap = (arr: NumberArray, a: number, b: number) => {
  if (arr[a] !== arr[b]) {
    arr[a] = arr[a] ^ arr[b];
    arr[b] = arr[a] ^ arr[b];
    arr[a] = arr[a] ^ arr[b];
  }
};


export const simpleSelectionSort = (arr: NumberArray): NumberArray => {
  for (let i = 0; i < arr.length; i++) {
    let pos = i;
    for (let i = pos + 1; i < arr.length; i++) {
      if (arr[pos] > arr[i]) {
        pos = i;
      }
    }
    if (arr[i] > arr[pos]) {
      swap(arr, i, pos);
    }
  }
  return arr;
};
