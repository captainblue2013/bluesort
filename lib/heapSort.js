const swap = (arr, a, b) => {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

const rebuildFromTail = (arr, n) => {
  if (arr.length == 1) {
    return;
  }
  let i = 0;
  if (n % 2 === 0) {
    i = Number.parseInt(n / 2, 10) - 1
    if (arr[n] > arr[i]) {
      swap(arr, n, i);
    }
    if (i !== 0) {
      rebuildFromTail(arr, i)
    }
  } else {
    i = Number.parseInt(n / 2, 10)
    if (arr[n] > arr[i]) {
      swap(arr, n, i);
    }
    if (i !== 0) {
      rebuildFromTail(arr, i)
    }
  }
}

const rebuildFromHead = (arr, n) => {
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
      swap(arr, n, 2 * n + 1)
      n = 2 * n + 1
      rebuildFromHead(arr, n)
      break;
    case arr[2 * n + 2]:
      swap(arr, n, 2 * n + 2)
      n = 2 * n + 2
      rebuildFromHead(arr, n)
      break;
  }
}

module.exports = arr => {
  const heap = [];
  for (let k = 0; k < arr.length; k++) {
    heap.push(arr[k]);
    rebuildFromTail(heap, heap.length - 1);
  }
  const result = [];
  while (heap.length) {
    swap(heap, 0, heap.length - 1)
    result.push(heap.pop())
    rebuildFromHead(heap, 0)
  }

  return result.reverse();
}