/**
 * 3 common JavaScript closure questions
 */

// 1. What will the following code output?
for (var i = 0; i < 3; i++) {
  // each of the inner functions refers to the same variable i, that is 3, 3, 3
  setTimeout(function() { console.log(i); }, 1000 + i);
}

for (var i = 0; i < 3; i++) {
  setTimeout((function(i_local) {
    // each of the inner functions kept a closure of i_local, that is 0, 1, 2
    return function () { console.log(i_local); }
  })(i), 2000 + i)
}

// 2. Write a function that would allow you to do partially apply (curly).
function createBase(baseNumber) {
  return function(N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  }
}

const addSix = createBase(6);

// 3. How would you use a closure to create a private counter?
function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
const c = counter();
c.add(6);

// hidden runtime response
window.global = {
  runtimeRes: `
    <span>addSix(10):</span> ${addSix(10)}
    <span>c.retrieve():</span> ${c.retrieve()}
  `
};
