"use strict";

function findLongestWord(str) {
  return str.split(" ").reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}
console.log(findLongestWord("a book full of dogs"));
