/**
 * Subset sum problem
 */

function ArrayAdditionI(arr) {
  // get largest number and remove it from array
  var sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);

  // power set
  var sets = [[]];

  // generate the power set and for each new set
  // check if the temporary sum equals our sum above
  for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
      var temp = sets[j].concat(arr[i]);
      sets.push(temp);
      var s = temp.reduce(function(p, c) {
        return p + c;
      });
      if (s === sum) {
        return true;
      }
    }
  }
  return false;
}

console.log(ArrayAdditionI([1, 3, 2, 9, 7])); // true

console.log(ArrayAdditionI([1, 3, 2, 9]));    // false

// hidden runtime response
window.global = {
  runtimeRes: `
    <span>ArrayAdditionI([1, 3, 2, 9, 7]):</span> true
    <span>ArrayAdditionI([1, 3, 2, 9]):</span> false
  `
};
