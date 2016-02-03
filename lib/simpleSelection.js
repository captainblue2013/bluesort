'use strict';

let simpleSelection = {};
simpleSelection.count = 0;

simpleSelection.swap = function (arr,a,b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;

    simpleSelection.count++;
}

simpleSelection.sort = function (arr) {
    simpleSelection.count = 0;
    for(let i = 0; i < arr.length;i++){
        let pos = i;
        for(let i = pos+1;i < arr.length;i++){
            if(arr[pos] > arr[i]){
                pos = i;
            }
        }
        if(arr[i] > arr[pos]){
            simpleSelection.swap(arr,i,pos);
        }
    }
    return arr;
}

module.exports = simpleSelection.sort;

console.log(simpleSelection.sort([3,5,1,2,7,3,5,9,2,6,11,3,7]));
console.log(simpleSelection.count);