"use strict";

function leetSpeak(str) {
  const subs = {
    A: "4",
    E: "3",
    G: "6",
    I: "1",
    O: "0",
    S: "5",
    T: "7",
  };

  return str
    .split("")
    .map((letter) => {
      const upper = letter.toUpperCase();
      return subs[upper] ? subs[upper] : letter.toLowerCase();
    })
    .join("");
}

console.log(leetSpeak("Leet")); // l337
console.log(leetSpeak("ORANGE")); // 0r4n63
console.log(leetSpeak("GIGANTIC")); // 6164n71c
