console.log(`------------ Convert a String to an array --------------`);
function arrayOfString(str) {
  return str.split(` `);
  //split() returns a new array of the splitted pieces, so there is no need to spread in a new Array()
}
console.log(arrayOfString(`i love javaScript and my name is Ahmad haseeb`));

console.log(`------------ Split numbers reversed in a array --------------`);
console.log(String(15451).split(``).reverse());

function digitize(n) { 
    return new Array(...String(n)).map((num) => Number(num)).reverse();
    //  map() method returns a new array with the result of the function applied to all the values within the original array
}
console.log(digitize(35656356));

console.log(`------------ Count a specific values from an array  --------------`);
/* Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present). */
function countSheeps(arrayOfSheep) {
    // return arrayOfSheep.filter(isSheepPresent => isSheepPresent).length
    return arrayOfSheep.filter(Boolean).length;
    // Boolean is a function itself so we can make it substitute the function of the filter method 
    
    // filter as map() returns a new array with the values passed the test 
}
console.log(countSheeps([ true,
    false,
    true,
    true,
    true,]))
    
console.log(`------------ Make a negative   --------------`);    
// const returnNegative = (n) => (n >= 0 ? Number(`-${n}`) : n);
// never forget that template literals return it's output as a string 
const returnNegative = (n) => (n >= 0 ? -n : n); 
// you don't have to use template literals to assign the - sign, its already used as a minus,
// or much easier 
// return -Math.abs(num); 
console.log(returnNegative(5))

console.log(`------------ Jenny's secret   --------------`);    
function greet(name) {
  if (name == "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
} // the problem was that the if statement must be called first
// still using more than return word isn't ok as if one is functioning the following codes will stop
// and the function exits
// so you better use this layout 
//   return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";