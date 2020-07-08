/**
 * 插入排序
 * 先构建一个最小的有序数组，然后没插入一个元素，从后往前比较，直到找到自己的位置
 * 比较次数和交换次数相同的数量级
 * 如果源输入数组相对有序，这个方法就越快
 * 原则是还是  O(n^2)
 */
import { NumberArray } from './type';

export const insertionSort = (arr: NumberArray): NumberArray => {
  const result: NumberArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (var k = result.length - 1; k >= 0 && (result[k] > arr[i]); k--) {
      result[k + 1] = result[k];
    }
    result[k + 1] = arr[i];
  }
  return result;
};

