"use strict";
function glueArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(glueArrays([1, 2, 3], [4, 5, 6]));
console.log(glueArrays([-10, undefined], [true, "waffles"]));
console.log(glueArrays([], []));
