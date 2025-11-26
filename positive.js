"use strict";

function allPositive(numbers) {
  return numbers.every((num) => num > 0);
}
console.log(allPositive([1, -8, 6, 7]));
console.log(allPositive([1, 5, 6, 7]));
