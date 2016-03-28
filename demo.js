/**
 * Created by lanhao on 16/2/3.
 */

var quickSort = require('./index').quickSort;

var sort = require('./index');

console.log(sort.quickSort([3,5,1,2,7,3,5,9,2,6,11,3,7],true));
console.log(sort.insertionSort([3,5,1,2,7,3,5,9,2,6,11,3,7],true));
console.log(sort.shellSort([3,5,1,2,7,3,5,9,2,6,11,3,7],true));
console.log(sort.simpleSelection([3,5,1,2,7,3,5,9,2,6,11,3,7],true));