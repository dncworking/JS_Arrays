"use strict";

function evens(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(evens([1, 8, 5, 4]));
