'use strict';

let simpleSelection = {};
simpleSelection.count = 0;

simpleSelection.swap = function (arr,a,b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;

    simpleSelection.count++;
}

simpleSelection.sort = function (arr,count) {
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
    if(count){
        console.log('交换次数：'+simpleSelection.count);
    }
    return arr;
}

module.exports = simpleSelection.sort;
