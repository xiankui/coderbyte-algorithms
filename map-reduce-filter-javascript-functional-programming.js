/**
 * Map, reduce, and filter - JavaScript functional programming
 */

const nums = [1, 2, 3, 4];

// The map function creates a new array by calling a specific function on each element in an initial array.

const increase = nums.map(function(elem) {
  return elem + 1;
});

console.log(increase); // [2, 3, 4, 5]

// The reduce function applies a specific function to all the elements in an array and reduces it to a single value.
const sum = nums.reduce(function(prevVal, curVal, curIndex, origArr) {
  return prevVal + curVal;
});

console.log(sum); // => 10

// The filter function creates a new array with all elements from an original array that pass a certain functions test.
const greater = nums.filter(function(elem) {
  return elem > 2;
});

console.log(greater); // [3, 4]

// hidden runtime response
window.global = {
  runtimeRes: `
    <span>increase:</span> ${increase}
    <span>sum:</span> ${sum}
    <span>greater:</span> ${greater}
  `
};
