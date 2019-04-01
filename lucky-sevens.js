/**
 * Lucky sevens
 * @desc Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.
 */

function lucky_sevens(arr) {
  const len = arr.length;

  // it is not possible when arr length less than 3
  if (len < 3) {
    return false;
  }

  // because we know there are at least 3 elements we can
  // start the loop at the 3rd element in the array (i=2)
  // and check it along with the two previous elements (i-1) and (i-2)
  for (let i = 2; i < len; i += 1) {
    if (arr[i - 2] + arr[i - 1] + arr[i] === 7) {
      return true;
    }
  }

  return false;
}

// hidden runtime response
window.global = {
  runtimeRes: `
      <span>lucky_sevens([2, 1, 5, 1, 0]) is</span> ${lucky_sevens([
        2,
        1,
        5,
        1,
        0
      ])}
    `
};
