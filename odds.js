"use strict";

function odds(arr) {
  return arr.filter((num) => num % 2 !== 0);
}
console.log(odds([1, 5, 8, 4]));
``