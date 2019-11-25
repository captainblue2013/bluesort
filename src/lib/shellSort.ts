import { NumberArray } from './type';

export const shellSort = (arr: NumberArray): NumberArray => {
  let step: number = Math.floor(arr.length / 2);
  while (step) {
    for (let i = step; i < arr.length; i++) {
      const tmp = arr[i];
      for (var j = i - step; j >= 0 && (arr[j] > tmp); j -= step) {
        arr[j + step] = arr[j];
      }
      arr[j + step] = tmp;
    }
    step = Math.floor(step / 2);
  }
  return arr;
};