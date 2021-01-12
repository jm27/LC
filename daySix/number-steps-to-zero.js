/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  // Save response in variable
  let counter = 0;
  // Loop through number until it equal 0
  while (num != 0) {
    // if num even divide by 2
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num--;
    }
    counter++;
  }
  return counter;
};

/**
 * Runtime: 80 ms, faster than 68.90% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
 * Memory Usage: 38.5 MB, less than 69.72% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
 */
