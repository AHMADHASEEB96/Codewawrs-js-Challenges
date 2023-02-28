console.log(`square root or not to square root`);
// from the array if the number has a square root get it . otherwise get the power two of it

function squareOrSquareRoot(array) {
  let arrayOfSquares = [];
  array.forEach((el) => {
    arrayOfSquares.push(
      // is the sqrt of the number is integer ? if yes then it has a square root , now get it . if no then multiply it
      Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el ** 2
    );
  });
  console.log(arrayOfSquares);
  // or you better use map to get a new array of the resultants directly.
  const resultantsArr = array.map((el) =>
    Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el ** 2
  );
  console.log(resultantsArr);
}

squareOrSquareRoot([4, 3, 9, 7, 2, 1]); //[2, 9, 3, 49, 4, 1]
// instead of using Number.isInteger() we can devide the square root by 1 using the module operator and see if it equals 0 then it has a square root
// Math.sqrt(el) % 1 == 0 ? Math.sqrt(el) : el*el;
// we better save the repeated value in a variable
// const sr = Math.sqrt(el)
//sr % 1 == 0 ? sr : el*el; by trying that didn't work as we cant declare a variable inside the map method i think , also we would'nt declare it outside as the parameter(el) won't be recognized outside the method function
