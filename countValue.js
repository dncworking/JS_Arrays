"use strict";

function countValue(arr, value) {
  return arr.filter((item) => item === value).length;
}
console.log(countValue([1, 2, 3, 4, 5], 2));
console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));
console.log(countValue(["hello", "bananas", "hello"], "hello"));
console.log(countValue(["hello", "bananas", "hello"], "giraffe"));
