var x = 17;
var evalX = eval("'use strict'; var x = 42; x");
console.log(x === 17);
console.log(evalX === 42);