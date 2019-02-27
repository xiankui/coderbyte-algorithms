/**
 * Generate all balanced bracket combinations
 */

var all = [];
let count = 0;
function parens(left, right, str) {
  count = count + 1;
  console.log(`%cparens ${left} ${right} ${str}`, 'color: red')
  // if no more brackets can be added then add the final balanced string
  if (left === 0 && right === 0) {
    all.push(str);
  }

  // if we have a left bracket left we add it
  if (left > 0) {
    console.log('%cparens left', 'color: green')
    parens(left - 1, right + 1, str + '(');
  }

  // if we have a right bracket left we add it
  if (right > 0) {
    console.log('%cparens right', 'color: blue')
    parens(left, right - 1, str + ')');
  }
}

// the parameters parens(x, y, z) specify:
// x: left brackets to start adding
// y: right brackets we can add only after adding a left bracket
// z: the string so far
parens(2, 0, '');

// hidden runtime response
window.global = {
  runtimeRes: `<span>parens:</span> ${parens(2, 0, '')}`
};
