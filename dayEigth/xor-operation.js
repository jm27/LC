/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  // Create nums array and result variables
  let nums = [];
  let result = start;
  let i = 0;
  // Loop trough nums array
  for (i; i < n; i++) {
    nums.push(start + 2 * i);
    if (i >= 1) {
      result = result ^ nums[i];
    }
  }
  return result;
};
/**
 * Runtime: 88 ms, faster than 14.24% of JavaScript online submissions for XOR Operation in an Array.
 * Memory Usage: 38.6 MB, less than 44.60% of JavaScript online submissions for XOR Operation in an Array.
 */
