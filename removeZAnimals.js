"use strict";

function removeZAnimals() {
  const animals = ["alligator", "zebra", "crocodile", "giraffe"];
  let animalsWithoutZ = [];
  for (let i = 0; i < animals.length; i++) {
    if (!animals[i].includes("z", "Z")) {
      animalsWithoutZ.push(animals[i]);
    }
  }
  return animalsWithoutZ;
}

console.log(removeZAnimals());
