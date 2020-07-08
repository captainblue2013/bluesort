/**
 * 堆排序
 * 第一步是建堆，从末尾插入一个元素，然后跟自己的父节点比较、交换，直到到达堆顶
 * 第二步，出堆，末尾元素与堆顶交换出堆，然后堆从顶点重排，
 * 重复上一步，得到一个有序的数组。
 * 一般来说堆排序是用于长时间维护一个有序结构，比如排行榜
 * 在反复有新元素进场，而又快速恢复有序的场景，效率很好。
 * O(nlogn)
 */
import { NumberArray } from './type';
import { swap } from './utils';

const rebuildFromTail = (arr: NumberArray, n: number) => {
  if (arr.length == 1) {
    return;
  }
  let i: number = 0;
  if (n % 2 === 0) {
    i = Math.floor(n / 2) - 1;
    if (arr[n] > arr[i]) {
      swap(arr, n, i);
    }
    if (i !== 0) {
      rebuildFromTail(arr, i);
    }
  } else {
    i = Math.floor(n / 2);
    if (arr[n] > arr[i]) {
      swap(arr, n, i);
    }
    if (i !== 0) {
      rebuildFromTail(arr, i);
    }
  }
};

const rebuildFromHead = (arr: NumberArray, n: number) => {
  if (arr.length == 1) {
    return;
  }
  if (arr[2 * n + 1] === undefined && arr[2 * n + 2] === undefined) {
    return;
  }
  switch (Math.max(arr[n], arr[2 * n + 1], arr[2 * n + 2])) {
  case arr[n]:
    break;
  case arr[2 * n + 1]:
    swap(arr, n, 2 * n + 1);
    n = 2 * n + 1;
    rebuildFromHead(arr, n);
    break;
  case arr[2 * n + 2]:
    swap(arr, n, 2 * n + 2);
    n = 2 * n + 2;
    rebuildFromHead(arr, n);
    break;
  }
};

export const heapSort = (arr: NumberArray): NumberArray => {
  const heap: NumberArray = [];
  for (let k = 0; k < arr.length; k++) {
    heap.push(arr[k]);
    rebuildFromTail(heap, heap.length - 1);
  }
  const result: NumberArray = [];
  while (heap.length) {
    swap(heap, 0, heap.length - 1);
    result.push(heap.pop() as number);
    rebuildFromHead(heap, 0);
  }

  return result.reverse();
};