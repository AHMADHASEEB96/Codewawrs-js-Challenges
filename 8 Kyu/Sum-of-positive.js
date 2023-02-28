function callChallengeSumOfPositives() {
  /*create a text in the console where there are always 20 dashes 
before and after what ever the text was */
  const challenge = ` sum of positives `;
  console.log(
    challenge
      .toUpperCase()
      .padStart(challenge.length + 20, `-`)
      .padEnd(challenge.length + 40, `-`)
  );
}
callChallengeSumOfPositives();
// still you can put hte number of dashes wanted manually in a string and log it to the console

function positiveSum(arr) {
  //   let sum = 0;

  //  const acc =  arr.forEach((num) => (num > 0 ? (sum += num) : 0));
  // return sum
  // return arr.reduce((acc, current) => current > 0 ? current += acc : 0)
  // if the value is positive add it to current and  return the sum or return 0
  // some one else's solution
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
  /* 
   reduce() takes tow parameters, the function and the initial value , the initial value is the value that reduce method starts with as the first current value,
   so here it adds the first value of the array to  0 (considering that the first value is now the second as we already use 0 as the initial or the first value), and so it returns the initial value only if the arr is empty;
   */
}

console.log(positiveSum([-1, -2, -3, -4, -5, 4, 2]));
