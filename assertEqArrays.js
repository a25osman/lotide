const eqArrays = function(actual, expected) {
  let check = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      check = false;
    }
  }

  if (actual.length !== expected.length) {
    check = false;
  }
  return check;
};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// (assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS