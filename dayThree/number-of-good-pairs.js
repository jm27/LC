/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  // Save result in variable
  let goodPairs = 0;
  let i = 0;
  // Loop trough each number
  for (i; i < nums.length - 1; i++) {
    // Loop to compare each number
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        goodPairs++;
      }
    }
  }
  return goodPairs;
};

/**
 * Runtime: 80 ms, faster than 53.80% of JavaScript online submissions for Number of Good Pairs.
 * Memory Usage: 38.3 MB, less than 68.09% of JavaScript online submissions for Number of Good Pairs.
 */
