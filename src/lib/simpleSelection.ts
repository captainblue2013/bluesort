/**
 * 简单选择排序
 * i从0位开始，每轮找到数组里最小的一个，让后放在第i位，
 * 实际需要比较 n+(n-1)...+1次
 * 大O表达为 O(n^2)
 */
import { NumberArray } from './type';
import { swap } from './utils';

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
