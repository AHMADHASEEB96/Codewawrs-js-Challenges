console.log(`------------------- find a needle in the haystack -----------------`) 
const findTheNeedle = (haystackArr) =>
  ` Found the needle at position ${haystackArr.indexOf(`needle`)}`;
console.log(findTheNeedle([`needle`]));