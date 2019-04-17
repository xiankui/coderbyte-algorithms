/**
 * Implement bubble sort
 */

function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function bubblesort(arr) {
  let swaped = true;

  // keep going unless no elements can be swapped anymor
  while (swaped) {
    // set swapped to false so that the loop stops
    // unless two element are actually swapped
    swaped = false;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
        swaped = true;
      }
    }
  }

  return arr;
}

const arr = [4, 2, 5, 3];

bubblesort(arr); // [2, 3, 4, 5]

// hidden runtime response
window.global = {
  runtimeRes: `<span>bubblesort arr is:</span> ${bubblesort(arr)}`
};
