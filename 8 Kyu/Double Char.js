
console.log(
  `------------------- Double char -----------------`
); 
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

const repeatedLetters = (str) =>
  [...str.split(``)].map((x) => x.repeat(2)).join(``);
// or apply the split() directly on the string 
const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");
console.log(repeatedLetters(`Ahmad`));
console.log(doubleChar(`Ahmad`));
// split() creates an array of the splitted genera