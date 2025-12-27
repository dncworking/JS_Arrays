"use strict";

function positives(arr) {
  return arr.filter((num) => num > 0);
}
console.log(positives([1, -3, 5, -3, 0]));
console.log(positives([1, 2, 3]));
console.log(positives([-1, -2, -3]));
