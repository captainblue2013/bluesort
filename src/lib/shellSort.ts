/**
 * shell排序，插入排序的升级版，
 * 首先定义一个step，一般为长度的一半，核心思路是，通过step把原数组分成若干小组
 * 在小组内先执行插入排序，然后step减半，进入下一轮。
 * 这样做在step收窄的过程中，原数组是不断趋向有序，前面在插入排序的章节已经说过，
 * 原数组相对有序，很影响插入排序的效率。
 */
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