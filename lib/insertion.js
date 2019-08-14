module.exports = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (var k = result.length - 1; k >= 0 && (result[k] > arr[i]); k--) {
            result[k + 1] = result[k];
        }
        result[k + 1] = arr[i];
    }
    return result;
}

