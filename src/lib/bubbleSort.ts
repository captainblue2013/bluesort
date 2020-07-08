/**
 * 冒泡排序
 * 每一轮，从头开始，邻近的两个比较，大的后移
 * 如此一轮过后，最后一个肯定是最大的。
 * 然后对前 n-1 个元素执行一样的逻辑，
 * 实际上比较次数是 (n-1)+(n-2)...+1
 * 大O表示法   O(n^2)
 */
import { NumberArray } from './type';
import { swap } from './utils';

export const bubbleSort = (arr: NumberArray): NumberArray => {
  let len = arr.length;
  while (len > 0) {
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
    len--;
  }
  return arr;
}