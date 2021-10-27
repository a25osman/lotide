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

// ACTUAL FUNCTION
const middle = function(array) {
  let res = [];
  const len = array.length;
  if (len % 2 === 0 && len > 2) {
    res.push(array[len / 2 - 1]);
    res.push(array[len / 2]);
  } else if (len % 2 !== 0 && len > 2) {
    res.push(array[Math.floor(len / 2)]);
  }
  return res;
};
