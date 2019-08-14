module.exports = arr => {
    let step = Number.parseInt(arr.length / 2, 10);
    while (step) {
        for (let i = step; i < arr.length; i++) {
            const tmp = arr[i];
            for (var j = i - step; j >= 0 && (arr[j] > tmp); j -= step) {
                arr[j + step] = arr[j];
            }
            arr[j + step] = tmp;
        }
        step = Number.parseInt(step / 2, 10);
    }
    return arr;
}