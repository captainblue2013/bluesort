import { assert } from 'chai';
import { describe, it } from 'mocha';

import { mergeSort, bubbleSort, heapSort, insertionSort, quickSort, shellSort, simpleSelectionSort } from '../src';

describe('all', () => {
  it('mergeSort', () => {
    const arr: Array<number> = [3, 5, 1, 2, 7, 3, 5, 9, 2, 6, 11, 3, 7];
    const sorted: Array<number> = [1, 2, 2, 3, 3, 3, 5, 5, 6, 7, 7, 9, 11];
    assert.deepEqual(mergeSort(arr), sorted);
  });
  it('bubbleSort', () => {
    const arr: Array<number> = [3, 5, 1, 2, 7, 3, 5, 9, 2, 6, 11, 3, 7];
    const sorted: Array<number> = [1, 2, 2, 3, 3, 3, 5, 5, 6, 7, 7, 9, 11];
    assert.deepEqual(bubbleSort(arr), sorted);
  });
  it('quickSort', () => {
    const arr: Array<number> = [3, 5, 1, 2, 7, 3, 5, 9, 2, 6, 11, 3, 7];
    const sorted: Array<number> = [1, 2, 2, 3, 3, 3, 5, 5, 6, 7, 7, 9, 11];
    assert.deepEqual(quickSort(arr), sorted);
  });

  it('shellSort', () => {
    const arr: Array<number> = [3, 5, 1, 2, 7, 3, 5, 9, 2, 6, 11, 3, 7];
    const sorted: Array<number> = [1, 2, 2, 3, 3, 3, 5, 5, 6, 7, 7, 9, 11];
    assert.deepEqual(shellSort(arr), sorted);
  });

  it('simpleSelection', () => {
    const arr: Array<number> = [3, 5, 1, 2, 7, 3, 5, 9, 2, 6, 11, 3, 7];
    const sorted: Array<number> = [1, 2, 2, 3, 3, 3, 5, 5, 6, 7, 7, 9, 11];
    assert.deepEqual(simpleSelectionSort(arr), sorted);
  });

  it('heapSort', () => {
    const arr: Array<number> = [3, 5, 1, 2, 7, 3, 5, 9, 2, 6, 11, 3, 7];
    const sorted: Array<number> = [1, 2, 2, 3, 3, 3, 5, 5, 6, 7, 7, 9, 11];
    assert.deepEqual(heapSort(arr), sorted);
  });

  it('insertion', () => {
    const arr: Array<number> = [3, 5, 1, 2, 7, 3, 5, 9, 2, 6, 11, 3, 7];
    const sorted: Array<number> = [1, 2, 2, 3, 3, 3, 5, 5, 6, 7, 7, 9, 11];
    assert.deepEqual(insertionSort(arr), sorted);
  });
});