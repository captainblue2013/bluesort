'use strict';

let index = {};

index.quickSort = require('./lib/quickSort');

index.simpleSelection = require('./lib/simpleSelection');

index.insertionSort = require('./lib/insertion');

index.shellSort = require('./lib/shellSort');

module.exports = index;

console.log(index.shellSort([3,4,6,2,8,7,0,9,12],true));