/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  // Initialize i and create empty target array
  let i = 0;
  let target = [];
  // Loop through index and num arrays
  for (i; i < nums.length; i++) {
    // Insert into target array at the specified index[i], (deleting 0 items first), nums[i] value.
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};

/**
 * Runtime: 80 ms, faster than 55.56% of JavaScript online submissions for Create Target Array in the Given Order.
 * Memory Usage: 38.5 MB, less than 75.61% of JavaScript online submissions for Create Target Array in the Given Order.
 */
