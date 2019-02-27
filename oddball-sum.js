/**
 * Oddball sum
 */

function oddball_sum(nums) {
  return nums.filter(num => num % 2 === 1).reduce((prev, cur) => prev + cur);
}

console.log('oddball_sum [1, 2, 3, 4, 5] is ', oddball_sum([1, 2, 3, 4, 5]));

// hidden runtime response
window.global = {
  runtimeRes: `<span>oddball_sum [1, 2, 3, 4, 5] is</span> ${oddball_sum([1, 2, 3, 4, 5])}`
}
