"use stirct";

function reverseWords(str) {
  return str.split("").reverse().join("");
}
console.log(reverseWords("skoob"));


//"skoob".split("")   // ["s","k","o","o","b"]
//.reverse()          // ["b","o","o","k","s"]
//.join("")           // "books"