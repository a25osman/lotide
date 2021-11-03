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
module.exports = middle;