// sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumWithoutMinAndMax(array) {
  if (array) { // if the parameter is a true value , means not null or another falthy one.
    const sum = array.reduce((acc, current) =>
      !Math.min(...array) && !Math.max(...array) ? (acc += current) : 0,0 // 2nd 0 is the initial value
    );
    console.log(sum);
    // // another way
    let summation = 0;
    array.forEach((value) =>
      value != Math.min(...array) && value != Math.max(...array)
        ? (summation += value)
        : 0
    );
    console.log(summation); // worked fine, but it removes all the versions of the min and max numbers ,
    // also we can filter the array much more easier using filter()
    const filteredArray = array.filter(
      (value) => value != Math.max(...array) && value != Math.min(...array)
    );
    console.log(filteredArray);
    // to remove only one version we need to sort the array at first then remove the last and the first values

    const sortedArray = array.sort((a, b) => a - b);
    sortedArray.pop();
    sortedArray.shift(); // use filter ()
    // we can slice between those tow values instead of removing using pop() and () shift()
    const slicedSortedArray = sortedArray.slice(1,-1)
    const sumSortedArray = sortedArray.reduce((a, b) => (a += b), 0);
    const sumSlicedSortedArray = slicedSortedArray.reduce((a, b) => (a += b), 0);
    console.log(sortedArray);
    console.log(sumSortedArray);
    console.log(sumSlicedSortedArray);
    return sumSortedArray;
  } else {
    return 0;
  }
 
}

sumWithoutMinAndMax([1, 2, 9, 8, 6, 4, 1, 5, 5, 7, 9]); // removed all version of 1 and 9
sumWithoutMinAndMax([3]); // removes it and read the initial value
sumWithoutMinAndMax([3, 5]); // removes both and read the initial value
sumWithoutMinAndMax([]); // no values so it returns the initial value
sumWithoutMinAndMax(null); // false value , code isn't read,

// const anArr = [1, 3, 4]
// console.log(Math.min(...anArr));
