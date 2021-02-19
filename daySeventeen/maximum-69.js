/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let str = num.toString(); // convert to string
  let res = str.replace("6", "9"); // replace 6 with 9
  return Number(res); //return res in number
};

// Runtime: 104 ms, faster than 7.87% of JavaScript online submissions for Maximum 69 Number.
// Memory Usage: 38.5 MB, less than 76.38% of JavaScript online submissions for Maximum 69 Number.
