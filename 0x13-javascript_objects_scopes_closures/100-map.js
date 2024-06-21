#!/usr/bin/node
/* a script that imports an array and computes a new array. */

const list = require('./100-map.js ').list;
console.log(list);
console.log(list.map((x, i) => x * i));
