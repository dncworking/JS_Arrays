"use strict";

function sumNumbers(num) {
  return num.reduce((total, current) => total + current, 0);
}

console.log(sumNumbers([1, 4, 8]));
