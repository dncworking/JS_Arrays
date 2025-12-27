"use strict";
function integers(arr) {
  return arr.filter((num) => Number.isInteger(num));
}
console.log(integers([3.14, 2.4, 7, 8.1, 2]));
