const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

  // if (check === true) {
  //   console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  // } else {
  //   console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  // }
  return check;
};


// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS