`use strict`;
/*create a text in the console where there are always 20 dashes 
before and after what ever the text was */
const challenge = ` Even or Odd `;
console.log(
  challenge
    .toUpperCase()
    .padStart(challenge.length + 20, `-`)
    .padEnd(challenge.length + 40, `-`)
);

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`This number : ${num} is an Even Number`);
  } else {
    console.log(`This number : ${num} is an Odd Number`);
  }
  // or use the ternary operator;
  const result = num % 2 === 0 ? `Even` : `Odd`;
  console.log(result); // to play in the console;
  return result; // to save in the memory;
}

evenOrOdd(-8);
