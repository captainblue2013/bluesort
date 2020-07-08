/**
 * 归并排序
 * 把大的问题拆解为小的问题，分治
 * 把两个有序的序列合并为一个有序的序列
 * O(nlogn）
 */
import { NumberArray } from './type';

const merge = (a: NumberArray, b: NumberArray): NumberArray => {
  const result: NumberArray = [];
  while (a.length || b.length) {
    if (!a.length) {
      result.push(b.shift() as number)
    } else if (!b.length) {
      result.push(a.shift() as number)
    } else {
      result.push(a[0] < b[0] ? a.shift() as number : b.shift() as number)
    }
  }
  return result;
}

export const mergeSort = (arr: NumberArray): NumberArray => {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}