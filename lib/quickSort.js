'use strict';

let quickSort = {};

quickSort.count = 0;

quickSort.swap = function (arr,a,b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;

    quickSort.count++;
}

quickSort.division = function (arr,start,end) {
    let base = arr[start];
    while(start < end){
        while(start<end && arr[end]>=base){
            end-- ;
        }
        quickSort.swap(arr,start,end);

        while(start<end && arr[start]<=base){
            start++;
        }
        quickSort.swap(arr,start,end);
    }
    return start;
}

quickSort.round = function (arr,start,end) {
    if(start<end){
        let flag = quickSort.division(arr,start,end);
        quickSort.round(arr,start,flag-1);
        quickSort.round(arr,flag+1,end);
    }
    return arr;
}

quickSort.sort = function (arr) {
    quickSort.count = 0;
    quickSort.round(arr,0,arr.length-1);
    return arr;
}


module.exports = quickSort.sort;

console.log(quickSort.sort([3,5,1,2,7,3,5,9,2,6,11,3,7]));
console.log(quickSort.count);