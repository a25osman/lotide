const assertArraysEqual = function(actual, expected) {
  let check = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      check = false;
    }
  }

  if (actual.length !== expected.length) {
    check = false;
  }

  if (check === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// assertArraysEqual([1, 2, 3], [1, 2, 3])