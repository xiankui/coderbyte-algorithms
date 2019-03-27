/**
 * Sum of several arrays
 * @desc You will be given an array of several arrays that each contain integers
 *       and your goal is to write a function that will sum up all the numbers in all the arrays.
 *       For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22.
 */

function sum_arrays(arr) {
  const flat = arr.reduce((flat, item) => {
    return flat.concat(item);
  }, []);

  const sum = flat.reduce((sum, i) => sum + i, 0);

  return sum;
}

sum_arrays([[3, 2], [1], [4, 12]]); // 22

// hidden runtime response
window.global = {
  runtimeRes: `
    <span>sum_arrays([[3, 2], [1], [4, 12]]):</span> ${sum_arrays([
      [3, 2],
      [1],
      [4, 12]
    ])}
  `
};
