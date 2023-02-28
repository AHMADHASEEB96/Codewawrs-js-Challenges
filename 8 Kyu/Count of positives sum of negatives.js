// create the functionss
function CountAndSum(numArray) {
  // create an array and use twe functions to return two values in this array
//   return [
//     numArray.filter((x) => x > 0).length,
//     numArray.filter((x) => x < 0).reduce((b, a) => b + a, 0),
//   ];
    let count = numArray.filter((x) => x > 0).length
    let sumNegatives = numArray.filter((x) => x < 0).reduce((b, a) => b + a, 0)
    return [count, sumNegatives]
}

console.log(
  CountAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
);
