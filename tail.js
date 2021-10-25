const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let jar = [];
  for (let i = 1; i < array.length; i++) {
    jar.push(array[i]);
  }
  return jar;
};

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(tail(words)); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!
