/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  // Create counter variable
  let evenNums = 0;
  // Loop through array and convert to string to get length
  nums.forEach((el) => {
    // Check if length is even add 1 to evenNums
    if (el.toString().length % 2 == 0) evenNums++;
  });
  return evenNums;
};

/**
 * Runtime: 84 ms, faster than 57.24% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 * Memory Usage: 39.6 MB, less than 39.09% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 */
