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

const flatten = function (list) {
  let fin = [];
  for (let i = 0; i < list.length; i++){
    if (Array.isArray(list[i]) === true) {
      for (let val of list[i]) {
        fin.push(val);
      }
    } else {
      fin.push(list[i]);
    }
  }
  return fin;
};

console.log(flatten([1, 2, [3, 4], 5, [6,7,8,9,10]]));