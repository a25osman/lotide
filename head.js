const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let foo = array[0];
  return foo;
};

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");