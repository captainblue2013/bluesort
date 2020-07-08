/**
 * 快速排序
 * 每次选取一个元素做基准，一般可以选第一个，无所谓的。
 * 然后遍历，把小于基准的放一组，大于基准的放一组，这时基准元素在中间。
 * 得到的两组再重复上面的方法，直到无法拆分，整个数组有序。
 * 一般情况下是  O(nlogn)， 
 * 最坏情况下是  O(n^2) ，指的是原数组恰好“反有序”，每次分组的时候，两边很不平衡。
 */
import { NumberArray } from './type';
import { swap } from './utils';


/**
 * 以数组第一个元素为基准，将小于基准的放到左边，大于基准的放到右边，返回基准值的最后下标
 * @param {数组} arr 
 * @param {开始位置} start 
 * @param {结束位置} end 
 */
const division = (arr: NumberArray, start: number, end: number): number => {
  const base = arr[start];
  while (start < end) {
    while (start < end && arr[end] >= base) {
      end--;
    }
    swap(arr, start, end);

    while (start < end && arr[start] <= base) {
      start++;
    }
    swap(arr, start, end);
  }
  return start;
};

/**
 * 通过递归分治，将数组不断切分成小片段，
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 */
const round = (arr: NumberArray, start: number, end: number): NumberArray => {
  if (start < end) {
    const flag = division(arr, start, end);
    round(arr, start, flag - 1);
    round(arr, flag + 1, end);
  }
  return arr;
};

export const quickSort = (arr: NumberArray): NumberArray => {
  round(arr, 0, arr.length - 1);
  return arr;
};



