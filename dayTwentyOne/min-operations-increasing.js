/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  // Create variable for operation counter
  let operationCount = 0;
  let i = 1;
  // Loop trough nums
  while (i < nums.length) {
    // If second element is less than or equal to first element increment by one
    if (nums[i] <= nums[i - 1]) {
      nums[i]++;
      // Add operation
      operationCount++;
    } else if (nums[i] > nums[i - 1]) {
      i++;
    }
  }
  return operationCount;
};

/**
 * Runtime: 748 ms, faster than 13.16% of JavaScript online submissions for Minimum Operations to Make the Array Increasing.
 * Memory Usage: 40.8 MB, less than 25.44% of JavaScript online submissions for Minimum Operations to Make the Array Increasing.
 */
