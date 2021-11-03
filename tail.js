const assertEqual = require("./assertEqual");

const tail = function(array) {
  let jar = [];
  for (let i = 1; i < array.length; i++) {
    jar.push(array[i]);
  }
  return jar;
};
module.exports = tail;
