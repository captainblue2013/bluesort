'use strict';

let shellSort = {};

shellSort.count = 0;

shellSort.sort = function (arr, count) {console.log(arr);
    shellSort.count = 0;
    let step = Number.parseInt(arr.length/2);
    while(step){
        for(let i=step;i<arr.length;i++){
            var tmp = arr[i];
            for(var j=i-step;j>=0 && (arr[j]>tmp);j-=step){
                arr[j+step] = arr[j];
                shellSort.count++;
            }
            arr[j+step] = tmp;
        }
        step = Number.parseInt(step/2);
    }
    if(count){
        console.log('交换次数：'+shellSort.count);
    }
    return arr;
}

module.exports = shellSort.sort;