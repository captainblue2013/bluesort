

const swap = (arr, a, b) => {
    if (arr[a] === arr[b]) {
        return
    }
    arr[a] = arr[a] ^ arr[b]
    arr[b] = arr[a] ^ arr[b]
    arr[a] = arr[a] ^ arr[b]
}


module.exports = arr => {
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
}
