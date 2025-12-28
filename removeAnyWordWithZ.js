"use strict";

function removeAnyWordWithZ() {
  const words = ["pizza", "phone", "Zebra", "samsung", "ZOO", "Computer"];
  let wordsNoZ = [];
  for (let i = 0; i < words.length; i++) {
    if (!words[i].toLowerCase().includes("z")) {
      wordsNoZ.push(words[i]);
    }
  }
  return wordsNoZ;
}
console.log(removeAnyWordWithZ());
