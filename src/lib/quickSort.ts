import { NumberArray } from './type';

/**
 * 交换数组指定下标的值
 * @param {数组} arr 
 * @param {下标1} a 
 * @param {下标2} b 
 */
const swap = (arr: NumberArray, a: number, b: number) => {
  if (arr[a] !== arr[b]) {
    arr[a] = arr[a] ^ arr[b];
    arr[b] = arr[a] ^ arr[b];
    arr[a] = arr[a] ^ arr[b];
  }
};

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



