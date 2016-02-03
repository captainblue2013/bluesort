'use strict';

let insertion = {};

insertion.count = 0;


insertion.sort = function (arr, count) {
    let result = [];
    for(let i=0;i<arr.length;i++){
        for(var k=result.length-1;k>=0 && (result[k]>arr[i]);k--){
            result[k+1] = result[k];
            insertion.count++ ;
        }
        result[k+1] = arr[i];

    }
    if(count){
        console.log('交换次数：'+insertion.count);
    }
    return result;
}

module.exports = insertion.sort;