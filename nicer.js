"use strict";

function nicer(sentence) {
  const forbidden = ["heck", "darn", "dang", "crappy"];
  return sentence
    .split(" ")
    .filter((word) => !forbidden.includes(word))
    .join(" ");
}
console.log(nicer("mom get the heck in here and bring me a darn sandwich."));
