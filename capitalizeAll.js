"use strict";

function capitalizeAll(sentance) {
  return sentance
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeAll("hello world")); //Hello World
console.log(capitalizeAll("every day is like sunday")); //Every Day Is Like Sunday
