/**
 * Determine overlapping numbers in ranges
 * @desc  You will be given an array with 5 numbers. 
 *        The first 2 numbers represent a range, and the next two numbers represent another range. 
 *        The final number in the array is X. 
 *        The goal of your program is to determine if both ranges overlap by at least X numbers. 
 *        For example, in the array [4, 10, 2, 6, 3] the ranges 4 to 10 and 2 to 6 overlap by at least 3 numbers (4, 5, 6),
 *        so your program should return true.
 */

function OverlappingRanges(arr) {

  // keep a count of how many numbers overlap
  var counter = 0;
  
  // loop through one of the ranges
  for (var i = arr[0]; i < arr[1]; i++) {

    // check if a number within the first range exists
    // in the second range
    if (i >= arr[2] && i <= arr[3]) { 
      counter += 1;
    }

  }
 
  // check if the numbers that overlap is equal to or greater
  // than the last number in the array
  return (counter >= arr[4]) ? true : false;
}

OverlappingRanges([4, 10, 2, 6, 3]); // true

// hidden runtime response
window.global = {
  runtimeRes: `<span>OverlappingRanges([4, 10, 2, 6, 3]):</span> ${OverlappingRanges([4, 10, 2, 6, 3])}`
};
